import { ReactNode } from "react";
import { CalendarClock, ExternalLink } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const KICKOFF_MEET_URL = "https://meet.google.com/msa-qnbq-qju";

function KickoffBanner() {
  return (
    <a
      href={KICKOFF_MEET_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Join tonight's kickoff event Google Meet on Wednesday, August 12, 2026 at 7:00 PM Central, 8:00 PM Eastern"
      className="group relative isolate block overflow-hidden border-b-2 border-[#0d1623] bg-[#ef4343] text-[#0d1623] shadow-[0_8px_24px_rgba(239,67,67,0.28)] transition-colors hover:bg-[#f05a5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef4343] focus-visible:ring-offset-2 focus-visible:ring-offset-background before:absolute before:inset-y-0 before:left-[-35%] before:z-[-1] before:w-1/3 before:skew-x-[-18deg] before:bg-white/20 before:transition-transform before:duration-700 hover:before:translate-x-[420%] focus-visible:before:translate-x-[420%]"
    >
      <div className="container mx-auto flex min-h-[3.75rem] flex-col items-center justify-center gap-2 px-4 py-3 text-center sm:min-h-14 sm:flex-row sm:gap-4 sm:py-2">
        <span className="inline-flex items-center gap-2 rounded-sm bg-[#0d1623] px-3 py-1 font-heading text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white shadow-sm">
          <CalendarClock className="h-3.5 w-3.5 shrink-0 text-[#ecbf1a]" aria-hidden="true" />
          Tonight
        </span>
        <span className="flex flex-col items-center gap-0.5 text-sm font-black uppercase tracking-normal sm:flex-row sm:gap-2 sm:text-base">
          <span>Kickoff Event</span>
          <span className="hidden opacity-70 sm:inline" aria-hidden="true">
            |
          </span>
          <span>Wednesday, August 12, 2026</span>
          <span className="hidden opacity-70 sm:inline" aria-hidden="true">
            |
          </span>
          <span>7:00 PM Central / 8:00 PM Eastern</span>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-sm border border-[#0d1623] bg-[#0d1623] px-3 py-1.5 font-heading text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white transition-transform group-hover:-translate-y-0.5 sm:text-xs">
          Join Google Meet
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground dark">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-md focus:bg-primary focus:text-primary-foreground focus:font-heading focus:font-bold focus:tracking-widest focus:uppercase focus:text-sm"
      >
        Skip to main content
      </a>
      <KickoffBanner />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
