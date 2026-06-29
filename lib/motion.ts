import type { Variants, Transition } from "motion/react";

// Easing tokens mirror docs/07-motion-system.md
export const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];
export const easeLine: Transition["ease"] = [0.65, 0, 0.35, 1];
export const easeSoft: Transition["ease"] = [0.4, 0, 0.2, 1];

// "settle" — content rises + fades in
export const settle: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

// "stagger" — children settle in sequence
export const stagger = (gap = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: gap, delayChildren: delay },
  },
});

// "draw-line" — a hairline scales in along its axis
export const drawLine: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.85, ease: easeLine },
  },
};

export const viewportOnce = { once: true, amount: 0.25 } as const;
