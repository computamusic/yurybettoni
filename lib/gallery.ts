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

// A multi-shot hero set, `${prefix}-<variant>-hero.*` (e.g. colourways), for a
// crossfading separator. Drop another `${prefix}-<colour>-hero` in and it joins
// the rotation on the next build.
export function heroSetFor(prefix: string): string[] {
  return listDir()
    .filter((f) =>
      new RegExp(`^${prefix}-.+-hero\\.(jpe?g|png|webp|avif)$`, "i").test(f),
    )
    .sort()
    .map((f) => `/images/products/${f}`);
}

// ── Colourways ────────────────────────────────────────────────────────────
// A shot belongs to a colour when a known colour word appears as a hyphen
// segment in its filename (e.g. `duffel-walking-black`, `duffel-blue-hero`).
// Swatch hexes and display order are defined here; the colours offered are
// whatever the dropped-in photos actually carry.

export type ColorVariant = {
  token: string; // matched colour word, e.g. "black"
  label: string; // display label, e.g. "Black"
  swatch: string; // dot colour
  images: string[]; // this colour's shots — hero/clean first, then lifestyle
};

const PALETTE: { token: string; label: string; swatch: string }[] = [
  { token: "black", label: "Black", swatch: "#1b1b1d" },
  { token: "blue", label: "Blue", swatch: "#2f4f86" },
  { token: "grey", label: "Grey", swatch: "#9a9ca0" },
  { token: "gray", label: "Grey", swatch: "#9a9ca0" },
  { token: "sand", label: "Sand", swatch: "#cdb893" },
  { token: "white", label: "White", swatch: "#ece7dd" },
];

function colourOf(file: string): string | null {
  const stem = file.replace(/\.[a-z0-9]+$/i, "").toLowerCase();
  const segs = new Set(stem.split("-"));
  // last-defined match wins ties; iterate palette so order is deterministic
  let hit: string | null = null;
  for (const p of PALETTE) if (segs.has(p.token)) hit = p.token;
  return hit;
}

// Group a product's shots into selectable colourways, in PALETTE order.
export function colorVariantsFor(prefix: string): ColorVariant[] {
  const buckets = new Map<string, { lead: string[]; rest: string[] }>();
  for (const f of listDir()) {
    if (!f.startsWith(`${prefix}-`) || !/\.(jpe?g|png|webp|avif)$/i.test(f)) continue;
    const c = colourOf(f);
    if (!c) continue;
    const b = buckets.get(c) ?? { lead: [], rest: [] };
    (/-hero\.[a-z0-9]+$/i.test(f) ? b.lead : b.rest).push(`/images/products/${f}`);
    buckets.set(c, b);
  }
  const seen = new Set<string>();
  const out: ColorVariant[] = [];
  for (const p of PALETTE) {
    const b = buckets.get(p.token);
    if (!b || seen.has(p.label)) continue;
    seen.add(p.label);
    out.push({
      token: p.token,
      label: p.label,
      swatch: p.swatch,
      images: [...b.lead.sort(), ...b.rest.sort()],
    });
  }
  return out;
}

function labelOf(token: string | null): string {
  return PALETTE.find((p) => p.token === token)?.label ?? "";
}

// ── Studio band ───────────────────────────────────────────────────────────
// An ordered row of `${prefix}-studio-<colour>-<left|center|right>.*` shots for
// the expanding hover banner. Position in the filename sets the slot, so the
// row reads left→centre→right regardless of file order on disk.

export type StudioPanel = { token: string; label: string; src: string };

const POSITIONS = ["left", "center", "centre", "right"];
const slot = (p: string) => (p === "centre" ? 1 : POSITIONS.indexOf(p));

export function studioBandFor(prefix: string): StudioPanel[] {
  return listDir()
    .filter(
      (f) =>
        f.toLowerCase().startsWith(`${prefix}-studio-`) &&
        /\.(jpe?g|png|webp|avif)$/i.test(f),
    )
    .map((f) => {
      const segs = f.replace(/\.[a-z0-9]+$/i, "").toLowerCase().split("-");
      const pos = POSITIONS.find((p) => segs.includes(p)) ?? "";
      const token = colourOf(f);
      return { token: token ?? "", label: labelOf(token), src: `/images/products/${f}`, pos };
    })
    .filter((p) => p.pos !== "")
    .sort((a, b) => slot(a.pos) - slot(b.pos))
    .map(({ token, label, src }) => ({ token, label, src }));
}
