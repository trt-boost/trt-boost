import type { Metadata } from "next";
import { LegalLayout, LSection } from "@/components/legal/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Telehealth Informed Consent",
  description:
    "Informed consent to receive telehealth services from TRT Boost — how remote care works, its benefits, risks, and your rights.",
};

export default function TelehealthConsentPage() {
  return (
    <LegalLayout
      title="Telehealth Informed Consent"
      effectiveDate="March 31, 2026"
      currentHref="/legal/telehealth-consent"
      intro={
        <>
          <p>
            This Informed Consent to Telehealth (&quot;Consent&quot;) explains
            how telehealth works at TRT Boost and the benefits, risks, and
            limitations of receiving care remotely. By creating an account,
            completing an intake, or receiving services, you acknowledge that you
            have read and agree to this Consent.
          </p>
          <div className="callout">
            <strong>Not for emergencies</strong>
            Telehealth is not a substitute for emergency care. If you are
            experiencing a medical emergency, call 911 or go to your nearest
            emergency room.
          </div>
        </>
      }
    >
      <LSection n="01" title="What Telehealth Is">
        <p>
          Telehealth is the delivery of healthcare services using secure
          electronic communications — including online questionnaires, secure
          messaging, audio, and video — between you and a licensed healthcare
          provider who may be in a different location.
        </p>
        <p>Through TRT Boost, telehealth may include:</p>
        <ul>
          <li>Review of your medical intake, history, and any lab results.</li>
          <li>Asynchronous (store-and-forward) evaluation of your information.</li>
          <li>Secure messaging and, where appropriate, audio or video visits.</li>
          <li>Issuing prescriptions when clinically appropriate, and ongoing follow-up.</li>
        </ul>
      </LSection>

      <LSection n="02" title="Expected Benefits">
        <ul>
          <li>Convenient access to licensed providers without travel or waiting rooms.</li>
          <li>Greater privacy and flexibility in managing your care.</li>
          <li>Timely evaluation, treatment, and ongoing monitoring when appropriate.</li>
        </ul>
      </LSection>

      <LSection n="03" title="Possible Risks & Limitations">
        <p>As with any medical service, telehealth has potential risks and limitations, including:</p>
        <ul>
          <li>Your provider may not be able to fully evaluate your condition without an in-person exam, and may determine that telehealth is not appropriate for you.</li>
          <li>Delays in evaluation or treatment could occur due to technology or transmission failures.</li>
          <li>In rare cases, information transmitted may be insufficient to allow appropriate decision-making.</li>
          <li>Security protocols could fail, causing a breach of privacy despite reasonable safeguards.</li>
          <li>A provider may determine that a prescription is not clinically appropriate, and none will be issued.</li>
        </ul>
      </LSection>

      <LSection n="04" title="Your Rights">
        <ul>
          <li>You may withhold or withdraw consent to telehealth at any time without affecting your right to future care.</li>
          <li>You may request alternative in-person care, though TRT Boost does not provide in-person services and may refer you elsewhere.</li>
          <li>You have the right to confidentiality of your information consistent with applicable law and our <a href="/legal/privacy-practices">Notice of Privacy Practices</a>.</li>
          <li>You have the right to ask questions about your treatment and to receive information about your condition and options.</li>
        </ul>
      </LSection>

      <LSection n="05" title="Prescriptions & Controlled Substances">
        <p>
          Prescriptions are issued solely at the discretion of the treating
          provider, based on your evaluation, and only when clinically
          appropriate. Certain medications and controlled substances may be
          subject to additional federal and state requirements, including
          identity verification, lab work, or limitations on telehealth
          prescribing in your state.
        </p>
      </LSection>

      <LSection n="06" title="Consent">
        <p>By proceeding, you acknowledge and agree that:</p>
        <ul>
          <li>You have read and understand this Consent and the risks, benefits, and alternatives of telehealth.</li>
          <li>You consent to receive care from TRT Boost providers via telehealth.</li>
          <li>You are physically located in a U.S. state or territory where the provider is licensed.</li>
          <li>The information you provide is accurate and complete to the best of your knowledge.</li>
        </ul>
        <p>
          Questions about this Consent? Contact{" "}
          <a href={`mailto:${site.contact.supportEmail}`}>{site.contact.supportEmail}</a>{" "}
          or call {site.contact.phoneDisplay}.
        </p>
      </LSection>
    </LegalLayout>
  );
}
