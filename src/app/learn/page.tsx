import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { SectionHeading } from "@/components/ui/Section";
import { ArticleCard } from "@/components/marketing/ArticleCard";
import { CtaBand } from "@/components/marketing/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { GetStarted } from "@/components/GetStarted";
import { articlesByDate, articleCategories } from "@/lib/articles";
import { breadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Learn — Men's Health Guides & Resources",
  description:
    "Evidence-based guides on testosterone, weight loss, sexual health, hair loss, and more — written and reviewed by the TRT Boost clinical team.",
  alternates: { canonical: `${site.url}/learn` },
};

export default function LearnPage() {
  const [featured, ...rest] = articlesByDate;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Learn", href: "/learn" },
        ])}
      />
      <PageHero
        eyebrow="Learn"
        title={
          <>
            Men&apos;s health, <span className="text-gradient-glow">decoded</span>
          </>
        }
        subtitle="Clear, evidence-based guides on testosterone, weight, sexual health, hair, and more — reviewed by our clinical team."
      />

      {/* Featured */}
      <section className="bg-white">
        <Container className="py-14 sm:py-16">
          <Link
            href={`/learn/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-ink-100 shadow-[var(--shadow-card)] transition-colors hover:border-brand-300 lg:grid-cols-2"
          >
            <div className="bg-grid-brand relative flex min-h-56 items-end overflow-hidden bg-gradient-to-br from-brand-500/25 to-ink-950 p-8">
              {featured.image && (
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
              )}
              <span className="relative rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink-800">
                Featured · {featured.category}
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-ink-900 group-hover:text-brand-700 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-ink-500">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-sm text-ink-400">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-4" />
                  {featured.readMins} min read
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-brand-700">
                  Read article <ArrowRight className="size-4" />
                </span>
              </div>
            </div>
          </Link>

          {/* category chips */}
          <div className="mt-10 flex flex-wrap gap-2">
            {articleCategories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-sm font-medium text-ink-600"
              >
                {c}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* All articles */}
      <section className="bg-ink-50/60">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            align="left"
            eyebrow="All articles"
            title="Guides & resources"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-12 text-center">
          <p className="text-ink-500">
            Ready to take the next step? It only takes a few minutes.
          </p>
          <div className="mt-5">
            <GetStarted size="lg" label="Start your free visit" />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
