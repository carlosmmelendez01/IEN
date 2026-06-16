import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, Heart, ShieldCheck, Scale, BookOpen } from "lucide-react";
import { ONBOARDING_URL } from "@/lib/socialLinks";

const visionPillars = [
  {
    icon: Users,
    title: "Students Are #1",
    desc: "Students are the priority; they are the reason we built this program. Every decision we make centers around their growth, safety, and success."
  },
  {
    icon: Heart,
    title: "Positivity in the Community",
    desc: "Be a role model for positivity in the gaming community. We set the standard for how scholastic esports is conducted in Indiana."
  },
  {
    icon: ShieldCheck,
    title: "Inclusivity",
    desc: "Gaming is for everyone. All students should feel welcome and valuable, regardless of background, race, gender, or socioeconomic status."
  },
  {
    icon: Scale,
    title: "Fair Play",
    desc: "We provide consistent rules to maintain a level playing field for every school and every student across all divisions."
  },
  {
    icon: BookOpen,
    title: "Fostering Guidance",
    desc: "We provide a place for students to compete and learn esports, while helping schools build sustainable programs from the ground up."
  }
];

export default function WhyEsports() {
  return (
    <Layout>
      <SEO
        title="Why Esports"
        description="Why scholastic esports matters: academic growth, career pathways, and student community through gaming."
        path="/why-esports"
      />
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
             <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest px-8" asChild>
               <Link href="/start-a-program">START A PROGRAM</Link>
             </Button>
             <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest px-8">
                <a href={ONBOARDING_URL} target="_blank" rel="noopener noreferrer">SCHEDULE AN ONBOARDING MEETING</a>
             </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card border-b border-primary/20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="flex items-center justify-center my-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
            <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">Our Mission</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-heading font-bold text-white leading-snug"
          >
            "To prepare students for the future through{" "}
            <span className="text-primary">collaboration, communication, creativity,</span>{" "}
            and <span className="text-primary">critical thinking</span> through video games and esports."
          </motion.blockquote>
          <p className="mt-6 text-muted-foreground">Indiana Esports Network</p>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
          <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">Our Vision</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visionPillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-card border border-primary/20 p-8 rounded-xl hover:border-primary hover:-translate-y-1 transition-all"
            >
              <pillar.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-bold text-lg text-white mb-3">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reach Students Section */}
      <section className="py-20 container mx-auto px-4 border-t border-primary/10">
         <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
               <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 uppercase">Reach students traditional activities may miss</h2>
               <p className="text-muted-foreground mb-4 leading-relaxed">
                  Research shows that up to 80% of students who join an esports team have never participated in another extracurricular activity at their school. 
               </p>
               <p className="text-muted-foreground leading-relaxed">
                  By bringing these students into a structured, adult-supervised environment, schools see increased attendance, higher GPAs, and improved behavioral outcomes among participants. Esports creates a sense of belonging and school pride for gamers.
               </p>
               <p className="text-muted-foreground mt-4 leading-relaxed font-medium text-white/80">
                  IEN's Unified program also creates opportunities for students with intellectual disabilities to compete alongside their peers, making esports one of the most inclusive extracurricular programs available.
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-white mb-12 uppercase tracking-widest">Academic and Career Benefits</h2>
            
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
                     Competitive esports requires split-second decision making, clear communication under pressure, and the ability to work cohesively as a unit. These are critical soft skills for any career.
                  </p>
               </div>
               <div className="bg-background border border-primary/20 p-8 rounded-xl hover:border-primary transition-colors">
                  <h3 className="text-xl font-heading font-bold text-primary mb-4">Career Pathways</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                     Beyond playing, esports programs need shoutcasters, stream managers, graphic designers, team managers, and data analysts, opening doors to modern media and tech careers.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Why Schools Invest / What they receive */}
      <section className="py-20 container mx-auto px-4 mb-10">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
               <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 uppercase">Why Schools Are Investing in Esports</h2>
               <ul className="space-y-4">
                  {[
                     "Improves student attendance and engagement",
                     "Creates new leadership opportunities for students",
                     "Supports attendance and sense of belonging",
                     "Connects to CTE/STEM career pathways",
                     "Builds school community across diverse student groups",
                     "Provides an inclusive environment for all backgrounds"
                  ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 bg-card border border-primary/10 p-4 rounded-lg">
                        <div className="w-6 h-6 bg-primary/20 text-primary flex items-center justify-center rounded-full shrink-0 text-sm font-bold">✓</div>
                        <span className="text-gray-200 font-medium">{item}</span>
                     </li>
                  ))}
               </ul>
            </div>
            
            <div className="bg-card border-2 border-primary rounded-xl p-8 shadow-[0_0_20px_rgba(212,175,55,0.15)] relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full"></div>
               <h2 className="text-3xl font-heading font-bold text-white mb-6 uppercase relative z-10">What Schools Receive When They Join IEN</h2>
               <ul className="space-y-4 text-muted-foreground relative z-10">
                  <li className="flex items-start gap-2">
                     <div className="w-2 h-2 bg-primary mt-2 rounded-full shrink-0"></div>
                     <span>Structured competition seasons (Fall & Spring)</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-2 h-2 bg-primary mt-2 rounded-full shrink-0"></div>
                     <span>Weekly match schedules through LeagueOS</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-2 h-2 bg-primary mt-2 rounded-full shrink-0"></div>
                     <span>State championship events at the end of each season</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-2 h-2 bg-primary mt-2 rounded-full shrink-0"></div>
                     <span>Coach community support via Discord</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-2 h-2 bg-primary mt-2 rounded-full shrink-0"></div>
                     <span>Program development guidance and onboarding support</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <div className="w-2 h-2 bg-primary mt-2 rounded-full shrink-0"></div>
                     <span>Access to LeagueOS competition platform</span>
                  </li>
               </ul>
            </div>
         </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 text-center border-t border-primary/20">
         <p className="text-primary font-heading tracking-widest uppercase mb-6 font-bold">Download the Indiana Scholastic Esports Program Guide</p>
         <div className="flex flex-wrap justify-center gap-4">
             <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest px-8">
                <a href={ONBOARDING_URL} target="_blank" rel="noopener noreferrer">SCHEDULE AN ONBOARDING MEETING</a>
             </Button>
             <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest px-8" asChild>
               <Link href="/start-a-program">START A PROGRAM</Link>
             </Button>
          </div>
      </section>

    </Layout>
  );
}
