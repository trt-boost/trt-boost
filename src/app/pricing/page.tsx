import type { Metadata } from "next";
import Link from "next/link";
import { Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { CategoryIcon } from "@/components/ui/Icon";
import { CardBrands } from "@/components/marketing/CardBrands";
import { CtaBand } from "@/components/marketing/CtaBand";
import { GetStarted } from "@/components/GetStarted";
import { categories } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent TRT Boost pricing for testosterone therapy, ED, hair loss, weight loss, and peptide treatments. TRT plans from $99/month.",
};

const shipping = [
  { method: "Standard Shipping", time: "5–7 business days", cost: "Free" },
  { method: "Expedited Shipping", time: "3–4 business days", cost: "$9.95" },
  { method: "Priority Overnight", time: "1–2 business days", cost: "$19.95" },
  { method: "Cold Chain (Temp-Controlled)", time: "2–3 business days", cost: "$14.95" },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Transparent pricing, no surprises"
        subtitle="Cash prices per fill — what you see is what you pay for medication. TRT plans start at $99/month."
      >
        <GetStarted size="lg" label="Get Started" />
      </PageHero>

      {/* Pricing note */}
      <section className="bg-white">
        <Container className="pt-12">
          <div className="flex items-start gap-3 rounded-2xl border border-brand-200 bg-brand-50/60 p-5 text-sm leading-relaxed text-ink-700">
            <Info className="mt-0.5 size-5 shrink-0 text-brand-700" />
            <p>
              Prices below are the <strong>cash price per fill/cycle</strong> for
              medication and are shown before any provider consultation fee or
              required lab work. Final pricing, dose, and eligibility are
              determined by your licensed provider. All treatments are
              prescription-only.
            </p>
          </div>
        </Container>
      </section>

      {/* Catalog */}
      <section className="bg-white">
        <Container className="space-y-14 py-12 sm:py-16">
          {categories.map((c) => (
            <div key={c.slug} id={c.slug} className="scroll-mt-24">
              <div className="flex items-center justify-between gap-4 border-b border-ink-100 pb-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <CategoryIcon name={c.icon} className="size-5" />
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-ink-900">{c.name}</h2>
                    <p className="text-sm text-ink-500">{c.tagline}</p>
                  </div>
                </div>
                <Link
                  href={`/treatments/${c.slug}`}
                  className="hidden text-sm font-semibold text-brand-700 hover:underline sm:block"
                >
                  Learn more →
                </Link>
              </div>

              <div className="mt-2 overflow-hidden">
                {/* header row (desktop) */}
                <div className="hidden grid-cols-[2fr_1fr_1fr_0.8fr_auto] gap-4 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-ink-400 md:grid">
                  <span>Treatment</span>
                  <span>Dosage</span>
                  <span>Supply</span>
                  <span className="text-right">Price</span>
                  <span className="sr-only">Action</span>
                </div>

                <div className="divide-y divide-ink-100">
                  {c.products.flatMap((p) =>
                    p.variants.map((v, vi) => (
                      <div
                        key={`${p.slug}-${v.dosage}`}
                        className="grid grid-cols-1 gap-2 px-4 py-4 md:grid-cols-[2fr_1fr_1fr_0.8fr_auto] md:items-center md:gap-4"
                      >
                        <div>
                          <p className="font-semibold text-ink-900">
                            {p.name}
                            {p.popular && vi === 0 && (
                              <span className="ml-2 rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-700">
                                Popular
                              </span>
                            )}
                          </p>
                          <p className="text-xs text-ink-400">
                            {p.route} · Min. order: {p.minPurchase}
                          </p>
                        </div>
                        <span className="text-sm text-ink-700">
                          <span className="md:hidden text-ink-400">Dosage: </span>
                          {v.dosage}
                        </span>
                        <span className="text-sm text-ink-700">
                          {v.quantity && (
                            <>
                              <span className="md:hidden text-ink-400">Supply: </span>
                              {v.quantity}
                            </>
                          )}
                        </span>
                        <span className="text-base font-bold text-ink-900 md:text-right">
                          {formatPrice(v.price)}
                        </span>
                        <div className="md:text-right">
                          <GetStarted
                            label="Start"
                            size="sm"
                            withArrow={false}
                            variant="outline"
                          />
                        </div>
                      </div>
                    )),
                  )}
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Shipping */}
      <section className="bg-ink-50/60">
        <Container className="py-14">
          <h2 className="text-2xl font-bold text-ink-900">Shipping options</h2>
          <p className="mt-2 text-ink-500">
            Standard shipping is always free. Faster and temperature-controlled
            options are available at checkout.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-ink-100 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-ink-900 text-white">
                <tr>
                  <th className="px-5 py-3 font-semibold">Method</th>
                  <th className="px-5 py-3 font-semibold">Estimated delivery</th>
                  <th className="px-5 py-3 text-right font-semibold">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {shipping.map((s) => (
                  <tr key={s.method}>
                    <td className="px-5 py-3 font-medium text-ink-900">{s.method}</td>
                    <td className="px-5 py-3 text-ink-600">{s.time}</td>
                    <td className="px-5 py-3 text-right font-semibold text-ink-900">
                      {s.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-ink-500">
            See our{" "}
            <Link href="/legal/shipping" className="font-semibold text-brand-700 hover:underline">
              Shipping &amp; Delivery Policy
            </Link>{" "}
            for full details.
          </p>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
              Accepted payment methods
            </p>
            <CardBrands className="mt-3" />
          </div>
        </Container>
      </section>

      <CtaBand title="Find your treatment and price" subtitle="Start your online visit — it only takes a few minutes to see what you qualify for." />
    </>
  );
}
