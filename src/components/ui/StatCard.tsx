type Props = { label: string; value: string };

export function StatCard({ label, value }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 shadow-inner shadow-black/40">
      <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}
