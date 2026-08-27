import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DocsFigure, DocsPager, DocsProse } from "@/components/DocsArticle";
import { whyABot } from "@/lib/docs";

export const metadata: Metadata = { title: "Account" };

export default function DocsAccountPage() {
  return (
    <article>
      <PageHero kicker={whyABot.kicker} title={whyABot.title} lede={whyABot.lede} />
      <DocsFigure name="account" />
      <DocsProse heading="Grok Accounts" lines={[whyABot.mouth, whyABot.points[0]]} />
      <DocsProse heading="Grants" lines={[whyABot.points[1]]} />
      <DocsProse heading="Human is root" lines={[whyABot.close]} />
      <DocsPager current="/docs/account" />
    </article>
  );
}
