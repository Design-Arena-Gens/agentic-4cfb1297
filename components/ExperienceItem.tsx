import type { Experience } from "@/lib/cv-data";

export function ExperienceItem({
  role,
  company,
  period,
  bullets
}: Experience) {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-sm shadow-slate-100">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{role}</h3>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            {company}
          </span>
        </div>
        <span className="text-sm font-semibold text-highlight">{period}</span>
      </div>
      <ul className="mt-4 list-disc space-y-2 text-sm text-slate-600 marker:text-highlight marker:text-base pl-4">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
