import { Container } from "@/components/ui/Container";
import { GetStarted } from "@/components/GetStarted";
import { CardBrands } from "@/components/marketing/CardBrands";

export function CtaBand({
  title = "Ready to feel like yourself again?",
  subtitle = "Start your online visit today. No commitment, no waiting room — just doctor-trusted care built around you.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-20">
        <div className="bg-grid-brand relative overflow-hidden rounded-3xl bg-ink-950 px-8 py-14 text-center sm:px-16">
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">{subtitle}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GetStarted size="lg" label="Get Started" />
              <span className="text-sm text-ink-400">
                Free standard shipping · Cancel anytime
              </span>
            </div>
            <div className="mt-8 flex justify-center">
              <CardBrands />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
