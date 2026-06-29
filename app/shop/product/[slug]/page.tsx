import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Chevron } from "@/components/ui/Chevron";
import { SubscribeBand } from "@/components/home/SubscribeBand";
import { AddToCart } from "@/components/shop/AddToCart";
import { PRODUCTS, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not found — GoSymba | Yury Bettoni" };
  return {
    title: `${product.name} — GoSymba | Yury Bettoni`,
    description: product.blurb,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <main>
      <section className="bg-bone pt-20">
        <div className="mx-auto max-w-(--max-content) px-5 pt-10 md:px-8 md:pt-14">
          {/* Breadcrumb */}
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-mute transition-colors hover:text-ink"
          >
            <span className="rotate-180">
              <Chevron />
            </span>
            <span className="underline-draw">Shop</span>
          </Link>

          <div className="mt-8 grid gap-10 pb-24 md:grid-cols-2 md:gap-16 md:pb-32">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-bone-deep">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="graded object-contain p-10"
              />
              {product.cause && (
                <span className="eyebrow absolute left-5 top-5 rounded-full bg-clay/90 px-3 py-1 text-[0.6rem] text-light">
                  Supports the Foundation
                </span>
              )}
            </div>

            {/* Details */}
            <div className="md:py-4">
              <p className="eyebrow text-clay">{product.category}</p>
              <h1
                className="mt-4 font-display font-medium leading-[1.04] tracking-[-0.015em] text-ink"
                style={{ fontSize: "var(--text-display)" }}
              >
                {product.name}
              </h1>
              <p className="mt-5 font-mono text-lg tabular-nums text-ink-soft">
                ${product.price}
              </p>

              <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft">
                {product.blurb}
              </p>

              <AddToCart sizes={product.sizes} />

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

      <SubscribeBand />
    </main>
  );
}
