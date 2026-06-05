import type { Metadata } from "next";
import { LegalLayout, LSection } from "@/components/legal/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How TRT Boost uses cookies and similar technologies, the categories we use, and how to manage your preferences.",
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      effectiveDate="March 31, 2026"
      currentHref="/legal/cookie-policy"
      intro={
        <p>
          This Cookie Policy explains how TRT Boost uses cookies and similar
          technologies on our website. It should be read together with our{" "}
          <a href="/legal/privacy-policy">Privacy Policy</a>.
        </p>
      }
    >
      <LSection n="01" title="What Are Cookies">
        <p>
          Cookies are small text files placed on your device when you visit a
          website. They help the site function, remember your preferences, and
          understand how the site is used. We also use similar technologies such
          as pixels, local storage, and SDKs.
        </p>
      </LSection>

      <LSection n="02" title="Categories of Cookies We Use">
        <table>
          <thead><tr><th>Category</th><th>Purpose</th></tr></thead>
          <tbody>
            <tr><td>Strictly necessary</td><td>Enable core functionality such as security, network management, and accessibility. These cannot be switched off in our systems.</td></tr>
            <tr><td>Performance & analytics</td><td>Help us understand how visitors use the site so we can improve it.</td></tr>
            <tr><td>Functional</td><td>Remember choices you make (such as preferences) to provide a more personalized experience.</td></tr>
            <tr><td>Advertising & targeting</td><td>Used to measure and improve marketing campaigns and, where permitted, deliver relevant ads.</td></tr>
          </tbody>
        </table>
      </LSection>

      <LSection n="03" title="Managing Your Preferences">
        <ul>
          <li>You can manage non-essential cookies through our cookie banner or preference center where available.</li>
          <li>Most browsers let you block or delete cookies via their settings. Disabling some cookies may affect site functionality.</li>
          <li>We honor recognized opt-out preference signals (such as Global Privacy Control) where required by law.</li>
        </ul>
      </LSection>

      <LSection n="04" title="Your Privacy Rights">
        <p>
          Depending on where you live, you may have the right to opt out of the
          &quot;sale&quot; or &quot;sharing&quot; of personal information and of
          targeted advertising. See our{" "}
          <a href="/legal/privacy-policy">Privacy Policy</a> for details and how to
          exercise these rights. To make a request, contact{" "}
          <a href={`mailto:${site.contact.legalEmail}`}>{site.contact.legalEmail}</a>.
        </p>
      </LSection>

      <LSection n="05" title="Changes">
        <p>
          We may update this Cookie Policy from time to time. Material changes will
          be reflected by the updated effective date above.
        </p>
      </LSection>
    </LegalLayout>
  );
}
