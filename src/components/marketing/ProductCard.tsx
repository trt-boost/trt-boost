import { Check } from "lucide-react";
import { GetStarted } from "@/components/GetStarted";
import { BuyButton } from "@/components/BuyButton";
import { startingPrice, type Product } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  const from = startingPrice(product);
  const multiDose = product.variants.length > 1;

  return (
    <div className="relative flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-[var(--shadow-card)] transition-colors hover:border-brand-300">
      {product.popular && (
        <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink-950">
          Most popular
        </span>
      )}

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-ink-900">{product.name}</h3>
        <span className="shrink-0 rounded-full bg-ink-50 px-2.5 py-1 text-xs font-semibold text-ink-600">
          {product.route}
        </span>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-ink-500">
        {product.description}
      </p>

      <ul className="mt-4 space-y-1.5 text-sm text-ink-700">
        {product.variants.map((v) => (
          <li key={v.dosage} className="flex items-center gap-2">
            <Check className="size-4 shrink-0 text-brand-600" />
            <span>
              <span className="font-semibold">{v.dosage}</span>
              <span className="text-ink-400"> · {v.quantity}</span>
            </span>
            <span className="ml-auto font-semibold text-ink-900">
              {formatPrice(v.price)}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-end justify-between border-t border-ink-100 pt-5">
        <div>
          <p className="text-xs uppercase tracking-wider text-ink-400">
            {multiDose ? "Starting from" : "Price"}
          </p>
          <p className="text-2xl font-bold text-ink-900">{formatPrice(from)}</p>
          <p className="mt-0.5 text-xs text-ink-400">
            Min. order: {product.minPurchase}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <GetStarted label="Start visit" size="sm" withArrow={false} />
          <BuyButton
            slug={product.slug}
            dosage={product.variants[0]?.dosage}
            label="Subscribe"
            size="sm"
            variant="ghost"
          />
        </div>
      </div>
    </div>
  );
}
