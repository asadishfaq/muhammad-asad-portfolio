import type { Metadata } from "next";
import Link from "next/link";
import { Download, MapPin, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { profile } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Muhammad Asad",
  description:
    "About Muhammad Asad — senior MERN full stack developer in Lahore with 10+ years building React, Next.js, and Node.js platforms for enterprise clients.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Muhammad Asad | MERN & React developer",
    description:
      "Professional background of Muhammad Asad: MERN stack, React.js, Node.js, cloud delivery, and technical leadership.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <SectionHeading
        eyebrow="01 — About"
        title="Muhammad Asad"
        subtitle="Senior MERN Engineer focused on secure, observable systems and polished product experiences."
      />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-base leading-relaxed text-muted">
          <p>{profile.summary}</p>
          <p>
            I collaborate closely with product, design, and QA partners—translating
            complex business rules into maintainable React and Next.js interfaces,
            while keeping Node.js services predictable under load.
          </p>
          <p>
            Outside of delivery work, I stay current on cloud tooling, performance
            budgets, and security practices so teams can ship quickly without
            trading away long-term velocity.
          </p>
        </div>

        <aside className="h-fit space-y-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6">
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <div>
              <p className="font-medium text-foreground">Location</p>
              <p className="text-muted">{siteConfig.location}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <div>
              <p className="font-medium text-foreground">Email</p>
              <a className="text-muted hover:text-accent" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <div>
              <p className="font-medium text-foreground">Phone</p>
              <a className="text-muted hover:text-accent" href={`tel:${siteConfig.phoneTel}`}>
                {siteConfig.phone}
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-dashed border-white/15 p-4 text-xs text-muted">
            <p className="flex items-center gap-2 font-semibold text-foreground">
              <Download className="h-4 w-4 text-accent" />
              Résumé
            </p>
            <p className="mt-2">
              Add your PDF to <code className="text-accent">/public/resume.pdf</code>{" "}
              and link it here when ready.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-accent py-2.5 text-sm font-semibold text-[#041014]"
          >
            Start a conversation
          </Link>
        </aside>
      </div>
    </div>
  );
}
