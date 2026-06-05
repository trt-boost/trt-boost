import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { CartView } from "@/components/cart/CartView";

export const metadata: Metadata = {
  title: "Your Cart",
  description:
    "Review your treatment plan. Add as many treatments as you like — one provider visit covers everything.",
  robots: { index: false, follow: false },
};

export default function CartPage() {
  return (
    <>
      <PageHero
        eyebrow="Your plan"
        title="Your cart"
        subtitle="Add as many treatments as you want — TRT, hair, ED, weight, peptides. One online visit, one provider, one plan."
      />
      <section className="bg-ink-50/50">
        <Container className="py-12 sm:py-16">
          <CartView />
        </Container>
      </section>
    </>
  );
}
