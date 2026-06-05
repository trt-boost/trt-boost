import { Star, Quote } from "lucide-react";

/**
 * NOTE: These are ILLUSTRATIVE placeholder reviews about the experience (not
 * health-outcome claims). Replace with real, consented customer reviews before
 * launch — fabricated testimonials are an FTC/compliance risk for a medical brand.
 */
const reviews = [
  {
    quote:
      "The whole visit took ten minutes from my couch. No waiting room, no awkward conversations — and my treatment showed up in discreet packaging a few days later.",
    name: "Marcus T.",
    meta: "Member since 2025",
  },
  {
    quote:
      "Pricing was clear up front and my provider actually answered my questions. It finally feels like care built for how I live.",
    name: "Devon R.",
    meta: "TRT member",
  },
  {
    quote:
      "Refills are automatic and I can message the care team whenever. Easily the most convenient health experience I've had.",
    name: "James P.",
    meta: "Member since 2025",
  },
];

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {reviews.map((r) => (
        <figure
          key={r.name}
          className="relative flex flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-[var(--shadow-card)]"
        >
          <Quote className="absolute right-6 top-6 size-8 text-brand-100" />
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-brand-500 text-brand-500" />
            ))}
          </div>
          <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">
            “{r.quote}”
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-ink-900 font-display text-sm font-bold text-brand-400">
              {r.name.charAt(0)}
            </span>
            <span>
              <span className="block text-sm font-bold text-ink-900">{r.name}</span>
              <span className="block text-xs text-ink-400">{r.meta}</span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
