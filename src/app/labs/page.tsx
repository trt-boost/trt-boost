import type { Metadata } from "next";
import {
  CalendarCheck,
  FileText,
  FlaskConical,
  Stethoscope,
  CreditCard,
  Clock,
  Droplets,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/marketing/CtaBand";
import { GetStarted } from "@/components/GetStarted";

export const metadata: Metadata = {
  title: "Lab Testing",
  description:
    "How lab testing works at TRT Boost: book your consultation, receive your lab requisition, get drawn at a nearby location, and review results with your provider.",
};

const steps = [
  {
    icon: CalendarCheck,
    title: "Book your consultation",
    body: "Choose a time that works for you. When you book, you'll add a card on file and we place a $50 hold — not a charge — to reserve your lab order and your provider's time.",
  },
  {
    icon: FileText,
    title: "Receive your lab requisition",
    body: "Once your booking is confirmed, we email you a signed lab requisition from our Medical Director with everything you need: the tests ordered, where to go, and how to prepare.",
  },
  {
    icon: FlaskConical,
    title: "Get your blood drawn",
    body: "Take your requisition and a photo ID to an Access Medical Laboratories draw location near you. Arrive fasting, in the morning — details below. Most routine results are back within a day or two.",
  },
  {
    icon: Stethoscope,
    title: "Review results with your provider",
    body: "Your provider reviews your bloodwork with you at your appointment and, if treatment is appropriate, builds a plan around your actual numbers.",
  },
];

const panel: { group: string; tests: string[] }[] = [
  { group: "Blood count & chemistry", tests: ["CBC with differential", "Comprehensive metabolic panel", "Lipid panel", "Hemoglobin A1c"] },
  { group: "Thyroid", tests: ["TSH", "Free T4"] },
  { group: "Hormones", tests: ["Testosterone, total", "Testosterone, free", "SHBG", "LH", "FSH", "Prolactin", "Estradiol (sensitive)"] },
  { group: "Prostate & nutrition", tests: ["PSA", "Vitamin D"] },
];

const prep = [
  {
    icon: Droplets,
    title: "Fast for 10–12 hours",
    body: "Nothing but plain water before your draw — no coffee, tea, gum, or supplements. Take your usual medications with water unless your provider tells you otherwise.",
  },
  {
    icon: Clock,
    title: "Go in the morning, 7–10 AM",
    body: "Testosterone is naturally highest early in the day. A late draw can read falsely low and may need to be repeated.",
  },
  {
    icon: FlaskConical,
    title: "Skip the hard stuff for 48 hours",
    body: "Avoid strenuous exercise, cycling, alcohol, and sexual activity for two days before your draw — they can affect PSA and hormone results.",
  },
];

export default function LabsPage() {
  return (
    <>
      <PageHero
        eyebrow="Lab testing"
        title="Your lab order, made simple"
        subtitle="Good hormone care starts with good numbers. Here's how to get the bloodwork your provider needs — and what to expect along the way."
      >
        <GetStarted size="lg" label="Book your consultation" href="/book" />
      </PageHero>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="flex gap-5 rounded-2xl border border-ink-100 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8"
              >
                <div className="flex flex-col items-center">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-brand-400">
                    <step.icon className="size-6" />
                  </span>
                  {i < steps.length - 1 && (
                    <span className="mt-2 h-full w-px flex-1 bg-ink-100" />
                  )}
                </div>
                <div className="pb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-ink-900">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-500">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The $50 hold */}
      <section className="bg-ink-50/60">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl rounded-3xl border border-ink-100 bg-white p-8 shadow-[var(--shadow-card)] sm:p-10">
            <div className="flex items-start gap-5">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <CreditCard className="size-6" />
              </span>
              <div>
                <h2 className="text-2xl font-bold text-ink-900">About the $50 hold</h2>
                <p className="mt-3 leading-relaxed text-ink-500">
                  When you book, we place a $50 authorization hold on your card.
                  A hold is not a charge — the money never leaves your account,
                  it&apos;s simply set aside temporarily by your bank.
                </p>
                <ul className="mt-4 space-y-2 text-ink-700">
                  <li className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />
                    <span>
                      <span className="font-semibold text-ink-900">If you attend and decide not to move forward,</span>{" "}
                      the hold is released after your appointment. Nothing is charged.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />
                    <span>
                      <span className="font-semibold text-ink-900">If you start treatment,</span>{" "}
                      the $50 is applied toward your treatment plan.
                    </span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-ink-400">
                  Lab fees, if any, are billed separately by the laboratory. See our{" "}
                  <a href="/legal/refund-policy" className="underline underline-offset-2 hover:text-ink-700">
                    Refund &amp; Cancellation policy
                  </a>{" "}
                  for full terms.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Preparation */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Before your draw"
            title={
              <>
                Three things that make your results <span className="text-gradient">accurate</span>
              </>
            }
            subtitle="Your requisition includes these instructions too. They matter — a poorly timed draw is the most common reason labs have to be repeated."
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {prep.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-ink-100 bg-ink-50/40 p-6 shadow-[var(--shadow-card)]"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-ink-900 text-brand-400">
                  <p.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What's tested */}
      <section className="bg-ink-950 text-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="What's tested"
            tone="light"
            title="A complete baseline, not a guess"
            subtitle={
              <span className="text-ink-300">
                Every new patient gets the same thorough panel, ordered by our Medical Director. Your provider may add tests based on your history.
              </span>
            }
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {panel.map((g) => (
              <div key={g.group} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-400">{g.group}</h3>
                <ul className="mt-4 space-y-2 text-sm text-ink-200">
                  {g.tests.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-ink-400">
            Testing is ordered only after you book and is reviewed by a licensed provider. Results alone do not establish a diagnosis or a treatment plan.
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
