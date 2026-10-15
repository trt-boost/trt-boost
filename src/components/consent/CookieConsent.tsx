"use client";

import Link from "next/link";
import { Cookie } from "lucide-react";
import { useConsent, writeConsent } from "@/lib/consent";

/**
 * Cookie-consent banner. Shown until the visitor makes a choice; the choice
 * is remembered in localStorage and gates non-essential scripts (see
 * useAnalyticsAllowed in src/lib/consent.ts).
 */
export function CookieConsent() {
  const consent = useConsent();
  if (consent !== null) return null; // undefined = not hydrated yet, value = chosen

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed inset-x-4 bottom-20 z-50 mx-auto max-w-3xl rounded-2xl border border-ink-200 bg-white p-5 shadow-[0_16px_48px_-12px_rgba(10,20,30,0.35)] lg:bottom-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-start gap-3">
          <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
            <Cookie className="size-5" />
          </span>
          <p className="text-sm leading-relaxed text-ink-700">
            We use cookies to make the site work and, with your permission, to
            understand how it is used so we can improve it. See our{" "}
            <Link
              href="/legal/cookie-policy"
              className="font-semibold text-brand-700 hover:underline"
            >
              Cookie Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-2 sm:flex-col md:flex-row">
          <button
            type="button"
            onClick={() => writeConsent("essential")}
            className="inline-flex h-10 flex-1 items-center justify-center rounded-full border border-ink-200 px-4 text-sm font-semibold text-ink-800 transition-colors hover:border-ink-400"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => writeConsent("all")}
            className="inline-flex h-10 flex-1 items-center justify-center rounded-full bg-brand-500 px-5 text-sm font-semibold text-ink-950 transition-colors hover:bg-brand-400"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
