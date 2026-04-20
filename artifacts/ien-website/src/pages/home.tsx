import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
              {[
                { label: "Discord", href: "https://discord.gg/indianaesportsnetwork", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.031.053a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg> },
                { label: "Instagram", href: "https://instagram.com/indianaesportsnetwork", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg> },
                { label: "Twitter / X", href: "https://twitter.com/INEsportsNetwork", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                { label: "YouTube", href: "https://youtube.com/@IndianaEsportsNetwork", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
                { label: "Facebook", href: "https://facebook.com/IndianaEsportsNetwork", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/10 transition-all">
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