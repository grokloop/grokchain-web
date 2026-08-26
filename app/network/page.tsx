import type { Metadata } from "next";
import { PageHero, Stack } from "@/components/PageHero";
import { validators } from "@/lib/copy";

export const metadata: Metadata = { title: "Network" };

export default function NetworkPage() {
  return (
    <div className="site-shell pb-20">
      <PageHero
        kicker="Network"
        title="Nodes come after the chain runs."
        lede="Hex is the settlement circuit. Diamond is the agent. Solana L1 validators stay as they are."
      />
      <Stack items={validators} />
    </div>
  );
}
