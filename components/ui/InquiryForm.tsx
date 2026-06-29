"use client";

import { useState } from "react";
import { Chevron } from "@/components/ui/Chevron";

type Intent = { value: string; label: string };

export function InquiryForm({
  intents,
  defaultIntent,
  submitLabel = "Send inquiry",
  successNote = "Thank you. Yury's team will be in touch within two business days.",
}: {
  intents?: Intent[];
  defaultIntent?: string;
  submitLabel?: string;
  successNote?: string;
}) {
  const [intent, setIntent] = useState(defaultIntent ?? intents?.[0]?.value ?? "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);

  const field =
    "w-full border-b border-line bg-transparent px-1 py-3 text-ink placeholder:text-mute focus:border-clay focus:outline-none";

  if (done) {
    return (
      <div className="border border-line bg-bone-deep p-8 md:p-10">
        <p className="eyebrow text-clay">Received</p>
        <p className="mt-4 max-w-md font-display text-2xl text-ink">{successNote}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (name && email.includes("@")) setDone(true);
      }}
      className="grid gap-7"
    >
      {intents && intents.length > 0 && (
        <fieldset>
          <legend className="eyebrow text-mute">I&apos;m interested in</legend>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {intents.map((it) => (
              <button
                key={it.value}
                type="button"
                onClick={() => setIntent(it.value)}
                aria-pressed={intent === it.value}
                className={`border px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  intent === it.value
                    ? "border-clay bg-clay text-bone"
                    : "border-line text-ink-soft hover:border-ink/40"
                }`}
              >
                {it.label}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      <div className="grid gap-7 md:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-mute">Name</span>
          <input
            className={field}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="eyebrow text-mute">Email</span>
          <input
            type="email"
            className={field}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="name@email.com"
            autoComplete="email"
          />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow text-mute">A little context</span>
        <textarea
          className={`${field} min-h-28 resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell Yury what you're looking for."
        />
      </label>

      <div>
        <button
          type="submit"
          className="chev-host inline-flex items-center gap-3 bg-ink px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-bone transition-colors hover:bg-clay"
        >
          {submitLabel}
          <Chevron />
        </button>
      </div>
    </form>
  );
}
