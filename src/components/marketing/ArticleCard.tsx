import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { Article } from "@/lib/articles";

const catAccent: Record<string, string> = {
  Testosterone: "from-brand-500/25 to-ink-900",
  "Weight Loss": "from-emerald-400/25 to-ink-900",
  "Sexual Health": "from-brand-400/25 to-ink-900",
  Hair: "from-teal-400/20 to-ink-900",
  Peptides: "from-brand-600/25 to-ink-900",
  "Getting Started": "from-brand-300/25 to-ink-900",
};

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/learn/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-brand-300"
    >
      <div
        className={`bg-grid-brand relative flex aspect-[16/9] items-end bg-gradient-to-br ${
          catAccent[article.category] ?? "from-brand-500/20 to-ink-900"
        } p-5`}
      >
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink-800 backdrop-blur">
          {article.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug text-ink-900 group-hover:text-brand-700">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
          {article.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between text-xs text-ink-400">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" />
            {article.readMins} min read
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-brand-700">
            Read
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
