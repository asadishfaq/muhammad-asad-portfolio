"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/project", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`relative flex h-10 items-center whitespace-nowrap rounded-lg px-3.5 text-[13px] font-semibold tracking-wide transition-colors sm:text-sm ${
        active
          ? "bg-accent/12 text-accent ring-1 ring-accent/20"
          : "text-muted hover:bg-white/[0.06] hover:text-foreground"
      }`}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <div className="relative bg-[color:var(--bg)]/[0.35] backdrop-blur-md supports-[backdrop-filter]:bg-[color:var(--bg)]/[0.22]">
        <div className="container-page">
          <div className="flex min-h-14 items-center gap-2 sm:min-h-[3.75rem] sm:gap-4">
            <div className="flex min-h-10 min-w-0 flex-1 basis-0 items-center justify-start">
              <Link
                href="/"
                className="group relative inline-flex min-h-10 min-w-0 max-w-full items-center py-0.5"
                aria-label={`${siteConfig.name} — home`}
              >
                <span className="header-brand-text truncate font-display text-lg font-medium leading-none tracking-tight transition-[letter-spacing] duration-300 group-hover:tracking-wide sm:text-xl">
                  {siteConfig.name}
                </span>
                <span
                  className="absolute -bottom-px left-0 h-px w-full origin-center scale-x-0 bg-gradient-to-r from-transparent via-accent/80 to-transparent transition duration-500 ease-out group-hover:scale-x-100"
                  aria-hidden
                />
              </Link>
            </div>

            <nav
              aria-label="Primary"
              className="hidden h-10 shrink-0 items-center gap-0.5 md:flex"
            >
              {links.map((l) => (
                <NavLink key={l.href} {...l} />
              ))}
            </nav>

            <div className="flex min-h-10 flex-1 basis-0 items-center justify-end gap-2 sm:gap-3">
              <Link
                href="/contact"
                className="hidden h-10 items-center justify-center rounded-full bg-accent px-4 text-sm font-semibold text-[#041014] shadow-[0_0_24px_var(--glow)] transition hover:bg-accent-strong md:inline-flex"
              >
                Let&apos;s talk
              </Link>
              <button
                type="button"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-foreground transition hover:bg-white/[0.06] md:hidden"
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        <div className="header-nav-rail mb-2 mt-1 w-full sm:mt-1.5" aria-hidden />

        {open ? (
          <div className="border-t border-white/[0.06] bg-[color:var(--bg)]/40 px-4 py-4 backdrop-blur-lg md:hidden">
            <nav className="flex flex-col gap-1" aria-label="Primary mobile">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
                      active
                        ? "bg-accent/10 text-accent ring-1 ring-accent/25"
                        : "text-foreground hover:bg-white/[0.06]"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-[#041014] shadow-[0_0_20px_var(--glow)]"
              >
                Let&apos;s talk
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
