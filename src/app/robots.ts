import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Private preview by default — block all crawlers. Set NEXT_PUBLIC_NOINDEX
  // to "false" at public launch to allow indexing.
  if (process.env.NEXT_PUBLIC_NOINDEX !== "false") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
