import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Headphones, Shield, Handshake, Mic } from "lucide-react";
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

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative z-20 mx-auto px-4 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight uppercase">
              CONTACT <span className="text-primary">INDIANA ESPORTS NETWORK</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-light">
              Have questions about starting a program, joining a league, or partnering with us? We're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest px-8 h-12">
                <a href={ONBOARDING_URL} target="_blank" rel="noopener noreferrer">SCHEDULE A MEETING</a>
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest px-8 h-12" asChild>
                <a href="mailto:info@indianaesportsnetwork.org">EMAIL US</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact by Topic */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-heading font-bold text-white tracking-widest uppercase">CONTACT BY TOPIC</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-card border border-primary/20 p-8 rounded-xl flex flex-col items-center text-center hover:border-primary transition-colors group">
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Headphones className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white mb-2">Start an Esports Program</h3>
            <p className="text-sm text-muted-foreground mb-6 flex-grow">Questions about equipment, IT needs, or getting administrative approval.</p>
            <Button variant="outline" asChild className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest">
              <a href={ONBOARDING_URL} target="_blank" rel="noopener noreferrer">SCHEDULE ONBOARDING CALL</a>
            </Button>
          </div>

          <div className="bg-card border border-primary/20 p-8 rounded-xl flex flex-col items-center text-center hover:border-primary transition-colors group">
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white mb-2">League Competition Questions</h3>
            <p className="text-sm text-muted-foreground mb-6 flex-grow">Rules, scheduling, disputes, or LeagueOS platform assistance.</p>
            <Button variant="outline" asChild className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest">
              <a href="mailto:league@indianaesportsnetwork.org">EMAIL LEAGUE OPERATIONS</a>
            </Button>
          </div>

          <div className="bg-card border border-primary/20 p-8 rounded-xl flex flex-col items-center text-center hover:border-primary transition-colors group">
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Handshake className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white mb-2">Sponsorship & Partnerships</h3>
            <p className="text-sm text-muted-foreground mb-6 flex-grow">Event sponsorship, unified program support, or brand integration.</p>
            <Button variant="outline" asChild className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest">
              <a href="mailto:partners@indianaesportsnetwork.org">CONTACT PARTNERSHIPS</a>
            </Button>
          </div>

          <div className="bg-card border border-primary/20 p-8 rounded-xl flex flex-col items-center text-center hover:border-primary transition-colors group">
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mic className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white mb-2">Media / Press</h3>
            <p className="text-sm text-muted-foreground mb-6 flex-grow">Interview requests, event coverage, or asset usage permission.</p>
            <Button variant="outline" asChild className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest">
              <a href="mailto:media@indianaesportsnetwork.org">CONTACT MARKETING</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" />
            <span className="px-4 font-heading text-primary font-bold tracking-[0.2em] uppercase text-sm">
              Board of Directors
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <p className="text-center text-muted-foreground text-sm mb-10 max-w-xl mx-auto">
            IEN is governed by a volunteer board of Indiana educators and esports professionals.{" "}
            <Link href="/about" className="text-primary hover:underline">Learn more about IEN →</Link>
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto mb-12">
            {boardMembers.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-background border-2 border-primary/40 group-hover:border-primary flex items-center justify-center mb-3 shadow-[0_0_12px_rgba(212,175,55,0.1)] transition-colors">
                  <span className="font-heading font-bold text-primary">{person.initials}</span>
                </div>
                <h4 className="font-heading font-bold text-white text-xs leading-tight">{person.name}</h4>
                <p className="text-[10px] text-muted-foreground mt-1 leading-tight">{person.title}</p>
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

          <div className="flex flex-wrap justify-center gap-8">
            {developmentCommittee.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-full bg-background border border-primary/30 group-hover:border-primary/60 flex items-center justify-center mb-3 transition-colors">
                  <span className="font-heading font-bold text-primary/80 text-sm">{person.initials}</span>
                </div>
                <h4 className="font-heading font-bold text-white text-xs">{person.name}</h4>
                <p className="text-[10px] text-primary/60 mt-0.5">{person.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General info footer strip */}
      <section className="py-14 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground text-sm mb-2">General inquiries</p>
          <a href="mailto:info@indianaesportsnetwork.org" className="font-heading font-bold text-primary text-lg hover:underline tracking-wide">
            info@indianaesportsnetwork.org
          </a>
        </div>
      </section>
    </Layout>
  );
}
