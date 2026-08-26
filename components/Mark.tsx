type MarkProps = {
  className?: string;
  title?: string;
};

export function Mark({ className = "h-9 w-9", title = "Grok Chain" }: MarkProps) {
  return (
    <img
      src="/mark-ion.svg"
      alt={title}
      className={className}
      width={40}
      height={40}
    />
  );
}

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="leading-none">
      <span className="block font-display text-[0.7rem] font-semibold tracking-[0.22em] text-frost sm:text-xs">
        GROK
      </span>
      <span className="block font-display text-[0.7rem] font-semibold tracking-[0.22em] text-ion sm:text-xs">
        CHAIN
      </span>
      {compact ? null : (
        <span className="sr-only">Grok Chain</span>
      )}
    </span>
  );
}
