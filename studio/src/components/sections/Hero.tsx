import { Suspense, lazy, useEffect, useRef } from "react";
import { site } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { HeroFallback } from "@/components/three/HeroFallback";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// The Three.js scene is meaningfully heavy — it's only pulled into its own
// chunk and fetched once we know WebGL is actually usable.
const HeroCanvas = lazy(() =>
  import("@/components/three/HeroCanvas").then((m) => ({ default: m.HeroCanvas }))
);

export function Hero() {
  const webglSupported = useWebGLSupport();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // The one orchestrated page-load moment: headline, sub, and CTAs
  // arrive in a short staggered sequence rather than all at once.
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-eyebrow",
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.7 }
      )
        .fromTo(
          ".hero-headline",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 1.1 },
          "-=0.35"
        )
        .fromTo(
          ".hero-sub",
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ".hero-cta",
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.1 },
          "-=0.5"
        );

      // As the hero scrolls out of view, let it recede — a gentle
      // depth-of-field-style fade and scale rather than a hard cut.
      if (contentRef.current && sectionRef.current) {
        gsap.to(contentRef.current, {
          autoAlpha: 0,
          y: -40,
          scale: 0.96,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Give the lazy 3D chunk a moment to mount before recalculating
    // trigger positions, so layout doesn't jump.
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => window.clearTimeout(id);
  }, [webglSupported]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        {webglSupported === true && (
          <Suspense fallback={<HeroFallback />}>
            <HeroCanvas />
          </Suspense>
        )}
        {webglSupported === false && <HeroFallback />}
      </div>

      {/* Readability scrim so text holds up over the 3D scene at any point */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-void/10 to-void/40" />

      <div ref={contentRef} className="container-cinematic relative z-10 py-32">
        <div className="max-w-3xl">
          <p className="hero-eyebrow text-sm text-ink-muted">{site.role}</p>

          <h1 className="hero-headline mt-6 text-display-xl font-semibold text-balance">
            {site.hero.headline}
          </h1>

          <p className="hero-sub mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
            {site.hero.sub}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={site.hero.primaryCta.href} variant="primary" className="hero-cta">
              {site.hero.primaryCta.label}
            </Button>
            <Button href={site.hero.secondaryCta.href} variant="secondary" className="hero-cta">
              {site.hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
