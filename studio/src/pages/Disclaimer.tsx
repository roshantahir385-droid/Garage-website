import { LegalLayout } from "@/components/legal/LegalLayout";
import { legal } from "@/config/legal";

export function Disclaimer() {
  return (
    <LegalLayout
      title="Disclaimer"
      intro="Please read this alongside our Terms of Service before relying on anything shown on this site."
    >
      <h2>1. Portfolio and concept projects</h2>
      <p>
        Some work shown in the portfolio/work section of this site may be
        illustrative, conceptual, or a redesign/case-study exploration
        rather than a live, deployed project for a paying client. Where
        that's the case, it's intended to demonstrate skills and approach,
        not to represent an actual completed client engagement or its
        real-world results.
      </p>

      <h2>2. General information only</h2>
      <p>
        Content on this site (service descriptions, process explanations,
        pricing guidance, FAQs, and similar material) is provided for
        general informational purposes only. It is not tailored advice for
        your specific business, technical, legal, or financial situation.
      </p>

      <h2>3. No guaranteed outcomes</h2>
      <p>
        Results vary between projects based on factors outside our
        control — including a client's market, budget, existing brand,
        timeline, and how requested feedback or materials are provided. We
        do not guarantee any specific business outcome, such as a specific
        increase in traffic, leads, sales, rankings, or revenue, from any
        service described on this site.
      </p>

      <h2>4. Not professional advice</h2>
      <p>
        Nothing on this site constitutes legal, financial, tax, or
        professional advice. For decisions that depend on your specific
        circumstances, consult a qualified professional in the relevant
        field.
      </p>

      <h2>5. External links</h2>
      <p>
        This site may link to third-party websites or services for
        convenience. We don't control and aren't responsible for the
        content, accuracy, or practices of external sites.
      </p>

      <h2>6. Limitation of liability</h2>
      <p>
        This disclaimer should be read together with the limitation of
        liability set out in our{" "}
        <a href="/terms">Terms of Service</a>.
      </p>

      <h2>7. Changes to this disclaimer</h2>
      <p>
        We may update this disclaimer from time to time. The "Last
        updated" date above reflects the most recent revision.
      </p>

      <h2>8. Contact us</h2>
      <p>
        Questions about this disclaimer can be sent to{" "}
        <a href={`mailto:${legal.contactEmail}`}>{legal.contactEmail}</a>.
      </p>
    </LegalLayout>
  );
}
