"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAnalyticsAllowed } from "@/lib/consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Google Analytics 4. Loads only when NEXT_PUBLIC_GA_ID is set AND the visitor
 * has accepted all cookies in the consent banner, and sends a page_view on each
 * client-side route change (App Router SPA navigation).
 */
export function Analytics() {
  const pathname = usePathname();
  const allowed = useAnalyticsAllowed();

  useEffect(() => {
    if (!GA_ID || !allowed || typeof window === "undefined") return;
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    w.gtag?.("event", "page_view", { page_path: pathname });
  }, [pathname, allowed]);

  if (!GA_ID || !allowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
