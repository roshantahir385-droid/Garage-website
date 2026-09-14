import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col gap-5 ${alignment}`}>
      <h2 className="text-display-md font-semibold text-balance max-w-2xl">{title}</h2>
      {description && (
        <p className="max-w-prose text-ink-muted text-base leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
