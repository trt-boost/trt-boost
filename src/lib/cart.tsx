"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/**
 * Client-side "treatment plan" cart. Because these are prescription products,
 * the cart collects what a visitor wants and hands the whole plan to a single
 * intake → a provider reviews and approves before anything is charged or
 * shipped. It is NOT a pay-now retail cart. State persists in localStorage so a
 * visitor can build a plan across pages and sessions.
 */
export type CartItem = {
  slug: string;
  name: string;
  category: string;
  route: string;
  dosage: string;
  quantity: string;
  price: number; // monthly / per-fill price for the chosen dose
  image: string;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  hydrated: boolean;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (item: CartItem, opts?: { open?: boolean }) => void;
  remove: (slug: string) => void;
  setDose: (slug: string, dosage: string, price: number, quantity: string) => void;
  has: (slug: string) => boolean;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "trtb_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Hydrate from localStorage after mount (avoids SSR mismatch). The read is
  // deferred to a task so state is synced from the external store inside a
  // callback rather than synchronously in the effect body.
  useEffect(() => {
    let cancelled = false;
    const id = window.setTimeout(() => {
      if (cancelled) return;
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) setItems(parsed);
        }
      } catch {
        /* ignore */
      }
      setHydrated(true);
    }, 0);
    return () => {
      cancelled = true;
      window.clearTimeout(id);
    };
  }, []);

  // Persist on change (only after hydration so we don't clobber stored data).
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, hydrated]);

  const add = useCallback((item: CartItem, opts?: { open?: boolean }) => {
    setItems((prev) =>
      prev.some((i) => i.slug === item.slug)
        ? prev.map((i) => (i.slug === item.slug ? item : i))
        : [...prev, item],
    );
    if (opts?.open !== false) setIsOpen(true);
  }, []);

  const remove = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  }, []);

  const setDose = useCallback(
    (slug: string, dosage: string, price: number, quantity: string) => {
      setItems((prev) =>
        prev.map((i) =>
          i.slug === slug ? { ...i, dosage, price, quantity } : i,
        ),
      );
    },
    [],
  );

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(() => {
    const has = (slug: string) => items.some((i) => i.slug === slug);
    return {
      items,
      count: items.length,
      subtotal: items.reduce((sum, i) => sum + i.price, 0),
      hydrated,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      add,
      remove,
      setDose,
      has,
      clear,
    };
  }, [items, hydrated, isOpen, add, remove, setDose, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
