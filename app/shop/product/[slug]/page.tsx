import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WristbandsDetail } from "@/components/shop/WristbandsDetail";
import { RichProductDetail } from "@/components/shop/RichProductDetail";
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

  if (product.slug === "gosymba-wristbands") {
    const extra = galleryFor("wristbands");
    const images = [product.image, ...extra.filter((i) => i !== product.image)];
    return <WristbandsDetail product={product} images={images} />;
  }

  return <RichProductDetail product={product} />;
}
