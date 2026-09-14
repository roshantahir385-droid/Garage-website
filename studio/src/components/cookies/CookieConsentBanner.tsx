import { Link } from "react-router-dom";
import { useCookieConsent } from "@/lib/cookieConsent";

export function CookieConsentBanner() {
  const { hasDecided, acceptAll, rejectNonEssential, openPreferences } = useCookieConsent();

  if (hasDecided) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-line bg-void/95 p-5 shadow-glow-sm backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <p className="text-sm leading-relaxed text-ink-muted">
          We use essential cookies to run this site. With your permission
          we'd also use optional analytics cookies to understand how the
          site is used — these stay off unless you say yes. See our{" "}
          <Link
            to="/cookie-policy"
            className="text-accent-soft underline underline-offset-4 hover:text-accent"
          >
            Cookie Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            type="button"
            onClick={openPreferences}
            className="rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-colors duration-200 hover:border-accent/50 hover:text-white"
          >
            Manage Preferences
          </button>
          <button
            type="button"
            onClick={rejectNonEssential}
            className="rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-colors duration-200 hover:border-accent/50 hover:text-white"
          >
            Reject Non-Essential
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
