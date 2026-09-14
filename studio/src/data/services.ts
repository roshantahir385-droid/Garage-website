export type ServiceEnvironment = "web" | "app" | "social" | "growth";

export type Service = {
  id: string;
  title: string;
  description: string;
  /** Which cinematic environment this service belongs to as the section scrolls. */
  environment: ServiceEnvironment;
  /** A few concrete things this service covers, shown behind "Learn More". */
  capabilities: string[];
};

export type ServiceGroup = {
  environment: ServiceEnvironment;
  label: string;
  caption: string;
  services: Service[];
};

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    environment: "web",
    description:
      "Modern, responsive websites built to look exceptional and convert visitors into customers.",
    capabilities: [
      "Custom-built, no bloated templates",
      "Responsive across every device",
      "Built for speed and clean structure",
    ],
  },
  {
    id: "website-design",
    title: "Website Design",
    environment: "web",
    description:
      "High-quality interfaces designed around your brand, audience and goals.",
    capabilities: [
      "Brand-led visual direction",
      "Layouts built around how people read",
      "Design systems that scale with the site",
    ],
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    environment: "web",
    description: "Ongoing updates, improvements, fixes and optimization.",
    capabilities: [
      "Regular updates and monitoring",
      "Bug fixes and performance passes",
      "Small improvements, shipped continuously",
    ],
  },
  {
    id: "app-management",
    title: "App Management",
    environment: "app",
    description:
      "Helping manage, improve and maintain your digital applications and user experience.",
    capabilities: [
      "Day-to-day app oversight",
      "UX improvements over time",
      "Store listings and release upkeep",
    ],
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    environment: "social",
    description:
      "Content and growth strategies designed to build attention and turn followers into opportunities.",
    capabilities: [
      "Platform-specific content strategy",
      "Growth-focused campaign planning",
      "Turning attention into real opportunities",
    ],
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    environment: "social",
    description:
      "Consistent management of your social presence, content and audience communication.",
    capabilities: [
      "Consistent posting and planning",
      "Audience replies and community upkeep",
      "On-brand tone across channels",
    ],
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    environment: "growth",
    description:
      "Focused landing pages designed around a specific action or conversion.",
    capabilities: [
      "Built around a single goal",
      "Clear, persuasive structure",
      "Ready for launches and campaigns",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    environment: "growth",
    description:
      "Practical digital strategies designed around visibility, engagement and growth.",
    capabilities: [
      "Cross-channel strategy",
      "Visibility and engagement focus",
      "Grounded, practical execution",
    ],
  },
];

/**
 * Services grouped by cinematic "environment" for the scroll sequence —
 * each group gets its own floating backdrop as it enters the viewport.
 */
export const serviceGroups: ServiceGroup[] = [
  {
    environment: "web",
    label: "Building the web presence",
    caption: "Sites designed, built and kept running.",
    services: services.filter((s) => s.environment === "web"),
  },
  {
    environment: "app",
    label: "Inside the app",
    caption: "Ongoing care for the product people actually use.",
    services: services.filter((s) => s.environment === "app"),
  },
  {
    environment: "social",
    label: "Where the audience gathers",
    caption: "Content, presence and conversation, kept consistent.",
    services: services.filter((s) => s.environment === "social"),
  },
  {
    environment: "growth",
    label: "Turning attention into action",
    caption: "Pages and strategy built around a result.",
    services: services.filter((s) => s.environment === "growth"),
  },
];
