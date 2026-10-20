import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArticleCard } from "@/components/marketing/ArticleCard";
import { FaqList } from "@/components/marketing/Faq";
import { CtaBand } from "@/components/marketing/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { GetStarted } from "@/components/GetStarted";
import {
  articles,
  getArticle,
  relatedArticles,
  type ArticleBlock,
} from "@/lib/articles";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return { title: "Article" };
  return {
    title: a.title,
    description: a.excerpt,
    keywords: a.keywords,
    alternates: { canonical: `${site.url}/learn/${a.slug}` },
    openGraph: {
      title: a.title,
      description: a.excerpt,
      type: "article",
      url: `${site.url}/learn/${a.slug}`,
      ...(a.image ? { images: [{ url: a.image }] } : {}),
    },
  };
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const headings = article.blocks
    .filter((b): b is Extract<ArticleBlock, { type: "h2" }> => b.type === "h2")
    .map((b) => ({ text: b.text, id: slugify(b.text) }));

  const related = relatedArticles(slug, 3);

  return (
    <>
      <JsonLd
        data={[
          articleSchema(article),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Learn", href: "/learn" },
            { name: article.title, href: `/learn/${article.slug}` },
          ]),
          ...(article.faqs ? [faqSchema(article.faqs)] : []),
        ]}
      />

      {/* Hero */}
      <section className="hero-mesh grain relative overflow-hidden">
        <div className="absolute -right-24 -top-24 size-80 rounded-full bg-brand-500/20 blur-[100px]" />
        <Container className="relative">
          <div className="max-w-3xl py-12 sm:py-16">
            <Breadcrumbs
              tone="light"
              items={[
                { name: "Home", href: "/" },
                { name: "Learn", href: "/learn" },
                { name: article.category, href: "/learn" },
              ]}
            />
            <span className="mt-6 inline-flex rounded-full bg-brand-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-300">
              {article.category}
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-300">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-brand-400" />
                {article.author.role}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4 text-brand-400" />
                {formatDate(article.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4 text-brand-400" />
                {article.readMins} min read
              </span>
            </div>
          </div>
          {article.image && (
            <div className="relative mx-auto -mb-px aspect-[21/9] w-full max-w-4xl overflow-hidden rounded-t-3xl border border-white/10 bg-ink-900">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          )}
        </Container>
      </section>

      {/* Body */}
      <section className="bg-white">
        <Container className="py-12 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
            {/* TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                  On this page
                </p>
                <nav className="mt-3 space-y-1.5 border-l border-ink-100">
                  {headings.map((h) => (
                    <a
                      key={h.id}
                      href={`#${h.id}`}
                      className="-ml-px block border-l-2 border-transparent py-1 pl-4 text-sm text-ink-500 transition-colors hover:border-brand-500 hover:text-ink-900"
                    >
                      {h.text}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 rounded-2xl border border-ink-100 bg-ink-50/50 p-5">
                  <p className="text-sm font-semibold text-ink-900">
                    Talk to a provider
                  </p>
                  <p className="mt-1 text-sm text-ink-500">
                    Get a personalized plan in minutes.
                  </p>
                  <div className="mt-4">
                    <GetStarted size="sm" label="Start your visit" className="w-full" />
                  </div>
                </div>
              </div>
            </aside>

            {/* Article + extras (extras live OUTSIDE .legal to avoid prose styles) */}
            <div className="min-w-0">
              <article className="legal max-w-none">
                {article.blocks.map((b, i) => {
                  if (b.type === "h2") {
                    return (
                      <h2 key={i} id={slugify(b.text)}>
                        {b.text}
                      </h2>
                    );
                  }
                  if (b.type === "p") return <p key={i}>{b.text}</p>;
                  if (b.type === "ul") {
                    return (
                      <ul key={i}>
                        {b.items.map((it, j) => (
                          <li key={j}>{it}</li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <div key={i} className="callout">
                      <strong>{b.title}</strong>
                      {b.text}
                    </div>
                  );
                })}
              </article>

              {/* FAQ */}
              {article.faqs && article.faqs.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-ink-900">
                    Frequently asked questions
                  </h2>
                  <div className="mt-5">
                    <FaqList items={article.faqs} />
                  </div>
                </div>
              )}

              {/* inline CTA */}
              <div className="mt-12 overflow-hidden rounded-3xl bg-ink-950 p-8 text-center sm:p-10">
                <p className="font-display text-2xl font-bold text-white">
                  Ready to feel like yourself again?
                </p>
                <p className="mx-auto mt-3 max-w-lg text-ink-300">
                  Start an online visit and get a doctor-trusted plan built
                  around you.
                </p>
                <div className="mt-6 flex justify-center">
                  <GetStarted size="lg" label="Start your visit" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-ink-50/60">
          <Container className="py-14 sm:py-16">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-bold text-ink-900">Keep reading</h2>
              <Link
                href="/learn"
                className="text-sm font-semibold text-brand-700 hover:underline"
              >
                All articles →
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand />
    </>
  );
}
