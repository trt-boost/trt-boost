import type { Metadata } from "next";
import { LegalLayout, LSection } from "@/components/legal/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "TRT Boost is committed to making its website accessible to everyone, in line with WCAG 2.1 AA guidelines.",
};

export default function AccessibilityPage() {
  return (
    <LegalLayout
      title="Accessibility Statement"
      effectiveDate="March 31, 2026"
      currentHref="/legal/accessibility"
      intro={
        <p>
          TRT Boost is committed to ensuring digital accessibility for people of
          all abilities. We are continually improving the user experience for
          everyone and applying the relevant accessibility standards.
        </p>
      }
    >
      <LSection n="01" title="Our Commitment">
        <p>
          We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1
          Level AA. These guidelines explain how to make web content more
          accessible to people with a wide range of disabilities, including visual,
          auditory, physical, speech, cognitive, and neurological disabilities.
        </p>
      </LSection>

      <LSection n="02" title="Measures We Take">
        <ul>
          <li>Semantic HTML, sufficient color contrast, and visible focus states.</li>
          <li>Keyboard-navigable interfaces and descriptive alternative text for meaningful images.</li>
          <li>Respect for reduced-motion preferences in animations.</li>
          <li>Ongoing testing and accessibility considerations in our design and development process.</li>
        </ul>
      </LSection>

      <LSection n="03" title="Ongoing Effort">
        <p>
          Accessibility is an ongoing effort. Some content may not yet fully
          conform to every guideline, and we are actively working to identify and
          resolve issues. Third-party content and integrations may not be fully
          under our control.
        </p>
      </LSection>

      <LSection n="04" title="Feedback & Assistance">
        <p>
          If you encounter an accessibility barrier or need assistance accessing
          any part of our services, please contact us so we can help and improve.
          We aim to respond within a reasonable timeframe.
        </p>
        <ul>
          <li><strong>Email:</strong> <a href={`mailto:${site.contact.supportEmail}`}>{site.contact.supportEmail}</a></li>
          <li><strong>Phone:</strong> {site.contact.phoneDisplay} ({site.contact.hours})</li>
        </ul>
      </LSection>
    </LegalLayout>
  );
}
