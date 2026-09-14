import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";

/**
 * This section is only mounted from App.tsx when `site.showTestimonials`
 * is true AND real testimonials exist in data/testimonials.ts — see the
 * guard there. It renders nothing on its own if the array is empty, so
 * it's safe to import even before that data exists.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="container-cinematic py-28 md:py-36">
      <SectionHeading title="What clients say" />

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <GlassCard className="flex h-full flex-col justify-between p-8">
              <p className="text-ink leading-relaxed">"{t.quote}"</p>
              <div className="mt-8">
                <p className="text-sm font-medium text-ink">{t.name}</p>
                <p className="text-sm text-ink-faint">{t.role}</p>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
