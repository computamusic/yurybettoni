import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Chevron, ForwardLink } from "@/components/ui/Chevron";
import { ProductGallery } from "@/components/shop/ProductGallery";
import { AddToCart } from "@/components/shop/AddToCart";
import { SubscribeBand } from "@/components/home/SubscribeBand";
import type { Product } from "@/lib/products";
import { contentFor } from "@/lib/product-content";
import { galleryFor, heroFor } from "@/lib/gallery";

const FALLBACK_HERO = "/images/clay-texture.png";

export function RichProductDetail({ product }: { product: Product }) {
  const content = contentFor(product.slug);
  const gallery = content ? galleryFor(content.galleryPrefix) : [];
  const heroImg = (content && heroFor(content.galleryPrefix)) || FALLBACK_HERO;
  const images = [product.image, ...gallery];

  const imgFit = product.fit === "contain" ? "object-contain p-8" : "object-cover";
  const hasQualityImgs = gallery.length >= 3;
  const sizeImg = gallery.length > 0 ? gallery[gallery.length - 1] : null;
  const lookbook = gallery.slice(0, 3);

  return (
    <main>
      {/* ── Purchase block ─────────────────────────────────── */}
      <section id="top" className="scroll-mt-20 bg-bone pt-20">
        <div className="mx-auto max-w-(--max-content) px-5 pt-10 md:px-8 md:pt-14">
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-mute transition-colors hover:text-ink"
          >
            <span className="rotate-180">
              <Chevron />
            </span>
            <span className="underline-draw">Shop</span>
          </Link>

          <div className="mt-8 grid gap-10 pb-20 md:grid-cols-2 md:gap-16 md:pb-28">
            <ProductGallery images={images} alt={product.name} fit={product.fit} cause={product.cause} />

            <div className="md:py-2">
              <p className="eyebrow text-clay">{product.category} · GoSymba</p>
              <h1
                className="mt-4 font-display font-medium leading-[1.0] tracking-[-0.02em] text-ink"
                style={{ fontSize: "var(--text-display)" }}
              >
                {product.name}
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                {content?.tagline ?? product.blurb}
              </p>
              <p className="mt-6 font-mono text-3xl tabular-nums text-ink">${product.price}</p>
              <AddToCart product={product} />
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
          </div>
        </div>
      </section>

      {content && (
        <>
          {/* ── Hero separator ─────────────────────────────── */}
          <section className="relative flex min-h-[58svh] items-end overflow-hidden bg-night">
            <Image src={heroImg} alt="" aria-hidden fill sizes="100vw" className="object-cover" />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(20,12,7,0.25) 0%, transparent 40%, rgba(20,12,7,0.82) 100%)" }}
            />
            <div className="relative z-10 mx-auto w-full max-w-(--max-content) px-5 pb-14 md:px-8 md:pb-20">
              <Reveal>
                <p className="eyebrow text-light/70">{content.heroEyebrow}</p>
                <h2
                  className="mt-4 max-w-[16ch] font-display font-medium leading-[1.02] tracking-[-0.015em] text-light md:text-6xl"
                  style={{ fontSize: "var(--text-display)" }}
                >
                  {content.heroLine}
                </h2>
              </Reveal>
            </div>
          </section>

          {/* ── Quality ────────────────────────────────────── */}
          <section className="bg-bone">
            <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
              <Reveal className="max-w-2xl">
                <p className="eyebrow text-clay">Why it's worth it</p>
                <h2
                  className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
                  style={{ fontSize: "var(--text-display)" }}
                >
                  Built like kit, not merch.
                </h2>
              </Reveal>

              {hasQualityImgs ? (
                <div className="mt-20 flex flex-col gap-20 md:gap-28">
                  {content.quality.map((q, i) => (
                    <Reveal key={q.h}>
                      <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                        <div className="relative aspect-[4/3] overflow-hidden bg-bone-deep">
                          <Image src={gallery[i % gallery.length]} alt={q.h} fill sizes="(max-width: 1024px) 92vw, 46vw" className="graded object-cover" />
                        </div>
                        <div>
                          <p className="font-mono text-sm text-clay">0{i + 1}</p>
                          <h3 className="mt-3 font-display text-3xl font-medium text-ink md:text-4xl">{q.h}</h3>
                          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">{q.d}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              ) : (
                <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
                  {content.quality.map((q, i) => (
                    <div key={q.h} className="bg-bone p-8 md:p-10">
                      <p className="font-mono text-sm text-clay">0{i + 1}</p>
                      <h3 className="mt-4 font-display text-2xl font-medium text-ink md:text-3xl">{q.h}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{q.d}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* ── Sizing & fit ───────────────────────────────── */}
          <section className="border-t border-line bg-bone-deep">
            <div className={`mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32 ${sizeImg ? "grid items-center gap-12 lg:grid-cols-2 lg:gap-20" : ""}`}>
              {sizeImg && (
                <Reveal>
                  <div className="relative aspect-[4/5] overflow-hidden bg-bone">
                    <Image src={sizeImg} alt={product.name} fill sizes="(max-width: 1024px) 92vw, 46vw" className="graded object-cover" />
                  </div>
                </Reveal>
              )}
              <Reveal delay={0.1} className={sizeImg ? "" : "max-w-2xl"}>
                <p className="eyebrow text-clay">Sizing &amp; fit</p>
                <h2 className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink" style={{ fontSize: "var(--text-heading)" }}>
                  {content.sizing.headline}
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">{content.sizing.body}</p>
                <ul className="mt-8 space-y-4 border-t border-line pt-7">
                  {content.sizing.points.map(([h, d]) => (
                    <li key={h} className="grid gap-1 md:grid-cols-[10rem_1fr] md:gap-6">
                      <span className="font-display text-base text-ink">{h}</span>
                      <span className="text-sm leading-relaxed text-ink-soft">{d}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>

          {/* ── What your purchase means ───────────────────── */}
          <section className="relative overflow-hidden bg-night text-light">
            <Image src="/images/savanna-light.png" alt="" aria-hidden fill sizes="100vw" className="object-cover opacity-25" />
            <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(13,10,6,0.8), rgba(13,10,6,0.7))" }} />
            <div className="relative z-10 mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
              <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
                <Reveal>
                  <p className="eyebrow" style={{ color: "#c2913b" }}>What your ${product.price} carries</p>
                  <h2 className="mt-5 font-display font-medium leading-[1.06] tracking-[-0.01em] md:text-6xl" style={{ fontSize: "var(--text-display)" }}>
                    {content.foundationHeadline}
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="max-w-md text-base leading-relaxed text-light/75">
                    GoSymba isn&apos;t merch for merch&apos;s sake. A share of every order goes to the
                    Alessandra Bettoni Foundation — funding tennis and education for young people in
                    Ethiopia and Tanzania, in memory of Yury&apos;s mother.
                  </p>
                  <div className="mt-9">
                    <Link
                      href="/foundation"
                      className="chev-host inline-flex items-center gap-3 px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-night transition-opacity hover:opacity-90"
                      style={{ background: "#c2913b" }}
                    >
                      Meet the Foundation
                      <Chevron />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ── In play (only if lifestyle shots exist) ────── */}
          {lookbook.length >= 2 && (
            <section className="bg-bone">
              <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-28">
                <Reveal className="max-w-2xl">
                  <p className="eyebrow text-clay">In play</p>
                  <h2 className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink" style={{ fontSize: "var(--text-display)" }}>
                    Worn where it counts.
                  </h2>
                </Reveal>
                <div className={`mt-12 grid gap-4 ${lookbook.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
                  {lookbook.map((img) => (
                    <Reveal key={img}>
                      <div className="relative aspect-[3/4] overflow-hidden bg-bone-deep">
                        <Image src={img} alt={product.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="graded object-cover" />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── Specs + FAQ ────────────────────────────────── */}
          <section className="border-t border-line bg-bone-deep">
            <div className="mx-auto grid max-w-(--max-content) gap-16 px-5 py-24 md:px-8 md:py-28 lg:grid-cols-2 lg:gap-24">
              <Reveal>
                <p className="eyebrow text-clay">The details</p>
                <h2 className="mt-5 font-display font-medium text-ink" style={{ fontSize: "var(--text-heading)" }}>Specs</h2>
                <dl className="mt-8 border-t border-line">
                  {content.specs.map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                      <dt className="eyebrow text-mute">{k}</dt>
                      <dd className="text-right text-sm text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="eyebrow text-clay">Good to know</p>
                <h2 className="mt-5 font-display font-medium text-ink" style={{ fontSize: "var(--text-heading)" }}>Questions</h2>
                <div className="mt-8 border-t border-line">
                  {content.faq.map(([q, a]) => (
                    <details key={q} className="group border-b border-line py-4">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-ink marker:hidden">
                        {q}
                        <span className="text-clay transition-transform duration-300 group-open:rotate-45" aria-hidden>+</span>
                      </summary>
                      <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-soft">{a}</p>
                    </details>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        </>
      )}

      {/* ── Closing CTA ────────────────────────────────────── */}
      <section className="bg-bone">
        <div className="mx-auto max-w-(--max-content) px-5 py-24 text-center md:px-8 md:py-28">
          <Reveal>
            <p className="eyebrow text-clay">Wear the lion</p>
            <h2 className="mx-auto mt-5 max-w-xl font-display font-medium leading-[1.06] tracking-[-0.015em] text-ink" style={{ fontSize: "var(--text-display)" }}>
              Add it to your bag.
            </h2>
            <div className="mt-9 flex justify-center">
              <ForwardLink href="#top">Back to the top</ForwardLink>
            </div>
          </Reveal>
        </div>
      </section>

      <SubscribeBand />
    </main>
  );
}
