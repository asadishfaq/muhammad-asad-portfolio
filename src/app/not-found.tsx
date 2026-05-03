import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl text-foreground">
        This page could not be found
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted">
        The route may have moved. Return home or open the contact page if you
        were expecting something specific.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#041014]"
      >
        Back to home
      </Link>
    </div>
  );
}
