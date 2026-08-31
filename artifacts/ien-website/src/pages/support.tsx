import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { SupportWays } from "@/components/partners/SupportWays";
import { ArrowRight, Heart, Mail, Users } from "lucide-react";

export default function Support() {
  return (
    <Layout>
      <SEO
        title="Support IEN"
        description="Donation and community support options for Indiana Esports Network."
        path="/support"
      />

      <section className="relative py-20 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 opacity-35 bg-[linear-gradient(rgba(212,175,55,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        <div className="container relative z-20 mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/15 border border-primary/40 rounded-full text-[10px] font-heading font-bold tracking-widest uppercase text-primary mb-5">
            <Heart className="w-3.5 h-3.5" />
            Support IEN
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
            Help Expand Scholastic Esports Opportunity
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto mb-8 leading-relaxed">
            Community support helps IEN serve students, schools, coaches, and
            families across Indiana through competition, events, and educational
            pathways.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-12 px-8"
            >
              <a href="#ways-to-support">View Giving Options</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest h-12 px-8"
            >
              <Link href="/partners">
                View Partners
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-6 max-w-5xl mx-auto items-stretch">
          <article className="bg-card border-2 border-primary rounded-lg p-8 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <div className="w-12 h-12 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <div className="mb-3 inline-flex rounded border border-primary/40 bg-primary/10 px-2.5 py-1 text-[10px] font-heading font-bold uppercase tracking-widest text-primary">
              Easiest Way to Help
            </div>
            <h2 className="text-2xl font-heading font-bold text-white mb-3">
              Direct Donation Options
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Use Walmart Spark Good, Kroger Community Rewards, or PayPal Giving
              Fund to support IEN through everyday purchases and direct giving.
            </p>
            <Button
              asChild
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest"
            >
              <a href="#ways-to-support">VIEW GIVING OPTIONS</a>
            </Button>
          </article>
          <article className="bg-card border border-primary/20 rounded-lg p-8">
            <div className="w-12 h-12 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-white mb-3">
              Volunteer and Community Support
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Community members can support IEN through event help, school
              connections, student programming, and local outreach.
            </p>
            <a
              href="mailto:ienboard@indianaesportsnetwork.org?subject=IEN%20Community%20Support"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card rounded"
            >
              <Mail className="w-4 h-4" />
              <span className="font-heading font-bold tracking-widest uppercase">
                Contact IEN
              </span>
            </a>
          </article>
        </div>
      </section>

      <SupportWays />
    </Layout>
  );
}
