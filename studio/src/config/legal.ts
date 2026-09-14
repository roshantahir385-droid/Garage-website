/**
 * Placeholder legal/business details used across the legal pages
 * (Privacy Policy, Terms, Cookie Policy, Refund Policy, Disclaimer).
 *
 * ⚠️ REVIEW BEFORE PUBLISHING
 * Everything here — especially `legalEntityName`, `jurisdiction`, and
 * `governingLawNote` — is placeholder language. Fill in your actual
 * business details and have a qualified legal professional in your
 * jurisdiction review the generated pages before you rely on them or
 * publish them live.
 *
 * These pages intentionally do NOT claim compliance with any specific
 * law (GDPR, CCPA, etc.) because that depends on facts about your
 * business (where you're based, where your visitors are, whether you
 * run analytics/ads, how data is stored) that only you and your legal
 * advisor can confirm.
 */
import { site } from "./site";

export const legal = {
  // The trading/display name shown to visitors. Defaults to config/site.ts.
  businessName: site.name,

  // Replace with your registered legal entity name if you operate as a
  // company, LLC, sole proprietorship under a DBA, etc. Leave as-is if
  // you operate as an individual under your own name.
  legalEntityName: site.name,

  // Placeholder — replace with the country/state/province whose law
  // actually governs your agreements, once confirmed with a legal
  // professional. Left deliberately unresolved rather than guessed.
  jurisdiction: "[Insert governing jurisdiction — e.g. State/Country]",

  // Contact used for privacy/legal inquiries. Defaults to the general
  // contact address in config/site.ts — change here if you'd rather use
  // a dedicated address (e.g. privacy@yourdomain.com).
  contactEmail: site.email,

  // Update this whenever you edit any legal page's content.
  lastUpdated: "[Insert date this policy was last reviewed/updated]",
} as const;
