"use client";

import { PageHeader } from "@/components/ui/PageHeader";

export function AthleteHero() {
  return (
    <PageHeader
      eyebrow="The Athlete — Pillar 01"
      title="The competitor who never stopped competing."
      lead="Born in Addis Ababa, raised across Africa, forged on the red clay of Rome and inside the players' box of champions — the years that built the method, the discipline, and the man behind everything that came next."
      image="/images/hero-2.jpg"
      imageAlt="Yury Bettoni on the clay in Rome"
      imagePosition="60% center"
      anchors={[
        { href: "#story", label: "The story" },
        { href: "#timeline", label: "Career timeline" },
        { href: "#legends", label: "Shared the court" },
        { href: "#philosophy", label: "The 3 Y's" },
        { href: "#off-court", label: "Off the court" },
      ]}
    />
  );
}
