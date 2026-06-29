"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV = [
  { label: "Athlete", href: "/athlete" },
  { label: "Legacy", href: "/foundation" },
  { label: "Work with Yury", href: "/work" },
  { label: "Shop", href: "/shop" },
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solidHeader = solid || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        solidHeader
          ? "border-b border-line bg-bone/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-(--max-content) items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="Yury Bettoni — home" className="flex items-center">
          <Image
            src="/images/yb-logo.png"
            alt="Yury Bettoni"
            width={1517}
            height={1091}
            priority
            className="h-9 w-auto dark:invert md:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-ink-soft underline-draw transition-colors hover:text-ink"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle />
          <Link
            href="/subscribe"
            className="hidden bg-ink px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-bone transition-colors hover:bg-clay sm:inline-block"
          >
            Subscribe
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 h-[100svh] bg-bone lg:hidden"
          >
            <nav className="flex h-full flex-col px-5 pb-10 pt-28">
              {NAV.map((n, i) => (
                <motion.div
                  key={n.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.05 }}
                >
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-5 font-display text-3xl text-ink"
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/subscribe"
                  onClick={() => setOpen(false)}
                  className="flex-1 bg-ink px-6 py-4 text-center text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-bone"
                >
                  Subscribe
                </Link>
                <span className="flex items-center gap-2 border border-line px-3 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                  <ThemeToggle className="h-6 w-6" />
                  Theme
                </span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
