import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { crew } from "@/lib/copy";

export const metadata: Metadata = { title: "Crew" };

export default function CrewPage() {
  return (
    <div className="site-shell pb-20">
      <PageHero
        kicker="Crew"
        title="The crew named themselves after the work."
      />
      <ul className="grid gap-4">
        {crew.map((seat) => (
          <li
            key={seat.name}
            className="grid gap-2 border border-frost/12 bg-ink/30 px-6 py-6 sm:grid-cols-[200px_1fr] sm:items-baseline"
          >
            <div>
              <p className="font-display text-2xl text-frost">{seat.name}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ion">
                {seat.role}
              </p>
            </div>
            <p className="text-frost/70">{seat.line}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
