"use client";

import Link from "next/link";
import { ShoppingBag, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import { useCart } from "@/lib/cart";
import { CartLines } from "@/components/cart/CartLines";
import { CartCheckoutButton } from "@/components/cart/CartCheckoutButton";
import { formatPrice } from "@/lib/format";

export function CartView() {
  const { items, count, subtotal, hydrated, clear } = useCart();

  // Avoid a flash of "empty" before localStorage hydrates.
  if (!hydrated) {
    return <div className="h-64" aria-hidden />;
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 rounded-3xl border border-ink-100 bg-white py-20 text-center">
        <span className="inline-flex size-16 items-center justify-center rounded-2xl bg-ink-50 text-ink-300">
          <ShoppingBag className="size-7" />
        </span>
        <div>
          <h2 className="text-xl font-bold text-ink-900">Your cart is empty</h2>
          <p className="mx-auto mt-2 max-w-md text-ink-500">
            Build your plan by adding the treatments you want. Mix and match —
            TRT, hair loss, ED, weight, and peptides — and a single provider
            visit covers everything.
          </p>
        </div>
        <Link
          href="/treatments"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand-500 px-6 font-semibold text-ink-950 transition-colors hover:bg-brand-400"
        >
          Browse treatments →
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      {/* Items */}
      <div className="rounded-3xl border border-ink-100 bg-white p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-ink-900">
            {count} treatment{count === 1 ? "" : "s"} in your plan
          </h2>
          <button
            type="button"
            onClick={clear}
            className="text-sm font-medium text-ink-400 hover:text-ink-700"
          >
            Clear all
          </button>
        </div>
        <div className="mt-2">
          <CartLines />
        </div>
        <Link
          href="/treatments"
          className="mt-4 inline-flex text-sm font-semibold text-brand-700 hover:underline"
        >
          + Add more treatments
        </Link>
      </div>

      {/* Summary */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-[var(--shadow-card)]">
          <h2 className="text-lg font-bold text-ink-900">Plan summary</h2>
          <dl className="mt-4 space-y-2 text-sm">
            {items.map((i) => (
              <div key={i.slug} className="flex justify-between gap-3">
                <dt className="min-w-0 truncate text-ink-600">
                  {i.name}
                  <span className="text-ink-400"> · {i.dosage}</span>
                </dt>
                <dd className="shrink-0 font-medium text-ink-900">
                  {formatPrice(i.price)}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 flex items-center justify-between border-t border-ink-100 pt-4">
            <span className="font-semibold text-ink-900">Estimated monthly</span>
            <span className="text-2xl font-bold text-ink-900">
              {formatPrice(subtotal)}
              <span className="text-sm font-medium text-ink-400">/mo</span>
            </span>
          </div>

          <div className="mt-5">
            <CartCheckoutButton label="Start your visit" />
          </div>

          <ul className="mt-5 space-y-2.5 text-xs text-ink-500">
            <li className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-brand-600" />
              A licensed provider reviews your plan first. You&apos;re only
              charged for treatments that are prescribed.
            </li>
            <li className="flex items-start gap-2">
              <Truck className="mt-0.5 size-4 shrink-0 text-brand-600" />
              Free, discreet shipping. Prices exclude the consult and any labs.
            </li>
            <li className="flex items-start gap-2">
              <RefreshCw className="mt-0.5 size-4 shrink-0 text-brand-600" />
              Cancel or change your plan anytime.
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
