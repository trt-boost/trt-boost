import type { Metadata } from "next";
import { Star, Quote, BadgeCheck, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { CtaBand } from "@/components/marketing/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { GetStarted } from "@/components/GetStarted";
import { reviews } from "@/lib/reviews";
import { aggregateRating, aggregateRatingSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews — What Men Say About TRT Boost",
  description:
    "Real talk about the TRT Boost experience — fast online visits, transparent pricing, discreet delivery, and ongoing care.",
  alternates: { canonical: `${site.url}/reviews` },
};

function Stars({ n, className = "size-4" }: { n: number; className?: string }) {
  return (
    <span className="inline-flex" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${className} ${i < n ? "fill-brand-500 text-brand-500" : "fill-ink-200 text-ink-200"}`}
        />
      ))}
    </span>
  );
}

export default function ReviewsPage() {
  // rating distribution
  const dist = [5, 4, 3, 2, 1].map((star) => ({
    star,
    pct:
      star === 5 ? 86 : star === 4 ? 11 : star === 3 ? 2 : star === 2 ? 1 : 0,
  }));

  return (
    <>
      <JsonLd data={aggregateRatingSchema()} />
      <PageHero
        eyebrow="Reviews"
        title={
          <>
            Loved by men who were{" "}
            <span className="text-gradient-glow">done waiting</span>
          </>
        }
        subtitle="Fast, private, doctor-trusted care — here's what membership feels like."
      >
        <div className="flex items-center gap-4">
          <Stars n={5} className="size-6" />
          <span className="text-white">
            <span className="text-2xl font-bold">{aggregateRating.ratingValue}</span>
            <span className="text-ink-400"> / 5 · {aggregateRating.reviewCount.toLocaleString()}+ reviews</span>
          </span>
        </div>
      </PageHero>

      {/* Summary + distribution */}
      <section className="bg-white">
        <Container className="py-14">
          <div className="grid items-center gap-10 rounded-3xl border border-ink-100 bg-ink-50/40 p-8 sm:p-10 lg:grid-cols-[auto_1fr]">
            <div className="text-center lg:border-r lg:border-ink-200 lg:pr-10">
              <div className="font-display text-6xl font-extrabold text-ink-900">
                {aggregateRating.ratingValue}
              </div>
              <div className="mt-2 flex justify-center">
                <Stars n={5} className="size-5" />
              </div>
              <p className="mt-2 text-sm text-ink-500">
                {aggregateRating.reviewCount.toLocaleString()}+ verified members
              </p>
            </div>
            <div className="space-y-2">
              {dist.map((d) => (
                <div key={d.star} className="flex items-center gap-3">
                  <span className="w-12 shrink-0 text-sm text-ink-500">
                    {d.star} star
                  </span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-ink-100">
                    <div
                      className="h-full rounded-full bg-brand-500"
                      style={{ width: `${d.pct}%` }}
                    />
                  </div>
                  <span className="w-10 shrink-0 text-right text-sm text-ink-400">
                    {d.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Reviews grid */}
      <section className="bg-ink-50/60">
        <Container className="py-14 sm:py-16">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
            {reviews.map((r) => (
              <figure
                key={r.name + r.date}
                className="break-inside-avoid rounded-2xl border border-ink-100 bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <div className="flex items-center justify-between">
                  <Stars n={r.rating} />
                  <Quote className="size-6 text-brand-100" />
                </div>
                <figcaption className="mt-4 font-bold text-ink-900">
                  {r.title}
                </figcaption>
                <blockquote className="mt-2 text-[15px] leading-relaxed text-ink-600">
                  {r.body}
                </blockquote>
                <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4 text-sm">
                  <span className="flex items-center gap-2 font-semibold text-ink-900">
                    <span className="inline-flex size-8 items-center justify-center rounded-full bg-ink-900 font-display text-xs font-bold text-brand-400">
                      {r.name.charAt(0)}
                    </span>
                    {r.name}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-ink-400">
                    <MapPin className="size-3.5" />
                    {r.location}
                  </span>
                </div>
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
                  <BadgeCheck className="size-3.5" />
                  Verified · {r.category}
                </span>
              </figure>
            ))}
          </div>

          <div className="mt-12 text-center">
            <GetStarted size="lg" label="Join them — start your visit" />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
