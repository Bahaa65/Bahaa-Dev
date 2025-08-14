export type GitHubProject = {
  name: string;
  description: string;
  language: string | null;
  topics: string[];
  html_url: string;
  stargazers_count: number;
  updated_at: string;
};

export const githubProjects: GitHubProject[] = [
  {
    name: "Sal – Q&A Platform",
    description: "A modern Question & Answer web application with authentication, upvoting/downvoting, real-time notifications, advanced search, and responsive light/dark themes.",
    language: "TypeScript",
    topics: ["react", "firebase", "chakra-ui", "react-query", "authentication"],
    html_url: "https://github.com/Bahaa65/Sal",
    stargazers_count: 0,
    updated_at: "2024-12-01T00:00:00Z"
  },
  {
    name: "react-1 – E-Commerce Store",
    description: "E-commerce application featuring product listings, cart & wishlist functionality, category filtering, authentication, and persistent data using localStorage.",
    language: "TypeScript",
    topics: ["react", "ecommerce", "tailwindcss", "context-api", "localstorage"],
    html_url: "https://github.com/Bahaa65/react-1",
    stargazers_count: 0,
    updated_at: "2024-12-01T00:00:00Z"
  },
  {
    name: "work-out-tool",
    description: "Fitness/workout tracking tool to manage and monitor exercise routines and progress.",
    language: "JavaScript",
    topics: ["react", "fitness", "workout", "tracking", "css-modules"],
    html_url: "https://github.com/Bahaa65/work-out-tool",
    stargazers_count: 0,
    updated_at: "2024-12-01T00:00:00Z"
  },
  {
    name: "contact-project",
    description: "Contact management web app to add, edit, delete, and search for contacts.",
    language: "JavaScript",
    topics: ["contacts", "management", "localstorage", "crud"],
    html_url: "https://github.com/Bahaa65/contact-project",
    stargazers_count: 0,
    updated_at: "2024-12-01T00:00:00Z"
  },
  {
    name: "todo-list",
    description: "Simple to-do list application to manage daily tasks with add, delete, and mark-complete features.",
    language: "JavaScript",
    topics: ["todo", "tasks", "localstorage", "productivity"],
    html_url: "https://github.com/Bahaa65/todo-list",
    stargazers_count: 0,
    updated_at: "2024-12-01T00:00:00Z"
  },
  {
    name: "my-website",
    description: "Personal portfolio website showcasing projects, skills, and contact information.",
    language: "HTML",
    topics: ["portfolio", "personal", "bootstrap", "responsive"],
    html_url: "https://github.com/Bahaa65/my-website",
    stargazers_count: 0,
    updated_at: "2024-12-01T00:00:00Z"
  },
  {
    name: "shopping-time-BaNy",
    description: "Women's clothing e-commerce store with cart, product attributes (size, color), currency switching, and Firebase backend integration.",
    language: "TypeScript",
    topics: ["ecommerce", "react", "redux", "firebase", "styled-components"],
    html_url: "https://github.com/Bahaa65/shopping-time-BaNy",
    stargazers_count: 0,
    updated_at: "2024-12-01T00:00:00Z"
  },
  {
    name: "ECommerceChallenge",
    description: "Console-based e-commerce system built for the Fawry internship challenge with product management, checkout, shipping integration, and extensibility.",
    language: "Java",
    topics: ["java", "oop", "ecommerce", "console", "collections"],
    html_url: "https://github.com/Bahaa65/ECommerceChallenge",
    stargazers_count: 0,
    updated_at: "2024-12-01T00:00:00Z"
  },
  {
    name: "Quantum-Bookstore",
    description: "Bookstore management system supporting paper books, e-books, and showcase books, with different delivery methods and robust inventory handling.",
    language: "Java",
    topics: ["java", "bookstore", "inventory", "oop", "inheritance"],
    html_url: "https://github.com/Bahaa65/Quantum-Bookstore",
    stargazers_count: 0,
    updated_at: "2024-12-01T00:00:00Z"
  },
  {
    name: "task-manager",
    description: "Command-line interface (CLI) app to add, list, complete, and delete tasks with JSON file storage.",
    language: "TypeScript",
    topics: ["cli", "nodejs", "commander", "tasks", "json"],
    html_url: "https://github.com/Bahaa65/task-manager",
    stargazers_count: 0,
    updated_at: "2024-12-01T00:00:00Z"
  },
  {
    name: "Live-Data-Visualization-Platform",
    description: "Real-time platform for visualizing and analyzing live data streams in interactive charts and dashboards.",
    language: "JavaScript",
    topics: ["visualization", "websockets", "charts", "real-time", "d3js"],
    html_url: "https://github.com/Bahaa65/Live-Data-Visualization-Platform",
    stargazers_count: 0,
    updated_at: "2024-12-01T00:00:00Z"
  }
];
