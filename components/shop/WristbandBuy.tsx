"use client";

import { useState } from "react";
import { Chevron } from "@/components/ui/Chevron";
import { useCart } from "@/components/shop/Cart";
import type { Product } from "@/lib/products";

const PACKS = [
  {
    id: "single",
    label: "Single pair",
    detail: "One wristband pair",
    price: 8,
    slug: "gosymba-wristbands",
    name: "Wristbands",
  },
  {
    id: "two",
    label: "Two-pack",
    detail: "Two pairs · save $2",
    price: 14,
    slug: "gosymba-wristbands--2pack",
    name: "Wristbands · Two-pack",
    save: 2,
  },
] as const;

export function WristbandBuy({ product }: { product: Product }) {
  const { add } = useCart();
  const [pack, setPack] = useState<(typeof PACKS)[number]>(PACKS[0]);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    add(
      {
        slug: pack.slug,
        name: pack.name,
        price: pack.price,
        image: product.image,
        fit: product.fit,
      },
      1,
    );
    setAdded(true);
  }

  return (
    <div>
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-3xl tabular-nums text-ink">${pack.price}</span>
        {pack.id === "two" && (
          <>
            <span className="font-mono text-base text-mute line-through">$16</span>
            <span className="eyebrow rounded-full bg-clay/15 px-3 py-1 text-clay">Save $2</span>
          </>
        )}
      </div>

      {/* Pack selector */}
      <fieldset className="mt-7">
        <legend className="eyebrow text-ink-soft">Choose your pack</legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {PACKS.map((p) => {
            const on = p.id === pack.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  setPack(p);
                  setAdded(false);
                }}
                aria-pressed={on}
                className={`flex flex-col items-start border p-4 text-left transition-colors ${
                  on ? "border-ink bg-bone-deep" : "border-line hover:border-ink/40"
                }`}
              >
                <span className="flex w-full items-center justify-between">
                  <span className="font-display text-lg text-ink">{p.label}</span>
                  <span className="font-mono text-sm tabular-nums text-ink">${p.price}</span>
                </span>
                <span className="mt-1 text-xs text-mute">{p.detail}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <button
        onClick={handleAdd}
        className="chev-host mt-8 inline-flex w-full items-center justify-center gap-3 bg-ink px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-bone transition-colors hover:bg-clay"
      >
        {added ? "Added — add another" : `Add ${pack.label.toLowerCase()} to bag`}
        <Chevron />
      </button>
      {added && (
        <p className="mt-4 text-sm text-mute">
          In your bag. Open the bag from the header any time to check out.
        </p>
      )}

      {/* Quick trust row */}
      <ul className="mt-10 grid gap-4 border-t border-line pt-8 sm:grid-cols-3">
        {[
          ["Embroidered", "Stitched lion — never cracks or peels"],
          ["Tournament terry", "Absorbent cotton that actually dries"],
          ["Gives back", "A share funds the Foundation"],
        ].map(([h, d]) => (
          <li key={h}>
            <p className="font-display text-base text-ink">{h}</p>
            <p className="mt-1 text-xs leading-snug text-mute">{d}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
