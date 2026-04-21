import { useState, lazy, Suspense } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Users } from "lucide-react";
import { SCHOOLS } from "@/data/schools";

const SchoolMap = lazy(() => import("@/components/schools/SchoolMap"));

const DIVISIONS = ["All Divisions", "High School (IHSEN)", "Middle School (IMSEN)", "Unified (IUEN)"];
const PAGE_SIZE = 12;

const divisionLabel = (d: string) => {
  if (d === "IHSEN") return "High School";
  if (d === "IMSEN") return "Middle School";
  return "Unified";
};
const divisionColor = (d: string) => {
  if (d === "IHSEN") return "text-primary";
  if (d === "IMSEN") return "text-violet-400";
  return "text-emerald-400";
};

export default function Schools() {
  const [query, setQuery] = useState("");
  const [division, setDivision] = useState("All Divisions");
  const [showAll, setShowAll] = useState(false);

  const filtered = SCHOOLS.filter((s) => {
    const matchDiv =
      division === "All Divisions" ||
      (division === "High School (IHSEN)" && s.division === "IHSEN") ||
      (division === "Middle School (IMSEN)" && s.division === "IMSEN") ||
      (division === "Unified (IUEN)" && s.division === "IUEN");
    const matchQ =
      query === "" ||
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.city.toLowerCase().includes(query.toLowerCase());
    return matchDiv && matchQ;
  });

  const visible = showAll ? filtered : filtered.slice(0, PAGE_SIZE);

  const northCount = SCHOOLS.filter(s => s.lat > 40.9).length;
  const centralCount = SCHOOLS.filter(s => s.lat >= 39.4 && s.lat <= 40.9).length;
  const southCount = SCHOOLS.filter(s => s.lat < 39.4).length;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative z-20 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 tracking-tight">
            MEMBER <span className="text-primary">SCHOOLS</span>
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            214+ schools competing across Indiana in the Esports Network
          </p>
        </div>
      </section>

      {/* Map + Directory */}
      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left: Map */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map */}
            <div className="bg-card border border-primary/30 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <div style={{ height: 480 }}>
                <Suspense fallback={
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-primary mx-auto mb-2 animate-pulse" />
                      <p className="text-sm">Loading map…</p>
                    </div>
                  </div>
                }>
                  <SchoolMap schools={SCHOOLS} selectedDivision={division} />
                </Suspense>
              </div>

              {/* Legend */}
              <div className="px-4 py-3 border-t border-primary/20 flex flex-wrap gap-4 text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-primary inline-block"></span>
                  IHSEN (High School)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-violet-500 inline-block"></span>
                  IMSEN (Middle School)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                  IUEN (Unified)
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-card border border-primary/30 rounded-xl p-6 shadow-[0_0_20px_rgba(212,175,55,0.05)]">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-white">214+</div>
                  <div className="text-xs text-primary tracking-widest uppercase mt-1">Schools</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-white">7,000+</div>
                  <div className="text-xs text-primary tracking-widest uppercase mt-1">Student Athletes</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  { label: "North Region", count: northCount },
                  { label: "Central Region", count: centralCount },
                  { label: "South Region", count: southCount },
                ].map(r => (
                  <div key={r.label} className="flex items-center justify-between bg-background/60 px-3 py-2 rounded-lg">
                    <span className="text-muted-foreground">{r.label}</span>
                    <span className="font-heading font-bold text-primary">{r.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Directory */}
          <div className="lg:col-span-3">
            {/* Search + Filter */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search schools or cities…"
                  value={query}
                  onChange={e => { setQuery(e.target.value); setShowAll(false); }}
                  className="pl-10 bg-card border-primary/30 focus-visible:ring-primary h-11"
                />
              </div>
              <select
                value={division}
                onChange={e => { setDivision(e.target.value); setShowAll(false); }}
                className="bg-card border border-primary/30 rounded-md px-4 h-11 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-white"
              >
                {DIVISIONS.map(d => <option key={d}>{d}</option>)}
              </select>
            </div>

            {/* Results count */}
            <p className="text-xs text-muted-foreground mb-4">
              Showing <span className="text-primary font-bold">{visible.length}</span> of <span className="text-primary font-bold">{filtered.length}</span> schools
            </p>

            {/* School List */}
            <div className="space-y-2 mb-6">
              {visible.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  No schools found matching your search.
                </div>
              ) : (
                visible.map((school, i) => (
                  <div
                    key={i}
                    className="bg-card border border-primary/15 p-4 rounded-lg flex items-center justify-between hover:border-primary/50 hover:bg-card/80 transition-all group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 shrink-0 bg-background border border-primary/20 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-primary/60" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-white text-sm leading-tight truncate">{school.name}</h4>
                        <div className="flex items-center gap-2 mt-0.5">
                          <MapPin className="w-3 h-3 text-muted-foreground shrink-0" />
                          <span className="text-xs text-muted-foreground truncate">{school.city}</span>
                          <span className={`text-xs font-bold ${divisionColor(school.division)}`}>{school.division}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <div className="text-sm font-bold text-white">{school.teams}</div>
                      <div className="text-xs text-muted-foreground">Teams</div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Load More / Collapse */}
            {filtered.length > PAGE_SIZE && (
              <div className="text-center">
                {!showAll ? (
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest px-8"
                    onClick={() => setShowAll(true)}
                  >
                    VIEW ALL {filtered.length} SCHOOLS
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="border-primary/50 text-muted-foreground hover:border-primary hover:text-primary font-heading tracking-widest px-8"
                    onClick={() => setShowAll(false)}
                  >
                    SHOW LESS
                  </Button>
                )}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-card border-y border-primary/20 mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-white mb-10 tracking-widest uppercase">Featured Programs</h2>
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
