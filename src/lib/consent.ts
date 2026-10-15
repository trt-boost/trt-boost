"use client";

import { useSyncExternalStore } from "react";

/**
 * Cookie-consent state, stored in localStorage. "all" allows performance /
 * analytics cookies (GA4); "essential" allows only what the site needs to
 * work. Until a choice is made nothing non-essential loads.
 */
export type Consent = "all" | "essential";

const KEY = "trtboost-cookie-consent";
const EVENT = "trtboost:consent-change";

export function readConsent(): Consent | null {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === "all" || v === "essential" ? v : null;
  } catch {
    return null;
  }
}

export function writeConsent(value: Consent) {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    /* storage unavailable (private mode etc.) — banner simply shows again */
  }
  window.dispatchEvent(new CustomEvent(EVENT));
}

/** Global Privacy Control signal (navigator.globalPrivacyControl). */
export function hasGpcSignal(): boolean {
  const n = navigator as Navigator & { globalPrivacyControl?: boolean };
  return n.globalPrivacyControl === true;
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

/** `undefined` during server render / before hydration; `null` when no choice yet. */
export function useConsent(): Consent | null | undefined {
  return useSyncExternalStore(subscribe, readConsent, () => undefined);
}

/** True only when the visitor accepted all cookies and sends no GPC opt-out. */
export function useAnalyticsAllowed(): boolean {
  const consent = useConsent();
  const gpc = useSyncExternalStore(subscribe, hasGpcSignal, () => false);
  return consent === "all" && !gpc;
}
