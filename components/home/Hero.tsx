"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Chevron } from "@/components/ui/Chevron";
import { Magnetic } from "@/components/ui/Magnetic";
import { easeOut } from "@/lib/motion";

const SLIDES = [
  { src: "/images/hero-3.jpg", alt: "Yury Bettoni striking a forehand" },
  { src: "/images/hero-2.jpg", alt: "Yury Bettoni on the clay in Rome" },
  { src: "/images/hero-1.jpg", alt: "Yury Bettoni on court at the Miami Open" },
];

const HEADLINE = ["Be the architect", "of your own", "destiny."];

export function Hero() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 5200);
    return () => clearInterval(id);
  }, [reduce]);

  const rise = (delay: number) => ({
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut, delay } },
  });
  const lineWrap = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const line = {
    hidden: { y: reduce ? 0 : "110%" },
    show: { y: "0%", transition: { duration: 0.9, ease: easeOut } },
  };

  return (
    <section className="relative w-full overflow-hidden bg-bone">
      {/* Slideshow — slow cross-fade */}
      <div className="absolute inset-0">
        {SLIDES.map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt={i === idx ? s.alt : ""}
            fill
            priority={i === 0}
            sizes="100vw"
            className="graded object-cover object-[68%_center] transition-opacity duration-[1600ms] ease-in-out"
            style={{ opacity: i === idx ? 1 : 0 }}
          />
        ))}
      </div>

      {/* Fade to background — toward the text. Horizontal on tablet/desktop, vertical on mobile. */}
      <div
        aria-hidden
        className="absolute inset-0 md:hidden"
        style={{ background: "linear-gradient(0deg, var(--color-bone) 14%, rgba(0,0,0,0) 64%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, var(--color-bone) 20%, color-mix(in srgb, var(--color-bone) 55%, transparent) 42%, rgba(0,0,0,0) 70%)",
        }}
      />
      {/* Top scrim so the transparent header stays legible over imagery */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-28"
        style={{ background: "linear-gradient(180deg, var(--color-bone) 0%, rgba(0,0,0,0) 100%)" }}
      />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-(--max-content) flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-0">
        <motion.div initial="hidden" animate="show" variants={rise(0.05)}>
          <span className="eyebrow text-clay">Former pro · Coach to champions · Builder · Son</span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={lineWrap}
          className="mt-6 max-w-[14ch] font-display font-medium leading-[1.0] tracking-[-0.02em] text-ink"
          style={{ fontSize: "var(--text-hero)" }}
        >
          {HEADLINE.map((l, i) => (
            <span key={i} className="block overflow-hidden pb-[0.08em]">
              <motion.span variants={line} className="block">
                {i === 2 ? <span className="italic text-clay">{l}</span> : l}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="show"
          variants={rise(0.7)}
          className="mt-8 h-px w-24 origin-left bg-ink/30"
        />

        <motion.p
          initial="hidden"
          animate="show"
          variants={rise(0.8)}
          className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft"
        >
          From the clay of Rome to the red earth of Africa — discipline made into a
          life, a legacy, and a way forward for others.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={rise(0.9)}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <Magnetic>
            <Link
              href="#paths"
              className="chev-host inline-flex items-center gap-3 bg-ink px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-bone transition-colors hover:bg-clay"
            >
              Enter his world
              <Chevron />
            </Link>
          </Magnetic>
          <Link
            href="/athlete#story"
            className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-ink underline-draw"
          >
            Read his story
          </Link>
        </motion.div>

        {/* Slide caption + dots */}
        <div className="mt-12 flex items-center gap-4 md:absolute md:bottom-8 md:right-8 md:mt-0">
          <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-mute">
            Miami Open · Rome
          </span>
          <div className="flex gap-1.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.src}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === idx ? "w-6 bg-clay" : "w-1.5 bg-ink/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
