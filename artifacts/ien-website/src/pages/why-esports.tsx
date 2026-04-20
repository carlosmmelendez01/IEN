import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function WhyEsports() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        
        <div className="container relative z-20 mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight uppercase">
            Why Start Esports <br/>at Your School?
          </h1>
          <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
            Esports is more than just playing games. It's a platform for inclusion, academic growth, and future career pathways for a demographic of students often disconnected from traditional school activities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest px-8">
                START A PROGRAM
             </Button>
             <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest px-8">
                SCHEDULE AN ONBOARDING MEETING
             </Button>
          </div>
        </div>
      </section>

      {/* Reach Students Section */}
      <section className="py-20 container mx-auto px-4">
         <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
               <h2 className="text-3xl font-heading font-bold text-white mb-6 uppercase">Reach students traditional activities may miss</h2>
               <p className="text-muted-foreground mb-4 leading-relaxed">
                  Research shows that up to 80% of students who join an esports team have never participated in another extracurricular activity at their school. 
               </p>
               <p className="text-muted-foreground leading-relaxed">
                  By bringing these students into a structured, adult-supervised environment, schools see increased attendance, higher GPAs, and improved behavioral outcomes among participants. Esports creates a sense of belonging and school pride for gamers.
               </p>
            </div>
            <div className="md:w-1/2">
               <div className="rounded-xl overflow-hidden border border-primary/30 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                  <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80" alt="Students competing" className="w-full h-auto" />
               </div>
            </div>
         </div>
      </section>

      {/* Academic Benefits */}
      <section className="py-20 bg-card border-y border-primary/20">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center text-white mb-12 uppercase tracking-widest">Academic and Career Benefits</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-background border border-primary/20 p-8 rounded-xl hover:border-primary transition-colors">
                  <h3 className="text-xl font-heading font-bold text-primary mb-4">STEM & Technology</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                     Students gain hands-on experience with high-end PC hardware, networking, troubleshooting, and software management. These technical skills translate directly to IT and computer science fields.
                  </p>
               </div>
               <div className="bg-background border border-primary/20 p-8 rounded-xl hover:border-primary transition-colors">
                  <h3 className="text-xl font-heading font-bold text-primary mb-4">Communication & Teamwork</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                     Competitive esports requires split-second decision making, clear communication under pressure, and the ability to work cohesively as a unit — critical soft skills for any career.
                  </p>
               </div>
               <div className="bg-background border border-primary/20 p-8 rounded-xl hover:border-primary transition-colors">
                  <h3 className="text-xl font-heading font-bold text-primary mb-4">Career Pathways</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                     Beyond playing, esports programs need shoutcasters (broadcasting), stream managers (production), graphic designers, team managers, and data analysts, opening doors to modern media careers.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Why Schools Invest / What they receive */}
      <section className="py-20 container mx-auto px-4 mb-10">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
               <h2 className="text-3xl font-heading font-bold text-white mb-8 uppercase">Why Schools Are Investing in Esports</h2>
               <ul className="space-y-4">
                  {[
                     "Improves student attendance and engagement",
                     "Fosters an inclusive campus environment",
                     "Provides millions in collegiate scholarship opportunities",
                     "Teaches digital citizenship and healthy gaming habits",
                     "Connects passion to STEM career pathways"
                  ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 bg-card border border-primary/10 p-4 rounded-lg">
                        <div className="w-6 h-6 bg-primary/20 text-primary flex items-center justify-center rounded-full shrink-0">✓</div>
                        <span className="text-gray-200 font-medium">{item}</span>
                     </li>
                  ))}
               </ul>
            </div>
            
            <div className="bg-card border-2 border-primary rounded-xl p-8 shadow-[0_0_20px_rgba(212,175,55,0.15)] relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full"></div>
               <h2 className="text-2xl font-heading font-bold text-white mb-6 uppercase relative z-10">What Schools Receive When They Join IEN</h2>
               <ul className="space-y-4 text-muted-foreground relative z-10">
                  <li className="flex items-start gap-2">
                     <div className="w-2 h-2 bg-primary mt-2 rounded-full shrink-0"></div>
                     <span>Access to the LeagueOS platform for match scheduling and roster management</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-2 h-2 bg-primary mt-2 rounded-full shrink-0"></div>
                     <span>Structured, rules-based competition across multiple game titles</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-2 h-2 bg-primary mt-2 rounded-full shrink-0"></div>
                     <span>Eligibility for Regional LAN qualifiers and the State Finals</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-2 h-2 bg-primary mt-2 rounded-full shrink-0"></div>
                     <span>Coaches discord for support, scrimmages, and community</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-2 h-2 bg-primary mt-2 rounded-full shrink-0"></div>
                     <span>Access to IEN partner discounts on equipment and software</span>
                  </li>
               </ul>
            </div>
         </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 text-center border-t border-primary/20">
         <p className="text-primary font-heading tracking-widest uppercase mb-6 font-bold">Download the Indiana Scholastic Esports Program Guide</p>
         <div className="flex flex-wrap justify-center gap-4">
             <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest px-8">
                SCHEDULE AN ONBOARDING MEETING
             </Button>
             <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest px-8">
                START A PROGRAM
             </Button>
          </div>
      </section>

    </Layout>
  );
}