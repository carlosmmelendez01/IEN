import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  FileText,
  MapPin,
  Trophy,
  Video,
} from "lucide-react";
import drewRhodaPhoto from "@assets/state-finals/04-drew-rhoda-1200.jpg";

const UNIFIED_COACHES_MEET_URL = "https://meet.google.com/vuc-injb-nzz";

export default function Events() {
  return (
    <Layout>
      <SEO
        title="Events"
        description="Indiana Esports Network events, coaches meetings, State Finals resources, and community highlights."
        path="/events"
      />

      <section className="relative py-20 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                EVENTS
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
              Coaches meetings, statewide competitions, public events, and
              recognition from across Indiana scholastic esports.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-12 px-8"
              >
                <a
                  href={UNIFIED_COACHES_MEET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JOIN COACHES MEETING
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest h-12 px-8"
              >
                <a href="#past-events">VIEW PAST EVENTS</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="upcoming-events"
        className="py-12 md:py-16 container mx-auto px-4 scroll-mt-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
          <article className="rounded-xl border-2 border-[#ef4343]/70 bg-[#ef4343]/10 p-6 md:p-8 shadow-[0_0_28px_rgba(239,67,67,0.12)]">
            <div className="inline-flex items-center gap-2 rounded-sm bg-[#ef4343] px-3 py-1 font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#0d1623] mb-5">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              Upcoming · Tomorrow
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Unified Coaches Meeting
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              We will discuss this fall season, registration, and Unified
              program updates with coaches.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="rounded-lg border border-[#ef4343]/35 bg-background/70 p-4">
                <Calendar className="w-5 h-5 text-[#ef4343] mb-3" />
                <p className="text-xs font-heading font-bold uppercase tracking-[0.18em] text-[#ef4343] mb-1">
                  Date
                </p>
                <p className="text-sm text-white font-semibold">
                  Tuesday, September 1, 2026
                </p>
              </div>
              <div className="rounded-lg border border-[#ef4343]/35 bg-background/70 p-4">
                <Clock className="w-5 h-5 text-[#ef4343] mb-3" />
                <p className="text-xs font-heading font-bold uppercase tracking-[0.18em] text-[#ef4343] mb-1">
                  Time
                </p>
                <p className="text-sm text-white font-semibold">
                  6:30 PM Central / 7:30 PM Eastern
                </p>
              </div>
              <div className="rounded-lg border border-[#ef4343]/35 bg-background/70 p-4">
                <Video className="w-5 h-5 text-[#ef4343] mb-3" />
                <p className="text-xs font-heading font-bold uppercase tracking-[0.18em] text-[#ef4343] mb-1">
                  Location
                </p>
                <p className="text-sm text-white font-semibold">
                  Google Meet
                </p>
              </div>
            </div>
            <Button
              asChild
              className="w-full sm:w-auto bg-[#ef4343] text-[#0d1623] hover:bg-[#f05a5a] font-heading tracking-widest h-12 px-8"
            >
              <a
                href={UNIFIED_COACHES_MEET_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                JOIN GOOGLE MEET
              </a>
            </Button>
          </article>

          <article className="relative overflow-hidden rounded-xl border border-primary/30 bg-card p-6 md:p-8">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-background/20" />
            <div className="relative">
              <p className="text-xs font-heading font-bold tracking-[0.22em] uppercase text-primary mb-3">
                Event Resources
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Spring Finals 2026
              </h2>
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-3 text-primary">
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                  <span className="font-medium text-base">April 25, 2026</span>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 mt-1" aria-hidden="true" />
                  <span className="font-medium text-base">
                    Riverview Health Arena at Innovation Mile
                    <br />
                    <span className="text-sm text-muted-foreground">
                      Noblesville, Indiana
                    </span>
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Resources from the 2026 Spring Finals remain available for
                schedules, venue details, and event reference.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest"
                >
                  <a
                    href="/events/spring-finals-2026-schedule.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-4 h-4 mr-2" /> VIEW SCHEDULE
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary/50 text-primary/80 hover:bg-primary hover:text-primary-foreground font-heading tracking-widest"
                >
                  <a
                    href="/events/spring-finals-2026-announcement.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-4 h-4 mr-2" /> EVENT FLYER
                  </a>
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="py-12 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center max-w-5xl mx-auto"
          >
            <div className="md:col-span-2 rounded-xl overflow-hidden border border-primary/30 shadow-[0_0_30px_rgba(212,175,55,0.15)] bg-card">
              <img
                src={drewRhodaPhoto}
                alt="Drew Rhoda holding the IEN Coach of the Year 2025-26 trophy at State Finals"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="md:col-span-3 flex flex-col gap-4 text-center md:text-left">
              <div className="inline-flex items-center justify-center md:justify-start gap-2 text-primary font-heading font-bold tracking-widest uppercase text-sm">
                <Trophy className="w-4 h-4" aria-hidden="true" /> Recognition
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
                Drew Rhoda Named 2025-26 Coach of the Year
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                IEN's Coach of the Year recognizes the educator who has had the
                biggest impact on Indiana scholastic esports. Drew was honored
                on stage at the 2026 State Finals on April 25.
              </p>
              <p className="text-primary text-sm font-medium tracking-wide">
                Congratulations to Drew Rhoda and the entire coaching community.
              </p>
              <Link
                href="/news#post-3"
                className="inline-flex items-center gap-2 self-center md:self-start mt-2 px-5 py-2.5 border border-primary text-primary font-heading tracking-widest text-sm uppercase rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Read the Story <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="past-events"
        className="py-14 container mx-auto px-4 mb-16 scroll-mt-24"
      >
        <div className="text-center mb-8">
          <p className="text-xs font-heading font-bold tracking-[0.22em] uppercase text-primary mb-3">
            Archive
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-wider uppercase">
            Past Events
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="/events/ien-x-pacers-graphic.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-64 rounded-xl overflow-hidden border border-primary/20 group hover:border-primary transition-colors md:col-span-2"
          >
            <img
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80"
              alt="IEN Esports Night with the Indiana Pacers"
              className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-primary font-bold text-sm tracking-widest mb-1">
                March 29, 2026
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-1">
                IEN ESPORTS NIGHT WITH THE INDIANA PACERS
              </h3>
              <p className="text-sm text-muted-foreground">
                Gainbridge Fieldhouse · NBA 2K Final Four · Pacers vs Miami
                Heat · Career Fair
              </p>
            </div>
          </a>
          <div className="relative h-64 rounded-xl overflow-hidden border border-primary/20 group">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"
              alt="2025 State Finals"
              className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent/50" />
            <div className="absolute bottom-6 left-6">
              <div className="text-primary font-bold text-sm tracking-widest mb-1">
                2025
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                IEN STATE FINALS
              </h3>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
