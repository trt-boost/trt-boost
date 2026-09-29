import { ClipboardList, Stethoscope, Truck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Answer four quick questions",
    body: "Tell us what you want help with in about two minutes — no insurance, no waiting rooms. Add lab work if you have it; if not, we make testing easy.",
  },
  {
    icon: Stethoscope,
    title: "Meet your provider on video",
    body: "Book a free consultation. A provider licensed in your state reviews your goals and labs, then confirms the right plan and prescribes when it's appropriate.",
  },
  {
    icon: Truck,
    title: "Subscribe and get treatment",
    body: "Once approved, subscribe to your monthly plan. Medication ships discreetly from a licensed U.S. pharmacy, with ongoing check-ins, refills, and dose adjustments.",
  },
];

export function HowItWorks({ withNumbers = true }: { withNumbers?: boolean }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((step, i) => (
        <div
          key={step.title}
          className="relative rounded-2xl border border-ink-100 bg-white p-7 shadow-[var(--shadow-card)]"
        >
          {withNumbers && (
            <span className="absolute right-6 top-6 font-display text-5xl font-extrabold text-ink-100">
              {i + 1}
            </span>
          )}
          <span className="inline-flex size-12 items-center justify-center rounded-xl bg-ink-900 text-brand-400">
            <step.icon className="size-6" />
          </span>
          <h3 className="mt-5 text-xl font-bold text-ink-900">{step.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
            {step.body}
          </p>
        </div>
      ))}
    </div>
  );
}
