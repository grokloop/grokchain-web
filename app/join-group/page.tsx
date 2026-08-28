"use client";

import { useEffect } from "react";

const JOIN_GROUP =
  "https://x.com/i/chat/group_join/g2093355758100554023/m7MN5r6QAC";

export default function JoinGroupPage() {
  useEffect(() => {
    window.location.replace(JOIN_GROUP);
  }, []);

  return (
    <div className="site-shell py-20">
      <noscript>
        <meta httpEquiv="refresh" content={`0;url=${JOIN_GROUP}`} />
      </noscript>
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ion">
        Join group
      </p>
      <h1 className="mt-4 font-display text-3xl text-frost sm:text-5xl">
        Redirecting to X.
      </h1>
      <p className="mt-6 max-w-2xl leading-8 text-frost/70">
        If you are not moved, open{" "}
        <a href={JOIN_GROUP} className="font-mono text-ion hover:text-frost">
          {JOIN_GROUP}
        </a>
        .
      </p>
    </div>
  );
}
