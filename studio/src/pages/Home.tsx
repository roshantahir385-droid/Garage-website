import { site } from "@/config/site";
import { testimonials } from "@/data/testimonials";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { HowIWork } from "@/components/sections/HowIWork";
import { Work } from "@/components/sections/Work";
import { Skills } from "@/components/sections/Skills";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export function Home() {
  // Testimonials only ever appears once there's real content to show —
  // see data/testimonials.ts and site.showTestimonials in config/site.ts.
  const testimonialsReady = site.showTestimonials && testimonials.length > 0;

  return (
    <>
      <Hero />
      <About />
      <Services />
      <HowIWork />
      <Work />
      <Skills />
      <WhyWorkWithMe />
      <Process />
      {testimonialsReady && <Testimonials />}
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
