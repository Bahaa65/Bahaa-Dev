// Performance monitoring utilities
export const trackPerformance = () => {
  if (typeof window === 'undefined') return;

  // Track Largest Contentful Paint (LCP)
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1] as PerformanceEntry;
    
    if (lastEntry) {
      console.log('LCP:', lastEntry.startTime);
      
      // Send to analytics if available
      if (window.gtag) {
        window.gtag('event', 'LCP', {
          value: Math.round(lastEntry.startTime),
          metric_value: Math.round(lastEntry.startTime),
        });
      }
    }
  });

  observer.observe({ entryTypes: ['largest-contentful-paint'] });

  // Track First Input Delay (FID)
  const fidObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      const fidEntry = entry as PerformanceEventTiming;
      const fid = fidEntry.processingStart - fidEntry.startTime;
      console.log('FID:', fid);
      
      if (window.gtag) {
        window.gtag('event', 'FID', {
          value: Math.round(fid),
          metric_value: Math.round(fid),
        });
      }
    });
  });

  fidObserver.observe({ entryTypes: ['first-input'] });

  // Track Cumulative Layout Shift (CLS)
  let clsValue = 0;

  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const layoutShiftEntry = entry as PerformanceLayoutShiftEntry;
      if (!layoutShiftEntry.hadRecentInput) {
        clsValue += layoutShiftEntry.value;
      }
    }
    
    console.log('CLS:', clsValue);
    
    if (window.gtag) {
      window.gtag('event', 'CLS', {
        value: Math.round(clsValue * 1000) / 1000,
        metric_value: Math.round(clsValue * 1000) / 1000,
      });
    }
  });

  clsObserver.observe({ entryTypes: ['layout-shift'] });

  // Track Time to First Byte (TTFB)
  const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (navigationEntry) {
    const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
    console.log('TTFB:', ttfb);
    
    if (window.gtag) {
      window.gtag('event', 'TTFB', {
        value: Math.round(ttfb),
        metric_value: Math.round(ttfb),
      });
    }
  }
};

// Track page load time
export const trackPageLoad = () => {
  if (typeof window === 'undefined') return;

  window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log('Page Load Time:', loadTime);
    
    if (window.gtag) {
      window.gtag('event', 'page_load', {
        value: Math.round(loadTime),
        metric_value: Math.round(loadTime),
      });
    }
  });
};

// Track user interactions
export const trackUserInteraction = (action: string, label?: string) => {
  if (typeof window === 'undefined') return;

  if (window.gtag) {
    window.gtag('event', action, {
      event_category: 'user_interaction',
      event_label: label,
    });
  }
};

// Track component render time
export const trackComponentRender = (componentName: string, renderTime: number) => {
  if (typeof window === 'undefined') return;

  console.log(`${componentName} render time:`, renderTime);
  
  if (window.gtag) {
    window.gtag('event', 'component_render', {
      event_category: 'performance',
      event_label: componentName,
      value: Math.round(renderTime),
      metric_value: Math.round(renderTime),
    });
  }
};

// Initialize performance tracking
export const initPerformanceTracking = () => {
  trackPerformance();
  trackPageLoad();
};

// Type declarations
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}

// Performance API types
interface PerformanceLayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}
