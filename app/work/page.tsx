import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Pedigree } from "@/components/work/Pedigree";
import { YSystem } from "@/components/work/YSystem";
import { OfferLadder } from "@/components/work/OfferLadder";
import { ProgramFinder } from "@/components/work/ProgramFinder";
import { CoursesGrid } from "@/components/work/CoursesGrid";
import { CoachingSection } from "@/components/work/CoachingSection";
import { SpeakingSection } from "@/components/work/SpeakingSection";
import { EventsSection } from "@/components/work/EventsSection";
import { SubscribeBand } from "@/components/home/SubscribeBand";

export const metadata: Metadata = {
  title: "Work with Yury — Yury Bettoni",
  description:
    "Courses, coaching, speaking and events. The method that built a career on the pro tour — made available to yours.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work with Yury — Pillar 03"
        title="Train the way he teaches."
        lead="Courses, coaching, speaking and events. The same instinct that carried him from the clay of Rome to the players' box of champions — turned into something you can use."
        image="/images/hero-1.jpg"
        imageAlt="Yury Bettoni on court"
        imagePosition="center 30%"
        anchors={[
          { href: "#method", label: "The method" },
          { href: "#courses", label: "Courses" },
          { href: "#coaching", label: "Coaching" },
          { href: "#speaking", label: "Speaking" },
          { href: "#events", label: "Events" },
        ]}
      />
      <Pedigree />
      <YSystem />
      <OfferLadder />
      <ProgramFinder />
      <CoursesGrid />
      <CoachingSection />
      <SpeakingSection />
      <EventsSection />
      <SubscribeBand />
    </>
  );
}
