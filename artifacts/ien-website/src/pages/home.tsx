import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { socialLinks, ONBOARDING_URL } from "@/lib/socialLinks";
import heroDesktop from "@assets/state-finals/01-greencastle-hero-2400.jpg";
import heroMobile from "@assets/state-finals/01-greencastle-hero-1280.jpg";
import gridCentralHs from "@assets/state-finals/02-central-hs-1200.jpg";
import gridTrophies from "@assets/state-finals/03-marvel-rivals-1200.jpg";
import gridCoach from "@assets/state-finals/04-drew-rhoda-1200.jpg";

const stats = [
  { value: "214", label: "Schools Competing", live: true },
  { value: "7,000+", label: "Student Athletes" },
  { value: "12", label: "Game Titles" },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Real photo from IEN State Finals: Greencastle celebrates a Rocket League win.
            Layered: photo on bottom -> dark gradient on top so headline stays readable.
            Subtle 20s scale loop adds motion since we don't have video yet. */}
        <img
          src={heroDesktop}
          srcSet={`${heroMobile} 1280w, ${heroDesktop} 2400w`}
          sizes="100vw"
          alt="Greencastle students celebrate winning the IEN State Finals"
          className="absolute inset-0 w-full h-full object-cover opacity-70 motion-safe:animate-hero-zoom"
          loading="eager"
          fetchPriority="high"
        />
        {/* Top->bottom gradient: lighter at top so photo shows through, opaque at bottom so text stands clear. */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-10" />

        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">Education</span>
              <span className="text-gray-400"> First. </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">Esports</span>
              <span className="text-gray-400"> Always.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest text-lg h-14 px-8"
              >
                <a href={ONBOARDING_URL} target="_blank" rel="noopener noreferrer">
                  JOIN THE LEAGUE
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 font-heading tracking-widest text-lg h-14 px-8"
                asChild
              >
                <Link href="/start-a-program">START A PROGRAM</Link>
              </Button>
            </div>

            {/* Social links row */}
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

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-3 md:gap-0 md:divide-x md:divide-primary/20"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center px-8 py-3"
              >
                <div className="flex items-center gap-2">
                  {stat.live && (
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0" />
                  )}
                  <span className="font-heading font-bold text-3xl md:text-4xl text-primary leading-none">
                    {stat.value}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground tracking-widest uppercase mt-1 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center my-12 container mx-auto px-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
        <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
          See IEN in Action
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
      </div>

      {/* State Finals 2026 photo grid -- replaces the placeholder video. Three real moments
          (live competition, championship trophies, coach recognition) under one section, with
          the existing onboarding CTA preserved at the bottom. */}
      <section className="py-8 container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Real moments from the 2026 IEN State Finals. Indiana schools competing,
            celebrating, and earning recognition on a stage built for scholastic esports.
          </p>
        </div>

        {/* 3-tile grid. Drew's portrait shot gets center-cropped via object-cover into a
            4:3 tile so all three cards share the same footprint. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              src: gridCentralHs,
              alt: "Central HS players competing at IEN State Finals",
              caption: "Live Competition",
              sub: "Central HS at the 2026 State Finals stage",
            },
            {
              src: gridTrophies,
              alt: "State Runner-Up trophies for Marvel Rivals at IEN State Finals",
              caption: "State Champions",
              sub: "Hardware on the line — Marvel Rivals 2026 podium",
            },
            {
              src: gridCoach,
              alt: "Drew Rhoda accepting the IEN Coach of the Year trophy",
              caption: "Coach of the Year",
              sub: "Drew Rhoda named 2025–26 IEN Coach of the Year",
            },
          ].map((tile, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group rounded-2xl overflow-hidden border border-primary/30 hover:border-primary/70 bg-card shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all"
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
          ))}
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

      {/* Divider */}
      <div className="flex items-center justify-center my-12 container mx-auto px-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
        <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
          How It Works
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
      </div>

      {/* How It Works Steps */}
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
              <h3 className="font-heading font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest"
          >
            <Link href="/start-a-program">GET DETAILED GUIDE</Link>
          </Button>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center my-12 container mx-auto px-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
        <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
          Upcoming Events
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
      </div>

      {/* Events Quick View */}
      <section className="py-16 container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-xl border border-primary/30 aspect-video bg-card hover:border-primary transition-colors">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="text-primary font-bold text-sm tracking-widest mb-2">
                APRIL 25, 2026
              </div>
              <h3 className="text-3xl font-heading font-bold text-white mb-2">
                IEN SPRING FINALS 2026
              </h3>
              <p className="text-gray-300 mb-4">Riverview Health Arena · Noblesville, IN</p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <Link href="/events">LEARN MORE</Link>
              </Button>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-primary/30 aspect-video bg-card hover:border-primary transition-colors">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="text-primary font-bold text-sm tracking-widest mb-2">
                MARCH 29, 2026
              </div>
              <h3 className="text-3xl font-heading font-bold text-white mb-2">
                IEN NIGHT WITH THE PACERS
              </h3>
              <p className="text-gray-300 mb-4">Gainbridge Fieldhouse · Career Fair · NBA 2K Final Four</p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <Link href="/events">LEARN MORE</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
