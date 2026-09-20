import type { Metadata } from "next";
import { LegalLayout, LSection } from "@/components/legal/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "TRT Boost Terms & Conditions governing your access to and use of our website, telehealth platform, and related services.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      effectiveDate="March 31, 2026"
      currentHref="/legal/terms"
      intro={
        <>
          <p>
            Welcome to TRT Boost. These Terms & Conditions (&quot;Terms&quot;)
            govern your access to and use of our website, mobile applications,
            telehealth platform, and all related services (collectively, the
            &quot;Services&quot;). By creating an account, accessing, or using our
            Services, you agree to be bound by these Terms. If you do not agree,
            you must discontinue use of our Services immediately.
          </p>
          <p>
            Please read these Terms carefully. They contain important information
            about your legal rights, remedies, and obligations.
          </p>
        </>
      }
    >
      <LSection n="01" title="Eligibility">
        <p>To use TRT Boost Services, you must meet the following eligibility requirements:</p>
        <ul>
          <li>You must be at least <strong>18 years of age</strong>.</li>
          <li>You must be a legal resident of a U.S. state or territory where TRT Boost is authorized to provide telehealth services.</li>
          <li>You must provide accurate, current, and complete information during registration and keep your account information up to date.</li>
          <li>You must not have been previously suspended or removed from the platform.</li>
        </ul>
        <p>
          TRT Boost reserves the right to refuse service, terminate accounts, or
          cancel orders at its sole discretion if eligibility requirements are not
          met.
        </p>
      </LSection>

      <LSection n="02" title="Account Registration & Security">
        <p>When you create a TRT Boost account, you agree to the following:</p>
        <ul>
          <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
          <li>You are responsible for all activities that occur under your account.</li>
          <li>You must immediately notify TRT Boost of any unauthorized access or security breach at <a href={`mailto:${site.contact.securityEmail}`}>{site.contact.securityEmail}</a>.</li>
          <li>You may not share, transfer, or assign your account to any other person.</li>
          <li>TRT Boost is not liable for any loss or damage arising from unauthorized use of your account.</li>
        </ul>
        <p>
          We reserve the right to suspend or terminate your account at any time if
          we suspect fraudulent activity, misuse, or a violation of these Terms.
        </p>
      </LSection>

      <LSection n="03" title="Telehealth Services">
        <p>TRT Boost provides telehealth consultations through licensed healthcare providers. By using our telehealth Services, you acknowledge and agree that:</p>
        <ul>
          <li>Telehealth consultations are conducted remotely via our secure platform and are <strong>not a substitute for in-person medical care</strong> or emergency services.</li>
          <li>Our providers will review your medical intake forms, health history, and lab results to determine your eligibility for treatment.</li>
          <li>A provider may decline to prescribe treatment if it is not medically appropriate for you.</li>
          <li>You must provide truthful and complete health information. Providing false or misleading medical information may result in account termination and may endanger your health.</li>
          <li>You consent to receiving care via electronic communications, including video, audio, and messaging.</li>
        </ul>
        <div className="callout">
          <strong>Emergency notice</strong>
          TRT Boost is not an emergency medical service. If you are experiencing a
          medical emergency, call 911 or go to your nearest emergency room
          immediately.
        </div>
      </LSection>

      <LSection n="04" title="Prescriptions & Medications">
        <p>If a licensed provider determines that treatment is appropriate, prescriptions may be issued through TRT Boost. You agree to the following:</p>
        <ul>
          <li>All prescriptions are issued at the sole discretion of the treating provider based on your medical evaluation.</li>
          <li>Medications are compounded or dispensed by licensed partner pharmacies and shipped directly to you.</li>
          <li>You must use prescribed medications only as directed by your provider.</li>
          <li>You will not share, sell, or distribute medications received through TRT Boost.</li>
          <li>TRT Boost and its providers are not responsible for adverse reactions resulting from failure to follow prescribed instructions or from undisclosed medical conditions.</li>
          <li>Prescription medications cannot be returned once shipped, in accordance with federal regulations.</li>
        </ul>
      </LSection>

      <LSection n="05" title="Subscription Plans & Billing">
        <p>TRT Boost offers subscription-based plans for ongoing care. By enrolling in a subscription, you agree to the following terms:</p>
        <ul>
          <li>You authorize TRT Boost to charge your designated payment method on a recurring basis according to your selected plan.</li>
          <li>Subscription fees are billed in advance at the beginning of each billing cycle.</li>
          <li>All fees are quoted in U.S. dollars and are <strong>non-refundable</strong> for the current billing period once charged.</li>
          <li>TRT Boost reserves the right to modify pricing with at least <strong>30 days&apos; prior notice</strong>. Continued use after a price change constitutes acceptance.</li>
          <li>You may cancel your subscription at any time; cancellation takes effect at the end of the current billing cycle.</li>
        </ul>
      </LSection>

      <LSection n="06" title="Fees & Payment Terms">
        <p>The following table summarizes the key fee categories and payment terms:</p>
        <table>
          <thead><tr><th>Fee category</th><th>Description</th><th>Refundable?</th></tr></thead>
          <tbody>
            <tr><td>Consultation Fee</td><td>One-time or recurring fee for provider evaluation</td><td>Only if not yet reviewed by provider</td></tr>
            <tr><td>Medication Fee</td><td>Cost of prescribed compounded medications</td><td>Only if not yet shipped</td></tr>
            <tr><td>Subscription Fee</td><td>Recurring monthly or quarterly plan charge</td><td>No partial refunds for current cycle</td></tr>
            <tr><td>Lab Work Fee</td><td>Cost of required blood panels / diagnostics</td><td>Non-refundable once ordered</td></tr>
            <tr><td>Shipping Fee</td><td>Standard or expedited delivery charges</td><td>Refundable if order cancelled before shipment</td></tr>
            <tr><td>Late Payment Fee</td><td>Applied to overdue balances after 15 days</td><td>Non-refundable</td></tr>
          </tbody>
        </table>
      </LSection>

      <LSection n="07" title="Prohibited Conduct">
        <p>You agree that you will <strong>not</strong> engage in any of the following prohibited activities while using our Services:</p>
        <ul>
          <li>Providing false identity, medical information, or documentation.</li>
          <li>Attempting to obtain prescriptions through deceptive or fraudulent means.</li>
          <li>Sharing, reselling, or distributing medications obtained through TRT Boost.</li>
          <li>Using the platform for any unlawful purpose or in violation of any applicable law.</li>
          <li>Attempting to access, tamper with, or disrupt any part of our systems, servers, or networks.</li>
          <li>Harassing, threatening, or abusing TRT Boost staff, providers, or other users.</li>
          <li>Reverse-engineering, decompiling, or attempting to extract source code from our platform.</li>
          <li>Using automated tools, bots, or scrapers to access our Services without authorization.</li>
        </ul>
        <p>Violation of these prohibitions may result in immediate account termination, forfeiture of any prepaid fees, and potential legal action.</p>
      </LSection>

      <LSection n="08" title="Intellectual Property">
        <p>All content, trademarks, logos, software, and materials available through TRT Boost Services are the exclusive property of TRT Boost or its licensors and are protected by U.S. and international intellectual property laws.</p>
        <ul>
          <li>The TRT Boost name, logo, and all related marks are registered trademarks of TRT Boost.</li>
          <li>You may not copy, reproduce, distribute, modify, or create derivative works from any of our content without prior written consent.</li>
          <li>You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Services for personal, non-commercial purposes only.</li>
        </ul>
      </LSection>

      <LSection n="09" title="Limitation of Liability">
        <p>To the maximum extent permitted by applicable law, TRT Boost and its officers, directors, employees, affiliates, and providers shall <strong>not</strong> be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:</p>
        <ul>
          <li>Loss of profits, data, goodwill, or other intangible losses.</li>
          <li>Any injury, illness, or adverse reaction resulting from treatment — except where caused by gross negligence or willful misconduct.</li>
          <li>Unauthorized access to or alteration of your account or data.</li>
          <li>Service interruptions, delays, or errors in our platform.</li>
        </ul>
        <p>In no event shall TRT Boost&apos;s total aggregate liability exceed the amount you have paid to TRT Boost in the <strong>twelve (12) months</strong> preceding the event giving rise to the claim.</p>
      </LSection>

      <LSection n="10" title="Indemnification">
        <p>You agree to indemnify, defend, and hold harmless TRT Boost, its affiliates, officers, directors, employees, agents, and providers from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or related to:</p>
        <ul>
          <li>Your use of or access to the Services.</li>
          <li>Your violation of these Terms or any applicable law.</li>
          <li>Any false, inaccurate, or misleading information you provide.</li>
          <li>Your infringement of any third-party rights.</li>
        </ul>
      </LSection>

      <LSection n="11" title="Dispute Resolution & Arbitration">
        <p>Any dispute, controversy, or claim arising out of or relating to these Terms or our Services shall be resolved through <strong>binding arbitration</strong> in accordance with the rules of the American Arbitration Association (AAA).</p>
        <ul>
          <li>Arbitration shall take place in [Company State/City] or remotely, at the claimant&apos;s election.</li>
          <li>You agree to waive any right to participate in a class action lawsuit or class-wide arbitration.</li>
          <li>Each party shall bear its own costs, unless the arbitrator determines otherwise.</li>
          <li>The arbitrator&apos;s decision shall be final and binding and may be entered as a judgment in any court of competent jurisdiction.</li>
        </ul>
        <p>Notwithstanding the above, either party may seek injunctive or equitable relief in a court of competent jurisdiction to protect intellectual property rights or prevent irreparable harm.</p>
      </LSection>

      <LSection n="12" title="Disclaimers">
        <p>THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. TRT BOOST MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:</p>
        <ul>
          <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement.</li>
          <li>That the Services will be uninterrupted, error-free, or completely secure.</li>
          <li>That any medical information or advice provided is a guarantee of specific health outcomes.</li>
        </ul>
        <p>TRT Boost does not guarantee that treatment will be prescribed for every patient. Medical decisions are made solely by licensed healthcare providers based on clinical judgment.</p>
      </LSection>

      <LSection n="13" title="Governing Law">
        <p>These Terms shall be governed by and construed in accordance with the laws of the State of [State], without regard to its conflict of law provisions. Any legal proceedings not subject to arbitration shall be brought exclusively in the state or federal courts located in [State/County].</p>
      </LSection>

      <LSection n="14" title="Severability">
        <p>If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, that provision shall be modified to the minimum extent necessary to make it enforceable, and the remaining provisions shall continue in full force and effect.</p>
      </LSection>

      <LSection n="15" title="Entire Agreement">
        <p>These Terms, together with our Privacy Policy, Refund & Cancellation Policy, and any other policies referenced herein, constitute the entire agreement between you and TRT Boost regarding the use of our Services and supersede all prior agreements, understandings, and representations.</p>
      </LSection>

      <LSection n="16" title="Contact Information">
        <p>For any questions or concerns regarding these Terms & Conditions, please reach out to us:</p>
        <ul>
          <li><strong>Email:</strong> <a href={`mailto:${site.contact.legalEmail}`}>{site.contact.legalEmail}</a></li>
          <li><strong>Phone:</strong> {site.contact.phoneDisplay}</li>
          <li><strong>Mail:</strong> TRT Boost Legal Department, [Company Address]</li>
          <li><strong>Online:</strong> {site.url}/contact</li>
        </ul>
        <div className="callout">
          <strong>Acknowledgment</strong>
          By creating an account or using TRT Boost Services, you acknowledge that
          you have read, understood, and agree to be bound by these Terms &
          Conditions. If you do not agree to these Terms, you may not access or use
          our Services.
        </div>
      </LSection>
    </LegalLayout>
  );
}
