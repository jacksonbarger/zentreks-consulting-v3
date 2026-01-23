import { NextRequest, NextResponse } from "next/server";
import {
  checkRateLimit,
  getClientIP,
  subscribeRateLimit,
} from "@/lib/rate-limit";
import {
  escapeHtml,
  sanitizeEmail,
  sanitizeInput,
  INPUT_LIMITS,
} from "@/lib/sanitize";

interface SubscribeData {
  email: string;
  firstName?: string;
  source?: "newsletter" | "lead-magnet" | "footer";
  leadMagnet?: string;
  // Honeypot field - should always be empty
  website?: string;
}

// Allowed lead magnet identifiers (whitelist)
const ALLOWED_LEAD_MAGNETS = ["ai-readiness-checklist"] as const;
type LeadMagnetId = typeof ALLOWED_LEAD_MAGNETS[number];

function isValidLeadMagnet(value: string): value is LeadMagnetId {
  return ALLOWED_LEAD_MAGNETS.includes(value as LeadMagnetId);
}

// Stricter email validation
function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email) && email.length <= INPUT_LIMITS.email;
}

// Add subscriber to ConvertKit
async function addToConvertKit(data: SubscribeData): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.CONVERTKIT_API_KEY;
  const formId = process.env.CONVERTKIT_FORM_ID;

  if (!apiKey || !formId) {
    console.warn("ConvertKit not configured");
    console.log("Would subscribe:", { email: "[redacted]", source: data.source });
    return { success: true };
  }

  try {
    // Determine tags based on source
    const tags: string[] = [];
    if (data.source === "newsletter") tags.push("newsletter");
    if (data.source === "lead-magnet") {
      tags.push("lead-magnet");
      if (data.leadMagnet && isValidLeadMagnet(data.leadMagnet)) {
        tags.push(`lead-magnet:${data.leadMagnet}`);
      }
    }
    if (data.source === "footer") tags.push("footer-signup");

    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: apiKey,
          email: sanitizeEmail(data.email),
          first_name: data.firstName ? sanitizeInput(data.firstName, INPUT_LIMITS.firstName) : "",
          tags,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("ConvertKit API error:", errorData);
      return { success: false, error: "Failed to subscribe. Please try again." };
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to add to ConvertKit:", error);
    return { success: false, error: "An error occurred. Please try again." };
  }
}

// Send lead magnet delivery email via Resend
async function sendLeadMagnetEmail(email: string, leadMagnet: string): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zentreksconsulting.com";

  if (!resendApiKey) {
    console.warn("RESEND_API_KEY not configured - skipping lead magnet delivery");
    return true;
  }

  // Lead magnet download links (whitelist validated)
  const leadMagnetConfig: Record<LeadMagnetId, { title: string; downloadPath: string }> = {
    "ai-readiness-checklist": {
      title: "AI Readiness Checklist",
      downloadPath: "/downloads/ai-readiness-checklist.pdf",
    },
  };

  // Validate against whitelist
  if (!isValidLeadMagnet(leadMagnet)) {
    console.warn(`Unknown lead magnet: ${leadMagnet}`);
    return false;
  }

  const config = leadMagnetConfig[leadMagnet];
  const safeEmail = sanitizeEmail(email);
  const safeTitle = escapeHtml(config.title);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Graham at Zentreks <graham@zentreksconsulting.com>",
        to: safeEmail,
        subject: `Your ${safeTitle} is ready!`,
        html: `
          <h2>Here's your ${safeTitle}!</h2>
          <p>Thanks for downloading. Click the button below to get your copy:</p>
          <p style="margin: 24px 0;">
            <a href="${siteUrl}${config.downloadPath}"
               style="background: #C4251D; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
              Download Now
            </a>
          </p>
          <p>Questions about implementing these insights? I'd love to chat.</p>
          <p>
            <a href="${siteUrl}/booking">Book a free 30-minute call with me</a>
          </p>
          <p>
            Best,<br />
            Graham<br />
            <span style="color: #666;">Founder, Zentreks Consulting</span>
          </p>
        `,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Failed to send lead magnet email:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  const correlationId = request.headers.get("x-correlation-id") || crypto.randomUUID();
  const clientIP = getClientIP(request.headers);

  try {
    const body = await request.json() as SubscribeData;

    // Honeypot check - if filled, silently reject
    if (body.website && body.website.trim().length > 0) {
      console.log(JSON.stringify({
        event: "honeypot_triggered",
        correlationId,
        clientIP,
        endpoint: "subscribe",
        timestamp: new Date().toISOString(),
      }));
      return NextResponse.json({
        success: true,
        message: "You're subscribed! Check your inbox for a welcome email.",
        correlationId,
      });
    }

    // Sanitize email
    const sanitizedEmail = sanitizeEmail(body.email);

    // Validate email
    if (!sanitizedEmail || !validateEmail(sanitizedEmail)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address",
          correlationId,
        },
        { status: 400 }
      );
    }

    // Rate limiting by email (not IP) for subscriptions
    const rateLimitResult = checkRateLimit(`subscribe:${sanitizedEmail}`, subscribeRateLimit);
    if (rateLimitResult.limited) {
      return NextResponse.json(
        {
          success: false,
          error: "This email has been used recently. Please try again later.",
          correlationId,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimitResult.retryAfter),
            "X-RateLimit-Remaining": "0",
          },
        }
      );
    }

    // Validate lead magnet if provided
    if (body.leadMagnet && !isValidLeadMagnet(body.leadMagnet)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid resource requested",
          correlationId,
        },
        { status: 400 }
      );
    }

    // Update body with sanitized values
    body.email = sanitizedEmail;

    // Add to ConvertKit
    const subscribeResult = await addToConvertKit(body);

    if (!subscribeResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: subscribeResult.error,
          correlationId,
        },
        { status: 500 }
      );
    }

    // If this is a lead magnet request, send the delivery email
    if (body.source === "lead-magnet" && body.leadMagnet && isValidLeadMagnet(body.leadMagnet)) {
      await sendLeadMagnetEmail(body.email, body.leadMagnet);
    }

    // Structured logging without PII
    console.log(JSON.stringify({
      event: "newsletter_subscription",
      correlationId,
      source: body.source || "unknown",
      hasLeadMagnet: !!body.leadMagnet,
      timestamp: new Date().toISOString(),
    }));

    // Return appropriate message based on source
    let message = "You're subscribed! Check your inbox for a welcome email.";
    if (body.source === "lead-magnet") {
      message = "Check your inbox! Your download is on its way.";
    }

    return NextResponse.json(
      {
        success: true,
        message,
        correlationId,
      },
      {
        headers: {
          "X-RateLimit-Remaining": String(rateLimitResult.remaining),
        },
      }
    );

  } catch (error) {
    console.error("Subscribe error:", { correlationId, error });

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again.",
        correlationId,
      },
      { status: 500 }
    );
  }
}
