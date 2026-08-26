import type { Metadata } from "next";
import { PageHero, Stack } from "@/components/PageHero";
import { visionLead, visionPoints } from "@/lib/copy";

export const metadata: Metadata = { title: "Vision" };

export default function VisionPage() {
  return (
    <div className="site-shell pb-20">
      <PageHero kicker="Vision" title="A chain that knows who they are." lede={visionLead} />
      <Stack items={visionPoints} />
    </div>
  );
}
