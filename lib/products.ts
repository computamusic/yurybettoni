// Mock GoSymba catalog (placeholder data — real catalog wired in a later phase).
export type Product = {
  slug: string;
  name: string;
  category: "Apparel" | "Headwear" | "Accessories" | "Bags";
  price: number;
  image: string;
  blurb: string;
  cause?: boolean; // a share supports the Foundation
  sizes?: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "symba-duffel",
    name: "GoSymba Duffel",
    category: "Bags",
    price: 55,
    image: "/images/gosymba-bag.png",
    blurb: "The everyday carry. Lightweight, structured, and marked with the Symba lion.",
    cause: true,
  },
  {
    slug: "lion-tee-vintage-white",
    name: "Lion Tee — Vintage White",
    category: "Apparel",
    price: 38,
    image: "/images/gosymba-bag.png",
    blurb: "Heavyweight cotton tee with the GoSymba lion across the chest.",
    sizes: ["S", "M", "L", "XL"],
    cause: true,
  },
  {
    slug: "performance-tee-royal",
    name: "Performance Tee — True Royal",
    category: "Apparel",
    price: 42,
    image: "/images/gosymba-bag.png",
    blurb: "Moisture-wicking court tee built for movement.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    slug: "court-cap",
    name: "Court Cap",
    category: "Headwear",
    price: 28,
    image: "/images/gosymba-bag.png",
    blurb: "Six-panel cap with an embroidered YB mark.",
  },
  {
    slug: "sweatband-pair",
    name: "Wristband Pair",
    category: "Accessories",
    price: 14,
    image: "/images/gosymba-bag.png",
    blurb: "Terry wristbands in match-day colours.",
  },
  {
    slug: "symba-hoodie",
    name: "Symba Hoodie",
    category: "Apparel",
    price: 72,
    image: "/images/gosymba-bag.png",
    blurb: "Brushed-fleece hoodie for the off-court hours.",
    sizes: ["S", "M", "L", "XL"],
    cause: true,
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
