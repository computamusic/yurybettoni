import fs from "node:fs";
import path from "node:path";

// Build-time gallery: collect every `${prefix}-*` image dropped into
// public/images/products so new shots auto-appear on the next build.
export function galleryFor(prefix: string): string[] {
  try {
    const dir = path.join(process.cwd(), "public", "images", "products");
    return fs
      .readdirSync(dir)
      .filter((f) => f.startsWith(`${prefix}-`) && /\.(jpe?g|png|webp|avif)$/i.test(f))
      .sort()
      .map((f) => `/images/products/${f}`);
  } catch {
    return [];
  }
}
