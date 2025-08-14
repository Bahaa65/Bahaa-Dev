"use client";

import * as React from "react";

type Props = {
  density?: number; // particles per 10k px^2
  color?: string;
  lineColor?: string;
  maxDist?: number; // px for linking
  className?: string;
};

export function ConstellationCanvas({ density = 0.12, color = "#10b981", lineColor = "rgba(16,185,129,0.25)", maxDist = 110, className = "absolute inset-0 -z-10" }: Props) {
  const ref = React.useRef<HTMLCanvasElement | null>(null);
  const mouse = React.useRef<{ x: number; y: number } | null>(null);
  const animRef = React.useRef<number | null>(null);
  const pointsRef = React.useRef<Array<{ x: number; y: number; vx: number; vy: number }>>([]);

  React.useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // reinit particles per area
      const area = rect.width * rect.height;
      const count = Math.max(40, Math.floor((area / 10000) * density * 100));
      pointsRef.current = Array.from({ length: count }).map(() => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => (mouse.current = null);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    const step = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // update points
      for (const p of pointsRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > rect.width) p.vx *= -1;
        if (p.y < 0 || p.y > rect.height) p.vy *= -1;
        if (mouse.current) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist2 = dx * dx + dy * dy;
          const r = 120;
          if (dist2 < r * r) {
            p.vx += (dx / Math.sqrt(dist2 + 0.0001)) * 0.02;
            p.vy += (dy / Math.sqrt(dist2 + 0.0001)) * 0.02;
          }
        }
      }

      // draw lines
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      for (let i = 0; i < pointsRef.current.length; i++) {
        const a = pointsRef.current[i];
        for (let j = i + 1; j < pointsRef.current.length; j++) {
          const b = pointsRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) {
            ctx.globalAlpha = 1 - d / maxDist;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // draw points
      ctx.fillStyle = color;
      for (const p of pointsRef.current) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [density, color, lineColor, maxDist]);

  return <canvas ref={ref} className={className} />;
}
