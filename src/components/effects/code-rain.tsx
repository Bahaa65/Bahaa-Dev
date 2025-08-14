"use client";

import * as React from "react";

export function CodeRain({ height = 300, className = "" }: { height?: number; className?: string }) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const rafRef = React.useRef<number | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  React.useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    if (!canvas || prefersReduced) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.clientWidth;
    const heightPx = height;
    canvas.width = width;
    canvas.height = heightPx;

    const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*+-<>".split("");
    
    // Responsive font size
    const fontSize = isMobile ? 12 : 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      const isDark = document.documentElement.classList.contains("dark");
      
      // Responsive trail fade (different for mobile/desktop)
      const fadeOpacity = isMobile ? 0.2 : (isDark ? 0.15 : 0.06);
      ctx.fillStyle = isDark 
        ? `rgba(0,0,0,${fadeOpacity})` 
        : `rgba(255,255,255,${fadeOpacity})`;
      ctx.fillRect(0, 0, width, heightPx);
      
      // Responsive glyph color and opacity
      const glyphOpacity = isMobile ? 0.7 : (isDark ? 0.85 : 0.60);
      ctx.fillStyle = isDark 
        ? `rgba(74,222,128,${glyphOpacity})` 
        : `rgba(16,185,129,${glyphOpacity})`;
      
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Responsive drop speed
        const dropSpeed = isMobile ? 1.2 : 1;
        if (drops[i] * fontSize > heightPx && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += dropSpeed;
      }
      
      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.clientWidth;
      canvas.width = width;
      canvas.height = heightPx;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [height, isMobile]);

  return (
    <div className={className} style={{ position: "relative" }}>
      <canvas 
        ref={canvasRef} 
        style={{ 
          width: "100%", 
          height,
          opacity: isMobile ? 0.8 : 1, // Slightly reduce opacity on mobile
        }} 
      />
    </div>
  );
}
