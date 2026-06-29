"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export type Photo = { src: string; cap?: string };

// Reusable editorial photo grid + lightbox.
// Grid masonry via column-count; click any frame to open a keyboard-navigable viewer.
// Used by the Foundation and GoSymba galleries (and anywhere a photo wall is needed).
export function PhotoGallery({
  photos,
  accent = "var(--color-clay)",
}: {
  photos: Photo[];
  accent?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: number) =>
      setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, go]);

  return (
    <>
      <RevealGroup className="columns-2 gap-3 md:columns-3 md:gap-4 [&>*]:mb-3 md:[&>*]:mb-4">
        {photos.map((p, i) => (
          <RevealItem key={p.src} className="break-inside-avoid">
            <button
              onClick={() => setOpen(i)}
              aria-label={p.cap ? `Enlarge: ${p.cap}` : "Enlarge photo"}
              className="group relative block w-full cursor-zoom-in overflow-hidden bg-bone-deep"
            >
              <Image
                src={p.src}
                alt={p.cap ?? ""}
                width={1000}
                height={1250}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="graded h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-night/0 transition-colors duration-300 group-hover:bg-night/15" />
              {p.cap && (
                <span className="absolute bottom-3 left-3 right-3 text-left font-sans text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-light opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {p.cap}
                </span>
              )}
            </button>
          </RevealItem>
        ))}
      </RevealGroup>

      <AnimatePresence>
        {open !== null && (
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
            <button
              aria-label="Previous"
              onClick={() => go(-1)}
              className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center text-light/70 hover:text-light md:left-8"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>

            <motion.figure
              key={open}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative z-[1] max-h-[86svh] w-auto max-w-5xl"
            >
              <div className="relative max-h-[78svh] overflow-hidden">
                <Image
                  src={photos[open].src}
                  alt={photos[open].cap ?? ""}
                  width={1600}
                  height={1200}
                  className="graded h-auto max-h-[78svh] w-auto object-contain"
                />
              </div>
              <figcaption className="mt-4 text-center font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-light/70">
                {photos[open].cap ? `${photos[open].cap} · ` : ""}
                <span style={{ color: accent }}>
                  {open + 1}/{photos.length}
                </span>
              </figcaption>
            </motion.figure>

            <button
              aria-label="Next"
              onClick={() => go(1)}
              className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center text-light/70 hover:text-light md:right-8"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button
              aria-label="Close"
              onClick={close}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center text-light/70 hover:text-light md:right-8 md:top-8"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" /></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
