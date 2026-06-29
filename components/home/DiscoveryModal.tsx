"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Chevron } from "@/components/ui/Chevron";

export type Discovery = {
  eyebrow: string;
  title: string;
  body: string;
  detail?: string;
  image?: string;
  imageAlt?: string;
  href: string;
  cta: string;
  external?: boolean;
};

export function DiscoveryModal({
  item,
  onClose,
}: {
  item: Discovery | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!item) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previousFocus?.focus();
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="discovery-title"
        >
          <button
            type="button"
            aria-label="Close story"
            onClick={onClose}
            className="absolute inset-0 bg-night/85 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.99 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`relative z-[1] grid max-h-[92svh] w-full max-w-5xl overflow-y-auto bg-bone shadow-2xl ${
              item.image ? "md:grid-cols-[0.9fr_1.1fr]" : "max-w-2xl"
            }`}
          >
            {item.image && (
              <div className="relative min-h-[15rem] overflow-hidden bg-night sm:min-h-[20rem] md:min-h-[34rem]">
                <Image
                  src={item.image}
                  alt={item.imageAlt ?? ""}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="graded object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/55 via-transparent to-night/10" />
              </div>
            )}

            <div className="flex flex-col justify-center p-6 sm:p-10 md:p-14">
              <p className="eyebrow text-clay">{item.eyebrow}</p>
              <h2
                id="discovery-title"
                className="mt-4 font-display text-4xl font-medium leading-[1.02] tracking-[-0.02em] text-ink sm:text-5xl"
              >
                {item.title}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-soft">{item.body}</p>
              {item.detail && (
                <p className="mt-5 border-l border-clay pl-5 font-display text-lg leading-relaxed text-ink/75">
                  {item.detail}
                </p>
              )}
              <Link
                href={item.href}
                onClick={onClose}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="chev-host mt-8 inline-flex w-full items-center justify-center gap-3 bg-ink px-7 py-4 text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-bone transition-colors hover:bg-clay sm:w-fit"
              >
                {item.cta}
                <Chevron />
              </Link>
            </div>

            <button
              ref={closeRef}
              type="button"
              aria-label="Close story"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-night/75 text-light backdrop-blur-sm transition-colors hover:bg-clay sm:right-5 sm:top-5"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
