"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

// Muted, looping ambient video that plays only while in view (and pauses out of
// view) for performance. Respects reduced-motion by showing the poster still.
// Used for the Foundation and GoSymba films harvested from the original site.
export function AmbientVideo({
  src,
  poster,
  className = "",
  objectPosition = "center",
}: {
  src: string;
  poster?: string;
  className?: string;
  objectPosition?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <video
      ref={ref}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
      className={className}
      style={{ objectPosition }}
    >
      {!reduce && <source src={src} type="video/mp4" />}
    </video>
  );
}
