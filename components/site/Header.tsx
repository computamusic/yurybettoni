"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { CartButton } from "@/components/shop/CartButton";

const NAV = [
  { label: "Athlete", href: "/athlete" },
  { label: "Press", href: "/press" },
  { label: "Legacy", href: "/foundation" },
  { label: "Work with Yury", href: "/work" },
  { label: "Shop", href: "/shop" },
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  // The active route, then the hovered item, decides where the pill rests.
  const active =
    NAV.find((n) => pathname === n.href || pathname.startsWith(`${n.href}/`))?.href ?? null;
  const highlight = hovered ?? active;
  const pillSpring = reduce
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 380, damping: 32, mass: 0.8 };

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

        <nav
          className="relative hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {NAV.map((n) => {
            const on = highlight === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                onMouseEnter={() => setHovered(n.href)}
                aria-current={active === n.href ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 ${
                  on ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="nav-pill"
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-clay/12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={pillSpring}
                  >
                    {/* a clay baseline rides under the active word — the brand's signature line */}
                    <span className="absolute inset-x-3 bottom-[7px] h-px bg-clay/55" />
                  </motion.span>
                )}
                <span className="relative">{n.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <CartButton />
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
              {NAV.map((n, i) => {
                const isActive = active === n.href;
                return (
                  <motion.div
                    key={n.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i + 0.05 }}
                  >
                    <Link
                      href={n.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center gap-3 border-b border-line py-5 font-display text-3xl transition-colors ${
                        isActive ? "text-clay" : "text-ink"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill-mobile"
                          aria-hidden
                          className="h-6 w-px bg-clay"
                        />
                      )}
                      {n.label}
                    </Link>
                  </motion.div>
                );
              })}
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
