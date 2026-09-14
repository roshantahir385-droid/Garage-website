import { useEffect } from "react";
import { useCookieConsent } from "@/lib/cookieConsent";
import { initAnalyticsIfConsented } from "@/lib/analytics";

/**
 * Renders nothing. Just watches consent state and (if analytics is ever
 * wired up in src/lib/analytics.ts) loads it — but only after the
 * visitor has opted in.
 */
export function AnalyticsGate() {
  const { consent } = useCookieConsent();

  useEffect(() => {
    initAnalyticsIfConsented(consent);
  }, [consent]);

  return null;
}
