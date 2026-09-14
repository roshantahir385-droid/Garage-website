import { LegalLayout } from "@/components/legal/LegalLayout";
import { legal } from "@/config/legal";

export function RefundPolicy() {
  return (
    <LegalLayout
      title="Refund Policy"
      intro="There is no single, guaranteed refund policy that applies to every project. Refunds depend on the specific service agreement and payment terms agreed before work begins."
    >
      <h2>1. General approach</h2>
      <p>
        Because projects vary in scope, timeline, and payment structure,
        refund terms are set out in the proposal, quote, or agreement for
        each specific project rather than promised generally on this page.
        This page describes the general framework those agreements are
        typically built on.
      </p>

      <h2>2. Deposits</h2>
      <p>
        Projects may require an upfront deposit to reserve time and begin
        work. Unless the specific project agreement states otherwise,
        deposits are{" "}
        <strong>
          [insert your actual deposit refund terms — e.g. "non-refundable
          once work has started" or "refundable minus a scheduling fee if
          cancelled within X days"]
        </strong>
        .
      </p>

      <h2>3. Work already completed</h2>
      <p>
        Where a project is cancelled partway through, amounts owed for
        work already completed up to that point are generally not
        refundable, since that time and effort has already been delivered.
        The specific split between "completed" and "not yet started" work
        will be assessed against the agreed scope and milestones for that
        project.
      </p>

      <h2>4. Milestone-based projects</h2>
      <p>
        For projects billed in stages or milestones, refund eligibility is
        assessed per completed milestone rather than for the project as a
        whole, unless the project agreement says otherwise.
      </p>

      <h2>5. Circumstances that may qualify for a refund</h2>
      <p>
        Depending on the specific agreement, a refund (in full or in part)
        may be considered where, for example:
      </p>
      <ul>
        <li>Work has not yet begun and both parties agree to cancel</li>
        <li>
          We are unable to deliver the agreed scope and both parties agree
          a refund is the appropriate resolution
        </li>
        <li>
          Other circumstances specifically described in the project
          agreement
        </li>
      </ul>
      <p>
        This list is illustrative, not exhaustive or a guarantee — the
        actual agreement for your project controls.
      </p>

      <h2>6. Circumstances that typically do not qualify</h2>
      <ul>
        <li>Change of mind after work has already started</li>
        <li>Delays caused by the client not providing requested materials, feedback, or approvals</li>
        <li>Dissatisfaction with a deliverable that meets the agreed scope, where revision rounds are still available under the agreement</li>
      </ul>

      <h2>7. How to request a refund</h2>
      <p>
        To request a refund, contact us at{" "}
        <a href={`mailto:${legal.contactEmail}`}>{legal.contactEmail}</a>{" "}
        with your project details and the reason for the request. We'll
        review it against the terms of your specific agreement and respond
        directly.
      </p>

      <h2>8. Related policy</h2>
      <p>
        See our <a href="/terms">Terms of Service</a> for broader payment
        and cancellation terms.
      </p>

      <h2>9. Contact us</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${legal.contactEmail}`}>{legal.contactEmail}</a>.
      </p>
    </LegalLayout>
  );
}
