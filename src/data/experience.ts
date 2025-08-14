export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  details: string[];
};

export const experiences: ExperienceItem[] = [
  {
    role: "Frontend Engineer",
    company: "Robusta Technology Group",
    period: "Feb 2025 – Jul 2025",
    details: [
      "Building React.js + TypeScript apps",
      "State management and API integration",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Halliburton",
    period: "Aug 2024 – Oct 2024",
    details: [
      "Oil & Gas industry systems and Landmark Software",
      "ITIL training",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "CIB Egypt",
    period: "Sep 2024 – Sep 2024",
    details: [
      "Digital transformation initiatives",
      "SAS Data Literacy certifications",
    ],
  },
];


