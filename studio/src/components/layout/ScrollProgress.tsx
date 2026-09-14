import { useEffect, useRef } from "react";

/**
 * A hairline progress indicator pinned to the very top of the viewport,
 * above the navbar. Purely a quiet cinematic touch — it reinforces the
 * "one continuous scroll" framing without competing for attention, and
 * costs nothing extra: no GSAP timeline, just a rAF-throttled scroll
 * listener writing a single transform.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    function update() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? doc.scrollTop / scrollable : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
      ticking = false;
    }

    function onScrollOrResize() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent">
      <div
        ref={barRef}
        className="h-full origin-left bg-gradient-to-r from-accent to-accent-soft"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
