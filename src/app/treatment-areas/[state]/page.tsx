import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ShieldCheck, Truck, MonitorSmartphone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CategoryCard } from "@/components/marketing/CategoryCard";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { FaqList } from "@/components/marketing/Faq";
import { SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/marketing/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { GetStarted } from "@/components/GetStarted";
import { categories, categoryStartingPrice } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { states, getState } from "@/lib/states";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const s = getState(state);
  if (!s) return { title: "Treatment Area" };
  return {
    title: `Online TRT & Men's Health in ${s.name}`,
    description: `Get doctor-trusted testosterone therapy, ED, weight loss, hair, and peptide treatments online in ${s.name}. Prescribed by licensed ${s.name} providers and delivered to your door.`,
    alternates: { canonical: `${site.url}/treatment-areas/${s.slug}` },
  };
}

function stateFaqs(name: string) {
  return [
    {
      q: `Is online TRT available in ${name}?`,
      a: `Yes. TRT Boost connects men in ${name} with providers licensed in the state. After a secure online intake and any needed lab work, a provider determines whether testosterone therapy or another treatment is appropriate for you.`,
    },
    {
      q: `Do I need to visit a clinic in person in ${name}?`,
      a: `No in-person visit is required. Your evaluation, treatment plan, and ongoing follow-ups happen online, and approved medications are shipped discreetly to your address in ${name}.`,
    },
    {
      q: `How much does treatment cost in ${name}?`,
      a: `Pricing is the same nationwide — TRT plans start at $99/month, shown transparently before any consultation or lab fees. See our pricing page for the full list.`,
    },
    {
      q: `How fast can I get started in ${name}?`,
      a: `Most men complete the online visit in minutes. Once a provider approves treatment, orders are typically processed within 1–2 business days and shipped to ${name} with free standard delivery.`,
    },
  ];
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const s = getState(state);
  if (!s) notFound();

  const faqs = stateFaqs(s.name);
  const nearby = states.filter((x) => x.slug !== s.slug).slice(0, 12);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Treatment Areas", href: "/treatment-areas" },
            { name: s.name, href: `/treatment-areas/${s.slug}` },
          ]),
          faqSchema(faqs),
          {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: `${site.name} — ${s.name}`,
            url: `${site.url}/treatment-areas/${s.slug}`,
            areaServed: { "@type": "State", name: s.name },
            parentOrganization: { "@type": "Organization", name: site.name },
          },
        ]}
      />

      <PageHero
        eyebrow={`Now serving ${s.name}`}
        title={
          <>
            Men&apos;s health in {s.name},{" "}
            <span className="text-gradient-glow">done online</span>
          </>
        }
        subtitle={`Doctor-trusted testosterone therapy and men's health treatments for men in ${s.name} — prescribed online by licensed providers and delivered discreetly to your door.`}
      >
        <div className="flex flex-wrap items-center gap-4">
          <GetStarted size="lg" label="Start your free visit" />
          <span className="text-sm text-ink-400">
            From {formatPrice(20)}/mo · free shipping to {s.name}
          </span>
        </div>
      </PageHero>

      {/* Intro + trust */}
      <section className="bg-white">
        <Container className="py-14">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Treatment Areas", href: "/treatment-areas" },
              { name: s.name, href: `/treatment-areas/${s.slug}` },
            ]}
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {[
              { icon: ShieldCheck, title: `Licensed in ${s.name}`, body: `You're matched with a provider authorized to deliver telehealth in ${s.name}.` },
              { icon: MonitorSmartphone, title: "100% online", body: "Complete your visit, get treatment, and follow up — all from home." },
              { icon: Truck, title: "Free, discreet delivery", body: `Medications ship free to addresses across ${s.name}.` },
            ].map((c) => (
              <div key={c.title} className="flex gap-4 rounded-2xl border border-ink-100 bg-ink-50/40 p-6">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <c.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-bold text-ink-900">{c.title}</h3>
                  <p className="mt-1 text-sm text-ink-500">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Treatments */}
      <section className="bg-ink-50/60">
        <Container className="py-14 sm:py-20">
          <SectionHeading
            eyebrow="Treatments"
            title={`What men in ${s.name} can treat online`}
            subtitle="Evidence-based care across hormones, sexual health, hair, weight, and recovery."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink-500">
            Treatments in {s.name} start at{" "}
            <span className="font-bold text-ink-900">
              {formatPrice(Math.min(...categories.map(categoryStartingPrice)))}
            </span>
            /month.
          </p>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-white">
        <Container className="py-14 sm:py-20">
          <SectionHeading eyebrow="How it works" title={`Getting started in ${s.name}`} />
          <div className="mt-12">
            <HowItWorks />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-ink-50/60">
        <Container className="py-14 sm:py-20">
          <SectionHeading eyebrow="FAQ" title={`Men's health care in ${s.name}`} />
          <div className="mt-12">
            <FaqList items={faqs} />
          </div>
        </Container>
      </section>

      {/* Nearby states (internal linking) */}
      <section className="bg-white">
        <Container className="py-12">
          <h2 className="text-lg font-bold text-ink-900">Other states we serve</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {nearby.map((x) => (
              <Link
                key={x.slug}
                href={`/treatment-areas/${x.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-medium text-ink-600 transition-colors hover:border-brand-400 hover:text-brand-700"
              >
                {x.name}
              </Link>
            ))}
            <Link
              href="/treatment-areas"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-3 py-1.5 text-sm font-semibold text-white"
            >
              All states
            </Link>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-ink-500">
            <Check className="size-4 text-brand-600" />
            Provider availability and treatment eligibility are confirmed during your online visit.
          </p>
        </Container>
      </section>

      <CtaBand title={`Ready to start in ${s.name}?`} />
    </>
  );
}
