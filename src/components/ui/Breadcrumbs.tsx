import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: Crumb[];
  tone?: "light" | "dark";
}) {
  const muted = tone === "light" ? "text-ink-400" : "text-ink-400";
  const active = tone === "light" ? "text-white" : "text-ink-700";
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={it.href} className="flex items-center gap-1.5">
              {last ? (
                <span className={`font-medium ${active}`} aria-current="page">
                  {it.name}
                </span>
              ) : (
                <Link href={it.href} className={`${muted} hover:text-brand-400`}>
                  {it.name}
                </Link>
              )}
              {!last && <ChevronRight className={`size-3.5 ${muted}`} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
