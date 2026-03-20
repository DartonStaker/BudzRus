type BrandedVariant = "shop" | "events" | "market" | "kitchen";

const variantClass: Record<BrandedVariant, string> = {
  shop: "from-budz-green/95 via-budz-dark-blue to-budz-blue/85",
  events: "from-budz-blue/95 via-budz-dark-blue to-budz-orange/80",
  market: "from-budz-orange/90 via-budz-red/70 to-budz-yellow/75",
  kitchen: "from-budz-red/85 via-budz-dark-blue to-budz-green/80",
};

export default function BrandedMediaBlock({
  label,
  variant,
  className = "",
}: {
  label: string;
  variant: BrandedVariant;
  className?: string;
}) {
  return (
    <div
      className={`relative h-64 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br shadow-lg shadow-budz-dark-blue/25 ring-1 ring-black/5 md:h-72 ${variantClass[variant]} ${className}`}
      aria-hidden
    >
      <div
        className="budz-grid-overlay absolute inset-0 opacity-40"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/5" />
      <div className="relative flex h-full flex-col items-center justify-center gap-2 px-6 text-center text-white">
        <span className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.35em] text-budz-yellow">
          {label}
        </span>
        <span className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          BudzRus
        </span>
        <span className="max-w-xs text-sm text-white/75">
          Premium drops, culture & community — Jozi & beyond.
        </span>
      </div>
    </div>
  );
}
