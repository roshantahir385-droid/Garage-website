/**
 * No WebGL, no problem. This reproduces the feeling of the 3D cluster —
 * depth, glow, orbiting motion — using layered gradients and a slow CSS
 * animation, so the hero never looks broken or empty.
 */
export function HeroFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
      <div className="relative h-[420px] w-[420px] max-w-[80vw]">
        <div className="absolute inset-0 rounded-full bg-accent/20 blur-[100px]" />
        <div className="absolute inset-8 rounded-full border border-accent/30 animate-spin-slow motion-reduce:animate-none" />
        <div className="absolute inset-16 rounded-full border border-white/10 animate-spin-slower motion-reduce:animate-none" />
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-glow" />
      </div>
    </div>
  );
}
