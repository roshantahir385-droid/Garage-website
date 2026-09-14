import { Link, useLocation } from "react-router-dom";
import { site } from "@/config/site";
import { contact } from "@/config/contact";
import { services } from "@/data/services";
import { useCookieConsent } from "@/lib/cookieConsent";
import { WhatsAppIcon, GmailIcon, SnapchatIcon } from "@/components/ui/ContactIcons";

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms", to: "/terms" },
  { label: "Cookie Policy", to: "/cookie-policy" },
  { label: "Refund Policy", to: "/refund-policy" },
  { label: "Disclaimer", to: "/disclaimer" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { openPreferences } = useCookieConsent();

  // Section anchors like "#about" only resolve on the homepage. From any
  // other route, prefix with "/" so the browser loads home first, then
  // jumps to the section.
  const resolveHref = (href: string) => (isHome || !href.startsWith("#") ? href : `/${href}`);

  return (
    <footer className="border-t border-line">
      <div className="container-cinematic flex flex-col gap-14 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand + short description */}
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 text-xs font-semibold text-accent-soft">
                {site.mark}
              </span>
              <span className="text-sm font-medium text-ink">{site.name}</span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-ink-muted">{site.tagline}</p>

            <ul className="mt-6 flex gap-5">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-ink-muted transition-colors hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-faint">
              Services
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href={resolveHref("#services")}
                    className="text-sm text-ink-muted transition-colors hover:text-white"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct contact channels */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-faint">
              Contact
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href={contact.whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-ink-muted transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={contact.email.href}
                  className="inline-flex items-center gap-2.5 text-sm text-ink-muted transition-colors hover:text-white"
                >
                  <GmailIcon className="h-4 w-4 shrink-0" />
                  {site.email}
                </a>
              </li>
              {contact.snapchat.enabled && contact.snapchat.href && (
                <li>
                  <a
                    href={contact.snapchat.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm text-ink-muted transition-colors hover:text-white"
                  >
                    <SnapchatIcon className="h-4 w-4 shrink-0" />
                    Snapchat
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Site sections */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-faint">
              Explore
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={resolveHref(item.href)}
                    className="text-sm text-ink-muted transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line pt-8 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {site.location}.
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-ink-muted">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button type="button" onClick={openPreferences} className="transition-colors hover:text-ink-muted">
                Cookie Preferences
              </button>
            </li>
          </ul>
          <p className="text-ink-faint/70">These pages are templates for review — not legal advice.</p>
        </div>
      </div>
    </footer>
  );
}
