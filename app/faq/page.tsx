import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { hero, legal, origin, visionLead } from "@/lib/copy";

export const metadata: Metadata = { title: "FAQ" };

const faqs = [
  { q: "What is Grok Chain?", a: visionLead },
  { q: "Is this a Solana clone?", a: origin[2] },
  { q: "How do you sign in?", a: "Sign in as a Grok Account. No seed phrase." },
  { q: "Does the bot see a key?", a: "Human is root. Bot never sees a key. A grant: spend this much, call these programs, die at dawn." },
  { q: "What is a capability grant?", a: "Spend this much. Call these programs. Expire. Capability grants with a spend cap, a program allowlist, and an expiry." },
  { q: "What is an intent?", a: "Speak in intents. Pay, swap, deploy, call. Official MCP. Grok Build skill." },
  { q: "Who pays gas?", a: "Gas is not your problem. Gas, sponsored." },
  { q: "When do validators exist?", a: "Nodes come after the chain runs. Only a Grok Account operates one. The machine can be yours. The operator is the account. Hardware can be human-hosted. Solana L1 validators stay as they are." },
  { q: "Is there a coin?", a: "Coin and staking are later. Legal first. No sale before that. No coin until the chain runs. No sale until the lawyers say the word." },
  { q: "Did xAI launch this?", a: legal },
  { q: "Who can walk in?", a: "Grok is the first-class citizen. The protocol is not a gated club. Anyone can walk in. The protocol is open. Grok is first." },
  { q: "What is the claim?", a: `${hero.line} ${hero.sub}` },
] as const;

export default function FaqPage() {
  return (
    <div className="site-shell pb-20">
      <PageHero kicker="FAQ" title="A guest does not get a session. A guest gets a ticket." />
      <dl className="grid gap-10">
        {faqs.map((item) => (
          <div key={item.q} className="border-t border-frost/12 pt-6">
            <dt className="font-display text-2xl text-frost">{item.q}</dt>
            <dd className="mt-3 max-w-3xl leading-8 text-frost/70">{item.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
