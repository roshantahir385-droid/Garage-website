import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

const traits = [
  "One point of contact instead of a chain of freelancers",
  "Comfortable across both the technical build and the marketing side",
  "Built to stay on after launch, not disappear once the site is live",
];

export function About() {
  return (
    <section id="about" className="container-cinematic py-28 md:py-36">
      <div className="grid gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-24">
        <div>
          <Reveal>
            <p className="text-sm text-ink-muted">Who I am</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-display-md font-semibold text-balance">
              {site.name} — {site.role}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 max-w-prose space-y-5 text-ink-muted leading-relaxed">
              <p>
                Most businesses end up with their website, socials, and marketing split
                across different freelancers who don't talk to each other. I work
                differently — one person responsible for how your digital presence
                looks, runs, and grows over time.
              </p>
              <p>
                That means the site I build is also the site I maintain, the socials I
                set up are the ones I manage, and the strategy behind a campaign
                connects back to the platform it's driving traffic to. Nothing gets
                lost in handoff.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal from="right" delay={0.15}>
          <ul className="flex flex-col gap-6 border-l border-line pl-8">
            {traits.map((t) => (
              <li key={t} className="text-ink-muted leading-relaxed">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
