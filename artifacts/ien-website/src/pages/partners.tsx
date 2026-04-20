import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const partners = [
  {
    name: "ScrimSync",
    url: "https://scrimsync.app",
    description: "Esports scrim scheduling platform powering IEN's competitive practice environment.",
    logo: null,
    display: (
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-16 h-16 bg-[#1a1a2e] border-2 border-white/20 rounded-xl flex items-center justify-center">
          <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
            <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" fill="#111827" stroke="white" strokeWidth="2" />
            <text x="20" y="25" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">SS</text>
          </svg>
        </div>
        <span className="ml-3 font-heading font-bold text-white text-lg tracking-wide">ScrimSync</span>
      </div>
    ),
  },
  {
    name: "Gravity Gaming by ByteSpeed",
    url: "https://www.bytespeed.com",
    description: "Hardware solutions and gaming rigs supporting IEN competition and events.",
    logo: null,
    display: (
      <div className="flex flex-col items-center justify-center w-full h-full gap-1">
        <span className="font-heading font-bold text-white text-base tracking-wider">GRAVITY GAMING</span>
        <span className="text-xs text-muted-foreground tracking-widest">by ByteSpeed</span>
      </div>
    ),
  },
  {
    name: "LeagueOS",
    url: "https://leagueos.gg",
    description: "The official league management platform for IEN scheduling, rosters, and standings.",
    logo: null,
    display: (
      <div className="flex items-center justify-center w-full h-full">
        <span className="font-heading font-bold text-white text-xl tracking-tight">
          League<span className="text-[#00b4d8]">OS</span>
        </span>
      </div>
    ),
  },
  {
    name: "McDonald's",
    url: "https://www.mcdonalds.com",
    description: "Community sponsor supporting IEN events and student-athletes across Indiana.",
    logo: null,
    display: (
      <div className="flex items-center justify-center w-full h-full">
        <span className="text-5xl font-black text-[#FFC72C]">M</span>
      </div>
    ),
  },
  {
    name: "Spectrum Industries Esports",
    url: "https://www.spectrumindustriesinc.com",
    description: "Providing ergonomic esports furniture and workstations for IEN program schools.",
    logo: null,
    display: (
      <div className="flex flex-col items-center justify-center w-full h-full gap-1">
        <span className="font-heading font-bold text-white text-sm tracking-wider text-center leading-tight">
          SPECTRUM<br />INDUSTRIES
        </span>
        <span className="text-xs text-[#4db6e8] font-bold tracking-widest">ESPORTS</span>
      </div>
    ),
  },
  {
    name: "Starfall PR",
    url: "https://www.starfallpr.com",
    description: "Public relations and communications partner amplifying IEN's mission statewide.",
    logo: null,
    display: (
      <div className="flex flex-col items-center justify-center w-full h-full gap-0.5">
        <span className="font-heading font-bold text-[#3b9edd] text-base tracking-widest">STARFALL</span>
        <span className="font-heading font-bold text-white text-sm tracking-[0.3em]">PR</span>
      </div>
    ),
  },
];

export default function Partners() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 tracking-tight">
              OUR <span className="text-primary">PARTNERS</span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
              Working Together to Advance Scholastic Esports in Indiana
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" />
          <span className="px-4 font-heading text-primary font-bold tracking-[0.2em] uppercase text-sm">
            Current Partners
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/40" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {partners.map((partner, i) => (
            <motion.a
              key={i}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="group bg-card border border-primary/20 hover:border-primary rounded-xl p-6 flex flex-col gap-4 transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]"
            >
              <div className="h-20 flex items-center justify-center">
                {partner.display}
              </div>
              <div className="border-t border-primary/10 pt-4">
                <p className="text-xs text-muted-foreground leading-relaxed">{partner.description}</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-primary/60 group-hover:text-primary transition-colors mt-auto">
                <ExternalLink className="w-3 h-3" />
                <span className="font-heading tracking-wide">Visit {partner.name}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* SPIN Partnership */}
      <section className="py-14 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" />
            <span className="px-4 font-heading text-primary font-bold tracking-[0.2em] uppercase text-sm">
              Featured Partnership
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background border border-primary/30 rounded-2xl p-8 md:p-12 text-center shadow-[0_0_30px_rgba(212,175,55,0.08)]"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="font-heading font-bold text-2xl text-white">IEN</span>
              <span className="text-primary text-2xl font-bold">×</span>
              <span className="font-heading font-bold text-2xl text-white">Special Olympics Indiana</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              IEN proudly partners with Special Olympics Indiana (SPIN) to operate the Indiana Unified Esports
              Network — bringing together students with and without intellectual disabilities to compete as
              teammates. Together, we're proving that esports is truly a sport for everyone.
            </p>
            <Link href="/leagues/iuen">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest">
                LEARN ABOUT IUEN
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Become a Sponsor */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">BECOME A SPONSOR</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Support the growth of scholastic esports in Indiana while reaching thousands of highly
              engaged students, parents, and educators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-card border border-primary/30 p-8 rounded-xl text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
              <h3 className="font-heading font-bold text-xl text-white mb-2">Community Sponsor</h3>
              <p className="text-sm text-muted-foreground mb-6">Support local schools and regionals.</p>
              <div className="text-2xl font-bold text-primary mb-6">Tier 3</div>
            </div>

            <div className="bg-card border border-primary p-8 rounded-xl text-center relative overflow-hidden transform md:-translate-y-4 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <h3 className="font-heading font-bold text-xl text-white mb-2">State Finals Sponsor</h3>
              <p className="text-sm text-muted-foreground mb-6">Premium placement at our largest event.</p>
              <div className="text-2xl font-bold text-primary mb-6">Tier 1</div>
            </div>

            <div className="bg-card border border-primary/30 p-8 rounded-xl text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              <h3 className="font-heading font-bold text-xl text-white mb-2">Regional Sponsor</h3>
              <p className="text-sm text-muted-foreground mb-6">Brand presence at regional LANs.</p>
              <div className="text-2xl font-bold text-primary mb-6">Tier 2</div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/partner-with-ien">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest px-8 h-12">
                LEARN ABOUT SPONSORSHIP
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
