"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const MEDIA = [
  { img: "/images/archive-federer.jpg", cap: "With fellow players, late ’90s", span: "md:col-span-2 md:row-span-2", ratio: "aspect-[3/2]" },
  { img: "/images/hero-3.jpg", cap: "Miami Open", span: "", ratio: "aspect-[4/5]" },
  { img: "/images/legacy-africa.jpg", cap: "Africa, from the archive", span: "", ratio: "aspect-[4/5]" },
  { img: "/images/about-yury.jpg", cap: "Forehand, Miami", span: "", ratio: "aspect-[4/5]" },
  { img: "/images/hero-2.jpg", cap: "On the clay, Rome", span: "", ratio: "aspect-[4/5]" },
];

export function MediaGrid() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: number) => setOpen((i) => (i === null ? i : (i + dir + MEDIA.length) % MEDIA.length)),
    [],
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
    <section id="media" className="scroll-mt-24 border-t border-line bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">Media</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            A life in frames.
          </h2>
          <p className="mt-4 text-sm text-mute">Tap any frame to enlarge.</p>
        </Reveal>

        <RevealGroup className="mt-12 grid auto-rows-[1fr] grid-cols-2 gap-4 md:grid-cols-4">
          {MEDIA.map((m, i) => (
            <RevealItem key={m.img} className={m.span}>
              <button
                onClick={() => setOpen(i)}
                aria-label={`Enlarge: ${m.cap}`}
                className="group relative block h-full w-full cursor-zoom-in"
              >
                <div className={`relative ${m.ratio} h-full overflow-hidden bg-bone-deep`}>
                  <Image
                    src={m.img}
                    alt={m.cap}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="graded object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-night/0 transition-colors duration-300 group-hover:bg-night/20" />
                  <figcaption className="absolute bottom-3 left-3 right-3 text-left font-sans text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-light opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {m.cap}
                  </figcaption>
                </div>
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button aria-label="Close" onClick={close} className="absolute inset-0 bg-night/90 backdrop-blur-sm" />

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
                  src={MEDIA[open].img}
                  alt={MEDIA[open].cap}
                  width={1600}
                  height={1200}
                  className="graded h-auto max-h-[78svh] w-auto object-contain"
                />
              </div>
              <figcaption className="mt-4 text-center font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-light/70">
                {MEDIA[open].cap} · {open + 1}/{MEDIA.length}
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
    </section>
  );
}
