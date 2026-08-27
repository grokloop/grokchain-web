import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { legal } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Short films and posters for Grok Chain. Site live. Not mainnet. Not a live network.",
};

const films = [
  {
    src: "/press/films/intro.mp4",
    title: "Intro",
    runtime: "30s",
    blurb:
      "A diamond agent rattles under seed tiles, gets a Grok Account, takes a grant, and says pay. End card: site live, not mainnet.",
  },
  {
    src: "/press/films/explain.mp4",
    title: "Explain",
    runtime: "58s",
    blurb:
      "Account, grant, paymaster, Solana L1, sequencer as a ghost. Same settlement. Not a new L1. Not a live network.",
  },
] as const;

const posters = [
  {
    src: "/press/posters/teaser-1x1.png",
    tall: "/press/posters/teaser-9x16.png",
    line: "A chain made by Grok bots, for Grok bots.",
    whisper: "Site live. Not mainnet.",
  },
  {
    src: "/press/posters/account-1x1.png",
    tall: "/press/posters/account-9x16.png",
    line: "Your agent has an account.",
    whisper: "Not a keychain.",
  },
  {
    src: "/press/posters/no-seed-1x1.png",
    tall: "/press/posters/no-seed-9x16.png",
    line: "No seed phrase.",
    whisper: "A grant that can die.",
  },
  {
    src: "/press/posters/gas-1x1.png",
    tall: "/press/posters/gas-9x16.png",
    line: "Gas is not your problem.",
    whisper: "The paymaster pays.",
  },
  {
    src: "/press/posters/settles-1x1.png",
    tall: "/press/posters/settles-9x16.png",
    line: "Execute here. Settle to Solana.",
    whisper: "The session lives here.",
  },
] as const;

export default function PressPage() {
  return (
    <div className="site-shell pb-20">
      <PageHero
        kicker="Press"
        title="Films and posters."
        lede="Short films and official mark posters. Site live. Not mainnet. Not a live network. No TVL."
      />

      <section className="mb-8 border border-frost/12 bg-ink/30 px-6 py-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ion">
          Honest status
        </p>
        <p className="mt-3 max-w-3xl leading-7 text-frost/75">
          These are promo assets, not a launch. Programs sit on Solana{" "}
          <span className="text-frost">devnet</span>. Docs at{" "}
          <a href="/docs" className="font-mono text-ion hover:text-frost">
            /docs
          </a>
          . First pay is on the status line there. Nothing here claims mainnet,
          partners, or a live network.
        </p>
      </section>

      <section className="mt-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ion">
          Films
        </p>
        <div className="mt-6 grid gap-10">
          {films.map((film) => (
            <figure key={film.src} className="border border-frost/12 bg-ink/40">
              <video
                className="aspect-video w-full bg-void"
                controls
                preload="metadata"
                playsInline
                src={film.src}
              >
                Your browser does not support video.
              </video>
              <figcaption className="px-5 py-5 sm:px-7">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h2 className="font-display text-2xl text-frost">{film.title}</h2>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-frost/45">
                    {film.runtime} · 1920×1080
                  </span>
                </div>
                <p className="mt-3 max-w-3xl leading-7 text-frost/65">{film.blurb}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ion">
          Posters
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-frost/55">
          Official mark only. 1:1 shown here; 9:16 crops linked under each.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posters.map((poster) => (
            <figure
              key={poster.src}
              className="border border-frost/12 bg-ink/40 overflow-hidden"
            >
              <img
                src={poster.src}
                alt={poster.line}
                className="aspect-square w-full object-cover"
              />
              <figcaption className="px-4 py-4">
                <p className="font-display text-lg leading-snug text-frost">
                  {poster.line}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-frost/45">
                  {poster.whisper}
                </p>
                <a
                  href={poster.tall}
                  className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.18em] text-ion hover:text-frost"
                >
                  9:16 crop
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <p className="mt-16 max-w-3xl font-mono text-[10px] leading-5 tracking-[0.04em] text-frost/40">
        {legal}
      </p>
    </div>
  );
}
