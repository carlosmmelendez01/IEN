import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GraduationCap, Users, Briefcase, Plane } from "lucide-react";

export default function IUEN() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
             <div className="w-32 h-40 bg-background border-4 border-primary flex items-center justify-center rounded-lg shadow-[0_0_30px_rgba(212,175,55,0.4)]" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                <span className="font-heading font-bold text-4xl text-primary">IUEN</span>
             </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight">
              THE HOME OF COLLEGIATE ESPORTS <br/>AT INDIANA UNIVERSITY
            </h1>
            <p className="text-xl text-primary mb-8 font-heading tracking-widest">
              INDIANA UNIVERSITY ESPORTS NETWORK
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Columns */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           <div>
              <h3 className="font-heading font-bold text-2xl text-white border-b border-primary/30 pb-2 mb-4">About IUEN</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                 The Indiana University Esports Network connects campuses across the IU system in competitive play. We provide a platform for student-athletes to showcase their skills, build community, and represent their campuses on a state and national level.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                 Whether you're looking to compete at the highest collegiate level or find a community of like-minded gamers, IUEN offers opportunities for all students.
              </p>
           </div>
           
           <div>
              <h3 className="font-heading font-bold text-2xl text-white border-b border-primary/30 pb-2 mb-4">Games We Play</h3>
              <div className="grid grid-cols-2 gap-3">
                 <div className="bg-card border border-primary/20 p-3 text-center rounded-md hover:border-primary transition-colors">
                    <span className="font-heading text-red-500 font-bold">Valorant</span>
                 </div>
                 <div className="bg-card border border-primary/20 p-3 text-center rounded-md hover:border-primary transition-colors">
                    <span className="font-heading text-blue-500 font-bold">Rocket League</span>
                 </div>
                 <div className="bg-card border border-primary/20 p-3 text-center rounded-md hover:border-primary transition-colors">
                    <span className="font-heading text-orange-500 font-bold">Overwatch 2</span>
                 </div>
                 <div className="bg-card border border-primary/20 p-3 text-center rounded-md hover:border-primary transition-colors">
                    <span className="font-heading text-purple-500 font-bold">Fortnite</span>
                 </div>
              </div>
           </div>
           
           <div>
              <h3 className="font-heading font-bold text-2xl text-white border-b border-primary/30 pb-2 mb-4">Our Competitions</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                 <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>Weekly inter-campus league matches</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>Semester championships</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>Invitational LAN tournaments</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>Cross-state rivalry events</span>
                 </li>
              </ul>
           </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center my-12 container mx-auto px-4">
         <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
         <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase">Why Join IUEN?</span>
         <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className="bg-card border border-primary/20 p-6 rounded-xl text-center hover:border-primary hover:-translate-y-1 transition-all">
              <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-heading font-bold text-lg text-white mb-2">Scholarship Opportunities</h4>
              <p className="text-xs text-muted-foreground">Access to institutional and partner scholarships for top-performing student-athletes.</p>
           </div>
           <div className="bg-card border border-primary/20 p-6 rounded-xl text-center hover:border-primary hover:-translate-y-1 transition-all">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-heading font-bold text-lg text-white mb-2">Campus Community</h4>
              <p className="text-xs text-muted-foreground">Connect with hundreds of students who share your passion for competitive gaming.</p>
           </div>
           <div className="bg-card border border-primary/20 p-6 rounded-xl text-center hover:border-primary hover:-translate-y-1 transition-all">
              <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-heading font-bold text-lg text-white mb-2">Professional Development</h4>
              <p className="text-xs text-muted-foreground">Gain experience in broadcasting, management, marketing, and esports operations.</p>
           </div>
           <div className="bg-card border border-primary/20 p-6 rounded-xl text-center hover:border-primary hover:-translate-y-1 transition-all">
              <Plane className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-heading font-bold text-lg text-white mb-2">Travel & Compete</h4>
              <p className="text-xs text-muted-foreground">Represent your campus at regional LAN events and the state finals.</p>
           </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 text-center mb-12">
         <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest text-xl h-16 px-12 shadow-[0_0_20px_rgba(212,175,55,0.4)]" asChild>
            <a href="https://leagueos.gg" target="_blank" rel="noopener noreferrer">JOIN IUEN NOW</a>
         </Button>
      </section>

    </Layout>
  );
}