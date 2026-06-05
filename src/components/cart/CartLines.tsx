"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";
import { allProducts } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

/** Renders the cart's line items with a per-item dose selector and remove. */
export function CartLines({ compact = false }: { compact?: boolean }) {
  const { items, remove, setDose } = useCart();

  return (
    <ul className={cn("divide-y divide-ink-100", compact && "text-sm")}>
      {items.map((item) => {
        const product = allProducts.find((p) => p.slug === item.slug);
        const variants = product?.variants ?? [];
        const multiDose = variants.length > 1;

        return (
          <li key={item.slug} className="flex gap-4 py-4">
            <div
              className={cn(
                "relative shrink-0 overflow-hidden rounded-xl bg-ink-950",
                compact ? "size-16" : "size-20",
              )}
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate font-semibold text-ink-900">{item.name}</p>
                  <p className="text-xs text-ink-400">{item.category}</p>
                </div>
                <button
                  type="button"
                  onClick={() => remove(item.slug)}
                  aria-label={`Remove ${item.name}`}
                  className="shrink-0 rounded-md p-1 text-ink-400 transition-colors hover:bg-ink-50 hover:text-ink-700"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              <div className="mt-2 flex items-end justify-between gap-3">
                {multiDose ? (
                  <label className="text-xs text-ink-500">
                    <span className="sr-only">Dose for {item.name}</span>
                    <select
                      value={item.dosage}
                      onChange={(e) => {
                        const v = variants.find((x) => x.dosage === e.target.value);
                        if (v) setDose(item.slug, v.dosage, v.price, v.quantity);
                      }}
                      className="rounded-lg border border-ink-200 bg-white px-2 py-1 text-xs font-medium text-ink-800 focus:border-brand-500 focus:outline-none"
                    >
                      {variants.map((v) => (
                        <option key={v.dosage} value={v.dosage}>
                          {v.dosage} · {v.quantity}
                        </option>
                      ))}
                    </select>
                  </label>
                ) : (
                  <span className="text-xs text-ink-500">
                    {item.dosage}
                    {item.quantity ? ` · ${item.quantity}` : ""}
                  </span>
                )}
                <span className="font-bold text-ink-900">
                  {formatPrice(item.price)}
                  <span className="text-xs font-medium text-ink-400">/mo</span>
                </span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
