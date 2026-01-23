import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Security headers for all responses
const securityHeaders = {
  "X-DNS-Prefetch-Control": "on",
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

// Content Security Policy
const cspDirectives = {
  "default-src": ["'self'"],
  "script-src": [
    "'self'",
    "'unsafe-inline'", // Required for Next.js and Framer Motion
    "'unsafe-eval'", // Required for development
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
  ],
  "style-src": ["'self'", "'unsafe-inline'"], // Required for Tailwind and inline styles
  "img-src": [
    "'self'",
    "data:",
    "blob:",
    "https://images.unsplash.com",
    "https://www.google-analytics.com",
  ],
  "font-src": ["'self'"],
  "connect-src": [
    "'self'",
    "https://api.resend.com",
    "https://api.convertkit.com",
    "https://www.google-analytics.com",
  ],
  "frame-src": ["'self'", "https://cal.com"],
  "object-src": ["'none'"],
  "base-uri": ["'self'"],
  "form-action": ["'self'"],
  "frame-ancestors": ["'none'"],
  "upgrade-insecure-requests": [],
};

function buildCSP(): string {
  return Object.entries(cspDirectives)
    .map(([directive, values]) => {
      if (values.length === 0) return directive;
      return `${directive} ${values.join(" ")}`;
    })
    .join("; ");
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Apply security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // Apply CSP (relaxed in development)
  const isDev = process.env.NODE_ENV === "development";
  if (!isDev) {
    response.headers.set("Content-Security-Policy", buildCSP());
  }

  // HSTS - only in production with custom domain
  if (!isDev) {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains"
    );
  }

  // CORS for API routes - restrict to same origin
  if (request.nextUrl.pathname.startsWith("/api/")) {
    const origin = request.headers.get("origin");
    const host = request.headers.get("host");

    // Allow same-origin requests only
    if (origin) {
      const originHost = new URL(origin).host;
      if (originHost !== host) {
        return new NextResponse(null, {
          status: 403,
          statusText: "Forbidden",
          headers: {
            "Content-Type": "text/plain",
          },
        });
      }
    }

    response.headers.set("Access-Control-Allow-Origin", origin || "*");
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  }

  return response;
}

export const config = {
  matcher: [
    // Match all paths except static files and images
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
