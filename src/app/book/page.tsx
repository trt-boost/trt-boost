import type { Metadata } from "next";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { VagaroWidget } from "@/components/booking/VagaroWidget";
import { chatEnabled, site, VAGARO_BOOKING_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Your Free Consultation",
  description:
    "Book your free consultation with TRT Boost. Choose a time that works for you and a licensed provider will review your visit.",
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Booking"
        title="Book your free consultation"
        subtitle="Pick a time that works for you. A licensed provider reviews every visit before any treatment is prescribed."
      />

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-ink-900">
                Book Your Free Consultation
              </h2>
              <p className="mt-2 text-ink-500">
                Choose a time on your provider&apos;s calendar. A licensed
                provider reviews every visit before any treatment is prescribed.
              </p>
              <a
                href={VAGARO_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-3.5 font-semibold text-ink-950 shadow-[0_8px_24px_-10px_rgba(18,221,150,0.7)] transition-all hover:bg-brand-400"
              >
                Book Your Free Consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <p className="mt-3 text-xs text-ink-400">
                Opens your provider&apos;s live calendar on Vagaro.
              </p>
            </div>

            <div className="mt-14 border-t border-ink-100 pt-10">
              <h3 className="text-center text-lg font-semibold text-ink-900">
                Or choose a specific service
              </h3>
              <div className="mt-6">
                <VagaroWidget />
              </div>
            </div>
            <div className="mt-10 text-center text-sm text-ink-500">
              <p>
                Questions first? You can chat with a provider directly{" "}
                {site.contact.hours}.
              </p>
              {chatEnabled && (
                <button
                  type="button"
                  data-open-chat
                  className="mt-3 inline-flex h-10 items-center gap-2 rounded-full border border-ink-200 px-4 font-semibold text-ink-800 transition-colors hover:border-ink-400"
                >
                  <MessageCircle className="size-4" />
                  Chat with a provider
                </button>
              )}
              <p className="mt-4">
                Prefer to call?{" "}
                <a
                  href={site.contact.phoneHref}
                  className="font-semibold text-brand-700 hover:underline"
                >
                  {site.contact.phoneDisplay}
                </a>{" "}
                — {site.contact.hours}.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
