export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  link?: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "nextbridge",
    role: "Senior MERN Engineer / Architect",
    company: "Nextbridge Ltd.",
    location: "Lahore, Pakistan",
    start: "Jul 2024",
    end: "Present",
    link: "https://admin-devaccessrp.adgm.com/",
    summary:
      "Leading frontend architecture for a high-traffic real-estate operations platform used by 50,000+ users.",
    bullets: [
      "Led implementation of responsive, reusable frontend modules for complex administrative workflows.",
      "Delivered end-to-end scheduling and calendar functionality with month/week/day views, custom event rendering, and overflow handling.",
      "Implemented multi-step business flows for applications, contracts, and agreements with role-based actions.",
      "Built shared UI standards that improved consistency, maintainability, and delivery speed across features.",
      "Resolved critical UI issues around layout, responsiveness, state behavior, and cross-view rendering.",
      "Partnered with product, QA, and backend teams to ship scalable, release-ready solutions with lint-safe, maintainable code.",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "REST",
      "Azure",
      "CI/CD",
    ],
  },
  {
    id: "ropstam",
    role: "Senior MERN Stack Developer",
    company: "Ropstam Solutions",
    location: "Lahore, Pakistan",
    start: "Mar 2022",
    end: "Jun 2024",
    summary:
      "Owned real-time communication, payments, and API layers across multiple enterprise products.",
    bullets: [
      "Built real-time messaging, notifications, and live updates with Socket.io across several modules.",
      "Integrated Stripe subscriptions, checkout, and webhooks with high transaction reliability.",
      "Implemented Twilio Voice SDK flows for browser-to-phone and SIM-routed calling experiences.",
      "Developed secure REST APIs with Node.js and Express (Helmet, rate limiting, JWT/OAuth, RBAC).",
      "Optimized MongoDB schemas, indexes, and aggregation pipelines for large datasets.",
      "Mentored junior developers, conducted technical interviews, and improved delivery through code review and testing discipline.",
    ],
    stack: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Stripe",
      "Twilio",
    ],
  },
  {
    id: "alec",
    role: "Software Engineer",
    company: "ALEC",
    location: "Dubai, United Arab Emirates",
    start: "Jan 2020",
    end: "Feb 2022",
    link: "https://forms-dev.alec.ae/",
    summary:
      "Delivered enterprise applications and a dynamic eForms platform for regulated workflows.",
    bullets: [
      "Designed and deployed full-stack solutions with .NET, React, and Angular for 5,000+ users.",
      "Built configurable eForms and workflow automation, cutting document processing time materially.",
      "Implemented Azure DevOps CI/CD pipelines that reduced deployment time from hours to minutes.",
      "Optimized Cosmos DB modeling and indexing, improving query performance and scalability.",
    ],
    stack: [
      ".NET",
      "React",
      "Angular",
      "Cosmos DB",
      "Azure DevOps",
      "CI/CD",
    ],
  },
  {
    id: "aquila-senior",
    role: "MERN Stack Developer",
    company: "Aquila360",
    location: "Lahore, Pakistan",
    start: "Jan 2018",
    end: "Dec 2019",
    summary:
      "Built scalable web products with React, Next.js, Node.js, NestJS, and MongoDB.",
    bullets: [
      "Shipped 15+ web applications with strong uptime and clear architecture boundaries.",
      "Integrated Redux Toolkit, AWS services, and third-party APIs across multiple codebases.",
      "Configured AWS IAM, EC2, Lambda, and CloudWatch; supported Azure resources where required.",
      "Introduced reusable patterns and backend optimizations that reduced duplication and improved velocity.",
    ],
    stack: [
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "MongoDB",
      "AWS",
      "Redux Toolkit",
    ],
  },
  {
    id: "aquila-associate",
    role: "Associate Software Engineer",
    company: "Aquila360",
    location: "Lahore, Pakistan",
    start: "Jan 2016",
    end: "Dec 2017",
    summary:
      "Grew from dashboards and integrations into performance-critical data surfaces.",
    bullets: [
      "Developed responsive React dashboards and drag-and-drop experiences that improved user productivity.",
      "Implemented REST integrations and services with Node.js, Express, ASP.NET, and MongoDB.",
      "Upgraded legacy React stacks, improving performance and reducing defect volume.",
      "Built high-volume grid and reporting modules capable of rendering 1M+ records efficiently.",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "ASP.NET",
      "REST",
    ],
  },
];
