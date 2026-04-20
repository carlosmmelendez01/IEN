import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, School, DollarSign, Clock, ZoomIn, X, Download, ExternalLink } from "lucide-react";
import { ONBOARDING_URL } from "@/lib/socialLinks";

import ihsenSeason from "@assets/1_1776711178450.jpg";
import ihsenPlayoffs from "@assets/2_1776711178450.jpg";
import imsenFall from "@assets/3_1776711178450.jpg";
import iuenFall from "@assets/4_1776711178450.jpg";
import imsenSpring from "@assets/5_1776711178450.jpg";
import iuenSpring from "@assets/6_1776711178450.jpg";

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
        onClick={onClose}
      >
        <button
          className="absolute top-4 right-4 text-white bg-black/50 hover:bg-primary rounded-full p-2 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        <motion.img
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.25 }}
          src={src}
          alt={alt}
          className="max-h-[90vh] max-w-full object-contain rounded-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>
  );
}

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
  pdfHref?: string;
  pdfLabel?: string;
  registerLabel?: string;
  index: number;
}

function SeasonRow({
  image, alt, badge, title, subtitle,
  dateRange, level, cost, matchTime,
  pdfHref, pdfLabel = "VIEW FULL CALENDAR PDF",
  registerLabel = "REGISTER ON LEAGUEOS",
  index,
}: SeasonRowProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      {lightboxOpen && (
        <Lightbox src={image} alt={alt} onClose={() => setLightboxOpen(false)} />
      )}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, duration: 0.45 }}
        className="py-10 border-b border-primary/10 last:border-b-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">

          {/* Left: thumbnail — click to enlarge */}
          <button
            onClick={() => setLightboxOpen(true)}
            className="group relative rounded-xl overflow-hidden border border-primary/20 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full lg:w-[280px] shrink-0"
            aria-label={`View full ${alt}`}
          >
            <img
              src={image}
              alt={alt}
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary/90 text-primary-foreground rounded-full p-3 shadow-lg">
                <ZoomIn className="w-5 h-5" />
              </div>
            </div>
          </button>

          {/* Right: Details */}
          <div className="flex flex-col gap-5">
            <div>
              <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest rounded-full uppercase mb-3">
                {badge}
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 leading-tight">
                {title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{subtitle}</p>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-start gap-3 text-sm">
                <Calendar className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-white/90">{dateRange}</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <School className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-white/90">{level}</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <DollarSign className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-white/90">{cost}</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-white/90">{matchTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest"
                asChild
              >
                <a href="https://leagueos.gg" target="_blank" rel="noopener noreferrer">
                  {registerLabel}
                </a>
              </Button>

              {pdfHref && (
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest gap-2"
                  asChild
                >
                  <a href={pdfHref} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    {pdfLabel}
                  </a>
                </Button>
              )}

              {pdfHref && (
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-muted-foreground hover:text-primary font-heading tracking-widest gap-2"
                  asChild
                >
                  <a href={pdfHref} download>
                    <Download className="w-4 h-4" />
                    DOWNLOAD PDF
                  </a>
                </Button>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              New to IEN?{" "}
              <a href={ONBOARDING_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80">
                Schedule your onboarding meeting first
              </a>{" "}
              — LeagueOS registration opens after onboarding is complete.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 pt-10 pb-2">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
      <span className="font-heading font-bold text-primary tracking-widest uppercase text-2xl px-4 whitespace-nowrap">
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
      <section className="relative py-20 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 tracking-tight">
              SEASON{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                SCHEDULES
              </span>
            </h1>
            <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
              2026–2027 Indiana Esports Network · Official Season Schedule
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 pb-8">

        {/* ── IHSEN ── */}
        <SectionDivider label="Indiana High School Esports Network (IHSEN)" />

        <SeasonRow
          index={0}
          image={ihsenSeason}
          alt="IHSEN 2026-2027 Regular Season Schedule"
          badge="IHSEN · Fall / Winter 2026"
          title="IHSEN Regular Season"
          subtitle="High school competition across Valorant, Rocket League, League of Legends, Marvel Rivals, Smash Bros., Overwatch 2, Fortnite, Chess, Minecraft, Mario Kart, Tetris, and iRacing. Varsity teams earn playoff seeding. Preseason begins October 12."
          dateRange="Oct 12, 2026 – Feb 8, 2027 (Registration opens Aug 10)"
          level="High School (Grades 9–12)"
          cost="$100 / school for Varsity · Free for Club"
          matchTime="Mon–Thu · Varsity 4:00 PM CT / 5:00 PM ET"
          pdfHref="/IHSEN_Calendar_2026-2027.pdf"
          pdfLabel="VIEW IHSEN CALENDAR"
        />

        <SeasonRow
          index={1}
          image={ihsenPlayoffs}
          alt="IHSEN 2026-2027 Playoffs Schedule"
          badge="IHSEN · Playoffs 2027"
          title="IHSEN Playoffs & State Finals"
          subtitle="Top Varsity teams advance through four playoff rounds. The season concludes at the IEN State Finals on April 24, 2027."
          dateRange="Feb 22 – Apr 24, 2027"
          level="High School Varsity Teams"
          cost="Included with regular season registration"
          matchTime="Same days as regular season · Mon–Thu"
          pdfHref="/IHSEN_Calendar_2026-2027.pdf"
          pdfLabel="VIEW IHSEN CALENDAR"
          registerLabel="VIEW LEAGUEOS"
        />

        {/* ── IMSEN ── */}
        <SectionDivider label="Indiana Middle School Esports Network (IMSEN)" />

        <SeasonRow
          index={2}
          image={imsenFall}
          alt="IMSEN 2026-2027 Fall Schedule"
          badge="IMSEN · Fall 2026"
          title="IMSEN Fall Season"
          subtitle="Middle school fall competition featuring Fortnite, Mario Kart 8 Deluxe, Minecraft, and Tetris. Fall season wraps with IMSEN Finals on December 12."
          dateRange="Aug 10 – Dec 12, 2026"
          level="Middle School (Grades 6–8)"
          cost="$100 / school for Varsity · Free for Club"
          matchTime="Mon–Thu · Varsity 3:30 PM CT / 4:30 PM ET"
          pdfHref="/IMSEN_Calendar_2026-2027.pdf"
          pdfLabel="VIEW IMSEN CALENDAR"
        />

        <SeasonRow
          index={3}
          image={imsenSpring}
          alt="IMSEN 2026-2027 Spring Schedule"
          badge="IMSEN · Spring 2027"
          title="IMSEN Spring Season"
          subtitle="Spring competition features Marvel Rivals, Super Smash Bros. Ultimate, Rocket League, and Chess. Spring registration opens November 30. Playoffs run March–April into the State Finals."
          dateRange="Nov 30, 2026 – Apr 24, 2027"
          level="Middle School (Grades 6–8)"
          cost="$100 / school for Varsity · Free for Club"
          matchTime="Mon–Thu · Varsity 3:30 PM CT / 4:30 PM ET"
          pdfHref="/IMSEN_Calendar_2026-2027.pdf"
          pdfLabel="VIEW IMSEN CALENDAR"
        />

        {/* ── IUEN ── */}
        <SectionDivider label="Indiana Unified Esports Network (IUEN)" />

        <SeasonRow
          index={4}
          image={iuenFall}
          alt="IUEN 2026-2027 Fall Schedule"
          badge="IUEN · Fall 2026"
          title="IUEN Fall Season"
          subtitle="Unified Athletes and Partners compete together in Super Smash Bros. Ultimate on Tuesdays. A Special Olympics Indiana partnership. IUEN Finals on December 12."
          dateRange="Aug 10 – Dec 12, 2026"
          level="High School & Middle School · Unified"
          cost="Free to all schools and students"
          matchTime="Tuesdays · 3:30 PM CT / 4:30 PM ET"
          pdfHref="/IUEN_Calendar_2026-2027.pdf"
          pdfLabel="VIEW IUEN CALENDAR"
        />

        <SeasonRow
          index={5}
          image={iuenSpring}
          alt="IUEN 2026-2027 Spring Schedule"
          badge="IUEN · Spring 2027"
          title="IUEN Spring Season"
          subtitle="Spring Unified competition features Rocket League on Tuesdays. Spring registration opens November 30. Playoffs conclude at IEN State Finals on April 24."
          dateRange="Nov 30, 2026 – Apr 24, 2027"
          level="High School & Middle School · Unified"
          cost="Free to all schools and students"
          matchTime="Tuesdays · 3:30 PM CT / 4:30 PM ET"
          pdfHref="/IUEN_Calendar_2026-2027.pdf"
          pdfLabel="VIEW IUEN CALENDAR"
        />

      </div>

      {/* State Finals CTA */}
      <section className="py-20 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest rounded-full uppercase mb-6">
            Season Finale
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-3">
            IEN STATE FINALS 2027
          </h2>
          <p className="text-xl text-primary font-heading tracking-wider mb-5">April 24, 2027</p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            IHSEN, IMSEN, and IUEN champions are crowned at the annual IEN State Finals — Indiana's premier in-person scholastic esports championship.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-14 px-10 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              asChild
            >
              <a href={ONBOARDING_URL} target="_blank" rel="noopener noreferrer">
                SCHEDULE ONBOARDING
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest h-14 px-10"
              asChild
            >
              <a href="https://leagueos.gg" target="_blank" rel="noopener noreferrer">
                REGISTER ON LEAGUEOS
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">New schools must complete an onboarding meeting before registering on LeagueOS.</p>
        </div>
      </section>
    </Layout>
  );
}
