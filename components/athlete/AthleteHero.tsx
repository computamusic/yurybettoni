"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";

export function AthleteHero() {
  const reduce = useReducedMotion();
  const rise = (d: number) => ({
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut, delay: d } },
  });

  return (
    <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-night pt-20">
      <Image
        src="/images/hero-2.jpg"
        alt="Yury Bettoni on the clay in Rome"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_center]"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,10,6,0.55) 0%, rgba(13,10,6,0.1) 35%, rgba(13,10,6,0.55) 70%, rgba(13,10,6,0.92) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-(--max-content) px-5 pb-16 md:px-8 md:pb-24">
        <motion.p initial="hidden" animate="show" variants={rise(0.05)} className="eyebrow text-clay">
          The Athlete — Pillar 01
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="show"
          variants={rise(0.15)}
          className="mt-5 max-w-[18ch] font-display font-medium leading-[1.0] tracking-[-0.02em] text-light"
          style={{ fontSize: "var(--text-hero)" }}
        >
          The competitor who never stopped competing.
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="show"
          variants={rise(0.35)}
          className="mt-7 max-w-xl text-lg leading-relaxed text-light/80"
        >
          Born in Addis Ababa, raised across six countries, forged on the red clay of Rome
          and inside the players&apos; box of champions — the years that built the method, the
          discipline, and the man behind everything that came next.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="show"
          variants={rise(0.5)}
          className="mt-9 flex flex-wrap gap-x-8 gap-y-3"
        >
          {[
            ["#story", "The story"],
            ["#timeline", "Career timeline"],
            ["#legends", "Shared the court"],
            ["#philosophy", "The 3 Y's"],
            ["#off-court", "Off the court"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-light underline-draw"
            >
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
