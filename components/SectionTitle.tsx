type SectionTitleProps = {
  label: string;
};

export function SectionTitle({ label }: SectionTitleProps) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
      <div className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
        {label}
      </div>
      <div className="h-px flex-1 bg-gradient-to-l from-slate-200 to-transparent" />
    </div>
  );
}
