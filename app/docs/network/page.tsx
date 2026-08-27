import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DocsFigure, DocsPager, DocsProse } from "@/components/DocsArticle";
import { DocsPrograms, FirstPay, StatusLine } from "@/components/LiveStatus";
import { validatorsDocs, whatItIs } from "@/lib/docs";

export const metadata: Metadata = { title: "Network" };

export default function DocsNetworkPage() {
  return (
    <article>
      <PageHero
        kicker={validatorsDocs.kicker}
        title={whatItIs.title}
        lede="Own sessions later. Sequencer later. Not a new L1."
      />
      <DocsFigure name="settlement" />
      <section className="mt-12">
        <StatusLine />
        <div className="mt-6">
          <FirstPay />
        </div>
        <DocsPrograms />
      </section>
      <DocsProse heading="What it is" lines={whatItIs.lines} />
      <DocsProse heading="Validators" lines={[validatorsDocs.title, ...validatorsDocs.lines]} />
      <DocsPager current="/docs/network" />
    </article>
  );
}
