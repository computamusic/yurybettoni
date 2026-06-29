import fs from "node:fs";
import path from "node:path";

const DIR = path.join(process.cwd(), "public", "images", "products");

function listDir(): string[] {
  try {
    return fs.readdirSync(DIR);
  } catch {
    return [];
  }
}

// Build-time gallery: every `${prefix}-*` image (minus the `-hero` separator)
// so new shots auto-appear on the next build.
export function galleryFor(prefix: string): string[] {
  return listDir()
    .filter(
      (f) =>
        f.startsWith(`${prefix}-`) &&
        !/-hero\.(jpe?g|png|webp|avif)$/i.test(f) &&
        /\.(jpe?g|png|webp|avif)$/i.test(f),
    )
    .sort()
    .map((f) => `/images/products/${f}`);
}

// The dedicated full-bleed separator image, `${prefix}-hero.*`, if present.
export function heroFor(prefix: string): string | null {
  const f = listDir().find((x) =>
    new RegExp(`^${prefix}-hero\\.(jpe?g|png|webp|avif)$`, "i").test(x),
  );
  return f ? `/images/products/${f}` : null;
}
