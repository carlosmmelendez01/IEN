import { Button } from "@/components/ui/button";
import { trackAnalyticsEvent } from "@/lib/analytics";
import { schoolCharterConfig } from "@/lib/schoolCharter";
import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

type CharterSource = "homepage" | "member_schools" | "start_program";

interface SchoolCharterButtonProps {
  children: ReactNode;
  source: CharterSource;
  className?: string;
  variant?: "default" | "outline";
  eventName?: "school_charter_button_click" | "school_charter_banner_click";
}

export function SchoolCharterButton({
  children,
  source,
  className,
  variant = "default",
  eventName = "school_charter_button_click",
}: SchoolCharterButtonProps) {
  const sharedClasses =
    className ??
    "bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-12 px-8";

  if (!schoolCharterConfig.formUrl) {
    return (
      <Button
        type="button"
        disabled
        variant={variant}
        className={sharedClasses}
        title="School charter form URL is not configured."
      >
        {children}
      </Button>
    );
  }

  return (
    <Button asChild variant={variant} className={sharedClasses}>
      <a
        href={schoolCharterConfig.formUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackAnalyticsEvent(eventName, {
            source,
            academic_year: schoolCharterConfig.academicYear,
          })
        }
      >
        {children}
        <ExternalLink className="w-4 h-4 ml-1" aria-hidden="true" />
        <span className="sr-only"> Opens in a new tab.</span>
      </a>
    </Button>
  );
}
