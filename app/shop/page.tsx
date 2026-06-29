import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { SubscribeBand } from "@/components/home/SubscribeBand";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { BrandStory } from "@/components/shop/BrandStory";
import { CauseBand } from "@/components/shop/CauseBand";

export const metadata: Metadata = {
  title: "Shop — GoSymba | Yury Bettoni",
  description:
    "GoSymba is the cause-driven line. A share of every piece supports the Alessandra Bettoni Foundation.",
};

export default function ShopPage() {
  return (
    <main>
      {/* Editorial banner — lighter than a full-bleed cinematic header. */}
      <section className="border-b border-line bg-bone pt-20">
        <div className="mx-auto max-w-(--max-content) px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-28">
          <Reveal>
            <p className="eyebrow text-clay">Shop — GoSymba</p>
            <h1
              className="mt-6 max-w-[14ch] font-display font-medium leading-[1.0] tracking-[-0.02em] text-ink"
              style={{ fontSize: "var(--text-hero)" }}
            >
              Wear the lion.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              GoSymba is the cause-driven line — a share of every piece supports the
              Alessandra Bettoni Foundation. The same lion Yury wears on tour, made for
              you.
            </p>
          </Reveal>
        </div>
      </section>

      <BrandStory />
      <ProductGrid />
      <CauseBand />
      <SubscribeBand />
    </main>
  );
}
