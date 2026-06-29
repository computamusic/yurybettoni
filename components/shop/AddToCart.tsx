"use client";

import { useState } from "react";
import { Chevron } from "@/components/ui/Chevron";

export function AddToCart({ sizes }: { sizes?: string[] }) {
  const [size, setSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState(false);

  const needsSize = !!sizes && sizes.length > 0;

  function handleAdd() {
    if (needsSize && !size) {
      setError(true);
      return;
    }
    setError(false);
    setAdded(true);
  }

  if (added) {
    return (
      <div className="mt-10 border-t border-line pt-8">
        <div className="flex items-center gap-3 bg-bone-deep px-6 py-5">
          <span className="text-clay">
            <Chevron />
          </span>
          <div>
            <p className="font-display text-lg font-medium text-ink">Added to bag</p>
            <p className="mt-1 text-sm text-mute">
              {needsSize ? `Size ${size} · ` : ""}A confirmation would follow at checkout.
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            setAdded(false);
            setSize(null);
          }}
          className="mt-5 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-mute underline-draw hover:text-ink"
        >
          Choose again
        </button>
      </div>
    );
  }

  return (
    <div className="mt-10 border-t border-line pt-8">
      {needsSize && (
        <div>
          <div className="flex items-baseline justify-between">
            <p className="eyebrow text-ink-soft">Size</p>
            {error && (
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-clay">
                Select a size
              </p>
            )}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {sizes!.map((s) => {
              const on = s === size;
              return (
                <button
                  key={s}
                  onClick={() => {
                    setSize(s);
                    setError(false);
                  }}
                  aria-pressed={on}
                  className={`min-w-12 border px-4 py-3 text-sm font-semibold transition-colors ${
                    on
                      ? "border-ink bg-ink text-bone"
                      : "border-line text-ink-soft hover:border-ink"
                  }`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <button
        onClick={handleAdd}
        className="chev-host mt-8 inline-flex w-full items-center justify-center gap-3 bg-ink px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-bone transition-colors hover:bg-clay sm:w-auto"
      >
        Add to bag
        <Chevron />
      </button>
    </div>
  );
}
