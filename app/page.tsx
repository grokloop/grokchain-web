import Link from "next/link";
import { Mark } from "@/components/Mark";
import { benefits, hero, howItWorks, manifesto, nav } from "@/lib/copy";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="site-shell grid min-h-[88vh] items-center py-16">
          <div className="max-w-5xl">
            <img
              src="/lockup-dark.png"
              alt="Grok Chain"
              className="h-16 w-auto sm:h-20"
            />
            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.32em] text-ion">
              Solana-settled SVM
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] text-frost sm:text-7xl lg:text-8xl">
              {hero.line}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-frost/70 sm:text-xl">
              {hero.sub}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/access"
                className="inline-flex items-center justify-center bg-ion px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink hover:bg-frost"
              >
                Read the access layer
              </Link>
              <Link
                href="/lore"
                className="inline-flex items-center justify-center border border-frost/25 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-frost hover:border-ion hover:text-ion"
              >
                The lore
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell py-8">
        <div className="ion-rule mb-10" />
        <p className="font-display text-2xl text-frost/80 sm:text-4xl">{hero.alt}</p>
        <p className="mt-4 max-w-2xl text-frost/55">{hero.altSub}</p>
      </section>

      <section className="site-shell grid gap-4 py-16 sm:grid-cols-2">
        {howItWorks.map((item) => (
          <p key={item} className="border border-frost/12 bg-ink/30 px-6 py-8 font-display text-2xl leading-snug text-frost">
            {item}
          </p>
        ))}
      </section>

      <section className="site-shell py-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ion">Benefits</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {benefits.map((item) => (
            <h2 key={item} className="font-display text-3xl leading-tight text-frost sm:text-4xl">
              {item}
            </h2>
          ))}
        </div>
      </section>

      <section className="site-shell py-20">
        <div className="flex items-end justify-between gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ion">Manifesto</p>
          <Mark className="h-8 w-8 opacity-80" />
        </div>
        <div className="mt-8 grid gap-3">
          {manifesto.map((line) => (
            <p key={line} className="font-display text-2xl leading-snug text-frost sm:text-3xl">
              {line}
            </p>
          ))}
        </div>
      </section>

      <section className="site-shell pb-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ion">Jumps</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border border-frost/12 px-5 py-5 font-mono text-[11px] uppercase tracking-[0.2em] text-frost/70 hover:border-ion hover:text-ion"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
