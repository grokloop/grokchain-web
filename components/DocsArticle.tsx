import Link from "next/link";
import { Stack } from "@/components/PageHero";
import { docsNav } from "@/lib/docs";

export function DocsProse({
  heading,
  lines,
}: {
  heading?: string;
  lines: readonly string[];
}) {
  return (
    <section className="mt-12">
      {heading ? (
        <h2 className="font-display text-2xl text-frost sm:text-3xl">{heading}</h2>
      ) : null}
      {lines.map((p) => (
        <p key={p} className="mt-4 max-w-3xl leading-8 text-frost/70">
          {p}
        </p>
      ))}
    </section>
  );
}

export function DocsList({
  heading,
  items,
}: {
  heading?: string;
  items: readonly string[];
}) {
  return (
    <section className="mt-12">
      {heading ? (
        <h2 className="font-display text-2xl text-frost sm:text-3xl">{heading}</h2>
      ) : null}
      <ul className="mt-6 grid gap-4">
        {items.map((item) => (
          <li
            key={item}
            className="border border-frost/12 bg-ink/30 px-6 py-5 leading-7 text-frost/80"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function DocsSteps({
  heading,
  items,
}: {
  heading?: string;
  items: readonly string[];
}) {
  return (
    <section className="mt-12">
      {heading ? (
        <h2 className="mb-6 font-display text-2xl text-frost sm:text-3xl">{heading}</h2>
      ) : null}
      <Stack items={items} />
    </section>
  );
}

export function DocsLinks({
  heading,
  items,
}: {
  heading: string;
  items: readonly { href: string; title: string; text: string }[];
}) {
  return (
    <nav aria-label={heading} className="mt-12">
      <h2 className="font-display text-2xl text-frost sm:text-3xl">{heading}</h2>
      <ul className="mt-6 grid gap-4">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block border border-frost/12 bg-ink/30 px-6 py-7 hover:border-ion"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ion">
                {item.title}
              </p>
              <p className="mt-3 leading-7 text-frost/70">{item.text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function DocsPager({ current }: { current: string }) {
  const i = docsNav.findIndex((item) => item.href === current);
  const prev = i > 0 ? docsNav[i - 1] : null;
  const next = i >= 0 && i < docsNav.length - 1 ? docsNav[i + 1] : null;

  return (
    <nav
      aria-label="Docs pager"
      className="mt-16 flex justify-between gap-4 border-t border-frost/12 pt-8"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-frost/70 hover:text-ion"
        >
          ← {prev.label}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.href}
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-frost/70 hover:text-ion"
        >
          {next.label} →
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}

const figures = {
  account: {
    src: "account-dark",
    alt: "Human root (wallet / key holder) → Grok Account (official mark) → Grant (CAP · ALLOWLIST · EXPIRY) → Agent (diamond only, no key). Agent never holds a key.",
  },
  gas: {
    src: "gas-dark",
    alt: "Human funds the paymaster; the bot sends an intent into the same paymaster; Solana L1 fees are paid by the paymaster, never the bot.",
  },
  settlement: {
    src: "settlement-dark",
    alt: "Bot mouth (MCP) → grant check → Solana L1. Sequencer sits under grant check as a dashed LATER slot, off the main path.",
  },
} as const;

export function DocsFigure({ name }: { name: keyof typeof figures }) {
  const figure = figures[name];
  return (
    <figure className="mt-10 w-full border border-frost/12 bg-void">
      <picture>
        <source type="image/svg+xml" srcSet={`/diagrams/${figure.src}.svg`} />
        <img
          src={`/diagrams/${figure.src}.png`}
          alt={figure.alt}
          width={1600}
          height={900}
          className="block aspect-video h-auto w-full"
        />
      </picture>
    </figure>
  );
}
