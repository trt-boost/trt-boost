import Link from "next/link";
import { Home, BookOpen, Pill, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/brand/Wordmark";
import { GetStarted } from "@/components/GetStarted";

export default function NotFound() {
  const links = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Pill, label: "Treatments", href: "/treatments" },
    { icon: BookOpen, label: "Learn", href: "/learn" },
  ];
  return (
    <section className="hero-mesh grain relative flex min-h-[70vh] items-center overflow-hidden">
      <div className="absolute -right-24 -top-24 size-80 rounded-full bg-brand-500/20 blur-[100px]" />
      <Container className="relative">
        <div className="mx-auto max-w-xl py-16 text-center">
          <Wordmark href={null} tone="light" size="md" className="mb-6 inline-block" />
          <p className="font-display text-7xl font-extrabold text-gradient-glow">404</p>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            This page took a rest day
          </h1>
          <p className="mt-3 text-ink-300">
            The page you&apos;re looking for moved or never existed. Let&apos;s
            get you back on track.
          </p>
          <div className="mt-8 flex justify-center">
            <GetStarted size="lg" label="Start your free visit" />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-brand-400 hover:text-brand-300"
              >
                <l.icon className="size-4" />
                {l.label}
                <ArrowRight className="size-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
