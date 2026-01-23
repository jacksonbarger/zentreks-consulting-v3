/**
 * In-memory rate limiter for API endpoints
 *
 * Note: This uses in-memory storage which resets on server restart.
 * For production with multiple instances, use Redis or Vercel KV.
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// In-memory store for rate limiting
const rateLimitStore = new Map<string, RateLimitEntry>();

// Clean up expired entries periodically
const CLEANUP_INTERVAL = 60 * 1000; // 1 minute
let lastCleanup = Date.now();

function cleanupExpiredEntries(): void {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) return;

  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
  lastCleanup = now;
}

export interface RateLimitConfig {
  /** Maximum number of requests allowed in the window */
  maxRequests: number;
  /** Time window in milliseconds */
  windowMs: number;
}

export interface RateLimitResult {
  /** Whether the request is rate limited */
  limited: boolean;
  /** Number of requests remaining in the window */
  remaining: number;
  /** Time in seconds until the rate limit resets */
  retryAfter: number;
}

/**
 * Check if a request should be rate limited
 *
 * @param identifier - Unique identifier for the rate limit (e.g., IP address, email)
 * @param config - Rate limit configuration
 * @returns Rate limit result with remaining requests and retry-after time
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig
): RateLimitResult {
  cleanupExpiredEntries();

  const now = Date.now();
  const key = identifier;

  let entry = rateLimitStore.get(key);

  // If no entry or window has expired, create/reset entry
  if (!entry || now > entry.resetTime) {
    entry = {
      count: 1,
      resetTime: now + config.windowMs,
    };
    rateLimitStore.set(key, entry);

    return {
      limited: false,
      remaining: config.maxRequests - 1,
      retryAfter: 0,
    };
  }

  // Increment count
  entry.count += 1;

  // Check if over limit
  if (entry.count > config.maxRequests) {
    const retryAfter = Math.ceil((entry.resetTime - now) / 1000);
    return {
      limited: true,
      remaining: 0,
      retryAfter,
    };
  }

  return {
    limited: false,
    remaining: config.maxRequests - entry.count,
    retryAfter: 0,
  };
}

/**
 * Get client IP address from request headers
 * Works with Vercel, Cloudflare, and standard proxies
 */
export function getClientIP(headers: Headers): string {
  // Vercel
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  // Cloudflare
  const cfConnectingIP = headers.get("cf-connecting-ip");
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  // Real IP header
  const realIP = headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }

  return "unknown";
}

// Pre-configured rate limiters for common use cases

/** Rate limiter for contact form: 5 requests per hour per IP */
export const contactFormRateLimit: RateLimitConfig = {
  maxRequests: 5,
  windowMs: 60 * 60 * 1000, // 1 hour
};

/** Rate limiter for newsletter subscription: 3 requests per day per email */
export const subscribeRateLimit: RateLimitConfig = {
  maxRequests: 3,
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
};

/** Rate limiter for general API: 60 requests per minute per IP */
export const generalApiRateLimit: RateLimitConfig = {
  maxRequests: 60,
  windowMs: 60 * 1000, // 1 minute
};
