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
      <section className="relative flex min-h-[80svh] items-end overflow-hidden bg-night pt-20">
        <AmbientVideo
          src="/video/shop-hero.mp4"
          poster="/video/shop-hero-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,10,6,0.5) 0%, rgba(13,10,6,0.12) 35%, rgba(13,10,6,0.55) 72%, rgba(13,10,6,0.92) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-(--max-content) px-5 pb-16 md:px-8 md:pb-24">
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
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-light/80">
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
