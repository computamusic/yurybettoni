"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Chevron } from "@/components/ui/Chevron";

export function SubscribeBand() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="border-t border-line bg-night text-light">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 text-center md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow text-clay">Stay in his world</p>
          <h2
            className="mx-auto mt-5 max-w-2xl font-display font-medium leading-[1.08] tracking-[-0.01em]"
            style={{ fontSize: "var(--text-display)" }}
          >
            The story isn&apos;t finished. Come along for the next chapter.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          {done ? (
            <p className="mx-auto mt-10 max-w-md text-light/70">
              You&apos;re in. Watch your inbox — the first note arrives soon.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.includes("@")) setDone(true);
              }}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@email.com"
                aria-label="Email address"
                className="flex-1 border-b border-light/30 bg-transparent px-1 py-3 text-light placeholder:text-light/40 focus:border-clay focus:outline-none"
              />
              <button
                type="submit"
                className="chev-host inline-flex items-center justify-center gap-3 bg-light px-7 py-3.5 text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-night transition-colors hover:bg-clay hover:text-light"
              >
                Join
                <Chevron />
              </button>
            </form>
          )}
          <p className="mt-6 text-xs uppercase tracking-[0.16em] text-light/40">
            No noise. The work, the legacy, and the occasional drop.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
