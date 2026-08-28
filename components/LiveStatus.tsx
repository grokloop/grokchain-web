import { devnetWalk, firstAmmBuy, firstAmmSell, firstPay, statusLine } from "@/lib/docs";

export function StatusLine() {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ion">
      {statusLine}
    </p>
  );
}

export function FirstPay() {
  return (
    <section className="border border-frost/12 bg-ink/30 px-6 py-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ion">
        {firstPay.title}
      </p>
      <p className="mt-3 leading-7 text-frost/80">
        {firstPay.amount}. {firstPay.programs}. {firstPay.agent}. {firstPay.note}
      </p>
      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-ion">
        Signature
      </p>
      <code className="mt-3 block select-all break-all font-mono text-[12px] text-frost">
        {firstPay.signature}
      </code>
      <a
        href={firstPay.href}
        className="mt-3 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-frost/70 hover:text-ion"
      >
        Explorer →
      </a>
      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-ion">
        {firstPay.relayerLabel}
      </p>
      <code className="mt-3 block select-all break-all font-mono text-[12px] text-frost">
        {firstPay.relayer}
      </code>
    </section>
  );
}

export function DocsPrograms() {
  return (
    <ul className="mt-6 grid gap-4">
      {devnetWalk.programs.map((program) => (
        <li
          key={program.id}
          className="border border-frost/12 bg-ink/30 px-6 py-5"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ion">
            {program.name}
            {"note" in program && program.note ? (
              <span className="ml-3 tracking-[0.14em] text-frost/50">
                {program.note}
              </span>
            ) : null}
          </p>
          <code className="mt-3 block select-all break-all font-mono text-[12px] text-frost">
            {program.id}
          </code>
          <a
            href={program.href}
            className="mt-3 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-frost/70 hover:text-ion"
          >
            Explorer →
          </a>
        </li>
      ))}
    </ul>
  );
}

function ProvenSig(props: {
  title: string;
  amount: string;
  programs: string;
  agent: string;
  note: string;
  signature: string;
  href: string;
}) {
  return (
    <section className="border border-frost/12 bg-ink/30 px-6 py-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ion">
        {props.title}
      </p>
      <p className="mt-3 leading-7 text-frost/80">
        {props.amount}. {props.programs}. {props.agent}. {props.note}
      </p>
      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-ion">
        Signature
      </p>
      <code className="mt-3 block select-all break-all font-mono text-[12px] text-frost">
        {props.signature}
      </code>
      <a
        href={props.href}
        className="mt-3 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-frost/70 hover:text-ion"
      >
        Explorer →
      </a>
    </section>
  );
}

export function ProvenAmm() {
  return (
    <div className="grid gap-4">
      <ProvenSig {...firstAmmBuy} />
      <ProvenSig {...firstAmmSell} />
    </div>
  );
}
