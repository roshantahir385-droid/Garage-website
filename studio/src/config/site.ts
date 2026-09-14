/**
 * Everything personal to you lives here — name, contact details, socials,
 * pricing tiers text, etc. Edit this file and the whole site updates.
 * No content elsewhere in the codebase should hardcode this information.
 */

export const site = {
  name: "Your Name",
  mark: "YN", // short initials used in the nav / footer mark
  role: "Digital Builder & Growth Partner",
  email: "growthavenueco1@gmail.com",
  location: "Available worldwide · Remote",
  // Optional: a Calendly/Cal.com link. Leave empty to hide the "book a
  // call" shortcut and rely on the contact form only.
  bookingUrl: "",
  tagline: "I build, manage and grow digital businesses.",

  socials: [
    { label: "Instagram", href: "https://instagram.com/yourhandle" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourhandle" },
    { label: "X", href: "https://x.com/yourhandle" },
  ],

  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    headline: "BUILD. MANAGE. GROW.",
    sub: "I build digital experiences, manage online platforms, and help businesses turn attention into growth.",
    primaryCta: { label: "Let's Work Together", href: "#contact" },
    secondaryCta: { label: "Explore My Work", href: "#work" },
  },

  // Feature flag: flip this to true once you have real, attributable
  // testimonials to show. The section stays out of the page until then —
  // per the brief, no placeholder quotes are shown.
  showTestimonials: false,
} as const;
