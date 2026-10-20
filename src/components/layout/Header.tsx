"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { GetStarted } from "@/components/GetStarted";
import { SearchCommand } from "@/components/search/SearchCommand";
import { CartButton } from "@/components/cart/CartButton";
import { chatEnabled, headerNav, primaryNav } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/85 backdrop-blur-md">
      {/* Wider than the body container so the logo sits closer to the edge and
          the nav has room to breathe (no wrapping). */}
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3 sm:h-[72px] lg:gap-6">
          <Logo href="/" priority className="h-9 w-auto shrink-0 sm:h-10" />

          <nav className="hidden items-center gap-0.5 lg:flex">
            {headerNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap rounded-full px-3 py-2 text-[15px] font-medium text-ink-700 transition-colors hover:bg-ink-50 hover:text-ink-950"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 lg:gap-3">
            <SearchCommand />
            {chatEnabled && (
              <button
                type="button"
                data-open-chat
                className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-ink-700 hover:text-brand-700 xl:inline-flex"
              >
                <MessageCircle className="size-4" />
                Chat
              </button>
            )}
            <CartButton />
            <div className="hidden shrink-0 lg:block">
              <GetStarted size="sm" />
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-lg text-ink-800 hover:bg-ink-50 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-ink-100 bg-white lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="py-4">
          <nav className="flex flex-col gap-1">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-800 hover:bg-ink-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <GetStarted size="md" className="w-full" />
          </div>
        </Container>
      </div>
    </header>
  );
}
