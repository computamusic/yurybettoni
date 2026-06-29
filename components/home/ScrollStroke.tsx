"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

const SCRUB_DURATION = 2.7;
const SCRUB_END_GUARD = 0.02;

// Scroll-scrubbed video: underwater movement plays forward with the page.
export function ScrollStroke() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.16, 0.66, 0.86], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduce) return;

    let raf = 0;
    let cur = 0;
    let target = 0;

    // Prime the video so iOS/Safari will allow scrubbing.
    const prime = () => v.play().then(() => v.pause()).catch(() => {});
    if (v.readyState >= 1) prime();
    else v.addEventListener("loadedmetadata", prime, { once: true });

    const unsub = scrollYProgress.on("change", (p) => {
      const d = v.duration;
      if (d && isFinite(d)) {
        const clipEnd = Math.min(SCRUB_DURATION, d);
        target = Math.max(0, Math.min(clipEnd - SCRUB_END_GUARD, p * clipEnd));
      }
    });

    const loop = () => {
      const d = v.duration;
      if (d && isFinite(d)) {
        cur += (target - cur) * 0.18;
        if (Math.abs(target - cur) < 0.002) cur = target;
        try {
          v.currentTime = cur;
        } catch {}
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      unsub();
    };
  }, [scrollYProgress, reduce]);

  return (
    <section ref={sectionRef} className="relative h-[230vh] bg-night">
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
        >
          <source src="/video/slowmo-underwater.mp4" type="video/mp4" />
        </video>

        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,10,6,0.6) 0%, rgba(13,10,6,0.3) 42%, rgba(13,10,6,0.85) 100%)",
          }}
        />

        <motion.div
          style={reduce ? undefined : { opacity: textOpacity, y: textY }}
          className="relative z-10 max-w-2xl px-5 text-center"
        >
          <p className="eyebrow text-clay">Movement, revealed</p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] text-light md:text-6xl">
            Before speed, there is control.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-light/80">
            Under resistance, every detail of mobility, stability and velocity becomes
            visible. Slow motion turns the method into something you can see.
          </p>
        </motion.div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <span className="eyebrow text-light/50">Keep scrolling</span>
        </div>
      </div>
    </section>
  );
}
