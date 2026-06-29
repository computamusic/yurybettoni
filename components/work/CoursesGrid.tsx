import Image from "next/image";
import Link from "next/link";
import { Chevron } from "@/components/ui/Chevron";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { COURSES } from "@/components/work/courses-data";

export function CoursesGrid() {
  return (
    <section id="courses" className="scroll-mt-24 border-t border-line bg-bone-deep">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">Courses</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            The method, on your schedule.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
            Self-paced courses drawn from a lifetime in the sport. Buy once, keep forever.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((c) => (
            <RevealItem key={c.slug}>
              <Link
                href={`/work/courses/${c.slug}`}
                className="group flex h-full flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-bone-deep">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="graded object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(23,21,15,0.4) 0%, transparent 30%, transparent 100%)",
                    }}
                  />
                  <span className="eyebrow absolute left-4 top-4 text-light/90">{c.level}</span>
                </div>

                <div className="mt-5 flex flex-1 flex-col">
                  <h3 className="font-display text-xl font-medium leading-snug text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {c.outcomes[0]}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                    <span className="font-mono text-sm font-medium text-ink">${c.price}</span>
                    <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink">
                      <span className="underline-draw">View course</span>
                      <Chevron />
                    </span>
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
