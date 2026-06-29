"use client";

import { useState } from "react";
import { Chevron } from "@/components/ui/Chevron";
import { useCart } from "@/components/shop/Cart";
import type { Product } from "@/lib/products";

export function AddToCart({ product, color }: { product: Product; color?: string }) {
  const { add } = useCart();
  const [size, setSize] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [added, setAdded] = useState(false);

  const sizes = product.sizes;
  const needsSize = !!sizes && sizes.length > 0;

  function handleAdd() {
    if (needsSize && !size) {
      setError(true);
      return;
    }
    setError(false);
    add(
      {
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.image,
        fit: product.fit,
        size: size ?? undefined,
        color: color ?? undefined,
      },
      1,
    );
    setAdded(true);
  }

  return (
    <div className="mt-10 border-t border-line pt-8">
      {needsSize && (
        <div>
          <div className="flex items-baseline justify-between">
            <p className="eyebrow text-ink-soft">Size</p>
            {error && (
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-clay">
                Select a size
              </p>
            )}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {sizes!.map((s) => {
              const on = s === size;
              return (
                <button
                  key={s}
                  onClick={() => {
                    setSize(s);
                    setError(false);
                    setAdded(false);
                  }}
                  aria-pressed={on}
                  className={`min-w-12 border px-4 py-3 text-sm font-semibold transition-colors ${
                    on ? "border-ink bg-ink text-bone" : "border-line text-ink-soft hover:border-ink"
                  }`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <button
        onClick={handleAdd}
        className="chev-host mt-8 inline-flex w-full items-center justify-center gap-3 bg-ink px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-bone transition-colors hover:bg-clay sm:w-auto"
      >
        {added ? "Added — add another" : "Add to bag"}
        <Chevron />
      </button>
      {added && (
        <p className="mt-4 text-sm text-mute">
          In your bag{color ? ` · ${color}` : ""}{size ? ` · size ${size}` : ""}. Open the bag any time from the header.
        </p>
      )}
    </div>
  );
}
