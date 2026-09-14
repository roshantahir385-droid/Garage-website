/**
 * Analytics loader stub.
 *
 * No analytics or tracking script is implemented on this site today.
 * This file exists so that WHEN one is added later (e.g. Plausible,
 * Fathom, GA4), it has a single, consent-gated place to load from —
 * instead of being dropped straight into index.html or a component.
 *
 * To wire up real analytics later:
 *   1. Fill in `loadAnalytics()` below with the real script/init code.
 *   2. Update the Cookie Policy and Privacy Policy pages to name the
 *      actual provider in use.
 * Nothing else needs to change — `initAnalyticsIfConsented` is already
 * called from `AnalyticsGate` on every consent change, and will only
 * ever call `loadAnalytics()` after the visitor has opted in to
 * analytics cookies.
 */
import type { ConsentRecord } from "./cookieConsent";

let loaded = false;

function loadAnalytics() {
  // Intentionally empty — no analytics provider is wired up yet.
  //
  // Example of what this looks like once you pick a provider (do NOT
  // uncomment until you've actually chosen one and updated the Cookie
  // Policy to name it):
  //
  // const script = document.createElement("script");
  // script.src = "https://provider.example.com/script.js";
  // script.defer = true;
  // document.head.appendChild(script);
}

/** Loads analytics once, and only if the visitor has consented. */
export function initAnalyticsIfConsented(consent: ConsentRecord | null) {
  if (loaded) return;
  if (!consent?.analytics) return;
  loadAnalytics();
  loaded = true;
}
