"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUp, MessageCircle, MessageSquareText } from "lucide-react";
import { cn } from "@/lib/cn";
import { chatEnabled, site } from "@/lib/site";

const iconButton =
  "inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 hover:border-brand-400 hover:text-brand-700";

export function FloatingActions() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 700);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide the CTA on the quiz itself.
  const hideCta = pathname?.startsWith("/start");

  return (
    <>
      {/* Scroll-to-top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "fixed right-4 z-40 inline-flex size-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 shadow-lg transition-all hover:border-brand-400 hover:text-brand-700",
          // sit above the mobile CTA bar on small screens
          hideCta ? "bottom-4" : "bottom-20 lg:bottom-6",
          scrolled
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <ArrowUp className="size-5" />
      </button>

      {/* Mobile sticky CTA */}
      {!hideCta && (
        <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-ink-100 bg-white/95 p-3 backdrop-blur lg:hidden">
          {chatEnabled && (
            <button
              type="button"
              data-open-chat
              aria-label="Chat with us"
              className={iconButton}
            >
              <MessageCircle className="size-5" />
            </button>
          )}
          <a
            href={site.contact.smsHref}
            aria-label="Text us"
            className={iconButton}
          >
            <MessageSquareText className="size-5" />
          </a>
          <Link
            href="/start"
            className="group flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand-500 font-semibold text-ink-950 shadow-[0_8px_24px_-10px_rgba(18,221,150,0.7)]"
          >
            Start your visit
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      )}
    </>
  );
}
