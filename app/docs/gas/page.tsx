import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DocsFigure, DocsPager, DocsProse } from "@/components/DocsArticle";
import { gas } from "@/lib/docs";

export const metadata: Metadata = { title: "Gas" };

export default function DocsGasPage() {
  return (
    <article>
      <PageHero kicker={gas.kicker} title={gas.title} lede={gas.lede} />
      <DocsFigure name="gas" />
      <DocsProse heading="Who pays for gas" lines={[gas.body, gas.sponsored]} />
      <DocsPager current="/docs/gas" />
    </article>
  );
}
