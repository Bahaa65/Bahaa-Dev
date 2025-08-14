"use client";

import * as React from "react";
import Editor from "@monaco-editor/react";

type Props = {
  initialCode?: string;
  language?: string;
  typingSpeedMs?: number;
};

const SAMPLE = `// Live typing demo\nfunction greet(name: string) {\n  return ` + "`Hello, ${name}!`" + `;\n}\n\nconsole.log(greet("Bahaa"));`;

export function CodeEditorSim({ initialCode = SAMPLE, language = "typescript", typingSpeedMs = 25 }: Props) {
  const [code, setCode] = React.useState<string>("");
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    setCode("");
    setIdx(0);
  }, [initialCode]);

  React.useEffect(() => {
    if (idx >= initialCode.length) return;
    const t = setTimeout(() => {
      setCode((c) => c + initialCode[idx]);
      setIdx((i) => i + 1);
    }, typingSpeedMs);
    return () => clearTimeout(t);
  }, [idx, initialCode, typingSpeedMs]);

  return (
    <div className="rounded-lg border border-emerald-500/60 dark:border-green-400/60 overflow-hidden">
      <Editor
        height="260px"
        defaultLanguage={language}
        value={code}
        options={{ readOnly: true, minimap: { enabled: false }, fontSize: 13, scrollBeyondLastLine: false }}
        theme="vs-dark"
      />
    </div>
  );
}
