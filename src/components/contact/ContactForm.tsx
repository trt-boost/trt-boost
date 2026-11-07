"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const topics = [
  "General question",
  "Treatments & eligibility",
  "Billing & subscriptions",
  "Shipping & delivery",
  "Existing order",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const topic = String(formData.get("topic") || "General question");
    const message = String(formData.get("message") || "").trim();

    const subject = `[TRT Boost Inquiry] ${topic} - ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nTopic: ${topic}\n\nMessage:\n${message}`;

    window.location.href = `mailto:${site.contact.supportEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50/60 p-8 text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-500 text-ink-950">
          <Check className="size-6" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-ink-900">Message ready to send</h3>
        <p className="mt-2 text-ink-600">
          Your email app was opened to send your message to{" "}
          <a
            href={`mailto:${site.contact.supportEmail}`}
            className="font-semibold text-brand-700 underline"
          >
            {site.contact.supportEmail}
          </a>
          . If your email app did not open, you can send your message directly to that address.
        </p>
        <p className="mt-4 text-sm text-ink-500">
          Our team replies within 2 business days. For urgent matters, call{" "}
          <a href={site.contact.phoneHref} className="font-semibold text-brand-700">
            {site.contact.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink-100 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input id="name" name="name" required className={inputClass} placeholder="John Smith" />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="you@email.com"
          />
        </Field>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field label="Phone (optional)" htmlFor="phone">
          <input id="phone" name="phone" className={inputClass} placeholder="(555) 555-5555" />
        </Field>
        <Field label="Topic" htmlFor="topic">
          <select id="topic" name="topic" className={inputClass} defaultValue={topics[0]}>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="mt-4">
        <Field label="How can we help?" htmlFor="message">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={inputClass}
            placeholder="Tell us a bit about your question…"
          />
        </Field>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-ink-400">
        Please don&apos;t share sensitive medical details here. For clinical
        questions about an active treatment, message your care team in your
        patient portal.
      </p>
      <Button
        type="submit"
        size="lg"
        className="mt-5 w-full sm:w-auto"
      >
        Send message
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink-800">{label}</span>
      {children}
    </label>
  );
}
