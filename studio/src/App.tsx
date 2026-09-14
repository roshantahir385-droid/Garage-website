import { Route, Routes } from "react-router-dom";

import { CookieConsentProvider } from "@/lib/cookieConsent";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { AmbientWorld } from "@/components/three/AmbientWorld";
import { FloatingWhatsApp } from "@/components/contact/FloatingWhatsApp";
import { CookieConsentBanner } from "@/components/cookies/CookieConsentBanner";
import { CookiePreferencesModal } from "@/components/cookies/CookiePreferencesModal";
import { AnalyticsGate } from "@/components/cookies/AnalyticsGate";

import { Home } from "@/pages/Home";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";
import { Terms } from "@/pages/Terms";
import { CookiePolicy } from "@/pages/CookiePolicy";
import { RefundPolicy } from "@/pages/RefundPolicy";
import { Disclaimer } from "@/pages/Disclaimer";

export default function App() {
  return (
    <CookieConsentProvider>
      {/* First focusable element on the page — lets keyboard and screen
          reader users jump straight past the nav to the page content. */}
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white opacity-0 transition-all duration-200 focus-visible:translate-y-0 focus-visible:opacity-100"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <AmbientWorld />
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieConsentBanner />
      <CookiePreferencesModal />
      <AnalyticsGate />
    </CookieConsentProvider>
  );
}
