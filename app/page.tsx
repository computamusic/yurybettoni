import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ScrollStroke } from "@/components/home/ScrollStroke";
import { PillarRouter } from "@/components/home/PillarRouter";
import { ThreeYs } from "@/components/home/ThreeYs";
import { ClayQuote } from "@/components/home/ClayQuote";
import { StoryTeaser } from "@/components/home/StoryTeaser";
import { SharedCourt } from "@/components/home/SharedCourt";
import { LegacyTeaser } from "@/components/home/LegacyTeaser";
import { PressWall } from "@/components/home/PressWall";
import { SubscribeBand } from "@/components/home/SubscribeBand";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ScrollStroke />
      <PillarRouter />
      <ThreeYs />
      <ClayQuote />
      <StoryTeaser />
      <SharedCourt />
      <LegacyTeaser />
      <PressWall />
      <SubscribeBand />
    </>
  );
}
