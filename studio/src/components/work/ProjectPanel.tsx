import { useEffect, useRef } from "react";
import type { WorkItem } from "@/data/work";
import { ProjectPreview } from "@/components/work/ProjectPreview";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * A smooth, scrub-tied transition rather than a one-shot reveal — the
 * panel eases in as it approaches center screen and eases back out as
 * it leaves, so moving between projects feels continuous rather than
 * a series of separate pop-ins. Uses the same GSAP/ScrollTrigger setup
 * as Reveal, just with `scrub` instead of `toggleActions`.
 */
export function ProjectPanel({ item, index }: { item: WorkItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0.25, y: 48, scale: 0.97 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    }, ref);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  const isReversed = index % 2 === 1;

  return (
    <div ref={ref} className="will-change-transform">
      <article
        className={`grid grid-cols-1 items-center gap-8 rounded-3xl border border-line bg-surface/40 p-6 sm:p-8 lg:gap-14 lg:p-12 lg:grid-cols-2 ${
          isReversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="h-56 overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-navy via-surface to-void sm:h-72 lg:h-80">
          <ProjectPreview kind={item.preview} />
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-accent-soft/40 bg-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-accent-soft">
              Concept project
            </span>
            <span className="text-xs text-ink-muted">{item.category}</span>
          </div>

          <h3 className="mt-5 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {item.name}
          </h3>
          <p className="mt-1 text-sm text-ink-muted">{item.title}</p>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-muted">{item.description}</p>

          <dl className="mt-6 space-y-4">
            <div>
              <dt className="text-xs uppercase tracking-[0.12em] text-ink-faint">Objective</dt>
              <dd className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-muted">{item.objective}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.12em] text-ink-faint">Services used</dt>
              <dd className="mt-1.5 flex flex-wrap gap-2">
                {item.servicesUsed.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line px-3 py-1 text-xs text-ink-muted"
                  >
                    {s}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.12em] text-ink-faint">Design approach</dt>
              <dd className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-muted">{item.approach}</dd>
            </div>
          </dl>

          <a
            href={item.cta.href}
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-accent-soft transition-colors duration-300 hover:text-white"
          >
            {item.cta.label}
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </article>
    </div>
  );
}
