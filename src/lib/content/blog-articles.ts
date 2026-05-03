import type { BlogPost } from "./blog";

type ArticleBody = {
  post: BlogPost;
  sections: { heading: string; paragraphs: string[] }[];
};

export const articles: Record<string, ArticleBody> = {
  "mern-at-enterprise-scale": {
    post: {
      slug: "mern-at-enterprise-scale",
      title: "MERN at enterprise scale: patterns that survive traffic",
      excerpt:
        "How I structure React, Next.js, and Node services for large teams—shared UI contracts, API boundaries, and observability that keep production calm.",
      date: "2026-04-12",
      readTime: "6 min read",
      tags: ["MERN", "Node.js", "React", "Architecture"],
    },
    sections: [
      {
        heading: "Why MERN still wins in complex domains",
        paragraphs: [
          "As a MERN full stack developer shipping regulated and high-traffic products, I reach for MongoDB, Express or Nest, React, and Node.js because the stack maps cleanly to product iteration: shared TypeScript models, composable services, and UI systems that scale with design systems—not ad hoc components.",
          "Search engines and hiring managers often look for phrases like MERN developer, React.js developer, and Node.js developer together. That reflects reality: modern products rarely stop at the browser. If you are evaluating Muhammad Asad for a senior role, this article summarizes how I connect those layers in production.",
        ],
      },
      {
        heading: "Contracts between UI and API",
        paragraphs: [
          "I treat API payloads and UI state as a contract. Versioned DTOs, predictable error shapes, and optimistic UI only where rollback is cheap keep teams moving without surprise production fires.",
          "On the Node.js side, I prefer explicit routers, centralized auth guards, and observability hooks (structured logs, correlation IDs) so support teams can trace issues across React views and backend handlers quickly.",
        ],
      },
      {
        heading: "Operational discipline",
        paragraphs: [
          "Dashboards and admin consoles fail in edge cases—time zones, DST, role-based visibility. I bake those scenarios into QA checklists and keep components dumb and services authoritative for business rules.",
          "If you are building a similar platform, prioritize incremental delivery, measurable performance budgets, and a migration strategy for data. Those choices compound more than any single library trend.",
        ],
      },
    ],
  },
  "react-performance-for-data-heavy-views": {
    post: {
      slug: "react-performance-for-data-heavy-views",
      title: "React performance for data-heavy dashboards",
      excerpt:
        "Practical techniques from shipping grids, calendars, and admin consoles: memoization, virtualization mindset, and taming re-renders without sacrificing clarity.",
      date: "2026-03-28",
      readTime: "5 min read",
      tags: ["React.js", "Performance", "Next.js"],
    },
    sections: [
      {
        heading: "Start from measurable pain",
        paragraphs: [
          "Before reaching for virtualization libraries, I profile React renders and network waterfalls. Many performance issues in React.js applications come from fetching strategies and prop churn—not list length alone.",
          "For Next.js apps, I align server components and client islands deliberately so interactive regions stay small and cacheable content stays on the server where possible.",
        ],
      },
      {
        heading: "Patterns that scale",
        paragraphs: [
          "Stable keys, memoized selectors, and colocated state reduce unnecessary renders in dashboards that mix charts, tables, and filters.",
          "When grids approach very large datasets, I combine server-side paging with careful client caches so operators still get snappy interactions without downloading entire tables.",
        ],
      },
    ],
  },
  "securing-node-apis": {
    post: {
      slug: "securing-node-apis",
      title: "Securing Node.js APIs in regulated environments",
      excerpt:
        "A concise checklist for JWT/OAuth flows, RBAC, rate limiting, and safe webhook handling—drawn from fintech and enterprise workflow work.",
      date: "2026-02-15",
      readTime: "7 min read",
      tags: ["Node.js", "Security", "Express", "NestJS"],
    },
    sections: [
      {
        heading: "Identity first",
        paragraphs: [
          "Whether you use Express.js or NestJS, authentication should be boring and explicit: short-lived access tokens, refresh rotation where appropriate, and secrets that never touch client bundles.",
          "Role-based access control belongs close to the handlers that mutate data, not only in the UI. Defense in depth keeps Node.js services safe when new screens ship quickly.",
        ],
      },
      {
        heading: "Payments and webhooks",
        paragraphs: [
          "Stripe and similar providers require idempotent webhook processors and clear signature verification paths. I isolate those workers from interactive request paths to keep latency predictable.",
          "Rate limiting, IP allow lists for sensitive admin routes, and Helmet-style headers remain baseline hygiene even when frameworks abstract parts of the stack.",
        ],
      },
    ],
  },
};
