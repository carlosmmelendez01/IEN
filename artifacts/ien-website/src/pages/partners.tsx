import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Cpu,
  ExternalLink,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Network,
  School,
  ShieldCheck,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import {
  featuredPartners,
  partnerCategories,
  type Partner,
  type PartnerCategory,
} from "@/data/partners";
import { getSchoolNetworkStat } from "@/lib/schoolCharter";

const impactAreas: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "State Championships",
    description:
      "Supporting professional-quality statewide competition experiences.",
    icon: Trophy,
  },
  {
    title: "College Pathways",
    description:
      "Connecting students with colleges, scholarships, and recruiting opportunities.",
    icon: GraduationCap,
  },
  {
    title: "STEM and Career Exposure",
    description:
      "Helping students explore technology, cybersecurity, broadcasting, design, and esports careers.",
    icon: Briefcase,
  },
  {
    title: "Competition Technology",
    description:
      "Providing the platforms, hardware, networking, and production tools that power IEN.",
    icon: Cpu,
  },
  {
    title: "Inclusive Competition",
    description:
      "Expanding middle school, high school, and unified esports opportunities.",
    icon: ShieldCheck,
  },
  {
    title: "School Growth",
    description:
      "Helping more Indiana schools build sustainable scholastic esports programs.",
    icon: School,
  },
];

const partnerMetrics = [
  getSchoolNetworkStat(),
  {
    value: "7,000+",
    label: "Student-Athletes",
  },
  {
    value: "3",
    label: "Programs: Middle School, High School, and Unified",
  },
  {
    value: "Statewide",
    label: "Indiana Competition and Championships",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {eyebrow && (
        <div className="text-xs font-heading font-bold tracking-widest uppercase text-primary mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}

function LogoFrame({
  partner,
  featured = false,
}: {
  partner: Partner;
  featured?: boolean;
}) {
  const logoSize = featured ? "h-16 md:h-20" : "h-12";
  const wrapperClass =
    partner.logoTreatment === "light"
      ? "bg-white rounded-lg px-4 py-3"
      : "rounded-lg px-2 py-2";

  return (
    <div className="h-full min-h-20 flex items-center justify-center">
      {partner.logo ? (
        <div className={`flex items-center justify-center ${wrapperClass}`}>
          <img
            src={partner.logo}
            alt={partner.logoAlt ?? `${partner.name} logo`}
            className={`${logoSize} w-auto max-w-full object-contain`}
          />
        </div>
      ) : (
        <div
          className={`${
            featured ? "w-24 h-24 text-2xl" : "w-16 h-16 text-lg"
          } rounded-lg border border-primary/30 bg-primary/10 text-primary font-heading font-bold flex items-center justify-center tracking-widest`}
          aria-hidden="true"
        >
          {partner.initials ?? partner.name.slice(0, 2)}
        </div>
      )}
    </div>
  );
}

function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex w-fit items-center rounded border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-heading font-bold uppercase tracking-widest text-primary">
      {children}
    </span>
  );
}

function FeaturedPartnerCard({
  partner,
  index,
}: {
  partner: Partner;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="group h-full bg-card border border-primary/20 hover:border-primary rounded-lg p-6 md:p-7 flex flex-col gap-5 transition-all hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(212,175,55,0.12)]"
    >
      <div className="min-h-28 flex items-center justify-center">
        <LogoFrame partner={partner} featured />
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge>{partner.category}</Badge>
        {partner.relationshipLabel && (
          <span className="inline-flex w-fit items-center rounded border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-heading font-bold uppercase tracking-widest text-white/80">
            {partner.relationshipLabel}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-2xl font-heading font-bold text-white mb-3">
          {partner.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {partner.description}
        </p>
      </div>
      {partner.url && (
        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card rounded"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="font-heading font-bold tracking-widest uppercase">
            {partner.linkLabel ?? `Visit ${partner.name}`}
          </span>
        </a>
      )}
    </motion.article>
  );
}

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <article className="bg-background border border-primary/20 rounded-lg p-5 flex flex-col gap-4 min-h-full transition-colors hover:border-primary/70">
      <div className="h-20 flex items-center justify-center">
        <LogoFrame partner={partner} />
      </div>
      <div className="flex flex-col gap-2">
        <Badge>{partner.category}</Badge>
        {partner.relationshipLabel && (
          <span className="text-xs text-white/70 font-medium">
            {partner.relationshipLabel}
          </span>
        )}
      </div>
      <div>
        <h4 className="font-heading font-bold text-white text-xl mb-2">
          {partner.name}
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {partner.description}
        </p>
      </div>
      {partner.url ? (
        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="font-heading font-bold tracking-widest uppercase">
            {partner.linkLabel ?? `Visit ${partner.name}`}
          </span>
        </a>
      ) : (
        <div className="mt-auto inline-flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Referenced in IEN event content</span>
        </div>
      )}
    </article>
  );
}

function PartnerCategorySection({ category }: { category: PartnerCategory }) {
  if (category.partners.length === 0) return null;

  return (
    <section className="border-t border-primary/15 pt-6">
      <div className="mb-6">
        <h3 className="text-2xl font-heading font-bold text-white mb-2">
          {category.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
          {category.description}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {category.partners.map((partner) => (
          <PartnerCard key={partner.name} partner={partner} />
        ))}
      </div>
    </section>
  );
}

function PartnerCategoryTile({ category }: { category: PartnerCategory }) {
  const tileClass = category.limited
    ? "border-dashed border-primary/60"
    : "border-primary/15 border-t-primary";

  return (
    <article
      className={`min-h-40 bg-card border border-t-4 ${tileClass} rounded-none px-5 py-6 text-center flex flex-col items-center justify-center`}
    >
      <h3 className="text-xl font-heading font-bold uppercase tracking-wider text-primary mb-2">
        {category.title}
      </h3>
      <p className="text-sm text-gray-300 leading-relaxed">
        {category.shortDescription}
      </p>
    </article>
  );
}

function PartnerImpact() {
  return (
    <section className="py-20 border-y border-primary/15 bg-background/60">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Partner Impact"
          title="What Our Partners Make Possible"
          description="IEN partners help create credible, student-centered esports experiences that connect competition with education, opportunity, and school growth."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
          {partnerMetrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-card border border-primary/20 rounded-lg p-5 text-center"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest leading-relaxed">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {impactAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.35 }}
                className="bg-card border border-primary/20 rounded-lg p-6"
              >
                <div className="w-12 h-12 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PartnersHero() {
  return (
    <section className="relative min-h-[540px] py-20 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
      <div className="absolute inset-0 opacity-35">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />

      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/15 border border-primary/40 rounded-full text-[10px] font-heading font-bold tracking-widest uppercase text-primary mb-5">
            <Network className="w-3.5 h-3.5" />
            IEN Partners
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 tracking-tight">
            Building Indiana&apos;s Esports Future Together
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto mb-8 leading-relaxed">
            Indiana Esports Network works with schools, colleges, technology
            companies, venues, community organizations, and industry leaders to
            create meaningful opportunities for students across Indiana.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest text-base h-12 px-8"
            >
              <a href="#partner-with-ien">Become a Partner</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest text-base h-12 px-8"
            >
              <a href="#featured-partners">View Current Partners</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedPartners() {
  return (
    <section id="featured-partners" className="py-16 container mx-auto px-4 scroll-mt-20">
      <SectionHeader
        eyebrow="Featured Partners"
        title="Current Featured Partners"
        description="These partners are prominently represented across IEN's current site content and help power student pathways, competition technology, communications, and event operations."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {featuredPartners.map((partner, index) => (
          <FeaturedPartnerCard
            key={partner.name}
            partner={partner}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function PartnerNetwork() {
  return (
    <section className="py-20 bg-background/70 border-y border-primary/15">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Partner Network"
          title="Our Partner Network"
          description="Every organization in IEN's partner network plays a distinct role in supporting Indiana students, schools, coaches, and competitions."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 max-w-7xl mx-auto mb-12">
          {partnerCategories.map((category) => (
            <PartnerCategoryTile key={category.key} category={category} />
          ))}
        </div>
        <div className="space-y-6 max-w-6xl mx-auto">
          {partnerCategories.map((category) => (
            <PartnerCategorySection key={category.key} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCTA() {
  return (
    <section id="partner-with-ien" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden border border-primary/30 bg-card rounded-lg p-8 md:p-12 text-center">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(212,175,55,0.10),transparent_34%,rgba(39,86,166,0.16))]" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/15 border border-primary/40 rounded-full text-[10px] font-heading font-bold tracking-widest uppercase text-primary mb-5">
              <HeartHandshake className="w-3.5 h-3.5" />
              Partner With IEN
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-5">
              Partner With IEN
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              IEN works with organizations that believe esports can strengthen
              education, expand career awareness, and create meaningful
              opportunities for Indiana students. Partnerships may include event
              sponsorship, technology support, student programming,
              scholarships, recruiting, venue support, and community engagement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-12 px-8"
              >
                <Link href="/sponsor">
                  Explore Partnership Opportunities
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest h-12 px-8"
              >
                <a href="mailto:ienboard@indianaesportsnetwork.org?subject=IEN%20Partnership%20Inquiry">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact IEN
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              ienboard@indianaesportsnetwork.org
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Partners() {
  const [location] = useLocation();

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
      <SEO
        title="Partners"
        description="Indiana Esports Network's partner ecosystem connecting schools, colleges, technology providers, venues, community organizations, and industry partners."
        path="/partners"
      />

      <PartnersHero />
      <FeaturedPartners />
      <PartnerImpact />
      <PartnerNetwork />
      <PartnerCTA />
    </Layout>
  );
}
