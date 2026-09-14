import { useEffect, useState } from "react";
import { contact } from "@/config/contact";
import { WhatsAppIcon } from "@/components/ui/ContactIcons";

/**
 * A quiet, persistent WhatsApp shortcut that stays available while
 * scrolling. Appears after the hero has passed (so it never competes
 * with the opening moment) and stays out of the way — small, muted
 * by default, only brightening on hover/focus rather than pulsing
 * or animating on its own.
 */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={contact.whatsapp.href}
      target="_blank"
      rel="noreferrer"
      aria-label="Book on WhatsApp"
      className={`fixed bottom-6 right-5 z-50 flex items-center gap-2.5 rounded-full border border-white/10 bg-surface/90 py-3 pl-3 pr-4 text-sm font-medium text-ink shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 ease-cinematic hover:border-accent/50 hover:bg-surface hover:text-white hover:shadow-glow-sm focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-void sm:bottom-8 sm:right-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
        <WhatsAppIcon className="h-4 w-4" />
      </span>
      <span className="hidden sm:inline">Book on WhatsApp</span>
    </a>
  );
}
