import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, GraduationCap } from "lucide-react";

const featuredPartners = [
  {
    name: "Stay Plugged In (SPIN)",
    url: "https://www.staypluggedin.com",
    external: true,
    description: "A leading gaming organization providing academic roadmapping, STEM and esports competitions, college recruitment, and career pathways for IEN students.",
    display: (
      <div className="flex flex-col items-center justify-center w-full h-full gap-1">
        <span className="font-heading font-bold text-primary text-lg tracking-widest">STAY PLUGGED IN</span>
        <span className="text-xs text-muted-foreground tracking-[0.25em] uppercase">SPIN</span>
      </div>
    ),
  },
  {
    name: "Gravity Gaming by ByteSpeed",
    url: "https://www.bytespeed.com",
    external: true,
    description: "Hardware solutions and gaming rigs supporting IEN competition and events.",
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
    external: true,
    description: "The official league management platform for IEN scheduling, rosters, and standings.",
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
    external: true,
    description: "Community sponsor supporting IEN events and student-athletes across Indiana.",
    display: (
      <div className="flex items-center justify-center w-full h-full">
        <span className="text-5xl font-black text-[#FFC72C]">M</span>
      </div>
    ),
  },
  {
    name: "Spectrum Industries",
    url: "https://www.spectrumindustriesinc.com",
    external: true,
    description: "Providing ergonomic esports furniture and workstations for IEN program schools.",
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
    external: true,
    description: "Public relations and communications partner amplifying IEN's mission statewide.",
    display: (
      <div className="flex flex-col items-center justify-center w-full h-full gap-0.5">
        <span className="font-heading font-bold text-[#3b9edd] text-base tracking-widest">STARFALL</span>
        <span className="font-heading font-bold text-white text-sm tracking-[0.3em]">PR</span>
      </div>
    ),
  },
];

const collegiatePartners = [
  // Screen 1
  { name: "Purdue Northwest",             subtitle: "Esports",          state: "IN" },
  { name: "Indiana Wesleyan University",  subtitle: "IWU Esports",      state: "IN" },
  { name: "Indiana Tech",                 subtitle: "Esports",          state: "IN" },
  { name: "CHC Cougars",                  subtitle: "Esports",          state: "IN" },
  { name: "IU Indianapolis",              subtitle: "IU Indy Esports",  state: "IN" },
  { name: "Illinois Wesleyan University", subtitle: "Esports",          state: "IL" },
  { name: "Valparaiso University",        subtitle: "Valpo Esports",    state: "IN" },
  { name: "Trine University",             subtitle: "Esports",          state: "IN" },
  // Screen 2
  { name: "Oakland City University",      subtitle: "Mighty Oaks Esports", state: "IN" },
  { name: "University of Indianapolis",   subtitle: "Esports",          state: "IN" },
  { name: "IU East",                      subtitle: "Red Wolves Esports", state: "IN" },
  { name: "Bellarmine University",        subtitle: "Esports",          state: "KY" },
  { name: "Indiana State University",     subtitle: "Esports",          state: "IN" },
  { name: "Marian University",            subtitle: "Esports",          state: "IN" },
  { name: "Adrian College",               subtitle: "Esports",          state: "MI" },
  { name: "IU Southeast",                 subtitle: "Esports",          state: "IN" },
  // Screen 3
  { name: "University of Southern Indiana", subtitle: "USI Esports",   state: "IN" },
  { name: "Ohio Northern University",     subtitle: "ONU Esports",      state: "OH" },
  { name: "Otterbein University",         subtitle: "Esports",          state: "OH" },
  { name: "IU Kokomo",                    subtitle: "Cougars Esports",  state: "IN" },
  { name: "Bethel University",            subtitle: "Esports",          state: "IN" },
];

export default function Partners() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 tracking-tight">
              OUR <span className="text-primary">PARTNERS</span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
              Working Together to Advance Scholastic Esports in Indiana
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" />
          <span className="px-4 font-heading text-primary font-bold tracking-[0.2em] uppercase text-sm">
            Featured Partners
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/40" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {featuredPartners.map((partner, i) => {
            const inner = (
              <>
                <div className="h-20 flex items-center justify-center">
                  {partner.display}
                </div>
                <div className="border-t border-primary/10 pt-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">{partner.description}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-primary/60 group-hover:text-primary transition-colors mt-auto">
                  <ExternalLink className="w-3 h-3" />
                  <span className="font-heading tracking-wide">
                    {partner.external ? `Visit ${partner.name}` : "Learn More"}
                  </span>
                </div>
              </>
            );

            const sharedClass =
              "group bg-card border border-primary/20 hover:border-primary rounded-xl p-6 flex flex-col gap-4 transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                {partner.external ? (
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" className={sharedClass}>
                    {inner}
                  </a>
                ) : (
                  <Link href={partner.url} className={sharedClass}>
                    {inner}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Collegiate Partners */}
      <section className="py-16 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" />
            <span className="px-4 font-heading text-primary font-bold tracking-[0.2em] uppercase text-sm">
              Collegiate Partners
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <p className="text-center text-muted-foreground text-sm mb-10 max-w-2xl mx-auto">
            IEN partners with colleges and universities across Indiana and the region — creating a pathway from scholastic esports to collegiate competition.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 max-w-6xl mx-auto">
            {collegiatePartners.map((school, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                className="bg-background border border-primary/15 hover:border-primary/50 rounded-xl p-4 text-center flex flex-col items-center gap-2 transition-all hover:-translate-y-0.5 group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-xs leading-tight">{school.name}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">{school.subtitle}</div>
                  <div className="text-[10px] text-primary/60 font-bold mt-0.5">{school.state}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground/50 mt-8">
            21 collegiate programs. Growing every season.
          </p>
        </div>
      </section>

      {/* IEN × Special Olympics Partnership Callout */}
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-primary/30 rounded-2xl p-8 md:p-12 text-center shadow-[0_0_30px_rgba(212,175,55,0.08)]"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="font-heading font-bold text-2xl text-white">IEN</span>
              <span className="text-primary text-2xl font-bold">×</span>
              <span className="font-heading font-bold text-2xl text-white">Special Olympics Indiana</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              IEN proudly partners with Special Olympics Indiana to operate the Indiana Unified Esports
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
      <section className="py-20 bg-card border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">BECOME A SPONSOR</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Support the growth of scholastic esports in Indiana while reaching thousands of highly
              engaged students, parents, and educators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-background border border-primary/30 p-8 rounded-xl text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
              <h3 className="font-heading font-bold text-xl text-white mb-2">Community Sponsor</h3>
              <p className="text-sm text-muted-foreground mb-6">Support local schools and regionals.</p>
              <div className="text-2xl font-bold text-primary mb-6">Tier 3</div>
            </div>
            <div className="bg-background border border-primary p-8 rounded-xl text-center relative overflow-hidden transform md:-translate-y-4 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <h3 className="font-heading font-bold text-xl text-white mb-2">State Finals Sponsor</h3>
              <p className="text-sm text-muted-foreground mb-6">Premium placement at our largest event.</p>
              <div className="text-2xl font-bold text-primary mb-6">Tier 1</div>
            </div>
            <div className="bg-background border border-primary/30 p-8 rounded-xl text-center relative overflow-hidden">
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
