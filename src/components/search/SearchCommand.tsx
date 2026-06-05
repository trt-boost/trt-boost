"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, CornerDownLeft, FileText, Pill, BookOpen, Hash } from "lucide-react";
import { categories } from "@/lib/catalog";
import { articles } from "@/lib/articles";
import { primaryNav, legalNav } from "@/lib/site";
import { cn } from "@/lib/cn";

type Item = {
  label: string;
  sub: string;
  href: string;
  group: "Treatments" | "Medications" | "Articles" | "Pages";
  keywords?: string;
};

function buildIndex(): Item[] {
  const items: Item[] = [];
  for (const c of categories) {
    items.push({
      label: c.name,
      sub: c.blurb,
      href: `/treatments/${c.slug}`,
      group: "Treatments",
      keywords: `${c.shortName} ${c.tagline}`,
    });
    for (const p of c.products) {
      items.push({
        label: p.name,
        sub: `${c.name} · ${p.route}`,
        href: `/treatments/${c.slug}`,
        group: "Medications",
        keywords: p.description,
      });
    }
  }
  for (const a of articles) {
    items.push({
      label: a.title,
      sub: `Article · ${a.category}`,
      href: `/learn/${a.slug}`,
      group: "Articles",
      keywords: a.keywords.join(" "),
    });
  }
  const pages = [
    ...primaryNav,
    { label: "Start your visit", href: "/start" },
    ...legalNav,
  ];
  const seen = new Set<string>();
  for (const l of pages) {
    if (seen.has(l.href)) continue;
    seen.add(l.href);
    items.push({ label: l.label, sub: l.href, href: l.href, group: "Pages" });
  }
  return items;
}

const groupIcon = {
  Treatments: Pill,
  Medications: Pill,
  Articles: BookOpen,
  Pages: FileText,
} as const;

export function SearchCommand() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const index = useMemo(buildIndex, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return index.slice(0, 8);
    return index
      .filter((it) =>
        `${it.label} ${it.sub} ${it.keywords ?? ""}`.toLowerCase().includes(q),
      )
      .slice(0, 12);
  }, [query, index]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 30);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function go(href: string) {
    setOpen(false);
    router.push(href);
  }

  function onInputKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      go(results[active].href);
    }
  }

  return (
    <>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search"
        className="inline-flex h-10 items-center gap-2 rounded-full border border-ink-200 bg-white px-3.5 text-sm text-ink-500 transition-colors hover:border-ink-300 hover:text-ink-700 lg:w-44 xl:w-56"
      >
        <Search className="size-4 shrink-0" />
        <span className="hidden lg:inline">Search…</span>
        <kbd className="ml-auto hidden rounded border border-ink-200 bg-ink-50 px-1.5 py-0.5 font-sans text-[10px] font-semibold text-ink-400 xl:inline">
          ⌘K
        </kbd>
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 bg-ink-950/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-1/2 top-[12vh] w-[92vw] max-w-xl -translate-x-1/2">
            <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-2xl">
              <div className="flex items-center gap-3 border-b border-ink-100 px-4">
                <Search className="size-5 text-ink-400" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActive(0);
                  }}
                  onKeyDown={onInputKey}
                  placeholder="Search treatments, medications, articles…"
                  className="h-14 flex-1 bg-transparent text-[15px] text-ink-900 outline-none placeholder:text-ink-400"
                />
                <kbd className="rounded border border-ink-200 bg-ink-50 px-1.5 py-0.5 text-[10px] font-semibold text-ink-400">
                  ESC
                </kbd>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {results.length === 0 ? (
                  <p className="px-4 py-8 text-center text-sm text-ink-400">
                    No results for &ldquo;{query}&rdquo;.
                  </p>
                ) : (
                  results.map((it, i) => {
                    const Icon = groupIcon[it.group] ?? Hash;
                    return (
                      <button
                        key={`${it.group}-${it.href}-${i}`}
                        type="button"
                        onMouseEnter={() => setActive(i)}
                        onClick={() => go(it.href)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left",
                          active === i ? "bg-brand-50" : "hover:bg-ink-50",
                        )}
                      >
                        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-ink-100 text-ink-500">
                          <Icon className="size-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-semibold text-ink-900">
                            {it.label}
                          </span>
                          <span className="block truncate text-xs text-ink-400">
                            {it.sub}
                          </span>
                        </span>
                        <span className="hidden shrink-0 text-[10px] font-semibold uppercase tracking-wide text-ink-300 sm:inline">
                          {it.group}
                        </span>
                        {active === i && (
                          <CornerDownLeft className="size-4 shrink-0 text-brand-600" />
                        )}
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
