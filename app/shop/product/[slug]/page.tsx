import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Chevron } from "@/components/ui/Chevron";
import { SubscribeBand } from "@/components/home/SubscribeBand";
import { AddToCart } from "@/components/shop/AddToCart";
import { ProductGallery } from "@/components/shop/ProductGallery";
import { WristbandsDetail } from "@/components/shop/WristbandsDetail";
import { PRODUCTS, getProduct } from "@/lib/products";
import { galleryFor } from "@/lib/gallery";

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

  const extra = product.galleryPrefix ? galleryFor(product.galleryPrefix) : [];
  const images = [product.image, ...extra.filter((i) => i !== product.image)];

  if (product.slug === "gosymba-wristbands") {
    return <WristbandsDetail product={product} images={images} />;
  }

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
            {/* Gallery */}
            <ProductGallery
              images={images}
              alt={product.name}
              fit={product.fit}
              cause={product.cause}
            />

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

      <SubscribeBand />
    </main>
  );
}
