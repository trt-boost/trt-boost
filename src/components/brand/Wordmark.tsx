import Link from "next/link";
import { cn } from "@/lib/cn";

const sizeMap = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-4xl sm:text-5xl",
} as const;

/**
 * Typographic TRT Boost wordmark — "TRT" + "BOOST", BOOST always in brand green.
 * tone="light" for dark surfaces (white TRT); tone="dark" for light surfaces.
 */
export function Wordmark({
  tone = "dark",
  size = "md",
  href = "/",
  className,
}: {
  tone?: "light" | "dark";
  size?: keyof typeof sizeMap;
  href?: string | null;
  className?: string;
}) {
  const inner = (
    <span
      className={cn(
        "font-display font-extrabold uppercase tracking-tight leading-none",
        sizeMap[size],
        className,
      )}
    >
      <span className={tone === "light" ? "text-white" : "text-ink-900"}>TRT</span>
      <span className="text-brand-500">&nbsp;Boost</span>
    </span>
  );

  if (href === null) return inner;
  return (
    <Link href={href} aria-label="TRT Boost home" className="inline-flex">
      {inner}
    </Link>
  );
}
