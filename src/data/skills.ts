export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillData: SkillCategory[] = [
  {
    title: "Web Development",
    skills: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "Astro",
      "React",
      "Node.js",
      "GraphQL",
      "REST",
      "Prisma",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL/MariaDB", "SQLite"],
  },
  {
    title: "Linux & DevOps",
    skills: [
      "NixOS",
      "Arch Linux",
      "Debian/Ubuntu",
      "Fedora/RHEL",
      "Docker",
      "Kubernetes",
      "NGINX",
      "Shell Scripting",
    ],
  },
];
