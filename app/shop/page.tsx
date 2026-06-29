import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { SubscribeBand } from "@/components/home/SubscribeBand";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { BrandStory } from "@/components/shop/BrandStory";
import { AmbientVideo } from "@/components/ui/AmbientVideo";
import { Lookbook } from "@/components/shop/Lookbook";
import { GoSymbaGallery } from "@/components/shop/GoSymbaGallery";
import { CauseBand } from "@/components/shop/CauseBand";

export const metadata: Metadata = {
  title: "Shop — GoSymba | Yury Bettoni",
  description:
    "GoSymba is the cause-driven line. A share of every piece supports the Alessandra Bettoni Foundation.",
};

export default function ShopPage() {
  return (
    <main>
      {/* Cinematic video hero — the GoSymba brand film as a quiet backdrop. */}
      <section className="relative overflow-hidden bg-night pt-20 md:flex md:min-h-[80svh] md:items-end">
        <AmbientVideo
          src="/video/shop-hero.mp4"
          poster="/video/shop-hero-poster.jpg"
          className="absolute inset-x-0 top-0 h-[52svh] w-full object-cover md:inset-0 md:h-full"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[52svh] md:inset-0 md:h-auto"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,10,6,0.32) 0%, rgba(13,10,6,0.06) 42%, rgba(13,10,6,0.96) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto mt-[38svh] w-full max-w-(--max-content) px-5 pb-14 pt-16 md:mt-0 md:px-8 md:pb-24 md:pt-0">
          <Reveal>
            <p className="eyebrow text-clay">Shop — GoSymba</p>
            <h1
              className="mt-5 max-w-[14ch] font-display font-medium leading-[1.0] tracking-[-0.02em] text-light"
              style={{ fontSize: "var(--text-hero)" }}
            >
              Wear the lion.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-light/75 md:mt-7 md:text-lg md:text-light/80">
              GoSymba is the cause-driven line — a share of every piece supports the
              Alessandra Bettoni Foundation. The same lion Yury wears on tour, made for
              you.
            </p>
          </Reveal>
        </div>
      </section>

      <BrandStory />
      <ProductGrid />
      <Lookbook />
      <GoSymbaGallery />
      <CauseBand />
      <SubscribeBand />
    </main>
  );
}
