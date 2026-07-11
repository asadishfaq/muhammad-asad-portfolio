export const siteConfig = {
  name: "Muhammad Asad",
  title: "Muhammad Asad | MERN Full Stack Developer | React.js & Node.js",
  shortTitle: "Muhammad Asad",
  tagline:
    "Senior MERN Engineer building enterprise web platforms with React, Next.js, and Node.js.",
  description:
    "Muhammad Asad is a Lahore-based MERN full stack developer with 8+ years of experience in React.js, Next.js, Node.js, Express, NestJS, MongoDB, AWS, and Azure. Hire a proven Node.js and React developer for scalable, secure applications.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000",
  locale: "en_PK",
  email: "asadishfaq100@gmail.com",
  phone: "+92 300 8189126",
  phoneTel: "+923008189126",
  location: "Shokat Town, Lahore 54000, Pakistan",
  linkedin: "https://www.linkedin.com/in/muhammad-asad-209794178",
  keywords: [
    "Muhammad Asad",
    "Muhammad Asad developer",
    "MERN developer",
    "MERN stack developer",
    "MERN full stack developer",
    "React.js developer",
    "React developer Lahore",
    "Node.js developer",
    "Next.js developer",
    "NestJS developer",
    "MongoDB developer",
    "TypeScript developer Pakistan",
    "full stack engineer",
    "AWS developer",
    "enterprise web applications",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
