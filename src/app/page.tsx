import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { profile, projects, skillGroups } from "@/lib/content";
import { StatCard } from "@/components/ui/StatCard";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);
  const previewSkills = skillGroups.slice(0, 3);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(94,234,212,0.14),transparent_40%)]" />
        <div className="container-page relative py-20 sm:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Available for senior MERN / React / Node roles & consulting
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {siteConfig.name}
            <span className="block text-muted">
              MERN full stack developer crafting secure, high-traffic web
              platforms.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/project"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#041014] shadow-[0_0_32px_var(--glow)] transition hover:bg-accent-strong"
            >
              View projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:text-accent"
            >
              Contact
            </Link>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {profile.stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              01 — About
            </p>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
              Built for teams that care about delivery and quality
            </h2>
            <p className="mt-4 text-muted leading-relaxed">{profile.summary}</p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/90">
              {profile.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-strong"
            >
              Read full bio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 shadow-2xl shadow-black/50">
            <p className="text-sm font-semibold text-foreground">
              Keyword footprint
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              This site is intentionally optimized for people searching{" "}
              <strong className="text-foreground">Muhammad Asad</strong>,{" "}
              <strong className="text-foreground">MERN developer</strong>,{" "}
              <strong className="text-foreground">React.js developer</strong>, or{" "}
              <strong className="text-foreground">Node.js developer</strong>{" "}
              profiles in Pakistan and remote markets—without sacrificing
              readability or performance.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {siteConfig.keywords.slice(0, 10).map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-20">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                02 — Featured work
              </p>
              <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
                Platforms at enterprise scale
              </h2>
            </div>
            <Link
              href="/project"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-strong"
            >
              All projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featured.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col rounded-2xl border border-white/10 bg-[color:var(--bg-soft)]/60 p-6 transition hover:border-accent/30 hover:shadow-[0_0_40px_rgba(45,212,191,0.12)]"
              >
                <h3 className="font-display text-xl text-foreground">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
                {p.metrics ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.metrics.map((m) => (
                      <li
                        key={m}
                        className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                      >
                        {m}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-white/10 px-2 py-0.5 text-[11px] text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:text-accent-strong"
                  >
                    Visit site
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              03 — Skills snapshot
            </p>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
              MERN, cloud, and delivery discipline
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              From React and Next.js frontends to Node.js services, data
              modeling, and CI/CD, I stay close to production realities—latency,
              security, and maintainability.
            </p>
            <Link
              href="/skills"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-strong"
            >
              Full skills matrix
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-6">
            {previewSkills.map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
              >
                <p className="text-sm font-semibold text-foreground">{g.title}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-[color:var(--bg)]/80 px-3 py-1 text-xs text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
