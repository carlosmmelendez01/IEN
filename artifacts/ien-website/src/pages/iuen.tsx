import { useState } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Gamepad2,
  Star,
  Calendar,
  Trophy,
  Quote,
  Shield,
  CheckCircle2,
  Crown,
  Lightbulb,
  GraduationCap,
  TrendingUp,
  ExternalLink,
  FileText,
} from "lucide-react";
import { RulesDialog, defaultTabForGame } from "@/components/rulesets/RulesetQuickView";
import { getRulesetGame, type RulesTab, type RulesetGame } from "@/data/gameRules";
import iuenLogo from "@assets/IEN_IUEN White Text.png";
import { CHAMPIONS, type Champion } from "@/data/champions";
import { findSchoolLogo } from "@/lib/schoolLogos";

const IUEN_CHAMPIONS: Champion[] = CHAMPIONS.filter((c) => c.league === "IUEN")
  .sort((a, b) => b.season.localeCompare(a.season));

const UNIFIED_REGISTRATION_URL =
  "https://soindiana.formstack.com/forms/unifiedesportsregistration_2025_26";

const STORIES: Array<{
  eyebrow: string;
  title: string;
  body: React.ReactNode;
  quote?: { text: string; attribution: string };
}> = [
  {
    eyebrow: "Featured Story · Wabash High School",
    title: "“One of the Coolest Things About Esports”",
    body: (
      <>
        The self-contained classroom teacher shared that students regularly talked
        about Unified Esports and looked forward to playing with their friends after
        school. One of Wabash&rsquo;s Unified athletes, Noah, is deaf. Throughout the
        season, students watched him improve, compete, and grow as a player.
        According to Coach James Burns, a senior varsity esports player approached
        him and said watching Noah succeed was one of the coolest parts of the
        entire esports program.
      </>
    ),
    quote: {
      text: "Watching Noah play and get better was one of the coolest things about esports.",
      attribution: "Wabash Esports Student",
    },
  },
  {
    eyebrow: "Featured Story · Gamer of the Year",
    title: "From Helping Out to Loving the Team",
    body: (
      <>
        Wabash awards a yearly &ldquo;Gamer of the Year&rdquo; recognition. This year&rsquo;s
        recipient originally joined Unified Esports simply to help. By the end of
        the season, he shared that he sometimes enjoyed playing with the Unified
        team more than the varsity team.
      </>
    ),
    quote: {
      text: "I said yes just to help at the beginning. By the end, I sometimes had more fun playing with the Unified team than I did with varsity.",
      attribution: "Gamer of the Year Recipient",
    },
  },
  {
    eyebrow: "Featured Story · Building Empathy",
    title: "Friendships Outside the Game",
    body: (
      <>
        Coach Burns reported that Unified Esports helped students develop empathy
        and understanding for classmates they would not normally interact with
        during the school day. Partners and athletes form connections that carry
        from the practice room into the hallways.
      </>
    ),
  },
];

const HOW_UNIFIED_WORKS: Array<{ title: string; desc: string; icon: React.ReactNode }> = [
  { title: "Build a Team",       desc: "Pair Unified Athletes with Unified Partners on a single roster — full teammates, not helpers.", icon: <Users className="w-5 h-5" /> },
  { title: "Practice Together",  desc: "Train weekly with your coach. One playbook for everyone, one team identity.",                  icon: <Lightbulb className="w-5 h-5" /> },
  { title: "Compete Together",   desc: "Play official IEN matches against other Unified rosters across Indiana.",                       icon: <Gamepad2 className="w-5 h-5" /> },
  { title: "State Finals",       desc: "Fall Super Smash Bros. finalists compete Dec. 12; spring Rocket League finalists compete Apr. 24.", icon: <Trophy className="w-5 h-5" /> },
  { title: "Celebrate Success",  desc: "Every Unified athlete and partner is recognized at season end. Wins and growth both count.",  icon: <Crown className="w-5 h-5" /> },
];

const ADMIN_VALUE_PROPS: Array<{ title: string; desc: string; icon: React.ReactNode }> = [
  { title: "Supports Inclusion Initiatives",         desc: "Aligns with district inclusion priorities and gives self-contained programs a meaningful extracurricular pathway.", icon: <Heart className="w-6 h-6" /> },
  { title: "Builds School Culture",                  desc: "Creates moments of shared celebration that visibly connect student populations.",                                  icon: <Users className="w-6 h-6" /> },
  { title: "Develops Student Leaders",               desc: "Partners build empathy, patience, and communication skills you can&rsquo;t teach in a classroom.",                  icon: <GraduationCap className="w-6 h-6" /> },
  { title: "Expands Participation",                  desc: "Reaches students who don&rsquo;t see themselves in traditional athletics.",                                         icon: <TrendingUp className="w-6 h-6" /> },
  { title: "Low Barrier to Entry",                   desc: "Free for IHSEN and IMSEN schools. Two accessible titles, two-player team minimum, existing coach.",                icon: <CheckCircle2 className="w-6 h-6" /> },
  { title: "Supports Unified Champion Schools Goals", desc: "Counts toward Special Olympics Unified Champion Schools recognition and reporting.",                              icon: <Star className="w-6 h-6" /> },
];

const IUEN_SEASONS: Array<{ phase: string; dates: string; desc: string }> = [
  {
    phase: "Fall Season",
    dates: "Aug 12 – Dec 12",
    desc: "IUEN follows the middle school fall format. Super Smash Bros. Ultimate is the fall title, with finals on Dec. 12.",
  },
  {
    phase: "Spring Season",
    dates: "Nov 30 – Apr 24",
    desc: "Rocket League begins in January for the spring season and concludes at IEN State Finals on Apr. 24.",
  },
  {
    phase: "Season Format",
    dates: "Middle School Calendar",
    desc: "Unified teams follow the IMSEN-style season cadence so schools can plan rosters, coaches, and match nights alongside their middle school programs.",
  },
];

export default function IUEN() {
  const [selectedRuleset, setSelectedRuleset] = useState<RulesetGame | null>(null);
  const [activeRulesTab, setActiveRulesTab] = useState<RulesTab>("quick");
  const openRuleset = (gameName: string) => {
    const game = getRulesetGame(gameName, "iuen");
    setSelectedRuleset(game);
    setActiveRulesTab(defaultTabForGame(game));
  };

  return (
    <Layout>
      <SEO
        title="IUEN — Unified"
        description="Indiana Unified Esports Network. Inclusive competitive esports where students with and without intellectual disabilities compete side by side, in partnership with Indiana Special Olympics."
        path="/leagues/iuen"
      />

      <section className="relative py-20 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <img
              src={iuenLogo}
              alt="IUEN — Indiana Unified Esports Network logo"
              className="h-auto max-h-32 w-full max-w-lg md:max-w-xl object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight">
              ESPORTS FOR EVERY STUDENT
            </h1>
            <p className="text-xl text-primary mb-6 font-heading tracking-widest">
              INDIANA UNIFIED ESPORTS NETWORK
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
              In partnership with Indiana Special Olympics, IUEN creates competitive
              esports opportunities where students with and without intellectual
              disabilities compete side by side. The league follows the middle school
              season format, with Super Smash Bros. in the fall and Rocket League in
              the spring.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-14 px-8 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                asChild
              >
                <a href={UNIFIED_REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                  REGISTER UNIFIED TEAM
                  <ExternalLink className="ml-2 w-4 h-4" aria-hidden />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest h-14 px-8"
                asChild
              >
                <a href="#unified-quick-start">SEE HOW IT WORKS</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-primary/10 border-y border-primary/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-heading font-bold tracking-widest uppercase text-sm mb-2">
            Official Partnership
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Indiana Esports Network × Indiana Special Olympics
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Together, we&rsquo;re bringing inclusive competitive gaming to Indiana
            schools, creating an esports environment where every student has a
            place to compete, grow, and belong.
          </p>

          <a
            href="https://soindiana.org/unified-champion-schools/unified-esport/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-md border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground font-heading font-bold tracking-[0.18em] uppercase text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span>Special Olympics Indiana · Unified Champion Schools</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden />
          </a>
        </div>
      </section>

      <section id="unified-quick-start" className="py-10 border-b border-primary/10 bg-background scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-6 max-w-6xl mx-auto items-center">
            <div>
              <p className="text-xs font-heading font-bold tracking-[0.22em] uppercase text-primary mb-2">
                Unified Quick Start
              </p>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-white">
                Build the roster, choose the title, register the team.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href={UNIFIED_REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-primary/25 rounded-lg p-5 hover:border-primary transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mb-3" aria-hidden />
                <span className="block font-heading font-bold text-white">
                  Register Unified
                </span>
                <span className="mt-1 block text-xs text-muted-foreground leading-relaxed">
                  Complete the Special Olympics Indiana registration form.
                </span>
              </a>
              <a
                href="#athletes-partners"
                className="bg-card border border-primary/25 rounded-lg p-5 hover:border-primary transition-colors"
              >
                <Users className="w-5 h-5 text-primary mb-3" aria-hidden />
                <span className="block font-heading font-bold text-white">
                  Roster Model
                </span>
                <span className="mt-1 block text-xs text-muted-foreground leading-relaxed">
                  Confirm athlete and partner roles.
                </span>
              </a>
              <a
                href="#unified-game-titles"
                className="bg-card border border-primary/25 rounded-lg p-5 hover:border-primary transition-colors"
              >
                <Gamepad2 className="w-5 h-5 text-primary mb-3" aria-hidden />
                <span className="block font-heading font-bold text-white">
                  Game Titles
                </span>
                <span className="mt-1 block text-xs text-muted-foreground leading-relaxed">
                  Review fall and spring title options.
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
              Indiana Success Stories
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {STORIES.map((story, i) => (
              <motion.article
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="bg-background border border-primary/25 rounded-xl p-6 flex flex-col hover:border-primary/60 hover:-translate-y-1 hover:shadow-[0_18px_45px_-15px_rgba(212,175,55,0.35)] transition-all"
              >
                <div className="text-[0.65rem] font-heading font-bold tracking-[0.25em] uppercase text-primary/80 mb-3">
                  {story.eyebrow}
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3 leading-snug">
                  {story.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {story.body}
                </p>
                {story.quote && (
                  <blockquote className="mt-auto pt-5 border-t border-primary/15 relative">
                    <Quote className="absolute -top-2 left-0 w-5 h-5 text-primary/40" aria-hidden />
                    <p className="text-[0.95rem] text-white italic leading-relaxed pl-7">
                      &ldquo;{story.quote.text}&rdquo;
                    </p>
                    <footer className="mt-3 pl-7 text-[0.7rem] font-heading font-bold tracking-[0.2em] uppercase text-primary">
                      — {story.quote.attribution}
                    </footer>
                  </blockquote>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-unified-works" className="py-16 container mx-auto px-4 scroll-mt-24">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
            How Unified Works
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {HOW_UNIFIED_WORKS.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="relative bg-card border border-primary/25 rounded-xl p-5 hover:border-primary/60 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-heading font-bold tabular-nums shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                  {i + 1}
                </span>
                <span className="text-primary" aria-hidden>
                  {step.icon}
                </span>
              </div>
              <h3 className="font-heading font-bold text-base text-white mb-1.5 tracking-wide">
                {step.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.li>
          ))}
        </ol>
      </section>

      <section id="athletes-partners" className="py-14 bg-card border-y border-primary/20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
              Athletes &amp; Partners
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background border border-primary/30 p-8 rounded-xl hover:border-primary transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Star className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white">Unified Athletes</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A Unified Athlete is a student with an intellectual disability who
                actively participates in training and competition. Athletes are full
                competitors, not spectators, and are placed on rosters just like any
                other player.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-background border border-primary/30 p-8 rounded-xl hover:border-primary transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white">Unified Partners</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A Unified Partner is a student without an intellectual disability who
                competes alongside athletes in a meaningful, supportive way. Partners
                are not coaches or helpers — they are teammates competing in official
                matches.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="unified-game-titles" className="py-14 container mx-auto px-4 scroll-mt-24">
        <div className="flex items-center justify-center mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
            Unified Game Titles
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch max-w-2xl mx-auto">
          <div className="bg-card border border-pink-500/40 p-8 rounded-xl text-center flex-1 hover:border-pink-400 transition-colors shadow-lg">
            <Gamepad2 className="w-10 h-10 text-pink-400 mx-auto mb-3" />
            <h4 className="font-heading font-bold text-xl text-pink-300 mb-1">Super Smash Bros.</h4>
            <p className="text-xs text-muted-foreground">Fall Season</p>
            <p className="text-xs text-primary mt-2">Finals Dec. 12</p>
            <button
              type="button"
              onClick={() => openRuleset("Super Smash Bros.")}
              className="mt-5 inline-flex items-center justify-center gap-1.5 text-xs font-heading font-bold tracking-[0.16em] text-primary hover:text-yellow-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-haspopup="dialog"
            >
              <FileText className="w-3.5 h-3.5" aria-hidden />
              VIEW RULESET
            </button>
          </div>
          <div className="bg-card border border-blue-500/40 p-8 rounded-xl text-center flex-1 hover:border-blue-400 transition-colors shadow-lg">
            <Gamepad2 className="w-10 h-10 text-blue-400 mx-auto mb-3" />
            <h4 className="font-heading font-bold text-xl text-blue-300 mb-1">Rocket League</h4>
            <p className="text-xs text-muted-foreground">Starts in January</p>
            <p className="text-xs text-primary mt-2">Finals Apr. 24</p>
            <button
              type="button"
              onClick={() => openRuleset("Rocket League")}
              className="mt-5 inline-flex items-center justify-center gap-1.5 text-xs font-heading font-bold tracking-[0.16em] text-primary hover:text-yellow-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-haspopup="dialog"
            >
              <FileText className="w-3.5 h-3.5" aria-hidden />
              VIEW RULESET
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
              IUEN Champions
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {IUEN_CHAMPIONS.map((c) => (
              <ChampionCard key={`${c.season}-${c.game}`} champion={c} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/hall-of-champions"
              className="inline-flex items-center gap-2 text-sm font-heading font-bold tracking-[0.2em] uppercase text-primary hover:text-yellow-200 transition-colors"
            >
              View All IEN Champions →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
            Why It Matters
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Heart,    title: "True Inclusion",     desc: "Athletes compete as equals, not observers. Unified teams play in official IEN matches with the same rules as every other team." },
            { icon: Users,    title: "Community Building", desc: "Unified programs bring together students from different backgrounds, building friendships that extend well beyond the game." },
            { icon: Star,     title: "Student Leadership", desc: "Partners develop empathy, patience, and leadership skills that can&rsquo;t be taught in a classroom. Athletes gain confidence and competitive drive." },
            { icon: Gamepad2, title: "Accessible Gaming",  desc: "Game titles are chosen specifically for their accessibility — fun and competitive for athletes and partners alike." },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card border border-primary/20 p-6 rounded-xl text-center hover:border-primary hover:-translate-y-1 transition-all"
              >
                <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-heading font-bold text-lg text-white mb-2">{c.title}</h4>
                <p
                  className="text-xs text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: c.desc }}
                />
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-14 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
              Season Structure
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {IUEN_SEASONS.map((s, i) => (
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

      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
            Why Schools Choose Unified
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <p className="text-center text-muted-foreground text-sm max-w-2xl mx-auto mb-10">
          A focused look at IUEN through an administrator&rsquo;s lens — what districts,
          principals, and athletic directors gain by adding a Unified team.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {ADMIN_VALUE_PROPS.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-card border border-primary/25 rounded-xl p-6 flex gap-4 hover:border-primary/60 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/15 border border-primary/40 text-primary flex items-center justify-center shrink-0">
                {v.icon}
              </div>
              <div className="min-w-0">
                <h4 className="font-heading font-bold text-base text-white mb-1.5 tracking-wide">
                  {v.title}
                </h4>
                <p
                  className="text-xs text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: v.desc }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 mb-12 max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight">
          Every Student Deserves a Team
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Any school already participating in IHSEN or IMSEN can add a Unified team
          at no extra cost. All you need is a coach, willing students, and a desire
          to compete inclusively. Contact IEN to learn how to get started.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-14 px-8 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            asChild
          >
            <Link href="/contact">CONTACT IEN ABOUT UNIFIED</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest h-14 px-8"
            asChild
          >
            <Link href="/start-a-program">START A PROGRAM</Link>
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
function ChampionCard({ champion }: { champion: Champion }) {
  const seasonYear = champion.season.split("-").pop() ?? champion.season;
  const logoUrl = champion.logoUrl ?? findSchoolLogo(champion.school);
  const initials = champion.school
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .slice(0, 3) || "—";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-background border border-primary/25 rounded-xl overflow-hidden hover:border-primary hover:-translate-y-1 hover:shadow-[0_20px_45px_-15px_rgba(212,175,55,0.4)] transition-all flex flex-col"
    >
      <div className="relative aspect-[5/3] flex items-center justify-center bg-[radial-gradient(circle_at_50%_45%,rgba(212,175,55,0.08),transparent_70%)] border-b border-primary/15 p-5 overflow-hidden">
        <Shield aria-hidden className="absolute top-3 left-3 w-3.5 h-3.5 text-primary/30" />
        <Shield aria-hidden className="absolute top-3 right-3 w-3.5 h-3.5 text-primary/30" />

        {logoUrl ? (
          <img
            src={logoUrl}
            alt={`${champion.school} logo`}
            loading="lazy"
            className="relative z-10 max-h-20 max-w-[75%] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_4px_18px_rgba(0,0,0,0.5)]"
          />
        ) : (
          <div className="relative z-10 flex items-center justify-center w-16 h-20 group-hover:scale-105 transition-transform duration-500">
            <svg viewBox="0 0 100 110" className="absolute inset-0 w-full h-full" aria-hidden>
              <path
                d="M50 4 L92 18 L92 60 Q92 92 50 106 Q8 92 8 60 L8 18 Z"
                fill="rgba(8,15,30,0.9)"
                stroke="rgba(212,175,55,0.6)"
                strokeWidth="2"
              />
            </svg>
            <span className="relative font-heading font-bold text-lg text-primary tracking-widest drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
              {initials}
            </span>
          </div>
        )}

        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 bg-background/90 backdrop-blur border border-primary/50 text-[0.65rem] font-heading font-bold tracking-[0.2em] rounded text-primary">
          <Trophy className="w-3 h-3" /> {seasonYear}
        </span>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h4 className="font-heading font-bold text-base text-white leading-tight tracking-wide line-clamp-2">
          {champion.school}
        </h4>
        <div className="mt-1.5 text-[0.7rem] font-heading font-bold tracking-[0.18em] uppercase">
          <span className="text-primary">{champion.game}</span>
          <span className="text-muted-foreground/60"> | </span>
          <span className="text-primary/80">State Champions</span>
        </div>
        {champion.runnerUp && (
          <div className="mt-1 text-[0.65rem] tracking-[0.18em] uppercase text-muted-foreground/80">
            Runner-up: <span className="text-muted-foreground">{champion.runnerUp}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
