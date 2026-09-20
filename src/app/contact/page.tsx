import type { Metadata } from "next";
import { Phone, Mail, Clock, MessageSquare, CreditCard, Scale } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TRT Boost support — phone, email, and live chat. We're here Monday–Friday, 8 AM–8 PM EST.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're here to help"
        subtitle="Questions about treatments, billing, or an existing order? Reach our support team — we respond fast."
      />

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            {/* Channels */}
            <div className="space-y-4">
              <ContactCard
                icon={Phone}
                title="Call us"
                lines={[site.contact.phoneDisplay, site.contact.hours]}
                href={site.contact.phoneHref}
                action="Call now"
              />
              <ContactCard
                icon={MessageSquare}
                title="Live chat"
                lines={["Available on our website", "Mon–Fri, 8 AM – 8 PM EST"]}
              />
              <ContactCard
                icon={Mail}
                title="General support"
                lines={["For help with your account or order"]}
                href={`mailto:${site.contact.supportEmail}`}
                action={site.contact.supportEmail}
              />
              <ContactCard
                icon={CreditCard}
                title="Billing"
                lines={["Refunds, subscriptions, and charges"]}
                href={`mailto:${site.contact.billingEmail}`}
                action={site.contact.billingEmail}
              />
              <ContactCard
                icon={Scale}
                title="Legal & privacy"
                lines={["Policy and legal inquiries"]}
                href={`mailto:${site.contact.legalEmail}`}
                action={site.contact.legalEmail}
              />
              <div className="flex items-start gap-3 rounded-2xl border border-ink-100 bg-ink-50/50 p-5 text-sm text-ink-600">
                <Clock className="mt-0.5 size-5 shrink-0 text-brand-600" />
                <p>
                  Our support team is available {site.contact.hours}. Emails are
                  answered within 2 business days.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-ink-900">Send us a message</h2>
              <p className="mt-2 text-ink-500">
                Fill out the form and we&apos;ll get back to you shortly.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  lines,
  href,
  action,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  href?: string;
  action?: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-[var(--shadow-card)]">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
        <Icon className="size-5" />
      </span>
      <div>
        <h3 className="font-bold text-ink-900">{title}</h3>
        {lines.map((l) => (
          <p key={l} className="text-sm text-ink-500">
            {l}
          </p>
        ))}
        {href && action && (
          <a href={href} className="mt-1 inline-block text-sm font-semibold text-brand-700 hover:underline">
            {action}
          </a>
        )}
      </div>
    </div>
  );
}
