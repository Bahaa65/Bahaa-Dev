export type EducationItem = {
  title: string;
  institution: string;
  period: string;
  details?: string[];
};

export const education: EducationItem[] = [
  {
    title: "Bachelor of Computer Science – Major in Software Engineering",
    institution: "Cairo University",
    period: "Oct 2022 – Aug 2026",
  },
  {
    title: "USAID Scholar",
    institution: "The American University in Cairo",
    period: "Sep 2022 – 2026",
    details: ["Supplementary courses in English, Entrepreneurship, Leadership"],
  },
];


