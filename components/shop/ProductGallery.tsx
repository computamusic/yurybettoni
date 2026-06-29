"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

export function ProductGallery({
  images,
  alt,
  fit = "cover",
  cause,
}: {
  images: string[];
  alt: string;
  fit?: "cover" | "contain";
  cause?: boolean;
}) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const fitClass = fit === "contain" ? "object-contain p-10" : "object-cover";

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoom(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [zoom]);

  const src = images[active] ?? images[0];

  return (
    <div>
      <button
        type="button"
        onClick={() => setZoom(true)}
        aria-label="Zoom image"
        className="group relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden bg-bone-deep"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt={alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`graded ${fitClass}`}
            />
          </motion.div>
        </AnimatePresence>
        {cause && (
          <span className="eyebrow absolute left-5 top-5 z-10 rounded-full bg-clay/90 px-3 py-1 text-[0.6rem] text-light">
            Supports the Foundation
          </span>
        )}
      </button>

      {images.length > 1 && (
        <div className="-mx-5 mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1 sm:mx-0 sm:grid sm:grid-cols-5 sm:overflow-visible sm:px-0 sm:pb-0">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              aria-current={i === active}
              className={`relative aspect-square w-[4.75rem] shrink-0 snap-start overflow-hidden bg-bone-deep transition-opacity sm:w-auto ${
                i === active ? "ring-1 ring-ink" : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="120px"
                className={`graded ${fit === "contain" ? "object-contain p-2" : "object-cover"}`}
              />
            </button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {zoom && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button aria-label="Close" onClick={() => setZoom(false)} className="absolute inset-0 bg-night/90 backdrop-blur-sm" />
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative z-[1] max-h-[88svh] w-auto max-w-4xl"
            >
              <Image
                src={src}
                alt={alt}
                width={1500}
                height={1875}
                className="graded h-auto max-h-[88svh] w-auto object-contain"
              />
            </motion.div>
            <button
              aria-label="Close"
              onClick={() => setZoom(false)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center text-light/70 hover:text-light md:right-8 md:top-8"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" /></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
