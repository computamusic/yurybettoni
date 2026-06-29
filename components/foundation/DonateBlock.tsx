"use client";

import { useState } from "react";
import { Chevron } from "@/components/ui/Chevron";

const GOLD = "#c2913b";
const PRESETS = ["$25", "$50", "$100", "Custom"];

// Mocked donate widget — preset chips + a success state. No real payment.
export function DonateBlock() {
  const [amount, setAmount] = useState<string>("$50");
  const [custom, setCustom] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    const given = amount === "Custom" ? (custom ? `$${custom}` : "your gift") : amount;
    return (
      <div className="rounded-sm border border-line-soft bg-bone p-7">
        <span
          className="text-xs font-semibold uppercase tracking-[0.18em]"
          style={{ color: GOLD }}
        >
          Thank you
        </span>
        <p className="mt-4 font-display text-xl leading-relaxed text-ink">
          On behalf of Alessandra&apos;s name — thank you. {given} helps keep a season
          alive for a young player in East Africa.
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft underline-draw"
        >
          Make another gift
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="rounded-sm border border-line-soft bg-bone p-7"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-mute">
        Choose an amount
      </span>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {PRESETS.map((p) => {
          const active = amount === p;
          return (
            <button
              key={p}
              type="button"
              onClick={() => setAmount(p)}
              aria-pressed={active}
              className="border px-2 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition-colors"
              style={
                active
                  ? { background: GOLD, borderColor: GOLD, color: "#17150f" }
                  : { borderColor: "var(--color-line)", color: "var(--color-ink-soft)" }
              }
            >
              {p}
            </button>
          );
        })}
      </div>

      {amount === "Custom" && (
        <div className="mt-4 flex items-center border-b border-line">
          <span className="pr-1 text-ink-soft">$</span>
          <input
            type="number"
            min="1"
            inputMode="numeric"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            placeholder="Amount"
            aria-label="Custom amount"
            className="w-full bg-transparent py-3 text-ink placeholder:text-mute focus:outline-none"
          />
        </div>
      )}

      <button
        type="submit"
        className="chev-host mt-6 inline-flex w-full items-center justify-center gap-3 px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] transition-opacity hover:opacity-90"
        style={{ background: GOLD, color: "#17150f" }}
      >
        Support a season
        <Chevron />
      </button>
      <p className="mt-4 text-xs text-mute">
        Demonstration only — no payment is processed.
      </p>
    </form>
  );
}
