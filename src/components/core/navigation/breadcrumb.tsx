import * as React from "react";

export function Breadcrumb({ items = [] as { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm opacity-80">
      {items.map((it, i) => (
        <span key={i}>
          {i > 0 ? " / " : null}
          {it.href ? <a href={it.href} className="underline">{it.label}</a> : it.label}
        </span>
      ))}
    </nav>
  );
}


