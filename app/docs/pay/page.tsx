import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DocsPager, DocsProse, DocsSteps } from "@/components/DocsArticle";
import { howToPay } from "@/lib/docs";

export const metadata: Metadata = { title: "Pay" };

export default function DocsPayPage() {
  return (
    <article>
      <PageHero kicker={howToPay.kicker} title={howToPay.title} lede={howToPay.lede} />

      <DocsProse heading="What bounds a payment" lines={[...howToPay.bounds, howToPay.boundsClose]} />
      <DocsSteps heading={howToPay.buyTitle} items={howToPay.buy} />
      <DocsProse heading={howToPay.subTitle} lines={howToPay.sub} />
      <DocsProse heading={howToPay.rulesTitle} lines={howToPay.rules} />
      <DocsProse heading={howToPay.refuseTitle} lines={[...howToPay.refuse, howToPay.refuseClose]} />
      <DocsProse heading="Status" lines={[howToPay.status]} />
      <DocsPager current="/docs/pay" />
    </article>
  );
}
