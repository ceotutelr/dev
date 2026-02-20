export function KpiCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-cyan-400/20 bg-[#1C2541]/50 p-4">
      <p className="text-sm text-slate-300">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-[#22C55E]">{value}</p>
    </div>
  );
}
