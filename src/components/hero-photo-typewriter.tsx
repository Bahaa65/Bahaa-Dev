"use client";

import * as React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

type Props = {
  photoUrl?: string;
  lines: string[];
  typingSpeedMs?: number;
};

export function HeroPhotoTypewriter({ photoUrl = "/avatar.jpg", lines, typingSpeedMs = 22 }: Props) {
  const [displayed, setDisplayed] = React.useState<string[]>(Array(lines.length).fill(""));
  const [lineIndex, setLineIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [isDone, setIsDone] = React.useState(false);
  const [showCursor, setShowCursor] = React.useState(true);

  React.useEffect(() => {
    const cursorTimer = setInterval(() => setShowCursor((s) => !s), 500);
    return () => clearInterval(cursorTimer);
  }, []);

  React.useEffect(() => {
    if (isDone) return;
    if (lineIndex >= lines.length) {
      setIsDone(true);
      return;
    }

    const currentLine = lines[lineIndex];
    const timer = setTimeout(() => {
      const nextChar = currentLine.slice(0, charIndex + 1);
      setDisplayed((prev) => {
        const copy = [...prev];
        copy[lineIndex] = nextChar;
        return copy;
      });

      if (charIndex + 1 >= currentLine.length) {
        // move to next line
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      } else {
        setCharIndex((c) => c + 1);
      }
    }, typingSpeedMs);

    return () => clearTimeout(timer);
  }, [charIndex, lineIndex, lines, typingSpeedMs, isDone]);

  return (
    <div className="flex flex-col items-start space-y-8">
      <div className="relative flex justify-center w-full py-6">
        {/* Loading Circle Animation - Outer Ring */}
        <div className="absolute w-44 h-44 rounded-full border-4 border-transparent border-t-emerald-400/60 dark:border-t-green-400/60 animate-spin">
        </div>
        
        {/* Loading Circle Animation - Middle Ring */}
        <div className="absolute w-40 h-40 rounded-full border-4 border-transparent border-r-emerald-300/40 dark:border-r-green-300/40 animate-spin" 
             style={{ animationDirection: 'reverse', animationDuration: '3s' }}>
        </div>
        
        {/* Main Photo Container - Clickable */}
        <Sheet>
          <SheetTrigger asChild>
            <div className="relative w-36 h-36 rounded-full border-4 border-emerald-400/80 dark:border-green-400/80 shadow-[0_0_30px_rgba(16,185,129,0.4)] dark:shadow-[0_0_30px_rgba(74,222,128,0.4)] overflow-hidden bg-gray-100 dark:bg-gray-800 z-10 cursor-pointer hover:scale-105 transition-transform duration-200 hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] dark:hover:shadow-[0_0_40px_rgba(74,222,128,0.6)]">
              <Image 
                src={photoUrl} 
                alt="Bahaa Gaballah - Profile" 
                width={144}
                height={144}
                className="object-cover"
              />
              {/* Click indicator */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                <div className="opacity-0 hover:opacity-100 transition-opacity duration-200 text-white text-xs font-medium">
                  Click to enlarge
                </div>
              </div>
            </div>
          </SheetTrigger>
          
          <SheetContent className="w-full max-w-2xl p-0 bg-white/95 dark:bg-black/95 border-emerald-500/30 dark:border-green-400/30">
            <div className="flex flex-col items-center justify-center h-full p-6">
              <div className="text-center mb-4">
                <h3 className="text-emerald-700 dark:text-green-400 text-lg font-semibold mb-2">Bahaa Mohamed Akl Gaballah</h3>
                <p className="text-emerald-600/80 dark:text-green-300/80 text-sm">Software Engineer</p>
              </div>
              <div className="relative w-80 h-80 rounded-full border-4 border-emerald-500/60 dark:border-green-400/60 shadow-[0_0_50px_rgba(16,185,129,0.4)] dark:shadow-[0_0_50px_rgba(74,222,128,0.4)] overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image 
                  src={photoUrl} 
                  alt="Profile - Enlarged" 
                  width={320}
                  height={320}
                  className="object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-emerald-600/70 dark:text-green-300/70 text-sm max-w-md">
                  USAID Scholar and Software Engineering student at Cairo University with expertise in frontend development, 
                  business analysis, and market research.
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        {/* Pulsing Ring Effect */}
        <div className="absolute w-48 h-48 rounded-full border-2 border-emerald-400/20 dark:border-green-400/20 animate-pulse">
        </div>
      </div>

      <div className="w-full max-w-lg rounded-md border border-emerald-500/60 dark:border-green-400/60 bg-emerald-50/40 dark:bg-black/50 text-emerald-700 dark:text-green-400 p-3 font-mono text-sm leading-6 shadow-lg">
        {displayed.map((text, idx) => (
          <div key={idx} className="whitespace-pre-wrap">
            {text}
            {idx === lineIndex && !isDone && showCursor ? <span className="ml-1 text-emerald-600 dark:text-green-300">▌</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
