import { ArrowRight, Trophy } from "lucide-react";
import { Link } from "wouter";

import { PACERS_CUP_PATH } from "@/data/pacersCup";

export function RoadToGainbridgeBanner() {
  return (
    <aside
      aria-label="Pacers Esports Cup announcement"
      className="border-b border-[#fdbb30]/45 bg-[#002d62] bg-[radial-gradient(ellipse_at_26%_0%,#45668b99,transparent_55%),linear-gradient(115deg,#071424_0%,#002d62_32%,#183a5d_53%,#081726_83%)] text-[#edf3fb] shadow-[inset_0_1px_0_#ffffff26]"
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 px-4 py-2.5 text-center sm:flex-row sm:gap-5">
        <p className="flex flex-wrap items-center justify-center gap-x-2 text-sm">
          <Trophy className="h-4 w-4 shrink-0 text-[#fdbb30]" aria-hidden="true" />
          <strong className="font-heading uppercase tracking-wider text-[#ffcf61]">
            Road to Gainbridge
          </strong>
          <span>2027 Pacers Esports Cup</span>
        </p>
        <Link
          href={PACERS_CUP_PATH}
          className="inline-flex min-h-9 items-center gap-2 rounded-md border border-[#ffe6a0]/70 bg-[#fdbb30] bg-linear-to-b from-[#ffdb7b] to-[#fdbb30] px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wider text-[#071a31] transition-colors hover:from-[#ffe7a8] hover:to-[#ffca55] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffcf61]"
        >
          View championship brackets
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}
