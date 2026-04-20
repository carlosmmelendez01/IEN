import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ihsenLogo from "@assets/IEN-02_1776709337186.png";
import imsenLogo from "@assets/IEN-03_1776709337186.png";
import iuenLogo from "@assets/IEN-04_1776709327213.png";

const ihsenGames = [
  { name: "Valorant", type: "Varsity + Club", roster: "5 starters | 5 subs", color: "border-red-500/60 text-red-400" },
  { name: "Fortnite", type: "Varsity + Club", roster: "4 starters | 2 subs", color: "border-purple-500/60 text-purple-400" },
  { name: "Rocket League", type: "Varsity + Club", roster: "3 starters | 2 subs", color: "border-blue-500/60 text-blue-400" },
  { name: "League of Legends", type: "Varsity + Club", roster: "5 starters | 5 subs", color: "border-yellow-500/60 text-yellow-400" },
  { name: "Overwatch 2", type: "Varsity + Club", roster: "5 starters | 4 subs", color: "border-orange-500/60 text-orange-400" },
  { name: "Super Smash Bros.", type: "Varsity + Club", roster: "4 starters | 2 subs", color: "border-pink-500/60 text-pink-400" },
  { name: "Mario Kart 8 Deluxe", type: "Varsity + Club", roster: "4 starters | 2 subs", color: "border-red-600/60 text-red-300" },
  { name: "Minecraft", type: "Varsity", roster: "5 starters | 2 subs", color: "border-green-500/60 text-green-400" },
  { name: "Marvel Rivals", type: "Varsity + Club", roster: "6 starters | 4 subs", color: "border-rose-500/60 text-rose-400" },
  { name: "Chess", type: "Club+", roster: "Unlimited", color: "border-gray-400/60 text-gray-300" },
  { name: "Tetris", type: "Club+", roster: "Unlimited", color: "border-cyan-500/60 text-cyan-400" },
  { name: "iRacing", type: "Club+", roster: "5 racers", color: "border-amber-500/60 text-amber-400" },
];

const imsenGames = [
  { name: "Rocket League", type: "Varsity + Club", roster: "3 starters | 2 subs", color: "border-blue-500/60 text-blue-400" },
  { name: "Super Smash Bros.", type: "Varsity + Club", roster: "4 starters | 2 subs", color: "border-pink-500/60 text-pink-400" },
  { name: "Fortnite", type: "Varsity + Club", roster: "4 starters | 2 subs", color: "border-purple-500/60 text-purple-400" },
  { name: "Minecraft", type: "Varsity", roster: "5 starters | 2 subs", color: "border-green-500/60 text-green-400" },
  { name: "Marvel Rivals", type: "Varsity + Club", roster: "6 starters | 4 subs", color: "border-rose-500/60 text-rose-400" },
  { name: "Mario Kart 8 Deluxe", type: "Club", roster: "4 starters | 2 subs", color: "border-red-600/60 text-red-300" },
  { name: "Chess", type: "Club+", roster: "Unlimited", color: "border-gray-400/60 text-gray-300" },
  { name: "Tetris", type: "Club+", roster: "Unlimited", color: "border-cyan-500/60 text-cyan-400" },
];

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
              IEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">LEAGUES</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 font-light">
              Three Competitive Divisions of Scholastic Esports Since 2019
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The Indiana Esports Network offers competitive esports leagues for middle school, high school, and collegiate programs across the state. Select your league below to learn more.
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
              desc: "Our flagship division featuring varsity and junior varsity competition for high schools across the state. Compete for state championships and collegiate recruitment opportunities. Open to grades 9–12.",
              link: "/leagues/ihsen",
              logo: ihsenLogo
            },
            {
              title: "IMSEN",
              subtitle: "Indiana Middle School Esports Network",
              desc: "Building the foundation of scholastic esports. A developmental league focused on sportsmanship, digital citizenship, and competitive fundamentals. Open to grades 6–8.",
              link: "/leagues/imsen",
              logo: imsenLogo
            },
            {
              title: "IUEN",
              subtitle: "Indiana University Esports Network",
              desc: "Premier collegiate competition featuring university programs. Bridging the gap between high school talent and collegiate scholarship opportunities.",
              link: "/leagues/iuen",
              logo: iuenLogo
            }
          ].map((league, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-primary/30 p-8 rounded-xl flex flex-col items-center text-center shadow-lg hover:border-primary transition-all hover:-translate-y-1"
            >
              <img src={league.logo} alt={`${league.title} logo`} className="w-48 h-20 object-contain mb-6" />
              <h3 className="font-heading font-bold text-xl mb-2 text-white">{league.title}</h3>
              <p className="text-primary text-sm font-medium mb-4">{league.subtitle}</p>
              <p className="text-muted-foreground text-sm mb-8 flex-grow">{league.desc}</p>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest" asChild>
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
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
            <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-sm">Varsity vs Club</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background border-2 border-primary p-8 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <h3 className="font-heading font-bold text-2xl text-primary mb-4">Varsity</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">The school's highest level team in a game. Varsity leads to postseason competition and the IEN State Finals. Each school may have at most one varsity team per title.</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex gap-2"><span className="text-primary">✓</span> Eligible for playoffs and State Finals</li>
                <li className="flex gap-2"><span className="text-primary">✓</span> One varsity team per game title per school</li>
                <li className="flex gap-2"><span className="text-primary">✓</span> New schools must play Club level for 1 semester first</li>
              </ul>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 text-sm text-primary font-medium">
                $100 annual Varsity fee per school (covers all varsity teams)
              </div>
            </div>
            <div className="bg-background border border-primary/30 p-8 rounded-xl">
              <h3 className="font-heading font-bold text-2xl text-white mb-4">Club</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">Any school team that wants to compete but is not the varsity team. Schools may enter multiple club teams. Club+ titles also have playoff and championship events in the spring.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">✓</span> Multiple club teams allowed per title</li>
                <li className="flex gap-2"><span className="text-primary">✓</span> Required for all new schools' first semester</li>
                <li className="flex gap-2"><span className="text-primary">✓</span> Club players can sub for varsity during regular season</li>
                <li className="flex gap-2"><span className="text-primary">✓</span> Club+ divisions have their own spring championship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IHSEN Game Titles */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
          <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-sm">IHSEN Game Titles</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>
        <p className="text-center text-muted-foreground text-sm mb-10">Games offered by the Indiana High School Esports Network (Grades 9–12)</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {ihsenGames.map((game, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className={`bg-card border ${game.color.split(' ')[0]} p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-lg hover:bg-background transition-colors`}
            >
              <span className={`font-heading font-bold text-sm ${game.color.split(' ')[1]} leading-tight`}>{game.name}</span>
              <span className="text-xs text-muted-foreground mt-1">{game.type}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMSEN Game Titles */}
      <section className="py-4 pb-16 container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
          <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-sm">IMSEN Game Titles</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>
        <p className="text-center text-muted-foreground text-sm mb-10">Games offered by the Indiana Middle School Esports Network (Grades 6–8)</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {imsenGames.map((game, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className={`bg-card border ${game.color.split(' ')[0]} p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-lg hover:bg-background transition-colors`}
            >
              <span className={`font-heading font-bold text-sm ${game.color.split(' ')[1]} leading-tight`}>{game.name}</span>
              <span className="text-xs text-muted-foreground mt-1">{game.type}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Unified Program */}
      <section className="py-16 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
            <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-sm">Unified Program</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Esports for Everyone</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                IEN's Unified program creates competitive gaming opportunities for students with intellectual disabilities, competing alongside Unified partners — students without intellectual disabilities who participate in a fun and meaningful way.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                This program embodies IEN's core value of inclusivity: Gaming is for everyone, and all students deserve to feel welcome, valued, and competitive.
              </p>
              <div className="space-y-3">
                <h4 className="font-heading font-bold text-primary uppercase tracking-wider text-sm mb-4">Unified Game Titles</h4>
                <div className="flex gap-4">
                  <div className="bg-background border border-blue-500/40 px-4 py-2 rounded-lg text-blue-400 font-heading text-sm font-bold">Rocket League</div>
                  <div className="bg-background border border-pink-500/40 px-4 py-2 rounded-lg text-pink-400 font-heading text-sm font-bold">Super Smash Bros.</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background border border-primary/20 p-6 rounded-xl text-center hover:border-primary transition-colors">
                <div className="text-3xl mb-2">🤝</div>
                <h4 className="font-heading font-bold text-white text-sm mb-2">Unified Athletes</h4>
                <p className="text-xs text-muted-foreground">Students with intellectual disabilities actively competing in training and matches</p>
              </div>
              <div className="bg-background border border-primary/20 p-6 rounded-xl text-center hover:border-primary transition-colors">
                <div className="text-3xl mb-2">⭐</div>
                <h4 className="font-heading font-bold text-white text-sm mb-2">Unified Partners</h4>
                <p className="text-xs text-muted-foreground">Students without disabilities who compete alongside athletes in a meaningful way</p>
              </div>
              <div className="col-span-2 bg-background border border-primary/20 p-6 rounded-xl text-center hover:border-primary transition-colors">
                <div className="text-3xl mb-2">🏆</div>
                <h4 className="font-heading font-bold text-white text-sm mb-2">True Inclusion in Competitive Gaming</h4>
                <p className="text-xs text-muted-foreground">Unified teams compete in official IEN matches with structured rules — just like every other team in the league</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Season Format */}
      <section className="py-16 container mx-auto px-4 mb-20">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
          <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-sm">Season Format</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>
        <p className="text-center text-muted-foreground text-sm mb-10">Fall and Spring seasons concluding with live LAN events</p>
         <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2 rounded-full"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                 { title: "Fall Season", subtitle: "Online Competition", date: "Oct – Dec" },
                 { title: "Spring Season", subtitle: "Online Competition", date: "Feb – Apr" },
                 { title: "Regional LANs", subtitle: "In-Person Qualifiers", date: "Late April" },
                 { title: "IEN State Finals", subtitle: "Live Championship Event", date: "Mid May" }
               ].map((step, i) => (
                 <div key={i} className="relative z-10 bg-card border border-primary/30 p-6 rounded-xl text-center shadow-lg hover:border-primary transition-colors group">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center rounded-full font-bold font-heading">{i + 1}</div>
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
