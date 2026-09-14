import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/**
 * Consent is stored in the browser's localStorage under this key —
 * functionally similar to a cookie, but not itself transmitted to any
 * server. This module never reads or sets it before the visitor has made
 * a choice, and never enables anything non-essential without opt-in.
 */
const STORAGE_KEY = "cookie-consent";
const CONSENT_VERSION = 1;

/** Stored consent shape, versioned so old records can be discarded if
 * the schema (categories) ever changes. */
export type ConsentRecord = {
  essential: true;
  analytics: boolean;
  decidedAt: string; // ISO timestamp
  version: number;
};

function readStoredConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeStoredConsent(record: ConsentRecord) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    // Storage may be unavailable (private browsing, disabled storage,
    // browser extensions, etc). Consent just won't persist across
    // reloads in that case — the banner reappears, which is the safe
    // fallback (nothing non-essential gets silently enabled).
  }
}

type CookieConsentContextValue = {
  consent: ConsentRecord | null;
  hasDecided: boolean;
  preferencesOpen: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (categories: { analytics: boolean }) => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentRecord | null>(() => readStoredConsent());
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  const persist = useCallback((analytics: boolean) => {
    const record: ConsentRecord = {
      essential: true,
      analytics,
      decidedAt: new Date().toISOString(),
      version: CONSENT_VERSION,
    };
    writeStoredConsent(record);
    setConsent(record);
  }, []);

  const acceptAll = useCallback(() => {
    persist(true);
    setPreferencesOpen(false);
  }, [persist]);

  const rejectNonEssential = useCallback(() => {
    persist(false);
    setPreferencesOpen(false);
  }, [persist]);

  const savePreferences = useCallback(
    (categories: { analytics: boolean }) => {
      persist(categories.analytics);
      setPreferencesOpen(false);
    },
    [persist]
  );

  const openPreferences = useCallback(() => setPreferencesOpen(true), []);
  const closePreferences = useCallback(() => setPreferencesOpen(false), []);

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      consent,
      hasDecided: consent !== null,
      preferencesOpen,
      openPreferences,
      closePreferences,
      acceptAll,
      rejectNonEssential,
      savePreferences,
    }),
    [consent, preferencesOpen, openPreferences, closePreferences, acceptAll, rejectNonEssential, savePreferences]
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }
  return ctx;
}
