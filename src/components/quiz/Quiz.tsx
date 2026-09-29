"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileText,
  Lock,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Wordmark } from "@/components/brand/Wordmark";
import {
  chatEnabled,
  plans,
  refundPromise,
  site,
  VAGARO_BOOKING_URL,
  VAGARO_MEMBERSHIPS_URL,
} from "@/lib/site";
import { cn } from "@/lib/cn";

type Option = { value: string; label: string; hint?: string };
type Step = {
  id: string;
  question: string;
  subtitle?: string;
  options: Option[];
  /** answering with this value ends the flow as ineligible */
  disqualifyOn?: string;
};

const steps: Step[] = [
  {
    id: "treatment",
    question: "What would you like help with?",
    subtitle: "Pick one to start. Your provider can adjust your plan later.",
    options: [
      { value: "trt", label: "Testosterone therapy (TRT)", hint: "From $99/month" },
      { value: "weight", label: "Weight loss", hint: "From $299/month" },
      { value: "peptide", label: "Peptide therapy", hint: "From $299/month" },
      { value: "unsure", label: "Not sure yet", hint: "We'll help you choose" },
    ],
  },
  {
    id: "experience",
    question: "Have you tried treatment before?",
    options: [
      { value: "current", label: "Yes — I'm currently on treatment" },
      { value: "past", label: "Yes — in the past" },
      { value: "never", label: "No — this would be my first time" },
    ],
  },
  {
    id: "labs",
    question: "Do you have recent lab work?",
    subtitle:
      "Bloodwork from the last 6 months helps your provider personalize your plan. No labs? We make testing easy.",
    options: [
      { value: "yes", label: "Yes, I have recent labs" },
      { value: "no", label: "No — I'll need testing" },
      { value: "unsure", label: "I'm not sure" },
    ],
  },
  {
    id: "eligibility",
    question: "One last check",
    subtitle:
      "TRT Boost provides care to men 18 and older who reside in the United States.",
    disqualifyOn: "no",
    options: [
      { value: "yes", label: "I'm 18+ and a U.S. resident" },
      { value: "no", label: "Neither of these applies to me" },
    ],
  },
];

export function Quiz() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [ineligible, setIneligible] = useState(false);

  const total = steps.length;
  const step = steps[index];
  const current = answers[step.id];

  function next() {
    if (index + 1 >= total) setDone(true);
    else setIndex((i) => i + 1);
  }
  function back() {
    if (done) {
      setDone(false);
      setIneligible(false);
      return;
    }
    setIndex((i) => Math.max(0, i - 1));
  }

  function choose(value: string) {
    setAnswers((a) => ({ ...a, [step.id]: value }));
    if (step.disqualifyOn && value === step.disqualifyOn) {
      setIneligible(true);
      setDone(true);
      return;
    }
    // small delay for visual feedback, then advance
    window.setTimeout(next, 240);
  }

  const plan = useMemo(
    () => plans.find((p) => p.id === answers.treatment) ?? null,
    [answers.treatment],
  );

  return (
    <div className="mx-auto w-full max-w-2xl">
      {/* progress */}
      <div className="mb-8 flex items-center gap-4">
        <button
          type="button"
          onClick={back}
          disabled={index === 0 && !done}
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-ink-400 disabled:opacity-30"
          aria-label="Back"
        >
          <ArrowLeft className="size-4" />
        </button>
        <div className="flex flex-1 gap-1.5" aria-hidden>
          {steps.map((s, i) => (
            <span
              key={s.id}
              className={cn(
                "h-1.5 flex-1 rounded-full transition-colors duration-500",
                done || i <= index ? "bg-brand-500" : "bg-ink-100",
              )}
            />
          ))}
        </div>
        <span className="w-20 shrink-0 text-right text-xs font-semibold text-ink-400">
          {done ? "Done" : `Step ${index + 1} of ${total}`}
        </span>
      </div>

      {done ? (
        ineligible ? (
          <Result
            eyebrow="Thanks for your honesty"
            title="We're not able to help just yet"
            body="TRT Boost currently provides care to men 18 and older who reside in the United States. If that changes, we'd love to welcome you."
          >
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-full border border-ink-200 px-6 font-semibold text-ink-800 hover:border-ink-400"
            >
              Back to home
            </Link>
          </Result>
        ) : (
          <Result
            eyebrow="You're a great fit"
            title={plan ? `Your ${plan.name} plan` : "Your plan is ready"}
            body={
              plan
                ? "Here's what's next. Book your free consultation first — you only subscribe once your provider approves treatment."
                : "A licensed provider will help you choose the right treatment on your free consultation, then you pick a plan."
            }
          >
            {plan && (
              <div className="mb-8 w-full max-w-md rounded-2xl border border-ink-100 bg-white p-6 text-left shadow-[var(--shadow-card)]">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-lg font-bold text-ink-900">{plan.title}</p>
                  <p className="font-display text-2xl font-extrabold text-ink-900">
                    ${plan.price}
                    <span className="text-sm font-semibold text-ink-400">/month</span>
                  </p>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-ink-600">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <ol className="w-full max-w-md space-y-4 text-left">
              <StepItem n={1} title="Book your free consultation">
                <a
                  href={VAGARO_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-3 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-500 px-7 font-semibold text-ink-950 shadow-[0_8px_24px_-10px_rgba(18,221,150,0.7)] transition-all hover:bg-brand-400"
                >
                  Book Your Free Consultation
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <p className="mt-2 text-xs text-ink-400">
                  A short video visit. Opens your provider&apos;s live calendar.
                </p>
              </StepItem>
              <StepItem n={2} title="Your provider reviews and approves">
                <p className="mt-1 text-sm text-ink-600">
                  A licensed provider reviews your goals and labs and confirms
                  treatment is right for you.
                </p>
              </StepItem>
              <StepItem n={3} title="Subscribe to your plan">
                <a
                  href={plan ? plan.membershipUrl : VAGARO_MEMBERSHIPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-ink-200 px-6 font-semibold text-ink-800 transition-colors hover:border-ink-400"
                >
                  {plan ? `Subscribe — $${plan.price}/month` : "See plans"}
                  <ArrowRight className="size-4" />
                </a>
                <p className="mt-2 text-xs text-ink-400">{refundPromise}</p>
              </StepItem>
            </ol>

            {answers.labs === "yes" && (
              <div className="mt-8 w-full max-w-md rounded-2xl border border-brand-200 bg-brand-50/60 p-5 text-left">
                <p className="flex items-center gap-2 font-semibold text-ink-900">
                  <FileText className="size-4 text-brand-700" />
                  Have your recent labs handy
                </p>
                <p className="mt-1.5 text-sm text-ink-600">
                  You mentioned you have recent lab work. Bring it to your
                  consultation, or send it to your provider ahead of time.
                </p>
                {chatEnabled ? (
                  <button
                    type="button"
                    data-open-chat
                    className="mt-3 inline-flex h-10 items-center gap-2 rounded-full border border-ink-200 bg-white px-4 text-sm font-semibold text-ink-800 transition-colors hover:border-ink-400"
                  >
                    <MessageCircle className="size-4" />
                    Upload your labs via chat
                  </button>
                ) : (
                  <Link
                    href="/contact"
                    className="mt-3 inline-flex h-10 items-center gap-2 rounded-full border border-ink-200 bg-white px-4 text-sm font-semibold text-ink-800 transition-colors hover:border-ink-400"
                  >
                    <FileText className="size-4" />
                    Send us your labs
                  </Link>
                )}
              </div>
            )}

            <p className="mt-6 max-w-md text-sm text-ink-600">
              Questions first? You can chat with a provider directly{" "}
              {site.contact.hours}.
            </p>
            {chatEnabled && (
              <button
                type="button"
                data-open-chat
                className="mt-3 inline-flex h-10 items-center gap-2 rounded-full border border-ink-200 px-4 text-sm font-semibold text-ink-800 transition-colors hover:border-ink-400"
              >
                <MessageCircle className="size-4" />
                Chat with a provider
              </button>
            )}

            <p className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-ink-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-brand-600" /> Reviewed by a licensed provider
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="size-3.5 text-brand-600" /> Private & secure
              </span>
            </p>
          </Result>
        )
      ) : (
        <div key={step.id} className="animate-rise">
          <h1 className="font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
            {step.question}
          </h1>
          {step.subtitle && (
            <p className="mt-3 text-ink-500">{step.subtitle}</p>
          )}

          <div className="mt-8 space-y-3">
            {step.options.map((opt) => {
              const selected = current === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => choose(opt.value)}
                  className={cn(
                    "flex w-full items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition-all",
                    selected
                      ? "border-brand-500 bg-brand-50 ring-1 ring-brand-500"
                      : "border-ink-200 bg-white hover:border-brand-300 hover:bg-brand-50/40",
                  )}
                >
                  <span>
                    <span className="block font-semibold text-ink-900">
                      {opt.label}
                    </span>
                    {opt.hint && (
                      <span className="block text-sm text-ink-400">{opt.hint}</span>
                    )}
                  </span>
                  <span
                    className={cn(
                      "inline-flex size-6 shrink-0 items-center justify-center rounded-full border transition-colors",
                      selected
                        ? "border-brand-500 bg-brand-500 text-ink-950"
                        : "border-ink-300 text-transparent",
                    )}
                  >
                    <Check className="size-4" />
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-8 flex items-center gap-2 text-xs text-ink-400">
            <Sparkles className="size-3.5 text-brand-500" />
            This quick quiz isn&apos;t a medical assessment — a licensed provider
            makes all treatment decisions.
          </p>
        </div>
      )}
    </div>
  );
}

function StepItem({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-[var(--shadow-card)]">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ink-900 text-sm font-bold text-brand-400">
        {n}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-ink-900">{title}</p>
        {children}
      </div>
    </li>
  );
}

function Result({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string;
  title: string;
  body: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="animate-rise text-center">
      <span className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-brand-500 text-ink-950">
        <Check className="size-7" />
      </span>
      <Wordmark href={null} size="sm" className="mb-4 block" />
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
        {eyebrow}
      </p>
      <h1 className="mt-2 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-lg leading-relaxed text-ink-500">{body}</p>
      <div className="mt-8 flex flex-col items-center">{children}</div>
    </div>
  );
}
