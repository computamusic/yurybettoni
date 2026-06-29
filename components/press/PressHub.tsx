"use client";

import { type SyntheticEvent, useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";
import { Chevron } from "@/components/ui/Chevron";
import { PRESS, type PressItem } from "@/lib/press";

type Filter = "All" | "Tennis" | "Construction";
const FILTERS: Filter[] = ["All", "Tennis", "Construction"];

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function sourceDomain(href: string | null): string | null {
  if (!href) return null;
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

// A relevant image for each item — the source's own preview where it could be
// harvested, with a tasteful archive fallback for paywalled/PDF sources.
const IMAGE_BY_HREF: ReadonlyArray<readonly [match: string, src: string]> = [
  ["heyzine.com", "/images/press/murano.jpg"],
  ["miami-up-and-comers", "/images/press/miami-growth.jpg"],
  ["issuu.com/italkraft", "/images/press/elevate.jpg"],
  ["worldredeye.com/2025", "/images/press/modamiami.jpg"],
  ["worldredeye.com/2019", "/images/press/wynwood.jpg"],
  ["digital.modernluxury.com", "/images/press/lexus.jpg"],
  ["neighborhood-sofi", "/images/press/sofi.jpg"],
  ["sfbwmag.com", "/images/press/visionboard.jpg"],
  ["beryll.com", "/images/press/beryll.jpg"],
  ["tshubert.com", "/images/press/shubert.jpg"],
  ["tgcom24", "/images/press/tvmoda.jpg"],
  ["vertimax.com", "/images/press/vertimax.png"],
  ["lundgren-remembered", "/images/press/lundgren.jpg"],
  ["my-nick-bollettieri-book", "/images/press/bollettieri-book.jpg"],
  ["how-should-roger-federer-retire", "/images/press/federer-retire.jpg"],
  ["biofile-yury-bettoni-interview", "/images/press/biofile.jpg"],
  // sources that block scraping (paywall / JS / PDF) — themed archive stills
  ["kikapress.com", "/images/about-yury.jpg"],
  ["miamiherald.com", "/images/archive-academy.jpg"],
  ["influencer-hero.com", "/images/archive-indianwells.jpg"],
  ["tennisdirectblog", "/images/archive-champions.jpg"],
  ["tennisnow.com", "/images/archive-federer.jpg"],
  ["lastwordonsports.com", "/images/legacy-africa.jpg"],
  ["Dunlop-Sports-Announces", "/images/archive-volkl.jpg"],
  ["dunlop-product-review", "/images/about-yury.jpg"],
];

const FALLBACK_IMAGE_BY_CATEGORY: Record<PressItem["category"], string> = {
  Tennis: "/images/archive-federer.jpg",
  Construction: "/images/archive-academy.jpg",
};

function articleImage(href: string | null, category: PressItem["category"]): string | null {
  if (!href) return null;
  const hit = IMAGE_BY_HREF.find(([match]) => href.includes(match));
  return hit ? hit[1] : FALLBACK_IMAGE_BY_CATEGORY[category];
}

function videoImage(item: PressItem): string | null {
  if (item.youtube) return `https://img.youtube.com/vi/${item.youtube}/hqdefault.jpg`;
  return null;
}

// Marquee stories — rendered larger to pull the eye and the click.
const FEATURED = new Set<string>([
  "Sport, Style, and a Life of Purpose",
  "A Celebration of Art and Innovation in Wynwood",
  "From Ethiopia to Federer: Yury Bettoni’s Rise",
  "Bettoni Joins MODAMIAMI Icons",
  "Bettoni’s Journey to Italkraft",
]);

export function PressHub() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<PressItem | null>(null);

  const items = useMemo(() => {
    const sorted = [...PRESS].sort((a, b) => {
      if (a.date !== b.date) return a.date < b.date ? 1 : -1;
      return a.title.localeCompare(b.title);
    });
    return filter === "All" ? sorted : sorted.filter((p) => p.category === filter);
  }, [filter]);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  const embedSrc = active
    ? active.youtube
      ? `https://www.youtube.com/embed/${active.youtube}?autoplay=1`
      : active.vimeo
        ? `https://player.vimeo.com/video/${active.vimeo}?autoplay=1`
        : null
    : null;

  return (
    <section className="scroll-mt-24 border-t border-line bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">The Archive</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            Interviews, features &amp; film.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-mute">
            A working record across two careers — on the court and in the studio.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            {FILTERS.map((f) => {
              const on = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={on}
                  className={`px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                    on
                      ? "bg-ink text-bone"
                      : "border border-line text-ink-soft hover:border-ink hover:text-ink"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-flow-row-dense grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const featured = FEATURED.has(item.title);
            return (
              <div
                key={item.title}
                className={featured ? "sm:col-span-2" : undefined}
              >
                <PressCard item={item} featured={featured} onPlay={() => setActive(item)} />
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active && embedSrc && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Close"
              onClick={close}
              className="absolute inset-0 bg-night/90 backdrop-blur-sm"
            />

            <motion.div
              key={active.title}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative z-[1] w-full max-w-5xl"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-night shadow-2xl">
                <iframe
                  src={embedSrc}
                  title={active.title}
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mt-4 text-center font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-light/70">
                {active.title}
              </p>
            </motion.div>

            <button
              aria-label="Close"
              onClick={close}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center text-light/70 hover:text-light md:right-8 md:top-8"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function PlayGlyph() {
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-night/55 ring-1 ring-light/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 text-light">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

function CardMeta({ item }: { item: PressItem }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-mute">
      <span className="text-clay">{item.category}</span>
      <span aria-hidden className="text-line">/</span>
      <span>{formatDate(item.date)}</span>
    </div>
  );
}

function maxResThumb(item: PressItem): string | null {
  return item.youtube ? `https://img.youtube.com/vi/${item.youtube}/maxresdefault.jpg` : null;
}

// A YouTube still drops to hqdefault if no maxres frame exists.
function onThumbError(e: SyntheticEvent<HTMLImageElement>, fallback: string | null) {
  const img = e.currentTarget;
  if (fallback && img.src !== fallback) img.src = fallback;
}

function PressCard({
  item,
  featured,
  onPlay,
}: {
  item: PressItem;
  featured: boolean;
  onPlay: () => void;
}) {
  const isVideo = item.kind === "video";
  const image = isVideo ? videoImage(item) : articleImage(item.href, item.category);
  const cta = isVideo ? "Watch" : "Read";

  // Featured: a cinematic, full-bleed image with the title laid over it.
  if (featured) {
    const overlay = (
      <>
        {image ? (
          <img
            src={isVideo ? (maxResThumb(item) ?? image) : image}
            alt=""
            loading="lazy"
            onError={(e) => onThumbError(e, isVideo ? image : null)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
          />
        ) : (
          <div className="absolute inset-0 bg-night" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/55 to-night/5" />
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayGlyph />
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 flex flex-col p-7 md:p-9">
          <div className="flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-light/75">
            <span className="text-clay">{item.category}</span>
            <span aria-hidden className="text-light/30">/</span>
            <span>{formatDate(item.date)}</span>
          </div>
          <h3 className="mt-3 max-w-xl font-display text-2xl leading-[1.1] tracking-[-0.015em] text-light md:text-[1.8rem]">
            {item.title}
          </h3>
          <p className="mt-3 line-clamp-2 max-w-lg text-sm leading-relaxed text-light/75">
            {item.summary}
          </p>
          <div className="mt-5 flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-light">
            <span className="underline-draw">{cta}</span>
            <Chevron />
          </div>
        </div>
      </>
    );

    const className =
      "group relative flex h-full min-h-[22rem] w-full overflow-hidden border border-line bg-night text-left transition-colors hover:border-ink/40";

    if (isVideo) {
      return (
        <button type="button" onClick={onPlay} aria-label={`Play: ${item.title}`} className={`${className} cursor-pointer`}>
          {overlay}
        </button>
      );
    }
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
        {overlay}
      </a>
    );
  }

  // Standard: image header above a text body.
  const header = (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-night">
      {image ? (
        <img
          src={image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      ) : null}
      {isVideo && (
        <div className="absolute inset-0 flex items-center justify-center bg-night/15 transition-colors duration-300 group-hover:bg-night/30">
          <PlayGlyph />
        </div>
      )}
    </div>
  );

  const domain = sourceDomain(item.href);
  const body = (
    <div className="flex flex-1 flex-col p-6">
      <CardMeta item={item} />
      <h3 className="mt-3 font-display text-lg leading-snug tracking-[-0.01em] text-ink">
        {item.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">{item.summary}</p>
      <div className="mt-5 flex items-center justify-between gap-3">
        {isVideo ? (
          <span className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink">
            <span className="underline-draw">{cta}</span>
            <Chevron />
          </span>
        ) : (
          <>
            {domain ? (
              <span className="truncate font-mono text-[0.62rem] lowercase tracking-[0.08em] text-mute">
                {domain}
              </span>
            ) : (
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-mute">
                Archive
              </span>
            )}
            {item.href && (
              <span className="flex shrink-0 items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink">
                <span className="underline-draw">{cta}</span>
                <Chevron />
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );

  const shell =
    "group flex h-full w-full flex-col border border-line bg-bone-deep text-left transition-colors hover:border-ink/40";

  if (isVideo) {
    return (
      <button type="button" onClick={onPlay} aria-label={`Play: ${item.title}`} className={`${shell} cursor-pointer`}>
        {header}
        {body}
      </button>
    );
  }

  if (!item.href) {
    return (
      <div className="flex h-full w-full flex-col border border-line bg-bone-deep">
        {header}
        {body}
      </div>
    );
  }

  return (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={shell}>
      {header}
      {body}
    </a>
  );
}
