/**
 * Dropdown options for the contact / booking form. Kept separate from
 * data/services.ts (which drives the Services section) since the form
 * needs its own fixed list, including "Other" and budget brackets.
 */

export const serviceOptions = [
  "Web Development",
  "Website Design",
  "Social Media Marketing",
  "Social Media Management",
  "App Management",
  "Digital Marketing",
  "Landing Page",
  "Website Maintenance",
  "Basic SEO",
  "Other",
] as const;

export const budgetOptions = [
  "Not sure yet",
  "Under $500",
  "$500–$1,000",
  "$1,000–$2,500",
  "$2,500+",
] as const;
