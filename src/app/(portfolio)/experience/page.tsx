import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { experiences } from "@/data/experience";
import { TerminalShell } from "@/components/terminal/terminal-shell";
import { TerminalText } from "@/components/typewriter-text";
import { TerminalSection } from "@/components/ui/terminal-section";
import { Skeleton } from "@/components/ui/skeleton";

const Timeline = dynamic(() => import("@/components/sections/timeline").then(m => m.Timeline), {
  loading: () => <Skeleton className="h-40" />
});

export const metadata: Metadata = {
  title: "Experience | Bahaa Akl",
  description: "Professional work experience and internships",
};

export default function ExperiencePage() {
  return (
    <TerminalShell>
      <div className="mb-8 text-center">
        <div className="inline-block border border-emerald-500 dark:border-green-400 px-6 py-2 rounded-t-lg bg-transparent">
          <TerminalText text="EXPERIENCE.sys" className="font-bold" speed={40} />
        </div>
        <div className="border border-emerald-500 dark:border-green-400 border-t-0 px-6 py-3 bg-transparent rounded-b-lg">
          <TerminalText text="Fetching timeline... OK" className="text-emerald-700/80 dark:text-green-400/80 text-sm" delay={600} />
        </div>
      </div>

      <TerminalSection
        title="> TIMELINE"
        variant="border"
        delay={900}
        speed={30}
        type="terminal"
      >
        <div className="mt-2">
          <Timeline
            items={experiences.map((e) => ({
              title: `${e.role} — ${e.company}`,
              period: e.period,
              bullets: e.details,
              tags: e.tags,
            }))}
            showProgressBar
            progressPercent={72}
          />
        </div>
      </TerminalSection>
    </TerminalShell>
  );
}



