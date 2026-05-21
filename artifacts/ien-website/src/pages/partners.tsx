import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Check, ShoppingCart, Heart, Gift, Mail } from "lucide-react";

import spinLogo from "@assets/White_SPIN_Icon_1776776398973.png";
import gravityLogo from "@assets/Gravity_Gaming_Logo_1776776398973.png";
import leagueOSLogo from "@assets/LeagueOS_1776776398973.jpg";
import mcdonaldsLogo from "@assets/McDonald's_Golden_Arches_1776776398973.png";
import zotacLogo from "@assets/Zotac_Vertical_Logo_1776776398973.png";
import starfallLogo from "@assets/Sponsor_Logo_01_1776776398973.png";

const featuredPartners = [
  {
    name: "Stay Plugged In (SPIN)",
    url: "https://www.staypluggedin.com",
    external: true,
    description: "A leading gaming organization providing academic roadmapping, STEM and esports competitions, college recruitment, and career pathways for IEN students.",
    display: (
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={spinLogo}
          alt="Stay Plugged In (SPIN)"
          className="h-14 w-auto object-contain mix-blend-screen"
        />
      </div>
    ),
  },
  {
    name: "Gravity Gaming by ByteSpeed",
    url: "https://www.bytespeed.com",
    external: true,
    description: "Hardware solutions and gaming rigs supporting IEN competition and events.",
    display: (
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-white rounded-xl px-4 py-2 flex items-center justify-center">
          <img
            src={gravityLogo}
            alt="Gravity Gaming by ByteSpeed"
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>
    ),
  },
  {
    name: "LeagueOS",
    url: "https://leagueos.gg",
    external: true,
    description: "The official league management platform for IEN scheduling, rosters, and standings.",
    display: (
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-white rounded-xl px-4 py-2 flex items-center justify-center">
          <img
            src={leagueOSLogo}
            alt="LeagueOS"
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>
    ),
  },
  {
    name: "McDonald's",
    url: "https://www.mcdonalds.com",
    external: true,
    description: "Community sponsor supporting IEN events and student-athletes across Indiana.",
    display: (
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={mcdonaldsLogo}
          alt="McDonald's"
          className="h-14 w-auto object-contain"
        />
      </div>
    ),
  },
  {
    name: "Zotac Gaming",
    url: "https://www.zotacgaming.com",
    external: true,
    description: "High-performance gaming hardware partner providing tournament-grade equipment for IEN events.",
    display: (
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={zotacLogo}
          alt="Zotac Gaming"
          className="h-16 w-auto object-contain mix-blend-screen"
        />
      </div>
    ),
  },
  {
    name: "Starfall PR",
    url: "https://www.starfallpr.com",
    external: true,
    description: "Public relations and communications partner amplifying IEN's mission statewide.",
    display: (
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={starfallLogo}
          alt="Starfall PR"
          className="h-16 w-auto object-contain mix-blend-screen"
        />
      </div>
    ),
  },
];

export default function Partners() {
  const [location] = useLocation();

  // Scroll to hash target on mount / route change (e.g. /partners#ways-to-support from footer).
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (!hash) return;
    const id = hash.slice(1);
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
    return () => clearTimeout(t);
  }, [location]);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 tracking-tight">
              OUR <span className="text-primary">PARTNERS</span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto mb-8">
              Working Together to Advance Scholastic Esports in Indiana
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest text-base h-12 px-8"
              >
                <a href="#become-a-sponsor">BECOME A SPONSOR</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest text-base h-12 px-8"
              >
                <a href="#ways-to-support">WAYS TO GIVE</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Partners (social proof: shown first so visitors immediately see
          who already partners with IEN before the sponsorship pitch). */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" />
          <span className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
            Featured Partners
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/40" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {featuredPartners.map((partner, i) => {
            const inner = (
              <>
                <div className="h-20 flex items-center justify-center">
                  {partner.display}
                </div>
                <div className="border-t border-primary/10 pt-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">{partner.description}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-primary/60 group-hover:text-primary transition-colors mt-auto">
                  <ExternalLink className="w-3 h-3" />
                  <span className="font-heading tracking-wide">Visit {partner.name}</span>
                </div>
              </>
            );

            const sharedClass =
              "group bg-card border border-primary/20 hover:border-primary rounded-xl p-6 flex flex-col gap-4 transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                {partner.external ? (
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" className={sharedClass}>
                    {inner}
                  </a>
                ) : (
                  <Link href={partner.url} className={sharedClass}>
                    {inner}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Become a Sponsor (tiered sponsorship packages for corporate prospects).
          Reached via the hero "BECOME A SPONSOR" CTA. */}
      <section id="become-a-sponsor" className="py-20 bg-card scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">BECOME A SPONSOR</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              IEN sponsorships put your brand in front of thousands of students, parents, and educators
              across Indiana, at the middle school, high school, and unified levels. Every sponsorship
              directly funds scholarships, equipment, and state championship events for Hoosier
              student-athletes.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8 text-sm">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">180+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Member Schools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">7,000+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Student-Athletes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">3</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Divisions (HS / MS / Unified)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">501(c)(3)</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Tax-Deductible</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Tier 3 - Community */}
            <div className="bg-background border border-primary/30 p-8 rounded-xl relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Tier 3</div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">Community Sponsor</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Support local schools and regional events with entry-level brand presence.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground mb-8 flex-grow">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Logo on IEN partners page</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Regional event recognition</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Social media shoutout</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Quarterly IEN newsletter mention</span>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest">
                <a href="mailto:board@indianaesportsnetwork.org?subject=Community%20Sponsor%20Inquiry%20(Tier%203)">
                  INQUIRE
                </a>
              </Button>
            </div>

            {/* Tier 1 - State Finals (featured) */}
            <div className="bg-background border-2 border-primary p-8 rounded-xl relative overflow-hidden flex flex-col transform md:-translate-y-4 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-[10px] font-heading font-bold tracking-widest uppercase px-2 py-1 rounded">
                Most Visible
              </div>
              <div className="text-xs uppercase tracking-widest text-primary mb-1">Tier 1</div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">State Finals Sponsor</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Premium placement at our largest event of the year, the IEN State Championships.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground mb-8 flex-grow">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Top-tier logo on all State Finals materials</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>On-stream broadcast mentions & lower-third</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Venue signage &amp; booth space at Finals</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Trophy / award presentation opportunity</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Dedicated social campaign &amp; press release</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Featured placement on IEN website</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest">
                <a href="mailto:board@indianaesportsnetwork.org?subject=State%20Finals%20Sponsor%20Inquiry%20(Tier%201)">
                  INQUIRE
                </a>
              </Button>
            </div>

            {/* Tier 2 - Regional */}
            <div className="bg-background border border-primary/30 p-8 rounded-xl relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Tier 2</div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">Regional Sponsor</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Strong brand presence at regional LAN events and across the IEN season.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground mb-8 flex-grow">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Logo on regional event materials &amp; streams</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Booth space at regional LANs</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Social media campaign inclusion</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Featured logo on IEN partners page</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Season-long newsletter recognition</span>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest">
                <a href="mailto:board@indianaesportsnetwork.org?subject=Regional%20Sponsor%20Inquiry%20(Tier%202)">
                  INQUIRE
                </a>
              </Button>
            </div>
          </div>

          {/* How to Sponsor - 3 step process */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-center font-heading font-bold tracking-widest uppercase text-primary text-sm mb-8">
              How to Become a Sponsor
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border-2 border-primary text-primary font-heading font-bold text-xl flex items-center justify-center mx-auto mb-3">1</div>
                <h4 className="font-heading font-bold text-white text-sm mb-1">Reach Out</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Email our partnerships team with the tier that fits your goals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border-2 border-primary text-primary font-heading font-bold text-xl flex items-center justify-center mx-auto mb-3">2</div>
                <h4 className="font-heading font-bold text-white text-sm mb-1">Customize Your Package</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We'll build a sponsorship that matches your brand and budget. Tiers are a starting point, not a ceiling.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border-2 border-primary text-primary font-heading font-bold text-xl flex items-center justify-center mx-auto mb-3">3</div>
                <h4 className="font-heading font-bold text-white text-sm mb-1">Activate</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Launch your campaign across IEN events, broadcasts, and digital channels.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest px-8 h-12">
              <a href="mailto:board@indianaesportsnetwork.org?subject=IEN%20Sponsorship%20Inquiry">
                <Mail className="w-4 h-4 mr-2" />
                CONTACT PARTNERSHIPS
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              board@indianaesportsnetwork.org
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Support IEN (donor/fan-focused: Kroger / Walmart / PayPal).
          Sits below Become a Sponsor so corporate prospects hit tiered pricing first. */}
      <section id="ways-to-support" className="relative py-20 bg-card border-y border-primary/30 scroll-mt-20">
        {/* subtle gold glow accent */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/15 border border-primary/40 rounded-full text-[10px] font-heading font-bold tracking-widest uppercase text-primary mb-4">
              <Heart className="w-3 h-3" />
              Every Dollar Counts
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">WAYS TO SUPPORT IEN</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Not every supporter has to be a corporate sponsor. Here are a few ways any fan, family, or
              community member can help fund scholastic esports in Indiana, at no extra cost to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Walmart Spark Good */}
            <div className="bg-background border border-primary/20 hover:border-primary rounded-xl p-6 flex flex-col transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">Walmart Spark Good</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                Round up your Walmart purchase and send the change directly to IEN. Simple, fee-free, and
                adds up fast across our supporter base.
              </p>
              <Button variant="outline" asChild className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest">
                <a
                  href="https://www.walmart.com/nonprofits/a49bd66d-f7de-4d0c-ab33-cf0a8fdd1b74"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  ROUND UP FOR IEN
                </a>
              </Button>
            </div>

            {/* Kroger Community Rewards */}
            <div className="bg-background border border-primary/20 hover:border-primary rounded-xl p-6 flex flex-col transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">Kroger Community Rewards</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                Link your Kroger Plus Card to IEN and a portion of every purchase is donated, at no cost
                to you. Search for <span className="text-primary font-bold">&ldquo;Indiana Esports Network&rdquo;</span> or code
                {" "}<span className="text-primary font-bold">YD133</span>.
              </p>
              <Button variant="outline" asChild className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest">
                <a
                  href="https://www.kroger.com/account/communityrewards"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  ENROLL WITH KROGER
                </a>
              </Button>
            </div>

            {/* PayPal Giving Fund */}
            <div className="bg-background border border-primary/20 hover:border-primary rounded-xl p-6 flex flex-col transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">PayPal Giving Fund</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                Make a one-time or recurring tax-deductible donation through PayPal Giving Fund. 100% of
                your gift reaches IEN.
              </p>
              <Button variant="outline" asChild className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest">
                <a
                  href="https://www.paypal.com/us/fundraiser/charity/4539677"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  DONATE VIA PAYPAL
                </a>
              </Button>
            </div>
          </div>

          {/* 501c3 note */}
          <div className="max-w-3xl mx-auto mt-10 text-center">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Indiana Esports Network Limited is a <span className="text-primary font-bold">501(c)(3) nonprofit</span> organization,
              {" "}EIN <span className="text-primary font-bold">86-3901103</span>. All donations are tax-deductible to the full extent allowed by law.
            </p>
          </div>
        </div>
      </section>

    </Layout>
  );
}
