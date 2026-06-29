import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Chevron } from "@/components/ui/Chevron";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SubscribeBand } from "@/components/home/SubscribeBand";
import { EnrollButton } from "@/components/work/EnrollButton";
import { COURSES, getCourse } from "@/components/work/courses-data";

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Not found — Work with Yury | Yury Bettoni" };
  return {
    title: `${course.title} — Work with Yury | Yury Bettoni`,
    description: course.summary,
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <main>
      <section className="bg-bone pt-20">
        <div className="mx-auto max-w-(--max-content) px-5 pt-10 md:px-8 md:pt-14">
          {/* Breadcrumb */}
          <Link
            href="/work#courses"
            className="group inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-mute transition-colors hover:text-ink"
          >
            <span className="rotate-180">
              <Chevron />
            </span>
            <span className="underline-draw">Courses</span>
          </Link>

          <div className="mt-8 grid gap-10 pb-20 md:grid-cols-2 md:gap-16 md:pb-28">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-bone-deep">
              <Image
                src={course.image}
                alt={course.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="graded object-cover"
              />
              <span className="eyebrow absolute left-5 top-5 text-light/90">{course.level}</span>
            </div>

            {/* Header details */}
            <div className="md:py-4">
              <p className="eyebrow text-clay">Course</p>
              <h1
                className="mt-4 font-display font-medium leading-[1.04] tracking-[-0.015em] text-ink"
                style={{ fontSize: "var(--text-display)" }}
              >
                {course.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm text-ink-soft">
                <span className="tabular-nums">${course.price}</span>
                <span className="text-mute">·</span>
                <span>{course.durationLabel}</span>
                <span className="text-mute">·</span>
                <span>{course.level}</span>
              </div>

              <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft">
                {course.summary}
              </p>

              <div className="mt-9">
                <EnrollButton price={course.price} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-t border-line bg-bone-deep">
        <div className="mx-auto max-w-(--max-content) px-5 py-20 md:px-8 md:py-28">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-clay">You will be able to</p>
            <h2
              className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
              style={{ fontSize: "var(--text-display)" }}
            >
              What you walk away with.
            </h2>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {course.outcomes.map((o, i) => (
              <RevealItem key={i} className="h-full">
                <div className="flex h-full items-start gap-4 bg-bone-deep p-6 md:p-7">
                  <span className="mt-1 font-mono text-sm font-semibold text-clay">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed text-ink-soft">{o}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Curriculum */}
      <section className="border-t border-line bg-bone">
        <div className="mx-auto max-w-(--max-content) px-5 py-20 md:px-8 md:py-28">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-clay">Curriculum</p>
            <h2
              className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
              style={{ fontSize: "var(--text-display)" }}
            >
              Inside the course.
            </h2>
          </Reveal>

          <RevealGroup className="mt-12 border-t border-line">
            {course.curriculum.map((m) => (
              <RevealItem key={m.n}>
                <div className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-7 md:grid-cols-[5rem_1fr] md:gap-8 md:py-8">
                  <span className="font-mono text-sm font-semibold tracking-tight text-clay">
                    {String(m.n).padStart(2, "0")}
                  </span>
                  <div className="md:flex md:items-baseline md:justify-between md:gap-10">
                    <h3 className="font-display text-xl font-medium text-ink md:text-2xl">
                      {m.title}
                    </h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-soft md:mt-0 md:text-right">
                      {m.detail}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Credibility recap */}
          <Reveal delay={0.05}>
            <blockquote className="mt-16 max-w-3xl border-l-2 border-clay pl-7">
              <p className="font-display text-2xl italic leading-snug text-ink md:text-3xl">
                Taught by Yury Bettoni — Bollettieri-trained, hitting partner to champions, and
                the mind behind the 3 Y&apos;s. Three decades in the game, distilled into one course.
              </p>
            </blockquote>
          </Reveal>

          {/* Enrol again at the foot */}
          <Reveal delay={0.1}>
            <div className="mt-14">
              <EnrollButton price={course.price} />
            </div>
          </Reveal>
        </div>
      </section>

      <SubscribeBand />
    </main>
  );
}
