export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

/**
 * Intentionally empty. Do not fill this with placeholder or invented
 * quotes — the Testimonials section (see components/sections/Testimonials.tsx)
 * only renders once this array has real, attributable entries, and the
 * `site.showTestimonials` flag in config/site.ts is switched on.
 */
export const testimonials: Testimonial[] = [];
