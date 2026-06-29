import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { HerStory } from "@/components/foundation/HerStory";
import { TheJourney } from "@/components/foundation/TheJourney";
import { AfricaQuote } from "@/components/foundation/AfricaQuote";
import { FoundationFilm } from "@/components/foundation/FoundationFilm";
import { Mission } from "@/components/foundation/Mission";
import { Impact } from "@/components/foundation/Impact";
import { FoundationGallery } from "@/components/foundation/FoundationGallery";
import { ImpactCalculator } from "@/components/foundation/ImpactCalculator";
import { WaysToGive } from "@/components/foundation/WaysToGive";
import { SubscribeBand } from "@/components/home/SubscribeBand";

export const metadata: Metadata = {
  title: "The Foundation — Yury Bettoni",
  description:
    "The Alessandra Bettoni Foundation. In his mother's memory, Yury meets underserved young people in Ethiopia and Tanzania with basic needs, education, and tennis — a door that opens and stays open.",
};

export default function FoundationPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Legacy — Alessandra Bettoni Foundation"
        title="She gave me the game. We give it forward."
        lead="Born in Addis Ababa and raised across Africa for his father's work, Yury was shaped most by Tanzania. He carries his mother Alessandra's name forward in the Foundation built in her memory — meeting underserved young people in Ethiopia and Tanzania with basic needs, education, and tennis. A door that opens, and stays open."
        image="/images/legacy-africa.jpg"
        imageAlt="The Bettoni family in Africa"
        accent="#c2913b"
        anchors={[
          { href: "#story", label: "Her story" },
          { href: "#journey", label: "The journey" },
          { href: "#film", label: "The film" },
          { href: "#mission", label: "The mission" },
          { href: "#impact", label: "The impact" },
          { href: "#gallery", label: "Gallery" },
          { href: "#give", label: "Ways to give" },
        ]}
      />
      <HerStory />
      <TheJourney />
      <AfricaQuote />
      <FoundationFilm />
      <Mission />
      <Impact />
      <FoundationGallery />
      <ImpactCalculator />
      <WaysToGive />
      <SubscribeBand />
    </>
  );
}
