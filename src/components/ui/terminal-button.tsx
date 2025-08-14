"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { TerminalText } from "@/components/typewriter-text";

interface TerminalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  delay?: number;
  speed?: number;
  textType?: "terminal" | "instant" | "progressive";
  showCursor?: boolean;
  className?: string;
}

const TerminalButton = React.forwardRef<HTMLButtonElement, TerminalButtonProps>(
  ({ 
    className, 
    variant = "default", 
    size = "default", 
    children, 
    delay = 0, 
    speed = 30, 
    textType = "terminal",
    showCursor = false,
    ...props 
  }, ref) => {
    const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      default: "bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-green-600 dark:text-black dark:hover:bg-green-700",
      outline: "border border-emerald-500 text-emerald-700 hover:bg-emerald-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-black",
      ghost: "hover:bg-emerald-100 hover:text-emerald-900 dark:hover:bg-green-900/20 dark:hover:text-green-400",
      link: "text-emerald-700 underline-offset-4 hover:underline dark:text-green-400"
    };
    
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    };

    return (
      <button
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {typeof children === 'string' || Array.isArray(children) ? (
          <TerminalText
            text={children}
            delay={delay}
            speed={speed}
            type={textType}
            showCursor={showCursor}
            className="font-mono"
          />
        ) : (
          children
        )}
      </button>
    );
  }
);

TerminalButton.displayName = "TerminalButton";

export { TerminalButton };
