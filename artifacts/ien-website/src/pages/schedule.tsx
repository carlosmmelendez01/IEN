import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, School, DollarSign, Clock } from "lucide-react";

const ihsenFallDays = [
  { day: "MON", games: ["Valorant", "League of Legends"] },
  { day: "TUE", games: ["Rocket League", "Marvel Rivals"] },
  { day: "WED", games: ["Smash Bros.", "Chess", "Minecraft"] },
  { day: "THU", games: ["Fortnite", "Mario Kart", "iRacing"] },
];

const imsenFallDays = [
  { day: "MON", games: ["Rocket League"] },
  { day: "TUE", games: ["Marvel Rivals", "Fortnite"] },
  { day: "WED", games: ["Smash Bros.", "Chess"] },
  { day: "THU", games: ["Minecraft", "Mario Kart"] },
];

const ihsenFallDates = [
  { label: "Registration Opens",    date: "August 11, 2025",    highlight: true },
  { label: "Coaches Meeting",       date: "August 13, 2025",    highlight: true },
  { label: "Registration Closes",   date: "September 12, 2025", highlight: false },
  { label: "Week 1",                date: "September 15, 2025", highlight: false },
  { label: "Week 2",                date: "September 22, 2025", highlight: false },
  { label: "Week 3",                date: "September 29, 2025", highlight: false },
  { label: "Week 4",                date: "October 6, 2025",    highlight: false },
  { label: "Week 5",                date: "October 13, 2025",   highlight: false },
  { label: "Week 6",                date: "October 20, 2025",   highlight: false },
  { label: "Week 7",                date: "October 27, 2025",   highlight: false },
  { label: "Week 8",                date: "November 3, 2025",   highlight: false },
  { label: "Week 9",                date: "November 10, 2025",  highlight: false },
  { label: "Week 10",               date: "November 17, 2025",  highlight: false },
  { label: "Fall Playoffs",         date: "December 2025",      highlight: true },
];

const imsenFallDates = [
  { label: "Registration Opens",    date: "August 11, 2025",    highlight: true },
  { label: "Coaches Meeting",       date: "August 13, 2025",    highlight: true },
  { label: "Registration Closes",   date: "September 12, 2025", highlight: false },
  { label: "Week 1",                date: "September 15, 2025", highlight: false },
  { label: "Week 2",                date: "September 22, 2025", highlight: false },
  { label: "Week 3",                date: "September 29, 2025", highlight: false },
  { label: "Week 4",                date: "October 6, 2025",    highlight: false },
  { label: "Week 5",                date: "October 13, 2025",   highlight: false },
  { label: "Week 6",                date: "October 20, 2025",   highlight: false },
  { label: "Week 7",                date: "October 27, 2025",   highlight: false },
  { label: "Week 8",                date: "November 3, 2025",   highlight: false },
  { label: "Fall Playoffs",         date: "December 2025",      highlight: true },
];

const springDates = [
  { label: "Registration Opens",    date: "January 12, 2026",   highlight: true },
  { label: "Coaches Meeting",       date: "January 14, 2026",   highlight: true },
  { label: "Registration Closes",   date: "February 6, 2026",   highlight: false },
  { label: "Week 1",                date: "February 9, 2026",   highlight: false },
  { label: "Week 2",                date: "February 16, 2026",  highlight: false },
  { label: "Week 3",                date: "February 23, 2026",  highlight: false },
  { label: "Week 4",                date: "March 2, 2026",      highlight: false },
  { label: "Week 5",                date: "March 9, 2026",      highlight: false },
  { label: "Week 6",                date: "March 16, 2026",     highlight: false },
  { label: "Week 7",                date: "March 23, 2026",     highlight: false },
  { label: "Week 8",                date: "March 30, 2026",     highlight: false },
  { label: "Week 9",                date: "April 6, 2026",      highlight: false },
  { label: "Week 10",               date: "April 13, 2026",     highlight: false },
  { label: "Regional LANs",         date: "Late April 2026",    highlight: true },
  { label: "IEN State Finals",      date: "May 2026",           highlight: true },
];

function ScheduleCard({ days, dates, accent }: {
  days: { day: string; games: string[] }[];
  dates: { label: string; date: string; highlight: boolean }[];
  accent: string;
}) {
  return (
    <div className="bg-card border border-primary/20 rounded-xl overflow-hidden shadow-lg">
      {/* Day Grid Header */}
      <div className="grid grid-cols-4 border-b border-primary/20">
        {days.map((d, i) => (
          <div key={i} className={`p-2 text-center border-r border-primary/10 last:border-r-0 ${i === 0 ? accent : ""}`}>
            <div className="font-heading font-bold text-xs text-primary tracking-widest mb-2">{d.day}</div>
            {d.games.map((g, j) => (
              <div key={j} className="text-[10px] text-muted-foreground bg-background/60 rounded px-1 py-0.5 mb-1 leading-tight">{g}</div>
            ))}
          </div>
        ))}
      </div>
      {/* Date Rows */}
      <div>
        {dates.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-2 border-b border-primary/10 last:border-b-0 text-sm ${
              row.highlight ? "bg-primary/10" : ""
            }`}
          >
            <div className={`px-4 py-2 font-medium ${row.highlight ? "text-primary font-bold" : "text-muted-foreground"}`}>
              {row.label}
            </div>
            <div className={`px-4 py-2 text-right ${row.highlight ? "text-primary font-bold" : "text-white/70"}`}>
              {row.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface SeasonSectionProps {
  season: string;
  title: string;
  subtitle: string;
  dateRange: string;
  level: string;
  cost: string;
  matchTime: string;
  days: { day: string; games: string[] }[];
  dates: { label: string; date: string; highlight: boolean }[];
  accent: string;
  index: number;
}

function SeasonSection({ season, title, subtitle, dateRange, level, cost, matchTime, days, dates, accent, index }: SeasonSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="py-12 container mx-auto px-4 border-b border-primary/10 last:border-b-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Schedule Card */}
        <ScheduleCard days={days} dates={dates} accent={accent} />

        {/* Right: Info */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest rounded-full uppercase mb-4">
              {season}
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">{title}</h2>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="w-5 h-5 text-primary shrink-0" />
              <span className="text-white font-medium">{dateRange}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <School className="w-5 h-5 text-primary shrink-0" />
              <span className="text-white font-medium">{level}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <DollarSign className="w-5 h-5 text-primary shrink-0" />
              <span className="text-white font-medium">{cost}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Clock className="w-5 h-5 text-primary shrink-0" />
              <span className="text-white font-medium">{matchTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest px-6"
              asChild
            >
              <a href="https://leagueos.gg" target="_blank" rel="noopener noreferrer">REGISTER ON LEAGUEOS</a>
            </Button>
            <Button
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest px-6"
            >
              DOWNLOAD CALENDAR
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function Schedule() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 tracking-tight">
              SEASON <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">SCHEDULES</span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
              2025–26 Indiana Esports Network Season Schedule
            </p>
          </motion.div>
        </div>
      </section>

      {/* Season Tab Nav */}
      <div className="sticky top-16 z-30 bg-background/95 border-b border-primary/20 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex gap-0 overflow-x-auto scrollbar-none">
            {["IHSEN Fall", "IMSEN Fall", "Spring Season"].map((tab, i) => (
              <a
                key={i}
                href={`#section-${i}`}
                className="shrink-0 px-6 py-3 font-heading font-bold text-sm tracking-widest text-muted-foreground hover:text-primary border-b-2 border-transparent hover:border-primary transition-all"
              >
                {tab.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div id="section-0">
        <SeasonSection
          index={0}
          season="Fall Season 2025-26"
          title="IHSEN Fall Season"
          subtitle="High school competition across 12 game titles. Varsity teams compete for playoff seeding. New schools play at Club level their first semester."
          dateRange="September – December 2025"
          level="High School (Grades 9–12)"
          cost="$100 / school for Varsity · Free for Club"
          matchTime="Varsity: 4:00 PM CT / 5:00 PM ET · Club: 3:00 PM CT / 4:00 PM ET"
          days={ihsenFallDays}
          dates={ihsenFallDates}
          accent=""
        />
      </div>

      <div id="section-1">
        <SeasonSection
          index={1}
          season="Fall Season 2025-26"
          title="IMSEN Fall Season"
          subtitle="Middle school competition focused on foundational skills, sportsmanship, and digital citizenship. All participation is free for students and schools."
          dateRange="September – December 2025"
          level="Middle School (Grades 6–8)"
          cost="Free to all schools and students"
          matchTime="Varsity: 3:30 PM CT / 4:30 PM ET"
          days={imsenFallDays}
          dates={imsenFallDates}
          accent=""
        />
      </div>

      <div id="section-2">
        <SeasonSection
          index={2}
          season="Spring Season 2026"
          title="Spring Season – IHSEN & IMSEN"
          subtitle="The spring season concludes with Regional LANs and the IEN State Finals — Indiana's premier in-person scholastic esports championship event."
          dateRange="February – May 2026"
          level="High School & Middle School"
          cost="$100 / school for Varsity · Free for Club & IMSEN"
          matchTime="Same as Fall · Match days Mon–Thu"
          days={ihsenFallDays}
          dates={springDates}
          accent=""
        />
      </div>

      {/* State Finals CTA */}
      <section className="py-20 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest rounded-full uppercase mb-6">
            Season Finale
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            IEN STATE FINALS 2026
          </h2>
          <p className="text-xl text-primary font-heading tracking-wider mb-6">May 2026 · Indiana</p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            The pinnacle of Indiana scholastic esports. Top varsity teams from the spring playoffs compete live at the IEN State Finals Championship.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-14 px-10 shadow-[0_0_20px_rgba(212,175,55,0.3)]" asChild>
              <a href="https://leagueos.gg" target="_blank" rel="noopener noreferrer">REGISTER FOR THE SEASON</a>
            </Button>
          </div>
        </div>
      </section>

    </Layout>
  );
}
