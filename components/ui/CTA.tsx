import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "quiet";

const base =
  "inline-flex items-center gap-2.5 text-[0.95rem] font-medium transition-colors duration-200 ease-out";

export function CTA({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const styles: Record<Variant, string> = {
    primary:
      "bg-clay px-7 py-3.5 text-court-ink hover:bg-clay-glow rounded-none",
    secondary:
      "border border-chalk/30 px-7 py-3.5 text-chalk hover:bg-court-soft hover:border-chalk/60 rounded-none",
    quiet: "text-chalk underline-draw",
  };
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className} group`}>
      {children}
      {variant !== "quiet" && (
        <span
          aria-hidden
          className="transition-transform duration-200 ease-out group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </Link>
  );
}
