import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Respect the user's motion preference globally.
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    gsap.globalTimeline.timeScale(50); // effectively skip animated transitions
  }
}

export { gsap, ScrollTrigger };
