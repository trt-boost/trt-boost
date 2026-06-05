import Image from "next/image";
import { Check } from "lucide-react";
import { GetStarted } from "@/components/GetStarted";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { productImage, startingPrice, type Product } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";

export function ProductCard({
  product,
  category = "",
}: {
  product: Product;
  category?: string;
}) {
  const from = startingPrice(product);
  const multiDose = product.variants.length > 1;
  const v0 = product.variants[0];

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-[var(--shadow-card)] transition-colors hover:border-brand-300">
      {/* Product image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-950">
        <Image
          src={productImage(product)}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
        {product.popular && (
          <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink-950 shadow">
            Most popular
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-ink-700 shadow-sm backdrop-blur">
          {product.route}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-ink-900">{product.name}</h3>

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

        <div className="mt-auto flex items-end justify-between border-t border-ink-100 pt-5">
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
            <AddToCartButton
              size="sm"
              variant="ghost"
              item={{
                slug: product.slug,
                name: product.name,
                category,
                route: product.route,
                dosage: v0?.dosage ?? "",
                quantity: v0?.quantity ?? "",
                price: v0?.price ?? from,
                image: productImage(product),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
