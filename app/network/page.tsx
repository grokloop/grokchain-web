import type { Metadata } from "next";
import { PageHero, Stack } from "@/components/PageHero";
import { DocsPrograms, FirstPay, StatusLine } from "@/components/LiveStatus";
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
      <section className="mb-10 border border-frost/12 bg-ink/30 px-6 py-6">
        <StatusLine />
        <div className="mt-6">
          <FirstPay />
        </div>
        <DocsPrograms />
      </section>
      <Stack items={validators} />
    </div>
  );
}
