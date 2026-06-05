"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/cn";

/** Header cart trigger with a live item-count badge. Opens the cart drawer. */
export function CartButton({ className }: { className?: string }) {
  const { count, open, hydrated } = useCart();

  return (
    <button
      type="button"
      onClick={open}
      aria-label={count > 0 ? `Open cart (${count} item${count === 1 ? "" : "s"})` : "Open cart"}
      className={cn(
        "relative inline-flex size-10 shrink-0 items-center justify-center rounded-lg text-ink-800 transition-colors hover:bg-ink-50",
        className,
      )}
    >
      <ShoppingBag className="size-5" />
      {hydrated && count > 0 && (
        <span className="absolute -right-0.5 -top-0.5 inline-flex min-w-[18px] items-center justify-center rounded-full bg-brand-500 px-1 text-[11px] font-bold leading-[18px] text-ink-950">
          {count}
        </span>
      )}
    </button>
  );
}
