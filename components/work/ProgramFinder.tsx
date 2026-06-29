"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";
import { Chevron } from "@/components/ui/Chevron";
import { COURSES, getCourse } from "@/components/work/courses-data";

const FOCUS = [
  { label: "The fundamentals", slug: "the-3-ys-foundations" },
  { label: "Serve & movement", slug: "serve-and-movement" },
  { label: "The mental side", slug: "the-mental-game" },
  { label: "Match strategy", slug: "match-strategy" },
];

export function ProgramFinder() {
  const [slug, setSlug] = useState<string | null>(null);
  const course = slug ? getCourse(slug) : COURSES[0];

  return (
    <section className="border-t border-line bg-bone-deep">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">Find your starting point</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            What do you want to sharpen first?
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
          {FOCUS.map((f) => {
            const on = f.slug === slug;
            return (
              <button
                key={f.slug}
                onClick={() => setSlug(f.slug)}
                aria-pressed={on}
                className={`min-h-12 border px-3 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.12em] transition-colors sm:px-5 sm:text-[0.74rem] sm:tracking-[0.14em] ${
                  on ? "border-clay bg-clay text-bone" : "border-line text-ink-soft hover:border-ink/40"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {course && (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="mt-10 grid items-stretch gap-8 border border-line bg-bone md:grid-cols-[0.8fr_1.2fr]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-bone-deep md:aspect-auto">
                <Image
                  src="/images/hero-action.png"
                  alt="Yury Bettoni training on court"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="graded object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 md:p-10">
                <p className="eyebrow text-clay">
                  {slug ? "We'd start you with" : "Most people start here"} · {course.level}
                </p>
                <h3 className="mt-4 font-display text-3xl font-medium text-ink md:text-4xl">
                  {course.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
                  {course.summary}
                </p>
                <p className="mt-5 font-mono text-sm tabular-nums text-ink-soft">
                  ${course.price} · {course.durationLabel}
                </p>
                <Link
                  href={`/work/courses/${course.slug}`}
                  className="chev-host mt-7 inline-flex w-full items-center justify-center gap-3 bg-ink px-6 py-4 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-bone transition-colors hover:bg-clay sm:w-auto sm:px-7 sm:text-[0.78rem] sm:tracking-[0.18em]"
                >
                  View the course
                  <Chevron />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
