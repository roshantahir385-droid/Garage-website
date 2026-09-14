import { useRef, useState, type MouseEvent } from "react";
import type { Service } from "@/data/services";
import {
  AppManagementIcon,
  DigitalMarketingIcon,
  LandingPageIcon,
  MaintenanceIcon,
  SocialManagementIcon,
  SocialMarketingIcon,
  WebDevIcon,
  WebsiteDesignIcon,
} from "@/components/services/ServiceIcons";

const icons: Record<string, (props: { className?: string }) => JSX.Element> = {
  "web-development": WebDevIcon,
  "website-design": WebsiteDesignIcon,
  "website-maintenance": MaintenanceIcon,
  "app-management": AppManagementIcon,
  "social-media-marketing": SocialMarketingIcon,
  "social-media-management": SocialManagementIcon,
  "landing-pages": LandingPageIcon,
  "digital-marketing": DigitalMarketingIcon,
};

const MAX_TILT = 7;

export function ServiceCard({ service }: { service: Service }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [open, setOpen] = useState(false);
  const Icon = icons[service.id] ?? WebDevIcon;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    setTilt({
      x: (py - 0.5) * -MAX_TILT,
      y: (px - 0.5) * MAX_TILT,
    });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl border border-line bg-surface/60 p-6 transition-[border-color,box-shadow] duration-300 ease-cinematic hover:border-accent/40 hover:shadow-glow-sm sm:p-7 [perspective:1000px]"
    >
      <div
        className="transition-transform duration-300 ease-cinematic will-change-transform"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div
          className="flex h-14 w-14 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-ink-muted transition-all duration-300 ease-cinematic group-hover:-translate-y-0.5 group-hover:border-accent/40 group-hover:text-accent-soft group-hover:shadow-glow-sm"
          style={{ transform: "translateZ(24px)" }}
        >
          <Icon className="h-8 w-8" />
        </div>

        <h3
          className="mt-6 text-lg font-medium text-ink transition-colors duration-300 group-hover:text-white"
          style={{ transform: "translateZ(16px)" }}
        >
          {service.title}
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">{service.description}</p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-soft transition-colors duration-300 hover:text-white"
        >
          Learn more
          <svg
            viewBox="0 0 16 16"
            className={`h-3.5 w-3.5 transition-transform duration-300 ease-cinematic ${
              open ? "rotate-90" : ""
            }`}
            fill="none"
          >
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div
          className={`grid overflow-hidden transition-all duration-[400ms] ease-cinematic ${
            open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <ul className="min-h-0 space-y-2 border-t border-line pt-4">
            {service.capabilities.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
