"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";

// A cinematic full-bleed band on the generated clay-court texture —
// the philosophy, set on the surface that made him. Subtle scroll parallax.
export function ClayQuote() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[70svh] items-center overflow-hidden bg-night"
    >
      <motion.div aria-hidden style={{ y }} className="absolute inset-0 -top-[8%] h-[116%]">
        <Image src="/images/clay-texture.png" alt="" fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,12,7,0.5) 0%, rgba(20,12,7,0.35) 45%, rgba(20,12,7,0.72) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-(--max-content) px-5 py-24 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-light/70">The philosophy</p>
          <blockquote className="mt-6">
            <p className="font-display text-3xl font-normal leading-[1.15] tracking-[-0.01em] text-light md:text-5xl">
              &ldquo;Comparing yourself to others will only limit your ability to reach
              your <span className="italic">higher level</span>.&rdquo;
            </p>
            <footer className="eyebrow mt-7 text-light/60">Yury Bettoni</footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
