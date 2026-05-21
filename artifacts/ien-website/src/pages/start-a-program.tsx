import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GraduationCap, ClipboardCheck, Users } from "lucide-react";
import { ONBOARDING_URL } from "@/lib/socialLinks";

export default function StartAProgram() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        
        <div className="container relative z-20 mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight uppercase">
            Start an Esports Program <br/>at Your School
          </h1>
          <p className="text-xl text-primary mb-8 font-light">
            Join the Indiana Esports Network and bring the benefits of competitive gaming to your students.
          </p>
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-14 px-8 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <a href={ONBOARDING_URL} target="_blank" rel="noopener noreferrer">SCHEDULE AN ONBOARDING MEETING</a>
          </Button>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 container mx-auto px-4">
         <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase tracking-wider">Get Your School Connected</h2>
            <p className="text-muted-foreground text-lg">Three Steps to Starting Your Esports Club or Team</p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-primary/20 z-0"></div>
            
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-primary/40 rounded-xl p-8 relative z-10 flex flex-col h-full hover:border-primary transition-colors"
            >
               <div className="w-16 h-16 bg-background border-2 border-primary text-primary flex items-center justify-center rounded-full font-heading text-2xl font-bold mb-6 mx-auto shadow-[0_0_15px_rgba(212,175,55,0.2)]">1</div>
               <h3 className="font-heading font-bold text-xl text-white text-center mb-6">SCHEDULE AN ONBOARDING MEETING</h3>
               <p className="text-sm text-muted-foreground mb-4">Meet with the IEN team to learn how esports works in schools. The meeting covers:</p>
               <ul className="space-y-3 text-sm text-muted-foreground mb-8 flex-grow">
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>Overview of the Indiana Esports Network</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>League structure and season format</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>Equipment and facility recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>Coaching expectations and responsibilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>Q&A with school administrators or coaches</span>
                  </li>
               </ul>
               <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest mt-auto">
                  <a href={ONBOARDING_URL} target="_blank" rel="noopener noreferrer">SCHEDULE MEETING</a>
               </Button>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-card border border-primary/40 rounded-xl p-8 relative z-10 flex flex-col h-full hover:border-primary transition-colors"
            >
               <div className="w-16 h-16 bg-background border-2 border-primary text-primary flex items-center justify-center rounded-full font-heading text-2xl font-bold mb-6 mx-auto shadow-[0_0_15px_rgba(212,175,55,0.2)]">2</div>
               <h3 className="font-heading font-bold text-xl text-white text-center mb-6">BUILD YOUR PROGRAM</h3>
               <p className="text-sm text-muted-foreground mb-4">Set up your school's esports club or team:</p>
               <ul className="space-y-3 text-sm text-muted-foreground mb-8 flex-grow">
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>Identify a coach or advisor (must be a background-checked staff member)</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>Recruit student players and build your roster</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>Select competitive titles to participate in</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>Prepare space and equipment</span>
                  </li>
               </ul>
               <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest mt-auto">
                  DOWNLOAD PROGRAM GUIDE
               </Button>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-card border border-primary/40 rounded-xl p-8 relative z-10 flex flex-col h-full hover:border-primary transition-colors"
            >
               <div className="w-16 h-16 bg-background border-2 border-primary text-primary flex items-center justify-center rounded-full font-heading text-2xl font-bold mb-6 mx-auto shadow-[0_0_15px_rgba(212,175,55,0.2)]">3</div>
               <h3 className="font-heading font-bold text-xl text-white text-center mb-6">REGISTER WITH IEN</h3>
               <p className="text-sm text-muted-foreground mb-4">Officially join the league and begin competing:</p>
               <ul className="space-y-3 text-sm text-muted-foreground mb-8 flex-grow">
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>Register your teams on LeagueOS</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>Select competitive titles for each team</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>Prepare for the upcoming season</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>New schools begin at Club level for the first semester</span>
                  </li>
               </ul>
               <Button variant="outline" asChild className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest mt-auto">
                  <a href="https://leagueos.gg" target="_blank" rel="noopener noreferrer">REGISTER SCHOOL</a>
               </Button>
               <p className="text-xs text-muted-foreground text-center mt-2">Available after your onboarding meeting is complete.</p>
            </motion.div>
         </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
            <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">Player Eligibility</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background border border-primary/20 p-8 rounded-xl hover:border-primary transition-colors">
              <GraduationCap className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-bold text-lg text-white mb-3">Enrollment Requirements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary shrink-0">✓</span> <span>IHSEN: Currently enrolled in grades 9–12 in an Indiana high school</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">✓</span> <span>IMSEN: Currently enrolled in grades 6–8 in an Indiana middle school</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">✓</span> <span>School must be able to provide proof of enrollment for all roster players</span></li>
              </ul>
            </div>
            <div className="bg-background border border-primary/20 p-8 rounded-xl hover:border-primary transition-colors">
              <ClipboardCheck className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-bold text-lg text-white mb-3">Academic Standards</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary shrink-0">✓</span> <span>Must meet all attendance and academic requirements of the player's school district</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">✓</span> <span>Must adhere to athletic or esports eligibility guidelines of the enrolled school</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">✓</span> <span>Must sign and agree to the program's Code of Conduct</span></li>
              </ul>
            </div>
            <div className="bg-background border border-primary/20 p-8 rounded-xl hover:border-primary transition-colors">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-bold text-lg text-white mb-3">School Divisions</h3>
              <p className="text-sm text-muted-foreground mb-4">IHSEN Varsity is split into two divisions to keep competition balanced:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary font-bold">A</span> <span>Generally smaller-enrollment schools</span></li>
                <li className="flex gap-2"><span className="text-primary font-bold">AA</span> <span>Generally larger-enrollment schools</span></li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4 italic">Placement is set per title each season — the dividing line is adjusted based on which schools register for that title to keep brackets competitive. Club, IMSEN, and IUEN are not divided this way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 text-center mb-10 bg-gradient-to-b from-transparent to-primary/5 border-b border-primary/10">
         <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Get Started with IEN Today!</h2>
         <p className="text-muted-foreground mb-8">Take the first step in bringing competitive gaming to your school.</p>
         <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-14 px-8">
            <a href={ONBOARDING_URL} target="_blank" rel="noopener noreferrer">SCHEDULE AN ONBOARDING MEETING</a>
         </Button>
      </section>

    </Layout>
  );
}
