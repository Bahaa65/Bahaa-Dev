export type WebVitalMetric = {
  name: string;
  value: number;
  id: string;
};

export function trackWebVitals(metric: WebVitalMetric) {
  const { name, value, id } = metric;
  if (typeof window === "undefined") return;

  if (typeof window !== "undefined" && "gtag" in window && typeof window.gtag === "function") {
    window.gtag("event", name, {
      event_category: "Web Vitals",
      event_label: id,
      value: Math.round(name === "CLS" ? value * 1000 : value),
      non_interaction: true,
    });
  }
}

export function setupRUM() {
  if (typeof window === "undefined") return;
  window.addEventListener("load", () => {
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (!navigation) return;
    console.log("Performance Metrics:", {
      DNS: navigation.domainLookupEnd - navigation.domainLookupStart,
      Connection: navigation.connectEnd - navigation.connectStart,
      Request: navigation.responseStart - navigation.requestStart,
      Response: navigation.responseEnd - navigation.responseStart,
      Processing: navigation.domComplete - navigation.responseEnd,
      Load: navigation.loadEventEnd - navigation.loadEventStart,
    });
  });
}


