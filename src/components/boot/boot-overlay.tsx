"use client";

import * as React from "react";
import { TerminalText } from "@/components/typewriter-text";

export function BootOverlay() {
  const [show, setShow] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    try {
      const done = localStorage.getItem("boot_done");
      if (!done) setShow(true);
    } catch {}
  }, []);

  React.useEffect(() => {
    if (!show) return;
    let id: number | null = null;
    const start = performance.now();
    const step = () => {
      const elapsed = performance.now() - start;
      const pct = Math.min(100, Math.round((elapsed / 2600) * 100));
      setProgress(pct);
      if (pct < 100) {
        id = requestAnimationFrame(step);
      } else {
        try { localStorage.setItem("boot_done", "1"); } catch {}
        setTimeout(() => setShow(false), 500);
      }
    };
    id = requestAnimationFrame(step);
    return () => { if (id) cancelAnimationFrame(id); };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-green-400">
      <div className="w-full max-w-2xl px-6">
        <div className="mb-4 text-center">
          <pre className="text-xs md:text-sm leading-4 whitespace-pre-wrap select-none">
{String.raw`  ____            _   _           _ _             
 |  _ \ ___  __| | | |__   ___ | | | ___ _ __  
 | |_) / _ \/ _  | | '_ \ / _ \| | |/ _ \ '__| 
 |  _ <  __/ (_| | | |_) | (_) | | |  __/ |    
 |_| \_\___|\__,_| |_.__/ \___/|_|_|\___|_|    `}
          </pre>
        </div>
        <div className="space-y-2 font-mono">
          <TerminalText text="> BOOT SEQUENCE INIT" speed={18} type="terminal" showCursor={false} />
          <TerminalText text="> CHECKING SYSTEM ... OK" delay={300} speed={18} type="terminal" showCursor={false} />
          <TerminalText text="> LOADING MODULES ..." delay={650} speed={18} type="terminal" showCursor={false} />
          <div className="mt-3 h-2 w-full rounded bg-green-900/30 overflow-hidden border border-green-400/30">
            <div className="h-full bg-green-400/70 transition-[width] duration-150" style={{ width: `${progress}%` }} />
          </div>
          <div className="text-xs opacity-80">{progress}%</div>
          <div className="mt-4 flex items-center justify-between text-xs opacity-70">
            <span>Press Skip to continue</span>
            <button
              onClick={() => { try { localStorage.setItem("boot_done", "1"); } catch {}; setShow(false); }}
              className="px-2 py-1 rounded border border-green-400/60 hover:bg-green-400/10"
            >Skip</button>
          </div>
        </div>
      </div>
    </div>
  );
}
