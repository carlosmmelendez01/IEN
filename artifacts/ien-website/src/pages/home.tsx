import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { socialLinks, ONBOARDING_URL } from "@/lib/socialLinks";

const stats = [
  { value: "80+", label: "Schools Competing", live: true },
  { value: "1,500+", label: "Student Athletes" },
  { value: "12", label: "Game Titles" },
  { value: "4", label: "Seasons Completed" },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity" />

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

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
              Fostering community, competition, and inclusion for middle school,
              high school, and unified programs across Indiana.
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

          {/* Stats bar — 4 stats */}
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
        <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-2xl">
          How It Works
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
      </div>

      {/* How It Works Steps */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
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
        <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-2xl">
          See IEN in Action
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
      </div>

      {/* Video Section */}
      <section className="py-8 container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
            SEE IEN IN ACTION
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
            Watch how Indiana schools are building esports programs — and why
            it's changing lives for students statewide.
          </p>
        </div>

        {/* 16:9 responsive video embed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.2)] border-2 border-primary/40"
          style={{ aspectRatio: "16/9" }}
        >
          {/* Gold glow backdrop */}
          <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 via-transparent to-primary/20 rounded-2xl blur-sm -z-10" />
          {/* TODO: Replace the YouTube embed URL below with IEN's official video URL */}
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&color=white"
            title="Indiana Esports Network — See IEN in Action"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-2xl"
          />
        </motion.div>

        <div className="text-center mt-8">
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
        <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-2xl">
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
                MAY 18-19, 2024
              </div>
              <h3 className="text-3xl font-heading font-bold text-white mb-2">
                IEN STATE FINALS
              </h3>
              <p className="text-gray-300 mb-4">Ball State University</p>
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
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="text-primary font-bold text-sm tracking-widest mb-2">
                APRIL 2024
              </div>
              <h3 className="text-3xl font-heading font-bold text-white mb-2">
                REGIONAL LANS
              </h3>
              <p className="text-gray-300 mb-4">North, Central, and South Regions</p>
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
