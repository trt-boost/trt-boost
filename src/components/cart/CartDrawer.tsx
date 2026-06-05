"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, X, ShieldCheck } from "lucide-react";
import { useCart } from "@/lib/cart";
import { CartLines } from "@/components/cart/CartLines";
import { CartCheckoutButton } from "@/components/cart/CartCheckoutButton";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

/** Global slide-over cart. Mounted once in the root layout. */
export function CartDrawer() {
  const { isOpen, close, items, count, subtotal } = useCart();

  // Lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60]",
        isOpen ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        onClick={close}
        className={cn(
          "absolute inset-0 bg-ink-950/50 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-label="Your cart"
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-ink-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="size-5 text-brand-600" />
            <h2 className="text-lg font-bold text-ink-900">Your plan</h2>
            {count > 0 && (
              <span className="rounded-full bg-ink-100 px-2 py-0.5 text-xs font-semibold text-ink-600">
                {count}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close cart"
            className="rounded-lg p-1.5 text-ink-500 hover:bg-ink-50 hover:text-ink-900"
          >
            <X className="size-5" />
          </button>
        </div>

        {items.length === 0 ? (
          /* Empty state */
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <span className="inline-flex size-16 items-center justify-center rounded-2xl bg-ink-50 text-ink-300">
              <ShoppingBag className="size-7" />
            </span>
            <div>
              <p className="font-semibold text-ink-900">Your plan is empty</p>
              <p className="mt-1 text-sm text-ink-500">
                Add the treatments you want — TRT, hair, ED, weight, peptides —
                and one visit covers them all.
              </p>
            </div>
            <Link
              href="/treatments"
              onClick={close}
              className="text-sm font-semibold text-brand-700 hover:underline"
            >
              Browse treatments →
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-5">
              <CartLines compact />
            </div>

            {/* Footer */}
            <div className="border-t border-ink-100 px-5 py-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-500">Estimated monthly</span>
                <span className="text-xl font-bold text-ink-900">
                  {formatPrice(subtotal)}
                  <span className="text-sm font-medium text-ink-400">/mo</span>
                </span>
              </div>
              <p className="mt-1 flex items-start gap-1.5 text-xs text-ink-400">
                <ShieldCheck className="mt-0.5 size-3.5 shrink-0 text-brand-600" />
                A licensed provider reviews your plan first — you&apos;re only
                charged for treatments that are prescribed. Excludes consult and
                any labs.
              </p>
              <div className="mt-4">
                <CartCheckoutButton label="Start your visit" />
              </div>
              <div className="mt-2 flex items-center justify-between">
                <Link
                  href="/cart"
                  onClick={close}
                  className="text-sm font-semibold text-ink-600 hover:text-ink-900"
                >
                  View full cart
                </Link>
                <button
                  type="button"
                  onClick={close}
                  className="text-sm font-medium text-ink-400 hover:text-ink-700"
                >
                  Keep browsing
                </button>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
