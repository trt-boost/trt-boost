import Link from "next/link";
import Image from "next/image";

const items = [
  { image: "/images/products/meds/testosterone-cypionate.webp", label: "Testosterone Therapy", href: "/treatments/trt" },
  { image: "/images/products/meds/sildenafil.webp", label: "ED Treatment", href: "/treatments/ed" },
  { image: "/images/products/meds/semaglutide.webp", label: "Weight Loss", href: "/treatments/weight-loss" },
  { image: "/images/products/meds/sermorelin.webp", label: "Peptides & Recovery", href: "/treatments/peptides" },
];

export function ProductShowcase() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-brand-300"
        >
          <div className="relative aspect-square bg-ink-950">
            <Image
              src={item.image}
              alt={item.label}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex items-center justify-between px-4 py-3.5">
            <span className="text-sm font-semibold text-ink-900">{item.label}</span>
            <span className="text-brand-600">→</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
