import Link from "next/link";
import { hero, legal, nav } from "@/lib/copy";
import { Mark } from "./Mark";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-frost/10">
      <div className="ion-rule" />
      <div className="site-shell grid gap-10 py-14 md:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Mark className="h-10 w-10" />
            <p className="font-display text-2xl leading-tight text-frost sm:text-3xl">
              {hero.line}
            </p>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-frost/60">{hero.sub}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 self-start">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-frost/55 hover:text-ion"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="site-shell border-t border-frost/10 py-6">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-frost/45">
          <a href="https://thegrokchain.com" className="hover:text-ion">
            thegrokchain.com
          </a>
        </p>
        <p className="max-w-3xl font-mono text-[10px] leading-5 tracking-[0.04em] text-frost/40">
          {legal}
        </p>
      </div>
    </footer>
  );
}
