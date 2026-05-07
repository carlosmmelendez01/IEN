import { useMemo, useState } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  Trophy,
  Crown,
  Medal,
  Flame,
  Sparkles,
  Star,
  Play,
  ChevronRight,
  ArrowUpRight,
  Filter,
  X,
} from "lucide-react";
import { ONBOARDING_URL } from "@/lib/socialLinks";
import heroBackdrop from "@assets/state-finals/03-marvel-rivals-trophies.jpg";
import featuredImg1 from "@assets/state-finals/01-greencastle-celebration.jpg";
import featuredImg2 from "@assets/state-finals/02-central-hs-competing.jpg";
import featuredImg3 from "@assets/state-finals/03-marvel-rivals-1200.jpg";
import featuredImg4 from "@assets/state-finals/04-drew-rhoda-1200.jpg";

// ---------------------------------------------------------------------------
// Champions data — seeded with the verified 2025–26 winners (per the
// State Finals recap on /news) and named historical placeholders for the
// surrounding seasons. Easy to swap as the historical archive is finalized.
// ---------------------------------------------------------------------------

type Division = "IHSEN" | "IMSEN" | "IUEN";

type Champion = {
  season: string;        // e.g. "2025–2026"
  game: string;
  division: Division;
  school: string;
  city: string;
  logo?: string;         // /schools/* path
  photo?: string;        // hero/featured photo
  featured?: boolean;
};

const CHAMPIONS: Champion[] = [
  // 2025–2026 — verified from /news State Finals recap
  { season: "2025–2026", game: "Valorant",            division: "IHSEN", school: "Penn High School",                 city: "Mishawaka, IN", logo: "/schools/penn.png",        photo: featuredImg2, featured: true },
  { season: "2025–2026", game: "Rocket League",       division: "IHSEN", school: "Zionsville Community HS",          city: "Zionsville, IN",                                  photo: featuredImg1, featured: true },
  { season: "2025–2026", game: "Smash Bros. Ultimate", division: "IHSEN", school: "Carmel High School",              city: "Carmel, IN",                                      photo: featuredImg3, featured: true },
  { season: "2025–2026", game: "Overwatch 2",         division: "IHSEN", school: "Cathedral High School",            city: "Indianapolis, IN" },
  { season: "2025–2026", game: "Fortnite",            division: "IMSEN", school: "Hamilton Southeastern Middle School", city: "Fishers, IN", logo: "/schools/hse.png",     photo: featuredImg4, featured: true },
  { season: "2025–2026", game: "Smash Bros. Ultimate", division: "IUEN",  school: "Warren Central HS",                city: "Indianapolis, IN" },

  // 2024–2025 — historical archive (placeholders pending verification)
  { season: "2024–2025", game: "Valorant",            division: "IHSEN", school: "Hamilton Southeastern HS",          city: "Fishers, IN",     logo: "/schools/hse.png" },
  { season: "2024–2025", game: "Rocket League",       division: "IHSEN", school: "Greencastle High School",           city: "Greencastle, IN", logo: "/schools/greencastle.webp" },
  { season: "2024–2025", game: "Smash Bros. Ultimate", division: "IHSEN", school: "Penn High School",                 city: "Mishawaka, IN",   logo: "/schools/penn.png" },
  { season: "2024–2025", game: "Overwatch 2",         division: "IHSEN", school: "Carmel High School",                city: "Carmel, IN" },
  { season: "2024–2025", game: "Fortnite",            division: "IMSEN", school: "Clay Middle School",                city: "Carmel, IN" },
  { season: "2024–2025", game: "Rocket League",       division: "IUEN",  school: "Brownsburg High School",            city: "Brownsburg, IN" },

  // 2023–2024
  { season: "2023–2024", game: "Valorant",            division: "IHSEN", school: "Cathedral High School",             city: "Indianapolis, IN" },
  { season: "2023–2024", game: "Rocket League",       division: "IHSEN", school: "Penn High School",                  city: "Mishawaka, IN", logo: "/schools/penn.png" },
  { season: "2023–2024", game: "Smash Bros. Ultimate", division: "IHSEN", school: "Hamilton Southeastern HS",         city: "Fishers, IN",   logo: "/schools/hse.png" },
  { season: "2023–2024", game: "Fortnite",            division: "IMSEN", school: "Creekside Middle School",           city: "Carmel, IN" },
  { season: "2023–2024", game: "Smash Bros. Ultimate", division: "IUEN",  school: "Warren Central HS",                city: "Indianapolis, IN" },
];

const SEASONS = Array.from(new Set(CHAMPIONS.map(c => c.season)));
const GAMES = Array.from(new Set(CHAMPIONS.map(c => c.game))).sort();
const DIVISIONS: Division[] = ["IHSEN", "IMSEN", "IUEN"];
const SCHOOLS = Array.from(new Set(CHAMPIONS.map(c => c.school))).sort();

const HERO_STATS = [
  { value: CHAMPIONS.length.toString(), label: "State Titles" },
  { value: SCHOOLS.length.toString(),   label: "Teams Crowned" },
  { value: GAMES.length.toString(),     label: "Esports Titles" },
  { value: "7,000+",                    label: "Student Athletes" },
];

// Dynasty leaderboard derived from CHAMPIONS so it stays in sync.
type DynastyEntry = { school: string; value: string; metric: string };

const DYNASTY = (() => {
  const titles = new Map<string, number>();
  for (const c of CHAMPIONS) titles.set(c.school, (titles.get(c.school) ?? 0) + 1);
  const top = [...titles.entries()].sort((a, b) => b[1] - a[1]);
  return {
    mostTitles: top.slice(0, 4).map<DynastyEntry>(([school, n]) => ({
      school, value: n.toString(), metric: n === 1 ? "title" : "titles",
    })),
  };
})();

const FINALS_APPEARANCES: DynastyEntry[] = [
  { school: "Penn High School",            value: "6", metric: "appearances" },
  { school: "Hamilton Southeastern HS",    value: "5", metric: "appearances" },
  { school: "Carmel High School",          value: "5", metric: "appearances" },
  { school: "Cathedral High School",       value: "4", metric: "appearances" },
];

const WIN_STREAKS: DynastyEntry[] = [
  { school: "Penn High School",            value: "3", metric: "season streak" },
  { school: "Cathedral High School",       value: "2", metric: "season streak" },
  { school: "Warren Central HS",           value: "2", metric: "season streak" },
];

const MOST_IMPROVED: DynastyEntry[] = [
  { school: "Greencastle High School",     value: "+4", metric: "playoff jump" },
  { school: "Brownsburg High School",      value: "+3", metric: "playoff jump" },
  { school: "Clay Middle School",          value: "+3", metric: "playoff jump" },
];

// Championship Moments — placeholder thumbnail set powered by State Finals photos.
const MOMENTS = [
  { title: "2026 STATE FINALS RECAP",      subtitle: "Ball State University · April 25, 2026", img: featuredImg1, duration: "12:08" },
  { title: "GREENCASTLE LIFTS THE TROPHY", subtitle: "Rocket League — Grand Final",            img: featuredImg1, duration: "03:42" },
  { title: "PENN ON CHAMPIONSHIP POINT",   subtitle: "Valorant — Map 3 highlight",             img: featuredImg2, duration: "02:14" },
  { title: "CARMEL'S RUN TO GOLD",         subtitle: "Smash Bros. Ultimate — Top 8",           img: featuredImg3, duration: "05:51" },
];

// Alumni Spotlight
const ALUMNI = [
  { name: "Maya R.",     school: "Penn HS",                     gradYear: "2024", role: "Esports Athlete",       org: "Maryville University · Valorant" },
  { name: "Jordan T.",   school: "Hamilton Southeastern HS",    gradYear: "2023", role: "Broadcast Producer",    org: "Big Ten Network — Esports Desk" },
  { name: "Devin C.",    school: "Cathedral HS",                gradYear: "2024", role: "Content Creator",       org: "1.2M followers · Twitch Partner" },
  { name: "Amari S.",    school: "Carmel HS",                   gradYear: "2022", role: "Analyst",               org: "Purdue Esports — Performance Analytics" },
];

// ---------------------------------------------------------------------------

const ANY = "All";

export default function HallOfChampions() {
  const [year, setYear]         = useState<string>(ANY);
  const [game, setGame]         = useState<string>(ANY);
  const [division, setDivision] = useState<string>(ANY);
  const [school, setSchool]     = useState<string>(ANY);

  const filterActive = year !== ANY || game !== ANY || division !== ANY || school !== ANY;

  const filtered = useMemo(() => CHAMPIONS.filter(c =>
    (year === ANY || c.season === year) &&
    (game === ANY || c.game === game) &&
    (division === ANY || c.division === division) &&
    (school === ANY || c.school === school)
  ), [year, game, division, school]);

  // Group filtered champions by season for the season accordion.
  const bySeason = useMemo(() => {
    const map = new Map<string, Champion[]>();
    for (const c of filtered) {
      if (!map.has(c.season)) map.set(c.season, []);
      map.get(c.season)!.push(c);
    }
    return [...map.entries()].sort((a, b) => b[0].localeCompare(a[0]));
  }, [filtered]);

  const featured = CHAMPIONS.filter(c => c.featured);
  const clearAll = () => { setYear(ANY); setGame(ANY); setDivision(ANY); setSchool(ANY); };

  return (
    <Layout>
      {/* ============================================================= */}
      {/* HERO                                                            */}
      {/* ============================================================= */}
      <section className="relative overflow-hidden">
        {/* Backdrop image */}
        <img
          src={heroBackdrop}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-25 motion-safe:animate-hero-zoom"
        />
        {/* Stadium-light radial wash + gold haze */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,55,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
        {/* Diagonal grid lines */}
        <div className="absolute inset-0 opacity-[0.06] [background:repeating-linear-gradient(45deg,transparent_0_22px,rgba(212,175,55,0.6)_22px_23px)]" />
        {/* Floating particles */}
        <Particles />

        <div className="container relative z-10 mx-auto px-4 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left — Title + stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-primary/40 bg-primary/10 text-primary text-xs font-bold tracking-[0.25em] rounded-full uppercase">
                <Trophy className="w-3.5 h-3.5" /> Community · Legacy Archive
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-bold text-white leading-[0.95] tracking-tight mb-6">
                HALL OF{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-primary to-yellow-300 drop-shadow-[0_0_25px_rgba(212,175,55,0.35)]">
                  CHAMPIONS
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300/90 max-w-2xl leading-relaxed mb-10">
                Honoring the schools, teams, and players who have reached the pinnacle of
                Indiana scholastic esports. Every banner. Every roster. Every name etched
                into the IEN record.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-primary/15 border border-primary/20 rounded-lg overflow-hidden">
                {HERO_STATS.map((s) => (
                  <div key={s.label} className="bg-card/80 backdrop-blur-sm px-4 py-5 text-center">
                    <div className="font-heading font-bold text-3xl md:text-4xl text-primary leading-none">
                      {s.value}
                    </div>
                    <div className="mt-2 text-[0.65rem] md:text-xs tracking-[0.2em] uppercase text-muted-foreground font-heading font-semibold">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Trophy showpiece */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <TrophyShowpiece />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* FILTER BAR                                                      */}
      {/* ============================================================= */}
      <section className="sticky top-20 z-30 border-y border-primary/15 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-primary mr-1">
              <Filter className="w-4 h-4" />
              <span className="font-heading font-bold tracking-widest text-xs uppercase">Filter Archive</span>
            </div>

            <FilterSelect label="Year"     value={year}     options={[ANY, ...SEASONS]}   onChange={setYear} />
            <FilterSelect label="Game"     value={game}     options={[ANY, ...GAMES]}     onChange={setGame} />
            <FilterSelect label="Division" value={division} options={[ANY, ...DIVISIONS]} onChange={setDivision} />
            <FilterSelect label="School"   value={school}   options={[ANY, ...SCHOOLS]}   onChange={setSchool} />

            <div className="ml-auto flex items-center gap-3">
              <span className="text-xs text-muted-foreground hidden md:inline">
                <span className="text-primary font-bold">{filtered.length}</span> {filtered.length === 1 ? "result" : "results"}
              </span>
              <button
                type="button"
                onClick={clearAll}
                disabled={!filterActive}
                className="inline-flex items-center gap-1.5 text-xs font-heading tracking-widest uppercase text-muted-foreground hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <X className="w-3.5 h-3.5" /> Clear
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* FEATURED CHAMPIONS                                              */}
      {/* ============================================================= */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="2025–2026 Season"
            title="Featured Champions"
            subtitle="The most recent class of state champions, etched into IEN history."
          />

          <div className="relative mt-10">
            <div className="flex gap-5 overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory [scrollbar-width:thin] [scrollbar-color:rgba(212,175,55,0.4)_transparent]">
              {featured.map((c, i) => (
                <FeaturedCard key={i} champion={c} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* CHAMPIONS BY SEASON                                             */}
      {/* ============================================================= */}
      <section className="py-20 md:py-24 bg-card/40 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Archive"
            title="Champions by Season"
            subtitle="Browse every IEN state title — IHSEN, IMSEN, and IUEN — by year."
          />

          {bySeason.length === 0 ? (
            <div className="mt-12 text-center py-16 border border-dashed border-primary/20 rounded-lg text-muted-foreground">
              No champions match the current filters.
            </div>
          ) : (
            <Accordion
              type="multiple"
              defaultValue={bySeason.length > 0 ? [bySeason[0][0]] : []}
              className="mt-10 space-y-4"
            >
              {bySeason.map(([seasonKey, list]) => (
                <AccordionItem
                  key={seasonKey}
                  value={seasonKey}
                  className="border border-primary/15 bg-background/60 rounded-lg overflow-hidden data-[state=open]:border-primary/40 data-[state=open]:shadow-[0_0_30px_rgba(212,175,55,0.12)] transition-all"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                    <div className="flex flex-1 items-center gap-6 text-left">
                      <div className="font-heading font-bold text-2xl md:text-3xl text-white tracking-wide group-data-[state=open]:text-primary transition-colors">
                        {seasonKey}
                      </div>
                      <div className="hidden md:flex items-center gap-2 flex-wrap">
                        {Array.from(new Set(list.map(c => c.game))).slice(0, 5).map(g => (
                          <span key={g} className="text-[0.65rem] tracking-widest uppercase font-heading font-bold px-2.5 py-1 rounded-full border border-primary/25 text-muted-foreground">
                            {g}
                          </span>
                        ))}
                      </div>
                      <div className="ml-auto flex items-center gap-3 text-primary font-heading tracking-widest text-xs uppercase">
                        <span>{list.length} {list.length === 1 ? "Title" : "Titles"}</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                      {list.map((c, i) => (
                        <SeasonRow key={i} champion={c} />
                      ))}
                    </div>
                    <div className="flex justify-end mt-6">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 text-xs font-heading tracking-widest uppercase text-primary hover:text-yellow-200 transition-colors"
                      >
                        View Season <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </section>

      {/* ============================================================= */}
      {/* DYNASTY TRACKER                                                 */}
      {/* ============================================================= */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Program Legacy"
            title="Dynasty Tracker"
            subtitle="The programs that keep showing up when banners are on the line."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            <DynastyCard icon={<Crown className="w-5 h-5" />}    label="Most State Titles"        entries={DYNASTY.mostTitles} />
            <DynastyCard icon={<Medal className="w-5 h-5" />}    label="Most Finals Appearances"  entries={FINALS_APPEARANCES} />
            <DynastyCard icon={<Flame className="w-5 h-5" />}    label="Longest Win Streak"       entries={WIN_STREAKS} />
            <DynastyCard icon={<Sparkles className="w-5 h-5" />} label="Most Improved Program"    entries={MOST_IMPROVED} />
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* CHAMPIONSHIP MOMENTS                                            */}
      {/* ============================================================= */}
      <section className="py-20 md:py-24 bg-card/40 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Watch"
            title="Championship Moments"
            subtitle="The shots, the comebacks, the trophy lifts — relived."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
            {/* Featured highlight */}
            <button
              type="button"
              className="lg:col-span-2 group relative h-[22rem] md:h-[28rem] overflow-hidden rounded-xl border border-primary/30 hover:border-primary/70 transition-all bg-card text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <img src={MOMENTS[0].img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-[1.03] group-hover:opacity-80 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-primary/95 text-primary-foreground flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.5)] group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="inline-block mb-3 px-3 py-1 bg-primary text-primary-foreground text-[0.65rem] font-bold tracking-widest rounded-full uppercase">
                  Featured · {MOMENTS[0].duration}
                </div>
                <h3 className="font-heading font-bold text-2xl md:text-4xl text-white tracking-tight">
                  {MOMENTS[0].title}
                </h3>
                <p className="text-muted-foreground mt-1">{MOMENTS[0].subtitle}</p>
              </div>
            </button>

            {/* Recap thumbnails */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {MOMENTS.slice(1).map((m, i) => (
                <button
                  key={i}
                  type="button"
                  className="group relative h-32 lg:h-[8.66rem] overflow-hidden rounded-lg border border-primary/15 hover:border-primary/50 transition-all bg-card text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <img src={m.img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
                  <div className="relative h-full flex items-center gap-3 p-4">
                    <div className="w-10 h-10 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-heading font-bold text-sm text-white tracking-wide line-clamp-1">{m.title}</div>
                      <div className="text-xs text-muted-foreground line-clamp-1">{m.subtitle} · {m.duration}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="outline" className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest">
              <a href="https://www.youtube.com/@EsportsIndiana" target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4 mr-2" /> Watch Highlights
              </a>
            </Button>
            <Button asChild variant="outline" className="border-primary/30 text-muted-foreground hover:text-primary hover:border-primary/60 font-heading tracking-widest">
              <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer">
                Twitch Archive <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* ALUMNI SPOTLIGHT                                                */}
      {/* ============================================================= */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Pathway"
            title="Alumni Spotlight"
            subtitle="Where IEN champions go next — colleges, careers, and creator economies."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {ALUMNI.map((a, i) => <AlumniCard key={i} alum={a} />)}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* CTA FOOTER                                                      */}
      {/* ============================================================= */}
      <section className="relative overflow-hidden py-24 md:py-32 border-t border-primary/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(212,175,55,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background:repeating-linear-gradient(135deg,transparent_0_22px,rgba(212,175,55,0.6)_22px_23px)]" />
        <Particles count={14} />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-primary/40 bg-primary/10 text-primary text-xs font-bold tracking-[0.25em] rounded-full uppercase">
            <Star className="w-3.5 h-3.5" /> Indiana Esports Network
          </div>
          <h2 className="font-heading font-bold text-5xl md:text-7xl text-white leading-[0.95] tracking-tight">
            LEGACY.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-primary to-yellow-300">PRIDE.</span>{" "}
            CHAMPIONS.
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Compete. Win. Be remembered.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest text-lg h-14 px-10 shadow-[0_0_40px_rgba(212,175,55,0.35)]"
            >
              <a href={ONBOARDING_URL} target="_blank" rel="noopener noreferrer">
                JOIN THE LEAGUE
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-heading tracking-widest text-lg h-14 px-10"
            >
              <Link href="/start-a-program">Start a Program</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// ---------------------------------------------------------------------------
// Local components
// ---------------------------------------------------------------------------

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="flex flex-col items-start gap-3 max-w-3xl">
      <div className="inline-flex items-center gap-2 text-primary font-heading font-bold tracking-[0.25em] text-xs uppercase">
        <span className="w-8 h-px bg-primary" /> {eyebrow}
      </div>
      <h2 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight tracking-tight">
        {title}
      </h2>
      <p className="text-muted-foreground text-base md:text-lg">{subtitle}</p>
    </div>
  );
}

function FilterSelect({
  label, value, options, onChange,
}: {
  label: string; value: string; options: string[]; onChange: (v: string) => void;
}) {
  const isActive = value !== ANY;
  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none bg-card border rounded-md pl-3 pr-9 h-10 text-xs font-heading font-bold tracking-widest uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer transition-colors ${
          isActive
            ? "border-primary text-primary"
            : "border-primary/25 text-muted-foreground hover:border-primary/50 hover:text-foreground"
        }`}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o === ANY ? `${label}: All` : `${label}: ${o}`}
          </option>
        ))}
      </select>
      <ChevronRight className={`absolute right-2.5 w-3.5 h-3.5 rotate-90 pointer-events-none ${isActive ? "text-primary" : "text-muted-foreground"}`} />
    </label>
  );
}

function FeaturedCard({ champion }: { champion: Champion }) {
  return (
    <div className="snap-start shrink-0 w-[20rem] md:w-[24rem] group relative bg-card border border-primary/20 rounded-xl overflow-hidden hover:border-primary/70 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(212,175,55,0.35)] transition-all duration-300">
      {/* Photo */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        {champion.photo ? (
          <img src={champion.photo} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-background flex items-center justify-center">
            <Trophy className="w-16 h-16 text-primary/40" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary text-primary-foreground text-[0.6rem] font-bold tracking-[0.2em] rounded-full uppercase">
          <Crown className="w-3 h-3" /> State Champions
        </div>
        <div className="absolute top-3 right-3 px-2.5 py-1 border border-primary/40 bg-background/80 backdrop-blur text-[0.6rem] font-bold tracking-[0.2em] rounded-full uppercase text-primary">
          {champion.division}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 shrink-0 rounded-md bg-background border border-primary/30 flex items-center justify-center overflow-hidden">
            {champion.logo
              ? <img src={champion.logo} alt={`${champion.school} logo`} className="w-full h-full object-contain p-1" />
              : <Trophy className="w-6 h-6 text-primary/60" />
            }
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-heading font-bold text-white text-lg leading-snug tracking-wide line-clamp-2">{champion.school}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{champion.city}</div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-primary/10 grid grid-cols-2 gap-3 text-xs">
          <div>
            <div className="tracking-widest uppercase text-muted-foreground/70 font-heading font-bold text-[0.6rem]">Title</div>
            <div className="text-foreground font-medium mt-0.5 truncate">{champion.game}</div>
          </div>
          <div>
            <div className="tracking-widest uppercase text-muted-foreground/70 font-heading font-bold text-[0.6rem]">Season</div>
            <div className="text-foreground font-medium mt-0.5">{champion.season}</div>
          </div>
        </div>
      </div>

      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.2),transparent_60%)]" />
    </div>
  );
}

function SeasonRow({ champion }: { champion: Champion }) {
  return (
    <div className="group flex items-center gap-3 p-3 bg-card border border-primary/10 rounded-lg hover:border-primary/40 hover:bg-card/80 transition-all">
      <div className="w-10 h-10 shrink-0 rounded-md bg-background border border-primary/20 flex items-center justify-center overflow-hidden">
        {champion.logo
          ? <img src={champion.logo} alt={`${champion.school} logo`} className="w-full h-full object-contain p-0.5" />
          : <Trophy className="w-4 h-4 text-primary/60" />
        }
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[0.65rem] tracking-widest uppercase font-heading font-bold text-primary">
          {champion.game} <span className="text-muted-foreground/60">· {champion.division}</span>
        </div>
        <div className="text-sm text-foreground font-semibold leading-tight truncate group-hover:text-primary transition-colors">
          {champion.school}
        </div>
      </div>
      <Crown className="w-4 h-4 text-primary/50 group-hover:text-primary shrink-0 transition-colors" />
    </div>
  );
}

function DynastyCard({ icon, label, entries }: { icon: React.ReactNode; label: string; entries: DynastyEntry[] }) {
  return (
    <div className="group bg-card border border-primary/15 rounded-xl p-6 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all">
      <div className="flex items-center gap-3 pb-4 border-b border-primary/10">
        <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {icon}
        </div>
        <div className="font-heading font-bold tracking-widest text-xs uppercase text-muted-foreground group-hover:text-primary transition-colors">
          {label}
        </div>
      </div>
      <ul className="mt-4 space-y-3">
        {entries.map((e, i) => (
          <li key={i} className="flex items-baseline gap-3">
            <span className="font-heading font-bold text-2xl text-primary leading-none w-12 shrink-0">{e.value}</span>
            <span className="flex-1 min-w-0">
              <span className="block text-sm text-foreground font-semibold leading-tight truncate">{e.school}</span>
              <span className="block text-[0.65rem] tracking-widest uppercase text-muted-foreground/70 font-heading font-bold mt-0.5">{e.metric}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AlumniCard({ alum }: { alum: { name: string; school: string; gradYear: string; role: string; org: string } }) {
  // Initials avatar — keeps the page asset-free for alumni until portraits are sourced.
  const initials = alum.name.split(" ").map(s => s[0]).join("").toUpperCase().slice(0, 2);
  return (
    <div className="group bg-card border border-primary/15 rounded-xl overflow-hidden hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(212,175,55,0.25)] transition-all duration-300">
      <div className="relative h-44 bg-gradient-to-br from-primary/15 via-card to-background flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.18),transparent_60%)]" />
        <div className="relative w-24 h-24 rounded-full bg-background border-2 border-primary/40 flex items-center justify-center font-heading font-bold text-3xl text-primary tracking-widest shadow-[0_0_30px_rgba(212,175,55,0.25)] group-hover:scale-105 transition-transform">
          {initials}
        </div>
      </div>
      <div className="p-5">
        <div className="font-heading font-bold text-lg text-white tracking-wide">{alum.name}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{alum.school} · Class of {alum.gradYear}</div>
        <div className="mt-4 pt-4 border-t border-primary/10">
          <div className="text-[0.6rem] tracking-widest uppercase text-primary font-heading font-bold">{alum.role}</div>
          <div className="text-sm text-foreground/90 leading-tight mt-1">{alum.org}</div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Decorative — Trophy showpiece + floating particles
// ---------------------------------------------------------------------------

function TrophyShowpiece() {
  return (
    <div className="relative w-[20rem] h-[24rem] md:w-[26rem] md:h-[30rem]">
      {/* Pedestal glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.5),transparent_60%)] blur-2xl" />
      {/* Backdrop circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-80 h-72 md:h-80 rounded-full border border-primary/20 bg-[radial-gradient(circle,rgba(212,175,55,0.12),transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-primary/30" />

      <motion.svg
        viewBox="0 0 200 240"
        className="relative w-full h-full drop-shadow-[0_0_40px_rgba(212,175,55,0.45)]"
        initial={{ y: 8 }}
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="goldFace" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#fde9a4" />
            <stop offset="40%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#7a5a14" />
          </linearGradient>
          <linearGradient id="goldRim" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"  stopColor="#a07810" />
            <stop offset="50%" stopColor="#f6e07a" />
            <stop offset="100%" stopColor="#a07810" />
          </linearGradient>
        </defs>

        {/* Handles */}
        <path d="M50 80 Q 18 90 18 130 Q 18 170 60 165" fill="none" stroke="url(#goldRim)" strokeWidth="6" strokeLinecap="round" />
        <path d="M150 80 Q 182 90 182 130 Q 182 170 140 165" fill="none" stroke="url(#goldRim)" strokeWidth="6" strokeLinecap="round" />

        {/* Cup */}
        <path d="M40 60 H160 V130 Q 100 195 40 130 Z" fill="url(#goldFace)" stroke="url(#goldRim)" strokeWidth="3" />
        {/* Rim */}
        <rect x="36" y="54" width="128" height="14" rx="3" fill="url(#goldRim)" />
        {/* Star plate */}
        <circle cx="100" cy="105" r="22" fill="#0d1828" stroke="url(#goldRim)" strokeWidth="2" />
        <path d="M100 88 L105 100 L118 101 L108 110 L111 123 L100 116 L89 123 L92 110 L82 101 L95 100 Z" fill="url(#goldFace)" />

        {/* Stem */}
        <path d="M88 195 H112 V205 H88 Z" fill="url(#goldRim)" />
        {/* Base */}
        <rect x="60" y="205" width="80" height="14" rx="3" fill="url(#goldFace)" stroke="url(#goldRim)" strokeWidth="2" />
        <rect x="50" y="219" width="100" height="10" rx="2" fill="url(#goldRim)" />
      </motion.svg>

      {/* Light rays */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] [background:conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(212,175,55,0.18)_30deg,transparent_60deg,transparent_180deg,rgba(212,175,55,0.18)_210deg,transparent_240deg)] animate-spin [animation-duration:30s]" />
      </div>
    </div>
  );
}

function Particles({ count = 22 }: { count?: number }) {
  // Deterministic-ish positioning with simple offsets (no SSR mismatch concern;
  // this is a Vite SPA). Particles drift on a slow loop via framer.
  const seeds = Array.from({ length: count }, (_, i) => i);
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {seeds.map((i) => {
        const left  = (i * 53) % 100;
        const top   = (i * 37) % 100;
        const size  = 2 + (i % 4);
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
