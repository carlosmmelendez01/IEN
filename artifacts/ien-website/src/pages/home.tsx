import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  ExternalLink,
  FileText,
  LifeBuoy,
  Newspaper,
} from "lucide-react";
import { socialLinks, ONBOARDING_URL } from "@/lib/socialLinks";
import { SchoolCharterButton } from "@/components/schools/SchoolCharterButton";
import { RegistrationExtensionNotice } from "@/components/registration/RegistrationExtensionNotice";
import { trackAnalyticsEvent } from "@/lib/analytics";
import { getSchoolNetworkStat, schoolCharterConfig } from "@/lib/schoolCharter";
import { REGISTRATION_EXTENSION } from "@/lib/registration";
import heroDesktop from "@assets/state-finals/01-greencastle-hero-2400.jpg";
import heroMobile from "@assets/state-finals/01-greencastle-hero-1280.jpg";
import gridCentralHs from "@assets/state-finals/02-central-hs-1200.jpg";
import gridTrophies from "@assets/state-finals/03-marvel-rivals-1200.jpg";
import gridCoach from "@assets/state-finals/04-drew-rhoda-1200.jpg";

const stats = [
  getSchoolNetworkStat(),
  { value: "7,000+", label: "Student Athletes" },
  { value: "12", label: "Game Titles" },
];

const septemberStories = [
  {
    eyebrow: "Registration Update",
    title: "Middle School & Unified Registration Closes September 18",
    desc: "Competition registration for IMSEN and IUEN teams must be completed in LeagueOS after school chartering.",
    href: "/news/middle-school-unified-registration-closes-september-18",
    cta: "Registration Information",
  },
  {
    eyebrow: "LOS Premier",
    title: "National ranked play returns for 2026-27",
    desc: "High schools can review titles, team limits, annual fees, Roku broadcast exposure, and the Hamilton Southeastern example.",
    href: "/news/los-premier-returns-national-ranked-play-2026-27",
    cta: "Learn About LOS Premier",
  },
  {
    eyebrow: "High School Only",
    title: "Spartan Showdown returns November 7",
    desc: "The external Super Smash Bros. event includes free entry, lunch, ladder matches, prizes, and scholarships.",
    href: "/news/spartan-showdown-returns-november-7",
    cta: "Spartan Showdown 2026",
  },
];

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Indiana's official scholastic esports league for IHSEN high school, IMSEN middle school, and IUEN unified programs."
        path="/"
      />

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroDesktop}
          srcSet={`${heroMobile} 1280w, ${heroDesktop} 2400w`}
          sizes="100vw"
          alt="Greencastle students celebrate winning the IEN State Finals"
          className="absolute inset-0 w-full h-full object-cover opacity-70 motion-safe:animate-hero-zoom"
          loading="eager"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-10" />

        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <RegistrationExtensionNotice variant="hero" className="mb-6" />

            <div className="inline-block mb-6 px-4 py-1 border border-primary/50 bg-primary/10 text-primary text-sm font-bold tracking-widest rounded-full uppercase">
              Indiana's Official Scholastic League
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 tracking-tight drop-shadow-lg">
              INDIANA ESPORTS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                NETWORK
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-200 mb-10 max-w-3xl mx-auto font-heading font-bold tracking-wide">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                Education
              </span>
              <span className="text-gray-400"> First. </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                Esports
              </span>
              <span className="text-gray-400"> Always.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest text-lg h-14 px-8"
              >
                <Link
                  href="/start-a-program"
                  onClick={() =>
                    trackAnalyticsEvent("start_school_button_click", {
                      source: "homepage",
                    })
                  }
                >
                  START A PROGRAM
                </Link>
              </Button>
              <SchoolCharterButton
                source="homepage"
                variant="outline"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 font-heading tracking-widest text-lg h-14 px-8"
              >
                COMPLETE SCHOOL CHARTER
              </SchoolCharterButton>
            </div>

            <div className="flex items-center justify-center gap-3 mt-8">
              <span className="text-xs text-muted-foreground tracking-widest uppercase font-heading mr-1">
                Follow IEN
              </span>
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/10 transition-all [&_svg]:w-4 [&_svg]:h-4"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 mx-auto inline-flex flex-wrap items-center justify-center gap-3 md:gap-0 md:divide-x md:divide-primary/30"
            role="list"
            aria-label="IEN at a glance"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                role="listitem"
                className="flex flex-col items-center px-6 py-2"
              >
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-3xl md:text-4xl text-yellow-300 leading-none">
                    {stat.value}
                  </span>
                </div>
                <span className="text-xs text-gray-200 tracking-widest uppercase mt-1.5 font-semibold">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {schoolCharterConfig.enabled && (
        <section className="border-y border-primary/25 bg-card">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
              <div>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">
                  {schoolCharterConfig.academicYear} School Chartering Is Open
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
                  All new and returning IEN schools should complete the annual
                  School Census &amp; Charter before competition registration.
                </p>
              </div>
              <SchoolCharterButton
                source="homepage"
                eventName="school_charter_banner_click"
                className="w-full lg:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-12 px-8"
              >
                COMPLETE SCHOOL CHARTER
              </SchoolCharterButton>
            </div>
          </div>
        </section>
      )}

      <section
        id="september-coach-update"
        className="border-b border-primary/20 bg-card/35 py-10 md:py-12"
      >
        <div className="container mx-auto px-4">
          <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-[0.22em] text-primary">
                <Newspaper className="h-4 w-4" aria-hidden="true" />
                September Coach &amp; School Update
              </p>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
                Current Links For Coaches
              </h2>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 self-start font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary hover:text-primary/80 md:self-auto"
            >
              All News <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-lg border-2 border-primary bg-background p-5 md:p-7">
              <div className="mb-4 inline-flex rounded-sm bg-primary px-3 py-1 font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground">
                Deadline Extended
              </div>
              <h3 className="font-heading text-3xl font-bold uppercase leading-tight text-white md:text-5xl">
                {REGISTRATION_EXTENSION.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground md:text-base">
                {REGISTRATION_EXTENSION.message}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
                {REGISTRATION_EXTENSION.clarification}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-11 bg-primary px-5 font-heading uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
                >
                  <a
                    href={REGISTRATION_EXTENSION.leagueOsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Register In LeagueOS
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 border-primary/50 px-5 font-heading uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link href={septemberStories[0].href}>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    Registration Information
                  </Link>
                </Button>
              </div>
            </article>

            <div className="grid gap-5">
              {septemberStories.slice(1).map((story) => (
                <Link
                  key={story.href}
                  href={story.href}
                  className="group rounded-lg border border-primary/20 bg-background p-5 transition-colors hover:border-primary/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <p className="mb-2 font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    {story.eyebrow}
                  </p>
                  <h3 className="font-heading text-2xl font-bold uppercase leading-tight text-white transition-colors group-hover:text-primary">
                    {story.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {story.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    {story.cta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <article className="rounded-lg border border-primary/15 bg-background/80 p-5">
              <p className="mb-2 inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Competition
              </p>
              <h3 className="font-heading text-2xl font-bold uppercase text-white">
                Season calendar and rules
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                IHSEN will compete in 1A and 2A divisions this season with a
                10-week regular season running November through February.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-primary/40 font-heading uppercase text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link href="/schedule">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    2026-27 Calendar
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-primary/40 font-heading uppercase text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link href="/rules-policies#ruleset-library">
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    2026-27 Ruleset
                  </Link>
                </Button>
              </div>
            </article>

            <article className="rounded-lg border border-primary/15 bg-background/80 p-5">
              <p className="mb-2 inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <LifeBuoy className="h-4 w-4" aria-hidden="true" />
                Operations
              </p>
              <h3 className="font-heading text-2xl font-bold uppercase text-white">
                Forms and support
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Use the forms hub for invoice requests and administrative forms.
                General coach and school support now runs through{" "}
                <a
                  href="mailto:support@indianaesportsnetwork.org"
                  className="font-semibold text-primary underline decoration-primary/40 underline-offset-4 hover:text-primary/80"
                >
                  support@indianaesportsnetwork.org
                </a>
                .
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-primary/40 font-heading uppercase text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link href="/forms">
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    Forms Hub
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-primary/40 font-heading uppercase text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href="mailto:support@indianaesportsnetwork.org">
                    <LifeBuoy className="h-4 w-4" aria-hidden="true" />
                    Email Support
                  </a>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center my-12 container mx-auto px-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
        <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
          See IEN in Action
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
      </div>

      <section className="py-8 container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Real moments from the 2026 IEN State Finals. Indiana schools
            competing, celebrating, and earning recognition on a stage built for
            scholastic esports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              src: gridCentralHs,
              alt: "Central HS players competing at IEN State Finals",
              caption: "Live Competition",
              sub: "Central HS at the 2026 State Finals stage",
              href: "/schedule",
            },
            {
              src: gridTrophies,
              alt: "State Runner-Up trophies for Marvel Rivals at IEN State Finals",
              caption: "State Champions",
              sub: "Hardware on the line — Marvel Rivals 2026 podium",
              href: "/hall-of-champions",
            },
            {
              src: gridCoach,
              alt: "Drew Rhoda accepting the IEN Coach of the Year trophy",
              caption: "Coach of the Year",
              sub: "Drew Rhoda named 2025–26 IEN Coach of the Year",
              href: "/news/drew-rhoda-named-first-ever-ien-coach-of-year",
            },
          ].map((tile, i) => {
            const card = (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group rounded-2xl overflow-hidden border border-primary/30 hover:border-primary/70 bg-card shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all h-full"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={tile.src}
                    alt={tile.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 text-center">
                  <div className="font-heading font-bold tracking-widest uppercase text-primary text-sm mb-1">
                    {tile.caption}
                  </div>
                  <p className="text-muted-foreground text-sm">{tile.sub}</p>
                </div>
              </motion.div>
            );
            return tile.href ? (
              <Link
                key={i}
                href={tile.href}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
              >
                {card}
              </Link>
            ) : (
              <div key={i}>{card}</div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest"
          >
            <a href={ONBOARDING_URL} target="_blank" rel="noopener noreferrer">
              SCHEDULE YOUR ONBOARDING MEETING
            </a>
          </Button>
        </div>
      </section>

      <div className="flex items-center justify-center my-12 container mx-auto px-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
        <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
          How It Works
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
      </div>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
          HOW TO START AN ESPORTS PROGRAM
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2 z-0" />

          {[
            {
              step: "01",
              title: "Schedule Onboarding",
              desc: "Book a free onboarding meeting with the IEN team to get started.",
            },
            {
              step: "02",
              title: "Register",
              desc: "Register your school and coaches.",
            },
            {
              step: "03",
              title: "Select Titles",
              desc: "Choose your league and games.",
            },
            {
              step: "04",
              title: "Compete",
              desc: "Begin competing in the next season!",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative z-10 bg-card border border-primary/30 p-6 rounded-xl text-center shadow-lg hover:border-primary transition-colors group"
            >
              <div className="w-16 h-16 mx-auto bg-background border-2 border-primary text-primary flex items-center justify-center rounded-full font-heading text-2xl font-bold mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                {item.step}
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest"
          >
            <Link
              href="/start-a-program"
              onClick={() =>
                trackAnalyticsEvent("start_school_button_click", {
                  source: "homepage",
                })
              }
            >
              GET DETAILED GUIDE
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
