"use client";

import { useCart } from "@/components/shop/Cart";

export function CartButton({ className = "" }: { className?: string }) {
  const { count, open } = useCart();
  return (
    <button
      type="button"
      onClick={open}
      aria-label={`Open bag${count ? `, ${count} item${count > 1 ? "s" : ""}` : ""}`}
      className={`relative inline-flex h-9 w-9 items-center justify-center text-inherit transition-colors hover:text-clay ${className}`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M6 7h12l-1 13H7L6 7Z" strokeLinejoin="round" />
        <path d="M9 7a3 3 0 0 1 6 0" strokeLinecap="round" />
      </svg>
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-clay px-1 font-mono text-[0.6rem] font-medium text-bone">
          {count}
        </span>
      )}
    </button>
  );
}
