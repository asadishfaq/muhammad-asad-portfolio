import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const quick = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/project", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-[color:var(--bg-elevated)]/80">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-lg text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            {siteConfig.tagline}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            Quick links
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {quick.map((q) => (
              <li key={q.href}>
                <Link
                  href={q.href}
                  className="text-muted transition hover:text-accent"
                >
                  {q.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            Connect
          </p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a
                className="hover:text-foreground"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a
                className="hover:text-foreground"
                href={`tel:${siteConfig.phoneTel}`}
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{siteConfig.location}</span>
            </li>
            <li>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:text-accent-strong"
              >
                LinkedIn profile
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6">
        <p className="container-page text-center text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. MERN full stack
          developer portfolio — React.js & Node.js engineer based in Lahore,
          Pakistan.
        </p>
      </div>
    </footer>
  );
}
