"use client";

import * as React from "react";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection";

type Props = {
  children: React.ReactNode;
  placeholder?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
};

export function WhenVisible({ children, placeholder = null, rootMargin = "120px", threshold = 0.1 }: Props) {
  const { ref, hasIntersected } = useIntersectionObserver({ rootMargin, threshold });
  return <div ref={ref}>{hasIntersected ? children : placeholder}</div>;
}


