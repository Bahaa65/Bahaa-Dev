"use client";

import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { TerminalCard } from "@/components/ui/terminal-card";
import { TerminalText } from "@/components/typewriter-text";

type Props = {
  title: string;
  description: string;
  stack?: string;
  href?: string;
  delay?: number;
  speed?: number;
};

export function ProjectCard({ title, description, stack, href, delay = 0, speed = 25 }: Props) {
  const content = (
    <Tilt
      glareEnable
      glareMaxOpacity={0.2}
      glareColor="#34d399"
      glareBorderRadius="12px"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.02}
      className="rounded-xl"
    >
      <TerminalCard
        title={title}
        description={description}
        variant="border"
        titleDelay={delay}
        descriptionDelay={delay + 300}
        titleSpeed={speed}
        descriptionSpeed={speed - 5}
        titleType="terminal"
        descriptionType="terminal"
        showCursor={false}
        className="h-full transition hover:shadow-md"
      >
        {stack && (
          <div className="pt-2">
            <p className="text-xs text-emerald-500/70 dark:text-green-400/70 font-mono">
              <TerminalText
                text={stack}
                delay={delay + 600}
                speed={speed - 5}
                type="terminal"
                showCursor={false}
              />
            </p>
          </div>
        )}
      </TerminalCard>
    </Tilt>
  );

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noreferrer" className="block">
        {content}
      </Link>
    );
  }

  return <div className="block">{content}</div>;
}


