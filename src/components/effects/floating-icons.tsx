"use client";

import * as React from "react";

const floatKeyframes = `@keyframes floatY { 0%{ transform: translateY(0)} 50%{ transform: translateY(-6px)} 100%{ transform: translateY(0)} }`;

export function FloatingIcons({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = floatKeyframes;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 opacity-40 [animation:floatY_6s_ease-in-out_infinite]" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
