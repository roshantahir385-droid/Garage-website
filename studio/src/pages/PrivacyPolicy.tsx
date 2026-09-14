import { LegalLayout } from "@/components/legal/LegalLayout";
import { legal } from "@/config/legal";

export function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro="This policy explains what information this website collects, how it's used, and the choices available to you. It's a template for review, not a compliance certification."
    >
      <h2>1. Who this policy covers</h2>
      <p>
        This Privacy Policy applies to visitors of this website, operated by{" "}
        <strong>{legal.legalEntityName}</strong> ("we", "us", "our"). It
        describes our current data practices as this site is built today.
        It does not claim compliance with any specific data protection law
        (such as the GDPR or CCPA) — see Section 9 for why.
      </p>

      <h2>2. Information collected through the contact form</h2>
      <p>When you submit the contact/inquiry form on this site, we ask for:</p>
      <ul>
        <li>Your name</li>
        <li>Your email address</li>
        <li>Your phone number</li>
        <li>Your business or brand name</li>
        <li>Your website (optional)</li>
        <li>
          Project information: the service you're interested in, your
          budget range, and a description of your project
        </li>
      </ul>
      <p>
        As currently built, submitting the form does not send your
        information to a server or database we control. Instead, it
        prepares a pre-filled message that opens in your own email app or
        WhatsApp, addressed to us — you choose whether to actually send
        it, and it's transmitted using your own account. We only receive
        it if and when you send it, the same as any other email or
        message you'd send us directly.
      </p>
      <p>
        <strong>If a server-side form or database is added later</strong>,
        this section will be updated to describe exactly what's stored,
        where, and for how long, before that change goes live.
      </p>

      <h2>3. Other information we may receive</h2>
      <p>We may also receive information through:</p>
      <ul>
        <li>
          <strong>Contact interactions</strong> — emails, WhatsApp messages,
          or other messages you send us directly, including anything you
          choose to share in them
        </li>
        <li>
          <strong>Website information</strong> — general technical
          information your browser sends to any site it visits (such as
          browser type and approximate device information), to the extent
          our hosting provider logs it
        </li>
      </ul>

      <h2>4. Cookies</h2>
      <p>
        This site uses a minimal cookie/local-storage entry to remember
        your cookie preference once you've made a choice in the consent
        banner or preferences panel. That's the only thing currently
        stored for this purpose. Full details are in our{" "}
        <a href="/cookie-policy">Cookie Policy</a>.
      </p>

      <h2>5. Analytics</h2>
      <p>
        No analytics or visitor-tracking tool is currently implemented on
        this site. If one is added in the future, it will only run after
        you've given consent through the cookie preferences panel, and
        this policy and the Cookie Policy will be updated to name the
        specific provider used and what it collects.
      </p>

      <h2>6. How information is used</h2>
      <p>Any information you send us is used to:</p>
      <ul>
        <li>Respond to your inquiry and discuss your project</li>
        <li>Prepare quotes, proposals, or agreements</li>
        <li>Deliver services you've engaged us for</li>
        <li>Maintain records of our communications and any agreements</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>7. How information is stored</h2>
      <p>
        Messages you choose to send us are stored wherever your and our
        email or messaging providers store them (e.g. your email provider,
        our email inbox, WhatsApp). We do not currently operate a separate
        database or CRM holding your contact-form data — see Section 2.
        Where we do keep records (e.g. emails, invoices, project files),
        we take reasonable steps to keep them accessible only to people who
        need them for the purposes above.
      </p>

      <h2>8. Third-party services</h2>
      <p>
        This site and our workflow rely on a small number of third-party
        services, each governed by its own privacy policy:
      </p>
      <ul>
        <li>Email hosting (for messages sent to our contact address)</li>
        <li>WhatsApp / Meta (for messages sent via the WhatsApp option)</li>
        <li>Our website hosting provider</li>
        <li>Our font provider, used to load web fonts</li>
      </ul>
      <p>
        We do not control these third parties' own data practices. We
        recommend reviewing their respective privacy policies if you have
        concerns about how they handle data.
      </p>

      <h2>9. Data protection laws and your rights</h2>
      <p>
        Depending on where you're located, laws such as the GDPR (EU/UK) or
        state privacy laws (e.g. CCPA in California) may give you rights
        over your personal information — such as the right to access,
        correct, or request deletion of it, or to object to certain uses.
      </p>
      <p>
        We have not certified or independently verified full compliance
        with any specific privacy law, and this policy should not be read
        as a claim that we have. If such a law applies to you and you'd
        like to exercise a right under it, contact us at{" "}
        <a href={`mailto:${legal.contactEmail}`}>{legal.contactEmail}</a> and
        we'll do our best to respond appropriately. We recommend you (or
        we) confirm specific obligations with a qualified legal
        professional in the relevant jurisdiction.
      </p>

      <h2>10. Data retention</h2>
      <p>
        We keep communications and project records for as long as
        reasonably necessary to deliver services, maintain business
        records, and meet any legal or accounting obligations that apply
        to us — after which we aim to delete or anonymize them. Specific
        retention periods have not yet been finalized;{" "}
        <strong>
          [insert your intended retention period once decided, e.g. "for 3
          years after our last interaction"]
        </strong>
        .
      </p>

      <h2>11. Security</h2>
      <p>
        The contact form includes client-side validation to catch obviously
        invalid input before it's used to build a message. We don't store
        exposed API keys or credentials in this site's code. We recommend
        (and intend to) serve the live site only over HTTPS. If a backend,
        database, or additional integrations are added later, we will
        implement corresponding server-side validation, sanitization, and
        access controls, and update this policy accordingly. No method of
        transmission or storage is 100% secure, and we can't guarantee
        absolute security.
      </p>

      <h2>12. Children's privacy</h2>
      <p>
        This site is intended for business use and is not directed at
        children. We do not knowingly collect personal information from
        children.
      </p>

      <h2>13. Changes to this policy</h2>
      <p>
        We may update this policy as the site or our practices change. The
        "Last updated" date at the top reflects the most recent revision.
        Material changes will be reflected here before they take effect.
      </p>

      <h2>14. Contact us</h2>
      <p>
        Questions about this policy or your information can be sent to{" "}
        <a href={`mailto:${legal.contactEmail}`}>{legal.contactEmail}</a>.
      </p>
    </LegalLayout>
  );
}
