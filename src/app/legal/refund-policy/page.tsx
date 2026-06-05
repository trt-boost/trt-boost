import type { Metadata } from "next";
import { LegalLayout, LSection } from "@/components/legal/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "TRT Boost Refund & Cancellation Policy — refunds, cancellations, and returns across clinical services, subscriptions, and products.",
};

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      effectiveDate="March 2026"
      version="1.0"
      currentHref="/legal/refund-policy"
      intro={
        <>
          <p>
            TRT Boost provides remote testosterone replacement therapy (TRT) and
            men&apos;s health services through a licensed telehealth platform.
            This policy governs all refunds, cancellations, and returns across
            our clinical services, subscriptions, and products. Please read this
            policy in full before enrolling or making any purchase. By using our
            services, you agree to the terms below.
          </p>
          <div className="callout">
            <strong>No refund once medication is sent</strong>
            Once a prescription has been dispensed and shipped by our pharmacy
            partner, no refund or return will be issued under any circumstances.
          </div>
        </>
      }
    >
      <LSection n="01" title="Prescription Medications — No Refund Once Shipped">
        <p>
          In line with all applicable federal and state pharmacy regulations, and
          consistent with industry-standard telehealth practices, TRT Boost does
          not offer refunds or accept returns on any prescription medication once
          the order has been processed and shipped by our affiliated pharmacy
          partner. This policy exists to protect the health and safety of every
          patient.
        </p>
        <h3>Why we cannot accept returned medications</h3>
        <ul>
          <li>Once dispensed, prescription medications cannot be re-dispensed or resold to another patient.</li>
          <li>Returned medications may have been compromised in storage or transit and cannot be verified safe.</li>
          <li>Federal law prohibits pharmacies from restocking returned prescription drugs.</li>
        </ul>
        <h3>When a refund or replacement may be considered</h3>
        <table>
          <thead>
            <tr><th>Situation</th><th>Resolution</th></tr>
          </thead>
          <tbody>
            <tr><td>Prescription error by TRT Boost provider</td><td>Replacement medication at no charge</td></tr>
            <tr><td>Wrong medication or dosage shipped by pharmacy</td><td>Replacement medication at no charge</td></tr>
            <tr><td>Medication damaged or defective on arrival</td><td>Replacement medication at no charge</td></tr>
            <tr><td>FDA or manufacturer recall of your medication</td><td>Full refund or equivalent replacement</td></tr>
            <tr><td>Unauthorized charge — no order placed</td><td>Full refund upon verification</td></tr>
            <tr><td>Shipment lost in transit (carrier confirmed)</td><td>Replacement shipment at no charge</td></tr>
          </tbody>
        </table>
        <p className="text-sm italic text-ink-500">
          All replacement requests must be submitted within 7 days of delivery.
          Contact {site.contact.supportEmail} with your order number and a
          description of the issue. Photo evidence may be required for damaged
          items.
        </p>
        <p>
          <strong>Cancellation before shipment:</strong> If you cancel your order
          before the pharmacy has dispensed and shipped your medication, a full
          refund will be issued to your original payment method. Once a shipping
          confirmation is generated, no cancellation or refund is possible.
        </p>
      </LSection>

      <LSection n="02" title="Subscription & Membership Plans">
        <p>
          TRT Boost offers ongoing subscription plans that bundle clinical
          consultations, provider oversight, and medication fulfillment. The
          following terms apply:
        </p>
        <ul>
          <li><strong>Cancellation window:</strong> All changes, pauses, or cancellations to your subscription must be submitted at least 48 hours before your next order processing date to avoid being charged for the upcoming cycle.</li>
          <li><strong>Partial-period refunds:</strong> We do not issue refunds for partially used subscription periods. Your access and service continue through the end of the paid period.</li>
          <li><strong>Annual plans:</strong> A prorated refund for the unused portion may be requested within the first 30 days of purchase. After 30 days, no prorated refunds are issued on annual plans.</li>
          <li><strong>Subscription pause:</strong> If you need a temporary break, you may pause your subscription for a specified period through your patient portal. Charges resume automatically when the pause ends.</li>
          <li><strong>Promotional pricing:</strong> Subscriptions purchased at a discounted or promotional rate are non-refundable once the first billing cycle has completed.</li>
        </ul>
        <p>
          Cancellations can be managed through your TRT Boost patient portal under
          Account › Subscriptions › Manage › Cancel Subscription, or by contacting
          our billing team directly. Verbal or phone cancellations are not
          accepted.
        </p>
      </LSection>

      <LSection n="03" title="Clinical Consultations">
        <p>Consultation fees cover the time and clinical expertise of our licensed providers. The following applies:</p>
        <table>
          <thead><tr><th>Cancellation timing</th><th>Refund</th></tr></thead>
          <tbody>
            <tr><td>48+ hours before appointment</td><td>Full refund</td></tr>
            <tr><td>24–47 hours before appointment</td><td>50% refund</td></tr>
            <tr><td>Less than 24 hours before appointment</td><td>No refund</td></tr>
            <tr><td>No-show / missed appointment</td><td>No refund</td></tr>
            <tr><td>Provider or platform cancels the appointment</td><td>Full refund or complimentary reschedule</td></tr>
            <tr><td>Technical failure on the TRT Boost platform</td><td>Full refund or reschedule at no charge</td></tr>
          </tbody>
        </table>
        <p className="text-sm italic text-ink-500">
          Consultation fees for completed appointments are non-refundable even if
          the provider determines that a prescription is not clinically
          appropriate.
        </p>
      </LSection>

      <LSection n="04" title="Laboratory Testing & Diagnostics">
        <p>Lab panels and at-home testing kits ordered through TRT Boost are subject to the following:</p>
        <ul>
          <li><strong>Order cancelled before lab order transmission:</strong> Full refund.</li>
          <li><strong>Order cancelled after transmission but before sample collection:</strong> 50% refund.</li>
          <li><strong>Sample already collected and submitted to the lab:</strong> No refund.</li>
          <li><strong>At-home kits returned unopened within 14 days:</strong> Full refund (return shipping at patient&apos;s expense).</li>
          <li><strong>Kits returned opened or after 14 days:</strong> No refund.</li>
        </ul>
        <p>
          Refunds for laboratory services may also be granted on a case-by-case
          basis at the sole discretion of TRT Boost where a clear service failure
          has occurred.
        </p>
      </LSection>

      <LSection n="05" title="Non-Prescription Products & Supplements">
        <p>Over-the-counter health products, vitamins, and nutraceuticals may be returned under these conditions:</p>
        <table>
          <thead><tr><th>Product condition</th><th>Resolution</th></tr></thead>
          <tbody>
            <tr><td>Unopened, original packaging — within 30 days</td><td>Full refund</td></tr>
            <tr><td>Defective or damaged — opened, within 14 days</td><td>Full refund or exchange</td></tr>
            <tr><td>Opened, no defect, within 14 days</td><td>No refund</td></tr>
            <tr><td>Beyond 30-day return window</td><td>No refund</td></tr>
            <tr><td>Marked &lsquo;Final Sale&rsquo;</td><td>No refund or exchange</td></tr>
          </tbody>
        </table>
        <p className="text-sm italic text-ink-500">
          Return shipping is at the patient&apos;s expense unless the return is due
          to a confirmed product defect.
        </p>
      </LSection>

      <LSection n="06" title="Non-Refundable Items & Fees">
        <p>The following are non-refundable in all circumstances:</p>
        <ul>
          <li>Prescription medications once dispensed and shipped</li>
          <li>Completed consultation fees</li>
          <li>Prescription processing and pharmacy dispensing fees</li>
          <li>Expedited or priority shipping charges</li>
          <li>Medical record preparation, documentation, or prior authorization fees</li>
          <li>Membership or subscription fees for billing periods already commenced</li>
          <li>Any item or service explicitly designated as non-refundable at point of purchase</li>
        </ul>
      </LSection>

      <LSection n="07" title="Refund Processing & Timelines">
        <p>Approved refunds are returned to the original payment method. Processing times:</p>
        <table>
          <thead><tr><th>Payment method</th><th>Estimated timeline</th></tr></thead>
          <tbody>
            <tr><td>Credit / Debit Card</td><td>5–10 business days</td></tr>
            <tr><td>ACH / Bank Transfer</td><td>7–14 business days</td></tr>
            <tr><td>Account Credit (issued by TRT Boost)</td><td>1–2 business days</td></tr>
          </tbody>
        </table>
        <p>
          TRT Boost reserves the right to issue approved refunds as account
          credits in lieu of monetary refunds where permitted by applicable law.
          Patients will be notified prior to processing.
        </p>
      </LSection>

      <LSection n="08" title="Billing Disputes & Chargebacks">
        <p>
          We strongly encourage patients to contact our billing support team
          before initiating a chargeback or payment dispute with their bank or
          card issuer. We are committed to resolving all billing concerns promptly
          and fairly.
        </p>
        <p><strong>Initiating a chargeback without first contacting TRT Boost may result in:</strong></p>
        <ul>
          <li>Temporary suspension of your account pending investigation</li>
          <li>Restriction from enrolling in future TRT Boost services</li>
          <li>Referral to collections for any outstanding balance if the chargeback is found to be unwarranted</li>
        </ul>
        <p>
          If you believe you were charged in error or after a confirmed
          cancellation, please contact us immediately with your account details
          and supporting documentation.
        </p>
      </LSection>

      <LSection n="09" title="How to Submit a Refund or Cancellation Request">
        <table>
          <thead><tr><th>Channel</th><th>Details</th></tr></thead>
          <tbody>
            <tr><td>Patient Portal</td><td>{site.url.replace("https://", "")} › Account › Billing › Request Refund</td></tr>
            <tr><td>Email</td><td>{site.contact.billingEmail} (response within 2 business days)</td></tr>
            <tr><td>Phone</td><td>{site.contact.phoneDisplay} | Mon–Fri, 8:00 AM – 6:00 PM EST</td></tr>
            <tr><td>Mail</td><td>{site.contact.mailingAddress}, Attn: Billing Dept.</td></tr>
          </tbody>
        </table>
        <p className="text-sm italic text-ink-500">
          Please include your full name, date of birth, order or subscription
          number, and a brief description of your concern when submitting any
          refund request.
        </p>
      </LSection>

      <LSection n="10" title="Policy Updates">
        <p>
          TRT Boost reserves the right to update or amend this Refund &
          Cancellation Policy at any time. Any material changes will be
          communicated to active patients via email at least 14 days before the
          effective date. Continued use of TRT Boost services after an updated
          policy takes effect constitutes your acceptance of the revised terms.
        </p>
        <div className="callout">
          <strong>Acknowledgment</strong>
          By enrolling in or purchasing any TRT Boost service or product, you
          confirm that you have read, understood, and agreed to this Refund &
          Cancellation Policy.
        </div>
      </LSection>
    </LegalLayout>
  );
}
