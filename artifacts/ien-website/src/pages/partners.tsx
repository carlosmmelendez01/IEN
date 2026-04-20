import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function Partners() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        
        <div className="container relative z-20 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 tracking-tight">
            OUR <span className="text-primary">PARTNERS</span>
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Working Together to Advance Scholastic Esports in Indiana
          </p>
        </div>
      </section>

      {/* Title Sponsors */}
      <section className="py-16 container mx-auto px-4 text-center">
         <h2 className="text-sm font-heading font-bold text-primary mb-8 tracking-[0.2em] uppercase">Title Sponsors</h2>
         <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            <div className="w-64 h-32 bg-card border border-primary/20 rounded-xl flex items-center justify-center p-8 hover:border-primary transition-colors">
               {/* Logitech G Placeholder */}
               <span className="text-2xl font-bold text-white">Logitech <span className="text-[#00B8FC]">G</span></span>
            </div>
            <div className="w-64 h-32 bg-card border border-primary/20 rounded-xl flex items-center justify-center p-8 hover:border-primary transition-colors">
               {/* Ball State Placeholder */}
               <span className="text-xl font-bold text-red-500 uppercase tracking-wider text-center">Ball State<br/>University</span>
            </div>
         </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center my-8 container mx-auto px-4">
         <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30"></div>
         <div className="w-2 h-2 rounded-full bg-primary/50 mx-4"></div>
         <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30"></div>
      </div>

      {/* Technology Partners */}
      <section className="py-12 container mx-auto px-4 text-center">
         <h2 className="text-sm font-heading font-bold text-primary mb-8 tracking-[0.2em] uppercase">Technology & Event Partners</h2>
         <div className="flex flex-wrap justify-center gap-8">
            <div className="w-48 h-24 bg-card border border-primary/20 rounded-xl flex items-center justify-center p-4 hover:border-primary transition-colors">
               <span className="font-bold text-white">esportsU</span>
            </div>
            <div className="w-48 h-24 bg-card border border-primary/20 rounded-xl flex items-center justify-center p-4 hover:border-primary transition-colors">
               <span className="font-bold text-white text-center">Republic<br/>Airways</span>
            </div>
            <div className="w-48 h-24 bg-card border border-primary/20 rounded-xl flex items-center justify-center p-4 hover:border-primary transition-colors">
               <span className="font-bold text-white">LeagueOS</span>
            </div>
         </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center my-8 container mx-auto px-4">
         <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30"></div>
         <div className="w-2 h-2 rounded-full bg-primary/50 mx-4"></div>
         <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30"></div>
      </div>

      {/* Community Partners */}
      <section className="py-12 container mx-auto px-4 text-center mb-16">
         <h2 className="text-sm font-heading font-bold text-primary mb-8 tracking-[0.2em] uppercase">Community & Nonprofit Partners</h2>
         <div className="flex flex-wrap justify-center gap-6">
            {['Indiana Special Olympics', 'Indiana Interscholastic Athletic Administrators Assoc.', 'LeagueOS'].map((partner, i) => (
               <div key={i} className="w-48 h-20 bg-background border border-primary/10 rounded-lg flex items-center justify-center p-4">
                  <span className="text-sm font-medium text-muted-foreground text-center">{partner}</span>
               </div>
            ))}
         </div>
      </section>

      {/* Become a Sponsor */}
      <section className="py-20 bg-card border-y border-primary/20">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-heading font-bold text-white mb-4">BECOME A SPONSOR</h2>
               <p className="text-muted-foreground max-w-2xl mx-auto">
                  Support the growth of scholastic esports in Indiana while reaching thousands of highly engaged students, parents, and educators.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
               <div className="bg-background border border-primary/30 p-8 rounded-xl text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2">Community Sponsor</h3>
                  <p className="text-sm text-muted-foreground mb-6">Support local schools and regionals.</p>
                  <div className="text-2xl font-bold text-primary mb-6">Tier 3</div>
               </div>
               
               <div className="bg-background border border-primary p-8 rounded-xl text-center relative overflow-hidden transform md:-translate-y-4 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2">State Finals Sponsor</h3>
                  <p className="text-sm text-muted-foreground mb-6">Premium placement at our largest event.</p>
                  <div className="text-2xl font-bold text-primary mb-6">Tier 1</div>
               </div>
               
               <div className="bg-background border border-primary/30 p-8 rounded-xl text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2">Regional Sponsor</h3>
                  <p className="text-sm text-muted-foreground mb-6">Brand presence at regional LANs.</p>
                  <div className="text-2xl font-bold text-primary mb-6">Tier 2</div>
               </div>
            </div>
            
            <div className="text-center">
               <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest px-8 h-12">
                  DOWNLOAD SPONSORSHIP INFO
               </Button>
            </div>
         </div>
      </section>

    </Layout>
  );
}