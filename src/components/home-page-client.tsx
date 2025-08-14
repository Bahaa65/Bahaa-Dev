"use client";

import { Suspense, useEffect } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { HeroPhotoTypewriter } from "@/components/hero-photo-typewriter";
import { TerminalText } from "@/components/typewriter-text";
import { TerminalShell } from "@/components/terminal/terminal-shell";
import { TerminalSection } from "@/components/ui/terminal-section";
import { TechIconsGrid } from "@/components/sections/tech-icons-grid";
import { TerminalCVButton } from "@/components/ui/terminal-cv-button";
import dynamic from "next/dynamic";
import { initPerformanceTracking } from "@/lib/performance";

// Dynamic imports for heavy components
const SkillsRadar = dynamic(
  () => import("@/components/visual/skills-radar").then(m => m.SkillsRadar),
  { 
    ssr: false, 
    loading: () => <div className="h-96 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-lg border border-emerald-200/50 dark:border-green-400/30 flex items-center justify-center">
      <TerminalText text="Loading Skills Radar..." className="text-emerald-600 dark:text-green-400" />
    </div>
  }
);

const InlineTerminal = dynamic(
  () => import("@/components/terminal/inline-terminal").then(m => m.InlineTerminal),
  { 
    ssr: false, 
    loading: () => <div className="h-32 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-900/20 dark:to-green-400/30 flex items-center justify-center">
      <TerminalText text="Loading Terminal..." className="text-emerald-600 dark:text-green-400" />
    </div>
  }
);

const ThreeParticlesBackground = dynamic(
  () => import("@/components/visual/three-particles").then(m => m.ThreeParticlesBackground),
  { 
    ssr: false, 
    loading: () => <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50/20 to-green-50/20 dark:from-emerald-900/10 dark:to-green-900/10" />
  }
);

const ConstellationCanvas = dynamic(
  () => import("@/components/visual/constellation-canvas").then(m => m.ConstellationCanvas),
  { 
    ssr: false, 
    loading: () => <div className="absolute inset-0 -z-10" />
  }
);

export function HomePageClient() {
  const name = "Bahaa Mohamed Akl Gaballah";
  const title = "Software Engineer";
  const heroLines = [
    name,
    title,
    "Innovative and results-driven Software Engineer with proven expertise in frontend development, business analysis, and market research.",
    "Proficient in React.js, TypeScript, Node.js, AWS, with strong foundations in core CS principles.",
    "Leadership in hackathons, national research competitions, and entrepreneurship programs.",
  ];

  useEffect(() => {
    // Initialize performance tracking
    initPerformanceTracking();
  }, []);

  return (
    <TerminalShell>
      {/* Terminal Header */}
      <div className="text-center mb-12">
        <div className="inline-block border border-emerald-500 dark:border-green-400 px-6 py-2 rounded-t-lg bg-white dark:bg-black">
          <TerminalText 
            text="BAHAA_PORTFOLIO.exe" 
            className="text-emerald-700 dark:text-green-400 text-lg font-bold"
            delay={500}
            speed={40}
          />
        </div>
        <div className="border border-emerald-500 dark:border-green-400 border-t-0 px-6 py-3 bg-white dark:bg-black rounded-b-lg">
          <TerminalText 
            text="Loading system... Ready." 
            className="text-emerald-700/80 dark:text-green-400/80 text-sm"
            delay={1500}
            speed={30}
          />
        </div>
      </div>

      <section className="grid items-start gap-8 md:grid-cols-2 relative">
        {/* Particle background behind left column only */}
        <div className="absolute inset-0 -z-10 pointer-events-none hidden md:block">
          <Suspense fallback={<div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50/20 to-green-50/20 dark:from-emerald-900/10 dark:to-green-900/10" />}>
            <ThreeParticlesBackground />
          </Suspense>
        </div>
        {/* Left Column - Photo & Hero */}
        <FadeIn delay={0.2}>
          <div className="space-y-6">
            <HeroPhotoTypewriter photoUrl="/avatar.jpg" lines={heroLines} typingSpeedMs={18} />
            
            <TerminalSection
              title="> terminal"
              variant="border"
              delay={3000}
              speed={25}
              type="terminal"
              className="p-4"
            >
              <Suspense fallback={<div className="h-32 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-lg border border-emerald-200/50 dark:border-green-400/30 flex items-center justify-center">
                <TerminalText text="Loading Terminal..." className="text-emerald-600 dark:text-green-400" />
              </div>}>
                <InlineTerminal />
              </Suspense>
            </TerminalSection>

            {/* Download CV Button */}
            <div className="mt-4">
              <TerminalCVButton />
            </div>
          </div>
        </FadeIn>

        {/* Right Column - Skills (Icons) */}
        <div className="space-y-6 relative">
          <Suspense fallback={<div className="absolute inset-0 -z-10" />}>
            <ConstellationCanvas className="absolute inset-0 -z-10 hidden md:block" />
          </Suspense>
          <TerminalSection
            title="system.tech"
            variant="border"
            delay={4000}
            speed={25}
            type="terminal"
            className="p-6"
          >
            <div className="space-y-4">
              <TerminalText
                text="Core Technologies in Use"
                delay={4500}
                speed={25}
                type="terminal"
                showCursor={false}
                className="text-emerald-700 dark:text-green-400 font-semibold"
              />
              <div className="mt-2">
                <TechIconsGrid />
              </div>
            </div>
          </TerminalSection>

          <TerminalSection
            title="> radar.skills"
            variant="border"
            delay={5200}
            speed={25}
            type="terminal"
            className="p-6"
          >
            <div className="space-y-3">
              <TerminalText text="Visualizing skill clusters" delay={5400} speed={22} type="terminal" showCursor={false} />
              <Suspense fallback={<div className="h-96 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-lg border border-emerald-200/50 dark:border-green-400/30 flex items-center justify-center">
                <TerminalText text="Loading Skills Radar..." className="text-emerald-600 dark:text-green-400" />
              </div>}>
                <SkillsRadar />
              </Suspense>
            </div>
          </TerminalSection>
        </div>
      </section>

      {/* Terminal Footer */}
      <TerminalSection
        title="System ready. Type 'help' for more commands or navigate using the menu above."
        variant="border"
        delay={8000}
        speed={30}
        type="terminal"
        className="mt-12 text-center p-4"
        titleClassName="text-emerald-700/70 dark:text-green-400/70 text-sm"
      >
        <div></div>
      </TerminalSection>
    </TerminalShell>
  );
}
