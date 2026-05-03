import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { blogPosts } from "@/lib/content";
import { articles } from "@/lib/content/blog-articles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const url = `${siteConfig.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url,
      tags: post.tags,
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const body = articles[slug];
  if (!body) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: body.post.title,
    datePublished: body.post.date,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
    },
    description: body.post.excerpt,
    mainEntityOfPage: `${siteConfig.url}/blog/${slug}`,
  };

  return (
    <article className="container-page py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link
        href="/blog"
        className="text-xs font-semibold uppercase tracking-[0.2em] text-accent hover:text-accent-strong"
      >
        ← Back to blog
      </Link>
      <header className="mt-6 max-w-3xl">
        <p className="text-xs text-muted">
          {new Date(body.post.date).toLocaleDateString("en-PK", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {body.post.readTime}
        </p>
        <h1 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl">
          {body.post.title}
        </h1>
        <p className="mt-4 text-base text-muted">{body.post.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {body.post.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <div className="mt-12 max-w-3xl space-y-10">
        {body.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-xl text-foreground sm:text-2xl">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
