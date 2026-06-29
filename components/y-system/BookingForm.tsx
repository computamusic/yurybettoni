"use client";

import { useState } from "react";
import { Chevron } from "@/components/ui/Chevron";
import { YSYSTEM_BOOKING_CATEGORIES } from "@/lib/yury";

// Mocked booking form mirroring the live Y-System page's enquiry form — a
// service category, the player's details and a message. No backend; on submit
// it just confirms, in line with the rest of the site's mocked commerce.
export function BookingForm() {
  const [category, setCategory] = useState<string>(YSYSTEM_BOOKING_CATEGORIES[0]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);

  const field =
    "w-full border-b border-line bg-transparent px-1 py-3 text-ink placeholder:text-mute focus:border-clay focus:outline-none";

  if (done) {
    return (
      <div className="border border-line bg-bone-deep p-8 md:p-10">
        <p className="eyebrow text-clay">Received</p>
        <p className="mt-4 max-w-md font-display text-2xl text-ink">
          Thank you, {name || "athlete"}. Yury&apos;s team will be in touch about{" "}
          <span className="text-clay">{category.toLowerCase()}</span> within two business days.
        </p>
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
      <label className="block">
        <span className="eyebrow text-mute">What are you booking</span>
        <div className="relative mt-1">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`${field} appearance-none pr-8`}
          >
            {YSYSTEM_BOOKING_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 rotate-90 text-mute">
            <Chevron />
          </span>
        </div>
      </label>

      <div className="grid gap-7 md:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-mute">Name</span>
          <input
            className={field}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your name"
            autoComplete="given-name"
          />
        </label>
        <label className="block">
          <span className="eyebrow text-mute">Surname</span>
          <input
            className={field}
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Your surname"
            autoComplete="family-name"
          />
        </label>
      </div>

      <div className="grid gap-7 md:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-mute">Contact number</span>
          <input
            type="tel"
            className={field}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 305 000 0000"
            autoComplete="tel"
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
        <span className="eyebrow text-mute">Message</span>
        <textarea
          className={`${field} min-h-28 resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell Yury about your level, goals and where you train."
        />
      </label>

      <div>
        <button
          type="submit"
          className="chev-host inline-flex w-full items-center justify-center gap-3 bg-ink px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-bone transition-colors hover:bg-clay sm:w-auto"
        >
          Request booking
          <Chevron />
        </button>
      </div>
    </form>
  );
}
