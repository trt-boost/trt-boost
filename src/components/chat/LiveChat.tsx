"use client";

import Script from "next/script";
import { useEffect } from "react";
import { chat, chatEnabled } from "@/lib/site";
import { readConsent, useConsent } from "@/lib/consent";

type TawkApi = {
  maximize?: () => void;
  showWidget?: () => void;
  hideWidget?: () => void;
  onLoad?: () => void;
};

declare global {
  interface Window {
    Tawk_API?: TawkApi;
    Tawk_LoadStart?: Date;
  }
}

/** Opens the chat window. Returns false if the widget has not loaded yet. */
function openChat() {
  const api = window.Tawk_API;
  if (!api?.maximize) return false;
  api.showWidget?.();
  api.maximize();
  return true;
}

/**
 * Tawk.to live chat. Loads only when NEXT_PUBLIC_TAWK_PROPERTY_ID and
 * NEXT_PUBLIC_TAWK_WIDGET_ID are set. Any element with a `data-open-chat`
 * attribute opens the chat window when clicked. The launcher stays hidden
 * until the visitor answers the cookie banner so the two never overlap.
 */
export function LiveChat() {
  const consent = useConsent();

  useEffect(() => {
    if (!chatEnabled) return;
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    window.Tawk_API.onLoad = () => {
      if (readConsent() === null) window.Tawk_API?.hideWidget?.();
    };

    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      if (target?.closest("[data-open-chat]") && openChat()) event.preventDefault();
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!chatEnabled || consent === undefined) return;
    const api = window.Tawk_API;
    if (consent === null) api?.hideWidget?.();
    else api?.showWidget?.();
  }, [consent]);

  if (!chatEnabled) return null;

  return (
    <Script
      id="tawk-chat"
      src={`https://embed.tawk.to/${chat.propertyId}/${chat.widgetId}`}
      strategy="afterInteractive"
    />
  );
}
