import type { ProjectPreviewKind } from "@/data/work";

/**
 * Abstract, original preview compositions — one per concept project.
 * These are deliberately not screenshots or literal UI mockups of a
 * real product; they're shape-based stand-ins, same spirit as the
 * services environments. The repeated watermark keeps every preview
 * honestly labeled even at a glance, on top of the "CONCEPT PROJECT"
 * badge rendered in the card itself.
 */

function Watermark() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 overflow-hidden opacity-[0.06]"
      style={{ transform: "rotate(-18deg) scale(1.4)" }}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <span key={i} className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.3em] text-white">
          Concept
        </span>
      ))}
    </div>
  );
}

function StorefrontPreview() {
  return (
    <div className="relative flex h-full w-full items-center justify-center gap-4 p-8">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`animate-drift-y-sm h-16 w-16 rounded-lg border border-line sm:h-20 sm:w-20 ${
              i === 1 || i === 4 ? "bg-accent/25" : "bg-white/[0.04]"
            }`}
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>
      <div className="absolute bottom-6 right-6 h-9 rounded-full bg-accent/80 px-4 text-xs leading-9 text-white opacity-80">
        Add to cart
      </div>
    </div>
  );
}

function AppPreview() {
  return (
    <div className="relative flex h-full w-full items-center justify-center [perspective:1200px]">
      <div className="animate-tilt-y h-40 w-24 rounded-[1.2rem] border border-line bg-surface shadow-glow-sm">
        <div className="mx-auto mt-2.5 h-1 w-6 rounded-full bg-white/10" />
        <div className="space-y-2 p-3 pt-4">
          <div className="h-10 rounded-md bg-accent/30" />
          <div className="h-2 w-3/4 rounded-full bg-white/10" />
          <div className="h-2 w-1/2 rounded-full bg-white/10" />
        </div>
      </div>
      <div className="animate-orbit-slow absolute h-2 w-2 rounded-full bg-accent-soft [--orbit-r:80px]" />
    </div>
  );
}

function SocialPreview() {
  return (
    <div className="relative flex h-full w-full items-center justify-center gap-3">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`animate-drift-y-sm h-28 w-20 rounded-xl border border-line bg-surface/80 sm:h-32 sm:w-24 ${
            i === 1 ? "border-accent/40 shadow-glow-sm" : ""
          }`}
          style={{ animationDelay: `${i * 0.4}s` }}
        >
          <div className="m-2 h-2 w-2 rounded-full bg-accent-soft/70" />
          <div className={`mx-2 h-14 rounded-md sm:h-16 ${i === 1 ? "bg-accent/25" : "bg-white/[0.05]"}`} />
        </div>
      ))}
    </div>
  );
}

function ListingsPreview() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-2.5 p-8">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-lg border border-line bg-surface/70 p-2.5"
        >
          <div className={`h-10 w-14 shrink-0 rounded-md ${i === 0 ? "bg-accent/30" : "bg-white/[0.06]"}`} />
          <div className="flex-1 space-y-1.5">
            <span className="block h-1.5 w-2/3 rounded-full bg-white/10" />
            <span className="block h-1.5 w-1/3 rounded-full bg-white/[0.06]" />
          </div>
          <span className="h-4 w-10 shrink-0 rounded-full bg-accent-soft/30" />
        </div>
      ))}
    </div>
  );
}

function CartPreview() {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <div className="w-full max-w-[15rem] rounded-xl border border-line bg-surface/80 p-4 shadow-glow-sm">
        <div className="h-16 rounded-md bg-accent/20" />
        <div className="mt-3 space-y-1.5">
          <span className="block h-2 w-5/6 rounded-full bg-white/10" />
          <span className="block h-2 w-1/2 rounded-full bg-white/[0.06]" />
        </div>
        <div className="mt-4 h-8 rounded-full bg-accent/80" />
      </div>
      <div className="animate-drift-y-sm absolute -right-2 top-6 h-10 w-10 rounded-lg border border-accent-soft/40 bg-accent/10 sm:right-4" />
    </div>
  );
}

const previews: Record<ProjectPreviewKind, () => JSX.Element> = {
  storefront: StorefrontPreview,
  app: AppPreview,
  social: SocialPreview,
  listings: ListingsPreview,
  cart: CartPreview,
};

export function ProjectPreview({ kind }: { kind: ProjectPreviewKind }) {
  const Preview = previews[kind];
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Watermark />
      <Preview />
    </div>
  );
}
