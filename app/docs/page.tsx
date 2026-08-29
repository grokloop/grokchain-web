import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { DocsFigure, DocsLinks, DocsPager, DocsProse } from "@/components/DocsArticle";
import { CoreGrief, DocsPrograms, FirstPay, ProvenAmm, ProvenCurve, ProvenWithdraw, SkipDebit, StatusLine } from "@/components/LiveStatus";
import { docsLede, liftLines, whatExistsNow, whatItIs } from "@/lib/docs";

export const metadata: Metadata = { title: "Docs" };

export default function DocsPage() {
  return (
    <article>
      <PageHero kicker={whatItIs.kicker} title={whatItIs.title} lede={docsLede} />
      <DocsFigure name="settlement" />
      <DocsProse heading="What it is" lines={whatItIs.lines} />

      <section className="mt-12">
        <h2 className="font-display text-2xl text-frost sm:text-3xl">
          {whatExistsNow.title}
        </h2>
        <p className="mt-4 max-w-3xl leading-8 text-frost/70">{whatExistsNow.lede}</p>
        <div className="mt-6">
          <StatusLine />
        </div>
        <div className="mt-6">
          <FirstPay />
        </div>
        <div className="mt-6">
          <ProvenAmm />
        </div>
        <div className="mt-6">
          <ProvenCurve />
        </div>
        <div className="mt-6">
          <SkipDebit />
        </div>
        <div className="mt-6">
          <ProvenWithdraw />
        </div>
        <div className="mt-6">
          <CoreGrief />
        </div>
        <DocsPrograms />
        <ul className="mt-6 grid gap-4">
          <li className="border border-frost/12 bg-ink/30 px-6 py-5 leading-7 text-frost/80">
            {whatExistsNow.points[0]}
          </li>
          <li className="border border-frost/12 bg-ink/30 px-6 py-5 leading-7 text-frost/80">
            MCP:{" "}
            <a
              href={whatExistsNow.mcp.href}
              className="font-mono text-ion hover:text-frost"
            >
              {whatExistsNow.mcp.href}
            </a>{" "}
            — {whatExistsNow.mcp.text}
          </li>
          <li className="border border-frost/12 bg-ink/30 px-6 py-5 leading-7 text-frost/80">
            How to use:{" "}
            <Link
              href={whatExistsNow.use.href}
              className="font-mono text-ion hover:text-frost"
            >
              {whatExistsNow.use.text}
            </Link>
          </li>
          {whatExistsNow.points.slice(1).map((item) => (
            <li
              key={item}
              className="border border-frost/12 bg-ink/30 px-6 py-5 leading-7 text-frost/80"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-3xl leading-8 text-frost/70">{whatExistsNow.close}</p>
      </section>

      <DocsLinks heading="What the docs cover" items={liftLines} />
      <DocsPager current="/docs" />
    </article>
  );
}
