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
      "C",
      "C++",
      "PHP",
      "Lua",
      "Java",
      "Dart",
      "Bash/Shell",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Frontend & Mobile",
    skills: [
      "Next.js",
      "React",
      "Astro",
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
      "REST",
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
      "Debian/Ubuntu",
      "Fedora/RHEL",
      "SystemD",
      "OpenRC",
      "Docker",
      "Kubernetes",
      "NGINX",
      "Apache",
      "Podman",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL/MariaDB",
      "InfluxDB",
      "IndexDB",
      "SQLite",
    ],
  },
];
