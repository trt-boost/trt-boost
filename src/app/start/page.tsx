import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Clock, Lock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/brand/Wordmark";
import { Quiz } from "@/components/quiz/Quiz";

export const metadata: Metadata = {
  title: "Start your free visit",
  description:
    "Answer a few quick questions to get matched with a personalized, doctor-trusted treatment plan from TRT Boost.",
};

export default function StartPage() {
  return (
    <>
      <section className="hero-mesh grain relative overflow-hidden">
        <div className="absolute -right-24 -top-24 size-80 rounded-full bg-brand-500/20 blur-[100px]" />
        <Container className="relative">
          <div className="flex flex-col items-center py-10 text-center sm:py-14">
            <Link href="/" aria-label="TRT Boost home">
              <Wordmark tone="light" size="lg" href={null} />
            </Link>
            <h1 className="mt-6 max-w-2xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Let&apos;s build your plan in 2 minutes
            </h1>
            <p className="mt-3 max-w-xl text-ink-300">
              A few quick questions help us match you with the right
              doctor-trusted treatment. Free, private, no commitment.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-400">
              <span className="flex items-center gap-2">
                <Clock className="size-4 text-brand-400" /> Takes ~2 minutes
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-brand-400" /> Licensed providers
              </span>
              <span className="flex items-center gap-2">
                <Lock className="size-4 text-brand-400" /> 100% private
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-12 sm:py-16">
          <Quiz />
        </Container>
      </section>
    </>
  );
}
