import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { site } from "@/config/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Section anchors like "#about" only resolve on the homepage. From any
  // other route, prefix with "/" so the browser loads home first, then
  // jumps to the section.
  const resolveHref = (href: string) => (isHome || !href.startsWith("#") ? href : `/${href}`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-cinematic ${
        scrolled ? "border-b border-line bg-void/70 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="container-cinematic flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 text-xs font-semibold text-accent-soft">
            {site.mark}
          </span>
          <span className="text-sm font-medium text-ink">{site.name}</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={resolveHref(item.href)}
                className="text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={resolveHref(site.hero.primaryCta.href)}
          className="hidden rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-colors duration-200 hover:border-accent/50 hover:text-white md:inline-flex"
        >
          {site.hero.primaryCta.label}
        </a>
      </nav>
    </header>
  );
}
