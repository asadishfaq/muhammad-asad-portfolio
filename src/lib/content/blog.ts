export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "mern-at-enterprise-scale",
    title: "MERN at enterprise scale: patterns that survive traffic",
    excerpt:
      "How I structure React, Next.js, and Node services for large teams—shared UI contracts, API boundaries, and observability that keep production calm.",
    date: "2026-04-12",
    readTime: "6 min read",
    tags: ["MERN", "Node.js", "React", "Architecture"],
  },
  {
    slug: "react-performance-for-data-heavy-views",
    title: "React performance for data-heavy dashboards",
    excerpt:
      "Practical techniques from shipping grids, calendars, and admin consoles: memoization, virtualization mindset, and taming re-renders without sacrificing clarity.",
    date: "2026-03-28",
    readTime: "5 min read",
    tags: ["React.js", "Performance", "Next.js"],
  },
  {
    slug: "securing-node-apis",
    title: "Securing Node.js APIs in regulated environments",
    excerpt:
      "A concise checklist for JWT/OAuth flows, RBAC, rate limiting, and safe webhook handling—drawn from fintech and enterprise workflow work.",
    date: "2026-02-15",
    readTime: "7 min read",
    tags: ["Node.js", "Security", "Express", "NestJS"],
  },
];
