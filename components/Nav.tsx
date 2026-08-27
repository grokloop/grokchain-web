"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/copy";
import { CopyTicker } from "./CopyTicker";
import { Mark, Wordmark } from "./Mark";

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-frost/10 bg-void/80 backdrop-blur-md">
      <div className="site-shell flex items-center gap-4 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Mark className="h-8 w-8" />
          <Wordmark compact />
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map((item) => {
            const on = path === item.href || path.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
                  on ? "text-ion" : "text-frost/70 hover:text-frost"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <CopyTicker />
          <button
            type="button"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-frost/80 lg:hidden"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-frost/10 lg:hidden">
          <div className="site-shell grid gap-3 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.2em] text-frost/80"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
