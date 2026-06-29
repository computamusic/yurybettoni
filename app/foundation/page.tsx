import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { HerStory } from "@/components/foundation/HerStory";
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
        lead="In memory of his mother, Alessandra, who first put a racquet in his hand. Raised in Ethiopia and Tanzania, Yury turned grief into purpose — a home where tennis and education open a door that stays open."
        image="/images/legacy-africa.jpg"
        imageAlt="The Bettoni family in Africa"
        accent="#c2913b"
        anchors={[
          { href: "#story", label: "Her story" },
          { href: "#mission", label: "The mission" },
          { href: "#impact", label: "The impact" },
          { href: "#give", label: "Ways to give" },
        ]}
      />
      <HerStory />
      <Mission />
      <Impact />
      <ImpactCalculator />
      <WaysToGive />
      <SubscribeBand />
    </>
  );
}
