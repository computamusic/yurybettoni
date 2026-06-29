import fs from "node:fs";
import path from "node:path";

// Editorial photo collections harvested from the original yurybettoni.com
// galleries (Foundation, GoSymba, and the general site gallery). Images are
// optimised and live under public/images/gallery/<collection>/NN.jpg.
// Build-time fs glob so dropping new shots in auto-extends a gallery.

export type GalleryName = "foundation" | "gosymba" | "site";

function listCollection(name: GalleryName): string[] {
  const dir = path.join(process.cwd(), "public", "images", "gallery", name);
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
      .sort()
      .map((f) => `/images/gallery/${name}/${f}`);
  } catch {
    return [];
  }
}

export function gallery(name: GalleryName): string[] {
  return listCollection(name);
}
