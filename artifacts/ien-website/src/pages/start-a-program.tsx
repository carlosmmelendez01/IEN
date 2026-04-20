import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

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
            Join the Indiana Esports Network and connect your students to competition, community, and opportunity.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-14 px-8 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            SCHEDULE AN ONBOARDING MEETING
          </Button>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 container mx-auto px-4">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-white mb-4 uppercase tracking-wider">Get Your School Connected</h2>
            <p className="text-muted-foreground text-lg">Three Steps to Starting Your Esports Club or Team</p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-primary/20 z-0"></div>
            
            {/* Step 1 */}
            <div className="bg-card border border-primary/40 rounded-xl p-8 relative z-10 flex flex-col h-full hover:border-primary transition-colors">
               <div className="w-16 h-16 bg-background border-2 border-primary text-primary flex items-center justify-center rounded-full font-heading text-2xl font-bold mb-6 mx-auto shadow-[0_0_15px_rgba(212,175,55,0.2)]">1</div>
               <h3 className="font-heading font-bold text-xl text-white text-center mb-6">SCHEDULE AN ONBOARDING MEETING</h3>
               <ul className="space-y-3 text-sm text-muted-foreground mb-8 flex-grow">
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>Meet with IEN staff to discuss your school's needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>Learn about equipment and IT requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>Understand the league structure and time commitment</span>
                  </li>
               </ul>
               <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest mt-auto">
                  SCHEDULE MEETING
               </Button>
            </div>
            
            {/* Step 2 */}
            <div className="bg-card border border-primary/40 rounded-xl p-8 relative z-10 flex flex-col h-full hover:border-primary transition-colors">
               <div className="w-16 h-16 bg-background border-2 border-primary text-primary flex items-center justify-center rounded-full font-heading text-2xl font-bold mb-6 mx-auto shadow-[0_0_15px_rgba(212,175,55,0.2)]">2</div>
               <h3 className="font-heading font-bold text-xl text-white text-center mb-6">BUILD YOUR PROGRAM</h3>
               <ul className="space-y-3 text-sm text-muted-foreground mb-8 flex-grow">
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>Identify a coach or faculty sponsor</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>Recruit student players and finalize your roster</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>Work with IT to unblock necessary game servers</span>
                  </li>
               </ul>
               <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest mt-auto">
                  DOWNLOAD GUIDE
               </Button>
            </div>
            
            {/* Step 3 */}
            <div className="bg-card border border-primary/40 rounded-xl p-8 relative z-10 flex flex-col h-full hover:border-primary transition-colors">
               <div className="w-16 h-16 bg-background border-2 border-primary text-primary flex items-center justify-center rounded-full font-heading text-2xl font-bold mb-6 mx-auto shadow-[0_0_15px_rgba(212,175,55,0.2)]">3</div>
               <h3 className="font-heading font-bold text-xl text-white text-center mb-6">REGISTER WITH IEN</h3>
               <ul className="space-y-3 text-sm text-muted-foreground mb-8 flex-grow">
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>Create your school profile on LeagueOS</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>Have students register and join your school's team</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                     <span>Sign up for the specific game titles you'll play</span>
                  </li>
               </ul>
               <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest mt-auto asChild">
                  <a href="https://leagueos.gg" target="_blank" rel="noopener noreferrer">REGISTER SCHOOL</a>
               </Button>
            </div>
         </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 text-center mb-10 bg-gradient-to-b from-transparent to-primary/5 border-b border-primary/10">
         <h2 className="text-3xl font-heading font-bold text-white mb-8">Get Started with IEN Today!</h2>
         <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-14 px-8">
            SCHEDULE AN ONBOARDING MEETING
         </Button>
      </section>

    </Layout>
  );
}