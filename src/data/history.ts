export interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string;
  tags?: string[];
  link?: string;
}

export const historyData: TimelineItem[] = [
  {
    date: "2023 - Present",
    title: "Chief Technology Officer",
    company: "ASCII Technologies PLC",
    description:
      "Spearheaded the development of 'Addis Information Highway', a trust broker system for institutional data sharing. Created 'Lumo', a specialized CMS/Social platform for rapid learning.",
    tags: ["Next.js", "System Architecture", "Leadership"],
    link: "https://asciihub.com",
  },
  {
    date: "2019 - 2021",
    title: "Junior Software Engineer",
    company: "DALLOL TECH PLC",
    description:
      "Contributed to the development of a driving simulation system. Handled computer setup, hardware component configuration, and software integration for driver simulators.",
    tags: ["Simulation", "Hardware", "C++"],
  },
  {
    date: "Education",
    title: "Software Engineering",
    company: "Addis Ababa Science & Technology University",
    description:
      "Winner of 2024 Iced Addis Hackathon. Developed multiple systems including: Fresh Man Card Management, USAE Sport Management, Distributed Movie Streaming, and a Centralized Virtual Computer System.",
    tags: ["Hackathon Winner", "Hult Prize Nominee", "SaaS Founders Club"],
  },
];
