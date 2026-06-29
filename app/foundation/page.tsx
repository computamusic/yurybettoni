import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { HerStory } from "@/components/foundation/HerStory";
import { TheJourney } from "@/components/foundation/TheJourney";
import { AfricaQuote } from "@/components/foundation/AfricaQuote";
import { Mission } from "@/components/foundation/Mission";
import { Impact } from "@/components/foundation/Impact";
import { ImpactCalculator } from "@/components/foundation/ImpactCalculator";
import { WaysToGive } from "@/components/foundation/WaysToGive";
import { SubscribeBand } from "@/components/home/SubscribeBand";

export const metadata: Metadata = {
  title: "The Foundation — Yury Bettoni",
  description:
    "The Alessandra Bettoni Foundation. In memory of his mother, Yury pairs tennis and education for young people in Ethiopia and Tanzania — a door that opens and stays open.",
};

export default function FoundationPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Legacy — Alessandra Bettoni Foundation"
        title="She gave me the game. We give it forward."
        lead="Born in Addis Ababa and carried across six countries before Italy, Yury was given the game by his mother, Alessandra. In her memory, he pairs tennis and education for young people in Ethiopia and Tanzania — turning a nomad's grief into a door that opens, and stays open."
        image="/images/legacy-africa.jpg"
        imageAlt="The Bettoni family in Africa"
        accent="#c2913b"
        anchors={[
          { href: "#story", label: "Her story" },
          { href: "#journey", label: "The journey" },
          { href: "#mission", label: "The mission" },
          { href: "#impact", label: "The impact" },
          { href: "#give", label: "Ways to give" },
        ]}
      />
      <HerStory />
      <TheJourney />
      <AfricaQuote />
      <Mission />
      <Impact />
      <ImpactCalculator />
      <WaysToGive />
      <SubscribeBand />
    </>
  );
}
