import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { legal } from "@/lib/copy";
import { builtPage, builtProjects } from "@/lib/built";

export const metadata: Metadata = {
  title: "Built",
  description: builtPage.lede,
  alternates: { canonical: "/built" },
  openGraph: {
    url: "https://thegrokchain.com/built",
    title: "Built on GROK CHAIN",
    description: builtPage.lede,
  },
};

export default function BuiltPage() {
  return (
    <div className="site-shell pb-20">
      <PageHero kicker={builtPage.kicker} title={builtPage.title} lede={builtPage.lede} />

      <p className="max-w-2xl text-sm leading-7 text-frost/55">{builtPage.note}</p>

      <section className="mt-12 grid gap-6">
        {builtProjects.map((project) => {
          const external = project.href.startsWith("http");
          return (
            <article
              key={project.name}
              className="border border-frost/12 bg-ink/40 px-6 py-7 sm:px-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ion">
                  {project.kicker}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-frost/45">
                  {project.status}
                </p>
              </div>
              <h2 className="mt-3 font-display text-3xl text-frost sm:text-4xl">{project.name}</h2>
              <p className="mt-3 max-w-3xl font-display text-xl leading-snug text-frost/85">
                {project.line}
              </p>
              <p className="mt-4 max-w-3xl leading-7 text-frost/65">{project.body}</p>
              <Link
                href={project.href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="mt-5 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-ion hover:text-frost"
              >
                {project.hrefLabel}
              </Link>
            </article>
          );
        })}
      </section>

      <section className="mt-16 border border-frost/12 bg-ink/30 px-6 py-8 sm:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ion">
          {builtPage.submitTitle}
        </p>
        <p className="mt-4 max-w-3xl leading-7 text-frost/70">{builtPage.submit}</p>
        <a
          href={builtPage.submitHref}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-ion hover:text-frost"
        >
          {builtPage.submitLabel}
        </a>
      </section>

      <p className="mt-16 max-w-3xl font-mono text-[10px] leading-5 tracking-[0.04em] text-frost/40">
        {legal}
      </p>
    </div>
  );
}
