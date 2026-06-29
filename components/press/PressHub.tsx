"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
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

export function PressHub() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<PressItem | null>(null);

  const items = useMemo(() => {
    const sorted = [...PRESS].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
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

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <RevealItem key={item.title}>
              <PressCard item={item} onPlay={() => setActive(item)} />
            </RevealItem>
          ))}
        </RevealGroup>
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

function PressCard({ item, onPlay }: { item: PressItem; onPlay: () => void }) {
  if (item.kind === "video") {
    const thumb = item.youtube
      ? `https://img.youtube.com/vi/${item.youtube}/hqdefault.jpg`
      : null;
    return (
      <button
        type="button"
        onClick={onPlay}
        aria-label={`Play: ${item.title}`}
        className="group flex h-full w-full cursor-pointer flex-col border border-line bg-bone-deep text-left transition-colors hover:border-ink/40"
      >
        <div className="relative aspect-video w-full overflow-hidden bg-night">
          {thumb ? (
            <img
              src={thumb}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          ) : null}
          <div className="absolute inset-0 flex items-center justify-center bg-night/15 transition-colors duration-300 group-hover:bg-night/30">
            <PlayGlyph />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <CardMeta item={item} />
          <h3 className="mt-3 font-display text-lg leading-snug tracking-[-0.01em] text-ink">
            {item.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">{item.summary}</p>
          <div className="mt-5 flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink">
            <span className="underline-draw">Watch</span>
            <Chevron />
          </div>
        </div>
      </button>
    );
  }

  const domain = sourceDomain(item.href);
  const inner = (
    <>
      <div className="flex flex-1 flex-col p-6">
        <CardMeta item={item} />
        <h3 className="mt-3 font-display text-lg leading-snug tracking-[-0.01em] text-ink">
          {item.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">{item.summary}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
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
              <span className="underline-draw">Read</span>
              <Chevron />
            </span>
          )}
        </div>
      </div>
    </>
  );

  if (!item.href) {
    return (
      <div className="flex h-full w-full flex-col border border-line bg-bone-deep">{inner}</div>
    );
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full w-full flex-col border border-line bg-bone-deep transition-colors hover:border-ink/40"
    >
      {inner}
    </a>
  );
}
