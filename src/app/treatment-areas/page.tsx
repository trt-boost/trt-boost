import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/marketing/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { GetStarted } from "@/components/GetStarted";
import { states } from "@/lib/states";
import { breadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Treatment Areas — Online Men's Health by State",
  description:
    "TRT Boost connects men in Virginia, Maryland, Connecticut, Colorado, and Missouri with licensed providers for testosterone therapy, ED, weight loss, hair, and more. Find care in your state.",
  alternates: { canonical: `${site.url}/treatment-areas` },
};

export default function TreatmentAreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Treatment Areas", href: "/treatment-areas" },
        ])}
      />
      <PageHero
        eyebrow="Treatment areas"
        title={
          <>
            Doctor-trusted men&apos;s health,{" "}
            <span className="text-gradient-glow">in your state</span>
          </>
        }
        subtitle="TRT Boost serves patients with licensed providers in Virginia, Maryland, Connecticut, Colorado, and Missouri. Select your state to learn more."
      >
        <GetStarted size="lg" label="Start your visit" />
      </PageHero>

      <section className="bg-white">
        <Container className="py-14 sm:py-16">
          <SectionHeading
            align="left"
            eyebrow="Licensed states"
            title="Find care in your state"
          />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {states.map((s) => (
              <Link
                key={s.slug}
                href={`/treatment-areas/${s.slug}`}
                className="group flex items-center justify-between rounded-xl border border-ink-100 bg-white px-4 py-3 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
              >
                <span className="flex items-center gap-2 text-sm font-semibold text-ink-800">
                  <MapPin className="size-4 text-brand-600" />
                  {s.name}
                </span>
                <ArrowRight className="size-4 text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-50/60">
        <Container className="py-14 sm:py-20">
          <SectionHeading eyebrow="How it works" title="The same simple process, everywhere" />
          <div className="mt-12">
            <HowItWorks />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
