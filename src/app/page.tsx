import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Check, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GetStarted } from "@/components/GetStarted";
import { ButtonLink } from "@/components/ui/Button";
import { Marquee } from "@/components/marketing/Marquee";
import { Stats } from "@/components/marketing/Stats";
import { CategoryCard } from "@/components/marketing/CategoryCard";
import { ProductShowcase } from "@/components/marketing/ProductShowcase";
import { Comparison } from "@/components/marketing/Comparison";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { StateChecker } from "@/components/marketing/StateChecker";
import { ArticleCard } from "@/components/marketing/ArticleCard";
import { CtaBand } from "@/components/marketing/CtaBand";
import { FaqList } from "@/components/marketing/Faq";
import { Logo } from "@/components/brand/Logo";
import { JsonLd } from "@/components/seo/JsonLd";
import { categories } from "@/lib/catalog";
import { articlesByDate } from "@/lib/articles";
import { formatPrice } from "@/lib/format";
import { faqs } from "@/lib/faq";
import { faqSchema } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs.slice(0, 6))} />
      {/* ============ HERO ============ */}
      <section className="hero-mesh grain relative overflow-hidden">
        <div className="animate-mesh pointer-events-none absolute inset-0">
          <div className="absolute -right-24 top-0 size-[520px] rounded-full bg-brand-500/20 blur-[120px]" />
          <div className="absolute -left-40 bottom-0 size-[460px] rounded-full bg-brand-700/20 blur-[120px]" />
        </div>
        <div className="bg-grid-brand absolute inset-0 opacity-40" />

        <Container className="relative">
          <div className="grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
            {/* Left */}
            <div>
              <div className="animate-rise">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-200 backdrop-blur">
                  <span className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-brand-400 text-brand-400" />
                    ))}
                  </span>
                  Doctor-trusted men&apos;s health
                </span>
              </div>

              <h1 className="animate-rise rise-1 mt-6 font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Optimize your hormones.
                <span className="mt-2 block text-gradient-glow">
                  Reclaim your edge.
                </span>
              </h1>

              <p className="animate-rise rise-2 mt-7 max-w-xl text-lg leading-relaxed text-ink-300">
                Doctor-trusted testosterone therapy and men&apos;s health
                treatments — prescribed online by licensed providers and
                delivered discreetly to your door. No waiting rooms. No
                guesswork. No hassle.
              </p>

              <div className="animate-rise rise-3 mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <GetStarted size="lg" label="Start your visit" />
                <ButtonLink
                  href="/treatments"
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-white/5 text-white hover:border-brand-400 hover:text-brand-300"
                >
                  Explore treatments
                </ButtonLink>
              </div>

              <div className="animate-rise rise-4 mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-400">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-brand-400" />
                  Licensed U.S. providers
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-brand-400" />
                  Free, discreet shipping
                </span>
              </div>
            </div>

            {/* Right — floating product + glass chips */}
            <div className="animate-rise rise-5 relative mx-auto w-full max-w-md lg:max-w-none">
              <div
                aria-hidden
                className="animate-glow absolute left-1/2 top-1/2 size-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/25 blur-[90px]"
              />
              <div className="animate-float relative">
                <div className="ring-gradient overflow-hidden rounded-[2rem] bg-white/5 p-2 shadow-2xl backdrop-blur">
                  <div className="relative aspect-square overflow-hidden rounded-[1.6rem] bg-ink-950">
                    <Image
                      src="/images/products/meds/testosterone-cypionate.webp"
                      alt="TRT Boost testosterone treatment"
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 480px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* rating chip */}
                <div className="absolute -left-3 top-8 hidden rounded-2xl border border-white/10 bg-ink-950/85 px-4 py-3 shadow-xl backdrop-blur sm:block">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-brand-400 text-brand-400" />
                    ))}
                  </div>
                  <p className="mt-1 text-xs font-semibold text-white">
                    Doctor-prescribed
                  </p>
                </div>

                {/* price chip */}
                <Link
                  href="/treatments/trt"
                  className="group absolute -bottom-4 right-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/85 px-4 py-3 shadow-xl backdrop-blur transition-colors hover:border-brand-400/50"
                >
                  <span>
                    <span className="block text-[11px] uppercase tracking-wide text-ink-400">
                      Testosterone therapy
                    </span>
                    <span className="block text-sm font-bold text-white">
                      from {formatPrice(99)}
                      <span className="font-medium text-ink-400">/mo</span>
                    </span>
                  </span>
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-brand-500 text-ink-950 transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="size-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* trust marquee */}
      <div className="hero-mesh">
        <Marquee />
      </div>

      {/* stats band */}
      <section className="hero-mesh relative overflow-hidden border-b border-white/10">
        <Container className="relative">
          <Reveal className="py-14 sm:py-16">
            <Stats />
          </Reveal>
        </Container>
      </section>

      {/* ============ TREATMENTS ============ */}
      <section className="bg-white">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Treatments"
              title={
                <>
                  Care for how men{" "}
                  <span className="text-gradient">actually live</span>
                </>
              }
              subtitle="Evidence-based treatments across hormones, sexual health, hair, weight, and recovery — all prescribed online by licensed providers."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 70}>
                <CategoryCard category={c} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/pricing" variant="ghost">
              See full pricing
              <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* ============ PRODUCT SHOWCASE ============ */}
      <section className="bg-ink-50/60">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Pharmacy-grade"
              title="Real treatments, delivered to your door"
              subtitle="Prescription medications compounded and dispensed by licensed U.S. pharmacies — shipped free and discreet, with cold-chain protection when needed."
            />
          </Reveal>
          <Reveal delay={120} className="mt-14">
            <ProductShowcase />
          </Reveal>
        </Container>
      </section>

      {/* ============ COMPARISON ============ */}
      <section className="bg-white">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Why switch"
              title={
                <>
                  The old way, <span className="text-gradient">reinvented</span>
                </>
              }
              subtitle="Everything you hated about getting care — gone. Here's how TRT Boost compares."
            />
          </Reveal>
          <Reveal delay={120} className="mt-14">
            <Comparison />
          </Reveal>
        </Container>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="bg-ink-50/60">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Real care in three simple steps"
              subtitle="From first visit to ongoing treatment, everything happens online — on your schedule."
            />
          </Reveal>
          <Reveal delay={120} className="mt-14">
            <HowItWorks />
          </Reveal>
          <div className="mt-12 text-center">
            <GetStarted label="Start your online visit" size="lg" />
          </div>
        </Container>
      </section>

      {/* ============ STATE CHECKER ============ */}
      <section className="bg-ink-50/60">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <StateChecker />
          </Reveal>
        </Container>
      </section>

      {/* ============ LEARN TEASER ============ */}
      <section className="bg-white">
        <Container className="py-16 sm:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                align="left"
                eyebrow="Learn"
                title={
                  <>
                    Men&apos;s health, <span className="text-gradient">decoded</span>
                  </>
                }
                subtitle="Evidence-based guides, reviewed by our clinical team."
              />
              <ButtonLink href="/learn" variant="ghost" className="hidden sm:inline-flex">
                All articles
                <ArrowRight className="size-4" />
              </ButtonLink>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {articlesByDate.slice(0, 3).map((a, i) => (
              <Reveal key={a.slug} delay={i * 70}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ BRAND LOCKUP ============ */}
      <section className="bg-ink-50/60">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <div className="grid items-center gap-10 rounded-3xl border border-ink-100 bg-white p-8 sm:p-12 lg:grid-cols-2">
              <div>
                <Logo href={null} width={280} height={122} className="h-auto w-56" />
                <h2 className="mt-6 text-3xl font-bold text-ink-900">
                  Your health. Your confidence. Our commitment.
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-500">
                  TRT Boost was built to make high-quality men&apos;s healthcare
                  simple, private, and effective — pairing licensed clinicians
                  with a seamless online experience and pharmacy-grade
                  fulfillment.
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  "Licensed providers in your state",
                  "Personalized, physician-guided plans",
                  "Dispensed by licensed U.S. pharmacies",
                  "Temperature-controlled cold-chain shipping",
                  "Transparent pricing — no surprises",
                  "Message your care team anytime",
                ].map((v) => (
                  <li
                    key={v}
                    className="flex items-start gap-3 rounded-xl border border-ink-100 bg-ink-50/60 p-4"
                  >
                    <Check className="mt-0.5 size-5 shrink-0 text-brand-600" />
                    <span className="text-[15px] font-medium text-ink-800">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-white">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions, answered"
              subtitle="Everything you need to know before your first visit."
            />
          </Reveal>
          <Reveal delay={120} className="mt-14">
            <FaqList items={faqs.slice(0, 6)} />
          </Reveal>
          <p className="mt-8 text-center text-sm text-ink-500">
            Still curious?{" "}
            <Link href="/faq" className="font-semibold text-brand-700 hover:underline">
              Read all FAQs
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-semibold text-brand-700 hover:underline">
              contact our team
            </Link>
            .
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
