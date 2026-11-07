"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { GetStarted } from "@/components/GetStarted";
import { states } from "@/lib/states";

export function StateChecker() {
  const [slug, setSlug] = useState("");
  const selected = states.find((s) => s.slug === slug);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-ink-950 p-8 text-white sm:p-12">
      <div className="bg-grid-brand absolute inset-0 opacity-40" />
      <div className="absolute -right-16 -top-16 size-56 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-300">
          <MapPin className="size-3.5" /> Availability
        </span>
        <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
          Is TRT Boost available where you live?
        </h2>
        <p className="mt-3 text-ink-300">
          We currently serve patients in VA, MD, CT, CO, and MO. Select your state to check availability.
        </p>

        <div className="mx-auto mt-8 max-w-md">
          <label htmlFor="state" className="sr-only">
            Select your state
          </label>
          <select
            id="state"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="h-13 w-full rounded-full border border-white/15 bg-white/10 px-5 py-3.5 text-[15px] text-white outline-none backdrop-blur focus:border-brand-400 [&>option]:text-ink-900"
          >
            <option value="">Select your state…</option>
            {states.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>

          {selected && (
            <div className="animate-rise mt-6 rounded-2xl border border-brand-500/30 bg-brand-500/10 p-6">
              <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-500 text-ink-950">
                <Check className="size-6" />
              </span>
              <p className="mt-4 font-semibold text-white">
                Good news — care is available in {selected.name}.
              </p>
              <p className="mt-1 text-sm text-ink-300">
                A provider licensed in your state will review your visit. Final
                eligibility is confirmed during your intake.
              </p>
              <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <GetStarted label="Start your visit" />
                <Link
                  href={`/treatment-areas/${selected.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-brand-200"
                >
                  {selected.name} details
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
