import Image from "next/image";
import { DownloadButton } from "@/components/DownloadButton";
import { ExperienceItem } from "@/components/ExperienceItem";
import { PortfolioCard } from "@/components/PortfolioCard";
import { SectionTitle } from "@/components/SectionTitle";
import { TagList } from "@/components/TagList";
import { cvData } from "@/lib/cv-data";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f4f6fb] to-[#e8ebf5] pb-16">
      <div className="print-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <div>
            <div className="flex flex-wrap items-baseline gap-3">
              <h1 className="font-display text-4xl font-semibold text-slate-900">
                {cvData.fullName}
              </h1>
              <span className="rounded-full bg-highlight/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
                {cvData.title}
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
              {cvData.summary}
            </p>
          </div>
          <div className="screen-only flex items-center gap-5">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border border-slate-200 bg-slate-100 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80"
                alt="Portrait of Alexandra Rivera"
                fill
                className="object-cover"
                priority
              />
            </div>
            <DownloadButton />
          </div>
        </div>

        <div className="mt-8 grid gap-6 text-sm text-slate-600 md:grid-cols-2">
          <ContactItem
            icon="phone"
            label={cvData.contact.phone}
            href={`tel:${cvData.contact.phone.replace(/[^0-9+]/g, "")}`}
          />
          <ContactItem
            icon="mail"
            label={cvData.contact.email}
            href={`mailto:${cvData.contact.email}`}
          />
          <ContactItem icon="location" label={cvData.contact.location} />
          <ContactItem
            icon="link"
            label={cvData.contact.website}
            href={cvData.contact.website}
          />
          <ContactItem
            icon="linkedin"
            label={cvData.contact.linkedin}
            href={`https://${cvData.contact.linkedin}`}
          />
        </div>

        <section className="mt-12">
          <SectionTitle label="Experience" />
          <div className="grid gap-5">
            {cvData.experiences.map((experience) => (
              <ExperienceItem key={experience.company} {...experience} />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <SectionTitle label="Education" />
          <div className="grid gap-4 md:grid-cols-2">
            {cvData.education.map((edu) => (
              <div
                key={`${edu.institution}-${edu.degree}`}
                className="rounded-3xl border border-slate-200/70 bg-white/70 p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {edu.period}
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  {edu.degree}
                </h3>
                <p className="text-sm text-slate-600">{edu.institution}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <SectionTitle label="Skills" />
          <div className="grid gap-6 md:grid-cols-3">
            <SkillBlock title="Technical" items={cvData.skills.technical} />
            <SkillBlock title="Methodologies" items={cvData.skills.methodologies} />
            <SkillBlock title="Soft Skills" items={cvData.skills.soft} />
          </div>
        </section>

        <section className="mt-12">
          <SectionTitle label="Certificates & Training" />
          <div className="grid gap-4 md:grid-cols-2">
            {cvData.certificates.map((cert) => (
              <div
                key={cert.title}
                className="flex items-start justify-between rounded-3xl border border-slate-200/70 bg-white/70 p-5 shadow-sm"
              >
                <div>
                  <h3 className="font-semibold text-slate-900">{cert.title}</h3>
                  <p className="text-sm text-slate-600">{cert.issuer}</p>
                </div>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <SectionTitle label="Portfolio" />
          <div className="grid gap-6 md:grid-cols-2">
            {cvData.projects.map((project) => (
              <PortfolioCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <footer className="mt-12 flex flex-col items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-1 w-1 rounded-full bg-slate-300" />
            Elevated Craft
            <span className="inline-flex h-1 w-1 rounded-full bg-slate-300" />
            {new Date().getFullYear()}
            <span className="inline-flex h-1 w-1 rounded-full bg-slate-300" />
          </div>
          <p className="text-[10px] tracking-[0.4em]">
            Meticulous · Human Centered · Measurable Impact
          </p>
        </footer>
      </div>
    </main>
  );
}

type ContactItemProps = {
  icon: "phone" | "mail" | "location" | "link" | "linkedin";
  label: string;
  href?: string;
};

function ContactItem({ icon, label, href }: ContactItemProps) {
  const content = (
    <span className="flex flex-1 items-center justify-between gap-4 rounded-3xl border border-slate-200/70 bg-white/80 px-5 py-4 shadow-sm shadow-slate-100 transition hover:-translate-y-0.5 hover:shadow-md">
      <span className="flex items-center gap-3">
        <Icon name={icon} />
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          {iconLabel(icon)}
        </span>
      </span>
      <span className="text-sm font-medium text-slate-700">{label}</span>
    </span>
  );

  if (href) {
    return (
      <a href={href} className="flex" target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return <div className="flex">{content}</div>;
}

function iconLabel(icon: ContactItemProps["icon"]) {
  switch (icon) {
    case "phone":
      return "Phone";
    case "mail":
      return "Email";
    case "location":
      return "Location";
    case "link":
      return "Website";
    case "linkedin":
      return "LinkedIn";
  }
}

function Icon({ name }: { name: ContactItemProps["icon"] }) {
  const iconClass = "h-5 w-5 text-slate-500";

  switch (name) {
    case "phone":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={iconClass}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.036c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.971 1.295a.75.75 0 0 1-.82.259 12.035 12.035 0 0 1-7.023-7.023.75.75 0 0 1 .259-.82l1.295-.971a1.125 1.125 0 0 0 .417-1.173L7.627 2.102a1.125 1.125 0 0 0-1.091-.852H5.5A2.25 2.25 0 0 0 3.25 3.5v1.5Z"
          />
        </svg>
      );
    case "mail":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={iconClass}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21.75 7.5-8.954 5.966a1.125 1.125 0 0 1-1.192 0L2.75 7.5m18.5 0A2.25 2.25 0 0 0 19 5.25H5A2.25 2.25 0 0 0 2.75 7.5m18.5 0v9a2.25 2.25 0 0 1-2.25 2.25H5A2.25 2.25 0 0 1 2.75 16.5v-9"
          />
        </svg>
      );
    case "location":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={iconClass}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
      );
    case "link":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={iconClass}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 12a3.75 3.75 0 0 0 3.75 3.75h1.5m4.5-7.5H18A3.75 3.75 0 1 1 18 18h-3.75m-4.5 0H6A3.75 3.75 0 0 1 6 6h3.75"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={iconClass}
          fill="currentColor"
        >
          <path d="M5.16 8.75H2.25V21h2.91Zm13.5-.162c-2.156 0-3.598 1.174-3.89 2.276h-.058V8.75H11.1v12.25h3.668v-6.05c0-1.594.302-3.136 2.276-3.136 1.945 0 1.973 1.82 1.973 3.234V21H22.5v-6.665c0-3.304-.622-5.747-3.84-5.747ZM3.686 3a1.686 1.686 0 1 0 0 3.372 1.686 1.686 0 0 0 0-3.372Z" />
        </svg>
      );
  }
}

function SkillBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-sm shadow-slate-100">
      <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        {title}
      </h3>
      <div className="mt-4">
        <TagList items={items} />
      </div>
    </div>
  );
}
