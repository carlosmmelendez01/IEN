import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { socialLinks } from "@/lib/socialLinks";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Cinematic Backdrop (Placeholder gradient) */}
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
              INDIANA ESPORTS <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">NETWORK</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
              Fostering community, competition, and inclusion for middle school, high school, and unified programs across Indiana.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest text-lg h-14 px-8">
                <a href="https://leagueos.gg" target="_blank" rel="noopener noreferrer">JOIN THE LEAGUE</a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 font-heading tracking-widest text-lg h-14 px-8" asChild>
                <Link href="/start-a-program">START A PROGRAM</Link>
              </Button>
            </div>

            {/* Social links row */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <span className="text-xs text-muted-foreground tracking-widest uppercase font-heading mr-1">Follow IEN</span>
              {socialLinks.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/10 transition-all [&_svg]:w-4 [&_svg]:h-4">
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8, duration: 1 }}
             className="mt-20 inline-flex items-center gap-3 px-6 py-3 bg-card border border-primary/30 rounded-xl shadow-2xl backdrop-blur-sm"
          >
             <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
             <span className="font-heading tracking-widest text-lg">80+ SCHOOLS COMPETING STATEWIDE</span>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center my-12 container mx-auto px-4">
         <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
         <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-2xl">How It Works</span>
         <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
      </div>

      {/* Start Program Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">HOW TO START AN ESPORTS PROGRAM</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connector line behind steps */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2 z-0"></div>
          
          {[
            { step: "01", title: "Join The League", desc: "Click the Join button to access LeagueOS." },
            { step: "02", title: "Register", desc: "Register your school and coaches." },
            { step: "03", title: "Select Titles", desc: "Choose your league and games." },
            { step: "04", title: "Compete", desc: "Begin competing in the next season!" }
          ].map((item, i) => (
            <div key={i} className="relative z-10 bg-card border border-primary/30 p-6 rounded-xl text-center shadow-lg hover:border-primary transition-colors group">
              <div className="w-16 h-16 mx-auto bg-background border-2 border-primary text-primary flex items-center justify-center rounded-full font-heading text-2xl font-bold mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                {item.step}
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest">
             <Link href="/start-a-program">GET DETAILED GUIDE</Link>
           </Button>
        </div>
      </section>
      
      {/* Divider */}
      <div className="flex items-center justify-center my-12 container mx-auto px-4">
         <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
         <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-2xl">Upcoming Events</span>
         <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
      </div>

      {/* Events Quick View */}
      <section className="py-16 container mx-auto px-4 mb-20">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-xl border border-primary/30 aspect-video bg-card hover:border-primary transition-colors">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity mix-blend-overlay"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="text-primary font-bold text-sm tracking-widest mb-2">MAY 18-19, 2024</div>
                  <h3 className="text-3xl font-heading font-bold text-white mb-2">IEN STATE FINALS</h3>
                  <p className="text-gray-300 mb-4">Ball State University</p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                     <Link href="/events">LEARN MORE</Link>
                  </Button>
               </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl border border-primary/30 aspect-video bg-card hover:border-primary transition-colors">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity mix-blend-overlay"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="text-primary font-bold text-sm tracking-widest mb-2">APRIL 2024</div>
                  <h3 className="text-3xl font-heading font-bold text-white mb-2">REGIONAL LANS</h3>
                  <p className="text-gray-300 mb-4">North, Central, and South Regions</p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                     <Link href="/events">LEARN MORE</Link>
                  </Button>
               </div>
            </div>
         </div>
      </section>

    </Layout>
  );
}