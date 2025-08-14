"use client";

import * as React from "react";

export function TerminalShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-emerald-700 font-mono dark:bg-black dark:text-green-400">
      {/* CRT Scan Lines (dark mode only) */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden dark:block">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent animate-pulse" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/3 to-transparent animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10">{children}</div>
    </div>
  );
}
