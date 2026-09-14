# Security notes (internal reference — not a public page)

This file tracks security measures already in place and what's
recommended next. It's written for you or your developer — it's not
linked from the site and isn't a compliance claim of any kind.

## Implemented today

- **Client-side validation** on the contact form (required fields,
  email/phone format checks) — `src/components/contact/ContactForm.tsx`.
- **Input sanitization** — control characters stripped and length capped
  before values are embedded into `mailto:`/`wa.me` links —
  `src/lib/sanitize.ts`.
- **Honeypot field** on the contact form to deter basic automated
  spam bots — the hidden `company_website` field in `ContactForm.tsx`.
- **No API keys or secrets** are present anywhere in this codebase.
- **No exposed backend** — the contact form has no server behind it. A
  submission becomes a pre-filled `mailto:`/WhatsApp link that the
  visitor's own device opens and sends; nothing is transmitted to or
  stored on a server by this code today.
- **No analytics or tracking scripts** are loaded. The plumbing for
  cookie-consent-gated analytics exists (`src/lib/cookieConsent.tsx`,
  `src/lib/analytics.ts`) but nothing is wired up or collecting data yet.

## Recommended once a backend is added

- **Re-validate and re-sanitize every field server-side.** Client-side
  checks can always be bypassed by a direct request — never trust them
  alone.
- **Add real spam protection**: a challenge (hCaptcha, Cloudflare
  Turnstile, reCAPTCHA) and/or server-side rate limiting per IP, in
  addition to keeping the honeypot.
- **Serve over HTTPS only.** Most hosts (Vercel, Netlify, Cloudflare
  Pages, etc.) provide this by default — just confirm it isn't disabled
  and that HTTP requests redirect to HTTPS.
- **Keep secrets server-side.** Any API keys or credentials belong in
  server/serverless environment variables — never in frontend code or
  any `.env` file that ships to the browser.
- **Define real data retention and storage practices** if you start
  storing submissions (encryption at rest, access controls, a defined
  retention period) — then update the Privacy Policy to describe them
  accurately.
- **Name the actual analytics provider** in the Cookie Policy and
  Privacy Policy the moment one is added, and wire it through
  `src/lib/analytics.ts` so it stays gated behind consent.

## Before publishing

Have a qualified legal professional review `/privacy-policy`, `/terms`,
`/cookie-policy`, `/refund-policy`, and `/disclaimer`, and fill in the
placeholders in `src/config/legal.ts` (jurisdiction, legal entity name,
last-updated date) with your confirmed details.
