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
];
