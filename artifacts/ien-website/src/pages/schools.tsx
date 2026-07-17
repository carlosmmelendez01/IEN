import { useState, lazy, Suspense } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Search, MapPin, Users, ExternalLink, GraduationCap, School as SchoolIcon, Sparkles } from "lucide-react";
import { SCHOOLS } from "@/data/schools";
import { COLLEGES, type College } from "@/data/colleges";

const SchoolMap = lazy(() => import("@/components/schools/SchoolMap"));

const RegionalCollegeMap = lazy(() => import("@/components/schools/RegionalCollegeMap"));

const DIVISIONS = ["All Divisions", "High School (IHSEN)", "Middle School (IMSEN)", "Unified (IUEN)"];
const PAGE_SIZE = 12;

const divisionColor = (d: string) => {
  if (d === "IHSEN") return "text-primary";
  if (d === "IMSEN") return "text-violet-400";
  return "text-emerald-400";
};

export default function Schools() {

  const [query, setQuery] = useState("");
  const [division, setDivision] = useState("All Divisions");
  const [showAll, setShowAll] = useState(false);

  const [regionalState, setRegionalState] = useState<string>("ALL");
  const [regionalQuery, setRegionalQuery] = useState("");

  const [showAllRegional, setShowAllRegional] = useState(false);
  const COLLEGE_PAGE_SIZE = 12;

  const setRegionalScope = (state: string) => {
    setRegionalState(state);
    setRegionalQuery("");
    setShowAllRegional(false);
  };

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

  const STATE_NAMES: Record<string, string> = {
    IN: "Indiana",
    IL: "Illinois", MI: "Michigan", OH: "Ohio", WI: "Wisconsin",
    MN: "Minnesota", IA: "Iowa", MO: "Missouri", NE: "Nebraska",
  };
  const ALL_STATES: Array<[string, College[]]> = Object.keys(STATE_NAMES)
    .map(code => [code, COLLEGES.filter(c => c.state === code)] as [string, College[]])
    .filter(([, list]) => list.length > 0);

  const PARTNERS_SCOPE = "PARTNERS";
  const regionalScoped =
    regionalState === "ALL"
      ? COLLEGES
      : regionalState === PARTNERS_SCOPE
      ? COLLEGES.filter(c => c.isPartner === true)
      : COLLEGES.filter(c => c.state === regionalState);
  const partnerCount = COLLEGES.filter(c => c.isPartner === true).length;
  const filteredRegional = regionalScoped.filter((c) => {
    const q = regionalQuery.toLowerCase();
    return (
      q === "" ||
      c.name.toLowerCase().includes(q) ||
      c.city.toLowerCase().includes(q) ||
      c.program.toLowerCase().includes(q)
    );
  });
  const visibleRegional = showAllRegional
    ? filteredRegional
    : filteredRegional.slice(0, COLLEGE_PAGE_SIZE);

  return (
    <Layout>
      <SEO
        title="Member Schools"
        description="200+ schools competing across Indiana in the Indiana Esports Network's scholastic leagues."
        path="/schools"
      />

      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative z-20 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 tracking-tight">
            MEMBER <span className="text-primary">SCHOOLS</span>
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto mb-8">
            200+ schools competing across Indiana in the Esports Network
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
                BROWSE IEN PARTNERS &amp; COLLEGIATE PROGRAMS
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="member-directory" className="py-12 container mx-auto px-4 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          <div className="lg:col-span-2 space-y-6">

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

            <div className="bg-card border border-primary/30 rounded-xl p-6 shadow-[0_0_20px_rgba(212,175,55,0.05)]">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-white">200+</div>
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

          <div className="lg:col-span-3">

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

            <p className="text-xs text-muted-foreground mb-4">
              Showing <span className="text-primary font-bold">{visible.length}</span> of <span className="text-primary font-bold">{filtered.length}</span> schools
            </p>

            <div className="space-y-2 mb-6">
              {visible.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  No schools found matching your search.
                </div>
              ) : (
                visible.map((school, i) => (
                  <div
                    key={i}
                    className="w-full bg-card border border-primary/15 p-4 rounded-lg flex items-center"
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
                        <h4 className="font-bold text-white text-sm leading-tight truncate">{school.name}</h4>
                        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                          <MapPin className="w-3 h-3 text-muted-foreground shrink-0" />
                          <span className="text-xs text-muted-foreground truncate">{school.city}</span>
                          {school.divisions.map((d) => (
                            <span key={d} className={`text-xs font-bold ${divisionColor(d)}`}>{d}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

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

      <section id="partnered-colleges" className="py-16 mb-20 container mx-auto px-4 scroll-mt-20">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" />
          <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl text-center">
            Collegiate Esports Programs
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/40" />
        </div>
        <p className="text-center text-muted-foreground text-sm mb-8 max-w-2xl mx-auto">
          Every Indiana partner and Midwest regional program in one place.
          {" "}<span className="text-primary font-bold">IEN Partners</span> are
          Indiana colleges that recruit directly from the league. Pick a state to
          focus the map and directory.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => setRegionalScope("ALL")}
            className={`inline-flex items-center h-9 px-4 rounded-full text-xs font-heading font-bold tracking-[0.18em] uppercase border transition-colors ${
              regionalState === "ALL"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card/60 text-muted-foreground border-primary/20 hover:text-primary hover:border-primary/50"
            }`}
          >
            All Programs · {COLLEGES.length}
          </button>

          <button
            type="button"
            onClick={() => setRegionalScope(PARTNERS_SCOPE)}
            className={`inline-flex items-center gap-1.5 h-9 px-4 rounded-full text-xs font-heading font-bold tracking-[0.18em] uppercase border transition-colors ${
              regionalState === PARTNERS_SCOPE
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-primary/15 text-primary border-primary/60 hover:bg-primary/25"
            }`}
          >
            <Sparkles className="w-3 h-3" />
            IEN Partners · {partnerCount}
          </button>

          {ALL_STATES.map(([code, list]) => {
            const active = regionalState === code;
            return (
              <button
                key={code}
                type="button"
                onClick={() => setRegionalScope(code)}
                className={`inline-flex items-center h-9 px-4 rounded-full text-xs font-heading font-bold tracking-[0.18em] uppercase border transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card/60 text-muted-foreground border-primary/20 hover:text-primary hover:border-primary/50"
                }`}
              >
                {STATE_NAMES[code]} · {list.length}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          <div className="lg:col-span-2 space-y-6">
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
                  <RegionalCollegeMap colleges={regionalScoped} />
                </Suspense>
              </div>

              <div className="px-4 py-3 border-t border-primary/20 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full inline-block ring-1 ring-primary/50" style={{ background: "#f5d062", boxShadow: "0 0 6px rgba(245,208,98,0.6)" }} />
                    <span className="text-foreground/90 font-bold">IEN Partner</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-primary inline-block" />
                    <span className="text-muted-foreground">Regional</span>
                  </span>
                </div>
                <span className="text-muted-foreground">
                  <span className="text-primary font-bold">{regionalScoped.length}</span> on map
                </span>
              </div>
            </div>

            <div className="bg-card border border-primary/30 rounded-xl p-6 shadow-[0_0_20px_rgba(212,175,55,0.05)]">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-white">{regionalScoped.length}</div>
                  <div className="text-xs text-primary tracking-widest uppercase mt-1">
                    {regionalState === "ALL"
                      ? "Programs"
                      : regionalState === PARTNERS_SCOPE
                      ? "IEN Partners"
                      : `${regionalState} Programs`}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-white">
                    {regionalScoped.filter(c => c.isPartner === true).length}
                  </div>
                  <div className="text-xs text-primary tracking-widest uppercase mt-1">In Scope</div>
                </div>
              </div>
              {regionalState === "ALL" ? (
                <div className="space-y-2 text-sm">

                  <button
                    type="button"
                    onClick={() => setRegionalScope(PARTNERS_SCOPE)}
                    className="w-full flex items-center justify-between border bg-primary/10 border-primary/30 hover:bg-primary/20 px-3 py-2 rounded-lg transition-colors"
                  >
                    <span className="flex items-center gap-2 text-primary font-bold">
                      <Sparkles className="w-3.5 h-3.5" /> IEN Partners
                    </span>
                    <span className="font-heading font-bold text-primary">{partnerCount}</span>
                  </button>
                  {ALL_STATES.map(([code, list]) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setRegionalScope(code)}
                      className="w-full flex items-center justify-between bg-background/60 border-transparent hover:bg-background hover:border-primary/40 border px-3 py-2 rounded-lg transition-colors group"
                    >
                      <span className="text-muted-foreground group-hover:text-foreground">{STATE_NAMES[code]}</span>
                      <span className="font-heading font-bold text-primary">{list.length}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setRegionalScope("ALL")}
                  className="w-full text-center text-xs font-heading font-bold tracking-[0.18em] uppercase text-primary hover:text-yellow-200 transition-colors py-2 border border-primary/30 rounded-lg hover:bg-primary/10"
                >
                  ← Back to All Programs
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-3">

            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-4">
              <div>
                <div className="text-xs font-heading font-bold tracking-[0.18em] uppercase text-primary">
                  {regionalState === "ALL"
                    ? "Region · Midwest + Indiana"
                    : regionalState === PARTNERS_SCOPE
                    ? "Scope · IEN Partners"
                    : `Region · ${regionalState}`}
                </div>
                <h3 className="font-heading font-bold text-2xl text-white tracking-tight mt-1">
                  {regionalState === "ALL"
                    ? "All Programs"
                    : regionalState === PARTNERS_SCOPE
                    ? "IEN Partner Programs"
                    : STATE_NAMES[regionalState]}
                </h3>
              </div>
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search this list…"
                  value={regionalQuery}
                  onChange={e => { setRegionalQuery(e.target.value); setShowAllRegional(false); }}
                  className="pl-10 bg-card border-primary/30 focus-visible:ring-primary h-10 text-sm"
                />
              </div>
            </div>

            <p className="text-xs text-muted-foreground mb-4">
              Showing <span className="text-primary font-bold">{visibleRegional.length}</span> of <span className="text-primary font-bold">{filteredRegional.length}</span>
              {regionalQuery !== "" && <> matching</>}{" "}
              {filteredRegional.length === 1 ? "program" : "programs"}
              {filteredRegional.length !== regionalScoped.length && (
                <span className="text-muted-foreground/70"> · {regionalScoped.length} total in scope</span>
              )}
            </p>

            {filteredRegional.length === 0 ? (
              <div className="py-12 text-center text-muted-foreground border border-dashed border-primary/20 rounded-lg">
                No programs match your search.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {visibleRegional.map((college, i) => {
                  const isPartner = college.isPartner === true;
                  const baseCls = "group block rounded-lg p-4 transition-all";
                  const cls = isPartner
                    ? `${baseCls} bg-card border border-primary/40 hover:border-primary hover:bg-card/90 shadow-[0_0_15px_rgba(212,175,55,0.06)] hover:shadow-[0_0_20px_rgba(212,175,55,0.18)]`
                    : `${baseCls} bg-card border border-primary/15 hover:border-primary/50 hover:bg-card/80`;
                  return (
                    <a
                      key={i}
                      href={college.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cls}
                      aria-label={`Visit ${college.name} esports page`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 shrink-0 bg-background border rounded-full flex items-center justify-center overflow-hidden ${isPartner ? "border-primary/60" : "border-primary/20"}`}>
                          {college.logo ? (
                            <img src={college.logo} alt={`${college.name} logo`} className="w-full h-full object-contain" />
                          ) : (
                            <GraduationCap className={`w-4 h-4 ${isPartner ? "text-primary" : "text-primary/60"}`} />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-bold text-white text-sm leading-tight group-hover:text-primary transition-colors">
                              {college.name}
                            </h4>
                            {isPartner && (
                              <span className="shrink-0 inline-flex items-center gap-1 h-5 px-2 rounded-full bg-primary text-primary-foreground text-[0.55rem] font-heading font-bold tracking-[0.18em] uppercase">
                                <Sparkles className="w-2.5 h-2.5" /> Partner
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground min-w-0">
                            <MapPin className="w-3 h-3 shrink-0" />
                            <span className="truncate">{college.city}</span>
                          </div>
                          <div className="mt-1.5 text-[0.65rem] tracking-[0.15em] uppercase font-heading font-bold text-primary">
                            {college.program}
                          </div>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-primary/60 group-hover:text-primary transition-colors shrink-0 mt-1" />
                      </div>
                    </a>
                  );
                })}
              </div>
            )}

            {filteredRegional.length > COLLEGE_PAGE_SIZE && (
              <div className="text-center mt-6">
                {!showAllRegional ? (
                  <Button
                    variant="outline"
                    onClick={() => setShowAllRegional(true)}
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest px-8"
                  >
                    VIEW ALL {filteredRegional.length} PROGRAMS
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    onClick={() => setShowAllRegional(false)}
                    className="border-primary/50 text-muted-foreground hover:border-primary hover:text-primary font-heading tracking-widest px-8"
                  >
                    SHOW LESS
                  </Button>
                )}
              </div>
            )}

            <p className="text-xs text-muted-foreground/60 mt-6">
              IEN Partner status reflects Indiana colleges that recruit directly from
              the league. Click any program to visit its official page.
              {" "}Know a program we should add?{" "}
              <a
                href="mailto:ienboard@indianaesportsnetwork.org?subject=Collegiate%20Program%20Addition"
                className="text-primary hover:text-primary/80 underline-offset-2 hover:underline"
              >
                Let us know
              </a>.
            </p>
          </div>

        </div>
      </section>

    </Layout>
  );
}
