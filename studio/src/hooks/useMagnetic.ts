import { useEffect, useRef } from "react";

/**
 * Subtle magnetic hover: the element leans toward the cursor while the
 * pointer is over it, then springs back on leave. This is a decorative
 * hover affordance, not a functional control, so it's skipped entirely
 * on touch devices (no `pointer: fine`) and when the user prefers
 * reduced motion — the element just behaves like a normal button.
 *
 * The spring-back relies on the element's own CSS transition for
 * `transform` (every button/link this is used on already transitions
 * `transform` as part of its existing hover styles), so this hook only
 * ever sets inline transform values, never timing.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.35, maxOffset = 14) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (prefersReducedMotion || !isFinePointer) return;

    function clamp(value: number) {
      return Math.max(-maxOffset, Math.min(maxOffset, value));
    }

    function handleMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      el!.style.transform = `translate(${clamp(x * strength)}px, ${clamp(y * strength)}px)`;
    }

    function handleLeave() {
      el!.style.transform = "translate(0, 0)";
    }

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      el.style.transform = "";
    };
  }, [strength, maxOffset]);

  return ref;
}
