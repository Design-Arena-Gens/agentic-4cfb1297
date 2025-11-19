import type { Project } from "@/lib/cv-data";

export function PortfolioCard({
  title,
  description,
  role,
  tools,
  link,
  outcome
}: Project) {
  return (
    <article className="rounded-3xl border border-slate-200/70 bg-white/60 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-display text-xl font-semibold text-slate-900">
          {title}
        </h3>
        <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
          {role}
        </span>
      </div>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.1em] text-slate-500">
        {tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1"
          >
            {tool}
          </span>
        ))}
      </div>
      {(link || outcome) && (
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-highlight">
          {link && (
            <a
              href={link}
              className="flex items-center gap-1 font-semibold underline decoration-dotted underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              <span>View project</span>
              <span aria-hidden>↗</span>
            </a>
          )}
          {outcome && (
            <span className="rounded-full bg-highlight/10 px-3 py-1 font-semibold text-highlight">
              {outcome}
            </span>
          )}
        </div>
      )}
    </article>
  );
}
