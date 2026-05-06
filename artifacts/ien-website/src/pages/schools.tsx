import { useState, lazy, Suspense } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Search, MapPin, Users, Trophy, Gamepad2, ExternalLink, UserCheck, Calendar, GraduationCap, School as SchoolIcon } from "lucide-react";
import { SCHOOLS, type School } from "@/data/schools";
import { COLLEGES } from "@/data/colleges";

const SchoolMap = lazy(() => import("@/components/schools/SchoolMap"));
const CollegeMap = lazy(() => import("@/components/schools/CollegeMap"));

const DIVISIONS = ["All Divisions", "High School (IHSEN)", "Middle School (IMSEN)", "Unified (IUEN)"];
const PAGE_SIZE = 12;

const PLACEHOLDER_DESCRIPTION =
  "Program details coming soon. Check back for more information about this school's esports program, including roster highlights, competition history, and how to get involved.";

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
const divisionBadge = (d: string) => {
  if (d === "IHSEN") return "bg-primary/20 text-primary border-primary/40";
  if (d === "IMSEN") return "bg-violet-500/20 text-violet-300 border-violet-500/40";
  return "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
};

export default function Schools() {
  // Member Schools (K-12) search/filter state
  const [query, setQuery] = useState("");
  const [division, setDivision] = useState("All Divisions");
  const [showAll, setShowAll] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);

  // Partnered Colleges search state (separate from Member Schools)
  const [collegeQuery, setCollegeQuery] = useState("");

  const filtered = SCHOOLS.filter((s) => {
    const matchDiv =
      division === "All Divisions" ||
      (division === "High School (IHSEN)" && s.divisions.includes("IHSEN")) ||
      (division === "Middle School (IMSEN)" && s.divisions.includes("IMSEN")) ||
      (division === "Unified (IUEN)" && s.divisions.includes("IUEN"));
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

  // Collegiate directory filter + region breakdown (same lat bands as Member Schools)
  const filteredColleges = COLLEGES.filter((c) => {
    const q = collegeQuery.toLowerCase();
    return (
      q === "" ||
      c.name.toLowerCase().includes(q) ||
      c.city.toLowerCase().includes(q) ||
      c.program.toLowerCase().includes(q)
    );
  });
  const collegeNorth   = COLLEGES.filter(c => c.lat > 40.9).length;
  const collegeCentral = COLLEGES.filter(c => c.lat >= 39.4 && c.lat <= 40.9).length;
  const collegeSouth   = COLLEGES.filter(c => c.lat < 39.4).length;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative z-20 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 tracking-tight">
            MEMBER <span className="text-primary">SCHOOLS</span>
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto mb-8">
            180+ schools competing across Indiana in the Esports Network
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest text-base h-12 px-8"
            >
              <a href="#member-directory">
                <SchoolIcon className="w-4 h-4 mr-2" />
                BROWSE MEMBER SCHOOLS
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest text-base h-12 px-8"
            >
              <a href="#partnered-colleges">
                <GraduationCap className="w-4 h-4 mr-2" />
                PARTNERED COLLEGES
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Map + Directory */}
      <section id="member-directory" className="py-12 container mx-auto px-4 scroll-mt-20">
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
                  <div className="text-4xl font-heading font-bold text-white">180+</div>
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
              <span className="ml-2 text-muted-foreground/70">· click a school for details</span>
            </p>

            {/* School List */}
            <div className="space-y-2 mb-6">
              {visible.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  No schools found matching your search.
                </div>
              ) : (
                visible.map((school, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedSchool(school)}
                    className="w-full bg-card border border-primary/15 p-4 rounded-lg flex items-center hover:border-primary/50 hover:bg-card/80 transition-all group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
                    aria-label={`View details for ${school.name}`}
                  >
                    <div className="flex items-center gap-3 min-w-0 w-full">
                      <div className="w-10 h-10 shrink-0 bg-background border border-primary/20 rounded-full flex items-center justify-center overflow-hidden">
                        {school.logo ? (
                          <img
                            src={school.logo}
                            alt={`${school.name} logo`}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <Users className="w-4 h-4 text-primary/60" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-white text-sm leading-tight truncate group-hover:text-primary transition-colors">{school.name}</h4>
                        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                          <MapPin className="w-3 h-3 text-muted-foreground shrink-0" />
                          <span className="text-xs text-muted-foreground truncate">{school.city}</span>
                          {school.divisions.map((d) => (
                            <span key={d} className={`text-xs font-bold ${divisionColor(d)}`}>{d}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
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

      {/* Partnered Colleges - mirrors the Member Schools Map + Directory layout.
          Reachable from the hero "PARTNERED COLLEGES" CTA. */}
      <section id="partnered-colleges" className="py-16 mb-20 container mx-auto px-4 scroll-mt-20">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" />
          <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
            Partnered Colleges
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/40" />
        </div>
        <p className="text-center text-muted-foreground text-sm mb-10 max-w-2xl mx-auto">
          Indiana colleges and universities with esports programs that recruit from IEN. A direct pathway from scholastic esports to collegiate competition, scholarships, and varsity programs.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left: College Map */}
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
                  <CollegeMap colleges={COLLEGES} />
                </Suspense>
              </div>

              {/* Legend */}
              <div className="px-4 py-3 border-t border-primary/20 flex flex-wrap gap-4 text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-primary inline-block"></span>
                  Collegiate Esports Program
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-card border border-primary/30 rounded-xl p-6 shadow-[0_0_20px_rgba(212,175,55,0.05)]">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-white">{COLLEGES.length}</div>
                  <div className="text-xs text-primary tracking-widest uppercase mt-1">Colleges</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-white">IN</div>
                  <div className="text-xs text-primary tracking-widest uppercase mt-1">Hoosier State</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  { label: "North Region", count: collegeNorth },
                  { label: "Central Region", count: collegeCentral },
                  { label: "South Region", count: collegeSouth },
                ].map(r => (
                  <div key={r.label} className="flex items-center justify-between bg-background/60 px-3 py-2 rounded-lg">
                    <span className="text-muted-foreground">{r.label}</span>
                    <span className="font-heading font-bold text-primary">{r.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: College Directory */}
          <div className="lg:col-span-3">
            {/* Search */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search colleges, cities, or programs…"
                  value={collegeQuery}
                  onChange={e => setCollegeQuery(e.target.value)}
                  className="pl-10 bg-card border-primary/30 focus-visible:ring-primary h-11"
                />
              </div>
            </div>

            {/* Results count */}
            <p className="text-xs text-muted-foreground mb-4">
              Showing <span className="text-primary font-bold">{filteredColleges.length}</span> of <span className="text-primary font-bold">{COLLEGES.length}</span> Indiana colleges
              <span className="ml-2 text-muted-foreground/70">· click a college for more</span>
            </p>

            {/* College list */}
            <div className="space-y-2 mb-6">
              {filteredColleges.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  No colleges found matching your search.
                </div>
              ) : (
                filteredColleges.map((college, i) => {
                  const card = (
                    <div className="flex items-center gap-3 min-w-0 w-full">
                      <div className="w-10 h-10 shrink-0 bg-background border border-primary/20 rounded-full flex items-center justify-center overflow-hidden">
                        {college.logo ? (
                          <img
                            src={college.logo}
                            alt={`${college.name} logo`}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <GraduationCap className="w-4 h-4 text-primary/60" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-white text-sm leading-tight truncate group-hover:text-primary transition-colors">
                          {college.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                          <MapPin className="w-3 h-3 text-muted-foreground shrink-0" />
                          <span className="text-xs text-muted-foreground truncate">{college.city}</span>
                          <span className="text-xs font-bold text-primary">{college.program}</span>
                        </div>
                      </div>
                      {college.website && (
                        <ExternalLink className="w-3.5 h-3.5 text-primary/60 group-hover:text-primary transition-colors shrink-0" />
                      )}
                    </div>
                  );

                  const sharedClass =
                    "w-full bg-card border border-primary/15 p-4 rounded-lg flex items-center hover:border-primary/50 hover:bg-card/80 transition-all group text-left";

                  return college.website ? (
                    <a
                      key={i}
                      href={college.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={sharedClass}
                      aria-label={`Visit ${college.name} website`}
                    >
                      {card}
                    </a>
                  ) : (
                    <div key={i} className={sharedClass + " cursor-default"}>
                      {card}
                    </div>
                  );
                })
              )}
            </div>

            <p className="text-xs text-muted-foreground/60 mt-4">
              A growing network of collegiate programs recruiting Hoosier esports talent.
              {" "}Know a program we're missing?{" "}
              <a
                href="mailto:info@indianaesportsnetwork.org?subject=Collegiate%20Program%20Addition"
                className="text-primary hover:text-primary/80 underline-offset-2 hover:underline"
              >
                Let us know
              </a>.
            </p>
          </div>

        </div>
      </section>

      {/* School Detail Modal */}
      <Dialog open={selectedSchool !== null} onOpenChange={(open) => !open && setSelectedSchool(null)}>
        <DialogContent className="bg-card border-primary/30 max-w-lg">
          {selectedSchool && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-background border-2 border-primary/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    {selectedSchool.logo ? (
                      <img
                        src={selectedSchool.logo}
                        alt={`${selectedSchool.name} logo`}
                        className="w-full h-full object-contain p-1"
                      />
                    ) : (
                      <Users className="w-7 h-7 text-primary/60" />
                    )}
                  </div>
                  <div className="text-left min-w-0">
                    <DialogTitle className="font-heading text-white text-xl md:text-2xl leading-tight">
                      {selectedSchool.name}
                    </DialogTitle>
                    <DialogDescription asChild>
                      <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-3.5 h-3.5" />
                          {selectedSchool.city}
                        </span>
                        {selectedSchool.divisions.map((d) => (
                          <span key={d} className={`text-xs font-bold px-2 py-0.5 rounded border ${divisionBadge(d)}`}>
                            {d} · {divisionLabel(d)}
                          </span>
                        ))}
                      </div>
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selectedSchool.description ?? PLACEHOLDER_DESCRIPTION}
              </p>

              {/* Quick facts grid */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="bg-background/60 border border-primary/20 rounded-lg px-3 py-2.5">
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5">Teams</div>
                  <div className="font-heading font-bold text-primary text-lg leading-none">{selectedSchool.teams}</div>
                </div>
                {selectedSchool.established && (
                  <div className="bg-background/60 border border-primary/20 rounded-lg px-3 py-2.5">
                    <div className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> Established
                    </div>
                    <div className="font-heading font-bold text-primary text-lg leading-none">{selectedSchool.established}</div>
                  </div>
                )}
                {selectedSchool.coach && (
                  <div className="bg-background/60 border border-primary/20 rounded-lg px-3 py-2.5 col-span-2">
                    <div className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5 flex items-center gap-1">
                      <UserCheck className="w-3 h-3" /> Head Coach
                    </div>
                    <div className="font-heading font-bold text-white text-base leading-none">{selectedSchool.coach}</div>
                  </div>
                )}
              </div>

              {/* Games */}
              {selectedSchool.games && selectedSchool.games.length > 0 && (
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <Gamepad2 className="w-3.5 h-3.5 text-primary" /> Games Competing In
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedSchool.games.map((g) => (
                      <span key={g} className="text-xs bg-primary/10 border border-primary/30 text-primary px-2.5 py-1 rounded-full">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {selectedSchool.achievements && selectedSchool.achievements.length > 0 && (
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-primary" /> Achievements
                  </div>
                  <ul className="space-y-1.5">
                    {selectedSchool.achievements.map((a, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Website link */}
              {selectedSchool.website && (
                <a
                  href={selectedSchool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-semibold mt-1"
                >
                  Visit School Website <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>

    </Layout>
  );
}
