export type FeaturedProject = {
  title: string;
  period?: string;
  stack: string;
  description: string;
  href?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Connect X Hackathon – Furniture Industry Solution",
    period: "2025",
    stack: "React.js, Figma, UI/UX",
    description:
      "Led a 3-day hackathon team to create a digital collaboration platform for Egypt’s furniture industry.",
  },
  {
    title: "Web-Based Oil-in-Place (OOIP) Estimation Tool",
    period: "2024",
    stack: "React.js, Node.js, MySQL, AWS",
    description:
      "Full-stack app for estimating oil-in-place with data visualization.",
  },
  {
    title: "EURECA 2024 Research Paper | Renewable Energy",
    period: "2024",
    stack: "Research",
    description:
      "Research on harnessing atmospheric electricity for sustainable energy.",
  },
  {
    title: "White’s Surfmaster PI Metal Detector",
    period: "2024",
    stack: "Electronics, Embedded Systems",
    description:
      "Waterproof pulse induction metal detector for saltwater/mineralized ground detection.",
  },
];


