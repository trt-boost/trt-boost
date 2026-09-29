import type { Metadata } from "next";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { plans, refundPromise, VAGARO_BOOKING_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plans & Pricing",
  description:
    "Simple monthly plans for TRT, weight loss, and peptide therapy. Book a free consultation, then subscribe once your provider approves.",
};

export default function SubscribePage() {
  return (
    <>
      <PageHero
        eyebrow="Plans"
        title="Simple monthly plans"
        subtitle="One flat price. Book a free consultation first — you subscribe only after a licensed provider approves your treatment."
      />

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="flex flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-[var(--shadow-card)]"
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                  {plan.name}
                </p>
                <h2 className="mt-2 text-xl font-bold text-ink-900">{plan.title}</h2>
                <p className="mt-3 font-display text-4xl font-extrabold text-ink-900">
                  ${plan.price}
                  <span className="text-base font-semibold text-ink-400">/month</span>
                </p>
                <p className="mt-3 text-[15px] text-ink-500">{plan.blurb}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink-600">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.membershipUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-500 px-6 font-semibold text-ink-950 shadow-[0_8px_24px_-10px_rgba(18,221,150,0.7)] transition-all hover:bg-brand-400"
                >
                  Subscribe
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <p className="mt-3 text-xs text-ink-400">{refundPromise}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-brand-200 bg-brand-50/60 p-6 text-center">
            <p className="flex items-center gap-2 font-semibold text-ink-900">
              <ShieldCheck className="size-5 text-brand-700" />
              Haven&apos;t had your consultation yet?
            </p>
            <p className="max-w-lg text-sm text-ink-600">
              Start there — it&apos;s free, takes a few minutes on video, and a
              licensed provider confirms which plan is right for you before you
              pay anything.
            </p>
            <a
              href={VAGARO_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex h-11 items-center gap-2 rounded-full border border-ink-200 bg-white px-6 font-semibold text-ink-800 transition-colors hover:border-ink-400"
            >
              Book Your Free Consultation
              <ArrowRight className="size-4" />
            </a>
          </div>
        </Container>
      </section>

      <section className="bg-ink-50/60">
        <Container className="py-16 sm:py-20">
          <h2 className="text-center text-2xl font-bold text-ink-900 sm:text-3xl">
            How it works
          </h2>
          <div className="mt-10">
            <HowItWorks />
          </div>
        </Container>
      </section>
    </>
  );
}
