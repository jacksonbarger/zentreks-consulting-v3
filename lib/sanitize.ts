/**
 * Input sanitization utilities for preventing XSS and injection attacks
 */

/**
 * HTML entity map for escaping
 */
const HTML_ENTITIES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "/": "&#x2F;",
  "`": "&#x60;",
  "=": "&#x3D;",
};

/**
 * Escape HTML entities to prevent XSS attacks
 * Use this when embedding user input in HTML templates
 *
 * @param str - The string to escape
 * @returns Escaped string safe for HTML embedding
 */
export function escapeHtml(str: string): string {
  if (!str) return "";
  return str.replace(/[&<>"'`=/]/g, (char) => HTML_ENTITIES[char] || char);
}

/**
 * Sanitize a string for use in email HTML templates
 * Escapes HTML entities and converts newlines to <br /> tags
 *
 * @param str - The string to sanitize
 * @returns Sanitized string safe for email HTML
 */
export function sanitizeForEmail(str: string): string {
  if (!str) return "";
  return escapeHtml(str).replace(/\n/g, "<br />");
}

/**
 * Sanitize an email address
 * Removes any characters that could be used for header injection
 *
 * @param email - The email address to sanitize
 * @returns Sanitized email address
 */
export function sanitizeEmail(email: string): string {
  if (!email) return "";
  // Remove newlines and carriage returns (header injection prevention)
  return email.replace(/[\r\n]/g, "").trim();
}

/**
 * Truncate a string to a maximum length
 * Useful for preventing excessively long inputs
 *
 * @param str - The string to truncate
 * @param maxLength - Maximum allowed length
 * @returns Truncated string
 */
export function truncate(str: string, maxLength: number): string {
  if (!str) return "";
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength);
}

/**
 * Input length limits for form fields
 */
export const INPUT_LIMITS = {
  firstName: 100,
  lastName: 100,
  email: 254, // RFC 5321
  company: 200,
  message: 5000,
  phone: 30,
} as const;

/**
 * Validate and sanitize form input with length limits
 *
 * @param input - The input string
 * @param maxLength - Maximum allowed length
 * @returns Sanitized and truncated string
 */
export function sanitizeInput(input: string, maxLength: number): string {
  if (!input) return "";
  // Trim whitespace
  let sanitized = input.trim();
  // Remove null bytes and other control characters (except newlines)
  sanitized = sanitized.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");
  // Truncate to max length
  return truncate(sanitized, maxLength);
}

/**
 * Check if a string contains suspicious patterns
 * Used for honeypot validation and spam detection
 *
 * @param str - The string to check
 * @returns true if suspicious patterns detected
 */
export function containsSuspiciousPatterns(str: string): boolean {
  if (!str) return false;

  const suspiciousPatterns = [
    // URLs in fields that shouldn't have them (like name fields)
    /https?:\/\//i,
    // Excessive punctuation (common in spam)
    /[!?]{3,}/,
    // HTML tags (shouldn't be in plain text inputs)
    /<[^>]+>/,
    // Common spam phrases
    /\b(buy now|click here|free money|winner|congratulations)\b/i,
  ];

  return suspiciousPatterns.some((pattern) => pattern.test(str));
}
