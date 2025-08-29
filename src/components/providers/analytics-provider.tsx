"use client";

import * as React from "react";

type Props = { children: React.ReactNode };

export function AnalyticsProvider({ children }: Props) {
  return <>{children}</>;
}


