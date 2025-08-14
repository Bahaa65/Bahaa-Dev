export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Web Development"
    ]
  },
  {
    name: "Angular Ecosystem",
    skills: [
      "Angular CLI",
      "RxJS",
      "NgRx",
      "Ionic",
      "Nx"
    ]
  },
  {
    name: "Backend Development",
    skills: [
      "Node.js",
      "MySQL",
      "RESTful APIs",
      "Express.js"
    ]
  },
  {
    name: "Computer Science & Software Engineering",
    skills: [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming (OOP)",
      "Software Design & Architecture",
      "Software Process & Quality"
    ]
  },
  {
    name: "Testing & QA",
    skills: [
      "Jest",
      "Cypress",
      "Playwright",
      "React Testing Library",
      "Vitest",
      "Mocha & Chai",
      "ESLint",
      "Prettier",
      "Commitlint",
      "SonarQube"
    ]
  },
  {
    name: "Software Engineering Tooling",
    skills: [
      "Webpack",
      "Vite",
      "Babel",
      "Turborepo",
      "Nx",
      "Jira",
      "Confluence",
      "Notion",
      "Miro",
      "Lucidchart",
      "draw.io",
      "Swagger / OpenAPI"
    ]
  },
  {
    name: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "GitHub Actions (CI/CD)",
      "Vercel",
      "Nginx"
    ]
  },
  {
    name: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Figma",
      "VS Code",
      "Postman"
    ]
  },
  {
    name: "Other Skills",
    skills: [
      "Embedded Systems",
      "Electronics Design",
      "Data Analysis",
      "Problem-Solving",
      "Agile & Scrum Methodologies"
    ]
  }
];

export const softSkillsData: SkillCategory[] = [
  {
    name: "Leadership & Management",
    skills: [
      "Strategic Planning",
      "Team Leadership",
      "Project Management",
      "Event Organization",
      "Mentorship",
      "Stakeholder Engagement"
    ]
  },
  {
    name: "Communication & Collaboration",
    skills: [
      "Public Speaking",
      "Cross-Cultural Communication",
      "Negotiation",
      "Technical Writing",
      "Teamwork",
      "Knowledge Sharing"
    ]
  },
  {
    name: "Problem-Solving & Innovation",
    skills: [
      "Creative Problem-Solving",
      "Critical Thinking",
      "Research & Development",
      "Solution Architecture",
      "Decision-Making Under Pressure"
    ]
  },
  {
    name: "Adaptability & Growth",
    skills: [
      "Continuous Learning",
      "Technology Adoption",
      "Industry Adaptation",
      "Change Management",
      "Resilience under Tight Deadlines"
    ]
  },
  {
    name: "Professional Excellence",
    skills: [
      "Time Management",
      "Work Ethic",
      "Attention to Detail",
      "Quality Assurance",
      "Goal-Oriented Performance"
    ]
  }
];

// Keep the old skills array for backward compatibility
export const skills = [
  "React.js",
  "Next.js",
  "Angular",
  "TypeScript",
  "Node.js",
  "MySQL",
  "AWS",
  "Git",
  "GitHub",
  "Figma",
  "UI/UX Design",
  "Embedded Systems",
  "Cloud Computing",
  "RxJS",
] as const;


