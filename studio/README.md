# Personal Studio Site — Foundation

A cinematic, dark-luxury personal brand site: React + TypeScript + Vite,
Tailwind for styling, GSAP/ScrollTrigger for scroll motion, and a single
React Three Fiber scene for the hero centerpiece.

This is the **foundation phase** — structure, design system, and every
section from the brief are in place and content-complete. It's built to
take real content and further motion polish in later passes without
restructuring anything.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (typically `http://localhost:5173`).

```bash
npm run build     # production build to /dist
npm run preview   # preview that build locally
```

## First things to edit

1. **`src/config/site.ts`** — your name, role, email, socials, nav links,
   hero copy, and the `showTestimonials` flag. This is the one file
   almost everything else reads from.
2. **`src/data/work.ts`** — replace the three placeholder projects with
   real case studies. No fake results or numbers are in here on purpose.
3. **`src/data/pricing.ts`** — the three tiers have feature lists but no
   dollar figures; add real numbers or leave it quote-based.
4. **`src/data/testimonials.ts`** — stays empty until you have real,
   attributable quotes. The Testimonials section won't render until both
   this array has entries *and* `showTestimonials` is `true`.

## Architecture

```
src/
  config/site.ts       Single source of truth for brand/contact/nav content
  data/                 All section copy as typed data, not hardcoded in JSX
  components/
    layout/              Navbar, Footer
    ui/                  Reusable primitives: Button, SectionHeading,
                         GlassCard, Reveal (the scroll-reveal wrapper)
    three/               The hero's WebGL scene, split out so it can be
                         lazy-loaded and isolated in its own bundle chunk
    sections/            One component per section in the brief, in
                         page order
  hooks/useWebGLSupport.ts   Feature-detects WebGL + respects reduced motion
  lib/gsap.ts                Registers ScrollTrigger once, globally
```

Sections read from `data/*.ts` rather than embedding copy directly, so
content changes never require touching layout code, and the same data
could later feed a CMS without a rewrite.

## The 3D hero

- `components/three/HeroCanvas.tsx` — the only `<canvas>` on the page.
  One WebGL context, hand-lit (no external HDR fetch), fog for depth.
- `components/three/FloatingCluster.tsx` — five simple objects standing
  in for website / app / social / analytics / growth, gently floating,
  with the whole group easing toward the pointer position for a subtle
  parallax rather than a literal drag.
- `components/three/Particles.tsx` — a sparse drifting point field for
  atmosphere.
- `components/three/HeroFallback.tsx` — a CSS-only orbit/glow visual
  used whenever WebGL isn't available *or* the user has requested
  reduced motion. The hero never looks broken or empty either way.
- The scene is **lazy-loaded** (`React.lazy`) and only fetched once
  `useWebGLSupport` confirms it's worth loading, and it's split into its
  own build chunk in `vite.config.ts` — the heavy geometry code never
  blocks first paint.

## Motion system

- `components/ui/Reveal.tsx` is the one reusable scroll-reveal primitive,
  used consistently across sections rather than a different effect per
  section. It respects `prefers-reduced-motion` (see `index.css` and
  `lib/gsap.ts`).
- The hero has the one deliberately orchestrated moment in the page: a
  staggered load-in sequence for headline/sub/CTAs, and a scroll-tied
  fade-and-recede as the hero scrolls out from under the fixed nav.
- Everything else uses restrained, consistent entrance motion — the goal
  was one memorable moment (the hero), not motion on every element.

## Design tokens (for consistency in later phases)

- **Color:** `#07080B` near-black base, `#0B1120` deep navy undertone,
  `#10131B` surface, `#F3F4F6` primary text, `#9AA1AE` muted text, single
  accent `#4E6BFF` (electric indigo-blue) with a lighter `#8CA0FF` for
  highlights/glow.
- **Type:** Clash Display (headings) + General Sans (body), loaded via
  Fontshare in `index.html`. Large, tight-tracked display sizes for
  headlines; small, clean supporting text.
- **Glassmorphism** is intentionally limited to two spots: the
  highlighted pricing tier and the (currently unused) testimonial cards
  — not applied to every card, per the brief.

## Known next-phase ideas (not built yet, deliberately)

- A dedicated case-study/detail view per project in `data/work.ts`.
- A working contact-form backend (currently opens a pre-filled mailto —
  fully functional with zero server, but swap in Formspree/Resend/your
  own API route when ready; the form fields and validation don't need to
  change).
- More elaborate scroll-driven camera movement through the hero's 3D
  scene (currently: pointer-parallax + a fade/scale exit).
- A CMS or MDX layer over `data/*.ts` if content will be edited by
  someone other than you.

## Browser support notes

- WebGL2/WebGL1 detection with a full CSS fallback — the site is
  intentionally "still works beautifully without 3D," per the brief.
- `prefers-reduced-motion` is respected both for the hero scene (falls
  back to the static-ish CSS visual) and for GSAP-driven reveals.
