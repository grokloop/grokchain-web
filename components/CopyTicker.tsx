"use client";

import { useState } from "react";
import { token } from "@/lib/copy";

export function CopyTicker({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(token.ca);
    } catch {
      const el = document.createElement("textarea");
      el.value = token.ca;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      el.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={copy}
      title={`Copy CA ${token.ca}`}
      className={`inline-flex items-center justify-center bg-ion px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink hover:bg-frost ${className}`}
    >
      {copied ? "Copied" : token.ticker}
    </button>
  );
}
