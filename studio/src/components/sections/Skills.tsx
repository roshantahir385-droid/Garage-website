import { useEffect, useRef, useState } from "react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gsap } from "@/lib/gsap";

export function Skills() {
  const [activeId, setActiveId] = useState(skillGroups[0].id);
  const active = skillGroups.find((g) => g.id === activeId) ?? skillGroups[0];
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    gsap.fromTo(
      el.children,
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" }
    );
  }, [activeId]);

  return (
    <section id="skills" className="container-cinematic py-28 md:py-36">
      <SectionHeading
        title="Where the range comes in"
        description="Pick a discipline to see what it actually covers."
      />

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr]">
        {/* Tabs */}
        <div className="flex flex-row gap-2 overflow-x-auto md:flex-col md:gap-1">
          {skillGroups.map((group) => {
            const isActive = group.id === activeId;
            return (
              <button
                key={group.id}
                onClick={() => setActiveId(group.id)}
                className={`group relative shrink-0 rounded-lg px-5 py-4 text-left transition-colors duration-300 md:w-full ${
                  isActive ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"
                }`}
              >
                <span
                  className={`absolute left-0 top-1/2 hidden h-6 w-[2px] -translate-y-1/2 rounded-full transition-colors duration-300 md:block ${
                    isActive ? "bg-accent" : "bg-transparent"
                  }`}
                />
                <span
                  className={`block text-base font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-ink-muted group-hover:text-ink"
                  }`}
                >
                  {group.label}
                </span>
                <span className="mt-1 hidden text-sm text-ink-faint md:block">
                  {group.description}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active group detail */}
        <div className="rounded-2xl border border-line p-8 md:p-10">
          <p className="text-sm text-ink-muted">{active.description}</p>
          <ul ref={listRef} className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {active.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-lg border border-line px-4 py-3 text-sm text-ink"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
