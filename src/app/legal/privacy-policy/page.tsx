import type { Metadata } from "next";
import { LegalLayout, LSection } from "@/components/legal/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How TRT Boost collects, uses, protects, and shares your personal and health information across our telehealth platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      effectiveDate="March 31, 2026"
      currentHref="/legal/privacy-policy"
      intro={
        <>
          <p>
            This Privacy Policy explains how {site.legalName} (&quot;TRT
            Boost&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
            collects, uses, discloses, and protects your information when you use
            our website, telehealth platform, and related services (the
            &quot;Services&quot;). Your privacy and the confidentiality of your
            health information are extremely important to us.
          </p>
          <p>
            By using our Services, you consent to the practices described in this
            Privacy Policy. If you do not agree, please do not use our Services.
          </p>
        </>
      }
    >
      <LSection n="01" title="Information We Collect">
        <p>We collect information you provide directly, information generated through your use of the Services, and information from trusted partners.</p>
        <h3>Information you provide</h3>
        <ul>
          <li><strong>Account information:</strong> name, email, phone number, date of birth, mailing and shipping address, and login credentials.</li>
          <li><strong>Health information (PHI):</strong> medical history, symptoms, medications, allergies, intake questionnaire responses, lab results, and other information shared with your provider.</li>
          <li><strong>Identity verification:</strong> government-issued ID or other documentation where required to confirm eligibility.</li>
          <li><strong>Payment information:</strong> billing details processed securely by our third-party payment processor (we do not store full card numbers).</li>
          <li><strong>Communications:</strong> messages with your care team, support requests, and survey responses.</li>
        </ul>
        <h3>Information collected automatically</h3>
        <ul>
          <li>Device, browser, and IP information, and general location derived from it.</li>
          <li>Usage data such as pages viewed, features used, and time spent.</li>
          <li>Cookies and similar technologies (see Section 7).</li>
        </ul>
      </LSection>

      <LSection n="02" title="How We Use Your Information">
        <p>We use your information to:</p>
        <ul>
          <li>Provide telehealth consultations, evaluate eligibility, and facilitate prescriptions and treatment.</li>
          <li>Process orders, payments, subscriptions, and shipments.</li>
          <li>Communicate with you about your care, orders, account, and customer support requests.</li>
          <li>Coordinate with licensed providers, pharmacies, and laboratories involved in your care.</li>
          <li>Operate, maintain, secure, and improve our Services.</li>
          <li>Send service updates and, where permitted, marketing communications (which you can opt out of at any time).</li>
          <li>Comply with legal, regulatory, and pharmacy obligations and prevent fraud or misuse.</li>
        </ul>
      </LSection>

      <LSection n="03" title="Protected Health Information & HIPAA">
        <p>
          Health information you share through the Services may constitute
          Protected Health Information (&quot;PHI&quot;). Where applicable, PHI is
          handled in accordance with the Health Insurance Portability and
          Accountability Act (&quot;HIPAA&quot;) and other applicable health
          privacy laws.
        </p>
        <ul>
          <li>Your providers and their associated practices act as covered entities; TRT Boost and its vendors may act as business associates under HIPAA.</li>
          <li>We use and disclose PHI for treatment, payment, and healthcare operations, and as otherwise permitted or required by law.</li>
          <li>We require partners who handle PHI to maintain appropriate safeguards through business associate agreements.</li>
        </ul>
      </LSection>

      <LSection n="04" title="How We Share Your Information">
        <p>We do <strong>not</strong> sell your personal or health information. We share information only as needed to deliver the Services and as described below:</p>
        <ul>
          <li><strong>Healthcare providers:</strong> licensed clinicians who evaluate you and manage your treatment.</li>
          <li><strong>Pharmacies:</strong> licensed partner pharmacies that compound, dispense, and ship your medication.</li>
          <li><strong>Laboratories:</strong> diagnostic labs that process any ordered tests.</li>
          <li><strong>Service providers:</strong> vendors that support intake, scheduling, electronic health records, hosting, analytics, communications, and customer support (including our clinical intake and practice-management platform).</li>
          <li><strong>Payment processors:</strong> to securely process payments and subscriptions.</li>
          <li><strong>Legal and safety:</strong> to comply with the law, respond to lawful requests, enforce our Terms, or protect the rights, safety, and property of patients, the public, or TRT Boost.</li>
          <li><strong>Business transfers:</strong> in connection with a merger, acquisition, financing, or sale of assets, subject to this Privacy Policy.</li>
        </ul>
      </LSection>

      <LSection n="05" title="Payment Information Security">
        <p>
          Payments are processed by PCI-DSS compliant third-party payment
          providers. We accept major credit and debit cards (Visa, Mastercard,
          American Express, Discover) and, where eligible, HSA/FSA cards. Full
          card numbers are tokenized and handled by our payment processor; TRT
          Boost does not store complete payment card numbers on its systems.
        </p>
      </LSection>

      <LSection n="06" title="Data Retention">
        <p>
          We retain your information for as long as your account is active and as
          needed to provide the Services. Medical records and related information
          are retained for the periods required by applicable medical
          recordkeeping, pharmacy, and tax laws, after which they are securely
          deleted or de-identified.
        </p>
      </LSection>

      <LSection n="07" title="Cookies & Tracking Technologies">
        <p>We use cookies and similar technologies to operate the site, remember preferences, analyze performance, and (with consent where required) support marketing.</p>
        <ul>
          <li><strong>Essential cookies</strong> are necessary for the site to function.</li>
          <li><strong>Analytics cookies</strong> help us understand how the Services are used.</li>
          <li><strong>Marketing cookies</strong> may be used to measure and improve campaigns.</li>
        </ul>
        <p>You can control cookies through your browser settings. Disabling some cookies may affect site functionality. We honor recognized opt-out preference signals where required by law.</p>
      </LSection>

      <LSection n="08" title="Your Privacy Rights">
        <p>Depending on where you live, you may have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion of your information, subject to legal and medical-record retention requirements.</li>
          <li>Opt out of marketing communications.</li>
          <li>Opt out of the &quot;sale&quot; or &quot;sharing&quot; of personal information (note: we do not sell your information).</li>
          <li>Request a copy of your information in a portable format.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href={`mailto:${site.contact.legalEmail}`}>{site.contact.legalEmail}</a>.
          We will verify your identity before responding and will not discriminate
          against you for exercising your rights.
        </p>
      </LSection>

      <LSection n="09" title="Data Security">
        <p>
          We use administrative, technical, and physical safeguards — including
          encryption in transit, access controls, and secure infrastructure — to
          protect your information. No method of transmission or storage is 100%
          secure, and we cannot guarantee absolute security. Notify us immediately
          at{" "}
          <a href={`mailto:${site.contact.securityEmail}`}>{site.contact.securityEmail}</a>{" "}
          if you suspect any unauthorized access to your account.
        </p>
      </LSection>

      <LSection n="10" title="Children's Privacy">
        <p>
          Our Services are intended only for adults <strong>18 years of age or
          older</strong>. We do not knowingly collect personal information from
          children. If we learn that we have collected information from a minor, we
          will delete it promptly.
        </p>
      </LSection>

      <LSection n="11" title="Communications & Consent">
        <p>
          By providing your contact information, you consent to receive
          service-related communications (such as order, billing, and clinical
          notifications) by email, SMS, and phone. Message and data rates may
          apply. You may opt out of marketing messages at any time by following the
          unsubscribe instructions or replying STOP to text messages; transactional
          and clinical messages may continue as needed to provide the Services.
        </p>
      </LSection>

      <LSection n="12" title="Third-Party Links">
        <p>
          Our Services may link to third-party websites or services that we do not
          control. This Privacy Policy does not apply to those third parties, and
          we encourage you to review their privacy practices.
        </p>
      </LSection>

      <LSection n="13" title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Material changes will
          be posted on this page with an updated effective date and, where
          appropriate, communicated to you directly. Your continued use of the
          Services after changes take effect constitutes acceptance of the revised
          policy.
        </p>
      </LSection>

      <LSection n="14" title="Contact Us">
        <p>For questions or concerns about this Privacy Policy or your information, contact us:</p>
        <ul>
          <li><strong>Email:</strong> <a href={`mailto:${site.contact.legalEmail}`}>{site.contact.legalEmail}</a></li>
          <li><strong>Phone:</strong> {site.contact.phoneDisplay}</li>
          <li><strong>Hours:</strong> {site.contact.hours}</li>
          <li><strong>Mail:</strong> TRT Boost Privacy Office, [Company Address]</li>
        </ul>
        <p className="text-sm italic text-ink-500">
          This Privacy Policy is provided as a general template and should be
          reviewed by qualified legal counsel before publication to ensure
          compliance with all applicable federal and state laws, including HIPAA
          and applicable state privacy statutes.
        </p>
      </LSection>
    </LegalLayout>
  );
}
