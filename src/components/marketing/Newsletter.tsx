"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { site } from "@/lib/site";

export function Newsletter() {
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector<HTMLInputElement>("input[type=email]");
    const email = input?.value?.trim() || "";
    if (email) {
      window.location.href = `mailto:${site.contact.supportEmail}?subject=${encodeURIComponent(
        "Newsletter Subscription",
      )}&body=${encodeURIComponent(`Please subscribe ${email} to TRT Boost updates.`)}`;
    }
    setDone(true);
  }

  return (
    <div>
      <h3 className="text-sm font-semibold text-white">
        Men&apos;s health, in your inbox
      </h3>
      <p className="mt-2 text-sm text-ink-300">
        Evidence-based tips and updates. No spam, unsubscribe anytime.
      </p>
      {done ? (
        <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-400">
          <Check className="size-4" /> You&apos;re subscribed — welcome.
        </p>
      ) : (
        <form onSubmit={submit} className="mt-4 flex gap-2">
          <div className="relative flex-1">
            <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-400" />
            <input
              type="email"
              required
              placeholder="you@email.com"
              aria-label="Email address"
              className="h-11 w-full rounded-full border border-white/15 bg-white/5 pl-9 pr-4 text-sm text-white outline-none placeholder:text-ink-400 focus:border-brand-400"
            />
          </div>
          <button
            type="submit"
            className="h-11 shrink-0 rounded-full bg-brand-500 px-5 text-sm font-semibold text-ink-950 transition-colors hover:bg-brand-400"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
