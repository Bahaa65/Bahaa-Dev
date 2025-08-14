"use client";

import * as React from "react";

export function CodeRain({ height = 300, className = "" }: { height?: number; className?: string }) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const rafRef = React.useRef<number | null>(null);

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
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      const isDark = document.documentElement.classList.contains("dark");
      // trail fade rectangle (different for light/dark)
      ctx.fillStyle = isDark ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.06)";
      ctx.fillRect(0, 0, width, heightPx);
      // glyph color (emerald/green, softer on light mode)
      ctx.fillStyle = isDark ? "rgba(74,222,128,0.85)" : "rgba(16,185,129,0.60)";
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > heightPx && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
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
  }, [height]);

  return (
    <div className={className} style={{ position: "relative" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height }} />
    </div>
  );
}
