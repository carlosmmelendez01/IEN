import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import {
  RulesDialog,
  defaultTabForGame,
} from "@/components/rulesets/RulesetQuickView";
import {
  getRulesetGame,
  type LeagueKey,
  type RulesTab,
  type RulesetGame,
} from "@/data/gameRules";
import ihsenLogo from "@assets/IEN_IHSEN White Text.png";
import imsenLogo from "@assets/IEN_IMSEN White Text .png";
import iuenLogo from "@assets/IEN_IUEN White Text.png";

const ihsenGames = [
  { name: "Valorant", type: "Varsity 1A/2A + Club", color: "border-red-500/60 text-red-400" },
  { name: "Apex Legends", type: "Varsity 1A/2A + Club", color: "border-purple-500/60 text-purple-400" },
  { name: "Rocket League", type: "Varsity 1A/2A + Club", color: "border-blue-500/60 text-blue-400" },
  { name: "Overwatch 2", type: "Varsity 1A/2A + Club", color: "border-orange-500/60 text-orange-400" },
  { name: "Super Smash Bros.", type: "Varsity 1A/2A + Club", color: "border-pink-500/60 text-pink-400" },
  { name: "Mario Kart 8 Deluxe", type: "Varsity 1A/2A + Club", color: "border-red-600/60 text-red-300" },
  { name: "Minecraft", type: "Varsity 1A/2A", color: "border-green-500/60 text-green-400" },
  { name: "Marvel Rivals", type: "Varsity 1A/2A + Club", color: "border-rose-500/60 text-rose-400" },
  { name: "Chess", type: "Tournament", color: "border-gray-400/60 text-gray-300" },
  { name: "Tetris", type: "Tournament", color: "border-cyan-500/60 text-cyan-400" },
  { name: "iRacing", type: "Tournament", color: "border-amber-500/60 text-amber-400" },
];

const imsenGames = [
  { name: "Rocket League", type: "Varsity + Club", color: "border-blue-500/60 text-blue-400" },
  { name: "Super Smash Bros.", type: "Varsity + Club", color: "border-pink-500/60 text-pink-400" },
  { name: "Fortnite", type: "Varsity + Club", color: "border-purple-500/60 text-purple-400" },
  { name: "Minecraft", type: "Varsity", color: "border-green-500/60 text-green-400" },
  { name: "Marvel Rivals", type: "Varsity + Club", color: "border-rose-500/60 text-rose-400" },
  { name: "Mario Kart 8 Deluxe", type: "Varsity + Club", color: "border-red-600/60 text-red-300" },
  { name: "Chess", type: "Tournament", color: "border-gray-400/60 text-gray-300" },
  { name: "Tetris", type: "Tournament", color: "border-cyan-500/60 text-cyan-400" },
];

const iuenGames = [
  { name: "Rocket League", color: "border-blue-500/60 text-blue-400" },
  { name: "Super Smash Bros.", color: "border-pink-500/60 text-pink-400" },
];

function GameTile({
  name,
  type,
  color,
  index,
  onRulesClick,
}: {
  name: string;
  type?: string;
  color: string;
  index: number;
  onRulesClick?: () => void;
}) {
  const [borderClass, textClass] = color.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      className={`bg-card border ${borderClass} p-4 rounded-xl flex flex-col items-center justify-between text-center shadow-lg hover:bg-background transition-colors gap-2`}
    >
      <div className="flex flex-col items-center gap-1">
        <span className={`font-heading font-bold text-base md:text-lg ${textClass} leading-tight`}>{name}</span>
        {type && <span className="text-sm text-muted-foreground">{type}</span>}
      </div>
      {onRulesClick && (
        <button
          type="button"
          onClick={onRulesClick}
          className="mt-1 inline-flex items-center gap-1.5 rounded-md border border-primary/30 px-2.5 py-1.5 text-[0.65rem] font-heading font-bold tracking-[0.16em] text-primary hover:bg-primary hover:text-primary-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-haspopup="dialog"
        >
          <FileText className="w-3.5 h-3.5" aria-hidden />
          RULESET
        </button>
      )}
    </motion.div>
  );
}

export default function Leagues() {
  const [location] = useLocation();
  const [selectedRuleset, setSelectedRuleset] = useState<RulesetGame | null>(null);
  const [activeRulesTab, setActiveRulesTab] = useState<RulesTab>("quick");
  const [hash, setHash] = useState<string>(() =>
    typeof window !== "undefined" ? window.location.hash : "",
  );
  const openRuleset = (gameNameOrRuleset: string | RulesetGame, league: LeagueKey = "ihsen") => {
    const game =
      typeof gameNameOrRuleset === "string"
        ? getRulesetGame(gameNameOrRuleset, league)
        : gameNameOrRuleset;
    setSelectedRuleset(game);
    setActiveRulesTab(defaultTabForGame(game));
  };
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    onHashChange();
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [location]);
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
    return () => clearTimeout(t);
  }, [location, hash]);

  return (
    <Layout>
      <SEO
        title="Leagues"
        description="IEN operates three scholastic esports leagues: IHSEN (high school), IMSEN (middle school), and IUEN (unified). 12+ game titles across Indiana."
        path="/leagues"
      />

      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-card">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight drop-shadow-lg">
              IEN{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                LEAGUES
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 font-light">
              Three Competitive Divisions of Scholastic Esports Since 2019
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The Indiana Esports Network offers competitive esports leagues for middle school, high
              school, and unified programs across Indiana. Select your league below to learn more.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "IHSEN",
              subtitle: "Indiana High School Esports Network",
              desc: "Our flagship division featuring varsity and club competition for high schools across the state. Compete for Indiana state championships in 11 game titles. Open to grades 9–12.",
              link: "/leagues/ihsen",
              logo: ihsenLogo,
            },
            {
              title: "IMSEN",
              subtitle: "Indiana Middle School Esports Network",
              desc: "Building the foundation of scholastic esports. A developmental league focused on sportsmanship, digital citizenship, and competitive fundamentals. Open to grades 6–8.",
              link: "/leagues/imsen",
              logo: imsenLogo,
            },
            {
              title: "IUEN",
              subtitle: "Indiana Unified Esports Network",
              desc: "In partnership with Indiana Special Olympics, IUEN provides competitive esports for students with and without intellectual disabilities, competing together as teammates.",
              link: "/leagues/iuen",
              logo: iuenLogo,
            },
          ].map((league, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-primary/30 p-8 rounded-xl flex flex-col items-center text-center shadow-lg hover:border-primary transition-all hover:-translate-y-1"
            >
              <img
                src={league.logo}
                alt={`${league.title} logo`}
                className="w-full max-w-xs h-20 object-contain mb-6 drop-shadow-[0_0_20px_rgba(212,175,55,0.25)]"
              />
              <p className="text-primary text-sm font-medium mb-4">{league.subtitle}</p>
              <p className="text-muted-foreground text-sm mb-8 flex-grow">{league.desc}</p>
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest"
                asChild
              >
                <Link href={league.link}>LEARN MORE</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
              Competition Formats
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-background border-2 border-primary p-8 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <h3 className="font-heading font-bold text-2xl text-primary mb-4">Varsity</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                The school's highest level team in a game. Varsity leads to postseason competition and
                the IEN State Finals. Each school may have at most one varsity team per title.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span> Eligible for playoffs and State Finals
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span> One varsity team per game title per school
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span> New schools must play Club level for 1
                  semester first
                </li>
              </ul>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 text-sm text-primary font-medium">
                $100 annual Varsity fee per school (covers all varsity teams)
              </div>
            </div>
            <div className="bg-background border border-primary/30 p-8 rounded-xl">
              <h3 className="font-heading font-bold text-2xl text-white mb-4">Club</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Any school team that wants to compete but is not the varsity team. Schools may enter
                multiple club teams to give more students a chance to play.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span> Multiple club teams allowed per title
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span> Required for all new schools' first semester
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span> Club players can sub for varsity during
                  regular season
                </li>
              </ul>
            </div>
            <div className="bg-background border border-primary/30 p-8 rounded-xl">
              <h3 className="font-heading font-bold text-2xl text-white mb-4">Tournament</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Individual head-to-head titles with weekly match days. Players check in on LeagueOS during
                the match window and are paired with an available opponent. No fixed team rosters required.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span> Individual play, not team-based
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span> Weekly match days throughout the season
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span> LeagueOS check-in pairs you with an opponent
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span> IHSEN: Chess · Tetris · iRacing
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span> IMSEN: Chess · Tetris
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="game-titles" className="py-16 container mx-auto px-4 scroll-mt-20">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
            IHSEN Game Titles
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <p className="text-center text-muted-foreground text-sm mb-10">
          Games offered by the Indiana High School Esports Network (Grades 9–12)
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {ihsenGames.map((game, i) => (
            <GameTile
              key={i}
              index={i}
              name={game.name}
              type={game.type}
              color={game.color}
              onRulesClick={() => openRuleset(game.name, "ihsen")}
            />
          ))}
        </div>
      </section>

      <section className="py-4 pb-16 container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
            IMSEN Game Titles
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <p className="text-center text-muted-foreground text-sm mb-10">
          Games offered by the Indiana Middle School Esports Network (Grades 6–8)
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {imsenGames.map((game, i) => (
            <GameTile
              key={i}
              index={i}
              name={game.name}
              type={game.type}
              color={game.color}
              onRulesClick={() => openRuleset(game.name, "imsen")}
            />
          ))}
        </div>
      </section>

      <section className="py-16 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
              Unified Program
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Esports for Everyone
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                IEN's Unified program creates competitive gaming opportunities for students with
                intellectual disabilities, competing alongside Unified partners, students without
                intellectual disabilities who participate in a fun and meaningful way.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                This program embodies IEN's core value of inclusivity: Gaming is for everyone, and
                all students deserve to feel welcome, valued, and competitive.
              </p>
              <div className="space-y-3">
                <h4 className="font-heading font-bold text-primary uppercase tracking-wider text-sm mb-4">
                  Unified Game Titles
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {iuenGames.map((game, i) => (
                    <GameTile
                      key={i}
                      index={i}
                      name={game.name}
                      color={game.color}
                      onRulesClick={() => openRuleset(game.name, "iuen")}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background border border-primary/20 p-6 rounded-xl text-center hover:border-primary transition-colors">
                <div className="text-3xl mb-2">🤝</div>
                <h4 className="font-heading font-bold text-white text-sm mb-2">Unified Athletes</h4>
                <p className="text-xs text-muted-foreground">
                  Students with intellectual disabilities actively competing in training and matches
                </p>
              </div>
              <div className="bg-background border border-primary/20 p-6 rounded-xl text-center hover:border-primary transition-colors">
                <div className="text-3xl mb-2">⭐</div>
                <h4 className="font-heading font-bold text-white text-sm mb-2">Unified Partners</h4>
                <p className="text-xs text-muted-foreground">
                  Students without disabilities who compete alongside athletes in a meaningful way
                </p>
              </div>
              <div className="col-span-2 bg-background border border-primary/20 p-6 rounded-xl text-center hover:border-primary transition-colors">
                <div className="text-3xl mb-2">🏆</div>
                <h4 className="font-heading font-bold text-white text-sm mb-2">
                  True Inclusion in Competitive Gaming
                </h4>
                <p className="text-xs text-muted-foreground">
                  Unified teams compete in official IEN matches with structured rules, just like
                  every other team in the league
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto rounded-lg border border-primary/30 bg-card p-6 md:p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Looking for rules and policies?
          </h2>
          <p className="text-muted-foreground leading-7 mb-8">
            Official rulebooks, ruleset status, policy documents, and LeagueOS
            guidance now live on the Rules & Policies page.
          </p>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest"
            asChild
          >
            <Link href="/rules-policies">
              <FileText className="w-4 h-4 mr-2" />
              RULES &amp; POLICIES
            </Link>
          </Button>
        </div>
      </section>

      {selectedRuleset && (
        <RulesDialog
          activeTab={activeRulesTab}
          game={selectedRuleset}
          onClose={() => setSelectedRuleset(null)}
          onTabChange={setActiveRulesTab}
        />
      )}
    </Layout>
  );
}
