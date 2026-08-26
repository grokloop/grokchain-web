export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="pt-14 pb-10 sm:pt-20">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ion">{kicker}</p>
      <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.05] text-frost sm:text-6xl">
        {title}
      </h1>
      {lede ? (
        <p className="mt-6 max-w-2xl text-base leading-8 text-frost/70 sm:text-lg">{lede}</p>
      ) : null}
    </div>
  );
}

export function Stack({ items }: { items: readonly string[] }) {
  return (
    <ol className="grid gap-4">
      {items.map((item, i) => (
        <li
          key={item}
          className="border border-frost/12 bg-ink/40 px-5 py-5 sm:px-7"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ion">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="mt-2 font-display text-xl leading-snug text-frost sm:text-2xl">{item}</p>
        </li>
      ))}
    </ol>
  );
}
