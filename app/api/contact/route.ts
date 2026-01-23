import { NextRequest, NextResponse } from "next/server";
import {
  checkRateLimit,
  getClientIP,
  contactFormRateLimit,
} from "@/lib/rate-limit";
import {
  escapeHtml,
  sanitizeForEmail,
  sanitizeEmail,
  sanitizeInput,
  INPUT_LIMITS,
  containsSuspiciousPatterns,
} from "@/lib/sanitize";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  // Honeypot field - should always be empty
  website?: string;
}

// Stricter email validation
function validateEmail(email: string): boolean {
  // RFC 5322 compliant regex (simplified)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email) && email.length <= INPUT_LIMITS.email;
}

function validateRequired(value: string | undefined, fieldName: string): string | null {
  if (!value || value.trim().length === 0) {
    return `${fieldName} is required`;
  }
  return null;
}

function validateFormData(data: ContactFormData): string[] {
  const errors: string[] = [];

  const firstNameError = validateRequired(data.firstName, "First name");
  if (firstNameError) errors.push(firstNameError);
  else if (data.firstName.length > INPUT_LIMITS.firstName) {
    errors.push(`First name must be less than ${INPUT_LIMITS.firstName} characters`);
  }

  const lastNameError = validateRequired(data.lastName, "Last name");
  if (lastNameError) errors.push(lastNameError);
  else if (data.lastName.length > INPUT_LIMITS.lastName) {
    errors.push(`Last name must be less than ${INPUT_LIMITS.lastName} characters`);
  }

  const emailError = validateRequired(data.email, "Email");
  if (emailError) {
    errors.push(emailError);
  } else if (!validateEmail(data.email)) {
    errors.push("Please enter a valid email address");
  }

  const messageError = validateRequired(data.message, "Message");
  if (messageError) errors.push(messageError);
  else if (data.message.length > INPUT_LIMITS.message) {
    errors.push(`Message must be less than ${INPUT_LIMITS.message} characters`);
  }

  if (data.company && data.company.length > INPUT_LIMITS.company) {
    errors.push(`Company name must be less than ${INPUT_LIMITS.company} characters`);
  }

  return errors;
}

// Send email notification via Resend
async function sendEmailNotification(data: ContactFormData): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.NOTIFICATION_EMAIL || "contact@zentreksconsulting.com";

  if (!resendApiKey) {
    console.warn("RESEND_API_KEY not configured - skipping email notification");
    return true;
  }

  // Sanitize all user inputs for HTML email
  const safeFirstName = escapeHtml(data.firstName);
  const safeLastName = escapeHtml(data.lastName);
  const safeEmail = sanitizeEmail(data.email);
  const safeCompany = data.company ? escapeHtml(data.company) : null;
  const safeMessage = sanitizeForEmail(data.message);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Zentreks Contact Form <noreply@zentreksconsulting.com>",
        to: notificationEmail,
        subject: `New Contact Form Submission from ${safeFirstName} ${safeLastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          ${safeCompany ? `<p><strong>Company:</strong> ${safeCompany}</p>` : ""}
          <hr />
          <h3>Message:</h3>
          <p>${safeMessage}</p>
          <hr />
          <p style="color: #666; font-size: 12px;">
            This message was sent from the Zentreks Consulting contact form.
            Please respond within 24 hours.
          </p>
        `,
        reply_to: safeEmail,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resend API error:", errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Failed to send email notification:", error);
    return false;
  }
}

// Add contact to ConvertKit with "contact-form" tag
async function addToConvertKit(data: ContactFormData): Promise<boolean> {
  const apiKey = process.env.CONVERTKIT_API_KEY;
  const formId = process.env.CONVERTKIT_FORM_ID;

  if (!apiKey || !formId) {
    console.warn("ConvertKit not configured - skipping subscriber addition");
    return true;
  }

  try {
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
          first_name: sanitizeInput(data.firstName, INPUT_LIMITS.firstName),
          fields: {
            last_name: sanitizeInput(data.lastName, INPUT_LIMITS.lastName),
            company: data.company ? sanitizeInput(data.company, INPUT_LIMITS.company) : "",
          },
          tags: ["contact-form"],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("ConvertKit API error:", errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Failed to add to ConvertKit:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  const correlationId = request.headers.get("x-correlation-id") || crypto.randomUUID();
  const clientIP = getClientIP(request.headers);

  // Rate limiting check
  const rateLimitResult = checkRateLimit(`contact:${clientIP}`, contactFormRateLimit);
  if (rateLimitResult.limited) {
    return NextResponse.json(
      {
        success: false,
        error: "Too many requests. Please try again later.",
        correlationId,
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimitResult.retryAfter),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(rateLimitResult.retryAfter),
        },
      }
    );
  }

  try {
    const body = await request.json() as ContactFormData;

    // Honeypot check - if filled, silently reject (bots fill hidden fields)
    if (body.website && body.website.trim().length > 0) {
      // Log for monitoring but return success to not tip off bots
      console.log(JSON.stringify({
        event: "honeypot_triggered",
        correlationId,
        clientIP,
        timestamp: new Date().toISOString(),
      }));
      // Return fake success
      return NextResponse.json({
        success: true,
        message: "Thank you for your message! Graham will respond within 24 hours.",
        correlationId,
      });
    }

    // Sanitize inputs
    body.firstName = sanitizeInput(body.firstName, INPUT_LIMITS.firstName);
    body.lastName = sanitizeInput(body.lastName, INPUT_LIMITS.lastName);
    body.email = sanitizeEmail(body.email);
    body.company = body.company ? sanitizeInput(body.company, INPUT_LIMITS.company) : undefined;
    body.message = sanitizeInput(body.message, INPUT_LIMITS.message);

    // Check for suspicious patterns in name fields (likely spam)
    if (containsSuspiciousPatterns(body.firstName) || containsSuspiciousPatterns(body.lastName)) {
      console.log(JSON.stringify({
        event: "suspicious_pattern_detected",
        correlationId,
        clientIP,
        timestamp: new Date().toISOString(),
      }));
      // Return fake success
      return NextResponse.json({
        success: true,
        message: "Thank you for your message! Graham will respond within 24 hours.",
        correlationId,
      });
    }

    // Validate form data
    const validationErrors = validateFormData(body);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          errors: validationErrors,
          correlationId,
        },
        { status: 400 }
      );
    }

    // Send email notification and add to CRM in parallel
    const [emailSent, addedToCRM] = await Promise.all([
      sendEmailNotification(body),
      addToConvertKit(body),
    ]);

    // Structured logging without PII
    console.log(JSON.stringify({
      event: "contact_form_submission",
      correlationId,
      hasCompany: !!body.company,
      emailSent,
      addedToCRM,
      timestamp: new Date().toISOString(),
    }));

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! Graham will respond within 24 hours.",
        correlationId,
      },
      {
        headers: {
          "X-RateLimit-Remaining": String(rateLimitResult.remaining),
        },
      }
    );

  } catch (error) {
    console.error("Contact form error:", { correlationId, error });

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again or email us directly.",
        correlationId,
      },
      { status: 500 }
    );
  }
}
