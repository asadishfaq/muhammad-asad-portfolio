import { siteConfig } from "@/lib/site-config";
import { experiences } from "@/lib/content";

function buildJsonLd() {
  const current = experiences.find((e) => e.end === "Present");
  const sameAs = [siteConfig.linkedin].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: current?.role ?? "Senior MERN Engineer",
    worksFor: current
      ? {
          "@type": "Organization",
          name: current.company,
          url: current.link,
        }
      : undefined,
    email: siteConfig.email,
    telephone: siteConfig.phoneTel,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "54760",
      addressCountry: "PK",
      streetAddress: "Shokat Town",
    },
    sameAs,
    knowsAbout: [
      "MERN stack",
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "AWS",
      "Azure",
      "NestJS",
      "Express.js",
    ],
    description: siteConfig.description,
  };
}

export function PersonJsonLd() {
  const data = buildJsonLd();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.shortTitle,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
