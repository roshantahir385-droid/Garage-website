import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { legal } from "@/config/legal";

export function LegalLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="pb-24 pt-32 sm:pt-40">
      <div className="container-cinematic">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors duration-200 hover:text-white"
        >
          <span aria-hidden>←</span> Back to home
        </Link>

        <div className="mt-8 max-w-3xl">
          <h1 className="text-display-md font-semibold text-balance">{title}</h1>
          {intro && <p className="mt-4 leading-relaxed text-ink-muted">{intro}</p>}
          <p className="mt-4 text-xs uppercase tracking-wide text-ink-faint">
            Last updated: {legal.lastUpdated}
          </p>
        </div>

        <div className="mt-12 max-w-3xl">
          <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] px-5 py-4 text-sm leading-relaxed text-amber-100/90">
            This page is a plain-language template, not legal advice for any
            specific jurisdiction. It's provided so you can review it — and
            have it reviewed by a qualified legal professional — before
            publishing. Bracketed text like{" "}
            <code className="rounded bg-white/10 px-1 py-0.5 text-[0.85em]">
              [example]
            </code>{" "}
            marks a placeholder you need to fill in or confirm.
          </div>

          <div className="legal-prose mt-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
