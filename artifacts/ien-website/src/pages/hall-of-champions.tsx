import { useMemo, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { motion, useReducedMotion } from "framer-motion";
import {
  Trophy,
  Shield,
  Gamepad2,
  Crown,
  Medal,
  Flame,
  ChevronDown,
  ArrowUpRight,
  X,
  Crosshair,
  Car,
  Swords,
  Pickaxe,
  Target,
  Sword,
  Box,
  Castle,
  Gauge,
  Flag,
  LayoutGrid,
  Archive,
} from "lucide-react";
import { findSchoolLogo } from "@/lib/schoolLogos";
import { CHAMPIONS, type Champion, type League, type Tier } from "@/data/champions";
import heroBackdrop from "@assets/state-finals/03-marvel-rivals-1200.jpg";

type GameStyle = {
  color: string;
  bg: string;
  border: string;
  icon: React.ComponentType<{ className?: string }>;
};

const GAME_STYLES: Record<string, GameStyle> = {
  "Valorant":          { color: "text-red-400",     bg: "bg-red-500/15",     border: "border-red-500/40",     icon: Crosshair },
  "Rocket League":     { color: "text-sky-400",     bg: "bg-sky-500/15",     border: "border-sky-500/40",     icon: Car },
  "Smash Bros.":       { color: "text-rose-300",    bg: "bg-rose-500/15",    border: "border-rose-500/40",    icon: Swords },
  "Fortnite":          { color: "text-emerald-400", bg: "bg-emerald-500/15", border: "border-emerald-500/40", icon: Pickaxe },
  "Overwatch":         { color: "text-orange-400",  bg: "bg-orange-500/15",  border: "border-orange-500/40",  icon: Target },
  "League of Legends": { color: "text-yellow-300",  bg: "bg-yellow-500/15",  border: "border-yellow-500/40",  icon: Sword },
  "Marvel Rivals":     { color: "text-red-300",     bg: "bg-red-500/15",     border: "border-red-500/40",     icon: Shield },
  "Minecraft":         { color: "text-lime-400",    bg: "bg-lime-500/15",    border: "border-lime-500/40",    icon: Box },
  "Mario Kart":        { color: "text-pink-400",    bg: "bg-pink-500/15",    border: "border-pink-500/40",    icon: Flag },
  "Chess":             { color: "text-slate-300",   bg: "bg-slate-500/15",   border: "border-slate-500/40",   icon: Castle },
  "Tetris":            { color: "text-cyan-300",    bg: "bg-cyan-500/15",    border: "border-cyan-500/40",    icon: LayoutGrid },
  "iRacing":           { color: "text-amber-400",   bg: "bg-amber-500/15",   border: "border-amber-500/40",   icon: Gauge },
};

const FALLBACK_STYLE: GameStyle = {
  color: "text-primary", bg: "bg-primary/15", border: "border-primary/40", icon: Trophy,
};

const styleFor = (game: string): GameStyle => GAME_STYLES[game] ?? FALLBACK_STYLE;

const FEATURED_PICKS: Array<{ game: string; tier: Tier }> = [
  { game: "Valorant",      tier: "AAA" },
  { game: "Rocket League", tier: "AAA" },
  { game: "Marvel Rivals", tier: "AAA" },
  { game: "Overwatch",     tier: "AAA" },
];

const LATEST_SEASON = "2025-2026";

const ANY = "All";

export default function HallOfChampions() {
  const [year, setYear]         = useState<string>(ANY);
  const [game, setGame]         = useState<string>(ANY);
  const [division, setDivision] = useState<string>(ANY);
  const [school, setSchool]     = useState<string>(ANY);

  const SEASONS   = useMemo(() => Array.from(new Set(CHAMPIONS.map(c => c.season))).sort().reverse(), []);
  const GAMES     = useMemo(() => Array.from(new Set(CHAMPIONS.map(c => c.game))).sort(), []);
  const DIVISIONS = useMemo(() => ["IHSEN", "IMSEN", "IUEN"] as League[], []);
  const SCHOOLS   = useMemo(() => Array.from(new Set(CHAMPIONS.map(c => c.school))).sort(), []);

  const filtered = useMemo(() => CHAMPIONS.filter(c =>
    (year === ANY || c.season === year) &&
    (game === ANY || c.game === game) &&
    (division === ANY || c.league === division) &&
    (school === ANY || c.school === school)
  ), [year, game, division, school]);

  const filterActive = year !== ANY || game !== ANY || division !== ANY || school !== ANY;
  const clearAll = () => { setYear(ANY); setGame(ANY); setDivision(ANY); setSchool(ANY); };

  const bySeason = useMemo(() => {
    const map = new Map<string, Champion[]>();
    for (const c of filtered) {
      if (!map.has(c.season)) map.set(c.season, []);
      map.get(c.season)!.push(c);
    }
    return [...map.entries()].sort((a, b) => b[0].localeCompare(a[0]));
  }, [filtered]);

  const featuredCards = useMemo(() => {
    return FEATURED_PICKS
      .map(pick => {
        const winner = CHAMPIONS.find(
          c => c.season === LATEST_SEASON && c.game === pick.game && c.tier === pick.tier,
        );
        return winner ? { ...pick, winner } : null;
      })
      .filter(Boolean) as Array<{ game: string; tier: Tier; winner: Champion }>;
  }, []);

  const heroStats = [
    { value: CHAMPIONS.length.toString(),                           label: "STATE TITLES",      icon: <Trophy   className="w-5 h-5" /> },
    { value: new Set(CHAMPIONS.map(c => c.school)).size.toString(), label: "CHAMPIONS CROWNED", icon: <Shield   className="w-5 h-5" /> },
    { value: `${new Set(CHAMPIONS.map(c => c.game)).size}+`,        label: "ESPORTS TITLES",    icon: <Gamepad2 className="w-5 h-5" /> },
  ];
  const recordBookByLeague = useMemo(() => {
    const seasonOrder = ["2022-2023", "2023-2024", "2024-2025", "2025-2026"];

    function compute(league: League) {
      const pool = CHAMPIONS.filter(c => c.league === league);
      const titles = new Map<string, number>();
      const apps   = new Map<string, number>();
      const seasonsWon = new Map<string, Set<string>>();
      for (const c of pool) {
        titles.set(c.school, (titles.get(c.school) ?? 0) + 1);
        apps.set(c.school,   (apps.get(c.school)   ?? 0) + 1);
        if (c.runnerUp) apps.set(c.runnerUp, (apps.get(c.runnerUp) ?? 0) + 1);
        if (!seasonsWon.has(c.school)) seasonsWon.set(c.school, new Set());
        seasonsWon.get(c.school)!.add(c.season);
      }
      const streaks = new Map<string, number>();
      for (const [s, set] of seasonsWon) {
        let best = 0, cur = 0;
        for (const sn of seasonOrder) {
          if (set.has(sn)) { cur++; best = Math.max(best, cur); } else cur = 0;
        }
        streaks.set(s, best);
      }
      const top = (m: Map<string, number>, n = 5) =>
        [...m.entries()]
          .filter(([, v]) => v > 0)
          .sort((a, b) => b[1] - a[1])
          .slice(0, n)
          .map(([school, value]) => ({ school, value }));
      return {
        league,
        totalTitles: pool.length,
        titles:      top(titles),
        appearances: top(apps),
        streaks:     top(streaks).filter(e => e.value >= 2),
      };
    }

    return {
      IHSEN: compute("IHSEN"),
      IMSEN: compute("IMSEN"),
      IUEN:  compute("IUEN"),
    };
  }, []);

  return (
    <Layout>
      <SEO
        title="Hall of Champions"
        description="Indiana scholastic esports champions tracked since the 2022-23 season. 93+ state titles across 12+ game titles in IHSEN, IMSEN, and IUEN."
        path="/hall-of-champions"
      />

      <HeroSection stats={heroStats} backdrop={heroBackdrop} />

      <section className="sticky top-20 z-30 border-y border-primary/20 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">

          <div className="flex items-center justify-between gap-4 mb-3 pb-3 border-b border-primary/10">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-bold tracking-[0.2em] uppercase text-primary/90">
              <Archive className="w-4 h-4" />
              <span>Champions Archive</span>
              <span className="text-muted-foreground/60">·</span>
              <span className="text-muted-foreground hidden sm:inline">Search the record book</span>
            </div>
            <span className="text-sm text-muted-foreground hidden sm:inline tabular-nums">
              <span className="text-primary font-heading font-bold text-base">{filtered.length}</span> {filtered.length === 1 ? "title" : "titles"} match
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:items-end gap-3 lg:gap-4">
            <FilterField label="YEAR"     value={year}     options={[ANY, ...SEASONS]}                   onChange={setYear}     anyLabel="All Years" />
            <FilterField label="GAME"     value={game}     options={[ANY, ...GAMES]}                     onChange={setGame}     anyLabel="All Games" />
            <FilterField label="DIVISION" value={division} options={[ANY, ...DIVISIONS]}                 onChange={setDivision} anyLabel="All Divisions" />
            <FilterField label="SCHOOL"   value={school}   options={[ANY, ...SCHOOLS]}                   onChange={setSchool}   anyLabel="All Schools" />

            <div className="col-span-2 md:col-span-4 lg:ml-auto flex items-center justify-between gap-3">
              <span className="text-xs text-muted-foreground sm:hidden">
                <span className="text-primary font-bold">{filtered.length}</span> {filtered.length === 1 ? "title" : "titles"} match
              </span>
              <button
                type="button"
                onClick={clearAll}
                disabled={!filterActive}
                className="inline-flex items-center gap-2 h-11 px-4 border border-primary/40 rounded-md text-xs font-heading tracking-widest uppercase text-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-primary transition-colors"
              >
                <X className="w-3.5 h-3.5" /> Clear Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Marquee Titles · 2025–2026"
            title="Featured Champions"
            action={
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("all-seasons");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center gap-1 text-sm font-heading tracking-[0.18em] uppercase text-primary hover:text-yellow-200 transition-colors"
              >
                View All Champions <ArrowUpRight className="w-4 h-4" />
              </button>
            }
          />
          <FeaturedGrid cards={featuredCards} />
        </div>
      </section>

      <section id="all-seasons" className="py-8 md:py-12">
        <div className="container mx-auto px-4 space-y-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <ChampionsBySeason bySeason={bySeason} />
            </div>
            <div className="lg:col-span-8">
              <ChampionshipRecordBook data={recordBookByLeague} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function HeroSection({ stats, backdrop }: { stats: Array<{ value: string; label: string; icon: React.ReactNode }>; backdrop: string }) {
  return (
    <section className="relative overflow-hidden">
      <img src={backdrop} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-30 motion-safe:animate-hero-zoom" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(212,175,55,0.22),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/85 to-background" />

      <div className="absolute inset-0 opacity-[0.05] [background:repeating-linear-gradient(45deg,transparent_0_22px,rgba(212,175,55,0.6)_22px_23px)]" />
      <div className="absolute inset-0 opacity-[0.04] [background:linear-gradient(rgba(212,175,55,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.6)_1px,transparent_1px)] [background-size:64px_64px]" />

      <Trophy aria-hidden className="hidden md:block absolute -right-10 top-10 w-72 h-72 lg:w-96 lg:h-96 text-primary/[0.06] rotate-12" />
      <Trophy aria-hidden className="hidden lg:block absolute right-1/3 -bottom-16 w-64 h-64 text-primary/[0.04] -rotate-12" />
      <Particles />

      <div className="container relative z-10 mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <h1 className="font-heading font-bold text-white tracking-tight leading-[0.92] text-6xl sm:text-7xl md:text-8xl lg:text-[7rem]">
              <span className="block">HALL OF</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-primary to-yellow-300 drop-shadow-[0_0_25px_rgba(212,175,55,0.35)]">
                CHAMPIONS
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base md:text-lg text-gray-200 leading-relaxed">
              Honoring the schools, teams, and players who have reached the pinnacle of Indiana scholastic esports.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/50 bg-primary/10 backdrop-blur shadow-[0_0_25px_rgba(212,175,55,0.15)]">
              <Trophy className="w-3.5 h-3.5 text-primary" />
              <span className="text-[0.65rem] font-heading font-bold tracking-[0.25em] uppercase text-primary">
                Championship Tracking Since 2022-23
              </span>
            </div>

            <div className="mt-8 grid grid-cols-3 sm:flex sm:flex-wrap items-stretch gap-x-8 gap-y-6 max-w-2xl">
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-3 relative">
                  {i > 0 && (
                    <span aria-hidden className="hidden sm:block absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
                  )}
                  <div className="w-11 h-11 rounded-lg bg-primary/15 border border-primary/40 flex items-center justify-center text-primary shadow-[inset_0_0_15px_rgba(212,175,55,0.15)]">
                    {s.icon}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-3xl md:text-4xl text-white leading-none drop-shadow-[0_0_18px_rgba(212,175,55,0.45)]">
                      {s.value}
                    </div>
                    <div className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground font-heading font-bold mt-1.5">
                      {s.label}
                    </div>
                    <div className="text-[0.6rem] tracking-[0.22em] uppercase text-primary/80 font-heading font-bold mt-0.5">
                      Since 2022-23
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="hidden lg:block lg:col-span-4" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>
    </section>
  );
}

function FilterField({
  label, value, options, onChange, anyLabel,
}: {
  label: string; value: string; options: string[]; onChange: (v: string) => void; anyLabel: string;
}) {
  const isActive = value !== ANY;
  return (
    <label className="flex flex-col gap-1.5 min-w-0">
      <span className="text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground font-heading font-bold">
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full lg:w-44 appearance-none bg-card border rounded-md pl-3 pr-9 h-11 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer transition-colors ${
            isActive
              ? "border-primary text-primary"
              : "border-primary/25 text-foreground hover:border-primary/50"
          }`}
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o === ANY ? anyLabel : o}
            </option>
          ))}
        </select>
        <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${isActive ? "text-primary" : "text-muted-foreground"}`} />
      </div>
    </label>
  );
}

function SectionHeader({
  title,
  eyebrow,
  action,
}: {
  title: string;
  eyebrow?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex items-end justify-between gap-4 mb-6">
      <div>
        {eyebrow && (
          <div className="text-[0.65rem] font-heading font-bold tracking-[0.3em] uppercase text-primary/80 mb-2">
            {eyebrow}
          </div>
        )}
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-white tracking-tight">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}

function FeaturedGrid({
  cards,
}: {
  cards: Array<{ game: string; tier: Tier; winner: Champion }>;
}) {
  if (cards.length === 0) {
    return (
      <div className="py-16 text-center border border-dashed border-primary/20 rounded-lg text-muted-foreground">
        No featured champions for the current season yet.
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
      {cards.map((c, i) => (
        <FeaturedCard key={i} card={c} index={i} />
      ))}
    </div>
  );
}
function FeaturedCard({
  card,
  index,
}: {
  card: { game: string; tier: Tier; winner: Champion };
  index: number;
}) {
  const style = styleFor(card.game);
  const Icon = style.icon;
  const tierLabel = card.tier || "OPEN";
  const seasonYear = card.winner.season.split("-").pop() ?? card.winner.season;

  const handleClick = () => {
    const el = document.getElementById("all-seasons");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      aria-label={`View ${card.winner.school} — ${card.game} ${tierLabel} champion, ${card.winner.season}`}
      className="group text-left bg-gradient-to-br from-card via-card to-background/80 border border-primary/30 rounded-xl overflow-hidden hover:border-primary hover:-translate-y-1 hover:shadow-[0_25px_55px_-15px_rgba(212,175,55,0.45)] transition-all duration-300 h-full flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >

      <div className="relative aspect-[5/4] flex items-center justify-center bg-[radial-gradient(circle_at_50%_45%,rgba(212,175,55,0.10),transparent_70%)] border-b border-primary/15 p-6 overflow-hidden">

        <div aria-hidden className="absolute inset-0 opacity-[0.05] [background:linear-gradient(rgba(212,175,55,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.7)_1px,transparent_1px)] [background-size:32px_32px]" />

        <Shield aria-hidden className="absolute top-3 left-3 w-3.5 h-3.5 text-primary/30" />
        <Shield aria-hidden className="absolute top-3 right-3 w-3.5 h-3.5 text-primary/30" />

        <SchoolLogo school={card.winner.school} logoUrl={card.winner.logoUrl} />

        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 bg-background/90 backdrop-blur border border-primary/50 text-[0.65rem] font-heading font-bold tracking-[0.2em] rounded text-primary shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          <Trophy className="w-3 h-3" /> {seasonYear}
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-heading font-bold text-white text-lg leading-tight tracking-wide line-clamp-2">
          {card.winner.school}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-[0.7rem] font-heading font-bold tracking-[0.18em] uppercase">
          <span className={`inline-flex items-center justify-center w-6 h-6 rounded ${style.bg} ${style.border} border ${style.color} shrink-0`}>
            <Icon className="w-3.5 h-3.5" />
          </span>
          <span className={style.color}>{card.game}</span>
          <span className="text-muted-foreground/60">|</span>
          <span className="text-primary">State Champions</span>
        </div>

        {tierLabel && (
          <div className="mt-1.5 text-[0.65rem] tracking-[0.22em] uppercase text-muted-foreground font-heading font-bold">
            Division {tierLabel}
          </div>
        )}

        <div className="mt-4 flex items-center gap-3">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/40" />
          <Crown className="w-3.5 h-3.5 text-primary/80 shrink-0" />
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/40" />
        </div>

        <div className="mt-4 inline-flex items-center gap-1 text-[0.7rem] font-heading font-bold tracking-[0.22em] uppercase text-primary/80 group-hover:text-primary transition-colors">
          View Champion <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_60%)]" />
    </motion.button>
  );
}
function SchoolLogo({ school, logoUrl }: { school: string; logoUrl?: string }) {
  const resolved = logoUrl ?? findSchoolLogo(school);
  if (resolved) {
    return (
      <img
        src={resolved}
        alt={`${school} esports logo`}
        loading="lazy"
        className="relative z-10 max-h-32 max-w-[80%] object-contain group-hover:scale-[1.06] transition-transform duration-500 drop-shadow-[0_4px_18px_rgba(0,0,0,0.5)]"
      />
    );
  }
  const initials = school
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .slice(0, 3) || "—";

  return (
    <div
      className="relative z-10 flex flex-col items-center justify-center gap-2 group-hover:scale-[1.06] transition-transform duration-500"
      role="img"
      aria-label={`${school} championship crest`}
    >
      <div className="relative w-24 h-28 flex items-center justify-center">
        <svg viewBox="0 0 100 110" className="absolute inset-0 w-full h-full" aria-hidden="true">
          <defs>
            <linearGradient id="shieldFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(13,24,40,0.95)" />
              <stop offset="100%" stopColor="rgba(8,15,30,0.95)" />
            </linearGradient>
          </defs>
          <path
            d="M50 4 L92 18 L92 60 Q92 92 50 106 Q8 92 8 60 L8 18 Z"
            fill="url(#shieldFill)"
            stroke="rgba(212,175,55,0.7)"
            strokeWidth="2"
          />
          <path
            d="M50 12 L84 22 L84 60 Q84 86 50 98 Q16 86 16 60 L16 22 Z"
            fill="none"
            stroke="rgba(212,175,55,0.25)"
            strokeWidth="1"
          />
        </svg>
        <span className="relative font-heading font-bold text-2xl text-primary tracking-widest drop-shadow-[0_0_12px_rgba(212,175,55,0.45)]">
          {initials}
        </span>
      </div>
      <span className="text-[0.55rem] tracking-[0.22em] uppercase text-muted-foreground/70 font-heading font-bold">
        Championship Crest
      </span>
    </div>
  );
}
const LEAGUE_META: Record<League, { label: string; sublabel: string; color: string; bg: string; border: string }> = {
  IHSEN: { label: "IHSEN", sublabel: "High School",   color: "text-primary",      bg: "bg-primary/15",      border: "border-primary/40" },
  IMSEN: { label: "IMSEN", sublabel: "Middle School", color: "text-sky-300",      bg: "bg-sky-500/15",      border: "border-sky-500/40" },
  IUEN:  { label: "IUEN",  sublabel: "Unified",       color: "text-fuchsia-300",  bg: "bg-fuchsia-500/15",  border: "border-fuchsia-500/40" },
};
const LEAGUE_ORDER: League[] = ["IHSEN", "IMSEN", "IUEN"];

function ChampionsBySeason({ bySeason }: { bySeason: Array<[string, Champion[]]> }) {
  const [openSet, setOpenSet] = useState<Set<string>>(
    () => new Set(bySeason[0] ? [bySeason[0][0]] : []),
  );
  const toggle = (season: string) => {
    setOpenSet(prev => {
      const next = new Set(prev);
      if (next.has(season)) next.delete(season); else next.add(season);
      return next;
    });
  };
  const expandAll   = () => setOpenSet(new Set(bySeason.map(([s]) => s)));
  const collapseAll = () => setOpenSet(new Set());
  const allOpen     = bySeason.length > 0 && bySeason.every(([s]) => openSet.has(s));

  return (
    <div>
      <SectionHeader
        title="Champions by Season"
        action={
          bySeason.length > 1 ? (
            <button
              type="button"
              onClick={allOpen ? collapseAll : expandAll}
              className="text-sm font-heading tracking-[0.18em] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {allOpen ? "Collapse All" : "Expand All"}
            </button>
          ) : undefined
        }
      />

      {bySeason.length === 0 ? (
        <div className="py-16 text-center border border-dashed border-primary/20 rounded-lg text-muted-foreground">
          No champions match the current filters.
        </div>
      ) : (
        <div className="space-y-3">
          {bySeason.map(([season, list]) => {
            const isOpen = openSet.has(season);
            const groups = LEAGUE_ORDER
              .map(l => [l, list.filter(c => c.league === l)] as const)
              .filter(([, items]) => items.length > 0);
            const totalTitles = list.length;

            return (
              <div
                key={season}
                className={`bg-card border rounded-lg overflow-hidden transition-all ${
                  isOpen ? "border-primary/50 shadow-[0_0_30px_rgba(212,175,55,0.12)]" : "border-primary/15"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(season)}
                  className="w-full flex items-center gap-3 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-background/30 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? "bg-primary text-primary-foreground" : "bg-primary/15 text-primary"
                  }`}>
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-heading font-bold text-xl tracking-wide ${isOpen ? "text-primary" : "text-white"}`}>
                      {season}
                    </div>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm tracking-[0.1em] uppercase font-heading font-bold">
                      {groups.map(([league, items]) => {
                        const meta = LEAGUE_META[league];
                        return (
                          <span key={league} className={`inline-flex items-center gap-1.5 ${meta.color}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${meta.bg.replace("/15", "")}`} />
                            {meta.label} · {items.length}
                          </span>
                        );
                      })}
                      <span className="text-muted-foreground">{totalTitles} {totalTitles === 1 ? "title" : "titles"}</span>
                    </div>
                  </div>
                  <span className="hidden sm:flex items-center gap-1.5 text-sm font-heading tracking-[0.18em] uppercase text-muted-foreground shrink-0">
                    {isOpen ? "Hide" : "View Season"}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`} />
                  </span>
                  <ChevronDown className={`sm:hidden w-4 h-4 transition-transform shrink-0 ${isOpen ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 space-y-5 border-t border-primary/10">
                    {groups.map(([league, items]) => (
                      <LeagueGroup key={league} league={league} items={items} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-4">
        <button
          type="button"
          onClick={allOpen ? collapseAll : expandAll}
          className="w-full inline-flex items-center justify-center gap-2 h-12 border border-primary/30 hover:border-primary hover:bg-primary/10 text-primary rounded-md font-heading tracking-[0.18em] text-sm uppercase transition-colors"
        >
          {allOpen ? "Collapse All Seasons" : "View All Seasons"}
        </button>
      </div>
    </div>
  );
}

function LeagueGroup({ league, items }: { league: League; items: Champion[] }) {
  const meta = LEAGUE_META[league];
  return (
    <div>
      <div className="flex items-center gap-3 mt-4 mb-3">
        <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-md ${meta.bg} border ${meta.border}`}>
          <span className={`font-heading font-bold tracking-[0.18em] text-sm uppercase ${meta.color}`}>
            {meta.label}
          </span>
          <span className="text-xs text-muted-foreground">{meta.sublabel}</span>
        </span>
        <span className="flex-1 h-px bg-primary/10" />
        <span className="text-xs tracking-[0.1em] uppercase text-muted-foreground font-heading font-bold whitespace-nowrap">
          {items.length} {items.length === 1 ? "title" : "titles"}
        </span>
      </div>
      <ul className="space-y-1.5">
        {items.map((c, i) => <ChampionLine key={i} champion={c} />)}
      </ul>
    </div>
  );
}

function ChampionLine({ champion }: { champion: Champion }) {
  const style = styleFor(champion.game);
  const Icon = style.icon;
  const tierLabel = champion.tier || "OPEN";
  type Placement = { rank: 1 | 2 | 3 | 4; label: string; school: string; player?: string };
  const placements: Placement[] = [
    { rank: 1, label: "Champion",    school: champion.school,         player: champion.player },
  ];
  if (champion.runnerUp) placements.push({ rank: 2, label: "Runner-up", school: champion.runnerUp, player: champion.runnerUpPlayer });
  if (champion.third)    placements.push({ rank: 3, label: "3rd Place", school: champion.third,    player: champion.thirdPlayer });
  if (champion.finalist) placements.push({ rank: 4, label: "Finalist",  school: champion.finalist, player: champion.finalistPlayer });

  return (
    <li className={`bg-background/40 border border-transparent hover:bg-card/80 hover:border-primary/20 rounded-md p-3 transition-all`}>

      <div className="flex items-center gap-2.5 pb-2.5 mb-2.5 border-b border-primary/10">
        <span className={`w-8 h-8 rounded-md ${style.bg} ${style.border} border flex items-center justify-center ${style.color} shrink-0`}>
          <Icon className="w-4 h-4" />
        </span>
        <span className={`flex-1 min-w-0 text-xs tracking-[0.15em] uppercase font-heading font-bold ${style.color} truncate`}>
          {champion.game} <span className="text-muted-foreground/60">·</span> {tierLabel}
        </span>
      </div>

      <ol className="space-y-1.5">
        {placements.map((p) => {
          const isChamp = p.rank === 1;
          return (
            <li key={p.rank} className="flex items-center gap-2.5 text-sm">
              <span
                className={`shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-md text-[0.65rem] font-heading font-bold tabular-nums ${
                  isChamp
                    ? "bg-primary text-primary-foreground"
                    : p.rank === 2
                    ? "bg-slate-300/15 text-slate-200 border border-slate-300/30"
                    : p.rank === 3
                    ? "bg-amber-700/20 text-amber-300 border border-amber-700/40"
                    : "bg-background/60 text-muted-foreground border border-primary/15"
                }`}
                title={p.label}
              >
                {p.rank}
              </span>
              <span className={`flex-1 min-w-0 truncate ${isChamp ? "text-white font-semibold" : "text-muted-foreground"}`}>
                {p.school}
                {p.player && <span className="text-muted-foreground/70 font-normal"> · {p.player}</span>}
              </span>
              {isChamp && <Crown className="w-3.5 h-3.5 text-primary/80 shrink-0" />}
            </li>
          );
        })}
      </ol>
    </li>
  );
}

type LeagueRecord = {
  league: League;
  totalTitles: number;
  titles:      Array<{ school: string; value: number }>;
  appearances: Array<{ school: string; value: number }>;
  streaks:     Array<{ school: string; value: number }>;
};

function ChampionshipRecordBook({ data }: { data: Record<League, LeagueRecord> }) {
  return (
    <div>
      <SectionHeader
        title="Championship Record Book"
        action={
          <span className="hidden md:inline text-xs font-heading tracking-widest uppercase text-muted-foreground">
            All-time leaders by league
          </span>
        }
      />
      <div className="space-y-6">
        {LEAGUE_ORDER.map((league) => (
          <RecordBookLeagueSection key={league} record={data[league]} />
        ))}
      </div>
    </div>
  );
}

function RecordBookLeagueSection({ record }: { record: LeagueRecord }) {
  const meta = LEAGUE_META[record.league];
  const isEmpty = record.totalTitles === 0;

  return (
    <div className={`bg-card border ${meta.border} rounded-xl overflow-hidden`}>

      <div className={`flex items-center gap-3 px-5 py-4 border-b ${meta.border} ${meta.bg}`}>
        <span className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-background/40 border ${meta.border} ${meta.color}`}>
          <Trophy className="w-4 h-4" />
        </span>
        <div className="flex-1 min-w-0">
          <div className={`font-heading font-bold tracking-[0.18em] text-sm uppercase ${meta.color}`}>
            {meta.label}
          </div>
          <div className="text-xs font-medium text-muted-foreground mt-0.5">
            {meta.sublabel} · {record.totalTitles} {record.totalTitles === 1 ? "title" : "titles"} all-time · Tracked since 2022-23
          </div>
        </div>
      </div>

      {isEmpty ? (
        <div className="p-8 text-center text-base text-muted-foreground">
          No champions in this league yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/10">
          <RecordBookColumn
            icon={<Crown className="w-4 h-4" />}
            label="Most State Titles"
            accent={meta.color}
            entries={record.titles.map(e => ({ school: e.school, value: e.value.toString() }))}
          />
          <RecordBookColumn
            icon={<Medal className="w-4 h-4" />}
            label="Most Final Appearances"
            accent={meta.color}
            entries={record.appearances.map(e => ({ school: e.school, value: e.value.toString() }))}
          />
          <RecordBookColumn
            icon={<Flame className="w-4 h-4" />}
            label="Longest Win Streak"
            accent={meta.color}
            entries={record.streaks.map(e => ({ school: e.school, value: `${e.value} seasons` }))}
          />
        </div>
      )}
    </div>
  );
}

function RecordBookColumn({
  icon, label, entries, accent,
}: {
  icon: React.ReactNode;
  label: string;
  entries: Array<{ school: string; value: string }>;
  accent: string;
}) {
  return (
    <div className="p-5">
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-primary/10">
        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-md bg-background/40 border border-primary/20 ${accent}`}>
          {icon}
        </span>
        <span className="font-heading font-bold tracking-[0.1em] text-sm uppercase text-foreground/90 whitespace-nowrap">
          {label}
        </span>
      </div>
      <ol className="space-y-2.5">
        {entries.length === 0 && (
          <li className="text-sm text-muted-foreground/70 italic">No qualifying entries yet.</li>
        )}
        {entries.map((e, i) => (
          <li key={i} className="flex items-center gap-3 text-base">
            <span className={`font-heading font-bold w-5 text-center shrink-0 tabular-nums ${accent}`}>{i + 1}</span>
            <span className="flex-1 min-w-0 truncate text-foreground">{e.school}</span>
            <span className={`font-heading font-bold tabular-nums shrink-0 ${accent}`}>{e.value}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Particles({ count = 22 }: { count?: number }) {
  const prefersReducedMotion = useReducedMotion();
  const seeds = Array.from({ length: count }, (_, i) => i);
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {seeds.map((i) => {
        const left = (i * 53) % 100;
        const top  = (i * 37) % 100;
        const size = 2 + (i % 4);
        const delay = (i % 7) * 0.7;
        const dur   = 8 + (i % 5) * 1.5;
        if (prefersReducedMotion) {
          return (
            <span
              key={i}
              className="absolute rounded-full bg-primary/40 shadow-[0_0_8px_rgba(212,175,55,0.3)]"
              style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, opacity: 0.5 }}
            />
          );
        }
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-primary/70 shadow-[0_0_8px_rgba(212,175,55,0.6)]"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 0.8, 0], y: [-20, -80, -140] }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
}
