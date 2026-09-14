export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "A conversation about where your business is today, what's working, and what growth actually needs to look like.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "I translate that into a plan — which services matter first, in what order, and how we'll measure progress.",
  },
  {
    step: "03",
    title: "Design & Build",
    description:
      "Your site, platform, or campaign gets built with attention to both how it looks and how it performs.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "A controlled release with everything checked — performance, tracking, and the details that get missed.",
  },
  {
    step: "05",
    title: "Manage & Grow",
    description:
      "Ongoing management of what we've built, with adjustments made as real data comes in.",
  },
];
