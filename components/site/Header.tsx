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

  // At the very top, the header floats over each page's full-bleed dark hero,
  // so its controls read light. Once the solid bar appears (or on the few
  // light-topped pages), they flip to ink. In dark theme everything is light
  // already, so this only changes the light-theme top state.
  const lightTop = pathname === "/subscribe" || pathname === "/contact";
  const onDark = !solidHeader && !lightTop;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        solidHeader
          ? "border-b border-line bg-bone/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      {/* Top scrim — darkens the hero behind the floating nav so the light
          text reads clearly. Fades out once the solid bar takes over. */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-32 transition-opacity duration-500 ${
          onDark ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(180deg, rgba(8,6,3,0.7) 0%, rgba(8,6,3,0.4) 40%, rgba(8,6,3,0) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto flex h-20 max-w-(--max-content) items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="Yury Bettoni — home" className="flex items-center">
          <Image
            src="/images/yb-logo.png"
            alt="Yury Bettoni"
            width={1517}
            height={1091}
            priority
            className={`h-9 w-auto transition-[filter] duration-300 md:h-10 ${
              onDark ? "invert" : "dark:invert"
            }`}
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
                  on
                    ? onDark
                      ? "text-light"
                      : "text-ink"
                    : onDark
                      ? "text-light/70 hover:text-light"
                      : "text-ink-soft hover:text-ink"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="nav-pill"
                    aria-hidden
                    className={`absolute inset-0 rounded-full ${onDark ? "bg-light/10" : "bg-clay/12"}`}
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

        <div
          className={`flex items-center gap-2 transition-colors duration-300 sm:gap-3 ${
            onDark ? "text-light" : "text-ink"
          }`}
        >
          <CartButton />
          <ThemeToggle />
          <Link
            href="/subscribe"
            className={`hidden px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors sm:inline-block ${
              onDark
                ? "border border-light/40 text-light hover:bg-light hover:text-ink"
                : "border border-ink bg-ink text-bone hover:border-clay hover:bg-clay"
            }`}
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
            <span className={`h-px w-6 transition-transform ${onDark ? "bg-light" : "bg-ink"} ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-6 transition-transform ${onDark ? "bg-light" : "bg-ink"} ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
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
            <nav className="flex h-full flex-col overflow-y-auto px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-24 sm:pt-28">
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
                      className={`flex items-center gap-3 border-b border-line py-4 font-display text-[1.7rem] transition-colors sm:py-5 sm:text-3xl ${
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
              <div className="mt-7 flex flex-col gap-3 min-[380px]:flex-row min-[380px]:items-center">
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
