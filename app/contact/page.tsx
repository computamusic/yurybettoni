import type { Metadata } from "next";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { Reveal } from "@/components/ui/Reveal";
import { QUOTES } from "@/lib/yury";

export const metadata: Metadata = {
  title: "Contact — Yury Bettoni",
  description:
    "Reach Yury Bettoni — coaching, speaking, events, the Foundation, or anything else.",
};

const INTENTS = [
  { value: "coaching", label: "Coaching" },
  { value: "speaking", label: "Speaking" },
  { value: "events", label: "Events" },
  { value: "foundation", label: "Foundation" },
  { value: "general", label: "Something else" },
];

export default function ContactPage() {
  return (
    <section className="min-h-[60svh] bg-bone pt-32">
      <div className="mx-auto grid max-w-(--max-content) gap-14 px-5 pb-28 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <p className="eyebrow text-clay">Contact</p>
          <h1
            className="mt-5 font-display font-medium leading-[1.04] tracking-[-0.02em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            Let&apos;s talk.
          </h1>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-ink-soft">
            Tell us what you&apos;re looking for and the right person will come back to you —
            usually within two business days.
          </p>

          <div className="mt-10 space-y-5">
            <div>
              <p className="eyebrow text-mute">Email</p>
              <a href="mailto:info@yurybettoni.com" className="mt-1 inline-block text-ink underline-draw">
                info@yurybettoni.com
              </a>
            </div>
            <div>
              <p className="eyebrow text-mute">Based in</p>
              <p className="mt-1 text-ink">Miami Beach, Florida</p>
              <p className="mt-1 text-sm leading-relaxed text-mute">
                Home base between courts, clients and the road.
              </p>
            </div>
            <div>
              <p className="eyebrow text-mute">Follow</p>
              <div className="mt-1 flex gap-5 text-sm">
                <a href="https://instagram.com" className="text-ink underline-draw">Instagram</a>
                <a href="https://youtube.com" className="text-ink underline-draw">YouTube</a>
                <a href="https://tiktok.com" className="text-ink underline-draw">TikTok</a>
              </div>
            </div>
          </div>

          <blockquote className="mt-12 border-t border-line pt-8">
            <p className="max-w-sm font-display text-lg font-medium leading-snug tracking-[-0.01em] text-ink">
              &ldquo;{QUOTES.whyTennis.text}&rdquo;
            </p>
            <footer className="mt-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-mute">
              — {QUOTES.whyTennis.attribution}
            </footer>
          </blockquote>
        </Reveal>

        <Reveal delay={0.1}>
          <InquiryForm
            intents={INTENTS}
            defaultIntent="coaching"
            submitLabel="Send message"
            successNote="Thank you — your message is on its way to Yury's team. Expect a reply within two business days."
          />
        </Reveal>
      </div>
    </section>
  );
}
