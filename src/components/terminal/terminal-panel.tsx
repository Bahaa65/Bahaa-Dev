"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { TerminalText } from "@/components/typewriter-text";
import { skillsData, softSkillsData } from "@/data/skills";

const COMMANDS = ["help", "ls", "cd", "cat", "skills", "contact", "clear"] as const;
const ROUTES: Record<string, string> = {
  home: "/",
  about: "/about",
  projects: "/projects",
  experience: "/experience",
  achievements: "/achievements",
  contact: "/contact",
};

export function TerminalPanel() {
  const router = useRouter();
  const [input, setInput] = React.useState("");
  const [history, setHistory] = React.useState<string[]>([]);
  const [histIndex, setHistIndex] = React.useState<number>(-1);
  const [logs, setLogs] = React.useState<string[]>([
    "Terminal ready. Type 'help' to list commands.",
  ]);

  const pushLog = (line: string | string[]) => {
    setLogs((prev) => prev.concat(Array.isArray(line) ? line : [line]));
  };

  const handleCommand = (raw: string) => {
    const line = raw.trim();
    if (!line) return;
    pushLog(`> ${line}`);
    const [cmd, ...args] = line.split(/\s+/);

    switch (cmd) {
      case "help":
        pushLog([
          "Available commands:",
          "- help: Show this help",
          "- ls: List sections",
          "- cd <section>: Navigate (home/about/projects/experience/achievements/contact)",
          "- cat about.txt: Show profile summary",
          "- skills: Show skills categories",
          "- contact: Open contact page",
          "- clear: Clear screen",
        ]);
        break;
      case "ls":
        pushLog(Object.keys(ROUTES).join("    "));
        break;
      case "cd": {
        const dest = args[0]?.toLowerCase();
        if (dest && ROUTES[dest]) {
          router.push(ROUTES[dest]);
        } else {
          pushLog("Usage: cd <home|about|projects|experience|achievements|contact>");
        }
        break;
      }
      case "cat": {
        const file = args.join(" ");
        if (file === "about.txt") {
          pushLog([
            "Bahaa — Software Engineer: React/Next.js/TypeScript. Cloud & DevOps (AWS, Docker).",
            "Strong CS foundations, testing & tooling, and a terminal-style UX enthusiast.",
          ]);
        } else {
          pushLog("File not found. Try: cat about.txt");
        }
        break;
      }
      case "skills": {
        const lines: string[] = ["Technical Skills:"];
        for (const cat of skillsData) {
          lines.push(`- ${cat.name}: ${cat.skills.slice(0, 6).join(", ")} ...`);
        }
        lines.push("Soft Skills:");
        for (const cat of softSkillsData) {
          lines.push(`- ${cat.name}: ${cat.skills.slice(0, 6).join(", ")} ...`);
        }
        pushLog(lines);
        break;
      }
      case "contact":
        router.push("/contact");
        break;
      case "clear":
        setLogs([]);
        break;
      default:
        pushLog(`Command not found: ${cmd}. Type 'help'.`);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = input;
    setHistory((h) => [value, ...h]);
    setHistIndex(-1);
    setInput("");
    handleCommand(value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistIndex((i) => {
        const ni = Math.min(i + 1, history.length - 1);
        const next = history[ni];
        if (next) setInput(next);
        return ni;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistIndex((i) => {
        const ni = Math.max(i - 1, -1);
        const next = history[ni] ?? "";
        setInput(next);
        return ni;
      });
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = COMMANDS.find((c) => c.startsWith(input.trim()));
      if (match) setInput(match);
    }
  };

  return (
    <div className="rounded-lg border border-emerald-500/60 dark:border-green-400/60 bg-emerald-50/60 dark:bg-black/70 p-3" data-hist-index={histIndex}>
      <div className="h-32 overflow-y-auto font-mono text-sm text-emerald-700 dark:text-green-400 space-y-1 pr-1">
        {logs.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap">
            <TerminalText text={line} speed={10} type="instant" />
          </div>
        ))}
      </div>
      <form onSubmit={onSubmit} className="mt-2 flex items-center gap-2">
        <span className="text-emerald-700 dark:text-green-400">$</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Type a command... (help, ls, cd, cat, skills, contact, clear)"
          className="flex-1 bg-transparent outline-none font-mono text-sm text-emerald-800 dark:text-green-300 placeholder:text-emerald-700/60 dark:placeholder:text-green-400/60"
        />
      </form>
    </div>
  );
}
