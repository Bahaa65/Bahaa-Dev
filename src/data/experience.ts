export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  details: string[];
  tags?: string[];
};

export const experiences: ExperienceItem[] = [
  {
    role: "Afretec Summer School on Smart Systems (2)",
    company: "American University in Cairo (AUC)",
    period: "Aug 2025",
    details: [
      "Three-week intensive program (45+ hours) on Embedded Systems, Machine Learning, AI, and Neural Networks",
      "Embedded C, Arduino & ATmega328 architecture, hardware interfacing, and prototyping",
      "Data analytics and ML: Regression, SVM, Decision Trees, Random Forests",
      "Deep learning: CNNs, RNNs, and exposure to LLM concepts",
      "Hands-on coding with Arduino, Python, Scikit-learn, TensorFlow, and PyTorch",
      "Tools: Arduino IDE, Jupyter Notebook",
      "Outcome: Practical experience in embedded hardware and AI modeling; Certificate of Completion awarded",
    ],
    tags: [
      "Embedded C",
      "Arduino",
      "ATmega328",
      "Python",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Jupyter",
      "SVM",
      "Decision Trees",
      "Random Forests",
      "CNN",
      "RNN",
    ],
  },
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


