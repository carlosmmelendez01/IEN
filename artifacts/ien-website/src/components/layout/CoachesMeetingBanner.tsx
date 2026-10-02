import { CalendarDays, Video } from "lucide-react";

const OCTOBER_COACHES_MEET_URL = "https://meet.google.com/eif-aqto-oxv";

export function CoachesMeetingBanner() {
  return (
    <aside
      aria-label="October Coaches Meeting announcement"
      className="border-b border-white/20 bg-[#ef4343] text-[#0d1623]"
    >
      <div className="container mx-auto flex flex-col gap-2 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
        <div className="flex items-center justify-center gap-2 text-center">
          <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
          <p className="text-sm font-semibold leading-5">
            <span className="font-heading font-bold uppercase tracking-wide">
              October Coaches Meeting
            </span>
            <span className="mx-2 hidden sm:inline" aria-hidden="true">
              •
            </span>
            <span className="block sm:inline">
              Thursday, October 8 · 7–8 PM CT / 8–9 PM ET
            </span>
          </p>
        </div>
        <a
          href={OCTOBER_COACHES_MEET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-9 shrink-0 items-center justify-center gap-2 rounded-md border border-[#0d1623]/30 bg-[#0d1623] px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#18263a] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <Video className="h-3.5 w-3.5" aria-hidden="true" />
          Join Google Meet
        </a>
      </div>
    </aside>
  );
}
