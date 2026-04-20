import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Leagues() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-card">
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
              IEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">LEAGUES</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 font-light">
              Three Competitive Divisions of Scholastic Esports Since 2019
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Indiana Esports Network provides structured, season-long competition for students at every level. From middle school clubs to varsity collegiate programs, there's a place for your team to compete.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leagues Cards */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "IHSEN",
              subtitle: "Indiana High School Esports Network",
              desc: "Our flagship division featuring varsity and junior varsity competition for high schools across the state. Compete for state championships and collegiate recruitment opportunities.",
              link: "/leagues/ihsen"
            },
            {
              title: "IMSEN",
              subtitle: "Indiana Middle School Esports Network",
              desc: "Building the foundation of scholastic esports. A developmental league focused on sportsmanship, digital citizenship, and competitive fundamentals.",
              link: "/leagues/imsen"
            },
            {
              title: "IUEN",
              subtitle: "Indiana University Esports Network",
              desc: "Premier collegiate competition featuring university programs. Bridging the gap between high school talent and collegiate scholarship opportunities.",
              link: "/leagues/iuen"
            }
          ].map((league, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-primary/30 p-8 rounded-xl flex flex-col items-center text-center shadow-lg hover:border-primary transition-all hover:-translate-y-1"
            >
              <div className="w-24 h-28 mb-6 bg-background border-2 border-primary flex items-center justify-center rounded-lg" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                <span className="font-heading font-bold text-2xl text-primary">{league.title}</span>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2 text-white">{league.title}</h3>
              <p className="text-primary text-sm font-medium mb-4">{league.subtitle}</p>
              <p className="text-muted-foreground text-sm mb-8 flex-grow">{league.desc}</p>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest" asChild>
                <Link href={league.link}>LEARN MORE</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center my-12 container mx-auto px-4">
         <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
         <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase">Competitive Game Titles</span>
         <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
      </div>

      {/* Games Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Valorant", color: "border-red-500", text: "text-red-500" },
            { name: "Rocket League", color: "border-blue-500", text: "text-blue-500" },
            { name: "Overwatch 2", color: "border-orange-500", text: "text-orange-500" },
            { name: "Fortnite", color: "border-purple-500", text: "text-purple-500" },
            { name: "Mario Kart", color: "border-red-600", text: "text-red-600" },
            { name: "Super Smash Bros", color: "border-gray-300", text: "text-gray-300" }
          ].map((game, i) => (
            <div key={i} className={`bg-card border ${game.color} p-6 rounded-xl flex items-center justify-center text-center shadow-lg hover:bg-background transition-colors aspect-square`}>
               <span className={`font-heading font-bold text-lg ${game.text}`}>{game.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center my-12 container mx-auto px-4">
         <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
         <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase">Season Format</span>
         <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
      </div>

      {/* Timeline Section */}
      <section className="py-16 container mx-auto px-4 mb-20">
         <div className="relative">
            {/* Horizontal Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                 { title: "Fall Season", subtitle: "Online Competition", date: "Oct - Dec" },
                 { title: "Spring Season", subtitle: "Online Competition", date: "Feb - Apr" },
                 { title: "Regional LANs", subtitle: "In-Person Qualifiers", date: "Late April" },
                 { title: "IEN State Finals", subtitle: "Championship Event", date: "Mid May" }
               ].map((step, i) => (
                 <div key={i} className="relative z-10 bg-card border border-primary/30 p-6 rounded-xl text-center shadow-lg hover:border-primary transition-colors group">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center rounded-full font-bold font-heading">{i + 1}</div>
                    <div className="text-primary text-sm font-bold mb-2">{step.date}</div>
                    <h3 className="font-heading font-bold text-xl text-white mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.subtitle}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

    </Layout>
  );
}