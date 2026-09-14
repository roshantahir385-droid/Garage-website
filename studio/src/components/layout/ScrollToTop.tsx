import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * react-router doesn't reset scroll position between routes on its own.
 * This resets to the top when the *path* changes (e.g. "/" -> "/terms"),
 * but deliberately leaves scroll alone when only the hash changes
 * (e.g. clicking "#about" on the homepage), so in-page section links
 * keep working as expected.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      if (!hash) {
        window.scrollTo(0, 0);
      }
      prevPathname.current = pathname;
    }
  }, [pathname, hash]);

  return null;
}
