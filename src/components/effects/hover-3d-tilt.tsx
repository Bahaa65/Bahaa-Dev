"use client";

import * as React from "react";

type Props = {
  children: React.ReactNode;
  maxTiltDeg?: number; // e.g., 10
  glare?: boolean;
  className?: string;
};

export function Hover3DTilt({ children, maxTiltDeg = 10, glare = true, className = "" }: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * maxTiltDeg;
    const rotateX = -((y - midY) / midY) * maxTiltDeg;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    if (glare) {
      const gradientX = (x / rect.width) * 100;
      const gradientY = (y / rect.height) * 100;
      el.style.setProperty("--tilt-glare-x", `${gradientX}%`);
      el.style.setProperty("--tilt-glare-y", `${gradientY}%`);
    }
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transition: "transform 200ms ease",
        willChange: "transform",
        position: "relative",
      }}
    >
      {glare ? (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at var(--tilt-glare-x, 50%) var(--tilt-glare-y, 50%), rgba(255,255,255,0.12), transparent 60%)`,
            pointerEvents: "none",
            borderRadius: 8,
          }}
        />
      ) : null}
      {children}
    </div>
  );
}
