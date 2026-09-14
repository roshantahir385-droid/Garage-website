import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookieConsent } from "@/lib/cookieConsent";

export function CookiePreferencesModal() {
  const { preferencesOpen, closePreferences, consent, acceptAll, rejectNonEssential, savePreferences } =
    useCookieConsent();
  const [analytics, setAnalytics] = useState(consent?.analytics ?? false);

  // Re-sync the toggle to stored consent every time the panel opens.
  useEffect(() => {
    if (preferencesOpen) setAnalytics(consent?.analytics ?? false);
  }, [preferencesOpen, consent]);

  useEffect(() => {
    if (!preferencesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreferences();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [preferencesOpen, closePreferences]);

  if (!preferencesOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie preferences"
      className="fixed inset-0 z-[70] flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={closePreferences}
    >
      <div
        className="w-full max-w-lg rounded-t-2xl border border-line bg-[#0b0d12] p-6 shadow-glow sm:rounded-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-lg font-semibold text-ink">Cookie preferences</h2>
          <button
            type="button"
            onClick={closePreferences}
            aria-label="Close"
            className="text-ink-faint transition-colors hover:text-white"
          >
            ✕
          </button>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          Choose which optional cookies we can use. Essential cookies can't
          be switched off — the site needs them to function. See the{" "}
          <Link
            to="/cookie-policy"
            onClick={closePreferences}
            className="text-accent-soft underline underline-offset-4 hover:text-accent"
          >
            Cookie Policy
          </Link>{" "}
          for full details.
        </p>

        <div className="mt-6 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4 rounded-xl border border-line bg-white/[0.02] p-4">
            <div>
              <p className="text-sm font-medium text-ink">Essential</p>
              <p className="mt-1 text-xs text-ink-faint">
                Required for core site functionality, including remembering
                this cookie preference. Always on.
              </p>
            </div>
            <span className="mt-0.5 shrink-0 rounded-full border border-line px-3 py-1 text-xs text-ink-faint">
              Always on
            </span>
          </div>

          <div className="flex items-start justify-between gap-4 rounded-xl border border-line bg-white/[0.02] p-4">
            <div>
              <p className="text-sm font-medium text-ink">Analytics</p>
              <p className="mt-1 text-xs text-ink-faint">
                Helps understand how visitors use the site. Not currently
                active on this site — this toggle takes effect only if and
                when analytics is added.
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={analytics}
              aria-label="Toggle analytics cookies"
              onClick={() => setAnalytics((v) => !v)}
              className={`relative mt-0.5 h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ${
                analytics ? "bg-accent" : "bg-white/10"
              }`}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform duration-200 ${
                  analytics ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={rejectNonEssential}
            className="rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-colors duration-200 hover:border-accent/50 hover:text-white"
          >
            Reject Non-Essential
          </button>
          <button
            type="button"
            onClick={() => savePreferences({ analytics })}
            className="rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-colors duration-200 hover:border-accent/50 hover:text-white"
          >
            Save Preferences
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-glow-sm transition-all duration-300 ease-cinematic hover:bg-accent-soft hover:shadow-glow"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
