"use client";

import * as React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

// floating animation keyframes via tailwind classes are limited; use inline animation class
const floatClass = "animate-[float_6s_ease-in-out_infinite]";

// inject keyframes at runtime once
if (typeof document !== "undefined") {
  const id = "float-keyframes";
  if (!document.getElementById(id)) {
    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}`;
    document.head.appendChild(style);
  }
}

type Tech = {
  name: string;
  src: string;
  className?: string;
};

function TechIcon({ name, primary, fallbacks = [], className = "" }: { name: string; primary: string; fallbacks?: string[]; className?: string }) {
  const [srcIndex, setSrcIndex] = React.useState(0);
  const sources = [primary, ...fallbacks];
  const currentSrc = sources[srcIndex];
  const isExhausted = srcIndex >= sources.length;

  if (isExhausted) {
    const initials = name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 3)
      .toUpperCase();
    return (
      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-200/60 text-emerald-800 dark:bg-green-400/20 dark:text-green-300 text-[10px] font-semibold">
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={currentSrc}
      alt={name}
      className={className}
      referrerPolicy="no-referrer"
      crossOrigin="anonymous"
      loading="lazy"
      decoding="async"
      onError={() => setSrcIndex((i) => i + 1)}
    />
  );
}

const techs: Tech[] = [
  // Core FE/BE
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", className: "dark:invert" },
  { name: "Angular", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", className: "dark:invert" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "GitHub Actions", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg", className: "dark:invert" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", className: "dark:invert" },
  { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Redux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Prisma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  { name: "Vercel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", className: "dark:invert" },
  { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Nginx", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  // Angular ecosystem
  { name: "RxJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rxjs/rxjs-original.svg" },
  { name: "NgRx", src: "https://cdn.simpleicons.org/ngrx" },
  { name: "Ionic", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" },
  { name: "Nx", src: "https://nx.dev/logo.svg", className: "dark:invert" },
  // Testing & QA
  { name: "Jest", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
  { name: "Cypress", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg" },
  { name: "Playwright", src: "https://playwright.dev/img/playwright-logo.svg" },
  { name: "RTL", src: "https://cdn.simpleicons.org/testinglibrary" },
  { name: "Vitest", src: "https://cdn.simpleicons.org/vitest" },
  { name: "Mocha", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" },
  { name: "Chai", src: "https://www.vectorlogo.zone/logos/chaijs/chaijs-icon.svg" },
  { name: "ESLint", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg", className: "dark:invert" },
  { name: "Prettier", src: "https://cdn.simpleicons.org/prettier" },
  { name: "Commitlint", src: "https://avatars.githubusercontent.com/u/35088720?s=200&v=4", className: "rounded" },
  { name: "SonarQube", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" },
  // Tooling & docs
  { name: "Webpack", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
  { name: "Vite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  { name: "Babel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg", className: "dark:invert" },
  { name: "Turborepo", src: "https://cdn.simpleicons.org/turborepo", className: "dark:invert" },
  { name: "Jira", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
  { name: "Confluence", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" },
  { name: "Notion", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg", className: "dark:invert" },
  { name: "Miro", src: "https://cdn.simpleicons.org/miro" },
  { name: "Lucidchart", src: "https://www.vectorlogo.zone/logos/lucidchart/lucidchart-icon.svg" },
  { name: "draw.io", src: "https://cdn.simpleicons.org/diagramsdotnet" },
  { name: "Swagger", src: "https://cdn.simpleicons.org/swagger" },
  { name: "OpenAPI", src: "https://www.vectorlogo.zone/logos/openapis/openapis-icon.svg" },
];

const fallbacksByName: Record<string, string[]> = {
  AWS: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    "https://vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  ],
  "Next.js": [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
  ],
  Express: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
  ],
  GitHub: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
  ],
  Angular: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
  ],
  Nx: [
    "https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png",
    "https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo-white.png",
    "https://www.svgrepo.com/show/354109/nx.svg",
  ],
  Playwright: [
    "https://playwright.dev/img/playwright-logo.svg",
    "https://avatars.githubusercontent.com/u/37214420?s=200&v=4",
  ],
  RTL: [
    "https://testing-library.com/img/octopus.svg",
    "https://testing-library.com/img/octopus-64x64.png",
    "https://raw.githubusercontent.com/testing-library/dom-testing-library/main/.github/octopus.png",
  ],
  Vitest: [
    "https://raw.githubusercontent.com/vitest-dev/vitest/main/docs/public/logo.svg",
    "https://vitest.dev/logo.svg",
    "https://unpkg.com/vitest@latest/docs/public/logo.svg",
  ],
  ESLint: [
    "https://www.vectorlogo.zone/logos/eslint/eslint-icon.svg",
    "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/eslint.svg",
  ],
  Prettier: [
    "https://www.vectorlogo.zone/logos/prettierio/prettierio-icon.svg",
    "https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-icon.png",
    "https://cdn.simpleicons.org/prettier",
  ],
  Chai: [
    "https://www.vectorlogo.zone/logos/chaijs/chaijs-icon.svg",
    "https://www.vectorlogo.zone/logos/chaijs/chaijs-ar21.svg",
  ],
  Turborepo: [
    "https://turbo.build/images/logo-dark.svg",
    "https://avatars.githubusercontent.com/u/98495542?s=200&v=4",
  ],
  Swagger: [
    "https://www.vectorlogo.zone/logos/swagger/swagger-icon.svg",
    "https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg",
    "https://raw.githubusercontent.com/swagger-api/swagger.io/gh-pages/images/logo.png",
  ],
  OpenAPI: [
    "https://www.vectorlogo.zone/logos/openapis/openapis-icon.svg",
  ],
  Miro: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/miro/miro-original.svg",
    "https://seeklogo.com/images/M/miro-logo-09D1B3F0E5-seeklogo.com.png",
  ],
  "draw.io": [
    "https://upload.wikimedia.org/wikipedia/commons/3/31/Diagrams.net_Logo.svg",
  ],
  NgRx: [
    "https://ngrx.io/assets/images/badge.svg",
  ],
};

export function TechIconsGrid() {
  return (
    <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
      {techs.map((tech, i) => (
        <Tooltip key={tech.name}>
          <TooltipTrigger asChild>
            <div className={`relative group flex items-center justify-center rounded-lg border border-emerald-500/40 dark:border-green-400/30 bg-emerald-50/30 dark:bg-black/40 p-3 hover:bg-emerald-100/40 dark:hover:bg-green-400/10 transition-colors ${floatClass}`} style={{ animationDelay: `${(i % 6) * 0.2}s` }}>
              <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-emerald-400/60 dark:group-hover:border-green-400/60" />
              <div className="pointer-events-none absolute -inset-0.5 rounded-lg border border-emerald-500/20 dark:border-green-400/20 animate-[spin_3s_linear_infinite] group-hover:opacity-100 opacity-40" />
              <TechIcon
                name={tech.name}
                primary={tech.src}
                fallbacks={fallbacksByName[tech.name]}
                className={`relative z-10 h-8 w-8 object-contain mix-blend-normal ${tech.className ?? ""}`}
              />
            </div>
          </TooltipTrigger>
          <TooltipContent sideOffset={6} className="bg-emerald-600 text-white dark:bg-green-500">
            {tech.name}
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
