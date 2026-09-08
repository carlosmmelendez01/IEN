import { Link } from "wouter";
import { ArrowRight, CalendarClock, ExternalLink } from "lucide-react";
import { REGISTRATION_EXTENSION } from "@/lib/registration";

type RegistrationExtensionNoticeProps = {
  variant?: "hero" | "section";
  className?: string;
  showFormsLink?: boolean;
};

export function RegistrationExtensionNotice({
  variant = "section",
  className = "",
  showFormsLink = true,
}: RegistrationExtensionNoticeProps) {
  const isHero = variant === "hero";

  return (
    <aside
      aria-label="Middle School and Unified registration extension"
      className={`relative overflow-hidden rounded-lg border border-primary/40 bg-background/90 text-left shadow-[0_18px_45px_-24px_rgba(212,175,55,0.45)] backdrop-blur ${
        isHero ? "p-4 md:p-5" : "p-5 md:p-7"
      } ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(212,175,55,0.16),transparent_38%,rgba(255,255,255,0.05))]" />
      <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
          <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-sm border border-primary/40 bg-primary px-3 py-1.5 font-heading text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary-foreground">
            <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
            {REGISTRATION_EXTENSION.label}
          </span>
          <div>
            <h2
              className={`font-heading font-bold uppercase tracking-normal text-white ${
                isHero ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
              }`}
            >
              {isHero
                ? REGISTRATION_EXTENSION.shortTitle
                : REGISTRATION_EXTENSION.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground md:text-base">
              {REGISTRATION_EXTENSION.message}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground md:text-base">
              {REGISTRATION_EXTENSION.clarification}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
          <a
            href={REGISTRATION_EXTENSION.leagueOsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-center font-heading text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {REGISTRATION_EXTENSION.leagueOsLabel}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          {showFormsLink && (
            <Link
              href={REGISTRATION_EXTENSION.formsPath}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-primary/25 px-4 py-2 text-center font-heading text-xs font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:border-primary hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Forms Hub
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
}
