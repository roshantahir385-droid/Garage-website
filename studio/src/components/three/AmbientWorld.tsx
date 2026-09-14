import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * The connective tissue for the "one continuous movie" scroll narrative:
 * three large soft-focus fields that drift apart through Hero → About →
 * Services → Work → Process, then pull back together and dim as the
 * page reaches Contact — echoing "everything simplifies into one clear
 * action" from the brief.
 *
 * Deliberately NOT another WebGL context — the hero's Three.js canvas
 * (see three/HeroCanvas.tsx) stays the site's one real 3D scene. This
 * is plain CSS blur + gradient, fixed behind all content, pointer-events
 * disabled, and fully stilled under reduced motion so it never competes
 * with foreground content or trips up anyone sensitive to motion.
 */
export function AmbientWorld() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const orbA = useRef<HTMLDivElement>(null);
  const orbB = useRef<HTMLDivElement>(null);
  const orbC = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const a = orbA.current;
    const b = orbB.current;
    const c = orbC.current;
    if (!a || !b || !c) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // Three fields drift apart at different speeds and directions
      // through the middle of the page...
      tl.to(a, { yPercent: 140, xPercent: 20, scale: 1.25, ease: "none" }, 0)
        .to(b, { yPercent: 230, xPercent: -30, scale: 0.85, ease: "none" }, 0)
        .to(c, { yPercent: 340, xPercent: 12, scale: 1.1, ease: "none" }, 0)
        // ...then converge and dim in the final stretch, as Contact
        // simplifies everything into one action.
        .to([a, b, c], { yPercent: 420, xPercent: 0, scale: 0.55, opacity: 0.3, ease: "none" }, 0.82);
    }, wrapRef);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        ref={orbA}
        className="absolute left-[8%] top-[6%] h-[34rem] w-[34rem] rounded-full bg-accent/[0.14] blur-[120px]"
      />
      <div
        ref={orbB}
        className="absolute right-[6%] top-[16%] h-[28rem] w-[28rem] rounded-full bg-accent-soft/[0.10] blur-[130px]"
      />
      <div
        ref={orbC}
        className="absolute left-[38%] top-[10%] h-[24rem] w-[24rem] rounded-full bg-accent-dim/50 blur-[110px]"
      />
    </div>
  );
}
