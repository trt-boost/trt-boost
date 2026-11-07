import type { Metadata } from "next";
import { LegalLayout, LSection } from "@/components/legal/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Notice of Privacy Practices",
  description:
    "TRT Boost's HIPAA Notice of Privacy Practices — how your protected health information may be used and disclosed, and your rights.",
};

export default function PrivacyPracticesPage() {
  return (
    <LegalLayout
      title="Notice of Privacy Practices"
      effectiveDate="March 31, 2026"
      currentHref="/legal/privacy-practices"
      intro={
        <>
          <div className="callout">
            <strong>This notice describes how medical information about you may be used and disclosed, and how you can get access to this information. Please review it carefully.</strong>
          </div>
          <p>
            TRT Boost and its affiliated providers and pharmacies (&quot;we&quot;)
            are committed to protecting the privacy of your protected health
            information (&quot;PHI&quot;) as required by the Health Insurance
            Portability and Accountability Act (&quot;HIPAA&quot;) and applicable
            state law. This Notice is separate from, and supplements, our{" "}
            <a href="/legal/privacy-policy">Privacy Policy</a>.
          </p>
        </>
      }
    >
      <LSection n="01" title="How We May Use & Disclose Your PHI">
        <h3>For treatment</h3>
        <p>We use and share your PHI to provide, coordinate, and manage your care — for example, sharing information among your providers, pharmacies, and laboratories.</p>
        <h3>For payment</h3>
        <p>We use and share PHI to bill and collect payment for services, including processing transactions and coordinating with payment processors.</p>
        <h3>For healthcare operations</h3>
        <p>We use PHI to operate and improve our services, including quality assessment, care coordination, and administrative functions.</p>
        <h3>As required or permitted by law</h3>
        <ul>
          <li>To comply with legal, regulatory, and public-health obligations.</li>
          <li>To prevent a serious threat to health or safety.</li>
          <li>For law enforcement or judicial proceedings when legally required.</li>
          <li>To business associates who perform services on our behalf under written agreements requiring them to safeguard PHI.</li>
        </ul>
      </LSection>

      <LSection n="02" title="Uses & Disclosures Requiring Your Authorization">
        <p>
          Most uses and disclosures not described in this Notice will be made only
          with your written authorization, including most uses of psychotherapy
          notes, marketing that involves payment from a third party, and any sale
          of PHI. You may revoke an authorization in writing at any time.
        </p>
      </LSection>

      <LSection n="03" title="Your Health Information Rights">
        <ul>
          <li><strong>Access:</strong> You may request to inspect and obtain a copy of your PHI.</li>
          <li><strong>Amendment:</strong> You may request that we correct PHI you believe is inaccurate or incomplete.</li>
          <li><strong>Accounting of disclosures:</strong> You may request a list of certain disclosures we made.</li>
          <li><strong>Restrictions:</strong> You may request limits on how we use or disclose your PHI.</li>
          <li><strong>Confidential communications:</strong> You may request that we contact you in a specific way or location.</li>
          <li><strong>Paper copy:</strong> You may request a paper copy of this Notice at any time.</li>
          <li><strong>Breach notification:</strong> You have the right to be notified following a breach of unsecured PHI.</li>
        </ul>
      </LSection>

      <LSection n="04" title="Our Responsibilities">
        <ul>
          <li>We are required by law to maintain the privacy and security of your PHI.</li>
          <li>We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information.</li>
          <li>We must follow the duties and privacy practices described in this Notice and provide you a copy of it.</li>
        </ul>
      </LSection>

      <LSection n="05" title="Changes to This Notice">
        <p>
          We may change this Notice and make the new terms effective for all PHI
          we maintain. The updated Notice will be posted with a new effective
          date.
        </p>
      </LSection>

      <LSection n="06" title="Complaints & Contact">
        <p>
          If you believe your privacy rights have been violated, you may file a
          complaint with us or with the U.S. Department of Health & Human Services
          Office for Civil Rights. You will not be retaliated against for filing a
          complaint.
        </p>
        <ul>
          <li><strong>Privacy Officer:</strong> <a href={`mailto:${site.contact.legalEmail}`}>{site.contact.legalEmail}</a></li>
          <li><strong>Phone:</strong> {site.contact.phoneDisplay}</li>
          <li><strong>Mail:</strong> TRT Boost Privacy Office, {site.contact.address}</li>
        </ul>
      </LSection>
    </LegalLayout>
  );
}
