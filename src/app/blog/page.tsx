import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpen } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { blogPosts } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles by Muhammad Asad on MERN stack development, React.js performance, Node.js API security, and Next.js architecture.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Muhammad Asad",
    description:
      "Writing on MERN, React, Node.js, and shipping reliable enterprise software.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <SectionHeading
        eyebrow="Journal"
        title="Notes from production engineering"
        subtitle="Long-form thoughts aimed at teams hiring MERN developers and leaders who care about maintainability."
      />

      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-accent/30"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
              <BookOpen className="h-4 w-4 text-accent" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-PK", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="mt-3 font-display text-2xl text-foreground">
              <Link
                href={`/blog/${post.slug}`}
                className="transition group-hover:text-accent"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:text-accent-strong"
            >
              Read article
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
