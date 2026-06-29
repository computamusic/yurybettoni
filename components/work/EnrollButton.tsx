"use client";

import { useState } from "react";
import { Chevron } from "@/components/ui/Chevron";

// Mocked enrolment — flips to a success state on click. No payment, no backend.
export function EnrollButton({ price }: { price: number }) {
  const [enrolled, setEnrolled] = useState(false);

  if (enrolled) {
    return (
      <div className="border border-line bg-bone-deep p-7 md:p-8">
        <p className="eyebrow text-clay">Enrolled</p>
        <p className="mt-3 font-display text-2xl text-ink">
          You&apos;re enrolled — check your email.
        </p>
        <p className="mt-2 text-sm text-ink-soft">
          Your first module is waiting. (This is a preview — no payment was taken.)
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-5">
      <button
        type="button"
        onClick={() => setEnrolled(true)}
        className="chev-host inline-flex items-center gap-3 bg-ink px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-bone transition-colors hover:bg-clay"
      >
        Start the course
        <Chevron />
      </button>
      <span className="font-mono text-sm font-medium text-ink-soft">
        ${price} · one-time
      </span>
    </div>
  );
}
