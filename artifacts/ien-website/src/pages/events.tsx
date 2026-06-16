import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, FileText, MapPin, Newspaper, Trophy } from "lucide-react";
import drewRhodaPhoto from "@assets/state-finals/04-drew-rhoda-1200.jpg";

export default function Events() {
  return (
    <Layout>
      <SEO
        title="Events"
        description="Upcoming Indiana Esports Network events including State Finals, regular-season tournaments, and community gatherings."
        path="/events"
      />
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">EVENTS</span>
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Indiana's Premier Scholastic Esports Competitions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Event: Spring Finals 2026 */}
      <section className="py-12 container mx-auto px-4">
         <div className="relative rounded-2xl overflow-hidden border-2 border-primary/50 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>

            <div className="relative z-10 p-8 md:p-12 md:w-2/3">
               <div className="inline-block mb-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold tracking-widest rounded-full uppercase">
                 Featured Event
               </div>
               <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">IEN SPRING FINALS 2026</h2>

               <div className="flex flex-col gap-3 mb-8">
                  <div className="flex items-center gap-3 text-primary">
                     <Calendar className="w-5 h-5" />
                     <span className="font-medium text-lg">April 25, 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-primary">
                     <Clock className="w-5 h-5" />
                     <span className="font-medium text-lg">8:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-300">
                     <MapPin className="w-5 h-5 mt-1" />
                     <span className="font-medium text-lg">
                        Riverview Health Arena at Innovation Mile<br />
                        <span className="text-sm text-muted-foreground">14157 CJ Way, Noblesville, IN 46060</span>
                     </span>
                  </div>
               </div>

               <p className="text-muted-foreground mb-8 max-w-xl">
                  The largest esports event in Indiana is back. Join us at Riverview Health Arena as we crown 28 state champions and runners-up across middle and high school. The event is <span className="text-primary font-semibold">FREE</span> and open to the public, though all attendees must register for a free general admission ticket. Plus: a college/career fair, US Army Esports, cybersecurity competition, open play, and more.
               </p>

               <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest">
                     <a href="https://www.universe.com/events/ien-spring-finals-tickets-NSZ9K3" target="_blank" rel="noopener noreferrer">
                        GET FREE TICKETS
                     </a>
                  </Button>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest">
                     <a href="/events/spring-finals-2026-schedule.pdf" target="_blank" rel="noopener noreferrer">
                        <FileText className="w-4 h-4 mr-2" /> VIEW SCHEDULE
                     </a>
                  </Button>
                  <Button asChild variant="outline" className="border-primary/50 text-primary/80 hover:bg-primary hover:text-primary-foreground font-heading tracking-widest">
                     <a href="/events/spring-finals-2026-announcement.pdf" target="_blank" rel="noopener noreferrer">
                        <FileText className="w-4 h-4 mr-2" /> EVENT FLYER
                     </a>
                  </Button>
               </div>
            </div>
         </div>
      </section>

      {/* Coach of the Year — Drew Rhoda was named the 2025-26 winner at State Finals on
          April 25, 2026. Updated from the pre-announcement teaser to the post-announcement
          recognition card with his actual photo. */}
      <section className="py-8 container mx-auto px-4">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center max-w-5xl mx-auto"
         >
            {/* Photo: portrait crop kept intact via constrained max-width column. */}
            <div className="md:col-span-2 rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_30px_rgba(212,175,55,0.15)] bg-card">
               <img
                  src={drewRhodaPhoto}
                  alt="Drew Rhoda holding the IEN Coach of the Year 2025-26 trophy at State Finals"
                  loading="lazy"
                  className="w-full h-auto object-cover"
               />
            </div>
            {/* Citation. */}
            <div className="md:col-span-3 flex flex-col gap-4 text-center md:text-left">
               <div className="inline-flex items-center justify-center md:justify-start gap-2 text-primary font-heading font-bold tracking-widest uppercase text-sm">
                  <Trophy className="w-4 h-4" /> 2025–26 Coach of the Year
               </div>
               <h3 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
                  Drew Rhoda
               </h3>
               <p className="text-muted-foreground leading-relaxed">
                  IEN's Coach of the Year recognizes the educator who has had the biggest impact
                  on Indiana scholastic esports. Drew was honored on stage at the 2026 State
                  Finals on April 25 for his leadership, mentorship, and dedication to building
                  programs that put students first.
               </p>
               <p className="text-primary text-sm font-medium tracking-wide">
                  Congratulations to Drew Rhoda and the entire coaching community.
               </p>
               <Link
                  href="/news#post-3"
                  className="inline-flex items-center gap-2 self-center md:self-start mt-2 px-5 py-2.5 border border-primary text-primary font-heading tracking-widest text-sm uppercase rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
               >
                  Read the Story <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
         </motion.div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center my-12 container mx-auto px-4">
         <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
         <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">Past Events</span>
         <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
      </div>

      {/* Past Events */}
      <section className="py-8 container mx-auto px-4 mb-20">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
               href="/events/ien-x-pacers-graphic.pdf"
               target="_blank"
               rel="noopener noreferrer"
               className="relative h-64 rounded-xl overflow-hidden border border-primary/20 group hover:border-primary transition-colors md:col-span-2"
            >
               <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80" alt="IEN Esports Night with the Indiana Pacers" className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity mix-blend-luminosity" />
               <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
               <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-primary font-bold text-sm tracking-widest mb-1">March 29, 2026</div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-1">IEN ESPORTS NIGHT WITH THE INDIANA PACERS</h3>
                  <p className="text-sm text-muted-foreground">Gainbridge Fieldhouse · NBA 2K Final Four · Pacers vs Miami Heat · Career Fair</p>
               </div>
            </a>
            <div className="relative h-64 rounded-xl overflow-hidden border border-primary/20 group">
               <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80" alt="2025 State Finals" className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity mix-blend-luminosity" />
               <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent/50"></div>
               <div className="absolute bottom-6 left-6">
                  <div className="text-primary font-bold text-sm tracking-widest mb-1">2025</div>
                  <h3 className="text-2xl font-heading font-bold text-white">IEN STATE FINALS</h3>
               </div>
            </div>
         </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center my-12 container mx-auto px-4">
         <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
         <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">Newsletter</span>
         <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
      </div>

      {/* Newsletter */}
      <section className="py-8 container mx-auto px-4 mb-20">
         <div className="max-w-3xl mx-auto bg-card border border-primary/30 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
               <Newspaper className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
               <h3 className="text-2xl font-heading font-bold text-white mb-2">IEN Newsletter</h3>
               <p className="text-muted-foreground mb-4">
                  Catch up on the latest from IEN: league updates, featured schools, tournament results, and what's next for Indiana scholastic esports.
               </p>
               <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest">
                  <a href="/events/ien-newsletter.pdf" target="_blank" rel="noopener noreferrer">
                     <FileText className="w-4 h-4 mr-2" /> READ LATEST ISSUE
                  </a>
               </Button>
            </div>
         </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center my-12 container mx-auto px-4">
         <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
         <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">Champions</span>
         <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
      </div>
      
      {/* Champions */}
      <section className="py-8 container mx-auto px-4 mb-20">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
               { school: "Penn High School", game: "Valorant", color: "text-red-500" },
               { school: "Zionsville High School", game: "Rocket League", color: "text-blue-500" },
               { school: "Carmel High School", game: "Super Smash Bros", color: "text-gray-300" }
            ].map((champ, i) => (
               <div key={i} className="bg-card border border-primary/20 p-6 rounded-xl flex items-center gap-4 hover:border-primary transition-colors">
                  <div className="w-12 h-16 bg-background border border-primary rounded-md flex items-center justify-center shrink-0">
                     <span className="text-primary font-bold">#1</span>
                  </div>
                  <div>
                     <h4 className="font-bold text-white mb-1">{champ.school}</h4>
                     <p className={`text-sm font-heading font-bold ${champ.color}`}>{champ.game} State Champion</p>
                  </div>
               </div>
            ))}
         </div>
      </section>

    </Layout>
  );
}