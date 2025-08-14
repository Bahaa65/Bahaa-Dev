"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { TerminalText } from "@/components/typewriter-text";

interface TerminalSectionProps {
  title: string | string[];
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  delay?: number;
  speed?: number;
  type?: "terminal" | "instant" | "progressive";
  showCursor?: boolean;
  variant?: "default" | "border" | "card";
}

export function TerminalSection({
  title,
  children,
  className,
  titleClassName,
  delay = 0,
  speed = 30,
  type = "terminal",
  showCursor = true,
  variant = "default"
}: TerminalSectionProps) {
  const variants = {
    default: "space-y-4",
    border: "border border-emerald-500/60 dark:border-green-400/60 rounded-lg p-6 bg-emerald-50/40 dark:bg-black/50 space-y-4",
    card: "border border-emerald-500/60 dark:border-green-400/60 rounded-lg p-6 bg-white dark:bg-black shadow-lg space-y-4"
  };

  return (
    <section className={cn(variants[variant], className)}>
      <TerminalText
        text={title}
        className={cn(
          "font-semibold text-emerald-700 dark:text-green-400 text-lg",
          titleClassName
        )}
        delay={delay}
        speed={speed}
        type={type}
        showCursor={showCursor}
      />
      <div className="mt-4">
        {children}
      </div>
    </section>
  );
}
