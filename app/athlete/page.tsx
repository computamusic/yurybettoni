import type { Metadata } from "next";
import { AthleteHero } from "@/components/athlete/AthleteHero";
import { StorySequence } from "@/components/athlete/StorySequence";
import { CareerTimeline } from "@/components/athlete/CareerTimeline";
import { AthletePhilosophy } from "@/components/athlete/AthletePhilosophy";
import { MediaGrid } from "@/components/athlete/MediaGrid";
import { AthleteHandoff } from "@/components/athlete/AthleteHandoff";
import { SubscribeBand } from "@/components/home/SubscribeBand";

export const metadata: Metadata = {
  title: "The Athlete — Yury Bettoni",
  description:
    "From the clay of Rome to the players' box of champions. The career, the story, and the method behind Yury Bettoni.",
};

export default function AthletePage() {
  return (
    <>
      <AthleteHero />
      <StorySequence />
      <CareerTimeline />
      <AthletePhilosophy />
      <MediaGrid />
      <AthleteHandoff />
      <SubscribeBand />
    </>
  );
}
