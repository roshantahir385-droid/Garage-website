import type { ServiceEnvironment } from "@/data/services";

/**
 * Abstract, original "environment" backdrops for the services scroll
 * sequence. Deliberately not another react-three-fiber scene — the
 * hero is the site's one WebGL context (see three/HeroCanvas.tsx) — so
 * these are plain SVG + CSS, animated with the same drift/orbit/pulse
 * keyframes used elsewhere, and fully stilled under reduced motion via
 * index.css. Nothing here references a real browser chrome, OS, or app
 * interface — shapes only.
 */

function Glow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute h-64 w-64 rounded-full bg-accent/25 blur-3xl ${className}`}
    />
  );
}

function BrowserEnvironment() {
  return (
    <div className="relative flex h-full w-full items-center justify-center [perspective:1400px]">
      <Glow className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Back panel */}
      <div className="animate-drift-y-sm absolute h-40 w-56 -translate-x-16 translate-y-10 rounded-xl border border-line bg-surface/70 opacity-60 shadow-glow-sm sm:h-48 sm:w-64" />

      {/* Main "browser" panel */}
      <div className="animate-drift-y relative h-48 w-72 rounded-2xl border border-line bg-surface shadow-glow-sm sm:h-56 sm:w-80">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
          <span className="h-1.5 w-1.5 rounded-full bg-ink-faint/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-ink-faint/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-ink-faint/60" />
          <span className="ml-2 h-2 flex-1 max-w-[60%] rounded-full bg-white/[0.06]" />
        </div>
        <div className="space-y-2.5 p-5">
          <span className="block h-2.5 w-2/3 rounded-full bg-accent/70" />
          <span className="block h-2 w-full rounded-full bg-white/[0.06]" />
          <span className="block h-2 w-5/6 rounded-full bg-white/[0.06]" />
          <span className="mt-3 block h-8 w-24 rounded-full bg-accent/25" />
        </div>
      </div>

      {/* Floating fragment, front */}
      <div className="animate-drift-y-sm absolute h-16 w-16 translate-x-24 -translate-y-16 rounded-lg border border-accent-soft/40 bg-accent/10 sm:translate-x-32" />
      <div className="animate-orbit-slow absolute h-2.5 w-2.5 rounded-full bg-accent-soft [--orbit-r:120px]" />
    </div>
  );
}

function AppEnvironment() {
  return (
    <div className="relative flex h-full w-full items-center justify-center [perspective:1400px]">
      <Glow className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="animate-orbit-slower absolute h-3 w-3 rounded-full bg-accent/70 [--orbit-r:140px]" />
      <div className="animate-orbit-slow absolute h-2 w-2 rounded-full bg-accent-soft/80 [--orbit-r:100px]" />

      {/* Rotating "device" */}
      <div className="animate-tilt-y h-56 w-32 rounded-[1.6rem] border border-line bg-surface shadow-glow-sm sm:h-64 sm:w-36">
        <div className="mx-auto mt-3 h-1 w-8 rounded-full bg-white/10" />
        <div className="grid grid-cols-3 gap-2.5 p-4 pt-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className={`aspect-square rounded-md ${
                i === 2 ? "bg-accent/80" : i === 4 ? "bg-accent-soft/60" : "bg-white/[0.07]"
              }`}
            />
          ))}
        </div>
        <div className="mx-auto mt-2 h-6 w-6 rounded-full border border-white/10" />
      </div>

      <div className="animate-drift-y-sm absolute h-10 w-10 -translate-x-28 translate-y-6 rounded-lg border border-accent-soft/40 bg-accent/10" />
    </div>
  );
}

function SocialEnvironment() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <Glow className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Orbiting "profile" rings */}
      <div className="animate-orbit-slow absolute h-9 w-9 rounded-full border-2 border-accent-soft/60 [--orbit-r:130px]" />
      <div className="animate-orbit-slower absolute h-6 w-6 rounded-full border-2 border-accent/70 [--orbit-r:95px]" />
      <div className="animate-orbit-slow absolute h-3 w-3 rounded-full bg-accent-soft [--orbit-r:60px]" />

      {/* Content card stack */}
      <div className="animate-drift-y-sm absolute h-24 w-32 -translate-x-20 -translate-y-4 rounded-xl border border-line bg-surface/70 opacity-70" />
      <div className="animate-drift-y relative h-28 w-40 rounded-xl border border-line bg-surface shadow-glow-sm">
        <div className="m-3 flex items-center gap-2">
          <span className="h-4 w-4 rounded-full bg-accent/70" />
          <span className="h-1.5 w-14 rounded-full bg-white/[0.08]" />
        </div>
        <div className="mx-3 h-10 rounded-lg bg-white/[0.05]" />
        <div className="mx-3 mt-2 flex gap-2">
          <span className="h-1.5 w-5 rounded-full bg-accent-soft/60" />
          <span className="h-1.5 w-5 rounded-full bg-white/[0.08]" />
        </div>
      </div>
      <div className="animate-drift-y-sm absolute h-16 w-16 translate-x-24 translate-y-10 rounded-full border border-accent/40 bg-accent/10" />
    </div>
  );
}

function GrowthEnvironment() {
  const bars = [0.35, 0.55, 0.42, 0.72, 0.9];
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <Glow className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative flex h-48 w-64 items-end gap-3 rounded-2xl border border-line bg-surface/70 p-6 shadow-glow-sm sm:h-56 sm:w-72">
        {bars.map((h, i) => (
          <span
            key={i}
            className={`animate-rise flex-1 rounded-t-md ${
              i === bars.length - 1 ? "bg-accent" : "bg-white/[0.08]"
            }`}
            style={{
              height: `${h * 100}%`,
              transformOrigin: "bottom",
              animationDelay: `${i * 0.25}s`,
            }}
          />
        ))}

        <svg
          viewBox="0 0 240 160"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <path
            d="M10 130 L60 100 L110 115 L160 55 L225 25"
            fill="none"
            stroke="#8CA0FF"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.85"
          />
          <circle cx="225" cy="25" r="4.5" fill="#8CA0FF" className="animate-pulse-soft" />
        </svg>
      </div>

      <div className="animate-drift-y-sm absolute h-10 w-10 -translate-x-28 -translate-y-16 rounded-lg border border-accent-soft/40 bg-accent/10" />
    </div>
  );
}

const environments: Record<ServiceEnvironment, () => JSX.Element> = {
  web: BrowserEnvironment,
  app: AppEnvironment,
  social: SocialEnvironment,
  growth: GrowthEnvironment,
};

export function ServiceEnvironmentVisual({ environment }: { environment: ServiceEnvironment }) {
  const Environment = environments[environment];
  return <Environment />;
}
