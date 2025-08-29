import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { education } from "@/data/education";
import { skillsData, softSkillsData } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { TerminalShell } from "@/components/terminal/terminal-shell";
import { TerminalText } from "@/components/typewriter-text";
import { TerminalSection } from "@/components/ui/terminal-section";
import { Skeleton } from "@/components/ui/skeleton";

const Timeline = dynamic(() => import("@/components/sections/timeline").then(m => m.Timeline), {
  loading: () => null
});

export const metadata: Metadata = {
  title: "About | Bahaa Akl",
  description: "About Bahaa — bio, education, and skills",
};

export default function AboutPage() {
  return (
    <TerminalShell>
      <div className="mb-8 text-center">
        <div className="inline-block border border-emerald-500 dark:border-green-400 px-6 py-2 rounded-t-lg bg-transparent">
          <TerminalText text="ABOUT.sys" className="font-bold" speed={40} />
        </div>
        <div className="border border-emerald-500 dark:border-green-400 border-t-0 px-6 py-3 bg-transparent rounded-b-lg">
          <TerminalText text="Loading profile... OK" className="text-emerald-700/80 dark:text-green-400/80 text-sm" delay={600} />
        </div>
      </div>

      <div className="space-y-10">
        <TerminalSection
          title="> BIO"
          variant="border"
          delay={900}
          speed={30}
          type="terminal"
        >
          <div className="space-y-4">
            <TerminalText
              text="USAID Scholar and Software Engineering student at Cairo University (Class of 2026) with strong foundations in frontend development, business analysis, and market research. Experienced in building responsive, user-centric applications using React.js, TypeScript, and modern frontend architectures."
              className="leading-relaxed"
              delay={1200}
              speed={25}
              type="terminal"
            />
            <TerminalText
              text="Completed supplementary coursework at The American University in Cairo (AUC) in English, Entrepreneurship, and Leadership. Proven track record in national competitions, research projects, and leadership roles within the USAID Scholars Program."
              className="leading-relaxed"
              delay={3000}
              speed={25}
              type="terminal"
            />
          </div>
        </TerminalSection>

        <TerminalSection
          title="> EDUCATION"
          variant="border"
          delay={1200}
          speed={30}
          type="terminal"
        >
          <Timeline
            items={education.map((e) => ({
              title: e.title,
              subtitle: e.institution,
              period: e.period,
              bullets: e.details,
            }))}
          />
        </TerminalSection>

        <TerminalSection
          title="> TECHNICAL SKILLS"
          variant="border"
          delay={1500}
          speed={30}
          type="terminal"
        >
          <div className="space-y-6">
            {skillsData.map((category, index) => (
              <div key={category.name}>
                <TerminalText
                  text={`${category.name}:`}
                  className="text-lg font-medium mb-3 text-emerald-700 dark:text-green-400"
                  delay={1800 + index * 200}
                  speed={25}
                  type="terminal"
                />
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-emerald-500/50 dark:border-green-400/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TerminalSection>

        <TerminalSection
          title="> CORE SOFT SKILLS"
          variant="border"
          delay={1800}
          speed={30}
          type="terminal"
        >
          <div className="space-y-6">
            {softSkillsData.map((category, index) => (
              <div key={category.name}>
                <TerminalText
                  text={`${category.name}:`}
                  className="text-lg font-medium mb-3 text-emerald-700 dark:text-green-400"
                  delay={2100 + index * 200}
                  speed={25}
                  type="terminal"
                />
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-emerald-500/50 dark:border-green-400/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TerminalSection>

        <TerminalSection
          title="> SELECTED ACHIEVEMENTS"
          variant="border"
          delay={2100}
          speed={30}
          type="terminal"
        >
          <div className="mt-2 space-y-3">
            <div className="p-4 border rounded-lg border-emerald-500/50 dark:border-green-400/40">
              <TerminalText
                text="Huawei ICT Academy Competition 2024"
                className="font-medium"
                delay={2400}
                speed={25}
                type="terminal"
              />
              <TerminalText
                text="National Finalist & Silver Medalist in Cloud Computing."
                className="text-sm opacity-80"
                delay={2700}
                speed={25}
                type="terminal"
              />
            </div>
            <div className="p-4 border rounded-lg border-emerald-500/50 dark:border-green-400/40">
              <TerminalText
                text="SAS Data Literacy Specialist"
                className="font-medium"
                delay={3000}
                speed={25}
                type="terminal"
              />
              <TerminalText
                text="Earned certifications in Data Literacy Essentials & Practice."
                className="text-sm opacity-80"
                delay={3300}
                speed={25}
                type="terminal"
              />
            </div>
            <div className="p-4 border rounded-lg border-emerald-500/50 dark:border-green-400/40">
              <TerminalText
                text="EURECA 2024"
                className="font-medium"
                delay={3600}
                speed={25}
                type="terminal"
              />
              <TerminalText
                text="Co-authored and presented research on sustainable energy at a national convention."
                className="text-sm opacity-80"
                delay={3900}
                speed={25}
                type="terminal"
              />
            </div>
          </div>
        </TerminalSection>
      </div>
    </TerminalShell>
  );
}



