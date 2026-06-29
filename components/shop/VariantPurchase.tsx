"use client";

import { useState } from "react";
import Link from "next/link";
import { ProductGallery } from "@/components/shop/ProductGallery";
import { AddToCart } from "@/components/shop/AddToCart";
import type { Product } from "@/lib/products";
import type { ColorVariant } from "@/lib/gallery";

// The purchase block for a product sold in colourways. Owns the selected
// colour so the picker gallery, the swatch row, and the cart all stay in sync.
export function VariantPurchase({
  product,
  tagline,
  variants,
}: {
  product: Product;
  tagline: string;
  variants: ColorVariant[];
}) {
  const [idx, setIdx] = useState(0);
  const variant = variants[idx];

  return (
    <>
      {/* key resets the gallery to this colour's lead shot on every change */}
      <ProductGallery
        key={variant.token}
        images={variant.images}
        alt={`${product.name} — ${variant.label}`}
        fit={product.fit}
        cause={product.cause}
      />

      <div className="md:py-2">
        <p className="eyebrow text-clay">{product.category} · GoSymba</p>
        <h1
          className="mt-4 font-display font-medium leading-[1.0] tracking-[-0.02em] text-ink"
          style={{ fontSize: "var(--text-display)" }}
        >
          {product.name}
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">{tagline}</p>
        <p className="mt-6 font-mono text-3xl tabular-nums text-ink">${product.price}</p>

        {/* ── Colourway picker ───────────────────────────── */}
        <div className="mt-9">
          <div className="flex items-baseline gap-3">
            <p className="eyebrow text-ink-soft">Colour</p>
            <p className="text-sm text-mute">{variant.label}</p>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {variants.map((v, i) => {
              const on = i === idx;
              return (
                <button
                  key={v.token}
                  type="button"
                  onClick={() => setIdx(i)}
                  aria-pressed={on}
                  aria-label={v.label}
                  title={v.label}
                  className={`h-9 w-9 rounded-full ring-offset-2 ring-offset-bone transition-all ${
                    on ? "ring-2 ring-ink" : "ring-1 ring-line hover:ring-ink"
                  }`}
                  style={{ background: v.swatch }}
                />
              );
            })}
          </div>
        </div>

        <AddToCart product={product} color={variant.label} />

        {product.cause && (
          <p className="mt-8 max-w-md border-l-2 border-clay pl-4 text-sm leading-relaxed text-mute">
            A share of this piece supports the{" "}
            <Link href="/foundation" className="text-ink-soft underline-draw">
              Alessandra Bettoni Foundation
            </Link>
            .
          </p>
        )}
      </div>
    </>
  );
}
