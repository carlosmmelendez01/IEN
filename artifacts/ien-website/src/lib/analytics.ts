type AnalyticsEventName =
  | "school_charter_button_click"
  | "start_school_button_click"
  | "browse_member_schools_click"
  | "stay_connected_submit"
  | "school_charter_banner_click";

type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, unknown>,
    ) => void;
    plausible?: (
      eventName: string,
      options?: { props?: Record<string, unknown> },
    ) => void;
  }
}

export function trackAnalyticsEvent(
  name: AnalyticsEventName,
  payload: AnalyticsPayload = {},
) {
  if (typeof window === "undefined") return;

  const props = Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined),
  );

  window.gtag?.("event", name, props);
  window.plausible?.(name, { props });

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, ...props });
  }
}
