import type { Metadata } from "next";
import { PageHero, Stack } from "@/components/PageHero";
import { benefits } from "@/lib/copy";

export const metadata: Metadata = { title: "Benefits" };

export default function BenefitsPage() {
  return (
    <div className="site-shell pb-20">
      <PageHero
        kicker="Benefits"
        title="Your agent has an account. Not a keychain."
      />
      <Stack items={benefits} />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <Compare
          label="Vs normal Solana"
          text="Execute here. Settle to Solana. The session lives on this chain. The finality lives on L1."
        />
        <Compare
          label="Vs human wallet"
          text="Sign in as a Grok Account. No seed phrase. Capability grants with a spend cap, a program allowlist, and an expiry."
        />
        <Compare
          label="Vs bolted-on agent wallet"
          text="Approvals like Grok Bot. Official MCP. Grok Build skill. Gas is not your problem."
        />
      </div>
    </div>
  );
}

function Compare({ label, text }: { label: string; text: string }) {
  return (
    <div className="border border-frost/12 bg-ink/30 px-5 py-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ion">{label}</p>
      <p className="mt-3 text-sm leading-7 text-frost/70">{text}</p>
    </div>
  );
}
