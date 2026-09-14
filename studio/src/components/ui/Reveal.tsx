import { useEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  /** Delay in seconds, useful for staggering siblings by hand. */
  delay?: number;
  /** Direction the element travels in from. */
  from?: "up" | "left" | "right";
  className?: string;
  as?: "div" | "section" | "li";
};

const offsets: Record<NonNullable<RevealProps["from"]>, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  left: { x: -28, y: 0 },
  right: { x: 28, y: 0 },
};

/**
 * Wraps a section of content and fades/slides it in once it reaches a
 * fixed point in the viewport, using a single ScrollTrigger per instance.
 * This is the one deliberate, reusable motion primitive for the page —
 * kept subtle and consistent rather than a different effect per section.
 */
export function Reveal({ children, delay = 0, from = "up", className, as = "div" }: RevealProps) {
  // Typed loosely on purpose: this wrapper can render as a div, section,
  // or li, and GSAP only needs a plain Element reference to animate.
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { x, y } = offsets[from];
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, x, y },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, from]);

  const Tag = as;
  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}

// Ensure ScrollTrigger recalculates on route/content size changes.
export function refreshScrollTriggers() {
  ScrollTrigger.refresh();
}
