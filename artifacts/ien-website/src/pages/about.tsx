import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, Target, Shield, Heart, Star, Scale } from "lucide-react";
import ienShield from "@assets/IEN_Shield_1776709349969.png";
import { ONBOARDING_URL } from "@/lib/socialLinks";

const boardMembers = [
  { name: "Nick Parcell",     title: "President",                          initials: "NP" },
  { name: "Ryan Dunfee",      title: "Vice President",                     initials: "RD" },
  { name: "Chris King",       title: "Treasurer",                          initials: "CK" },
  { name: "Matt Mills",       title: "Secretary",                          initials: "MM" },
  { name: "Shaun Doyle",      title: "Director of Governance",             initials: "SD" },
  { name: "Konnor Powell",    title: "Director of League Management",      initials: "KP" },
  { name: "Jonathan Morgan",  title: "Director of Technology Operations",  initials: "JM" },
  { name: "Trevor Smith",     title: "Director of Support",                initials: "TS" },
  { name: "Carlos Melendez",  title: "Director of Marketing",              initials: "CM" },
  { name: "Dylan Gentilcore", title: "Director At Large",                  initials: "DG" },
];

const developmentCommittee = [
  { name: "Kristen Ritter", org: "Brebeuf High School", initials: "KR" },
  { name: "Haley Mullins",  org: "LANFest",             initials: "HM" },
  { name: "Kyle McGinniss", org: "Cap Group",           initials: "KM" },
];

const values = [
  {
    icon: Star,
    title: "Students Are #1",
    description: "Every decision IEN makes is filtered through one question: is this good for students? Their growth, safety, and success drive everything we do.",
  },
  {
    icon: Heart,
    title: "Positivity in the Community",
    description: "We set the standard for scholastic esports in Indiana — fostering a culture of sportsmanship, respect, and genuine community.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Gaming is for everyone. IEN ensures that every student, regardless of background or ability, has a place to compete and belong.",
  },
  {
    icon: Scale,
    title: "Fair Play",
    description: "Consistent rules and a level playing field — no matter the school size or resources. Every team gets a fair shot.",
  },
  {
    icon: Shield,
    title: "Integrity First",
    description: "IEN operates with transparency and accountability, led by Indiana educators who are trusted advocates for the students they serve.",
  },
  {
    icon: Target,
    title: "Fostering Guidance",
    description: "From equipment selection to administrative buy-in, we help schools build sustainable esports programs from the ground up.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-28 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <img src={ienShield} alt="IEN Shield" className="w-36 h-36 object-contain mx-auto mb-8 drop-shadow-[0_0_24px_rgba(212,175,55,0.3)]" />
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight">
              ABOUT <span className="text-primary">IEN</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              "To prepare students for the future through{" "}
              <span className="text-primary font-semibold">collaboration</span>,{" "}
              <span className="text-primary font-semibold">communication</span>,{" "}
              <span className="text-primary font-semibold">creativity</span>, and{" "}
              <span className="text-primary font-semibold">critical thinking</span>{" "}
              through video games and esports."
            </p>
          </motion.div>
        </div>
      </section>

      {/* About blurb */}
      <section className="py-16 container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center text-lg"
        >
          Indiana Esports Network (IEN) is a nonprofit organization founded and led by Indiana educators. We operate
          three scholastic esports leagues — IHSEN, IMSEN, and IUEN — serving over 214 schools and 7,000+ student
          athletes across the state. We believe esports is more than gaming; it's a platform for academic growth,
          career exploration, and genuine human connection.
        </motion.p>
      </section>

      {/* Stats bar */}
      <section className="py-10 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            {[
              { value: "214+", label: "Member Schools" },
              { value: "7,000+", label: "Student Athletes" },
              { value: "3", label: "Active Leagues" },
              { value: "100%", label: "Indiana Nonprofit" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <div className="text-3xl font-heading font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-heading font-bold text-primary tracking-[0.3em] uppercase mb-3">What We Stand For</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">OUR CORE VALUES</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="bg-card border border-primary/20 hover:border-primary/50 rounded-xl p-6 flex flex-col gap-4 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-sm font-heading font-bold text-primary tracking-[0.3em] uppercase mb-3">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">BOARD OF DIRECTORS</h2>
          </div>
          <p className="text-center text-muted-foreground text-sm mb-12 max-w-xl mx-auto">
            IEN is governed by a volunteer board of Indiana educators and esports professionals dedicated to advancing scholastic gaming statewide.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto mb-16">
            {boardMembers.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-background border-2 border-primary/40 group-hover:border-primary flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-colors">
                  <span className="font-heading font-bold text-primary text-lg">{person.initials}</span>
                </div>
                <h4 className="font-heading font-bold text-white text-sm leading-tight">{person.name}</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-tight">{person.title}</p>
              </motion.div>
            ))}
          </div>

          {/* Development Committee */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
            <span className="px-4 font-heading text-muted-foreground font-bold tracking-[0.2em] uppercase text-xs">
              Development Committee
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {developmentCommittee.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-background border border-primary/30 group-hover:border-primary/60 flex items-center justify-center mb-3 transition-colors">
                  <span className="font-heading font-bold text-primary/80 text-base">{person.initials}</span>
                </div>
                <h4 className="font-heading font-bold text-white text-sm">{person.name}</h4>
                <p className="text-xs text-primary/60 mt-0.5">{person.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">READY TO JOIN <span className="text-primary">IEN?</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Schedule a meeting with our team and we'll help you find the right path — whether you're starting a program, joining a league, or exploring a partnership.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest px-8 h-12">
              <a href={ONBOARDING_URL} target="_blank" rel="noopener noreferrer">SCHEDULE A MEETING</a>
            </Button>
            <Link href="/contact">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest px-8 h-12">
                CONTACT US
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
