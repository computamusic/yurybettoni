import Link from "next/link";

const COLUMNS = [
  {
    title: "Athlete",
    links: [
      { label: "The story", href: "/athlete#story" },
      { label: "Timeline", href: "/athlete#timeline" },
      { label: "The 3 Y's", href: "/athlete#philosophy" },
      { label: "Media", href: "/athlete#media" },
    ],
  },
  {
    title: "Legacy",
    links: [
      { label: "Alessandra", href: "/foundation/alessandra" },
      { label: "The mission", href: "/foundation/mission" },
      { label: "Impact", href: "/foundation/impact" },
      { label: "Give", href: "/foundation/give" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Courses", href: "/work/courses" },
      { label: "Coaching", href: "/work/coaching" },
      { label: "Speaking", href: "/work/speaking" },
      { label: "Events", href: "/work/events" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-light/10 bg-night text-light">
      <div className="mx-auto max-w-(--max-content) px-5 py-20 md:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-14">
          <div className="col-span-2 border-b border-light/10 pb-10 lg:col-span-1 lg:border-0 lg:pb-0">
            <p className="font-display text-2xl">Yury Bettoni</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-light/55">
              The game, the legacy, and the work — one world.
            </p>
            <p className="eyebrow mt-8 text-light/45">Miami Beach, Florida</p>
            <a
              href="mailto:info@yurybettoni.com"
              className="mt-1 inline-block text-sm text-light/75 underline-draw"
            >
              info@yurybettoni.com
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="eyebrow text-clay">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-light/70 underline-draw transition-colors hover:text-light"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-light/10 pt-8 text-xs text-light/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Yury Bettoni. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 uppercase tracking-[0.14em]">
            <a href="https://instagram.com" className="underline-draw hover:text-light">Instagram</a>
            <a href="https://youtube.com" className="underline-draw hover:text-light">YouTube</a>
            <a href="https://tiktok.com" className="underline-draw hover:text-light">TikTok</a>
            <Link href="/privacy" className="underline-draw hover:text-light">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
