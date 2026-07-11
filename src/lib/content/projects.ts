export type Project = {
  id: string;
  title: string;
  description: string;
  link?: string;
  metrics?: string[];
  featured?: boolean;
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "adgm-real-estate",
    title: "Real Estate Operations Platform",
    description:
      "React / Next.js and Node.js platform for 50,000+ users that reduced manual processing by 45% through streamlined operations and scheduling.",
    link: "https://admin-devaccessrp.adgm.com/",
    metrics: ["50k+ users", "99.9% uptime focus", "Multi-view calendars"],
    featured: true,
    stack: ["React", "Next.js", "Node.js", "TypeScript", "Enterprise UI"],
  },
  {
    id: "alec-eforms",
    title: "Dynamic eForms & Workflow Platform",
    description:
      "Configurable forms and workflow engine that cut approval cycles from days to under 24 hours for regulated enterprise use.",
    link: "https://forms.alec.ae/",
    metrics: ["Configurable workflows", "Azure-native"],
    featured: true,
    stack: [".NET", "React", "Cosmos DB", "Azure DevOps"],
  },
  {
    id: "haywood",
    title: "Haywood Trading Platform",
    description:
      "Contributed to a stock trading platform serving 25,000+ investors with real-time dashboards and secure trading flows.",
    link: "https://haywoodtrader.com/",
    metrics: ["25k+ investors", "Real-time data"],
    featured: true,
    stack: ["React", "Real-time UI", "Secure transactions"],
  },
  {
    id: "askjaqq",
    title: "AskJAQQ — Legal Q&A Marketplace",
    description:
      "Digital platform connecting Albertans with verified Law Society of Alberta lawyers through an asynchronous, no-time-pressure question-and-answer model. Features a verified lawyer directory, per-question paid intake, subscription billing with free trials, and a mobile app with opt-in notifications.",
    link: "https://app.askjaqq.ca/sign-in",
    metrics: ["Verified lawyer directory", "Subscription billing", "Mobile app"],
    featured: true,
    stack: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
    ],
  },
  {
    id: "almoosa-health",
    title: "Almoosa Health Group — Hospital Management Platform",
    description:
      "Full-featured hospital platform for Almoosa Health Group (KSA) with integrated patient and doctor portals, online/onsite appointment booking, Twilio-based video consultations, and real-time notifications for prescriptions, vaccinations, and follow-ups.",
    metrics: ["Arabic & English", "OTP auth", "Native mobile apps"],
    stack: [
      "Vue.js",
      "React.js",
      "NestJS",
      "MySQL",
      "Oracle",
      "Twilio",
    ],
  },
  {
    id: "heynota",
    title: "HeyNota — AI-Powered Content Transformation",
    description:
      "Platform that converts written content into AI-enhanced text, audio, image, and video. Built intelligent tools (SUM, BRIEF, VID, IMAGE) for headlines, summaries, and SEO assets, a Chrome extension and CMS plugins, and a real-time analytics dashboard.",
    metrics: ["OpenAI NLP", "Chrome extension", "Real-time analytics"],
    stack: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Docker",
      "Azure",
      "OpenAI",
    ],
  },
  {
    id: "nurse-nellie",
    title: "Nurse Nellie — Patient-Clinician Platform",
    description:
      "SaaS solution for hospitals and doctors in Australia with admin and patient apps, RBAC, QR-based clinic access, automated patient history generation, and AI-driven dynamic question generation for clinician consultations.",
    metrics: ["RBAC", "QR onboarding", "Multi-language"],
    stack: [
      "Next.js",
      "Supabase",
      "AI APIs",
      "Vercel",
      "Twilio",
    ],
  },
  {
    id: "invoicemate",
    title: "Invoicemate — e-Invoicing & Finance Platform",
    description:
      "Secure, scalable multi-tenant invoicing platform with RBAC, full invoice lifecycle, automated approval chains with escalation paths, and scheduled cron jobs syncing records with Oracle DB for high data integrity.",
    metrics: ["Multi-tenant", "Approval workflows", "Cron sync"],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Oracle DB",
      "AWS",
    ],
  },
  {
    id: "cepra",
    title: "Cepra — Project Management Tool",
    description:
      "SaaS project management platform with RBAC, JWT and social login, employee hierarchy and project-stage tracking, a detailed finance module for budgets and profit/loss, and a drag-and-drop pipeline builder.",
    metrics: ["RBAC", "Finance module", "Drag-and-drop pipelines"],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "Jenkins",
    ],
  },
  {
    id: "pocard",
    title: "Pocard — Business Review Collection",
    description:
      "Smart review system using NFC-enabled, QR-coded physical cards for 3-second feedback submission, integrated with Google and Instagram, with bulk card registration and analytics for staff-wise performance and rating patterns.",
    metrics: ["NFC & QR cards", "3-second reviews", "Engagement analytics"],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Heroku",
    ],
  },
];
