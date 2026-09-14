import { useState } from "react";
import { faqs } from "@/data/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="container-cinematic py-28 md:py-36">
      <SectionHeading title="Questions worth answering upfront" />

      <div className="mt-16 max-w-3xl border-t border-line">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={item.question} delay={i * 0.04}>
              <div className="border-b border-line">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-base font-medium text-ink">{item.question}</span>
                  <span
                    className={`shrink-0 text-xl text-ink-muted transition-transform duration-500 ease-cinematic ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  data-open={isOpen}
                  className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-cinematic data-[open=true]:grid-rows-[1fr]"
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pb-6 leading-relaxed text-ink-muted">{item.answer}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
