export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  // --- FEATURED ---
  {
    title: "Graphics designer's Portfolio",
    description: "A portfolio page for Kaleab dedicated for kaleab tamiru",
    tech: ["Astro", "Tailwindcss", "React"],
    link: "https://kaleab-tamiru-astro.vercel.app",
    featured: true,
  },
  {
    title: "AASTU Dormitory and Slip Management System",
    description:
      "Exit pass generation and Dormitory, Exit, Blocks, Gateway, Locations, Onboarding management system.",
    tech: ["Next.js", "QR Code", "GraphQl", "PostgreSQL", "NextAuth", "REST"],
    link: "https://aastu-slip.vercel.app/",
    featured: true,
  },
  {
    title: "Laundry Manager",
    description:
      "A professional offline-first SaaS for laundry business management. Featuring real-time cloud synchronization, multi-tier account logic (Trial/Regular/Premium), and a resilient architecture that works 100% offline.",
    tech: ["Flutter", "Supabase", "PowerSync", "Drift (SQLite)", "PostgreSQL"],
    link: "https://github.com/ENDragnee/laundary_management",
    featured: true,
  },
  {
    title: "Addis Information Highway",
    description:
      "A centralized trust broker system enabling secure data sharing between institutions. Includes a mobile app and web platform.",
    tech: [
      "Next.js",
      "TypeScript",
      "Flutter",
      "Systems Architecture",
      "REST",
      "Nodejs",
    ],
    link: "https://addis-inforamtion-highway.vercel.app/",
    github: "https://github.com/ENDragnee/addis_information_highway_mobile",
    featured: true,
  },
  {
    title: "Lumo Ecosystem",
    description:
      "A comprehensive SaaS platform for rapid learning and content creation. Comprises three distinct applications: Client, Creator Studio, and Admin Dashboard.",
    tech: ["Next.js", "MongoDB", "Craft.js", "NextAuth", "GraphQl", "REST"],
    link: "https://easy-learning-two.vercel.app/",
    featured: true,
  },
  {
    title: "ASCII Foods",
    description:
      "A modern food ordering and delivery platform tailored for local markets.",
    tech: [
      "Nextjs",
      "PostgreSQL",
      "REST",
      "GraphQl",
      "BetterAuth",
      "Blackblaze",
      "Ably",
    ],
    link: "https://ascii-foods.vercel.app/",
    featured: true,
  },

  //-- Personal and Good once --

  {
    title: "Dracula Animes",
    description:
      "Anime streaming and discovery platform based on the micro-service architecture.",
    tech: [
      "Streaming",
      "API",
      "Nextjs",
      "Django",
      "Kubernetes",
      "Docker",
      "Gin",
      "BetterAuth",
      "PostgreSQL",
      "MongoDB",
      "Apache Kafka",
      "REST",
    ],
    link: "https://github.com/ENDragnee/movie_website_distributed",
    featured: true,
  },
  {
    title: "Centralized Virtual Computer",
    description:
      "A virtualization solution for centralized computing resources.",
    tech: [
      "C++",
      "Linux",
      "Virtualization",
      "NixOS",
      "Nextjs",
      "InfluxDB",
      "Telegraf",
      "Apache Kafka",
    ],
    link: "https://github.com/ENDragnee/vdi_system_admin",
  },

  // --- ASCII & COMMERCIAL ---
  {
    title: "ASCII Technologies(Portfolio)",
    description:
      "A portfolio and management web app for ASCII Technologies PLC",
    tech: [
      "Laravel",
      "PostgreSQL",
      "Filament",
      "Blade",
      "CSS",
      "JS",
      "PHP",
      "Minio",
    ],
    link: "https://github.com/ENDragnee/ascii_home",
  },
  {
    title: "ASCII Payment",
    description: "Digital payment integration service.",
    tech: ["Nextjs", "REST", "Mysql", "API Integration"],
    link: "https://onclck.vercel.app/",
  },
  {
    title: "Lumo Creator Studio",
    description:
      "Specialized interface for content creators on the Lumo platform.",
    tech: ["Next.js", "Rich Text", "Craft.js", "REST", "Minio", "MongoDB"],
    link: "https://lumo-creator-87ct.vercel.app/",
  },
  {
    title: "Lumo Admin",
    description:
      "Internal dashboard for managing the Lumo platform users and content.",
    tech: ["Nextjs", "MongoDB", "GraphQl", "REST"],
    link: "https://lumo-admin.vercel.app/",
  },

  // --- UNIVERSITY SYSTEMS (AASTU) ---
  {
    title: "AASTU Fresh Man Card",
    description: "Digital ID management system for fresh students.",
    tech: ["Verification", "Mariadb", "Nextjs"],
    link: "https://aastu-verfiy.vercel.app/",
  },
  {
    title: "USAE Event Management",
    description: "Event scheduling and ticketing system for university events.",
    tech: ["Next.js", "MongoDB", "REST"],
    link: "https://usae-2017.vercel.app/",
  },
  {
    title: "USAE One Card System",
    description: "Unified access control system with reworked UI.",
    tech: ["Nextjs", "Mariadb", "REST"],
    link: "https://aastu-usae.vercel.app/",
  },
  {
    title: "USAE Cafe Management",
    description: "Cafeteria attendance and ordering system.",
    tech: ["Nextjs", "Mariadb", "REST"],
    link: "https://aastu-cafe.vercel.app/",
  },
  {
    title: "AASTU Locations",
    description: "Geo-location and mapping service for campus navigation.",
    tech: ["Maps API", "GeoJSON", "HTML", "CSS", "JS"],
    link: "https://sweg-2014-ec-batch.github.io/AASTU-Loaction/",
  },
];
