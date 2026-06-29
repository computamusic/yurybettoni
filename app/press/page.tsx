import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PressHub } from "@/components/press/PressHub";

export const metadata: Metadata = {
  title: "Press — Yury Bettoni",
  description:
    "Interviews, magazine features, and film with Yury Bettoni — across a life in professional tennis and luxury design.",
};

export default function PressPage() {
  return (
    <>
      <PageHeader
        eyebrow="Press & Media"
        title="Seen, heard, and on the record."
        lead="Two decades of interviews, features, and film — from the baseline to the build site."
        image="/images/archive-academy.jpg"
        imageAlt="Yury Bettoni at the Bollettieri Academy in Florida"
      />
      <PressHub />
    </>
  );
}
