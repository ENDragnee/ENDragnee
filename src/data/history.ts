export interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string;
  tags?: string[];
  link?: string;
}

// Current full-time role and education.
export const experienceData: TimelineItem[] = [
  {
    date: "2026 - Present",
    title: "Fullstack Web Developer",
    company: "ETM Software PLC",
    description:
      "Building and maintaining full-stack web products with Next.js, NestJS, and TypeScript.",
  },
  {
    date: "Education",
    title: "Software Engineering",
    company: "Addis Ababa Science & Technology University",
    description:
      "Built several production-style systems as coursework projects. Winner, 2025 Ice Addis Hackathon; national finalist, Hult Prize 2025 and 2026.",
  },
];

// Other roles and companies, past and ongoing, outside the primary full-time job.
export const otherWorkData: TimelineItem[] = [
  {
    date: "2026 - Present",
    title: "Fullstack Web Developer",
    company: "ETM Software PLC",
    description:
      "Building and maintaining full-stack web products with Next.js, NestJS, and TypeScript.",
  },
  {
    date: "2026 - Present",
    title: "Chief Technical Officer",
    company: "Yenesew/Afalagi",
    description:
      "Leading technical direction for a platform that matches missing people, using vector search over a Postgres/pgvector store.",
    link: "https://idyllic-cassata-dde001.netlify.app",
  },
  {
    date: "2026 - Present",
    title: "Frontend Engineer",
    company: "Mela Software Solutions",
    description:
      "Building the frontend for Egre Menged, a crowd-powered delivery platform.",
  },
  {
    date: "2026",
    title: "Cloud Engineer",
    company: "Echo Technologies PLC",
    description:
      "Built a private cloud for the company in about a month — Proxmox for virtualization, Coolify for deployments, and a Grafana stack for monitoring.",
  },
  {
    date: "2023 - 2026",
    title: "Co-Founder & CTO",
    company: "ASCII Technologies PLC",
    description:
      "Co-founded the company. Built Lumo, a learning management system with CMS capabilities (Next.js, MongoDB, MinIO), and Addis Information Highway, a secure company-to-company data exchange protocol (Next.js, PostgreSQL, Prisma, JWT). Led a small team across these and several other production systems.",
    link: "https://asciihub.com",
  },
  {
    date: "2019 - 2021",
    title: "Junior Developer",
    company: "Dallol Tech PLC",
    description:
      "Localized a driving-simulator training system for Ethiopian hardware, Amharic, and Afan Oromo, and built an e-commerce site with Laravel, Next.js, and PostgreSQL.",
  },
];
