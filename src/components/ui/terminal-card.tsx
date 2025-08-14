"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { TerminalText } from "@/components/typewriter-text";
import { FadeIn } from "@/components/motion/fade-in";

interface TerminalCardProps {
  title: string | string[];
  description?: string | string[];
  children?: React.ReactNode;
  className?: string;
  titleDelay?: number; // ms
  descriptionDelay?: number; // ms
  titleSpeed?: number;
  descriptionSpeed?: number;
  titleType?: "terminal" | "instant" | "progressive";
  descriptionType?: "terminal" | "instant" | "progressive";
  showCursor?: boolean;
  variant?: "default" | "border" | "elevated";
}

export function TerminalCard({
  title,
  description,
  children,
  className,
  titleDelay = 0,
  descriptionDelay = 500,
  titleSpeed = 25,
  descriptionSpeed = 20,
  titleType = "terminal",
  descriptionType = "terminal",
  showCursor = false,
  variant = "default"
}: TerminalCardProps) {
  const variants = {
    default: "rounded-lg border border-emerald-500/40 dark:border-green-400/30 bg-white dark:bg-black p-6 shadow-sm",
    border: "rounded-lg border-2 border-emerald-500/60 dark:border-green-400/60 bg-emerald-50/40 dark:bg-black/50 p-6",
    elevated: "rounded-lg border border-emerald-500/40 dark:border-green-400/30 bg-white dark:bg-black p-6 shadow-lg hover:shadow-xl transition-shadow"
  } as const;

  const fadeInDelaySeconds = Math.max(0, titleDelay) / 1000;

  return (
    <FadeIn delay={fadeInDelaySeconds}>
      <div className={cn(variants[variant], className)}>
        <div className="space-y-4">
          <div>
            <TerminalText
              text={title}
              className="text-lg font-semibold text-emerald-700 dark:text-green-400 mb-2"
              delay={titleDelay}
              speed={titleSpeed}
              type={titleType}
              showCursor={showCursor}
            />
            {description && (
              <TerminalText
                text={description}
                className="text-sm text-emerald-600/80 dark:text-green-400/80 leading-relaxed"
                delay={descriptionDelay}
                speed={descriptionSpeed}
                type={descriptionType}
                showCursor={false}
              />
            )}
          </div>
          {children && (
            <div className="pt-2">
              {children}
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  );
}
