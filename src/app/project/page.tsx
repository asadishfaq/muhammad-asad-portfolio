import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { projects } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio projects by Muhammad Asad: enterprise real estate operations, eForms platforms, and trading experiences built with React, Next.js, and Node.js.",
  alternates: { canonical: "/project" },
  openGraph: {
    title: "Projects | Muhammad Asad",
    description:
      "Selected MERN stack and enterprise web applications delivered end-to-end.",
    url: `${siteConfig.url}/project`,
  },
};

export default function ProjectsPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <SectionHeading
        eyebrow="03 — Projects"
        title="Selected deliveries"
        subtitle="Case studies spanning regulated workflows, high-volume admin tools, and investor-facing experiences."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.id}
            className="flex flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-display text-2xl text-foreground">{p.title}</h2>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition hover:border-accent/40 hover:text-accent"
                  aria-label={`Open ${p.title}`}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              ) : null}
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
              {p.description}
            </p>
            {p.metrics ? (
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.metrics.map((m) => (
                  <li
                    key={m}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-white/10 px-2 py-1 text-[11px] text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-muted">
        Want details on architecture, team setup, or metrics?{" "}
        <a className="text-accent hover:text-accent-strong" href="/contact">
          Reach out on the contact page
        </a>{" "}
        — {siteConfig.email}
      </p>
    </div>
  );
}
