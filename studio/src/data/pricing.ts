export type PricingTier = {
  id: string;
  name: string;
  summary: string;
  features: string[];
  highlighted?: boolean;
};

/**
 * Pricing is intentionally scoped rather than priced here — plug in real
 * numbers once they're finalized, or keep it quote-based. No figures are
 * invented in the foundation build.
 */
export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    summary: "A focused website or landing page to get you live and credible.",
    features: [
      "Website design & development",
      "1–5 pages or a single landing page",
      "Basic SEO setup",
      "Launch support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    summary: "A full build plus the ongoing management to keep it moving.",
    features: [
      "Everything in Starter",
      "Website maintenance",
      "Social media management",
      "Monthly performance check-ins",
    ],
    highlighted: true,
  },
  {
    id: "scale",
    name: "Scale",
    summary: "End-to-end partnership across build, management, and growth.",
    features: [
      "Everything in Growth",
      "App management",
      "Digital marketing & campaigns",
      "Content & creative strategy",
    ],
  },
];
