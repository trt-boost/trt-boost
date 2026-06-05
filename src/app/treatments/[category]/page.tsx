import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { ProductCard } from "@/components/marketing/ProductCard";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/marketing/CtaBand";
import { CategoryIcon } from "@/components/ui/Icon";
import { GetStarted } from "@/components/GetStarted";
import { categories, getCategory, categoryStartingPrice } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) return { title: "Treatment" };
  return {
    title: `${c.name} Treatment`,
    description: c.blurb,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) notFound();

  return (
    <>
      <PageHero
        eyebrow={c.tagline}
        title={`${c.name}, prescribed online`}
        subtitle={c.longDescription}
        image={c.image}
        imageAlt={`${c.name} — TRT Boost`}
        imageFit={c.imageFit}
      >
        <div className="flex flex-wrap items-center gap-4">
          <GetStarted size="lg" label="Start your visit" />
          <span className="text-sm text-ink-400">
            From{" "}
            <span className="font-bold text-white">
              {formatPrice(categoryStartingPrice(c))}
            </span>
            /mo
          </span>
        </div>
      </PageHero>

      {/* Who it's for */}
      <section className="bg-white">
        <Container className="py-14">
          <div className="grid items-center gap-8 rounded-3xl border border-ink-100 bg-ink-50/50 p-8 sm:grid-cols-[auto_1fr]">
            <span className="inline-flex size-16 items-center justify-center rounded-2xl bg-ink-900 text-brand-400">
              <CategoryIcon name={c.icon} className="size-8" />
            </span>
            <div>
              <h2 className="text-xl font-bold text-ink-900">
                Is {c.name} right for you?
              </h2>
              <p className="mt-1 text-sm text-ink-500">
                Common reasons men start {c.shortName} care:
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {c.audience.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-[15px] text-ink-700">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-600" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="bg-white">
        <Container className="pb-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <SectionHeading
              align="left"
              eyebrow="Treatment options"
              title={`${c.name} treatments`}
              subtitle={`All options are prescription-only and dispensed after a provider review. Prices are per fill and exclude consultation and any required lab work.`}
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-500">
            <ShieldCheck className="size-4 text-brand-600" />
            Prescribed only when clinically appropriate, at a provider&apos;s discretion.
          </p>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-ink-50/60">
        <Container className="py-16">
          <SectionHeading
            eyebrow="How it works"
            title="Getting started takes minutes"
          />
          <div className="mt-12">
            <HowItWorks />
          </div>
        </Container>
      </section>

      {/* Other treatments */}
      <section className="bg-white">
        <Container className="py-14">
          <h2 className="text-lg font-bold text-ink-900">Explore other treatments</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {categories
              .filter((other) => other.slug !== c.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/treatments/${other.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-400 hover:text-brand-700"
                >
                  <CategoryIcon name={other.icon} className="size-4" />
                  {other.name}
                </Link>
              ))}
          </div>
          <div className="mt-8">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-500 hover:text-ink-900"
            >
              <ArrowLeft className="size-4" />
              All treatments
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
