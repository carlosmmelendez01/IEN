import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Users, Gamepad2, Star } from "lucide-react";
import iuenLogo from "@assets/IEN-04_1776709327213.png";

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
             <img 
               src={iuenLogo} 
               alt="IUEN Logo" 
               className="h-32 w-auto object-contain drop-shadow-[0_0_30px_rgba(200,200,255,0.5)]"
             />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight">
              ESPORTS FOR EVERY STUDENT
            </h1>
            <p className="text-xl text-primary mb-6 font-heading tracking-widest">
              INDIANA UNIFIED ESPORTS NETWORK
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              In partnership with Indiana Special Olympics, IUEN creates competitive esports opportunities where students with and without intellectual disabilities compete side by side.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Special Olympics Partnership Banner */}
      <section className="py-10 bg-primary/10 border-y border-primary/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-heading font-bold tracking-widest uppercase text-sm mb-2">Official Partnership</p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
            Indiana Esports Network × Indiana Special Olympics
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Together, we're bringing inclusive competitive gaming to Indiana schools — creating an esports environment where every student has a place to compete, grow, and belong.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
          <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-2xl">How It Works</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-primary/30 p-8 rounded-xl hover:border-primary transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Star className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">Unified Athletes</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A Unified Athlete is a student with an intellectual disability who actively participates in training and competition. Athletes are full competitors — not spectators — and are placed on rosters just like any other player.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-card border border-primary/30 p-8 rounded-xl hover:border-primary transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">Unified Partners</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A Unified Partner is a student without an intellectual disability who competes alongside athletes in a meaningful, supportive way. Partners are not coaches or helpers — they are teammates competing in official matches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Game Titles */}
      <section className="py-8 pb-16 container mx-auto px-4">
        <div className="flex items-center justify-center mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
          <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-2xl">Unified Game Titles</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-lg mx-auto">
          <div className="bg-card border border-blue-500/40 p-8 rounded-xl text-center flex-1 hover:border-blue-400 transition-colors shadow-lg">
            <Gamepad2 className="w-10 h-10 text-blue-400 mx-auto mb-3" />
            <h4 className="font-heading font-bold text-xl text-blue-300 mb-1">Rocket League</h4>
            <p className="text-xs text-muted-foreground">3 starters | 2 subs</p>
            <p className="text-xs text-primary mt-2">Crossplay</p>
          </div>
          <div className="bg-card border border-pink-500/40 p-8 rounded-xl text-center flex-1 hover:border-pink-400 transition-colors shadow-lg">
            <Gamepad2 className="w-10 h-10 text-pink-400 mx-auto mb-3" />
            <h4 className="font-heading font-bold text-xl text-pink-300 mb-1">Super Smash Bros.</h4>
            <p className="text-xs text-muted-foreground">4 starters | 2 subs</p>
            <p className="text-xs text-primary mt-2">Nintendo Switch</p>
          </div>
        </div>
      </section>

      {/* Why Unified Esports */}
      <section className="py-16 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
            <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-2xl">Why It Matters</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-background border border-primary/20 p-6 rounded-xl text-center hover:border-primary hover:-translate-y-1 transition-all"
            >
              <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-heading font-bold text-lg text-white mb-2">True Inclusion</h4>
              <p className="text-xs text-muted-foreground">Athletes compete as equals — not observers. Unified teams play in official IEN matches with the same rules as every other team.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="bg-background border border-primary/20 p-6 rounded-xl text-center hover:border-primary hover:-translate-y-1 transition-all"
            >
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-heading font-bold text-lg text-white mb-2">Community Building</h4>
              <p className="text-xs text-muted-foreground">Unified programs bring together students from different backgrounds, building friendships that extend well beyond the game.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="bg-background border border-primary/20 p-6 rounded-xl text-center hover:border-primary hover:-translate-y-1 transition-all"
            >
              <Star className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-heading font-bold text-lg text-white mb-2">Student Leadership</h4>
              <p className="text-xs text-muted-foreground">Partners develop empathy, patience, and leadership skills that can't be taught in a classroom. Athletes gain confidence and competitive drive.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="bg-background border border-primary/20 p-6 rounded-xl text-center hover:border-primary hover:-translate-y-1 transition-all"
            >
              <Gamepad2 className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-heading font-bold text-lg text-white mb-2">Accessible Gaming</h4>
              <p className="text-xs text-muted-foreground">Game titles are chosen specifically for their accessibility — games that are fun and competitive for athletes and partners alike.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 container mx-auto px-4 mb-12 max-w-3xl text-center">
        <h2 className="text-3xl font-heading font-bold text-white mb-4">Add Unified Esports to Your School</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Any school already participating in IHSEN or IMSEN can add a Unified team at no extra cost. All you need is a coach, willing students, and a desire to compete inclusively. Contact IEN to learn how to get started.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-14 px-8 shadow-[0_0_20px_rgba(212,175,55,0.3)]" asChild>
            <Link href="/contact">CONTACT IEN ABOUT UNIFIED</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest h-14 px-8" asChild>
            <Link href="/start-a-program">START A PROGRAM</Link>
          </Button>
        </div>
      </section>

    </Layout>
  );
}
