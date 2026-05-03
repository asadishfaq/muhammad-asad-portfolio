import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { experiences } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience of Muhammad Asad: Senior MERN engineer at Nextbridge, Ropstam, ALEC Dubai, and Aquila360 — React, Next.js, Node.js, AWS, and Azure.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Experience | Muhammad Asad",
    description:
      "Chronological MERN and full stack engineering experience across enterprise, fintech, and platform teams.",
    url: `${siteConfig.url}/experience`,
  },
};

export default function ExperiencePage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <SectionHeading
        eyebrow="02 — Experience"
        title="Where I’ve shipped impact"
        subtitle="A concise history focused on outcomes, systems design, and leadership—not buzzwords."
      />

      <div className="relative space-y-10 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-gradient-to-b before:from-accent/60 before:to-white/10 sm:pl-8">
        {experiences.map((job) => (
          <article
            key={job.id}
            className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:pl-2"
          >
            <span className="absolute left-[-23px] top-8 hidden h-3 w-3 rounded-full border border-accent/50 bg-[color:var(--bg)] shadow-[0_0_12px_var(--glow)] sm:block" />
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="font-display text-xl text-foreground sm:text-2xl">
                  {job.role}
                </h2>
                <p className="text-sm font-medium text-accent">{job.company}</p>
                <p className="text-xs text-muted">
                  {job.location} · {job.start} — {job.end}
                </p>
              </div>
              {job.link ? (
                <a
                  href={job.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-muted hover:text-accent"
                >
                  Reference
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : null}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">{job.summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/90">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {job.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-[color:var(--bg-soft)] px-2.5 py-1 text-[11px] text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
