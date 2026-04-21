import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export default function Events() {
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">EVENTS</span>
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Indiana's Premier Scholastic Esports Competitions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-12 container mx-auto px-4">
         <div className="relative rounded-2xl overflow-hidden border-2 border-primary/50 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
            
            <div className="relative z-10 p-8 md:p-12 md:w-2/3">
               <div className="inline-block mb-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold tracking-widest rounded-full uppercase">
                 Featured Event
               </div>
               <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">IEN STATE FINALS</h2>
               
               <div className="flex flex-col gap-3 mb-8">
                  <div className="flex items-center gap-3 text-primary">
                     <Calendar className="w-5 h-5" />
                     <span className="font-medium text-lg">May 18-19, 2024</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                     <MapPin className="w-5 h-5" />
                     <span className="font-medium text-lg">Ball State University Arena</span>
                  </div>
               </div>
               
               <p className="text-muted-foreground mb-8 max-w-xl">
                  The culmination of the spring season. Watch the top high school and middle school teams from across Indiana compete for the state championship titles in Valorant, Rocket League, Overwatch 2, and Super Smash Bros.
               </p>
               
               <div className="flex flex-wrap gap-4">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest">
                     VIEW EVENT DETAILS
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest">
                     REGISTER NOW
                  </Button>
               </div>
            </div>
         </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center my-12 container mx-auto px-4">
         <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
         <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">Upcoming Events</span>
         <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
      </div>

      {/* Upcoming Events List */}
      <section className="py-8 container mx-auto px-4">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
               { title: "North Region LAN", date: "May 4, 2024", location: "Mishawaka High School", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80" },
               { title: "Central Region LAN", date: "April 27, 2024", location: "Park Tudor School, Indianapolis", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80" },
               { title: "South Region LAN", date: "April 27, 2024", location: "East Washington MS, Pekin IN", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80" }
            ].map((event, i) => (
               <div key={i} className="bg-card border border-primary/20 rounded-xl overflow-hidden group hover:border-primary transition-all">
                  <div className="h-48 relative overflow-hidden">
                     <img src={event.image} alt={event.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-500" />
                     <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                  </div>
                  <div className="p-6 relative -mt-12 z-10">
                     <div className="bg-background border border-primary/50 px-3 py-1 inline-block rounded text-primary text-xs font-bold mb-3">{event.date}</div>
                     <h3 className="font-heading font-bold text-xl text-white mb-2">{event.title}</h3>
                     <div className="flex items-start gap-2 text-muted-foreground text-sm mb-6">
                        <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{event.location}</span>
                     </div>
                     <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest text-sm">
                        VIEW EVENT
                     </Button>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center my-12 container mx-auto px-4">
         <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
         <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">Past Events</span>
         <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
      </div>

      {/* Past Events */}
      <section className="py-8 container mx-auto px-4 mb-20">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 rounded-xl overflow-hidden border border-primary/20 group">
               <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80" alt="2023 State Finals" className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity mix-blend-luminosity" />
               <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent/50"></div>
               <div className="absolute bottom-6 left-6">
                  <div className="text-primary font-bold text-sm tracking-widest mb-1">2023</div>
                  <h3 className="text-2xl font-heading font-bold text-white">IEN STATE FINALS</h3>
               </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden border border-primary/20 group">
               <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80" alt="2022 State Finals" className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity mix-blend-luminosity" />
               <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent/50"></div>
               <div className="absolute bottom-6 left-6">
                  <div className="text-primary font-bold text-sm tracking-widest mb-1">2022</div>
                  <h3 className="text-2xl font-heading font-bold text-white">IEN STATE FINALS</h3>
               </div>
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