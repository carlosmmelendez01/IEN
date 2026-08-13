import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  School,
  DollarSign,
  Clock,
  ZoomIn,
  X,
  Download,
  ExternalLink,
  FileText,
  Gamepad2,
  Trophy,
} from "lucide-react";
import { GAME_RULESET_LIBRARY_HREF } from "@/data/gameRules";
import { ONBOARDING_URL } from "@/lib/socialLinks";

import ihsenSeason from "@assets/IHSEN Schedule.png";
import ihsenPlayoffs from "@assets/IHSEN Playoff Schedule.png";
import imsenFall from "@assets/IMSEN Fall.png";
import iuenFall from "@assets/IUEN Fall.png";
import imsenSpring from "@assets/IMSEN Spring.png";
import iuenSpring from "@assets/IUEN Spring.png";

const LEAGUE_OF_LEGENDS_DOC_URL =
  "https://docs.google.com/document/d/1VHCT3Q7Fi-ajUZc_Qki_LNkAG1WBo2Df/edit";

type LeagueOfLegendsScheduleRow = {
  week: string;
  date: string;
  activity: string;
  time?: string;
  notes?: string;
  type?: "match" | "makeup" | "break" | "playoffs" | "finals";
};

const leagueOfLegendsSchedule: LeagueOfLegendsScheduleRow[] = [
  {
    week: "1",
    date: "Oct 2, 2026",
    activity: "Regular Season Round 1",
    time: "4:00 PM CT",
    notes: "BO3",
    type: "match",
  },
  { week: "2", date: "Oct 9, 2026", activity: "Makeup Week", type: "makeup" },
  {
    week: "3",
    date: "Oct 16, 2026",
    activity: "Regular Season Round 2",
    time: "4:00 PM CT",
    notes: "BO3",
    type: "match",
  },
  { week: "4", date: "Oct 23, 2026", activity: "Makeup Week", type: "makeup" },
  {
    week: "5",
    date: "Oct 30, 2026",
    activity: "Regular Season Round 3",
    time: "4:00 PM CT",
    notes: "BO3",
    type: "match",
  },
  { week: "6", date: "Nov 6, 2026", activity: "Makeup Week", type: "makeup" },
  {
    week: "7",
    date: "Nov 13, 2026",
    activity: "Regular Season Round 4",
    time: "4:00 PM CT",
    notes: "BO3",
    type: "match",
  },
  { week: "8", date: "Nov 20, 2026", activity: "Makeup Week", type: "makeup" },
  {
    week: "Holiday",
    date: "Nov 27, 2026",
    activity: "Thanksgiving Break",
    notes: "No Matches",
    type: "break",
  },
  {
    week: "9",
    date: "Dec 4, 2026",
    activity: "Regular Season Round 5",
    time: "4:00 PM CT",
    notes: "BO3",
    type: "match",
  },
  {
    week: "Break",
    date: "Dec 19-Jan 8",
    activity: "Winter Break",
    notes: "No Matches",
    type: "break",
  },
  {
    week: "10",
    date: "Jan 15, 2027",
    activity: "Regular Season Round 6",
    time: "4:00 PM CT",
    notes: "BO3",
    type: "match",
  },
  { week: "11", date: "Jan 22, 2027", activity: "Makeup Week", type: "makeup" },
  {
    week: "12",
    date: "Jan 29, 2027",
    activity: "Regular Season Round 7",
    time: "4:00 PM CT",
    notes: "BO3",
    type: "match",
  },
  { week: "13", date: "Feb 5, 2027", activity: "Makeup Week", type: "makeup" },
  {
    week: "14",
    date: "Feb 12, 2027",
    activity: "Regular Season Round 8",
    time: "4:00 PM CT",
    notes: "BO3",
    type: "match",
  },
  { week: "15", date: "Feb 19, 2027", activity: "League Makeup Week", type: "makeup" },
  { week: "16", date: "Feb 26, 2027", activity: "League Makeup Week", type: "makeup" },
  { week: "17", date: "Mar 5, 2027", activity: "League Makeup Week", type: "makeup" },
  { week: "18", date: "Mar 12, 2027", activity: "League Makeup Week", type: "makeup" },
  { week: "19", date: "Mar 19, 2027", activity: "League Makeup Week", type: "makeup" },
  { week: "20", date: "Mar 26, 2027", activity: "League Makeup Week", type: "makeup" },
  {
    week: "Playoffs",
    date: "Apr 2, 2027",
    activity: "Quarterfinals",
    time: "4:00 PM CT",
    notes: "BO3",
    type: "playoffs",
  },
  {
    week: "Playoffs",
    date: "Apr 16, 2027",
    activity: "Semifinals",
    time: "4:00 PM CT",
    notes: "BO3",
    type: "playoffs",
  },
  {
    week: "Finals",
    date: "May 7, 2027",
    activity: "AAEL Championship",
    time: "4:00 PM CT",
    notes: "Top 2 Teams | BO5",
    type: "finals",
  },
];

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
        onClick={onClose}
      >
        <button
          className="absolute top-4 right-4 text-white bg-black/50 hover:bg-primary rounded-full p-2 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        <motion.img
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.25 }}
          src={src}
          alt={alt}
          className="max-h-[90vh] max-w-full object-contain rounded-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>
  );
}

interface SeasonRowProps {
  image: string;
  alt: string;
  badge: string;
  title: string;
  subtitle: string;
  note?: string;
  dateRange: string;
  level: string;
  cost: string;
  matchTime: string;
  clubTime?: string;
  pdfHref?: string;
  pdfLabel?: string;
  index: number;
}

function SeasonRow({
  image, alt, badge, title, subtitle,
  note, dateRange, level, cost, matchTime, clubTime,
  pdfHref, pdfLabel = "VIEW FULL CALENDAR PDF",
  index,
}: SeasonRowProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      {lightboxOpen && (
        <Lightbox src={image} alt={alt} onClose={() => setLightboxOpen(false)} />
      )}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, duration: 0.45 }}
        className="py-10 border-b border-primary/10 last:border-b-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">

          <button
            onClick={() => setLightboxOpen(true)}
            className="group relative rounded-xl overflow-hidden border border-primary/20 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full lg:w-[280px] shrink-0"
            aria-label={`View full ${alt}`}
          >
            <img
              src={image}
              alt={alt}
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary/90 text-primary-foreground rounded-full p-3 shadow-lg">
                <ZoomIn className="w-5 h-5" />
              </div>
            </div>
          </button>

          <div className="flex flex-col gap-5">
            <div>
              <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest rounded-full uppercase mb-3">
                {badge}
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 leading-tight">
                {title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{subtitle}</p>
              {note && <p className="mt-2 text-xs font-semibold leading-5 text-primary">{note}</p>}
            </div>

            <div className="space-y-2.5">
              <div className="flex items-start gap-3 text-sm">
                <Calendar className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-white/90">{dateRange}</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <School className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-white/90">{level}</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <DollarSign className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-white/90">{cost}</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-white/90 flex flex-col gap-1">
                  <span>{matchTime}</span>
                  {clubTime && <span>{clubTime}</span>}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              {pdfHref && (
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest gap-2"
                  asChild
                >
                  <a href={pdfHref} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    {pdfLabel}
                  </a>
                </Button>
              )}

              {pdfHref && (
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-muted-foreground hover:text-primary font-heading tracking-widest gap-2"
                  asChild
                >
                  <a href={pdfHref} download>
                    <Download className="w-4 h-4" />
                    DOWNLOAD PDF
                  </a>
                </Button>
              )}

              <Button
                size="sm"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest gap-2"
                asChild
              >
                <a href={GAME_RULESET_LIBRARY_HREF}>
                  <FileText className="w-4 h-4" />
                  RULESETS STATUS
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              New to IEN?{" "}
              <a href={ONBOARDING_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80">
                Schedule your onboarding meeting first
              </a>{" "}
              and we&rsquo;ll help you prepare for the next registration window.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 md:gap-4 pt-10 pb-2">

      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50 hidden md:block" />
      <span className="font-heading font-bold text-primary tracking-widest uppercase text-lg md:text-3xl px-2 md:px-4 text-center md:whitespace-nowrap">
        {label}
      </span>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50 hidden md:block" />
    </div>
  );
}

function leagueScheduleRowClass(type: LeagueOfLegendsScheduleRow["type"]) {
  switch (type) {
    case "break":
      return "bg-muted/25 text-muted-foreground";
    case "playoffs":
      return "bg-primary/15 text-white";
    case "finals":
      return "bg-[#ef4343]/18 text-white";
    case "makeup":
      return "bg-background/35 text-muted-foreground";
    default:
      return "bg-card/70 text-white";
  }
}

function LeagueOfLegendsScheduleSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="py-12 border-b border-primary/10"
      aria-labelledby="league-of-legends-schedule"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-sm border border-[#ef4343]/50 bg-[#ef4343]/15 px-3 py-1 text-xs font-bold uppercase text-[#ff8b8b]">
            <Gamepad2 className="h-3.5 w-3.5" aria-hidden="true" />
            AAEL | League of Legends
          </div>
          <div>
            <h2
              id="league-of-legends-schedule"
              className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight"
            >
              League of Legends Cross-State Schedule
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              League of Legends follows a dedicated Friday schedule for
              cross-state competition, with regular season rounds, built-in
              makeup dates, AAEL playoffs, and a championship match. Matches
              run Fridays at 4:00 PM CT / 5:00 PM ET.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-primary/20 bg-card p-4">
              <Calendar className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
              <p className="font-heading text-xl font-bold uppercase text-white">
                Oct 2-May 7
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Regular season, makeup weeks, playoffs, and championship.
              </p>
            </div>
            <div className="rounded-lg border border-primary/20 bg-card p-4">
              <Trophy className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
              <p className="font-heading text-xl font-bold uppercase text-white">
                BO3 / BO5
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Regular season and playoffs are BO3; championship is BO5.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading gap-2"
              asChild
            >
              <a href={LEAGUE_OF_LEGENDS_DOC_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                VIEW GOOGLE DOC
              </a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading gap-2"
              asChild
            >
              <a href={GAME_RULESET_LIBRARY_HREF}>
                <FileText className="h-4 w-4" aria-hidden="true" />
                RULESETS STATUS
              </a>
            </Button>
          </div>
        </div>

        <div className="hidden overflow-hidden rounded-lg border border-primary/20 bg-background/50 md:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <caption className="sr-only">
                League of Legends 2026-2027 cross-state competition schedule
              </caption>
              <thead className="bg-[#1f4f7a] text-white">
                <tr>
                  <th scope="col" className="px-3 py-3 font-heading text-xs uppercase">
                    Week
                  </th>
                  <th scope="col" className="px-3 py-3 font-heading text-xs uppercase">
                    Date
                  </th>
                  <th scope="col" className="px-3 py-3 font-heading text-xs uppercase">
                    Activity
                  </th>
                  <th scope="col" className="px-3 py-3 font-heading text-xs uppercase">
                    Time
                  </th>
                  <th scope="col" className="px-3 py-3 font-heading text-xs uppercase">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/10">
                {leagueOfLegendsSchedule.map((row) => (
                  <tr
                    key={`${row.week}-${row.date}-${row.activity}`}
                    className={leagueScheduleRowClass(row.type)}
                  >
                    <th scope="row" className="px-3 py-2 font-semibold">
                      {row.week}
                    </th>
                    <td className="px-3 py-2 whitespace-nowrap">{row.date}</td>
                    <td className="px-3 py-2 font-medium">{row.activity}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{row.time ?? "-"}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{row.notes ?? "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid gap-3 md:hidden">
          {leagueOfLegendsSchedule.map((row) => (
            <article
              key={`${row.week}-${row.date}-${row.activity}-mobile`}
              className={`rounded-lg border border-primary/15 p-4 ${leagueScheduleRowClass(row.type)}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase text-primary/85">
                    Week {row.week}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-bold uppercase text-white">
                    {row.activity}
                  </h3>
                </div>
                {row.type === "finals" && (
                  <Trophy className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                )}
              </div>
              <div className="mt-3 space-y-1.5 text-sm">
                <p className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                  {row.date}
                </p>
                {row.time && (
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                    {row.time} / 5:00 PM ET
                  </p>
                )}
                {row.notes && <p className="text-muted-foreground">{row.notes}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default function Schedule() {
  return (
    <Layout>
      <SEO
        title="Schedule"
        description="2026–2027 season schedule for IHSEN, IMSEN, and IUEN — registration dates, season calendars, and downloadable PDFs."
        path="/schedule"
      />

      <section className="relative py-20 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 tracking-tight">
              SEASON{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                SCHEDULES
              </span>
            </h1>
            <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
              2026–2027 Indiana Esports Network · Official Season Schedule
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-8">

        <SectionDivider label="Indiana High School Esports Network (IHSEN)" />

        <SeasonRow
          index={0}
          image={ihsenSeason}
          alt="IHSEN 2026-2027 Regular Season Schedule"
          badge="IHSEN · Fall / Winter 2026"
          title="IHSEN Regular Season"
          subtitle="High school competition across Apex Legends, Rocket League, Marvel Rivals, League of Legends*, Chess, Minecraft, Smash Bros., Tetris, Valorant, Overwatch 2, Mario Kart, and iRacing. Varsity teams earn playoff seeding. Preseason begins October 12."
          note="*League of Legends will be cross-state competition. Full rule-set will be released."
          dateRange="Oct 12, 2026 – Feb 8, 2027 (Registration opens Aug 12)"
          level="High School (Grades 9–12)"
          cost="$100 / school for Varsity · Free for Club"
          matchTime="Mon–Thu · Varsity 4:00 PM CT / 5:00 PM ET"
          clubTime="Club queues: 3:00 PM CT / 4:00 PM ET or 4:00 PM CT / 5:00 PM ET"
          pdfHref="/IHSEN_Calendar_2026-2027.pdf"
          pdfLabel="VIEW IHSEN CALENDAR"
        />

        <LeagueOfLegendsScheduleSection />

        <SeasonRow
          index={1}
          image={ihsenPlayoffs}
          alt="IHSEN 2026-2027 Playoffs Schedule"
          badge="IHSEN · Playoffs 2027"
          title="IHSEN Playoffs & State Finals"
          subtitle="Top Varsity teams advance through four playoff rounds. The season concludes at the IEN State Finals on April 24, 2027."
          dateRange="Feb 22 – Apr 24, 2027"
          level="High School Varsity Teams"
          cost="Included with regular season registration"
          matchTime="Same days as regular season · Mon–Thu"
          pdfHref="/IHSEN_Calendar_2026-2027.pdf"
          pdfLabel="VIEW IHSEN CALENDAR"
        />

        <SectionDivider label="Indiana Middle School Esports Network (IMSEN)" />

        <SeasonRow
          index={2}
          image={imsenFall}
          alt="IMSEN 2026-2027 Fall Schedule"
          badge="IMSEN · Fall 2026"
          title="IMSEN Fall Season"
          subtitle="Middle school fall competition featuring Marvel Rivals, Mario Kart 8 Deluxe, Minecraft, and Tetris. Fall season wraps with IMSEN Finals on December 12."
          dateRange="Aug 12 – Dec 12, 2026"
          level="Middle School (Grades 6–8)"
          cost="$100 / school for Varsity · Free for Club"
          matchTime="Mon–Thu · Varsity 3:30 PM CT / 4:30 PM ET"
          clubTime="Club queue: 3:30 PM CT / 4:30 PM ET"
          pdfHref="/IMSEN_Calendar_2026-2027.pdf"
          pdfLabel="VIEW IMSEN CALENDAR"
        />

        <SeasonRow
          index={3}
          image={imsenSpring}
          alt="IMSEN 2026-2027 Spring Schedule"
          badge="IMSEN · Spring 2027"
          title="IMSEN Spring Season"
          subtitle="Spring competition features Fortnite, Super Smash Bros. Ultimate, Rocket League, and Chess. Spring registration opens November 30. Playoffs run March–April into the State Finals."
          dateRange="Nov 30, 2026 – Apr 24, 2027"
          level="Middle School (Grades 6–8)"
          cost="$100 / school for Varsity · Free for Club"
          matchTime="Mon–Thu · Varsity 3:30 PM CT / 4:30 PM ET"
          clubTime="Club queue: 3:30 PM CT / 4:30 PM ET"
          pdfHref="/IMSEN_Calendar_2026-2027.pdf"
          pdfLabel="VIEW IMSEN CALENDAR"
        />

        <SectionDivider label="Indiana Unified Esports Network (IUEN)" />

        <SeasonRow
          index={4}
          image={iuenFall}
          alt="IUEN 2026-2027 Fall Schedule"
          badge="IUEN · Fall 2026"
          title="IUEN Fall Season"
          subtitle="Unified Athletes and Partners compete together in Super Smash Bros. Ultimate on Tuesdays. A Special Olympics Indiana partnership. IUEN Finals on December 12."
          dateRange="Aug 12 – Dec 12, 2026"
          level="High School & Middle School · Unified"
          cost="Free to all schools and students"
          matchTime="Tuesdays · 3:30 PM CT / 4:30 PM ET"
          pdfHref="/IUEN_Calendar_2026-2027.pdf"
          pdfLabel="VIEW IUEN CALENDAR"
        />

        <SeasonRow
          index={5}
          image={iuenSpring}
          alt="IUEN 2026-2027 Spring Schedule"
          badge="IUEN · Spring 2027"
          title="IUEN Spring Season"
          subtitle="Spring Unified competition features Rocket League on Tuesdays, starting in January and concluding at IEN State Finals on April 24."
          dateRange="Nov 30, 2026 – Apr 24, 2027"
          level="High School & Middle School · Unified"
          cost="Free to all schools and students"
          matchTime="Tuesdays · 3:30 PM CT / 4:30 PM ET"
          pdfHref="/IUEN_Calendar_2026-2027.pdf"
          pdfLabel="VIEW IUEN CALENDAR"
        />

      </div>

      <section className="py-20 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest rounded-full uppercase mb-6">
            Season Finale
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-3">
            IEN STATE FINALS 2027
          </h2>
          <p className="text-xl text-primary font-heading tracking-wider mb-5">April 24, 2027</p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            IHSEN, IMSEN, and IUEN champions are crowned at the annual IEN State Finals, Indiana's premier in-person scholastic esports championship.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-14 px-10 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              asChild
            >
              <a href={ONBOARDING_URL} target="_blank" rel="noopener noreferrer">
                SCHEDULE ONBOARDING
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">New schools should complete an onboarding meeting before the season begins.</p>
        </div>
      </section>
    </Layout>
  );
}
