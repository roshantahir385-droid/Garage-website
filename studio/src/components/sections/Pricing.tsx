import { pricingTiers } from "@/data/pricing";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export function Pricing() {
  return (
    <section id="pricing" className="container-cinematic py-28 md:py-36">
      <SectionHeading
        title="Packages"
        description="A starting shape for engagements — every project gets scoped properly on a call before anything is priced."
      />

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {pricingTiers.map((tier, i) => {
          const content = (
            <div className="flex h-full flex-col p-8">
              <h3 className="text-xl font-medium text-ink">{tier.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{tier.summary}</p>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-ink-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={tier.highlighted ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                Discuss this package
              </Button>
            </div>
          );

          return (
            <Reveal key={tier.id} delay={i * 0.08}>
              {tier.highlighted ? (
                <GlassCard glow className="h-full border-accent/30">
                  {content}
                </GlassCard>
              ) : (
                <div className="h-full rounded-2xl border border-line">{content}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
