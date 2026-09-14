import { LegalLayout } from "@/components/legal/LegalLayout";
import { legal } from "@/config/legal";

export function Terms() {
  return (
    <LegalLayout
      title="Terms of Service"
      intro="These terms cover use of this website and, in general terms, the basis on which project work is carried out. Specific projects are governed primarily by the written agreement or proposal for that project."
    >
      <h2>1. Acceptance of terms</h2>
      <p>
        By using this website or engaging{" "}
        <strong>{legal.legalEntityName}</strong> ("we", "us", "our") for
        services, you agree to these Terms of Service. If you don't agree,
        please don't use the site or engage our services.
      </p>

      <h2>2. Website use</h2>
      <p>
        This website is provided for the purpose of showcasing services,
        past work, and enabling prospective clients to make contact. You
        agree not to misuse the site — including attempting to disrupt it,
        scrape it at scale, or use it for any unlawful purpose.
      </p>

      <h2>3. Service descriptions</h2>
      <p>
        Services described on this site (such as web development, design,
        and digital marketing services) are general descriptions of what
        we offer. They don't constitute a binding offer on their own — the
        scope, deliverables, timeline, and price for an actual project are
        defined in a separate proposal, quote, or agreement specific to
        that project.
      </p>

      <h2>4. Project agreements</h2>
      <p>
        Where we agree to carry out a project together, the specific scope,
        deliverables, timeline, revisions included, and payment terms will
        be set out in a proposal, quote, invoice, or written agreement for
        that project. In the event of a conflict between this page and a
        signed project agreement, the project agreement controls.
      </p>

      <h2>5. Payments</h2>
      <p>
        Payment terms (amounts, schedule, and method) will be set out in
        the relevant project agreement or invoice. Unless otherwise agreed
        in writing:
      </p>
      <ul>
        <li>Work may require a deposit before it begins</li>
        <li>Outstanding balances are due per the agreed schedule</li>
        <li>
          Late payment may pause project work until the account is brought
          current
        </li>
      </ul>
      <p>
        See our <a href="/refund-policy">Refund Policy</a> for how refunds
        are handled.
      </p>

      <h2>6. Revisions</h2>
      <p>
        The number of revision rounds included, if any, will be specified
        in the relevant project agreement. Requests beyond the included
        scope may be treated as a change request and quoted separately.
      </p>

      <h2>7. Intellectual property</h2>
      <p>
        Unless the project agreement says otherwise:
      </p>
      <ul>
        <li>
          Final deliverables are assigned or licensed to the client once
          they have been paid for in full, as specified in the project
          agreement
        </li>
        <li>
          We retain the right to display completed work in a portfolio,
          case study, or promotional material, unless the client requests
          confidentiality and we agree to it in writing
        </li>
        <li>
          Pre-existing tools, frameworks, templates, or code libraries we
          use to deliver a project remain our property or that of their
          respective owners, except where explicitly transferred in
          writing
        </li>
      </ul>

      <h2>8. Client responsibilities</h2>
      <p>To keep a project on track, clients are responsible for:</p>
      <ul>
        <li>Providing accurate, complete information and requested materials on time</li>
        <li>Timely feedback and approvals</li>
        <li>Ensuring they have the rights to any content, images, or materials they provide us to use</li>
        <li>Making payments per the agreed schedule</li>
      </ul>

      <h2>9. Third-party services</h2>
      <p>
        Projects may involve third-party services, platforms, plugins, or
        hosting providers (for example, a hosting company, a CMS, or a
        payment processor). We are not responsible for the availability,
        pricing, or policies of third-party services outside our control,
        though we'll flag known dependencies where relevant.
      </p>

      <h2>10. Cancellations</h2>
      <p>
        Either party may request to cancel a project. Cancellation terms —
        including what's owed for work already completed and whether any
        deposit is refundable — will follow the specific project
        agreement. See the <a href="/refund-policy">Refund Policy</a> for
        general principles.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by applicable law, we are not
        liable for indirect, incidental, special, or consequential
        damages arising from use of this website or our services,
        including loss of profits, revenue, or business opportunities.
        Our total liability for any claim relating to a project will not
        exceed the amount actually paid by the client for that project,
        except where such a limitation is not permitted by law.
      </p>

      <h2>12. Termination</h2>
      <p>
        We may suspend or stop providing services if payment terms aren't
        met, if we reasonably believe the relationship has become
        unworkable, or as otherwise permitted by the project agreement.
        Either party may terminate an ongoing engagement per the terms of
        that agreement.
      </p>

      <h2>13. Governing law</h2>
      <p>
        These terms are intended to be governed by the laws of{" "}
        <strong>{legal.jurisdiction}</strong>, without regard to conflict
        of law principles — to be confirmed and finalized with a qualified
        legal professional before publishing.
      </p>

      <h2>14. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The "Last updated"
        date above reflects the most recent revision. Continued use of the
        site after changes constitutes acceptance of the updated terms.
      </p>

      <h2>15. Contact us</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${legal.contactEmail}`}>{legal.contactEmail}</a>.
      </p>
    </LegalLayout>
  );
}
