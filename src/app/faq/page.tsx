import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { FaqList } from "@/components/marketing/Faq";
import { CtaBand } from "@/components/marketing/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about TRT Boost — treatments, pricing, prescriptions, shipping, privacy, and eligibility.",
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Everything you need to know about treatments, pricing, prescriptions, shipping, and privacy."
      />
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <FaqList items={faqs} />
          <p className="mt-8 text-center text-ink-500">
            Didn&apos;t find your answer?{" "}
            <Link href="/contact" className="font-semibold text-brand-700 hover:underline">
              Contact our support team
            </Link>
            .
          </p>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
