import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Trophy,
  Shield,
  Gamepad2,
  Crown,
  Medal,
  Flame,
  Sparkles,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
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
} from "lucide-react";
import { ONBOARDING_URL } from "@/lib/socialLinks";
import { CHAMPIONS, type Champion, type League, type Tier } from "@/data/champions";
import heroBackdrop from "@assets/state-finals/03-marvel-rivals-trophies.jpg";
import featuredImg1 from "@assets/state-finals/01-greencastle-celebration.jpg";
import featuredImg2 from "@assets/state-finals/02-central-hs-competing.jpg";
import featuredImg3 from "@assets/state-finals/03-marvel-rivals-1200.jpg";
import featuredImg4 from "@assets/state-finals/04-drew-rhoda-1200.jpg";

// =============================================================================
// Game design system — color + icon per title. Drives the chip strip on each
// season row, the tier pill on featured cards, and the dynasty/leaderboard tags.
// =============================================================================

type GameStyle = {
  color: string;        // tailwind text utility — main accent
  bg: string;           // tailwind bg utility — subtle fill behind icon
  border: string;       // tailwind border utility
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

// =============================================================================
// Featured Champions — hand-picked headlines from the most recent IHSEN AAA
// brackets (the marquee titles). Photos are reused from the State Finals reel.
// =============================================================================

const FEATURED_PICKS = [
  { game: "Valorant",      tier: "AAA" as Tier, photo: featuredImg2 },
  { game: "Rocket League", tier: "AAA" as Tier, photo: featuredImg1 },
  { game: "Smash Bros.",   tier: "AAA" as Tier, photo: featuredImg3 },
  { game: "Fortnite",      tier: "AAA" as Tier, photo: featuredImg4 },
  { game: "Overwatch",     tier: "AAA" as Tier, photo: featuredImg2 },
  { game: "Marvel Rivals", tier: "AAA" as Tier, photo: featuredImg3 },
];

const LATEST_SEASON = "2025-2026";

// =============================================================================
// Alumni Spotlight — curated list. Replace freely as student stories come in.
// =============================================================================

const ALUMNI = [
  { name: "Jacob B.",  school: "Carmel HS",         gradYear: "2023", role: "Esports Athlete",     org: "Purdue University",          accent: "from-yellow-700/30 to-yellow-900/40" },
  { name: "Lily W.",   school: "Warren Central HS", gradYear: "2022", role: "Esports Athlete",     org: "Indiana University",         accent: "from-red-800/30 to-red-950/40" },
  { name: "Ethan M.",  school: "Hobart HS",         gradYear: "2022", role: "Esports Analyst",     org: "University of Notre Dame",   accent: "from-emerald-800/30 to-emerald-950/40" },
  { name: "Maddie S.", school: "Ben Davis HS",      gradYear: "2021", role: "Broadcast Producer",  org: "Butler University",          accent: "from-blue-900/30 to-blue-950/40" },
];

// =============================================================================
// Page
// =============================================================================

const ANY = "All";

export default function HallOfChampions() {
  const [year, setYear]         = useState<string>(ANY);
  const [game, setGame]         = useState<string>(ANY);
  const [division, setDivision] = useState<string>(ANY);
  const [school, setSchool]     = useState<string>(ANY);

  // Filter option lists derived from the data
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

  // Group filtered champions by season for the season list
  const bySeason = useMemo(() => {
    const map = new Map<string, Champion[]>();
    for (const c of filtered) {
      if (!map.has(c.season)) map.set(c.season, []);
      map.get(c.season)!.push(c);
    }
    return [...map.entries()].sort((a, b) => b[0].localeCompare(a[0]));
  }, [filtered]);

  // Featured cards: pick latest-season AAA winners for each highlighted game
  const featuredCards = useMemo(() => {
    return FEATURED_PICKS
      .map(pick => {
        const winner = CHAMPIONS.find(
          c => c.season === LATEST_SEASON && c.game === pick.game && c.tier === pick.tier,
        );
        return winner ? { ...pick, winner } : null;
      })
      .filter(Boolean) as Array<{ game: string; tier: Tier; photo: string; winner: Champion }>;
  }, []);

  // Stats — straight from the data
  const heroStats = [
    { value: CHAMPIONS.length.toString(),                     label: "STATE TITLES",   icon: <Trophy   className="w-5 h-5" /> },
    { value: new Set(CHAMPIONS.map(c => c.school)).size.toString(), label: "TEAMS CROWNED",  icon: <Shield   className="w-5 h-5" /> },
    { value: `${new Set(CHAMPIONS.map(c => c.game)).size}+`,  label: "ESPORTS TITLES", icon: <Gamepad2 className="w-5 h-5" /> },
  ];

  // Dynasty leaderboards — computed PER LEAGUE from the data.
  // Each league gets its own Titles / Finals Appearances / Win Streak top-5.
  const dynastyByLeague = useMemo(() => {
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
      {/* ===================================================================
          HERO
      =================================================================== */}
      <HeroSection stats={heroStats} backdrop={heroBackdrop} />

      {/* ===================================================================
          FILTER BAR
      =================================================================== */}
      <section className="sticky top-20 z-30 border-y border-primary/15 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:items-end gap-3 lg:gap-4">
            <FilterField label="YEAR"     value={year}     options={[ANY, ...SEASONS]}                   onChange={setYear}     anyLabel="All Years" />
            <FilterField label="GAME"     value={game}     options={[ANY, ...GAMES]}                     onChange={setGame}     anyLabel="All Games" />
            <FilterField label="DIVISION" value={division} options={[ANY, ...DIVISIONS]}                 onChange={setDivision} anyLabel="All Divisions" />
            <FilterField label="SCHOOL"   value={school}   options={[ANY, ...SCHOOLS]}                   onChange={setSchool}   anyLabel="All Schools" />

            <div className="col-span-2 md:col-span-4 lg:ml-auto flex items-center justify-between gap-3">
              <span className="text-xs text-muted-foreground hidden lg:inline">
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

      {/* ===================================================================
          FEATURED CHAMPIONS — full-width carousel
      =================================================================== */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
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
          <FeaturedCarousel cards={featuredCards} />
        </div>
      </section>

      {/* ===================================================================
          TWO-COLUMN BODY
          Left: Champions by Season + Championship Moments
          Right: Dynasty Tracker + Alumni Spotlight
      =================================================================== */}
      <section id="all-seasons" className="py-8 md:py-12">
        <div className="container mx-auto px-4 space-y-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <ChampionsBySeason bySeason={bySeason} />
            </div>
            <div className="lg:col-span-8">
              <DynastyTracker data={dynastyByLeague} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <ChampionshipMoments />
            </div>
            <div className="lg:col-span-8">
              <AlumniSpotlight />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          CTA FOOTER — horizontal banner
      =================================================================== */}
      <section className="relative overflow-hidden border-t border-primary/20">
        <div className="container relative z-10 mx-auto px-4 py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-center text-primary">
              <Trophy className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-white tracking-tight leading-tight">
                LEGACY.{" "}
                <span className="text-primary">PRIDE.</span>{" "}
                CHAMPIONS.
              </h2>
              <p className="text-muted-foreground mt-1">Compete. Win. Be remembered.</p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest text-base h-12 px-8"
            >
              <a href={ONBOARDING_URL} target="_blank" rel="noopener noreferrer">
                JOIN THE LEAGUE
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// =============================================================================
// HERO
// =============================================================================

function HeroSection({ stats, backdrop }: { stats: Array<{ value: string; label: string; icon: React.ReactNode }>; backdrop: string }) {
  return (
    <section className="relative overflow-hidden">
      <img src={backdrop} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-30 motion-safe:animate-hero-zoom" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(212,175,55,0.22),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/85 to-background" />
      <div className="absolute inset-0 opacity-[0.05] [background:repeating-linear-gradient(45deg,transparent_0_22px,rgba(212,175,55,0.6)_22px_23px)]" />
      <Particles />

      <div className="container relative z-10 mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <h1 className="font-heading font-bold text-white tracking-tight leading-[0.92] text-6xl sm:text-7xl md:text-8xl lg:text-[7rem]">
              <span className="block">HALL OF</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-primary to-yellow-300 drop-shadow-[0_0_25px_rgba(212,175,55,0.35)]">
                CHAMPIONS
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base md:text-lg text-gray-300/90 leading-relaxed">
              Honoring the schools, teams, and players who have reached the pinnacle of Indiana scholastic esports.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-5">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/40 flex items-center justify-center text-primary">
                    {s.icon}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-3xl md:text-4xl text-white leading-none">{s.value}</div>
                    <div className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground font-heading font-bold mt-1">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column intentionally left blank for now. */}
          <div className="hidden lg:block lg:col-span-5" />
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// FILTER FIELD — labelled select with gold-active styling
// =============================================================================

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

// =============================================================================
// SECTION HEADER — small title + optional right-side action
// =============================================================================

function SectionHeader({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-4 mb-6">
      <h2 className="font-heading font-bold text-2xl md:text-3xl text-white tracking-tight">
        {title}
      </h2>
      {action}
    </div>
  );
}

// =============================================================================
// FEATURED CHAMPIONS CAROUSEL
// =============================================================================

function FeaturedCarousel({
  cards,
}: {
  cards: Array<{ game: string; tier: Tier; photo: string; winner: Champion }>;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({
    pages: 1, page: 0, atStart: true, atEnd: cards.length <= 1,
  });

  // Recompute pagination from the actual rendered widths. Driven by scroll
  // events + window resize so it stays correct across breakpoints.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      // Cards are uniformly sized; measure the first child to derive a "page" step.
      const firstCard = el.querySelector<HTMLElement>("[data-carousel-item]");
      const cardWidth = firstCard?.offsetWidth ?? clientWidth;
      const gap = 20; // matches gap-5 = 1.25rem
      const step = cardWidth + gap;
      const visible = Math.max(1, Math.round(clientWidth / step));
      const maxScroll = Math.max(0, scrollWidth - clientWidth);
      const pages = Math.max(1, Math.ceil((cards.length - visible) / 1) + 1);
      // Page index = how many "single-card" steps from the start
      const page = Math.min(pages - 1, Math.round(scrollLeft / step));
      setScrollState({
        pages,
        page,
        atStart: scrollLeft <= 4,
        atEnd: scrollLeft >= maxScroll - 4,
      });
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [cards.length]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("[data-carousel-item]");
    const cardWidth = firstCard?.offsetWidth ?? el.clientWidth;
    el.scrollBy({ left: dir * (cardWidth + 20), behavior: "smooth" });
  };

  const goToPage = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("[data-carousel-item]");
    const cardWidth = firstCard?.offsetWidth ?? el.clientWidth;
    el.scrollTo({ left: i * (cardWidth + 20), behavior: "smooth" });
  };

  return (
    <div className="relative group/carousel">
      {/* Track */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-1 px-1
                   [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((c, i) => (
          <div
            key={i}
            data-carousel-item
            className="snap-start shrink-0 w-[calc(85%-0.625rem)] sm:w-[calc(50%-0.625rem)] md:w-[calc(33.333%-0.834rem)] lg:w-[calc(25%-0.9375rem)]"
          >
            <FeaturedCard card={c} />
          </div>
        ))}
      </div>

      {/* Prev / Next buttons (hidden on touch / when at edge) */}
      <button
        type="button"
        aria-label="Previous champion"
        onClick={() => scrollByCard(-1)}
        disabled={scrollState.atStart}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-background/90 backdrop-blur border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-0 disabled:pointer-events-none transition-all shadow-[0_0_25px_rgba(0,0,0,0.5)]"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        aria-label="Next champion"
        onClick={() => scrollByCard(1)}
        disabled={scrollState.atEnd}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-background/90 backdrop-blur border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-0 disabled:pointer-events-none transition-all shadow-[0_0_25px_rgba(0,0,0,0.5)]"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Page dots */}
      {scrollState.pages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: scrollState.pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToPage(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === scrollState.page
                  ? "w-8 bg-primary"
                  : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function FeaturedCard({ card }: { card: { game: string; tier: Tier; photo: string; winner: Champion } }) {
  const style = styleFor(card.game);
  const Icon = style.icon;
  const tierLabel = card.tier || "OPEN";

  return (
    <div className="group relative bg-card border border-primary/20 rounded-xl overflow-hidden hover:border-primary/70 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(212,175,55,0.4)] transition-all duration-300 h-full flex flex-col">
      {/* Photo with game-themed gradient */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img src={card.photo} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className={`absolute inset-0 bg-gradient-to-br ${tailwindGameOverlay(card.game)} mix-blend-multiply opacity-80`} />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        {/* Season pill */}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-background/85 backdrop-blur border border-primary/40 text-[0.65rem] font-heading font-bold tracking-[0.2em] rounded text-primary">
          {card.winner.season}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 shrink-0 rounded-full ${style.bg} ${style.border} border flex items-center justify-center ${style.color}`}>
            <Icon className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-heading font-bold text-white text-lg leading-tight tracking-wide line-clamp-2">
              {card.winner.school}
            </div>
            <div className={`mt-1 inline-flex items-center gap-1.5 text-[0.7rem] font-heading font-bold tracking-[0.18em] uppercase ${style.color}`}>
              {card.game} <span className="text-muted-foreground/60">•</span> <span>{tierLabel}</span>
            </div>
          </div>
        </div>

        {/* Champions banner */}
        <div className="mt-auto pt-5 flex items-center gap-3">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/40" />
          <div className="inline-flex items-center gap-1.5 text-primary font-heading font-bold tracking-[0.25em] text-[0.65rem] uppercase">
            <Crown className="w-3.5 h-3.5" /> State Champions
          </div>
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/40" />
        </div>
      </div>

      {/* hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_60%)]" />
    </div>
  );
}

// Returns a tailwind gradient class string per game (multiplied with the photo).
function tailwindGameOverlay(game: string): string {
  switch (game) {
    case "Valorant":          return "from-red-900/80 via-red-950/60 to-rose-950/70";
    case "Rocket League":     return "from-sky-900/80 via-blue-950/60 to-indigo-950/70";
    case "Smash Bros.":       return "from-rose-900/70 via-purple-950/70 to-slate-950/70";
    case "Fortnite":          return "from-emerald-900/80 via-teal-950/70 to-slate-950/70";
    case "Overwatch":         return "from-orange-900/80 via-amber-950/70 to-slate-950/70";
    case "Marvel Rivals":     return "from-rose-900/80 via-fuchsia-950/60 to-slate-950/70";
    case "League of Legends": return "from-yellow-900/80 via-amber-950/70 to-slate-950/70";
    default:                  return "from-slate-900/80 via-slate-950/70 to-black/70";
  }
}

// =============================================================================
// CHAMPIONS BY SEASON — left column accordion
// =============================================================================

// Display order + visual identity for each league.
const LEAGUE_META: Record<League, { label: string; sublabel: string; color: string; bg: string; border: string }> = {
  IHSEN: { label: "IHSEN", sublabel: "High School",   color: "text-primary",      bg: "bg-primary/15",      border: "border-primary/40" },
  IMSEN: { label: "IMSEN", sublabel: "Middle School", color: "text-sky-300",      bg: "bg-sky-500/15",      border: "border-sky-500/40" },
  IUEN:  { label: "IUEN",  sublabel: "Unified",       color: "text-fuchsia-300",  bg: "bg-fuchsia-500/15",  border: "border-fuchsia-500/40" },
};
const LEAGUE_ORDER: League[] = ["IHSEN", "IMSEN", "IUEN"];

function ChampionsBySeason({ bySeason }: { bySeason: Array<[string, Champion[]]> }) {
  // Multi-open: every season tracks its own state. Latest one starts open.
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
            // Group entries by league, preserve display order
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

  // Build placement list — only show ranks that have data
  type Placement = { rank: 1 | 2 | 3 | 4; label: string; school: string; player?: string };
  const placements: Placement[] = [
    { rank: 1, label: "Champion",    school: champion.school,         player: champion.player },
  ];
  if (champion.runnerUp) placements.push({ rank: 2, label: "Runner-up", school: champion.runnerUp, player: champion.runnerUpPlayer });
  if (champion.third)    placements.push({ rank: 3, label: "3rd Place", school: champion.third,    player: champion.thirdPlayer });
  if (champion.finalist) placements.push({ rank: 4, label: "Finalist",  school: champion.finalist, player: champion.finalistPlayer });

  return (
    <li className={`bg-background/40 border border-transparent hover:bg-card/80 hover:border-primary/20 rounded-md p-3 transition-all`}>
      {/* Game header */}
      <div className="flex items-center gap-2.5 pb-2.5 mb-2.5 border-b border-primary/10">
        <span className={`w-8 h-8 rounded-md ${style.bg} ${style.border} border flex items-center justify-center ${style.color} shrink-0`}>
          <Icon className="w-4 h-4" />
        </span>
        <span className={`flex-1 min-w-0 text-xs tracking-[0.15em] uppercase font-heading font-bold ${style.color} truncate`}>
          {champion.game} <span className="text-muted-foreground/60">·</span> {tierLabel}
        </span>
      </div>

      {/* Placements */}
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

// =============================================================================
// DYNASTY TRACKER — three stacked sections, one per league
// =============================================================================

type LeagueDynasty = {
  league: League;
  totalTitles: number;
  titles:      Array<{ school: string; value: number }>;
  appearances: Array<{ school: string; value: number }>;
  streaks:     Array<{ school: string; value: number }>;
};

function DynastyTracker({ data }: { data: Record<League, LeagueDynasty> }) {
  return (
    <div>
      <SectionHeader
        title="Dynasty Tracker"
        action={
          <span className="hidden md:inline text-xs font-heading tracking-widest uppercase text-muted-foreground">
            Top 5 by league
          </span>
        }
      />
      <div className="space-y-6">
        {LEAGUE_ORDER.map((league) => (
          <DynastyLeagueSection key={league} dynasty={data[league]} />
        ))}
      </div>
    </div>
  );
}

function DynastyLeagueSection({ dynasty }: { dynasty: LeagueDynasty }) {
  const meta = LEAGUE_META[dynasty.league];
  const isEmpty = dynasty.totalTitles === 0;

  return (
    <div className={`bg-card border ${meta.border} rounded-xl overflow-hidden`}>
      {/* League banner */}
      <div className={`flex items-center gap-3 px-5 py-4 border-b ${meta.border} ${meta.bg}`}>
        <span className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-background/40 border ${meta.border} ${meta.color}`}>
          <Trophy className="w-4 h-4" />
        </span>
        <div className="flex-1 min-w-0">
          <div className={`font-heading font-bold tracking-[0.18em] text-sm uppercase ${meta.color}`}>
            {meta.label}
          </div>
          <div className="text-xs font-medium text-muted-foreground mt-0.5">
            {meta.sublabel} · {dynasty.totalTitles} {dynasty.totalTitles === 1 ? "title" : "titles"} all-time
          </div>
        </div>
      </div>

      {isEmpty ? (
        <div className="p-8 text-center text-base text-muted-foreground">
          No champions in this league yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/10">
          <DynastyColumn
            icon={<Crown className="w-4 h-4" />}
            label="Most State Titles"
            accent={meta.color}
            entries={dynasty.titles.map(e => ({ school: e.school, value: e.value.toString() }))}
          />
          <DynastyColumn
            icon={<Medal className="w-4 h-4" />}
            label="Most Final Appearances"
            accent={meta.color}
            entries={dynasty.appearances.map(e => ({ school: e.school, value: e.value.toString() }))}
          />
          <DynastyColumn
            icon={<Flame className="w-4 h-4" />}
            label="Longest Win Streak"
            accent={meta.color}
            entries={dynasty.streaks.map(e => ({ school: e.school, value: `${e.value} seasons` }))}
          />
        </div>
      )}
    </div>
  );
}

function DynastyColumn({
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

// =============================================================================
// CHAMPIONSHIP MOMENTS — single video card, left column
// =============================================================================

function ChampionshipMoments() {
  return (
    <div>
      <SectionHeader title="Championship Moments" />
      <a
        href="https://www.youtube.com/@EsportsIndiana"
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-card border border-primary/20 rounded-xl overflow-hidden hover:border-primary/60 hover:shadow-[0_20px_50px_-12px_rgba(212,175,55,0.3)] transition-all"
      >
        <div className="relative h-48 overflow-hidden">
          <img src={featuredImg1} alt="2025–2026 IEN State Finals highlights" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/95 text-primary-foreground flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.6)] group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="font-heading font-bold text-lg text-white tracking-wide leading-tight">
            2025–2026 IEN FINALS HIGHLIGHTS
          </div>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Relive the biggest moments from an unforgettable season.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 h-10 rounded-md bg-primary text-primary-foreground font-heading font-bold tracking-widest text-xs uppercase shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:bg-primary/90 transition-colors">
            <Play className="w-3.5 h-3.5" fill="currentColor" /> Watch Now
          </div>
        </div>
      </a>
    </div>
  );
}

// =============================================================================
// ALUMNI SPOTLIGHT — right column, 4 cards
// =============================================================================

function AlumniSpotlight() {
  return (
    <div>
      <SectionHeader
        title="Alumni Spotlight"
        action={
          <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-1 text-sm font-heading tracking-[0.18em] uppercase text-primary hover:text-yellow-200 transition-colors">
            View All Alumni <ArrowUpRight className="w-4 h-4" />
          </a>
        }
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {ALUMNI.map((a) => <AlumniCard key={a.name} alum={a} />)}
      </div>
    </div>
  );
}

function AlumniCard({ alum }: { alum: typeof ALUMNI[number] }) {
  const initials = alum.name.split(" ").map(s => s[0]).join("").toUpperCase().slice(0, 2);
  return (
    <div className="group bg-card border border-primary/15 rounded-xl overflow-hidden hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(212,175,55,0.25)] transition-all">
      <div className={`relative h-40 bg-gradient-to-br ${alum.accent} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.15),transparent_60%)]" />
        <div className="relative w-20 h-20 rounded-full bg-background/80 border-2 border-primary/40 backdrop-blur flex items-center justify-center font-heading font-bold text-2xl text-primary tracking-widest shadow-[0_0_30px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform">
          {initials}
        </div>
      </div>
      <div className="p-4">
        <div className="font-heading font-bold text-base text-white tracking-wide leading-tight">{alum.name}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{alum.school} '{alum.gradYear.slice(2)}</div>
        <div className="mt-3 pt-3 border-t border-primary/10">
          <div className="text-sm text-foreground/90 leading-tight">{alum.org}</div>
          <div className="text-[0.6rem] tracking-widest uppercase text-primary font-heading font-bold mt-1">{alum.role}</div>
        </div>
      </div>
    </div>
  );
}

function Particles({ count = 22 }: { count?: number }) {
  const seeds = Array.from({ length: count }, (_, i) => i);
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {seeds.map((i) => {
        const left = (i * 53) % 100;
        const top  = (i * 37) % 100;
        const size = 2 + (i % 4);
        const delay = (i % 7) * 0.7;
        const dur   = 8 + (i % 5) * 1.5;
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
