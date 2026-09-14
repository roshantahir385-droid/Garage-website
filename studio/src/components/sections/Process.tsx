import { process } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section id="process" className="container-cinematic py-28 md:py-36">
      <SectionHeading
        title="The process"
        description="Five stages, in order — nothing skipped, nothing bolted on after the fact."
      />

      <ol className="relative mt-16 flex flex-col">
        <div className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-line sm:block" />
        {process.map((step, i) => (
          <Reveal key={step.step} delay={i * 0.06} as="li">
            <div className="relative flex flex-col gap-4 py-8 first:pt-0 sm:flex-row sm:gap-10">
              <div className="flex items-center gap-4 sm:w-14 sm:shrink-0 sm:flex-col sm:items-start sm:gap-0">
                <span className="relative z-10 flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full border border-accent/50 bg-void text-xs text-accent-soft">
                  {step.step}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-ink">{step.title}</h3>
                <p className="mt-2 max-w-md text-ink-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
