export type ProjectPreviewKind = "storefront" | "app" | "social" | "listings" | "cart";

export type WorkItem = {
  id: string;
  /** Short concept name, shown large — not a real client or product. */
  name: string;
  title: string;
  category: string;
  preview: ProjectPreviewKind;
  description: string;
  objective: string;
  servicesUsed: string[];
  approach: string;
  cta: { label: string; href: string };
};

/**
 * CONCEPT PROJECTS ONLY.
 *
 * These five are self-directed spec work built to demonstrate range and
 * approach — not real clients, engagements, or campaigns. On purpose,
 * none of these include a client name, revenue figure, ROAS, lead count,
 * or testimonial. Each one is clearly labeled "CONCEPT PROJECT" in the UI
 * (see components/sections/Work.tsx) — keep that label if you add more,
 * and only remove it once a project is a real, attributable case study.
 */
export const work: WorkItem[] = [
  {
    id: "nova",
    name: "NOVA",
    title: "E-commerce Website",
    category: "Web Development / Design",
    preview: "storefront",
    description:
      "A concept storefront for a fictional product line, built to explore a fast, editorial take on e-commerce — bigger imagery, less clutter, a checkout that gets out of the way.",
    objective: "Show how a product-first layout can carry a store without leaning on discount banners.",
    servicesUsed: ["Web Development", "Website Design"],
    approach:
      "Started from the product photography outward: a grid that gives each item room, a persistent but quiet cart, and page weight kept low so browsing never feels sluggish.",
    cta: { label: "View concept", href: "#contact" },
  },
  {
    id: "pulse",
    name: "PULSE",
    title: "Fitness App",
    category: "App / Product Design",
    preview: "app",
    description:
      "A concept fitness app interface exploring how daily tracking can feel calm instead of gamified — fewer streaks and badges, more clear, readable progress.",
    objective: "Test whether a quieter visual language holds attention as well as a louder, gamified one.",
    servicesUsed: ["Website Design", "App Management"],
    approach:
      "Prioritized one clear metric per screen, generous spacing, and a consistent card system so the interface reads the same whether you're logging a workout or reviewing a week.",
    cta: { label: "View concept", href: "#contact" },
  },
  {
    id: "ember",
    name: "EMBER",
    title: "Social Media Growth Concept",
    category: "Social Media Marketing",
    preview: "social",
    description:
      "A concept content and growth plan for a fictional lifestyle brand — a posting cadence, content pillars, and a visual system designed to hold up across a full month, not just a single post.",
    objective: "Demonstrate a repeatable content system rather than one-off, disconnected posts.",
    servicesUsed: ["Social Media Marketing", "Social Media Management"],
    approach:
      "Built around a small number of recurring content pillars and templates, so the account has a consistent voice while still leaving room for timely posts.",
    cta: { label: "View concept", href: "#contact" },
  },
  {
    id: "vertex",
    name: "VERTEX",
    title: "Real Estate Website",
    category: "Web Development / Marketing",
    preview: "listings",
    description:
      "A concept listings site for a fictional real estate group, focused on making dense information — price, location, specs — easy to scan without feeling like a spreadsheet.",
    objective: "Show a listings-heavy layout that stays clear and fast without hiding the details buyers care about.",
    servicesUsed: ["Web Development", "Digital Marketing"],
    approach:
      "Used a consistent listing-card system, clear filtering, and lightweight pages so the site stays fast even with a large catalog of properties.",
    cta: { label: "View concept", href: "#contact" },
  },
  {
    id: "cartly",
    name: "CARTLY",
    title: "Consumer E-commerce",
    category: "Website / Conversion",
    preview: "cart",
    description:
      "A concept conversion-focused storefront and landing page pairing for a fictional consumer brand, built to test how far page structure alone can move someone from landing to checkout.",
    objective: "Explore a conversion-first structure independent of paid traffic or promotions.",
    servicesUsed: ["Landing Pages", "Website Design"],
    approach:
      "Mapped the page around a single next step at a time — one landing page per offer, a short path to checkout, and minimal competing calls to action.",
    cta: { label: "View concept", href: "#contact" },
  },
];
