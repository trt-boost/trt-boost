import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * The official TRT Boost logo artwork (charcoal "TRT" + green "BOOST" in a neon
 * pill). Background has been keyed to transparent, so it renders cleanly on any
 * surface. Note: the "TRT" lettering is dark grey (built for light backgrounds);
 * it's legible but dim on very dark surfaces — supply a white-knockout version
 * for maximum contrast on dark.
 */
export function Logo({
  className,
  width = 240,
  height = 104,
  priority = false,
  href = null,
}: {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  href?: string | null;
}) {
  const img = (
    <Image
      src="/brand/logo-mark.png"
      alt="TRT Boost — Men's Health & Vitality"
      width={width}
      height={height}
      priority={priority}
      className={cn("select-none object-contain", className)}
    />
  );
  if (href === null) return img;
  return (
    <Link href={href} aria-label="TRT Boost home" className="inline-flex shrink-0">
      {img}
    </Link>
  );
}
