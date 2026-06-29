import type { Metadata } from "next";
import { AthleteHero } from "@/components/athlete/AthleteHero";
import { StorySequence } from "@/components/athlete/StorySequence";
import { CareerTimeline } from "@/components/athlete/CareerTimeline";
import { SharedCourt } from "@/components/athlete/SharedCourt";
import { FullCircleQuote } from "@/components/athlete/FullCircleQuote";
import { AthletePhilosophy } from "@/components/athlete/AthletePhilosophy";
import { OffCourt } from "@/components/athlete/OffCourt";
import { Accolades } from "@/components/athlete/Accolades";
import { PressHighlights } from "@/components/athlete/PressHighlights";
import { MediaGrid } from "@/components/athlete/MediaGrid";
import { AthleteHandoff } from "@/components/athlete/AthleteHandoff";
import { SubscribeBand } from "@/components/home/SubscribeBand";
import { gallery } from "@/lib/galleries";

export const metadata: Metadata = {
  title: "The Athlete — Yury Bettoni",
  description:
    "From the clay of Rome to the players' box of champions. The career, the story, and the method behind Yury Bettoni.",
};

export default function AthletePage() {
  const extra = gallery("site")
    .slice(0, 8)
    .map((src) => ({ img: src, cap: "From the archive" }));

  return (
    <>
      <AthleteHero />
      <StorySequence />
      <CareerTimeline />
      <Accolades />
      <SharedCourt />
      <FullCircleQuote />
      <AthletePhilosophy />
      <OffCourt />
      <PressHighlights />
      <MediaGrid extra={extra} />
      <AthleteHandoff />
      <SubscribeBand />
    </>
  );
}
