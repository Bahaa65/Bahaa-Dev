import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/data/featured-projects";
import { githubProjects } from "@/data/github-projects";
import { TerminalShell } from "@/components/terminal/terminal-shell";
import { TerminalText } from "@/components/typewriter-text";
import { TerminalSection } from "@/components/ui/terminal-section";

export const metadata: Metadata = {
  title: "Projects | Bahaa Akl",
  description: "Featured projects and selected GitHub repositories",
};

export default function ProjectsPage() {
  return (
    <TerminalShell>
      <div className="mb-8 text-center">
        <div className="inline-block border border-emerald-500 dark:border-green-400 px-6 py-2 rounded-t-lg bg-transparent">
          <TerminalText text="PROJECTS.sys" className="font-bold" speed={40} />
        </div>
        <div className="border border-emerald-500 dark:border-green-400 border-t-0 px-6 py-3 bg-transparent rounded-b-lg">
          <TerminalText text="Loading projects... OK" className="text-emerald-700/80 dark:text-green-400/80 text-sm" delay={600} />
        </div>
      </div>

      <TerminalSection
        title="> FEATURED PROJECTS"
        variant="border"
        delay={900}
        speed={30}
        type="terminal"
      >
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((p, index) => (
            <div key={p.title} className="rounded-lg border border-emerald-500/40 dark:border-green-400/30">
              <ProjectCard 
                title={p.title} 
                description={p.description} 
                stack={p.stack} 
                href={p.href}
                delay={1000 + (index * 200)}
                speed={25}
              />
            </div>
          ))}
        </div>
      </TerminalSection>

      <TerminalSection
        title="> GITHUB REPOSITORIES"
        variant="border"
        delay={1200}
        speed={30}
        type="terminal"
        className="mt-10"
      >
        <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {githubProjects.map((p, index) => (
            <div key={p.name} className="rounded-lg border border-emerald-500/40 dark:border-green-400/30">
              <ProjectCard
                title={p.name}
                description={p.description}
                stack={[p.language, ...p.topics].filter(Boolean).join(", ")}
                href={p.html_url}
                delay={1500 + (index * 150)}
                speed={22}
              />
            </div>
          ))}
        </div>
      </TerminalSection>
    </TerminalShell>
  );
}


