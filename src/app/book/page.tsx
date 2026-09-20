import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { VagaroWidget } from "@/components/booking/VagaroWidget";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book an appointment with TRT Boost. Choose a time that works for you and a licensed provider will review your visit.",
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Booking"
        title="Book an appointment"
        subtitle="Pick a time that works for you. A licensed provider reviews every visit before any treatment is prescribed."
      />

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center text-2xl font-bold text-ink-900">
              Book Now
            </h2>
            <div className="mt-8">
              <VagaroWidget />
            </div>
            <p className="mt-10 text-center text-sm text-ink-500">
              Prefer to talk to someone first? Call{" "}
              <a
                href={site.contact.phoneHref}
                className="font-semibold text-brand-700 hover:underline"
              >
                {site.contact.phoneDisplay}
              </a>{" "}
              — {site.contact.hours}.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
