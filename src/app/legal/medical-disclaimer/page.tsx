import type { Metadata } from "next";
import { LegalLayout, LSection } from "@/components/legal/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Information on the TRT Boost website is for general educational purposes and is not a substitute for professional medical advice, diagnosis, or treatment.",
};

export default function MedicalDisclaimerPage() {
  return (
    <LegalLayout
      title="Medical Disclaimer"
      effectiveDate="March 31, 2026"
      currentHref="/legal/medical-disclaimer"
      intro={
        <div className="callout">
          <strong>Not medical advice</strong>
          The content on this website is for general informational and educational
          purposes only and is not a substitute for professional medical advice,
          diagnosis, or treatment.
        </div>
      }
    >
      <LSection n="01" title="No Doctor–Patient Relationship From Content">
        <p>
          Reading content on this website does not create a doctor–patient
          relationship. A provider relationship is established only when you
          complete an intake and are evaluated by a licensed TRT Boost provider.
          Always seek the advice of a qualified health provider with any questions
          you have regarding a medical condition.
        </p>
      </LSection>

      <LSection n="02" title="Individual Results Vary">
        <p>
          Treatments, dosages, and outcomes differ from person to person. Any
          descriptions of benefits are general and not a promise or guarantee of
          specific results. A provider determines whether a treatment is
          appropriate for you based on your individual evaluation.
        </p>
      </LSection>

      <LSection n="03" title="Emergencies">
        <p>
          <strong>Do not use this website for medical emergencies.</strong> If you
          think you may have a medical emergency, call 911 or go to the nearest
          emergency room immediately. Do not disregard professional medical advice
          or delay seeking it because of something you read here.
        </p>
      </LSection>

      <LSection n="04" title="Prescription Medications">
        <p>
          Prescription medications referenced on this site are available only with
          a valid prescription from a licensed provider and are dispensed by
          licensed pharmacies. Use medications only as directed. Tell your provider
          about all medications, supplements, and medical conditions, as they may
          affect your treatment.
        </p>
      </LSection>

      <LSection n="05" title="Third-Party Information">
        <p>
          Links or references to third-party content are provided for convenience
          and do not constitute an endorsement. TRT Boost is not responsible for
          the accuracy of third-party information.
        </p>
        <p>
          Questions? Contact{" "}
          <a href={`mailto:${site.contact.supportEmail}`}>{site.contact.supportEmail}</a>.
        </p>
      </LSection>
    </LegalLayout>
  );
}
