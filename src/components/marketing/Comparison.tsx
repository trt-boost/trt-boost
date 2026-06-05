import { Check, X } from "lucide-react";

const rows: { old: string; trt: string }[] = [
  { old: "Weeks to get an appointment", trt: "Online visit in minutes" },
  { old: "Awkward in-person waiting rooms", trt: "100% private, from home" },
  { old: "Surprise bills and markups", trt: "Transparent pricing from $20/mo" },
  { old: "Pharmacy pickup lines", trt: "Free, discreet home delivery" },
  { old: "One-and-done, then you're on your own", trt: "Ongoing care & dose adjustments" },
  { old: "Generic, one-size-fits-all advice", trt: "Licensed providers + lab-guided plans" },
];

export function Comparison() {
  return (
    <div className="grid gap-5 md:grid-cols-2 md:gap-0 md:overflow-hidden md:rounded-3xl md:border md:border-ink-100 md:shadow-[var(--shadow-card)]">
      {/* Old way */}
      <div className="rounded-3xl border border-ink-100 bg-ink-50/60 p-7 sm:p-9 md:rounded-none md:border-0 md:border-r">
        <p className="text-xs font-bold uppercase tracking-wider text-ink-400">
          The old way
        </p>
        <h3 className="mt-2 text-2xl font-bold text-ink-500">Clinics & guesswork</h3>
        <ul className="mt-6 space-y-4">
          {rows.map((r) => (
            <li key={r.old} className="flex items-start gap-3 text-ink-500">
              <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-ink-200/70 text-ink-500">
                <X className="size-4" />
              </span>
              <span className="text-[15px]">{r.old}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* TRT Boost */}
      <div className="relative overflow-hidden rounded-3xl bg-ink-950 p-7 text-white sm:p-9 md:rounded-none">
        <div className="bg-grid-brand absolute inset-0 opacity-50" />
        <div className="absolute -right-16 -top-16 size-56 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-400">
            The TRT Boost way
          </p>
          <h3 className="mt-2 text-2xl font-bold text-white">
            Modern, doctor-trusted care
          </h3>
          <ul className="mt-6 space-y-4">
            {rows.map((r) => (
              <li key={r.trt} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-ink-950">
                  <Check className="size-4" />
                </span>
                <span className="text-[15px] text-ink-100">{r.trt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
