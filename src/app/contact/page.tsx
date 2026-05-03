import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Muhammad Asad — MERN full stack developer in Lahore, Pakistan. Email asadishfaq100@gmail.com or call +92 300 8189126 for React and Node.js projects.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Muhammad Asad",
    description:
      "Hire Muhammad Asad for senior MERN, React, and Node.js engineering engagements.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <SectionHeading
        eyebrow="05 — Contact"
        title="Let’s build reliable software together"
        subtitle="Tell me about your team, timelines, and constraints—I typically reply within one business day."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.02] p-8">
          <ContactRow
            icon={<Mail className="h-5 w-5" />}
            label="Email"
            value={siteConfig.email}
            href={`mailto:${siteConfig.email}`}
          />
          <ContactRow
            icon={<Phone className="h-5 w-5" />}
            label="Phone / WhatsApp"
            value={siteConfig.phone}
            href={`tel:${siteConfig.phoneTel}`}
          />
          <ContactRow
            icon={<MapPin className="h-5 w-5" />}
            label="Location"
            value={siteConfig.location}
          />
          <ContactRow
            icon={<LinkedInGlyph />}
            label="LinkedIn"
            value="Profile"
            href={siteConfig.linkedin}
            external
          />
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-accent/10 via-transparent to-indigo-500/10 p-8">
          <h2 className="font-display text-2xl text-foreground">
            Ideal collaborations
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>• Senior or lead MERN roles with architecture ownership</li>
            <li>• Next.js / React performance and design system work</li>
            <li>• Node.js service hardening, security, and observability</li>
            <li>• Greenfield MVPs that need pragmatic cloud foundations</li>
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-muted">
            For spam protection, this portfolio uses direct mailto/tel links instead
            of a public form. If you prefer a form, we can wire Resend or another
            provider in a follow-up change.
          </p>
        </div>
      </div>
    </div>
  );
}

function LinkedInGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = href ? (
    <a
      href={href}
      className="text-sm font-medium text-foreground hover:text-accent"
      {...(external
        ? { target: "_blank", rel: "noreferrer" }
        : {})}
    >
      {value}
    </a>
  ) : (
    <p className="text-sm font-medium text-foreground">{value}</p>
  );

  return (
    <div className="flex gap-4 rounded-2xl border border-white/5 bg-[color:var(--bg)]/60 p-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-muted">{label}</p>
        <div className="mt-1">{content}</div>
      </div>
    </div>
  );
}
