import type { Metadata } from "next";
import { LegalLayout, LSection } from "@/components/legal/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Subscription & Auto-Renewal Terms",
  description:
    "How TRT Boost subscriptions, recurring billing, and auto-ship work — including renewal, cancellation, and your consumer rights.",
};

export default function SubscriptionTermsPage() {
  return (
    <LegalLayout
      title="Subscription & Auto-Renewal Terms"
      effectiveDate="March 31, 2026"
      currentHref="/legal/subscription-terms"
      intro={
        <>
          <p>
            Many TRT Boost treatments are offered as subscriptions with recurring
            billing and automatic refills (&quot;auto-ship&quot;). These Terms
            explain how recurring billing works and how to manage or cancel. They
            supplement our <a href="/legal/terms">Terms &amp; Conditions</a> and{" "}
            <a href="/legal/refund-policy">Refund &amp; Cancellation Policy</a>.
          </p>
          <div className="callout">
            <strong>Automatic renewal disclosure</strong>
            Your subscription automatically renews and your payment method is
            charged on a recurring basis until you cancel. You may cancel at any
            time, effective at the end of the current billing cycle.
          </div>
        </>
      }
    >
      <LSection n="01" title="How Recurring Billing Works">
        <ul>
          <li>By enrolling, you authorize TRT Boost to charge your payment method on a recurring basis (e.g., every 30, 60, or 90 days) according to your selected plan.</li>
          <li>Subscription fees are billed in advance at the start of each billing cycle.</li>
          <li>Prices are in U.S. dollars. We may change pricing with at least 30 days&apos; prior notice; continued use after the change constitutes acceptance.</li>
        </ul>
      </LSection>

      <LSection n="02" title="Auto-Ship & Renewal Reminders">
        <ul>
          <li>Eligible medications ship automatically according to your treatment schedule, so you don&apos;t run out.</li>
          <li>You will receive a notification approximately 5 days before each auto-ship/renewal so you can update, skip, or cancel.</li>
          <li>Refills may require an up-to-date prescription or lab work; our care team will notify you if needed.</li>
        </ul>
      </LSection>

      <LSection n="03" title="Managing or Canceling Your Subscription">
        <ul>
          <li>You can pause, change, or cancel anytime in your patient portal under Account › Subscriptions, or by contacting our team.</li>
          <li>Changes must be made at least 48 hours before your next order processing date to avoid being charged for the upcoming cycle.</li>
          <li>Cancellation takes effect at the end of the current paid period; we do not provide partial-period refunds (see the <a href="/legal/refund-policy">Refund &amp; Cancellation Policy</a>).</li>
        </ul>
      </LSection>

      <LSection n="04" title="Your Consumer Rights">
        <p>
          Where required by automatic-renewal laws (such as California&apos;s
          Automatic Renewal Law), we provide clear disclosure of auto-renewal
          terms, obtain your affirmative consent before charging, send renewal
          reminders, and offer an easy online cancellation method. Nothing in
          these Terms limits any non-waivable rights you have under applicable law.
        </p>
      </LSection>

      <LSection n="05" title="Failed Payments">
        <p>
          If a payment fails, we may retry the charge and pause fulfillment until
          payment is resolved. Repeated failures may result in cancellation of your
          subscription.
        </p>
        <p>
          Billing questions? Contact{" "}
          <a href={`mailto:${site.contact.billingEmail}`}>{site.contact.billingEmail}</a>{" "}
          or call {site.contact.phoneDisplay}.
        </p>
      </LSection>
    </LegalLayout>
  );
}
