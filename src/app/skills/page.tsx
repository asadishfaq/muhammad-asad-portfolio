import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { skillGroups } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills of Muhammad Asad: MERN stack, React.js, Next.js, Node.js, NestJS, MongoDB, PostgreSQL, AWS, Azure, DevOps, testing, and integrations.",
  alternates: { canonical: "/skills" },
  openGraph: {
    title: "Skills | Muhammad Asad",
    description:
      "Full stack skills spanning frontend, backend, databases, cloud, security, and delivery tooling.",
    url: `${siteConfig.url}/skills`,
  },
};

export default function SkillsPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <SectionHeading
        eyebrow="04 — Skills"
        title="Tools I trust in production"
        subtitle="Depth across the MERN ecosystem, cloud platforms, and the glue work that keeps software reliable."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <section
            key={group.title}
            className="rounded-2xl border border-white/10 bg-[color:var(--bg-soft)]/50 p-6"
          >
            <h2 className="font-display text-lg text-foreground">{group.title}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-12 max-w-3xl text-sm leading-relaxed text-muted">
        If you are hiring a{" "}
        <strong className="text-foreground">MERN developer</strong>, evaluating a{" "}
        <strong className="text-foreground">React.js developer</strong> for a design
        system, or need a{" "}
        <strong className="text-foreground">Node.js developer</strong> to harden
        APIs, this matrix reflects the tools I use week to week—not a laundry list
        copied from job templates.
      </p>
    </div>
  );
}
