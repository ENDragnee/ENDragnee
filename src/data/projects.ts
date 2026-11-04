export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  // --- FEATURED: real, current, or most substantial work ---
  {
    title: "Yenesew",
    description:
      "A platform to match missing people, using a vector database and semantic search.",
    tech: ["Next.js", "PostgreSQL (pgvector)", "Cohere", "Prisma"],
    link: "https://yenesew.vercel.app",
    github: "https://github.com/ENDragnee/yenesew",
    featured: true,
  },
  {
    title: "Rastech Stock Management",
    description:
      "A stock and store management system for Rastech, a computer import and reseller business.",
    tech: ["Next.js", "GraphQL", "Prisma", "PostgreSQL"],
    link: "https://rastech-rouge.vercel.app",
    github: "https://github.com/ENDragnee/rastech",
    featured: true,
  },
  {
    title: "Bini Romi Productions",
    description:
      "A portfolio website with a custom CMS, built for Bini Romi Productions.",
    tech: ["Astro", "PostgreSQL", "Prisma", "Better Auth"],
    link: "https://biniromi.com",
    github: "https://github.com/ENDragnee/romi-caset",
    featured: true,
  },
  {
    title: "Egre Menged",
    description: "A crowd-powered delivery system. Working on the frontend.",
    tech: ["Next.js", "TypeScript", "REST"],
    link: "https://github.com/MellaSoftwareSolutions/Egre-Menged",
    featured: true,
  },
  {
    title: "Addis Information Highway",
    description:
      "A centralized trust broker system enabling secure data sharing between institutions. Includes a mobile app and web platform.",
    tech: ["Next.js", "TypeScript", "Flutter", "REST"],
    link: "https://addis-inforamtion-highway.vercel.app/",
    github: "https://github.com/ENDragnee/addis_information_highway_mobile",
    featured: true,
  },
  {
    title: "Laundry Manager",
    description:
      "An offline-first SaaS for laundry businesses, with real-time cloud sync and a resilient architecture that works 100% offline.",
    tech: ["Flutter", "Supabase", "PowerSync", "SQLite"],
    link: "https://github.com/ENDragnee/laundary_management",
    featured: true,
  },

  // --- MORE: smaller builds, client work, and university systems ---
  {
    title: "Graphics Designer's Portfolio",
    description: "A portfolio site for graphic designer Kaleab Tamiru.",
    tech: ["Astro", "React"],
    link: "https://kaleab-tamiru-astro.vercel.app",
  },
  {
    title: "AASTU Dormitory and Slip Management",
    description:
      "Exit-pass generation and dormitory, gateway, and onboarding management.",
    tech: ["Next.js", "PostgreSQL"],
    link: "https://aastu-slip.vercel.app/",
  },
  {
    title: "Lumo Ecosystem",
    description:
      "A SaaS platform for rapid learning and content creation, comprising client, creator studio, and admin apps.",
    tech: ["Next.js", "MongoDB"],
    link: "https://easy-learning-two.vercel.app/",
  },
  {
    title: "ASCII Foods",
    description: "A food ordering and delivery platform for local markets.",
    tech: ["Next.js", "PostgreSQL", "GraphQL"],
    link: "https://ascii-foods.vercel.app/",
  },
  {
    title: "Dracula Animes",
    description:
      "Anime streaming and discovery platform on a microservice architecture.",
    tech: ["Next.js", "Django", "Kubernetes"],
    link: "https://github.com/ENDragnee/movie_website_distributed",
  },
  {
    title: "Centralized Virtual Computer",
    description: "A virtualization solution for centralized computing resources.",
    tech: ["NixOS", "Proxmox", "Next.js"],
    link: "https://github.com/ENDragnee/vdi_system_admin",
  },
  {
    title: "ASCII Technologies (Portfolio)",
    description: "A portfolio and management web app for ASCII Technologies PLC.",
    tech: ["Laravel", "PostgreSQL"],
    link: "https://github.com/ENDragnee/ascii_home",
  },
  {
    title: "ASCII Payment",
    description: "Digital payment integration service.",
    tech: ["Next.js", "MySQL"],
    link: "https://onclck.vercel.app/",
  },
  {
    title: "Lumo Creator Studio",
    description: "Specialized interface for content creators on the Lumo platform.",
    tech: ["Next.js", "MongoDB"],
    link: "https://lumo-creator-87ct.vercel.app/",
  },
  {
    title: "Lumo Admin",
    description: "Internal dashboard for managing Lumo platform users and content.",
    tech: ["Next.js", "MongoDB"],
    link: "https://lumo-admin.vercel.app/",
  },
  {
    title: "AASTU Fresh Man Card",
    description: "Digital ID management system for incoming students.",
    tech: ["Next.js", "MariaDB"],
    link: "https://aastu-verfiy.vercel.app/",
  },
  {
    title: "USAE Event Management",
    description: "Event scheduling and ticketing system for university events.",
    tech: ["Next.js", "MongoDB"],
    link: "https://usae-2017.vercel.app/",
  },
  {
    title: "USAE One Card System",
    description: "Unified access control system with reworked UI.",
    tech: ["Next.js", "MariaDB"],
    link: "https://aastu-usae.vercel.app/",
  },
  {
    title: "USAE Cafe Management",
    description: "Cafeteria attendance and ordering system.",
    tech: ["Next.js", "MariaDB"],
    link: "https://aastu-cafe.vercel.app/",
  },
  {
    title: "AASTU Locations",
    description: "Geo-location and mapping service for campus navigation.",
    tech: ["Maps API", "GeoJSON"],
    link: "https://sweg-2014-ec-batch.github.io/AASTU-Loaction/",
  },
];
