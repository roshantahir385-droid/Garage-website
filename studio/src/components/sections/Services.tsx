import { useEffect, useRef, useState } from "react";
import { serviceGroups } from "@/data/services";
import type { ServiceEnvironment } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceEnvironmentVisual } from "@/components/services/ServiceEnvironments";

export function Services() {
  const [activeEnv, setActiveEnv] = useState<ServiceEnvironment>(serviceGroups[0].environment);
  const groupRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const targets = groupRefs.current.filter(Boolean) as HTMLDivElement[];
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most-visible entering group rather than reacting to
        // every crossing — keeps the backdrop from flickering between
        // two adjacent groups near the midpoint of the viewport.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const env = (visible.target as HTMLElement).dataset.environment as
            | ServiceEnvironment
            | undefined;
          if (env) setActiveEnv(env);
        }
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: [0.15, 0.4, 0.7] }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="container-cinematic py-28 md:py-36">
      <SectionHeading
        title="What I handle, end to end"
        description="Eight disciplines, one point of contact — from the first line of code to the strategy that brings people to it. Scroll through, or jump straight to what you need."
      />

      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Cinematic backdrop — sticky on large screens, hidden below.
            Each service group below drives which environment shows here. */}
        <div className="hidden lg:block">
          <div className="sticky top-28 h-[26rem] overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-navy via-surface to-void">
            <div key={activeEnv} className="environment-fade h-full w-full">
              <ServiceEnvironmentVisual environment={activeEnv} />
            </div>
          </div>
        </div>

        {/* Service groups */}
        <div className="flex flex-col gap-16">
          {serviceGroups.map((group, groupIndex) => (
            <div
              key={group.environment}
              ref={(el) => (groupRefs.current[groupIndex] = el)}
              data-environment={group.environment}
            >
              <Reveal className="mb-6">
                <p className="text-xs uppercase tracking-[0.18em] text-accent-soft">
                  {String(groupIndex + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-medium text-ink">{group.label}</h3>
                <p className="mt-1 text-sm text-ink-muted">{group.caption}</p>
              </Reveal>

              {/* Compact environment banner for small/medium screens, where
                  the sticky panel is hidden. */}
              <div className="mb-6 h-32 overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-navy via-surface to-void lg:hidden">
                <ServiceEnvironmentVisual environment={group.environment} />
              </div>

              <div
                className={`grid grid-cols-1 gap-5 ${
                  group.services.length > 1 ? "sm:grid-cols-2" : "sm:max-w-md"
                }`}
              >
                {group.services.map((service, i) => (
                  <Reveal key={service.id} delay={(i % 2) * 0.06}>
                    <ServiceCard service={service} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
