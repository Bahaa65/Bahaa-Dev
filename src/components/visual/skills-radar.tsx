"use client";

import * as React from "react";
import * as d3 from "d3";

type SkillPoint = {
  label: string;
  value: number; // 0..10
};

type Props = {
  title?: string;
  data?: SkillPoint[]; // your skills
  compare?: SkillPoint[]; // target/job profile
  size?: number; // px
  colors?: { self: string; target: string };
};

const DEFAULT_DATA: SkillPoint[] = [
  { label: "Frontend", value: 9 },
  { label: "Backend", value: 7 },
  { label: "DevOps", value: 7 },
  { label: "CS", value: 8 },
  { label: "Testing", value: 8 },
  { label: "Tooling", value: 9 },
];

export function SkillsRadar({ title = "Skills Radar", data = DEFAULT_DATA, compare, size = 340, colors = { self: "#10b981", target: "#60a5fa" } }: Props) {
  const ref = React.useRef<SVGSVGElement | null>(null);
  const [hoverIdx, setHoverIdx] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!ref.current) return;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const w = size;
    const h = size;
    const cx = w / 2;
    const cy = h / 2;
    // increase margin to ensure labels don't clip
    const radius = Math.min(w, h) / 2 - 56;

    const maxValue = 10;
    const levels = 5;

    const labels = data.map((d) => d.label);
    const angle = d3.scaleLinear().domain([0, labels.length]).range([0, Math.PI * 2]);
    const r = d3.scaleLinear().domain([0, maxValue]).range([0, radius]);

    const radialLine = d3
      .lineRadial<number>()
      .radius((d) => r(d))
      .angle((_, i) => angle(i))
      .curve(d3.curveLinearClosed);

    const g = svg
      .attr("width", w)
      .attr("height", h)
      .append("g")
      .attr("transform", `translate(${cx},${cy})`);

    // grid circles
    for (let i = 1; i <= levels; i++) {
      g.append("circle")
        .attr("r", (radius / levels) * i)
        .attr("fill", "none")
        .attr("stroke", "currentColor")
        .attr("opacity", 0.2);
    }

    // axes + labels
    labels.forEach((label, i) => {
      const a = angle(i);
      const x = Math.cos(a - Math.PI / 2) * radius;
      const y = Math.sin(a - Math.PI / 2) * radius;
      g.append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", x)
        .attr("y2", y)
        .attr("stroke", "currentColor")
        .attr("opacity", 0.3);

      const lx = Math.cos(a - Math.PI / 2) * (radius + 22);
      const ly = Math.sin(a - Math.PI / 2) * (radius + 22);
      g.append("text")
        .text(label)
        .attr("x", lx)
        .attr("y", ly)
        .attr("text-anchor", lx >= 0 ? (Math.abs(ly) < 4 ? "middle" : "start") : Math.abs(ly) < 4 ? "middle" : "end")
        .attr("dominant-baseline", "middle")
        .attr("font-size", 12)
        .attr("font-weight", 600)
        .attr("fill", "currentColor")
        .attr("opacity", 0.95);
    });

    function drawArea(values: number[], color: string, fillOpacity = 0.12) {
      const pathData = radialLine(values as unknown as number[]) ?? undefined;
      g.append("path")
        .attr("d", pathData as string)
        .attr("fill", d3.color(color)?.copy({ opacity: fillOpacity })?.toString() ?? color)
        .attr("stroke", color)
        .attr("stroke-width", 2.2);

      values.forEach((v, i) => {
        const a = angle(i) - Math.PI / 2;
        const rx = Math.cos(a) * r(v);
        const ry = Math.sin(a) * r(v);
        g.append("circle")
          .attr("cx", rx)
          .attr("cy", ry)
          .attr("r", () => (hoverIdx === i ? 5 : 3.5))
          .attr("fill", color)
          .on("mouseenter", () => setHoverIdx(i))
          .on("mouseleave", () => setHoverIdx((idx) => (idx === i ? null : idx)));
      });
    }

    drawArea(data.map((d) => d.value), colors.self, 0.12);
    if (compare && compare.length === data.length) {
      drawArea(compare.map((d) => d.value), colors.target, 0.12);
    }
  }, [data, compare, size, colors, hoverIdx]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-emerald-800 dark:text-green-300 text-sm mb-2 font-semibold">{title}</div>
      <svg ref={ref} className="text-emerald-800 dark:text-green-300" style={{ overflow: "visible" }} />
      {compare ? (
        <div className="mt-2 flex items-center gap-4 text-xs text-emerald-800 dark:text-green-300">
          <span className="inline-flex items-center gap-1"><span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: colors.self }} /> You</span>
          <span className="inline-flex items-center gap-1"><span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: colors.target }} /> Target</span>
        </div>
      ) : null}
    </div>
  );
}
