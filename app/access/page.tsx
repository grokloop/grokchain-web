import type { Metadata } from "next";
import { PageHero, Stack } from "@/components/PageHero";
import { howItWorks } from "@/lib/copy";

export const metadata: Metadata = { title: "Access" };

const layers = [
  {
    title: "Grok Account",
    text: "Sign in as a Grok Account. No seed phrase. Human is root. Bot never sees a key.",
  },
  {
    title: "Capability grants",
    text: "Spend this much. Call these programs. Expire. A grant that can die.",
  },
  {
    title: "Intents",
    text: "Pay. Swap. Deploy. Call. Official MCP. Grok Build skill.",
  },
  {
    title: "Approvals",
    text: "Approvals look like Grok Bot. Because they are. Show the thing. Wait for the yes.",
  },
  {
    title: "Sponsored gas",
    text: "Gas is not your problem.",
  },
] as const;

export default function AccessPage() {
  return (
    <div className="site-shell pb-20">
      <PageHero
        kicker="Access"
        title="Sign in. Grant a cap. Set an expiry."
        lede="Speak an intent. Pay, swap, deploy, call. We execute. Solana remembers."
      />
      <Architecture />
      <div className="mt-16 grid gap-5">
        {layers.map((layer) => (
          <section key={layer.title} className="border border-frost/12 bg-ink/30 px-6 py-7">
            <h2 className="font-display text-2xl text-frost sm:text-3xl">{layer.title}</h2>
            <p className="mt-3 max-w-2xl leading-7 text-frost/70">{layer.text}</p>
          </section>
        ))}
      </div>
      <div className="mt-16">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-ion">
          How it works
        </p>
        <Stack items={howItWorks} />
      </div>
    </div>
  );
}

function Architecture() {
  return (
    <div className="border border-frost/12 bg-void px-3 py-8 sm:px-8">
      <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-ion">
        Settlement circuit
      </p>
      <svg
        viewBox="0 0 920 220"
        className="h-auto w-full"
        role="img"
        aria-label="Human root to Grok Account to grant to intent to Grok Chain session, settled on Solana L1"
      >
        <defs>
          <linearGradient id="ionStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F0BA34" />
            <stop offset="42%" stopColor="#F4E8C4" />
            <stop offset="100%" stopColor="#4824A0" />
          </linearGradient>
        </defs>
        <path
          d="M40 110 H880"
          stroke="url(#ionStroke)"
          strokeWidth="1.2"
          opacity="0.5"
        />
        {[
          ["Human", "root"],
          ["Grok Account", "no seed"],
          ["Grant", "cap / list / die"],
          ["Intent", "pay swap deploy"],
          ["Session", "SVM here"],
          ["Solana L1", "finality"],
        ].map(([title, sub], i) => {
          const x = 70 + i * 150;
          return (
            <g key={title}>
              <polygon
                points={`${x},62 ${x + 38},84 ${x + 38},128 ${x},150 ${x - 38},128 ${x - 38},84`}
                fill="#07070A"
                stroke="url(#ionStroke)"
                strokeWidth="1.6"
              />
              <polygon
                points={`${x},92 ${x + 14},110 ${x},128 ${x - 14},110`}
                fill="url(#ionStroke)"
              />
              <text
                x={x}
                y={178}
                textAnchor="middle"
                fill="#F4E8C4"
                fontSize="13"
                fontFamily="IBM Plex Mono, ui-monospace, monospace"
              >
                {title}
              </text>
              <text
                x={x}
                y={196}
                textAnchor="middle"
                fill="#F0BA34"
                fontSize="10"
                fontFamily="IBM Plex Mono, ui-monospace, monospace"
              >
                {sub}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
