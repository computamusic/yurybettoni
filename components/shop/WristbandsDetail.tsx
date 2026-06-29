import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Chevron, ForwardLink } from "@/components/ui/Chevron";
import { ProductGallery } from "@/components/shop/ProductGallery";
import { WristbandBuy } from "@/components/shop/WristbandBuy";
import { SubscribeBand } from "@/components/home/SubscribeBand";
import type { Product } from "@/lib/products";

const QUALITY = [
  {
    h: "Tournament-grade terry",
    d: "Dense cotton loop-pile that actually pulls sweat off your hand — so the racquet never slips on the big point.",
    img: "/images/products/wristbands-shoes.jpg",
    alt: "GoSymba wristband on the clay",
  },
  {
    h: "Embroidered, never printed",
    d: "The Symba lion is stitched into the band, thread by thread. It won't crack, peel or fade in the wash — match after match, season after season.",
    img: "/images/products/wristbands-product-shot.jpg",
    alt: "Close detail of the embroidered GoSymba lion",
  },
  {
    h: "Holds its shape",
    d: "A ribbed knit cuff that stretches over the hand and springs back snug. No sagging, no slipping down the forearm.",
    img: "/images/products/wristbands.jpg",
    alt: "The GoSymba wristband pair",
  },
];

const SPECS = [
  ["Material", "Cotton terry loop-pile"],
  ["Dimensions", "≈ 3 in tall · 3.5 in relaxed width"],
  ["Fit", "One size — stretches junior to adult"],
  ["Sold as", "A matched pair"],
  ["Logo", "Embroidered Symba lion"],
  ["Care", "Machine wash cold · air dry"],
  ["Gives back", "A share funds the Foundation"],
];

const FAQ = [
  ["Is it really one size?", "Yes. The knit cuff stretches to sit snug on most wrists, from juniors to adults. Worn at the wrist or pushed up the forearm, it stays put."],
  ["Will the lion crack or peel?", "No. It's embroidered, not printed — stitched into the terry, so it survives every wash and every match."],
  ["How does the two-pack work?", "Two pairs for $14 instead of $16 — two dollars off the total, applied automatically when you choose the two-pack."],
  ["What does my purchase support?", "A share of every GoSymba order goes to the Alessandra Bettoni Foundation, funding tennis and education for young people in Ethiopia and Tanzania."],
];

export function WristbandsDetail({ product, images }: { product: Product; images: string[] }) {
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
              <p className="eyebrow text-clay">Accessories · GoSymba</p>
              <h1
                className="mt-4 font-display font-medium leading-[1.0] tracking-[-0.02em] text-ink"
                style={{ fontSize: "var(--text-display)" }}
              >
                The Wristbands
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                The smallest piece in the line — and the one that says the most. Tournament
                terry, an embroidered lion, and a quiet nod to the cause on every changeover.
              </p>
              <div className="mt-9">
                <WristbandBuy product={product} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Clay hero separator ────────────────────────────── */}
      <section className="relative flex min-h-[60svh] items-end overflow-hidden bg-night">
        <Image
          src="/images/products/wristband-hero.jpg"
          alt="GoSymba wristbands on the clay"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(20,12,7,0.25) 0%, transparent 40%, rgba(20,12,7,0.8) 100%)" }}
        />
        <div className="relative z-10 mx-auto w-full max-w-(--max-content) px-5 pb-14 md:px-8 md:pb-20">
          <Reveal>
            <p className="eyebrow text-light/70">Made for the clay</p>
            <h2 className="mt-4 max-w-[16ch] font-display font-medium leading-[1.02] tracking-[-0.015em] text-light md:text-6xl" style={{ fontSize: "var(--text-display)" }}>
              The detail that gives you away as a player.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* ── Quality / craftsmanship ────────────────────────── */}
      <section className="bg-bone">
        <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-clay">Why they're worth it</p>
            <h2
              className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
              style={{ fontSize: "var(--text-display)" }}
            >
              Built like kit, not merch.
            </h2>
          </Reveal>

          <div className="mt-20 flex flex-col gap-20 md:gap-28">
            {QUALITY.map((q, i) => (
              <Reveal key={q.h}>
                <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-bone-deep">
                    <Image
                      src={q.img}
                      alt={q.alt}
                      fill
                      sizes="(max-width: 1024px) 92vw, 46vw"
                      className={`graded ${q.img === "/images/products/wristbands.jpg" || q.img === "/images/products/wristbands-product-shot.jpg" ? "object-cover" : "object-cover"}`}
                    />
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
        </div>
      </section>

      {/* ── Sizing & fit ───────────────────────────────────── */}
      <section className="border-t border-line bg-bone-deep">
        <div className="mx-auto grid max-w-(--max-content) items-center gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-bone">
              <Image
                src="/images/products/wristbands-woman-sitting.jpg"
                alt="A player wearing the GoSymba wristband"
                fill
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="graded object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-clay">Sizing & fit</p>
            <h2
              className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
              style={{ fontSize: "var(--text-heading)" }}
            >
              One size, honestly one size.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Each band runs about three inches tall with a relaxed width near three-and-a-half
              inches. The ribbed knit stretches over the hand and pulls back snug — so the same
              pair fits a junior&apos;s wrist and an adult&apos;s forearm alike.
            </p>
            <ul className="mt-8 space-y-4 border-t border-line pt-7">
              {[
                ["At the wrist", "Classic placement — sits just below the hand to catch sweat before it reaches your grip."],
                ["Up the forearm", "Push it higher for the tour look; the cuff holds without rolling down."],
                ["Junior to adult", "The stretch covers small and full-size wrists from the same pair."],
              ].map(([h, d]) => (
                <li key={h} className="grid gap-1 md:grid-cols-[10rem_1fr] md:gap-6">
                  <span className="font-display text-base text-ink">{h}</span>
                  <span className="text-sm leading-relaxed text-ink-soft">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── What your purchase means (Foundation) ──────────── */}
      <section className="relative overflow-hidden bg-night text-light">
        <Image
          src="/images/savanna-light.png"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(13,10,6,0.8), rgba(13,10,6,0.7))" }} />
        <div className="relative z-10 mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <Reveal>
              <p className="eyebrow" style={{ color: "#c2913b" }}>
                What your $8 carries
              </p>
              <h2 className="mt-5 font-display font-medium leading-[1.06] tracking-[-0.01em] md:text-6xl" style={{ fontSize: "var(--text-display)" }}>
                A pair of wristbands. A week on court for a kid who has neither.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-base leading-relaxed text-light/75">
                GoSymba isn&apos;t merch for merch&apos;s sake. A share of every order goes to the
                Alessandra Bettoni Foundation — funding tennis and education for young people in
                Ethiopia and Tanzania, in memory of Yury&apos;s mother. The smallest thing you can
                buy here still opens a door that stays open.
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

      {/* ── In play ────────────────────────────────────────── */}
      <section className="bg-bone">
        <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-28">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-clay">In play</p>
            <h2 className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink" style={{ fontSize: "var(--text-display)" }}>
              Worn where it counts.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["/images/products/wristbands-woman.jpg", "Match point"],
              ["/images/products/wristbands-man.jpg", "Between serves"],
              ["/images/products/wristbands-bag.jpg", "Packed for the open"],
            ].map(([img, cap]) => (
              <Reveal key={img}>
                <figure className="relative aspect-[3/4] overflow-hidden bg-bone-deep">
                  <Image src={img} alt={cap} fill sizes="(max-width: 768px) 100vw, 33vw" className="graded object-cover" />
                  <figcaption className="absolute bottom-4 left-4 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-light/90">
                    {cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specs + FAQ ────────────────────────────────────── */}
      <section className="border-t border-line bg-bone-deep">
        <div className="mx-auto grid max-w-(--max-content) gap-16 px-5 py-24 md:px-8 md:py-28 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="eyebrow text-clay">The details</p>
            <h2 className="mt-5 font-display font-medium text-ink" style={{ fontSize: "var(--text-heading)" }}>
              Specs
            </h2>
            <dl className="mt-8 border-t border-line">
              {SPECS.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                  <dt className="eyebrow text-mute">{k}</dt>
                  <dd className="text-right text-sm text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow text-clay">Good to know</p>
            <h2 className="mt-5 font-display font-medium text-ink" style={{ fontSize: "var(--text-heading)" }}>
              Questions
            </h2>
            <div className="mt-8 border-t border-line">
              {FAQ.map(([q, a]) => (
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

      {/* ── Closing CTA ────────────────────────────────────── */}
      <section className="bg-bone">
        <div className="mx-auto max-w-(--max-content) px-5 py-24 text-center md:px-8 md:py-28">
          <Reveal>
            <p className="eyebrow text-clay">Wear the lion</p>
            <h2 className="mx-auto mt-5 max-w-xl font-display font-medium leading-[1.06] tracking-[-0.015em] text-ink" style={{ fontSize: "var(--text-display)" }}>
              Grab a pair. Or two, and save.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Two pairs for $14 — keep one, gift one, and the Foundation feels both.
            </p>
            <div className="mt-9 flex justify-center">
              <ForwardLink href="#top">Back to the top to choose your pack</ForwardLink>
            </div>
          </Reveal>
        </div>
      </section>

      <SubscribeBand />
    </main>
  );
}
