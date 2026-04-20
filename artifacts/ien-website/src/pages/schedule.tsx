import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, School, DollarSign, Clock } from "lucide-react";

import ihsenSeason from "@assets/1_1776711178450.jpg";
import ihsenPlayoffs from "@assets/2_1776711178450.jpg";
import imsenFall from "@assets/3_1776711178450.jpg";
import iuenFall from "@assets/4_1776711178450.jpg";
import imsenSpring from "@assets/5_1776711178450.jpg";
import iuenSpring from "@assets/6_1776711178450.jpg";

interface SeasonRowProps {
  image: string;
  alt: string;
  badge: string;
  title: string;
  subtitle: string;
  dateRange: string;
  level: string;
  cost: string;
  matchTime: string;
  registerLabel?: string;
  index: number;
}

function SeasonRow({
  image, alt, badge, title, subtitle,
  dateRange, level, cost, matchTime,
  registerLabel = "REGISTER ON LEAGUEOS",
  index,
}: SeasonRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="py-12 border-b border-primary/10 last:border-b-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Official schedule graphic */}
        <div className="rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-primary/20">
          <img
            src={image}
            alt={alt}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right: Details */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest rounded-full uppercase mb-4">
              {badge}
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 leading-tight">
              {title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{subtitle}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-white font-medium">{dateRange}</span>
            </div>
            <div className="flex items-start gap-3">
              <School className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-white font-medium">{level}</span>
            </div>
            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-white font-medium">{cost}</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-white font-medium">{matchTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest px-6"
              asChild
            >
              <a href="https://leagueos.gg" target="_blank" rel="noopener noreferrer">
                {registerLabel}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 py-6">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
      <span className="font-heading font-bold text-primary tracking-widest uppercase text-sm px-2">
        {label}
      </span>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
    </div>
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
              SEASON{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                SCHEDULES
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
              2026–2027 Indiana Esports Network Official Season Schedule
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4">

        {/* ── IHSEN ── */}
        <SectionDivider label="Indiana High School Esports Network" />

        <SeasonRow
          index={0}
          image={ihsenSeason}
          alt="IHSEN 2026-2027 Regular Season Schedule"
          badge="IHSEN · Fall / Winter 2026"
          title="IHSEN Regular Season"
          subtitle="High school competition across Valorant, Rocket League, League of Legends, Marvel Rivals, Smash Bros., Overwatch 2, Fortnite, Chess, Minecraft, Mario Kart, Tetris, and iRacing. Varsity teams earn playoff seeding."
          dateRange="August 10, 2026 – February 8, 2027"
          level="High School (Grades 9–12)"
          cost="$100 / school for Varsity · Free for Club"
          matchTime="Varsity: 4:00 PM CT / 5:00 PM ET · Mon–Thu"
        />

        <SeasonRow
          index={1}
          image={ihsenPlayoffs}
          alt="IHSEN 2026-2027 Playoffs Schedule"
          badge="IHSEN · Playoffs 2027"
          title="IHSEN Playoffs & State Finals"
          subtitle="The top Varsity teams from the regular season advance to four rounds of playoffs, culminating at the IEN State Finals on April 24, 2027."
          dateRange="February 22 – April 24, 2027"
          level="High School Varsity Teams"
          cost="Included with regular season registration"
          matchTime="Same match days · Mon–Thu"
          registerLabel="VIEW PLAYOFF BRACKET"
        />

        {/* ── IMSEN ── */}
        <SectionDivider label="Indiana Middle School Esports Network" />

        <SeasonRow
          index={2}
          image={imsenFall}
          alt="IMSEN 2026-2027 Fall Schedule"
          badge="IMSEN · Fall 2026"
          title="IMSEN Fall Season"
          subtitle="Middle school fall competition featuring Fortnite, Mario Kart 8, Minecraft, and Tetris. The fall season wraps with IMSEN Finals in December."
          dateRange="August 10 – December 12, 2026"
          level="Middle School (Grades 6–8)"
          cost="Free to all schools and students"
          matchTime="Varsity: 3:30 PM CT / 4:30 PM ET · Mon–Thu"
        />

        <SeasonRow
          index={3}
          image={imsenSpring}
          alt="IMSEN 2026-2027 Spring Schedule"
          badge="IMSEN · Spring 2027"
          title="IMSEN Spring Season"
          subtitle="Spring season brings Marvel Rivals, Super Smash Bros. Ultimate, Rocket League, and Chess. Playoffs lead into the IEN State Finals on April 24, 2027."
          dateRange="November 30, 2026 – April 24, 2027"
          level="Middle School (Grades 6–8)"
          cost="Free to all schools and students"
          matchTime="Varsity: 3:30 PM CT / 4:30 PM ET · Mon–Thu"
        />

        {/* ── IUEN ── */}
        <SectionDivider label="Indiana Unified Esports Network" />

        <SeasonRow
          index={4}
          image={iuenFall}
          alt="IUEN 2026-2027 Fall Schedule"
          badge="IUEN · Fall 2026"
          title="IUEN Fall Season"
          subtitle="Indiana Unified Esports brings together Unified Athletes and Partners in Super Smash Bros. Ultimate. Unified competition is held on Tuesdays in partnership with Special Olympics Indiana."
          dateRange="August 10 – December 12, 2026"
          level="High School & Middle School · Unified"
          cost="Free to all schools and students"
          matchTime="Tuesdays · 3:30 PM CT / 4:30 PM ET"
        />

        <SeasonRow
          index={5}
          image={iuenSpring}
          alt="IUEN 2026-2027 Spring Schedule"
          badge="IUEN · Spring 2027"
          title="IUEN Spring Season"
          subtitle="Unified spring season features Rocket League on Tuesdays. Playoffs conclude at the IEN State Finals on April 24, 2027 alongside IHSEN and IMSEN."
          dateRange="November 30, 2026 – April 24, 2027"
          level="High School & Middle School · Unified"
          cost="Free to all schools and students"
          matchTime="Tuesdays · 3:30 PM CT / 4:30 PM ET"
        />

      </div>

      {/* State Finals CTA */}
      <section className="py-20 bg-card border-y border-primary/20 mt-8">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest rounded-full uppercase mb-6">
            Season Finale
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            IEN STATE FINALS 2027
          </h2>
          <p className="text-xl text-primary font-heading tracking-wider mb-6">
            April 24, 2027
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            IHSEN, IMSEN, and IUEN champions are crowned at the annual IEN State Finals — Indiana's premier in-person scholastic esports championship.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-14 px-10 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            asChild
          >
            <a href="https://leagueos.gg" target="_blank" rel="noopener noreferrer">
              REGISTER FOR THE SEASON
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
