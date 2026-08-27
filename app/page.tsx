import Link from "next/link";
import { CopyTicker } from "@/components/CopyTicker";
import { hero, install, status, token } from "@/lib/copy";

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
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CopyTicker />
              <p className="break-all font-mono text-[11px] leading-6 tracking-[0.04em] text-frost/55">
                {token.ca}
              </p>
            </div>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] text-frost sm:text-7xl lg:text-8xl">
              {hero.line}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-frost/70 sm:text-xl">
              {hero.sub}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#install"
                className="inline-flex items-center justify-center bg-ion px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink hover:bg-frost"
              >
                Install
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="install" className="site-shell py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ion">
          {install.kicker}
        </p>
        <h2 className="mt-4 max-w-4xl font-display text-3xl leading-tight text-frost sm:text-5xl">
          {install.title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-frost/70">
          {install.body}
        </p>
        <pre className="mt-8 overflow-x-auto border border-frost/12 bg-ink/50 px-5 py-5 font-mono text-sm leading-7 text-frost sm:text-base">
          <code>{install.commands}</code>
        </pre>
        <p className="mt-6 max-w-2xl leading-8 text-frost/70">
          {install.afterLead}{" "}
          <code className="font-mono text-sm text-ion">{install.mcp}</code>
          . {install.afterClose}
        </p>
        <Link
          href={install.docsHref}
          className="mt-6 inline-flex font-mono text-[11px] uppercase tracking-[0.2em] text-ion hover:text-frost"
        >
          {install.docsLabel}
        </Link>
      </section>

      <section className="site-shell pb-20">
        <div className="ion-rule mb-10" />
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ion">
          {status.kicker}
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-frost/70">
          {status.line}
        </p>
      </section>
    </div>
  );
}
