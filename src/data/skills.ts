export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillData: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      "TypeScript",
      "Python",
      "C++",
      "PHP",
      "Lua",
      "Java",
      "Dart",
      "Bash/Shell",
    ],
  },
  {
    title: "Frontend & Mobile",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Flutter",
      "Qt (C++ & Python)",
      "JavaFX",
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      "Node.js",
      "Django",
      "Laravel",
      "FastAPI",
      "GraphQL",
      "WebSockets",
      "Prisma",
      "Apache Kafka",
    ],
  },
  {
    title: "Linux & DevOps",
    skills: [
      "NixOS",
      "Arch Linux",
      "Docker",
      "Kubernetes",
      "NGINX",
      "Apache",
      "Podman",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL/MariaDB", "InfluxDB"],
  },
];
