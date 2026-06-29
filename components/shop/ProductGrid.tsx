"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Chevron } from "@/components/ui/Chevron";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PRODUCTS, type Product } from "@/lib/products";

const CATEGORIES = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];

export function ProductGrid() {
  const [active, setActive] = useState<string>("All");

  const items = useMemo<Product[]>(
    () => (active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="pieces" className="scroll-mt-24 border-t border-line bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">The line</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            The pieces.
          </h2>
        </Reveal>

        {/* Category filter */}
        <div
          role="tablist"
          aria-label="Filter products by category"
          className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3"
        >
          {CATEGORIES.map((c) => {
            const on = c === active;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(c)}
                className={`text-[0.74rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                  on ? "text-ink" : "text-mute hover:text-ink-soft"
                }`}
              >
                <span className={on ? "underline-draw [background-size:100%_1px]" : "underline-draw"}>
                  {c}
                </span>
              </button>
            );
          })}
        </div>

        <RevealGroup key={active} className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <RevealItem key={p.slug}>
              <Link
                href={`/shop/product/${p.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-bone-deep">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="graded object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  {p.cause && (
                    <span className="eyebrow absolute left-4 top-4 rounded-full bg-clay/90 px-3 py-1 text-[0.6rem] text-light">
                      Supports the Foundation
                    </span>
                  )}
                </div>
                <div className="mt-5 flex items-start justify-between gap-4 border-b border-line pb-5">
                  <div>
                    <p className="eyebrow text-mute">{p.category}</p>
                    <h3 className="mt-2 font-display text-xl font-medium text-ink">{p.name}</h3>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <span className="font-mono text-sm tabular-nums text-ink-soft">
                      ${p.price}
                    </span>
                    <span className="text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Chevron />
                    </span>
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
