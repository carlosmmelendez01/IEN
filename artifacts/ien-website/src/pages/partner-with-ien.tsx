import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function PartnerWithIEN() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-card">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        
        <div className="container relative z-20 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            PARTNER WITH <span className="text-primary">IEN</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6 font-light max-w-3xl mx-auto">
            Connect with thousands of students across Indiana through the state's premier scholastic esports league.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-14 px-8 mt-4">
            BECOME A PARTNER
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-primary/20 bg-background/50">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               <div>
                  <div className="text-4xl font-heading font-bold text-primary mb-2">180</div>
                  <div className="text-sm font-medium tracking-wider uppercase text-muted-foreground">Schools Registered</div>
               </div>
               <div>
                  <div className="text-4xl font-heading font-bold text-primary mb-2">7,263</div>
                  <div className="text-sm font-medium tracking-wider uppercase text-muted-foreground">Students</div>
               </div>
               <div>
                  <div className="text-4xl font-heading font-bold text-primary mb-2">12+</div>
                  <div className="text-sm font-medium tracking-wider uppercase text-muted-foreground">Statewide Events</div>
               </div>
               <div>
                  <div className="text-4xl font-heading font-bold text-primary mb-2">6</div>
                  <div className="text-sm font-medium tracking-wider uppercase text-muted-foreground">Competitive Titles</div>
               </div>
            </div>
         </div>
      </section>

      {/* Sponsorship Opportunities */}
      <section className="py-20 container mx-auto px-4">
         <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase tracking-wider">Sponsorship Opportunities</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card border border-primary/30 p-8 rounded-xl flex flex-col items-center text-center shadow-lg hover:border-primary transition-all">
               <h3 className="font-heading font-bold text-2xl text-white mb-4">State Finals Sponsor</h3>
               <p className="text-muted-foreground text-sm mb-8 flex-grow">
                  Title recognition at our massive year-end championship event. Includes physical booth space, stream overlays, jersey logo placement on champion teams, and VIP access.
               </p>
            </div>
            
            <div className="bg-card border border-primary p-8 rounded-xl flex flex-col items-center text-center shadow-[0_0_20px_rgba(212,175,55,0.15)] transform md:-translate-y-4">
               <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">Most Popular</div>
               <h3 className="font-heading font-bold text-2xl text-white mb-4">Program Partner</h3>
               <p className="text-muted-foreground text-sm mb-8 flex-grow">
                  Year-round integration into the IEN ecosystem. Newsletter features, website branding, Discord community presence, and direct connection with school administrators.
               </p>
            </div>
            
            <div className="bg-card border border-primary/30 p-8 rounded-xl flex flex-col items-center text-center shadow-lg hover:border-primary transition-all">
               <h3 className="font-heading font-bold text-2xl text-white mb-4">Regional Event Sponsor</h3>
               <p className="text-muted-foreground text-sm mb-8 flex-grow">
                  Targeted local presence at one of our three regional qualifiers (North, Central, or South). Great for local universities and businesses wanting community connection.
               </p>
            </div>
         </div>
         
         <div className="text-center">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest px-8 h-12">
               DOWNLOAD SPONSORSHIP PACKET
            </Button>
         </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-card text-center border-t border-primary/20 relative overflow-hidden mb-20">
         <div className="absolute inset-0 bg-primary/5"></div>
         <div className="container relative z-10 mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Help Shape the Future of Scholastic Esports in Indiana</h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
               <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest px-8">
                  CONTACT PARTNERSHIPS
               </Button>
               <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest px-8">
                  VIEW CURRENT PARTNERS
               </Button>
            </div>
         </div>
      </section>

    </Layout>
  );
}