export type SkillGroup = {
  id: string;
  label: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "build",
    label: "Build",
    description: "Turning ideas into working products.",
    items: ["React & TypeScript", "Web Performance", "App Platforms", "API Integration"],
  },
  {
    id: "design",
    label: "Design",
    description: "Interfaces and visual systems people trust.",
    items: ["UI/UX Design", "Design Systems", "Landing Page Design", "Brand Consistency"],
  },
  {
    id: "grow",
    label: "Grow",
    description: "Turning attention into measurable movement.",
    items: ["Digital Marketing", "Social Media Strategy", "Basic SEO", "Campaign Planning"],
  },
  {
    id: "manage",
    label: "Manage",
    description: "Keeping everything running after launch.",
    items: ["Website Maintenance", "App Management", "Content Operations", "Community Upkeep"],
  },
];
