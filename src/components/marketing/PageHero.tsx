import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

/** Compact dark page header used on inner pages, with optional image. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  imageFit = "contain",
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  children?: React.ReactNode;
}) {
  const text = (
    <div>
      {eyebrow && <Eyebrow tone="light">{eyebrow}</Eyebrow>}
      <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-5 text-lg leading-relaxed text-ink-300">{subtitle}</p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </div>
  );

  return (
    <section className="hero-mesh grain relative overflow-hidden">
      <div className="bg-grid-brand absolute inset-0 opacity-40" />
      <div className="absolute -right-24 -top-24 size-80 rounded-full bg-brand-500/20 blur-[100px]" />
      <Container className="relative">
        {image ? (
          <div className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2">
            {text}
            <div
              className={cn(
                "relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-white/10",
                imageFit === "contain"
                  ? "bg-gradient-to-br from-white to-brand-50"
                  : "bg-ink-800",
              )}
            >
              <Image
                src={image}
                alt={imageAlt ?? ""}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className={imageFit === "contain" ? "object-contain p-6" : "object-cover"}
              />
            </div>
          </div>
        ) : (
          <div className="max-w-3xl py-14 sm:py-20">{text}</div>
        )}
      </Container>
    </section>
  );
}
