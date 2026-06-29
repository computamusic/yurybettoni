"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { easeLine } from "@/lib/motion";

// Persists across template remounts; resets only on a full page reload.
// Lets the very first paint belong to the hero's own "Baseline" load sequence,
// so the page transition plays only on client-side navigations.
let firstLoad = true;

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const initial = firstLoad;

  // Flip the flag AFTER commit, never during render: mutating module state
  // mid-render makes React's dev double-render read different values on its
  // two passes, so the committed HTML stops matching the server's → hydration
  // mismatch. An effect runs once, post-hydration, where this is safe.
  useEffect(() => {
    firstLoad = false;
  }, []);

  if (initial) return <>{children}</>;

  // The page crossfade is handled by the browser (View Transitions). All this
  // template adds on navigation is the brand's "Baseline" — a clay hairline
  // that draws across the top as the new page settles in, then dissolves.
  // The Foundation runs a touch slower and gentler (docs/07-motion-system.md).
  const soft = pathname.startsWith("/foundation");
  const d = soft ? 1.15 : 1;

  return (
    <>
      {!reduce && (
        <motion.span
          aria-hidden
          className="pointer-events-none fixed inset-x-0 top-0 z-50 h-px origin-left bg-clay"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: 0 }}
          transition={{
            scaleX: { duration: 0.55 * d, ease: easeLine },
            opacity: { delay: 0.5 * d, duration: 0.45, ease: easeLine },
          }}
        />
      )}
      {children}
    </>
  );
}
