"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsNav } from "@/lib/docs";

export function DocsNav() {
  const path = usePathname();

  return (
    <nav
      aria-label="Docs"
      className="border-b border-frost/12 py-6 lg:sticky lg:top-16 lg:self-start lg:border-b-0 lg:border-r lg:py-14 lg:pr-8"
    >
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-ion">
        Docs
      </p>
      <ul className="flex flex-wrap gap-x-5 gap-y-3 lg:flex-col lg:gap-3">
        {docsNav.map((item) => {
          const on = path === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={on ? "page" : undefined}
                className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
                  on ? "text-ion" : "text-frost/70 hover:text-frost"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
