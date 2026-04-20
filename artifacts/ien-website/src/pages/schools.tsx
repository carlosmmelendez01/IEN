import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Schools() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        
        <div className="container relative z-20 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 tracking-tight">
            MEMBER <span className="text-primary">SCHOOLS</span>
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Schools Competing in the Indiana Esports Network
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container mx-auto px-4">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Map / Stats Side */}
            <div className="lg:col-span-1 space-y-8">
               <div className="bg-card border border-primary/30 p-8 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.1)] text-center">
                  {/* Map Placeholder */}
                  <div className="aspect-[3/4] bg-background border border-primary/20 rounded-lg mb-6 flex flex-col items-center justify-center gap-6 relative overflow-hidden">
                     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDIxMiwgMTc1LCA1NSwgMC4yKSI+PC9jaXJjbGU+Cjwvc3ZnPg==')] opacity-50"></div>
                     <div className="z-10 bg-card/80 backdrop-blur px-4 py-2 border border-primary/30 rounded text-sm"><span className="text-primary font-bold">48</span> North</div>
                     <div className="z-10 bg-card/80 backdrop-blur px-4 py-2 border border-primary/30 rounded text-sm"><span className="text-primary font-bold">71</span> Central</div>
                     <div className="z-10 bg-card/80 backdrop-blur px-4 py-2 border border-primary/30 rounded text-sm"><span className="text-primary font-bold">53</span> South</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-left">
                     <div>
                        <div className="text-3xl font-heading font-bold text-white">172+</div>
                        <div className="text-xs text-primary tracking-widest uppercase">Schools</div>
                     </div>
                     <div>
                        <div className="text-3xl font-heading font-bold text-white">4000+</div>
                        <div className="text-xs text-primary tracking-widest uppercase">Students</div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Directory Side */}
            <div className="lg:col-span-2">
               <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="relative flex-1">
                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                     <Input 
                        placeholder="Search schools..." 
                        className="pl-10 bg-card border-primary/30 focus-visible:ring-primary h-12"
                     />
                  </div>
                  <select className="bg-card border border-primary/30 rounded-md px-4 h-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                     <option>All Divisions</option>
                     <option>High School (IHSEN)</option>
                     <option>Middle School (IMSEN)</option>
                     <option>Collegiate (IUEN)</option>
                  </select>
               </div>

               <div className="space-y-4 mb-8">
                  {[
                     { name: "Michigan City High School", location: "Michigan City, IN", teams: 2, division: "IHSEN" },
                     { name: "Carmel High School", location: "Carmel, IN", teams: 5, division: "IHSEN" },
                     { name: "Penn High School", location: "Mishawaka, IN", teams: 4, division: "IHSEN" },
                     { name: "Zionsville High School", location: "Zionsville, IN", teams: 4, division: "IHSEN" },
                     { name: "Fishers High School", location: "Fishers, IN", teams: 6, division: "IHSEN" },
                     { name: "Avon High School", location: "Avon, IN", teams: 3, division: "IHSEN" },
                     { name: "East Washington Middle School", location: "Pekin, IN", teams: 2, division: "IMSEN" },
                  ].map((school, i) => (
                     <div key={i} className="bg-card border border-primary/20 p-4 rounded-lg flex items-center justify-between hover:border-primary/50 transition-colors">
                        <div>
                           <h4 className="font-bold text-white">{school.name}</h4>
                           <div className="text-sm text-muted-foreground flex gap-4 mt-1">
                              <span>{school.location}</span>
                              <span className="text-primary/70">{school.division}</span>
                           </div>
                        </div>
                        <div className="text-right hidden sm:block">
                           <div className="text-sm font-medium">{school.teams} Teams</div>
                        </div>
                     </div>
                  ))}
               </div>
               
               <div className="text-center">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest px-8">
                     VIEW ALL SCHOOLS
                  </Button>
               </div>
            </div>

         </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-card border-y border-primary/20 mb-20">
         <div className="container mx-auto px-4">
            <h2 className="text-2xl font-heading font-bold text-center text-white mb-10 tracking-widest uppercase">Featured Programs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               <div className="relative h-64 rounded-xl overflow-hidden border border-primary/30 group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                     <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded mb-3 inline-block">CHAMPIONS</span>
                     <h3 className="text-xl font-heading font-bold text-white">Fishers High School Wins State Championship</h3>
                  </div>
               </div>
               <div className="relative h-64 rounded-xl overflow-hidden border border-primary/30 group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                     <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded mb-3 inline-block">SPOTLIGHT</span>
                     <h3 className="text-xl font-heading font-bold text-white">Building a Middle School Program at East Washington</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </Layout>
  );
}