"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  image: string;
  fit: "cover" | "contain";
  size?: string;
  qty: number;
};

type CartCtx = {
  items: CartItem[];
  count: number;
  total: number;
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  setQty: (key: string, qty: number) => void;
  remove: (key: string) => void;
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const keyOf = (slug: string, size?: string) => `${slug}__${size ?? "-"}`;

const Ctx = createContext<CartCtx | null>(null);

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used within CartProvider");
  return c;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("yb-cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem("yb-cart", JSON.stringify(items));
    } catch {}
  }, [items, hydrated]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const api = useMemo<CartCtx>(() => {
    const total = items.reduce((s, i) => s + i.price * i.qty, 0);
    const count = items.reduce((s, i) => s + i.qty, 0);
    return {
      items,
      count,
      total,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      add: (item, qty = 1) => {
        setItems((prev) => {
          const k = keyOf(item.slug, item.size);
          const found = prev.find((i) => keyOf(i.slug, i.size) === k);
          if (found)
            return prev.map((i) =>
              keyOf(i.slug, i.size) === k ? { ...i, qty: i.qty + qty } : i,
            );
          return [...prev, { ...item, qty }];
        });
        setIsOpen(true);
      },
      setQty: (k, qty) =>
        setItems((prev) =>
          prev
            .map((i) => (keyOf(i.slug, i.size) === k ? { ...i, qty } : i))
            .filter((i) => i.qty > 0),
        ),
      remove: (k) => setItems((prev) => prev.filter((i) => keyOf(i.slug, i.size) !== k)),
    };
  }, [items, isOpen]);

  return (
    <Ctx.Provider value={api}>
      {children}
      <CartDrawer />
    </Ctx.Provider>
  );
}

function CartDrawer() {
  const { items, total, isOpen, close, setQty, remove } = useCart();
  const [checkout, setCheckout] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label="Close cart"
            onClick={close}
            className="absolute inset-0 bg-night/60 backdrop-blur-[2px]"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="absolute right-0 top-0 flex h-[100svh] w-full max-w-md flex-col bg-bone shadow-2xl"
            role="dialog"
            aria-label="Shopping bag"
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <p className="eyebrow text-ink">Your bag</p>
              <button onClick={close} aria-label="Close" className="text-ink-soft hover:text-ink">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
                <p className="font-display text-2xl text-ink">Your bag is empty.</p>
                <Link href="/shop" onClick={close} className="text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-ink underline-draw">
                  Browse the line
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-5">
                  {items.map((i) => {
                    const k = keyOf(i.slug, i.size);
                    return (
                      <div key={k} className="flex gap-4 border-b border-line py-5 first:pt-0">
                        <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-bone-deep">
                          <Image
                            src={i.image}
                            alt={i.name}
                            fill
                            sizes="80px"
                            className={i.fit === "contain" ? "object-contain p-2" : "object-cover"}
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="font-display text-base text-ink">{i.name}</p>
                              {i.size && <p className="eyebrow mt-1 text-mute">Size {i.size}</p>}
                            </div>
                            <span className="font-mono text-sm tabular-nums text-ink-soft">
                              ${i.price * i.qty}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center border border-line">
                              <button
                                aria-label="Decrease quantity"
                                onClick={() => setQty(k, i.qty - 1)}
                                className="px-2.5 py-1 text-ink-soft hover:text-ink"
                              >
                                –
                              </button>
                              <span className="min-w-7 text-center font-mono text-sm tabular-nums text-ink">
                                {i.qty}
                              </span>
                              <button
                                aria-label="Increase quantity"
                                onClick={() => setQty(k, i.qty + 1)}
                                className="px-2.5 py-1 text-ink-soft hover:text-ink"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => remove(k)}
                              className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-mute hover:text-clay"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-line px-6 py-6">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-mute">Subtotal</span>
                    <span className="font-mono text-lg tabular-nums text-ink">${total}</span>
                  </div>
                  <p className="mt-2 text-xs text-mute">
                    A share of every GoSymba piece supports the Foundation.
                  </p>
                  {checkout ? (
                    <p className="mt-5 border border-line bg-bone-deep p-4 text-sm text-ink-soft">
                      Checkout is being wired up. Your bag is saved — we&apos;ll email you the
                      moment it&apos;s live.
                    </p>
                  ) : (
                    <button
                      onClick={() => setCheckout(true)}
                      className="chev-host mt-5 flex w-full items-center justify-center gap-3 bg-ink px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-bone transition-colors hover:bg-clay"
                    >
                      Checkout · ${total}
                    </button>
                  )}
                </div>
              </>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
