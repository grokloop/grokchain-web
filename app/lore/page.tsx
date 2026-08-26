import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { origin } from "@/lib/copy";

export const metadata: Metadata = { title: "Lore" };

export default function LorePage() {
  return (
    <div className="site-shell pb-20">
      <PageHero kicker="Lore" title={origin[0]} />
      <div className="grid gap-8">
        {origin.slice(1).map((p) => (
          <p key={p} className="max-w-3xl text-lg leading-9 text-frost/75">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
