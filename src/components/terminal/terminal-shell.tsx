"use client";

import * as React from "react";

export function TerminalShell({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-white text-emerald-700 font-mono dark:bg-black dark:text-green-400">
      {/* CRT Scan Lines (dark mode only) - Responsive */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden dark:block">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent animate-pulse"
          style={{ 
            opacity: isMobile ? 0.3 : 1, // Reduce intensity on mobile
            animationDuration: isMobile ? '3s' : '2s' // Slower animation on mobile
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/3 to-transparent animate-pulse"
          style={{ 
            animationDelay: "0.5s",
            opacity: isMobile ? 0.2 : 1, // Reduce intensity on mobile
            animationDuration: isMobile ? '3s' : '2s' // Slower animation on mobile
          }}
        />
      </div>

      <div 
        className="relative z-10 mx-auto max-w-6xl px-4 py-10"
        style={{
          paddingLeft: isMobile ? '1rem' : '1rem',
          paddingRight: isMobile ? '1rem' : '1rem',
          paddingTop: isMobile ? '2rem' : '2.5rem',
          paddingBottom: isMobile ? '2rem' : '2.5rem'
        }}
      >
        {children}
      </div>
    </div>
  );
}
