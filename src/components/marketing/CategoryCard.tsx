import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CategoryIcon } from "@/components/ui/Icon";
import { categoryStartingPrice, type Category } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

export function CategoryCard({ category }: { category: Category }) {
  const contain = category.imageFit !== "cover";
  return (
    <Link
      href={`/treatments/${category.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:border-brand-300"
    >
      {/* Image */}
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden",
          category.image && contain
            ? "bg-gradient-to-br from-brand-50 to-ink-50"
            : category.image
              ? "bg-ink-100"
              : "bg-gradient-to-br from-ink-900 to-ink-950",
        )}
      >
        {category.image ? (
          <Image
            src={category.image}
            alt={`${category.name} treatment`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={cn(
              "transition-transform duration-300 group-hover:scale-105",
              contain ? "object-contain p-3" : "object-cover",
            )}
          />
        ) : (
          <div className="bg-grid-brand flex h-full items-center justify-center">
            <CategoryIcon
              name={category.icon}
              className="size-14 text-brand-400 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-ink-700 backdrop-blur">
          <CategoryIcon name={category.icon} className="size-3.5 text-brand-600" />
          {category.shortName}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-ink-900">{category.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
          {category.blurb}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm text-ink-500">
            From{" "}
            <span className="text-base font-bold text-ink-900">
              {formatPrice(categoryStartingPrice(category))}
            </span>
            /mo
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
            Explore
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
