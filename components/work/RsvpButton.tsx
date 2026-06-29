"use client";

import { useState } from "react";
import { Chevron } from "@/components/ui/Chevron";

// Mocked RSVP — flips to a confirmed state on click. No backend.
export function RsvpButton({ event }: { event: string }) {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-clay">
        Spot held — details by email
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setDone(true)}
      aria-label={`RSVP for ${event}`}
      className="chev-host inline-flex items-center gap-2.5 border border-ink px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ink hover:text-bone"
    >
      RSVP
      <Chevron />
    </button>
  );
}
