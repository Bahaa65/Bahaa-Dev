"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

const COMMANDS = ["help", "ls", "skills", "contact", "clear"] as const;

type Command = typeof COMMANDS[number];

type Entry = { type: "in" | "out"; text: string };

export function TerminalConsole() {
  const [history, setHistory] = React.useState<Entry[]>([
    { type: "out", text: "Type 'help' to list commands." },
  ]);
  const [input, setInput] = React.useState("");
  const [idx, setIdx] = React.useState<number | null>(null);
  const router = useRouter();

  const submit = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;
    const parts = trimmed.split(/\s+/);
    const base = parts[0] as Command;
    const push = (e: Entry) => setHistory((h) => [...h, e]);
    setHistory((h) => [...h, { type: "in", text: trimmed }]);

    switch (base) {
      case "help":
        push({ type: "out", text: "Available: help, ls, skills, contact, clear" });
        break;
      case "ls":
        push({ type: "out", text: "./projects  ./about  ./experience  ./achievements  ./contact" });
        break;
      case "skills":
        push({ type: "out", text: "Open About → TECHNICAL SKILLS for full list." });
        break;
      case "contact":
        push({ type: "out", text: "Opening contact form..." });
        router.push("/contact");
        break;
      case "clear":
        setHistory([]);
        break;
      default:
        push({ type: "out", text: `Unknown: ${trimmed}. Try 'help'.` });
    }
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submit(input);
      setIdx(null);
      setInput("");
    } else if (e.key === "ArrowUp") {
      const ins = history.filter((h) => h.type === "in").map((h) => h.text);
      if (!ins.length) return;
      if (idx === null) setIdx(ins.length - 1);
      else setIdx(Math.max(0, idx - 1));
      const newText = ins[idx === null ? ins.length - 1 : Math.max(0, idx - 1)];
      if (newText) setInput(newText);
    } else if (e.key === "ArrowDown") {
      const ins = history.filter((h) => h.type === "in").map((h) => h.text);
      if (!ins.length) return;
      if (idx === null) return;
      const next = Math.min(ins.length - 1, idx + 1);
      setIdx(next);
      setInput(ins[next] ?? "");
    } else if (e.key === "Tab") {
      e.preventDefault();
      const matches = COMMANDS.filter((c) => c.startsWith(input));
      if (matches.length === 1) setInput(matches[0]);
    }
  };

  return (
    <div className="rounded-lg border border-emerald-500/60 dark:border-green-400/60 bg-emerald-50/40 dark:bg-black/50 p-3 font-mono text-sm text-emerald-700 dark:text-green-400">
      <div className="space-y-1 max-h-48 overflow-auto pr-2">
        {history.map((h, i) => (
          <div key={i} className={h.type === "in" ? "text-emerald-600 dark:text-green-300" : "opacity-80"}>
            {h.type === "in" ? "> " : ""}{h.text}
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-2">
        <span>{">"}</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKey}
          placeholder={"help | ls | skills | contact"}
          className="flex-1 bg-transparent outline-none placeholder:text-emerald-700/50 dark:placeholder:text-green-400/50"
        />
      </div>
    </div>
  );
}
