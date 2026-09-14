import type { SVGProps } from "@/components/services/types";

/**
 * One small original icon per service. Hand-drawn as plain SVG (no icon
 * library dependency) and kept to the site's single-accent palette so
 * they read as part of the same system as the rest of the page, not a
 * bolted-on icon pack.
 */

export function WebDevIcon(props: SVGProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <rect x="4" y="7" width="32" height="26" rx="4" stroke="currentColor" strokeOpacity="0.35" />
      <path d="M4 14h32" stroke="currentColor" strokeOpacity="0.35" />
      <circle cx="9" cy="10.5" r="1.1" fill="currentColor" opacity="0.5" />
      <circle cx="13" cy="10.5" r="1.1" fill="currentColor" opacity="0.5" />
      <path
        d="M15 21l-3.5 3.5L15 28M25 21l3.5 3.5L25 28M21.5 19l-3 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-soft"
      />
    </svg>
  );
}

export function WebsiteDesignIcon(props: SVGProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <rect x="5" y="6" width="30" height="28" rx="4" stroke="currentColor" strokeOpacity="0.35" />
      <rect x="9" y="11" width="10" height="8" rx="1.5" className="text-accent" fill="currentColor" opacity="0.7" />
      <path d="M9 23h22M9 27h16M9 31h10" stroke="currentColor" strokeOpacity="0.4" strokeLinecap="round" />
      <circle cx="28" cy="14.5" r="3" className="text-accent-soft" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function MaintenanceIcon(props: SVGProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path
        d="M23.2 9.8a6.4 6.4 0 0 0-8.7 8l-9 9a2.6 2.6 0 0 0 3.7 3.7l9-9a6.4 6.4 0 0 0 8-8.7l-4 .6-2.6-2.6.6-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        className="text-accent-soft"
      />
      <circle cx="10.5" cy="29.5" r="1.3" fill="currentColor" opacity="0.6" />
      <path d="M27 27l3 1 1 3-2.2 2.2-3-1-1-3z" stroke="currentColor" strokeOpacity="0.4" strokeLinejoin="round" />
    </svg>
  );
}

export function AppManagementIcon(props: SVGProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <rect x="11" y="5" width="18" height="30" rx="4" stroke="currentColor" strokeOpacity="0.35" />
      <path d="M17 9h6" stroke="currentColor" strokeOpacity="0.4" strokeLinecap="round" />
      <rect x="15" y="14" width="4.5" height="4.5" rx="1" className="text-accent" fill="currentColor" opacity="0.75" />
      <rect x="20.5" y="14" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeOpacity="0.4" />
      <rect x="15" y="19.5" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeOpacity="0.4" />
      <rect
        x="20.5"
        y="19.5"
        width="4.5"
        height="4.5"
        rx="1"
        className="text-accent-soft"
        fill="currentColor"
        opacity="0.6"
      />
      <path d="M18.5 30.5h3" stroke="currentColor" strokeOpacity="0.5" strokeLinecap="round" />
    </svg>
  );
}

export function SocialMarketingIcon(props: SVGProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <circle cx="13" cy="14" r="5" stroke="currentColor" strokeOpacity="0.4" />
      <circle cx="27" cy="12" r="3.2" className="text-accent-soft" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="28" cy="26" r="4" className="text-accent" fill="currentColor" opacity="0.65" />
      <path d="M17 16.5l6.5-3M17.5 15l6-8M18 16l7 8.5" stroke="currentColor" strokeOpacity="0.4" strokeLinecap="round" />
    </svg>
  );
}

export function SocialManagementIcon(props: SVGProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <rect x="5" y="9" width="20" height="14" rx="4" stroke="currentColor" strokeOpacity="0.4" />
      <path d="M9 23v4l5-4" stroke="currentColor" strokeOpacity="0.4" strokeLinejoin="round" />
      <path d="M10 14h11M10 17.5h7" stroke="currentColor" strokeOpacity="0.5" strokeLinecap="round" />
      <rect
        x="20"
        y="19"
        width="14"
        height="10"
        rx="3.5"
        className="text-accent"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M23.5 24h7M23.5 26.5h4.5" stroke="currentColor" opacity="0.6" strokeLinecap="round" />
    </svg>
  );
}

export function LandingPageIcon(props: SVGProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <rect x="9" y="5" width="22" height="30" rx="4" stroke="currentColor" strokeOpacity="0.35" />
      <rect x="13" y="10" width="14" height="7" rx="1.5" className="text-accent" fill="currentColor" opacity="0.65" />
      <path d="M13 21h14M13 24.5h9" stroke="currentColor" strokeOpacity="0.4" strokeLinecap="round" />
      <rect x="13" y="28" width="9" height="3.4" rx="1.7" className="text-accent-soft" fill="currentColor" />
    </svg>
  );
}

export function DigitalMarketingIcon(props: SVGProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path d="M6 30V10M6 30h28" stroke="currentColor" strokeOpacity="0.35" strokeLinecap="round" />
      <rect x="10" y="21" width="4" height="9" rx="1" stroke="currentColor" strokeOpacity="0.4" />
      <rect x="17" y="15" width="4" height="15" rx="1" className="text-accent" fill="currentColor" opacity="0.7" />
      <rect x="24" y="10" width="4" height="20" rx="1" className="text-accent-soft" fill="currentColor" opacity="0.85" />
      <path d="M11 18l7-5 6 3 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
