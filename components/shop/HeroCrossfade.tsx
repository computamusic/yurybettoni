"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { easeSoft } from "@/lib/motion";

// A seamless colour-changing separator: holds on one colourway, then crossfades
// (with a slow drift) into the next. Reduced-motion users get a single still.
export function HeroCrossfade({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce || images.length < 2) return;
    const id = setInterval(
      () => setI((n) => (n + 1) % images.length),
      4200,
    );
    return () => clearInterval(id);
  }, [reduce, images.length]);

  const active = reduce ? images[0] : images[i];

  return (
    <div className={className} aria-hidden>
      <AnimatePresence initial={false}>
        <motion.div
          key={active}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: easeSoft }}
        >
          <Image
            src={active}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
