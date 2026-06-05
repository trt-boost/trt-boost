import type { Metadata } from "next";
import { ClipboardList, Stethoscope, Truck, RefreshCw } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/marketing/CtaBand";
import { TrustBar } from "@/components/marketing/TrustBar";
import { GetStarted } from "@/components/GetStarted";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How TRT Boost works: complete an online visit, get reviewed by a licensed provider, and receive treatment at your door — with ongoing care.",
};

const steps = [
  {
    icon: ClipboardList,
    title: "Complete your online visit",
    body: "Tell us about your symptoms, health history, and goals through a secure intake — in just a few minutes, from anywhere. If lab work is needed, we'll guide you to convenient testing.",
  },
  {
    icon: Stethoscope,
    title: "A licensed provider reviews you",
    body: "A provider licensed in your state reviews your intake and labs to determine whether treatment is appropriate. They build a personalized plan and prescribe when it's the right fit.",
  },
  {
    icon: Truck,
    title: "Treatment ships to your door",
    body: "Approved medications are dispensed by a licensed U.S. pharmacy and shipped free in discreet, secure packaging — with temperature-controlled options for sensitive treatments.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing care & easy refills",
    body: "Stay on track with auto-refills, message your care team anytime, and get dose adjustments and lab follow-ups as your treatment evolves. Pause or cancel whenever you need.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Doctor-trusted care, designed for real life"
        subtitle="No waiting rooms, no runaround. Just a fast, private path from first visit to ongoing treatment — all online."
      >
        <GetStarted size="lg" label="Start your online visit" />
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

      <section className="bg-ink-50/60">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Why TRT Boost"
            title="Built for trust at every step"
          />
          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-ink-100 bg-white p-8">
            <TrustBar />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
