import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Trophy, Users, Gamepad2, Star, Calendar, FileText } from "lucide-react";
import imsenLogo from "@assets/IMSEN_Wordmark.png";
import { ONBOARDING_URL } from "@/lib/socialLinks";

const GAME_RULESETS_HREF = "/documents/ien-bylaws-general-rules-2025-26.pdf#page=24";

const games = [
  { name: "Rocket League",       type: "Varsity + Club", color: "text-blue-400",   border: "border-blue-500/50",   roster: "3 starters | 2 subs",  platform: "Cross-platform" },
  { name: "Super Smash Bros.",   type: "Varsity + Club", color: "text-pink-400",   border: "border-pink-500/50",   roster: "4 starters | 2 subs",  platform: "Nintendo Switch" },
  { name: "Fortnite",            type: "Varsity + Club", color: "text-purple-400", border: "border-purple-500/50", roster: "3 starters | 2 subs",  platform: "Cross-platform" },
  { name: "Minecraft",           type: "Varsity",        color: "text-green-400",  border: "border-green-500/50",  roster: "Varies by format",     platform: "PC" },
  { name: "Marvel Rivals",       type: "Varsity + Club", color: "text-rose-400",   border: "border-rose-500/50",   roster: "6 starters | 2 subs",  platform: "PC" },
  { name: "Mario Kart 8 Deluxe", type: "Club",           color: "text-red-300",    border: "border-red-600/50",    roster: "4 starters | 2 subs",  platform: "Nintendo Switch" },
  { name: "Chess",               type: "Club+",          color: "text-gray-300",   border: "border-gray-400/50",   roster: "Board-style format",   platform: "Chess.com" },
  { name: "Tetris",              type: "Club+",          color: "text-cyan-400",   border: "border-cyan-500/50",   roster: "Individual / team",    platform: "Jstris / TETR.IO" },
];

const highlights = [
  { icon: Star,     title: "Grades 6–8",           desc: "Purpose-built for middle schoolers, building fundamentals and sportsmanship from the start." },
  { icon: Gamepad2, title: "8 Game Titles",         desc: "A focused selection of titles that are accessible and competitive at the middle school level." },
  { icon: Users,    title: "Varsity & Club",        desc: "Multiple tiers of competition so every school can participate regardless of experience." },
  { icon: Trophy,   title: "Championship Play",     desc: "Varsity teams compete in playoffs and postseason events to crown Indiana's best middle school programs." },
];

export default function IMSEN() {
  return (
    <Layout>
      <SEO
        title="IMSEN — Middle School"
        description="Indiana Middle School Esports Network. Competitive scholastic esports for grades 6–8 across multiple titles, finishing at IMSEN State Finals."
        path="/leagues/imsen"
      />

      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <img
              src={imsenLogo}
              alt="IMSEN Logo"
              className="h-32 w-auto object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight">
              INDIANA MIDDLE SCHOOL ESPORTS
            </h1>
            <p className="text-xl text-primary mb-6 font-heading tracking-widest">
              INDIANA MIDDLE SCHOOL ESPORTS NETWORK · GRADES 6–8
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Building the foundation of scholastic esports in Indiana: a developmental league focused on sportsmanship, digital citizenship, and competitive growth for middle schoolers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card border border-primary/20 p-6 rounded-xl text-center hover:border-primary hover:-translate-y-1 transition-all"
              >
                <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-heading font-bold text-lg text-white mb-2">{h.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-8 pb-16 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">Competition Tiers</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background border-2 border-primary p-8 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <h3 className="font-heading font-bold text-2xl text-primary mb-4">Varsity</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                The school's top team in each title. Varsity teams compete for playoff seeding and earn the right to play for IMSEN championships at Fall and Spring Finals.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex gap-2"><span className="text-primary">✓</span> Eligible for playoffs and IMSEN Finals</li>
                <li className="flex gap-2"><span className="text-primary">✓</span> One varsity team per game title per school</li>
                <li className="flex gap-2"><span className="text-primary">✓</span> New schools must play Club for 1 semester first</li>
              </ul>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 text-sm text-primary font-medium">
                School registration through LeagueOS, contact IEN for middle school pricing
              </div>
            </div>
            <div className="bg-background border border-primary/30 p-8 rounded-xl">
              <h3 className="font-heading font-bold text-2xl text-white mb-4">Club</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Lower-stakes competition with no limit on the number of club teams per school. Club+ titles run their own spring championship bracket.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">✓</span> Unlimited club teams per title</li>
                <li className="flex gap-2"><span className="text-primary">✓</span> Required for all new schools' first semester</li>
                <li className="flex gap-2"><span className="text-primary">✓</span> Club players can sub for varsity during regular season</li>
                <li className="flex gap-2"><span className="text-primary">✓</span> Club+ divisions have their own spring championship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">Game Titles</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <p className="text-center text-muted-foreground text-sm mb-10">
          All 8 IMSEN titles, selected for accessibility and competitive depth at the middle school level
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {games.map((game, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              className={`bg-card border ${game.border} p-5 rounded-xl hover:bg-background transition-colors`}
            >
              <div className="mb-3">
                <h4 className={`font-heading font-bold text-base ${game.color}`}>{game.name}</h4>
                <span className="text-xs text-muted-foreground">{game.type}</span>
              </div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>Roster</span>
                  <span className="text-white/70">{game.roster}</span>
                </div>
                <div className="flex justify-between">
                  <span>Platform</span>
                  <span className="text-white/70">{game.platform}</span>
                </div>
              </div>
              <a
                href={GAME_RULESETS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-heading font-bold tracking-[0.16em] text-primary hover:text-yellow-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                <FileText className="w-3.5 h-3.5" aria-hidden />
                VIEW RULESET
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">Season Structure</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { phase: "Fall Season", dates: "Aug – Dec", desc: "Registration opens in August. Weekly regular season matches run through the fall, managed through LeagueOS. New schools play at club level to build experience." },
              { phase: "Fall Finals", dates: "December", desc: "Fall postseason concludes the semester. Top teams from the fall regular season compete in a championship bracket to crown Fall Finals champions." },
              { phase: "Spring Season", dates: "Jan – Apr", desc: "Season resumes in January with a new slate of regular season matches. Varsity playoff seeding is determined by regular season record." },
              { phase: "Spring Finals", dates: "April", desc: "Top middle school teams compete for IMSEN Spring championships across each game title, crowning Indiana's best at an in-person finals event." },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-background border border-primary/20 p-6 rounded-xl hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-white">{s.phase}</h4>
                    <span className="text-xs text-primary">{s.dates}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Start Your Middle School Program</h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Any Indiana middle school can join IMSEN. Register on LeagueOS or reach out, we'll walk you through everything from forming a roster to scheduling your first match.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-14 px-8 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            asChild
          >
            <a href={ONBOARDING_URL} target="_blank" rel="noopener noreferrer">JOIN THE LEAGUE</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest h-14 px-8"
            asChild
          >
            <Link href="/leagues#rules-resources">
              <FileText className="w-4 h-4 mr-2" />
              RULES &amp; RESOURCES
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
