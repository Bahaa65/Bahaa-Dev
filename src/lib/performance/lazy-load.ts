import { lazy, type ComponentType } from "react";

export function createLazyComponent<T = unknown>(
  importFn: () => Promise<{ default: ComponentType<T> }>,
  fallback?: ComponentType<unknown>
) {
  return lazy(async () => {
    try {
      return await importFn();
    } catch (error) {
      console.error("Failed to load component:", error);
      return { default: (fallback || (() => null)) as ComponentType<T> };
    }
  });
}