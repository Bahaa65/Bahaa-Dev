"use client";

import * as React from "react";

export function DNAHelix({ className = "w-full h-24" }: { className?: string }) {
  const ref = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;

    let raf: number;
    const render = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const w = rect.width;
      const h = rect.height;
      const cx = w / 2;
      const strands = 2;
      const dots = 40;
      const t = Date.now() * 0.002;

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < dots; i++) {
        const phase = (i / dots) * Math.PI * 2 + t;
        for (let s = 0; s < strands; s++) {
          const offset = s * Math.PI;
          const x = cx + Math.cos(phase + offset) * (w * 0.2);
          const y = (i / dots) * h;
          const scale = (Math.sin(phase + offset) + 1.6) / 2.6; // 0..1 depth
          ctx.fillStyle = `rgba(16,185,129,${0.3 + 0.5 * scale})`;
          ctx.beginPath();
          ctx.arc(x, y, 2.2 * scale, 0, Math.PI * 2);
          ctx.fill();
        }
        // connecting ladder
        const x1 = cx + Math.cos(phase) * (w * 0.2);
        const x2 = cx + Math.cos(phase + Math.PI) * (w * 0.2);
        const y = (i / dots) * h;
        ctx.strokeStyle = "rgba(16,185,129,0.25)";
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.stroke();
      }

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <canvas ref={ref} className={className} />;
}
