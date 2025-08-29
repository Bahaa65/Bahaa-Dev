import type { Metadata } from "next";
import { achievements } from "@/data/achievements";
import { Badge } from "@/components/ui/badge";
import { TerminalShell } from "@/components/terminal/terminal-shell";
import { TerminalText } from "@/components/typewriter-text";
import { TerminalSection } from "@/components/ui/terminal-section";
import { TerminalCard } from "@/components/ui/terminal-card";

export const metadata: Metadata = {
  title: "Achievements | Bahaa Akl",
  description: "Awards, certifications, and leadership programs",
};

function ProgressRing({ pct = 80 }: { pct?: number }) {
  const clamped = Math.max(0, Math.min(100, pct));
  return (
    <div className="relative inline-flex items-center justify-center">
      <div className="relative h-10 w-10 rounded-full bg-emerald-200/30 dark:bg-green-900/20">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(#10b981 ${clamped * 3.6}deg, transparent 0deg)`,
          }}
        />
        <div className="absolute inset-1 rounded-full bg-white dark:bg-black flex items-center justify-center text-[10px] text-emerald-700 dark:text-green-400 font-semibold">
          {clamped}%
        </div>
      </div>
    </div>
  );
}

function deriveScores(title: string, year?: string, skills?: string[]) {
  const now = new Date().getFullYear();
  const y = year ? parseInt(year, 10) : now;
  const recency = Math.max(0, 1 - Math.min(5, now - y) / 5);
  const impactKeywords = ["National", "Finalist", "Medalist", "Leader", "Leadership", "Research", "Publication", "Cloud", "Competition"];
  const impactHits = impactKeywords.reduce((acc, kw) => acc + (title.toLowerCase().includes(kw.toLowerCase()) ? 1 : 0), 0);
  const impact = Math.min(1, impactHits / 3);
  const breadth = Math.min(1, (skills?.length ?? 0) / 5);
  const score = 0.5 * recency + 0.3 * impact + 0.2 * breadth;
  const progressPct = Math.round(score * 100);
  const xp = Math.round(100 + score * 200);
  const level = Math.max(1, Math.min(10, Math.round(2 + score * 8)));
  return { progressPct, xp, level };
}

export default function AchievementsPage() {
  return (
    <TerminalShell>
      <div className="mb-8 text-center">
        <div className="inline-block border border-emerald-500 dark:border-green-400 px-6 py-2 rounded-t-lg bg-transparent">
          <TerminalText text="ACHIEVEMENTS.sys" className="font-bold" speed={40} />
        </div>
        <div className="border border-emerald-500 dark:border-green-400 border-t-0 px-6 py-3 bg-transparent rounded-b-lg">
          <TerminalText text="Loading achievements... OK" className="text-emerald-700/80 dark:text-green-400/80 text-sm" delay={600} />
        </div>
      </div>

      <TerminalSection
        title="> LIST"
        variant="border"
        delay={900}
        speed={30}
        type="terminal"
      >
        <div className="mt-2 grid gap-6 sm:grid-cols-2">
          {achievements.map((a, index) => {
            const { progressPct, xp, level } = deriveScores(a.title, a.year, a.skills);
            return (
              <TerminalCard
                key={a.title}
                title={a.title}
                description={a.details}
                variant="border"
                titleDelay={1100 + index * 200}
                descriptionDelay={1300 + index * 200}
              >
                <div className="mt-3 flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {a.year && <Badge variant="outline">{a.year}</Badge>}
                    {a.skills?.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <ProgressRing pct={progressPct} />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <Badge variant="secondary" className="text-[10px]">XP +{xp}</Badge>
                  <Badge variant="secondary" className="text-[10px]">Level {level}</Badge>
                </div>
              </TerminalCard>
            );
          })}
        </div>
      </TerminalSection>
    </TerminalShell>
  );
}



