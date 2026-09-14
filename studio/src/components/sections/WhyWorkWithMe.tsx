import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    title: "You're not one of forty accounts",
    description: "I work with a limited number of clients at a time, so nothing sits waiting for attention.",
  },
  {
    title: "Build and growth aren't separate teams",
    description: "The person who designed your site is the same one running the campaign driving people to it.",
  },
  {
    title: "Plain communication",
    description: "Updates in language you can act on, not jargon that needs translating.",
  },
];

export function WhyWorkWithMe() {
  return (
    <section id="why" className="container-cinematic py-28 md:py-36">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
        <SectionHeading title="Why work with me" />

        <ul className="flex flex-col">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08} as="li">
              <div className="flex flex-col gap-2 border-t border-line py-8 first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
                <h3 className="text-lg font-medium text-ink sm:w-64 sm:shrink-0">{r.title}</h3>
                <p className="max-w-md text-ink-muted leading-relaxed">{r.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
