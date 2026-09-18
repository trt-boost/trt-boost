import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Trust & compliance badges (official artwork).
 *
 * NOT RENDERED ANYWHERE by default. Displaying a certification seal you do not
 * hold is trademark misuse and a deceptive claim (payment processors and ad
 * networks check). Only add <TrustBadges /> back to the footer/home once the
 * organization ACTUALLY holds each certification, and set `href` to the official
 * verification URL. A "HIPAA Compliant" seal was removed entirely: it was an
 * unlicensed stock image, and HIPAA has no official certification seal.
 */

type Badge = {
  key: string;
  label: string;
  image: string;
  w: number;
  h: number;
  href?: string; // official verification link
};

const badges: Badge[] = [
  {
    key: "legitscript",
    label: "LegitScript Certified",
    image: "/brand/badges/legitscript.png",
    w: 292,
    h: 316,
    // href: "https://www.legitscript.com/websites/?checker_keywords=trtboost.com",
  },
  {
    key: "soc",
    label: "AICPA SOC 2 Type II",
    image: "/brand/badges/soc2.png",
    w: 360,
    h: 360,
  },
];

function BadgeTile({ b }: { b: Badge }) {
  const inner = (
    <span className="inline-flex h-16 items-center justify-center rounded-xl border border-ink-200 bg-white px-4 shadow-sm">
      <Image
        src={b.image}
        alt={b.label}
        width={b.w}
        height={b.h}
        className="h-11 w-auto object-contain"
      />
    </span>
  );
  return b.href ? (
    <a
      href={b.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={b.label}
      className="transition-opacity hover:opacity-80"
    >
      {inner}
    </a>
  ) : (
    <span aria-label={b.label} title={b.label}>
      {inner}
    </span>
  );
}

export function TrustBadges({
  className,
}: {
  /** kept for API compatibility; badges render on white tiles for both tones */
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {badges.map((b) => (
        <BadgeTile key={b.key} b={b} />
      ))}
    </div>
  );
}
