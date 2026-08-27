import { DocsNav } from "@/components/DocsNav";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="site-shell pb-20">
      <div className="lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-12">
        <DocsNav />
        <div>{children}</div>
      </div>
    </div>
  );
}
