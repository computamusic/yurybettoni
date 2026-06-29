"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";

// Reusable cinematic pillar header (full-bleed image, dark, light text).
export function PageHeader({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  imagePosition = "center",
  anchors,
  accent = "var(--color-clay)",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  anchors?: { href: string; label: string }[];
  accent?: string;
}) {
  const reduce = useReducedMotion();
  const rise = (d: number) => ({
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut, delay: d } },
  });

  return (
    <section className="relative flex min-h-[80svh] items-end overflow-hidden bg-night pt-20">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,10,6,0.5) 0%, rgba(13,10,6,0.12) 35%, rgba(13,10,6,0.55) 72%, rgba(13,10,6,0.92) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-(--max-content) px-5 pb-16 md:px-8 md:pb-24">
        <motion.p initial="hidden" animate="show" variants={rise(0.05)} className="eyebrow" style={{ color: accent }}>
          {eyebrow}
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="show"
          variants={rise(0.15)}
          className="mt-5 max-w-[18ch] font-display font-medium leading-[1.0] tracking-[-0.02em] text-light"
          style={{ fontSize: "var(--text-hero)" }}
        >
          {title}
        </motion.h1>
        {lead && (
          <motion.p
            initial="hidden"
            animate="show"
            variants={rise(0.35)}
            className="mt-7 max-w-xl text-lg leading-relaxed text-light/80"
          >
            {lead}
          </motion.p>
        )}
        {anchors && anchors.length > 0 && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={rise(0.5)}
            className="mt-9 flex flex-wrap gap-x-8 gap-y-3"
          >
            {anchors.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-light underline-draw"
              >
                {a.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
