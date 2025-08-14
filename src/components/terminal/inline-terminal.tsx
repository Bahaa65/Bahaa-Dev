"use client";

import dynamic from "next/dynamic";

const TerminalCommandBar = dynamic(() => import("@/components/terminal/command-bar").then(m => m.TerminalCommandBar), { ssr: false });

export function InlineTerminal() {
  return <TerminalCommandBar variant="inline" />;
}
