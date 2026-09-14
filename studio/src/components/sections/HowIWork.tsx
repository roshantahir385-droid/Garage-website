import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  {
    title: "Direct, no account managers",
    description: "You talk to the person actually doing the work, every time.",
  },
  {
    title: "Built to last past launch",
    description: "Sites and systems are set up to be maintained, not rebuilt in a year.",
  },
  {
    title: "Decisions follow data",
    description: "Design and marketing choices get tested against real behavior, not opinion.",
  },
  {
    title: "One accountable partner",
    description: "When something's off, there's no chain of vendors to sort through — just me.",
  },
];

export function HowIWork() {
  return (
    <section id="how-i-work" className="container-cinematic py-28 md:py-36">
      <SectionHeading
        title="How I work"
        description="The same few principles apply whether I'm writing code, designing a page, or running a campaign."
      />

      <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08}>
            <h3 className="text-xl font-medium text-ink">{p.title}</h3>
            <p className="mt-3 max-w-sm text-ink-muted leading-relaxed">{p.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
