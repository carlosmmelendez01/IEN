import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Headphones, Shield, Handshake, Mic } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        
        <div className="container relative z-20 mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight uppercase">
            CONTACT <span className="text-primary">INDIANA ESPORTS NETWORK</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 font-light">
            Have questions about starting a program, joining a league, or partnering with us? We're here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest px-8 h-12">
                SCHEDULE A MEETING
             </Button>
             <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest px-8 h-12" asChild>
                <a href="mailto:info@indianaesportsnetwork.org">EMAIL US</a>
             </Button>
          </div>
        </div>
      </section>

      {/* Contact Topics Grid */}
      <section className="py-20 container mx-auto px-4">
         <div className="text-center mb-12">
            <h2 className="text-2xl font-heading font-bold text-white tracking-widest uppercase">CONTACT BY TOPIC</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Topic 1 */}
            <div className="bg-card border border-primary/20 p-8 rounded-xl flex flex-col items-center text-center hover:border-primary transition-colors group">
               <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Headphones className="w-8 h-8 text-primary" />
               </div>
               <h3 className="text-xl font-heading font-bold text-white mb-2">Start an Esports Program</h3>
               <p className="text-sm text-muted-foreground mb-6 flex-grow">Questions about equipment, IT needs, or getting administrative approval.</p>
               <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest">
                  SCHEDULE ONBOARDING CALL
               </Button>
            </div>
            
            {/* Topic 2 */}
            <div className="bg-card border border-primary/20 p-8 rounded-xl flex flex-col items-center text-center hover:border-primary transition-colors group">
               <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-primary" />
               </div>
               <h3 className="text-xl font-heading font-bold text-white mb-2">League Competition Questions</h3>
               <p className="text-sm text-muted-foreground mb-6 flex-grow">Rules, scheduling, disputes, or LeagueOS platform assistance.</p>
               <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest">
                  EMAIL LEAGUE OPERATIONS
               </Button>
            </div>
            
            {/* Topic 3 */}
            <div className="bg-card border border-primary/20 p-8 rounded-xl flex flex-col items-center text-center hover:border-primary transition-colors group">
               <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Handshake className="w-8 h-8 text-primary" />
               </div>
               <h3 className="text-xl font-heading font-bold text-white mb-2">Sponsorship & Partnerships</h3>
               <p className="text-sm text-muted-foreground mb-6 flex-grow">Event sponsorship, unified program support, or brand integration.</p>
               <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest">
                  CONTACT PARTNERSHIPS
               </Button>
            </div>
            
            {/* Topic 4 */}
            <div className="bg-card border border-primary/20 p-8 rounded-xl flex flex-col items-center text-center hover:border-primary transition-colors group">
               <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mic className="w-8 h-8 text-primary" />
               </div>
               <h3 className="text-xl font-heading font-bold text-white mb-2">Media / Press</h3>
               <p className="text-sm text-muted-foreground mb-6 flex-grow">Interview requests, event coverage, or asset usage permission.</p>
               <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest">
                  CONTACT MARKETING
               </Button>
            </div>
         </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center my-12 container mx-auto px-4">
         <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
         <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-center max-w-[250px] md:max-w-none">MEET THE LEADERSHIP — Indiana Esports Network Board</span>
         <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
      </div>

      {/* Leadership Team */}
      <section className="py-12 container mx-auto px-4 mb-20">
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
               { name: "Joe Wilhelm", title: "Executive Director", initials: "JW" },
               { name: "Nick Parcell", title: "Board President", initials: "NP" },
               { name: "Dylan Gentilcore", title: "Board Secretary", initials: "DG" },
               { name: "Carlos Melendez", title: "Director of Marketing", initials: "CM" },
               { name: "Ryan Dunfee", title: "Board Member", initials: "RD" },
               { name: "Trevor Smith", title: "Board Member", initials: "TS" }
            ].map((person, i) => (
               <div key={i} className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-card border-2 border-primary flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)] text-primary font-heading text-2xl font-bold">
                     {person.initials}
                  </div>
                  <h4 className="font-bold text-white text-sm">{person.name}</h4>
                  <p className="text-xs text-muted-foreground">{person.title}</p>
               </div>
            ))}
         </div>
      </section>

    </Layout>
  );
}