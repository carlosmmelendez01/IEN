import { useLocation } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { SponsorTiers } from "@/components/partners/SponsorTiers";
import {
  Building2,
  GraduationCap,
  HeartHandshake,
  Mail,
  Trophy,
  Users,
} from "lucide-react";
import { getSchoolNetworkStat } from "@/lib/schoolCharter";

const sponsorMetrics = [
  getSchoolNetworkStat(),
  { value: "7,000+", label: "Student-Athletes" },
  { value: "3", label: "Middle School, High School, and Unified Programs" },
  { value: "Statewide", label: "Indiana Competition and Championships" },
];

const sponsorReasons = [
  {
    title: "Student Impact",
    description:
      "Support programming that helps students build collaboration, communication, creativity, and critical thinking through esports.",
    icon: GraduationCap,
  },
  {
    title: "Statewide Reach",
    description:
      "Connect with schools, coaches, families, and student-athletes across Indiana's scholastic esports network.",
    icon: Users,
  },
  {
    title: "Championship Experiences",
    description:
      "Help IEN deliver professional, accessible, and memorable competition environments for Indiana students.",
    icon: Trophy,
  },
  {
    title: "Mission Alignment",
    description:
      "Build a partnership around education, technology, career awareness, school support, and community engagement.",
    icon: HeartHandshake,
  },
];

export function SponsorPageContent({
  canonicalPath = "/sponsor",
}: {
  canonicalPath?: string;
}) {
  const [location] = useLocation();
  const path =
    location === "/partner-with-ien" ? "/partner-with-ien" : canonicalPath;

  return (
    <Layout>
      <SEO
        title="Sponsor IEN"
        description="Sponsorship and partnership opportunities for organizations supporting Indiana scholastic esports."
        path={path}
      />

      <section className="relative py-20 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 opacity-35 bg-[linear-gradient(rgba(212,175,55,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        <div className="container relative z-20 mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/15 border border-primary/40 rounded-full text-[10px] font-heading font-bold tracking-widest uppercase text-primary mb-5">
            <Building2 className="w-3.5 h-3.5" />
            Sponsor IEN
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
            Sponsor Indiana Scholastic Esports
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto mb-8 leading-relaxed">
            IEN works with organizations that want to strengthen education,
            expand career awareness, and support statewide championship
            experiences for Indiana students.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-12 px-8"
            >
              <a href="mailto:ienboard@indianaesportsnetwork.org?subject=IEN%20Sponsorship%20Inquiry">
                <Mail className="w-4 h-4 mr-2" />
                Contact Partnerships
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest h-12 px-8"
            >
              <a href="#sponsorship-opportunities">View Sponsorship Tiers</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 border-y border-primary/20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {sponsorMetrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-card border border-primary/20 rounded-lg p-5"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-xs font-medium tracking-wider uppercase text-muted-foreground leading-relaxed">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SponsorTiers />

      <section className="py-20 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-heading font-bold tracking-widest uppercase text-primary mb-3">
            Why Sponsor IEN
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Support a Statewide Student Network
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Sponsorships help IEN expand student opportunity, improve event
            experiences, grow school programs, and connect esports with future
            education and career pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {sponsorReasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.title}
                className="bg-card border border-primary/20 rounded-lg p-6"
              >
                <div className="w-12 h-12 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export default function Sponsor() {
  return <SponsorPageContent />;
}
