"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";

// A slim section index that lives inside the hero. Once the hero scrolls past
// the main header, this same set of anchors re-appears as a bar pinned just
// below the header, with the section you're reading highlighted (scroll-spy).
// Rendered by PageHeader, which hands it the hero element to watch.
export function SectionNav({
  anchors,
  accent = "var(--color-clay)",
  heroRef,
}: {
  anchors: { href: string; label: string }[];
  accent?: string;
  heroRef: React.RefObject<HTMLElement | null>;
}) {
  const reduce = useReducedMotion();
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  // Tracks which sections are currently in the spy band, so we can pick the
  // first one in document order rather than whichever fired last.
  const visible = useRef<Set<string>>(new Set());

  const ids = anchors.map((a) => a.href.replace(/^#/, ""));

  // Reveal the pinned bar once the hero has scrolled above the header line.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      // Shrink the root from the top by the header height (5rem) so the bar
      // appears exactly as the hero's last sliver passes under the header.
      { rootMargin: "-80px 0px 0px 0px", threshold: 0 },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, [heroRef]);

  // Scroll-spy: highlight the section sitting under the pinned bar.
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const set = visible.current;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) set.add(e.target.id);
          else set.delete(e.target.id);
        }
        const next = ids.find((id) => set.has(id));
        if (next) setActive(next);
      },
      // A band a little below the bar — the section crossing it reads as active.
      { rootMargin: "-22% 0px -68% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
    // ids is derived from anchors; re-run if the anchor set changes.
  }, [ids.join("|")]);

  return (
    <AnimatePresence>
      {stuck && (
        <motion.nav
          aria-label="On this page"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: 0.32, ease: easeOut }}
          className="fixed inset-x-0 top-20 z-30 border-b border-line bg-bone/90 backdrop-blur-md"
        >
          <div className="mx-auto max-w-(--max-content) px-5 md:px-8">
            <ul className="-mx-1 flex items-center gap-x-1 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {anchors.map((a) => {
                const on = active === a.href.replace(/^#/, "");
                return (
                  <li key={a.href} className="shrink-0">
                    <a
                      href={a.href}
                      aria-current={on ? "true" : undefined}
                      className={`relative block whitespace-nowrap rounded-full px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                        on ? "text-ink" : "text-ink-soft hover:text-ink"
                      }`}
                    >
                      {on && (
                        <motion.span
                          layoutId="section-nav-pill"
                          aria-hidden
                          className="absolute inset-0 rounded-full"
                          style={{ backgroundColor: accent, opacity: 0.1 }}
                          transition={
                            reduce
                              ? { duration: 0 }
                              : { type: "spring", stiffness: 380, damping: 32, mass: 0.8 }
                          }
                        >
                          <span
                            className="absolute inset-x-3 bottom-[5px] h-px"
                            style={{ backgroundColor: accent, opacity: 0.6 }}
                          />
                        </motion.span>
                      )}
                      <span className="relative">{a.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
