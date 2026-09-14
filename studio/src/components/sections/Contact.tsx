import { contact } from "@/config/contact";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon, GmailIcon, SnapchatIcon } from "@/components/ui/ContactIcons";
import { ContactCard } from "@/components/contact/ContactCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { useMagnetic } from "@/hooks/useMagnetic";

export function Contact() {
  // The three final CTAs get a magnetic pull — this is the one moment
  // the whole scroll story has been building toward, so it's the
  // right place for the site's most deliberate hover effect.
  const magneticWhatsApp = useMagnetic<HTMLAnchorElement>();
  const magneticEmail = useMagnetic<HTMLAnchorElement>();
  const magneticSnapchat = useMagnetic<HTMLAnchorElement>();

  return (
    <section id="contact" className="container-cinematic py-28 md:py-36">
      <SectionHeading
        align="center"
        title="Have a project in mind?"
        description="Let's turn the idea into something real."
      />

      {/* Three primary contact methods — WhatsApp emphasized as the fastest route. */}
      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
        <Reveal delay={0}>
          <ContactCard
            emphasized
            icon={<WhatsAppIcon className="h-full w-full" />}
            eyebrow="WhatsApp"
            title="Book a conversation"
            description="Let's talk about your project."
            href={contact.whatsapp.href}
            ctaLabel="Book on WhatsApp"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <ContactCard
            icon={<GmailIcon className="h-full w-full" />}
            eyebrow="Gmail"
            title="Send an email"
            description="Tell me what you're building."
            href={contact.email.href}
            ctaLabel="Email Me"
          />
        </Reveal>
        <Reveal delay={0.16}>
          <ContactCard
            icon={<SnapchatIcon className="h-full w-full" />}
            eyebrow="Snapchat"
            title="Message me"
            description="Let's connect."
            href={contact.snapchat.href}
            ctaLabel="Message on Snapchat"
            disabledNote="Coming soon"
          />
        </Reveal>
      </div>

      {/* Form + direct booking link, side by side. */}
      <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
        <div>
          <Reveal>
            <h3 className="text-display-md font-semibold text-balance">Or send the details directly</h3>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-muted">
              Fill out the form and I'll reply directly — no forms disappearing into a queue.
              Prefer a faster reply? WhatsApp is checked first.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <a
              href={contact.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent-soft underline underline-offset-4 hover:text-white"
            >
              Skip the form — message me on WhatsApp
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>

        <Reveal from="right" delay={0.05}>
          <ContactForm />
        </Reveal>
      </div>

      {/* Final cinematic CTA. */}
      <Reveal className="mt-28 flex flex-col items-center gap-8 text-center md:mt-36">
        <h2 className="text-display-lg font-semibold uppercase tracking-tight text-balance">
          Let's build something.
        </h2>
        <div className="flex w-full max-w-2xl flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            ref={magneticWhatsApp}
            href={contact.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white shadow-glow-sm transition-all duration-300 ease-cinematic will-change-transform hover:bg-accent-soft hover:shadow-glow focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-void"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Book on WhatsApp
          </a>
          <a
            ref={magneticEmail}
            href={contact.email.href}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 ease-cinematic will-change-transform hover:border-accent/50 hover:text-white focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-void"
          >
            <GmailIcon className="h-4 w-4" />
            Email Me
          </a>
          {contact.snapchat.enabled && contact.snapchat.href && (
            <a
              ref={magneticSnapchat}
              href={contact.snapchat.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 ease-cinematic will-change-transform hover:border-accent/50 hover:text-white focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-void"
            >
              <SnapchatIcon className="h-4 w-4" />
              Message on Snapchat
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}
