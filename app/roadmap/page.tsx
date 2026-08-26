import type { Metadata } from "next";
import { PageHero, Stack } from "@/components/PageHero";
import { roadmap, roadmapAltTitles, roadmapTitle } from "@/lib/copy";

export const metadata: Metadata = { title: "Roadmap" };

export default function RoadmapPage() {
  return (
    <div className="site-shell pb-20">
      <PageHero
        kicker="Roadmap"
        title={roadmapTitle}
        lede={`${roadmapAltTitles[0]}. ${roadmapAltTitles[1]}`}
      />
      <Stack items={roadmap} />
      <p className="mt-12 max-w-2xl font-mono text-[11px] uppercase leading-6 tracking-[0.16em] text-frost/40">
        August 2026. Spec, brand, site, account design. No fake shipped dates.
      </p>
    </div>
  );
}
