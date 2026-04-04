// Type declarations for global analytics objects
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Fire a Meta Pixel event */
export function trackPixelEvent(eventName: string, params?: object) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", eventName, params);
}

/** Fire a GA4 event */
export function trackGAEvent(eventName: string, params?: object) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, params);
}

/** Fire to both platforms at once */
export function trackEvent(eventName: string, params?: object) {
  trackPixelEvent(eventName, params);
  trackGAEvent(eventName, params);
}
