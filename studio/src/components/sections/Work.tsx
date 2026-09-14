import { work } from "@/data/work";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectPanel } from "@/components/work/ProjectPanel";

export function Work() {
  return (
    <section id="work" className="container-cinematic py-28 md:py-36">
      <SectionHeading
        title="Selected work"
        description={
          <>
            Five concept projects — self-directed spec work built to show range and approach, not
            real client engagements. No client names, metrics, or results are attached to any of
            them; each is labeled "Concept Project" below. Real case studies will replace these as
            they're ready.
          </>
        }
      />

      <div className="mt-16 flex flex-col gap-10 md:gap-14">
        {work.map((item, i) => (
          <ProjectPanel key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
