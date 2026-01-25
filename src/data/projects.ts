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
    title: "Addis Information Highway",
    description:
      "A centralized trust broker system enabling secure data sharing between institutions. Includes a mobile app and web platform.",
    tech: ["Next.js", "TypeScript", "Flutter", "Systems Architecture"],
    link: "https://addis-inforamtion-highway.vercel.app/",
    github: "https://github.com/ENDragnee/addis_information_highway_mobile",
    featured: true,
  },
  {
    title: "Lumo Ecosystem",
    description:
      "A comprehensive SaaS platform for rapid learning and content creation. Comprises three distinct applications: Client, Creator Studio, and Admin Dashboard.",
    tech: ["Next.js", "TurboRepo", "Prisma", "PostgreSQL"],
    link: "https://easy-learning-two.vercel.app/",
    featured: true,
  },
  {
    title: "ASCII Foods",
    description:
      "A modern food ordering and delivery platform tailored for local markets.",
    tech: ["React", "Tailwind", "Node.js"],
    link: "https://ascii-foods.vercel.app/",
    featured: true,
  },

  // --- ASCII & COMMERCIAL ---
  {
    title: "ASCII Payment",
    description: "Digital payment integration service.",
    tech: ["FinTech", "API Integration"],
    link: "https://onclck.vercel.app/",
  },
  {
    title: "Lumo Creator Studio",
    description:
      "Specialized interface for content creators on the Lumo platform.",
    tech: ["Next.js", "Rich Text Editors"],
    link: "https://lumo-creator-87ct.vercel.app/",
  },
  {
    title: "Lumo Admin",
    description:
      "Internal dashboard for managing the Lumo platform users and content.",
    tech: ["Dashboard", "Analytics"],
    link: "https://lumo-admin.vercel.app/",
  },

  // --- UNIVERSITY SYSTEMS (AASTU) ---
  {
    title: "AASTU Fresh Man Card",
    description: "Digital ID management system for fresh students.",
    tech: ["Verification", "Database"],
    link: "https://aastu-verfiy.vercel.app/",
  },
  {
    title: "USAE Event Management",
    description: "Event scheduling and ticketing system for university events.",
    tech: ["Next.js", "Calendar API"],
    link: "https://usae-2017.vercel.app/",
  },
  {
    title: "USAE One Card System",
    description: "Unified access control system with reworked UI.",
    tech: ["UI/UX", "System Integration"],
    link: "https://aastu-usae.vercel.app/",
  },
  {
    title: "USAE Cafe Management",
    description: "Cafeteria attendance and ordering system.",
    tech: ["Inventory", "Pos"],
    link: "https://aastu-cafe.vercel.app/",
  },
  {
    title: "AASTU Gateway Slip",
    description: "Gate pass generation and management system.",
    tech: ["Next.js", "QR Code"],
    link: "https://aastu-slip.vercel.app/",
  },
  {
    title: "AASTU Locations",
    description: "Geo-location and mapping service for campus navigation.",
    tech: ["Maps API", "GeoJSON"],
    link: "https://sweg-2014-ec-batch.github.io/AASTU-Loaction/",
  },

  // --- OTHER ---
  {
    title: "Dracula Animes",
    description: "Anime streaming and discovery platform.",
    tech: ["Streaming", "API"],
    link: "#", // No link provided in prompt, simplified
  },
  {
    title: "Centralized Virtual Computer",
    description:
      "A virtualization solution for centralized computing resources.",
    tech: ["C++", "Linux", "Virtualization"],
    link: "#",
  },
];
