"use client";

import * as React from "react";

type Props = { children: React.ReactNode };

export function QueryProvider({ children }: Props) {
  return <>{children}</>;
}


