import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DocsPager, DocsProse, DocsSteps } from "@/components/DocsArticle";
import { DocsPrograms, FirstPay, ProvenAmm, StatusLine } from "@/components/LiveStatus";
import { devnetWalk, easierThanSolana, howToUse } from "@/lib/docs";

export const metadata: Metadata = { title: "Use" };

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="mt-4 overflow-x-auto border border-frost/12 bg-ink/30 px-5 py-4 font-mono text-[12px] leading-6 text-frost/80">
      <code>{children}</code>
    </pre>
  );
}

export default function DocsUsePage() {
  return (
    <article>
      <PageHero kicker={howToUse.kicker} title={howToUse.title} lede={howToUse.lede} />

      <div className="mb-8">
        <StatusLine />
      </div>

      <div className="mb-10">
        <FirstPay />
        <div className="mt-6">
          <ProvenAmm />
        </div>
      </div>

      <p className="max-w-3xl leading-8 text-frost/70">
        Start at{" "}
        <a
          href={devnetWalk.mcpUrl}
          className="font-mono text-ion hover:text-frost"
        >
          {devnetWalk.mcpUrl}
        </a>
        . You sign. The bot talks. Never hand it a seed.
      </p>

      <DocsSteps heading="How to use" items={howToUse.steps} />

      <section className="mt-12">
        <h2 className="font-display text-2xl text-frost sm:text-3xl">
          {devnetWalk.programsHeading}
        </h2>
        <p className="mt-4 max-w-3xl leading-8 text-frost/70">{devnetWalk.programsLede}</p>
        <DocsPrograms />
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-frost sm:text-3xl">
          {devnetWalk.untilHeading}
        </h2>
        <p className="mt-4 max-w-3xl leading-8 text-frost/70">{devnetWalk.untilLede}</p>
        <CodeBlock>{howToUse.setupTwoLiner}</CodeBlock>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-frost sm:text-3xl">
          {devnetWalk.mcpHeading}
        </h2>
        <p className="mt-4 max-w-3xl leading-8 text-frost/70">{devnetWalk.mcpLede}</p>
        <CodeBlock>{devnetWalk.mcpConfig}</CodeBlock>
      </section>

      <DocsProse heading="What lands" lines={[howToUse.close, ...devnetWalk.rules]} />

      <DocsProse
        heading={easierThanSolana.title}
        lines={[easierThanSolana.lede, ...easierThanSolana.lines]}
      />

      <DocsPager current="/docs/use" />
    </article>
  );
}
