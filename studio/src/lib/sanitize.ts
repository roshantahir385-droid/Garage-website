/**
 * Basic client-side sanitization for text that gets embedded into
 * mailto:/wa.me links (and, later, sent to a backend if one is added).
 *
 * This is NOT a substitute for server-side validation. If a backend is
 * added later, every field must be re-validated and re-sanitized on the
 * server — client-side checks can always be bypassed by a direct
 * request, so never trust them alone.
 */

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  phone: 30,
  business: 150,
  website: 200,
  service: 100,
  budget: 100,
  details: 2000,
} as const;

type SanitizableField = keyof typeof MAX_LENGTHS;

/** Strips control characters (which can break/inject into link-based
 * messages) and trims surrounding whitespace. */
export function sanitizeText(value: string): string {
  // eslint-disable-next-line no-control-regex
  return value.replace(/[\u0000-\u001F\u007F]/g, "").trim();
}

/** Caps length to a sane maximum for the given field. */
export function clampLength(value: string, field: SanitizableField): string {
  return value.slice(0, MAX_LENGTHS[field]);
}

/** Runs both steps in one call. */
export function sanitizeField(value: string, field: SanitizableField): string {
  return clampLength(sanitizeText(value), field);
}
