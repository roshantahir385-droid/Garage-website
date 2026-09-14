import { useEffect, useState } from "react";

/**
 * Cheaply detects whether the current device/browser can reasonably run
 * WebGL. Used to decide between the real Three.js hero scene and the
 * lightweight CSS fallback — the site must look complete either way.
 */
export function useWebGLSupport(): boolean | null {
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // A low-power / reduced-motion device gets the fallback even if
      // WebGL is technically available — cinematic 3D isn't worth the
      // battery or the motion for someone who's opted out.
      setSupported(Boolean(gl) && !prefersReducedMotion);
    } catch {
      setSupported(false);
    }
  }, []);

  return supported;
}
