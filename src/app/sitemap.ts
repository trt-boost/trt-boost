import type { MetadataRoute } from "next";
import { categories } from "@/lib/catalog";
import { articles } from "@/lib/articles";
import { states } from "@/lib/states";
import { legalNav, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const routes = [
    "",
    "/start",
    "/treatments",
    "/pricing",
    "/how-it-works",
    "/learn",
    "/reviews",
    "/about",
    "/contact",
    "/faq",
    "/treatment-areas",
    ...categories.map((c) => `/treatments/${c.slug}`),
    ...articles.map((a) => `/learn/${a.slug}`),
    ...states.map((s) => `/treatment-areas/${s.slug}`),
    ...legalNav.map((l) => l.href),
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : path === "/start" ? 0.9 : 0.7,
  }));
}
