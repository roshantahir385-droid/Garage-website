import { useCookieConsent } from "@/lib/cookieConsent";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { legal } from "@/config/legal";

export function CookiePolicy() {
  const { openPreferences } = useCookieConsent();

  return (
    <LegalLayout
      title="Cookie Policy"
      intro="This explains what cookies and similar storage this site uses, and how to control them."
    >
      <h2>1. What cookies are</h2>
      <p>
        Cookies are small pieces of data stored in your browser. Similar
        technologies, like browser local storage, work the same way for
        our purposes: they let a site remember something between visits.
        We use the word "cookies" in this policy to cover both.
      </p>

      <h2>2. Cookie categories used on this site</h2>
      <h3>Essential</h3>
      <p>
        Required for the site to function. Currently, this is limited to a
        single entry that remembers your cookie preference (whether you
        accepted, rejected, or customized non-essential cookies) so we
        don't ask you again on every visit. This is stored in your
        browser's local storage rather than a traditional cookie, but
        serves the same purpose and is treated the same way here. Because
        it's essential, it can't be switched off — without it, the
        preference banner would simply reappear every time.
      </p>
      <h3>Analytics</h3>
      <p>
        Would help us understand how visitors use the site (e.g. which
        pages are viewed). <strong>No analytics tool is currently active
        on this site.</strong> The toggle for this category exists in the
        preferences panel so that, if analytics is added later, it will
        already respect your choice rather than turning on by default.
      </p>

      <h2>3. Your choices</h2>
      <p>
        When you first visit, a banner lets you Accept All, Reject
        Non-Essential, or Manage Preferences. You can revisit that choice
        at any time using the "Cookie Preferences" link in the site
        footer, or the button below.
      </p>
      <p>
        <button
          type="button"
          onClick={openPreferences}
          className="rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-colors duration-200 hover:border-accent/50 hover:text-white"
        >
          Manage cookie preferences
        </button>
      </p>

      <h2>4. Browser controls</h2>
      <p>
        Most browsers also let you block or delete cookies and local
        storage directly in their settings. Doing so may affect how this
        or other sites function, including causing this site to forget
        your saved cookie preference.
      </p>

      <h2>5. Future changes</h2>
      <p>
        If analytics or any other non-essential tracking is added to this
        site in the future, this policy will be updated first to name the
        specific tool and what it collects, and it will not begin loading
        until you've given consent through the preferences panel.
      </p>

      <h2>6. Related policy</h2>
      <p>
        See our <a href="/privacy-policy">Privacy Policy</a> for how we
        handle information more broadly.
      </p>

      <h2>7. Contact us</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${legal.contactEmail}`}>{legal.contactEmail}</a>.
      </p>
    </LegalLayout>
  );
}
