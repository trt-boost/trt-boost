import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { CategoryCard } from "@/components/marketing/CategoryCard";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/marketing/CtaBand";
import { GetStarted } from "@/components/GetStarted";
import { categories } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore TRT Boost treatments: testosterone therapy, erectile dysfunction, hair loss, weight loss, and peptides — prescribed online by licensed providers.",
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title="Treatments built around men's health"
        subtitle="Five categories of evidence-based care, each prescribed online by a provider licensed in your state and delivered discreetly to your door."
        image="/images/products/meds/testosterone-cypionate.webp"
        imageAlt="TRT Boost treatment vials"
        imageFit="cover"
      >
        <GetStarted size="lg" label="Find my treatment" />
      </PageHero>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-50/60">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="How it works"
            title="One simple path to treatment"
            subtitle="However you start, the process is the same — fast, private, and physician-guided."
          />
          <div className="mt-12">
            <HowItWorks />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
