// Real GoSymba catalog — names, prices, and photography pulled from the live
// store (yurybettoni.com). Commerce itself is still mocked (no backend yet).
export type Product = {
  slug: string;
  name: string;
  category: "Apparel" | "Headwear" | "Accessories" | "Bags";
  price: number;
  image: string;
  fit: "cover" | "contain";
  blurb: string;
  cause?: boolean; // a share supports the Foundation
  sizes?: string[];
};

const TEE_SIZES = ["S", "M", "L", "XL", "XXL"];

export const PRODUCTS: Product[] = [
  {
    slug: "performance-tee-true-royal",
    name: "Performance Tee — True Royal",
    category: "Apparel",
    price: 35,
    image: "/images/products/perf-royal.jpg",
    fit: "cover",
    blurb:
      "Moisture-wicking court tee in true royal, with the GoSymba lion at the chest. Built to move.",
    sizes: TEE_SIZES,
    cause: true,
  },
  {
    slug: "oversized-tee-vintage-white",
    name: "Oversized Tee — Vintage White",
    category: "Apparel",
    price: 45,
    image: "/images/products/oversized-white.jpg",
    fit: "cover",
    blurb:
      "A heavyweight, relaxed-fit cotton tee in washed vintage white. Off-court ease, on-brand.",
    sizes: TEE_SIZES,
    cause: true,
  },
  {
    slug: "performance-tee-limited-edition",
    name: "Performance Tee — Limited Edition",
    category: "Apparel",
    price: 47,
    image: "/images/products/perf-le.jpg",
    fit: "cover",
    blurb:
      "A limited run of the performance tee in match-day orange. Once they're gone, they're gone.",
    sizes: TEE_SIZES,
    cause: true,
  },
  {
    slug: "gosymba-duffel",
    name: "GoSymba Duffel",
    category: "Bags",
    price: 55,
    image: "/images/products/bag.png",
    fit: "cover",
    blurb:
      "The everyday carry — lightweight, structured, and marked with the Symba lion. Court to street.",
    cause: true,
  },
  {
    slug: "gosymba-cap",
    name: "GoSymba Cap",
    category: "Headwear",
    price: 35,
    image: "/images/products/hat.png",
    fit: "contain",
    blurb: "A clean six-panel cap in black, embroidered with the GoSymba lion.",
  },
  {
    slug: "gosymba-wristbands",
    name: "Wristbands",
    category: "Accessories",
    price: 8,
    image: "/images/products/wristbands.jpg",
    fit: "contain",
    blurb: "A terry wristband pair in match white. The smallest way to wear the lion.",
  },
  {
    slug: "gosymba-lion-plush",
    name: "GoSymba Lion",
    category: "Accessories",
    price: 27,
    image: "/images/products/lion.jpg",
    fit: "contain",
    blurb:
      "A plush Symba lion in his own GoSymba tee — and a share that goes straight to the Foundation.",
    cause: true,
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
