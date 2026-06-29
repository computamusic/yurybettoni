import Link from "next/link";
import type { ReactNode } from "react";

// The chevron mark, lifted from the YB monogram's speed-lines.
export function Chevron({ className = "" }: { className?: string }) {
  return (
    <span className={`chev ${className}`} aria-hidden>
      <span />
      <span />
      <span />
    </span>
  );
}

// A discovery cue — "learn more" affordance that marches forward on hover.
export function ForwardLink({
  href,
  children,
  className = "",
  tone = "ink",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: "ink" | "bone";
}) {
  const color = tone === "bone" ? "text-bone" : "text-ink";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] ${color} ${className}`}
    >
      <span className="underline-draw">{children}</span>
      <Chevron />
    </Link>
  );
}
