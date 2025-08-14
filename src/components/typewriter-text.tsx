"use client";

import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let HowlClass: any | null = null;
async function ensureHowler() {
  if (!HowlClass) {
    const mod = await import("howler");
    HowlClass = mod.Howl;
  }
  return HowlClass;
}

interface TerminalTextProps {
  text: string | string[];
  className?: string;
  delay?: number;
  speed?: number;
  onComplete?: () => void;
  showCursor?: boolean;
  cursorChar?: string;
  type?: "terminal" | "instant" | "progressive";
  staggerDelay?: number;
  playSound?: boolean;
  soundSrc?: string;
}

export function TerminalText({
  text,
  className = "",
  delay = 0,
  speed = 30,
  onComplete,
  showCursor = true,
  cursorChar = "▌",
  type = "terminal",
  staggerDelay = 100,
  playSound = false,
  soundSrc = "/type-key.mp3",
}: TerminalTextProps) {
  const [displayed, setDisplayed] = React.useState<string[]>([]);
  const [lineIndex, setLineIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [isDone, setIsDone] = React.useState(false);
  const [showCursorState, setShowCursor] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const soundRef = React.useRef<any | null>(null);

  // Responsive speed adjustment
  const responsiveSpeed = isMobile ? speed * 0.8 : speed;
  const responsiveStaggerDelay = isMobile ? staggerDelay * 0.7 : staggerDelay;

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const textArray = React.useMemo(() => 
    Array.isArray(text) ? text : [text], 
    [text]
  );

  React.useEffect(() => {
    if (type === "instant") {
      setDisplayed(textArray);
      setIsDone(true);
      onComplete?.();
      return;
    }

    if (type === "progressive") {
      const timer = setTimeout(() => {
        setDisplayed(prev => [...prev, textArray[prev.length]]);
        if (displayed.length < textArray.length) {
          setTimeout(() => {
            setDisplayed(prev => [...prev, textArray[prev.length]]);
          }, responsiveStaggerDelay);
        }
      }, delay);
      return () => clearTimeout(timer);
    }

    // Terminal type (default)
    const cursorTimer = setInterval(() => setShowCursor((s) => !s), 500);
    return () => clearInterval(cursorTimer);
  }, [type, delay, responsiveStaggerDelay, textArray, displayed.length, onComplete]);

  React.useEffect(() => {
    let mounted = true;
    (async () => {
      if (!playSound || type !== "terminal") return;
      await ensureHowler();
      if (!mounted || !HowlClass) return;
      soundRef.current = new HowlClass({ src: [soundSrc], volume: 0.15 });
    })();
    return () => {
      mounted = false;
      soundRef.current = null;
    };
  }, [playSound, type, soundSrc]);

  React.useEffect(() => {
    if (type !== "terminal" || isDone) return;
    if (lineIndex >= textArray.length) {
      setIsDone(true);
      onComplete?.();
      return;
    }

    const currentLine = textArray[lineIndex];
    const timer = setTimeout(() => {
      const nextChar = currentLine.slice(0, charIndex + 1);
      setDisplayed((prev) => {
        const copy = [...prev];
        copy[lineIndex] = nextChar;
        return copy;
      });

      // play sound
      if (playSound && soundRef.current) {
        try { soundRef.current.play(); } catch {}
      }

      if (charIndex + 1 >= currentLine.length) {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      } else {
        setCharIndex((c) => c + 1);
      }
    }, responsiveSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, lineIndex, textArray, responsiveSpeed, type, isDone, onComplete, playSound]);

  if (type === "instant") {
    return (
      <div className={className}>
        {textArray.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap">{line}</div>
        ))}
      </div>
    );
  }

  if (type === "progressive") {
    return (
      <div className={className}>
        {displayed.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap">{line}</div>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      {displayed.map((text, idx) => (
        <div key={idx} className="whitespace-pre-wrap">
          {text}
          {idx === lineIndex && !isDone && showCursor && showCursorState ? (
            <span className="ml-1 text-emerald-600 dark:text-green-300 animate-pulse">
              {cursorChar}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
