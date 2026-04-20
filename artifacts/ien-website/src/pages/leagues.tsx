import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";
import ihsenLogo from "@assets/IEN-02_1776709337186.png";
import imsenLogo from "@assets/IEN-03_1776709337186.png";
import iuenLogo from "@assets/IEN-04_1776709327213.png";

const ihsenGames = [
  { name: "Valorant", type: "Varsity + Club", color: "border-red-500/60 text-red-400" },
  { name: "Fortnite", type: "Varsity + Club", color: "border-purple-500/60 text-purple-400" },
  { name: "Rocket League", type: "Varsity + Club", color: "border-blue-500/60 text-blue-400" },
  { name: "League of Legends", type: "Varsity + Club", color: "border-yellow-500/60 text-yellow-400" },
  { name: "Overwatch 2", type: "Varsity + Club", color: "border-orange-500/60 text-orange-400" },
  { name: "Super Smash Bros.", type: "Varsity + Club", color: "border-pink-500/60 text-pink-400" },
  { name: "Mario Kart 8 Deluxe", type: "Varsity + Club", color: "border-red-600/60 text-red-300" },
  { name: "Minecraft", type: "Varsity", color: "border-green-500/60 text-green-400" },
  { name: "Marvel Rivals", type: "Varsity + Club", color: "border-rose-500/60 text-rose-400" },
  { name: "Chess", type: "Club+", color: "border-gray-400/60 text-gray-300" },
  { name: "Tetris", type: "Club+", color: "border-cyan-500/60 text-cyan-400" },
  { name: "iRacing", type: "Club+", color: "border-amber-500/60 text-amber-400" },
];

const imsenGames = [
  { name: "Rocket League", type: "Varsity + Club", color: "border-blue-500/60 text-blue-400" },
  { name: "Super Smash Bros.", type: "Varsity + Club", color: "border-pink-500/60 text-pink-400" },
  { name: "Fortnite", type: "Varsity + Club", color: "border-purple-500/60 text-purple-400" },
  { name: "Minecraft", type: "Varsity", color: "border-green-500/60 text-green-400" },
  { name: "Marvel Rivals", type: "Varsity + Club", color: "border-rose-500/60 text-rose-400" },
  { name: "Mario Kart 8 Deluxe", type: "Club", color: "border-red-600/60 text-red-300" },
  { name: "Chess", type: "Club+", color: "border-gray-400/60 text-gray-300" },
  { name: "Tetris", type: "Club+", color: "border-cyan-500/60 text-cyan-400" },
];

const iuenGames = [
  { name: "Rocket League", color: "border-blue-500/60 text-blue-400" },
  { name: "Super Smash Bros.", color: "border-pink-500/60 text-pink-400" },
];

const resources = [
  {
    title: "General IEN Rulebook",
    desc: "Core rules, eligibility, and conduct standards for all IEN leagues.",
    // TODO: Replace with real PDF URL when available
    href: "#",
    downloadable: false,
  },
  {
    title: "IHSEN Rulebook",
    desc: "Competition rules for the Indiana High School Esports Network.",
    // TODO: Replace with real PDF URL when available
    href: "#",
    downloadable: false,
  },
  {
    title: "IMSEN Rulebook",
    desc: "Competition rules for the Indiana Middle School Esports Network.",
    // TODO: Replace with real PDF URL when available
    href: "#",
    downloadable: false,
  },
  {
    title: "IUEN Rulebook",
    desc: "Rules and guidelines for the Indiana Unified Esports Network.",
    // TODO: Replace with real PDF URL when available
    href: "#",
    downloadable: false,
  },
  {
    title: "LeagueOS Platform Guide",
    desc: "How to register, manage rosters, and navigate the LeagueOS platform.",
    href: "https://leagueos.gg",
    downloadable: false,
    external: true,
  },
  {
    title: "Code of Conduct",
    desc: "Expected behavior standards for all players, coaches, and school staff.",
    // TODO: Replace with real PDF URL when available
    href: "#",
    downloadable: false,
  },
];

function GameTile({
  name,
  type,
  color,
  rulebookHref,
  index,
}: {
  name: string;
  type?: string;
  color: string;
  rulebookHref: string;
  index: number;
}) {
  const [borderClass, textClass] = color.split(" ");
  const isPlaceholder = rulebookHref === "#";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      className={`bg-card border ${borderClass} p-4 rounded-xl flex flex-col items-center justify-between text-center shadow-lg hover:bg-background transition-colors gap-2`}
    >
      <div className="flex flex-col items-center gap-1">
        <span className={`font-heading font-bold text-sm ${textClass} leading-tight`}>{name}</span>
        {type && <span className="text-xs text-muted-foreground">{type}</span>}
      </div>
      <a
        href={rulebookHref}
        target={isPlaceholder ? undefined : "_blank"}
        rel={isPlaceholder ? undefined : "noopener noreferrer"}
        onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
        title={isPlaceholder ? "Rulebook coming soon" : `${name} rules`}
        className={`text-xs font-heading tracking-wide flex items-center gap-0.5 transition-colors ${
          isPlaceholder
            ? "text-muted-foreground/40 cursor-default"
            : "text-primary hover:text-primary/80"
        }`}
      >
        Rules ↗
      </a>
    </motion.div>
  );
}

export default function Leagues() {
  return (
    <Layout>
      {/* Hero Section */}
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

      {/* Leagues Cards */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "IHSEN",
              subtitle: "Indiana High School Esports Network",
              desc: "Our flagship division featuring varsity and club competition for high schools across the state. Compete for Indiana state championships in 12 game titles. Open to grades 9–12.",
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
              desc: "In partnership with Indiana Special Olympics, IUEN provides competitive esports for students with and without intellectual disabilities — competing together as teammates.",
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
                className="w-48 h-20 object-contain mb-6"
              />
              <h3 className="font-heading font-bold text-xl mb-2 text-white">{league.title}</h3>
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

      {/* Varsity vs Club */}
      <section className="py-16 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-2xl">
              Varsity vs Club
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                multiple club teams. Club+ titles also have playoff and championship events in the
                spring.
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
                <li className="flex gap-2">
                  <span className="text-primary">✓</span> Club+ divisions have their own spring
                  championship
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IHSEN Game Titles */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-2xl">
            IHSEN Game Titles
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <p className="text-center text-muted-foreground text-sm mb-10">
          Games offered by the Indiana High School Esports Network (Grades 9–12)
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {ihsenGames.map((game, i) => (
            // TODO: Replace rulebookHref="#" with IHSEN per-game rulebook PDF URL when available
            <GameTile
              key={i}
              index={i}
              name={game.name}
              type={game.type}
              color={game.color}
              rulebookHref="#"
            />
          ))}
        </div>
      </section>

      {/* IMSEN Game Titles */}
      <section className="py-4 pb-16 container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-2xl">
            IMSEN Game Titles
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <p className="text-center text-muted-foreground text-sm mb-10">
          Games offered by the Indiana Middle School Esports Network (Grades 6–8)
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {imsenGames.map((game, i) => (
            // TODO: Replace rulebookHref="#" with IMSEN per-game rulebook PDF URL when available
            <GameTile
              key={i}
              index={i}
              name={game.name}
              type={game.type}
              color={game.color}
              rulebookHref="#"
            />
          ))}
        </div>
      </section>

      {/* Unified Program */}
      <section className="py-16 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-2xl">
              Unified Program
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-heading font-bold text-white mb-6">
                Esports for Everyone
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                IEN's Unified program creates competitive gaming opportunities for students with
                intellectual disabilities, competing alongside Unified partners — students without
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
                    // TODO: Replace rulebookHref="#" with IUEN rulebook PDF URL when available
                    <GameTile
                      key={i}
                      index={i}
                      name={game.name}
                      color={game.color}
                      rulebookHref="#"
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
                  Unified teams compete in official IEN matches with structured rules — just like
                  every other team in the league
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Resources */}
      <section className="py-16 container mx-auto px-4" id="rules-resources">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-2xl">
            Rules &amp; Resources
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <p className="text-center text-muted-foreground text-sm mb-10">
          Official rulebooks, platform guides, and policy documents for coaches, administrators, and players
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {resources.map((res, i) => {
            const isPlaceholder = res.href === "#";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="bg-card border border-primary/20 rounded-xl p-6 flex flex-col gap-4 hover:border-primary transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-sm leading-snug">
                      {res.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{res.desc}</p>
                  </div>
                </div>

                {isPlaceholder ? (
                  <div className="mt-auto text-xs text-muted-foreground/50 italic font-medium">
                    Coming soon — contact{" "}
                    <a
                      href="mailto:info@indianaesportsnetwork.org"
                      className="text-primary/60 hover:text-primary underline underline-offset-2"
                    >
                      info@indianaesportsnetwork.org
                    </a>{" "}
                    for current rules
                  </div>
                ) : (
                  <a
                    href={res.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-2 text-xs font-heading font-bold text-primary tracking-wide hover:text-primary/80 transition-colors"
                  >
                    {res.external ? (
                      <>
                        <ExternalLink className="w-3.5 h-3.5" />
                        OPEN PLATFORM
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        DOWNLOAD PDF
                      </>
                    )}
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Season Calendar downloads — real PDFs */}
        <div className="mt-10 max-w-5xl mx-auto">
          <h3 className="font-heading font-bold text-primary uppercase tracking-widest text-sm mb-4 text-center">
            Season Calendars
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "IHSEN 2026–27 Calendar", href: "/IHSEN_Calendar_2026-2027.pdf" },
              { label: "IMSEN 2026–27 Calendar", href: "/IMSEN_Calendar_2026-2027.pdf" },
              { label: "IUEN 2026–27 Calendar", href: "/IUEN_Calendar_2026-2027.pdf" },
            ].map((cal, i) => (
              <a
                key={i}
                href={cal.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 bg-card border border-primary/20 hover:border-primary px-5 py-4 rounded-xl transition-colors group"
              >
                <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">
                  {cal.label}
                </span>
                <Download className="w-4 h-4 text-primary shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Season Format */}
      <section className="py-16 container mx-auto px-4 mb-20">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-sm">
            Season Format
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <p className="text-center text-muted-foreground text-sm mb-10">
          Fall and Spring seasons concluding with live LAN events
        </p>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2 rounded-full" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Fall Season", subtitle: "Online Competition", date: "Oct – Dec" },
              { title: "Spring Season", subtitle: "Online Competition", date: "Feb – Apr" },
              { title: "Regional LANs", subtitle: "In-Person Qualifiers", date: "Late April" },
              { title: "IEN State Finals", subtitle: "Live Championship Event", date: "Mid May" },
            ].map((step, i) => (
              <div
                key={i}
                className="relative z-10 bg-card border border-primary/30 p-6 rounded-xl text-center shadow-lg hover:border-primary transition-colors group"
              >
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center rounded-full font-bold font-heading">
                  {i + 1}
                </div>
                <div className="text-primary text-sm font-bold mb-2">{step.date}</div>
                <h3 className="font-heading font-bold text-xl text-white mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
