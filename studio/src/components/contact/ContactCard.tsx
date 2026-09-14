import type { ReactNode } from "react";

type ContactCardProps = {
  icon: ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  href: string | null;
  ctaLabel: string;
  /** WhatsApp is the primary channel — gets the accent treatment. */
  emphasized?: boolean;
  disabledNote?: string;
};

/**
 * One of the three contact method cards (WhatsApp / Gmail / Snapchat).
 * Deliberately built as a single shared component so every card matches
 * in size, spacing, typography and hover behavior — only the emphasis
 * flag and icon differ.
 */
export function ContactCard({
  icon,
  eyebrow,
  title,
  description,
  href,
  ctaLabel,
  emphasized = false,
  disabledNote,
}: ContactCardProps) {
  const isDisabled = !href;

  const cardStyles = emphasized
    ? "border-accent/40 bg-accent/[0.06] shadow-glow-sm hover:shadow-glow hover:border-accent/70"
    : "border-line bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]";

  const iconWrapStyles = emphasized
    ? "bg-accent text-white shadow-glow-sm"
    : "bg-white/[0.06] text-ink group-hover:text-white";

  const content = (
    <div
      className={`group relative flex h-full flex-col gap-6 rounded-2xl border p-7 backdrop-blur-xl transition-all duration-300 ease-cinematic sm:p-8 ${cardStyles} ${
        isDisabled ? "opacity-60" : ""
      }`}
    >
      {emphasized && (
        <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white shadow-glow-sm">
          Fastest reply
        </span>
      )}

      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${iconWrapStyles}`}
      >
        <span className="h-6 w-6">{icon}</span>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">{eyebrow}</p>
        <h3 className="text-xl font-semibold text-ink">{title}</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
      </div>

      <div className="mt-auto flex items-center gap-2 pt-2 text-sm font-medium text-ink transition-colors duration-300 group-hover:text-white">
        {isDisabled ? (
          <span className="text-ink-faint">{disabledNote ?? "Coming soon"}</span>
        ) : (
          <>
            <span>{ctaLabel}</span>
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </>
        )}
      </div>
    </div>
  );

  if (isDisabled) {
    return (
      <div aria-disabled="true" className="h-full cursor-not-allowed">
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${ctaLabel} — ${title}`}
      className="block h-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-void"
    >
      {content}
    </a>
  );
}
