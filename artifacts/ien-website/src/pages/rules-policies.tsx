import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertCircle, Download, ExternalLink, FileText } from "lucide-react";
import {
  RulesDialog,
  RulesetLibrary,
  defaultTabForGame,
} from "@/components/rulesets/RulesetQuickView";
import {
  RULEBOOK_HREF,
  RULES_DOCUMENTS_AVAILABLE,
  RULES_UPDATE_NOTICE,
  RULES_UPDATE_SHORT_LABEL,
  rulesetGames,
  type RulesTab,
  type RulesetGame,
} from "@/data/gameRules";

const resources = [
  {
    title: "IEN Bylaws & General Rules",
    desc: "Official IEN bylaws, competition policies, and general league rules for the 2026-27 season.",
    href: RULEBOOK_HREF,
    external: false,
    available: RULES_DOCUMENTS_AVAILABLE,
  },
  {
    title: "LeagueOS Platform Guide",
    desc: "How to manage rosters, report scores, and navigate the LeagueOS platform.",
    href: "https://leagueos.gg",
    external: true,
    available: true,
  },
];

export default function LeagueResources() {
  const [location] = useLocation();
  const [selectedRuleset, setSelectedRuleset] = useState<RulesetGame | null>(null);
  const [activeRulesTab, setActiveRulesTab] = useState<RulesTab>("quick");
  const [hash, setHash] = useState<string>(() =>
    typeof window !== "undefined" ? window.location.hash : "",
  );

  const openRuleset = (game: RulesetGame) => {
    setSelectedRuleset(game);
    setActiveRulesTab(defaultTabForGame(game));
  };

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    onHashChange();
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [location]);

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
    return () => clearTimeout(t);
  }, [location, hash]);

  return (
    <Layout>
      <SEO
        title="Rules & Policies"
        description="Official Indiana Esports Network rules, bylaws, policies, ruleset status, and LeagueOS guidance for coaches, administrators, and players."
        path="/rules-policies"
      />

      <section id="rules-resources" className="py-20 md:py-24 container mx-auto px-4 scroll-mt-20">
        <div className="flex items-center justify-center mb-6">
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <h1 className="px-4 text-center font-heading text-primary font-bold tracking-widest uppercase text-4xl md:text-5xl">
            Rules &amp; Policies
          </h1>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <p className="text-center text-muted-foreground text-base md:text-lg max-w-4xl mx-auto mb-12">
          Official rulebooks, platform guides, and policy documents for coaches,
          administrators, and players.
        </p>

        <div className="mx-auto mb-12 flex max-w-5xl items-start gap-4 rounded-lg border border-primary/40 bg-card/80 p-5 md:p-7 text-left shadow-lg">
          <AlertCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
          <p className="text-base md:text-lg leading-8 text-muted-foreground">
            <span className="font-heading font-bold uppercase tracking-[0.16em] text-primary">
              Rules update:
            </span>{" "}
            {RULES_UPDATE_NOTICE}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {resources.map((res, i) => (
            <motion.article
              key={res.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="bg-card border border-primary/30 rounded-lg p-6 md:p-7 flex flex-col gap-6 hover:border-primary transition-colors group min-h-64"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <FileText className="w-7 h-7 text-primary" aria-hidden />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-white text-xl leading-tight">
                    {res.title}
                  </h2>
                  <p className="text-muted-foreground mt-3 leading-7">{res.desc}</p>
                </div>
              </div>

              {res.available ? (
                <a
                  href={res.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-heading font-bold text-primary tracking-[0.14em] hover:text-yellow-200 transition-colors"
                >
                  {res.external ? (
                    <>
                      <ExternalLink className="w-4 h-4" aria-hidden />
                      OPEN PLATFORM
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" aria-hidden />
                      DOWNLOAD PDF
                    </>
                  )}
                </a>
              ) : (
                <div className="mt-auto inline-flex w-fit items-center gap-2 rounded-md border border-primary/30 px-4 py-3 text-xs font-heading font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  <AlertCircle className="h-4 w-4 text-primary" aria-hidden />
                  {RULES_UPDATE_SHORT_LABEL}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </section>

      <section id="ruleset-library" className="py-16 bg-card border-y border-primary/20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="flex items-center justify-center mb-4">
              <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
              <h2 className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
                Ruleset Library
              </h2>
              <div className="hidden md:block h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
            <p className="text-muted-foreground leading-7">
              Quick references are available while official 2026-27 documents are
              being finalized. Open a title to review roster, format, match
              window, and rotation details.
            </p>
          </div>

          <RulesetLibrary games={rulesetGames} onOpenRules={openRuleset} />
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Need the full league overview?
          </h2>
          <p className="text-muted-foreground leading-7 mb-8">
            The Leagues page still covers divisions, competition formats, game
            titles, and program details.
          </p>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest"
            asChild
          >
            <Link href="/leagues">VIEW LEAGUES</Link>
          </Button>
        </div>
      </section>

      {selectedRuleset && (
        <RulesDialog
          activeTab={activeRulesTab}
          game={selectedRuleset}
          onClose={() => setSelectedRuleset(null)}
          onTabChange={setActiveRulesTab}
        />
      )}
    </Layout>
  );
}
