import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Headphones, Shield, Handshake, LifeBuoy, Mic } from "lucide-react";
import { Link } from "wouter";
import { ONBOARDING_URL } from "@/lib/socialLinks";

const SUPPORT_EMAIL = "support@indianaesportsnetwork.org";

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Contact the Indiana Esports Network. Email support@indianaesportsnetwork.org for general inquiries or use the contact topics below."
        path="/contact"
      />

      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative z-20 mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight uppercase">
              CONTACT{" "}
              <span className="text-primary">INDIANA ESPORTS NETWORK</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-light">
              Have questions about starting a program, joining a league, or
              partnering with us? We're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest px-8 h-12"
              >
                <a
                  href={ONBOARDING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SCHEDULE A MEETING
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest px-8 h-12"
                asChild
              >
                <a href={`mailto:${SUPPORT_EMAIL}`}>EMAIL US</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-widest uppercase">
            CONTACT BY TOPIC
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="max-w-4xl mx-auto mb-6 bg-card border border-primary/20 p-8 rounded-xl flex flex-col md:flex-row items-center text-center md:text-left gap-6 hover:border-primary transition-colors group">
          <div className="w-16 h-16 bg-background rounded-full flex shrink-0 items-center justify-center group-hover:scale-110 transition-transform">
            <LifeBuoy className="w-8 h-8 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">
              Contact Support
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              General questions, account help, school support, or anything that
              needs to be routed to the right IEN team member.
            </p>
          </div>
          <Button
            variant="outline"
            asChild
            className="w-full md:w-auto border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest"
          >
            <a href={`mailto:${SUPPORT_EMAIL}`}>EMAIL SUPPORT</a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-card border border-primary/20 p-8 rounded-xl flex flex-col items-center text-center hover:border-primary transition-colors group">
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Headphones className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white mb-2">
              Start an Esports Program
            </h3>
            <p className="text-sm text-muted-foreground mb-6 flex-grow">
              Questions about equipment, IT needs, or getting administrative
              approval.
            </p>
            <Button
              variant="outline"
              asChild
              className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest"
            >
              <Link href="/start-a-program">START A PROGRAM</Link>
            </Button>
          </div>

          <div className="bg-card border border-primary/20 p-8 rounded-xl flex flex-col items-center text-center hover:border-primary transition-colors group">
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white mb-2">
              League Competition Questions
            </h3>
            <p className="text-sm text-muted-foreground mb-6 flex-grow">
              Rules, scheduling, disputes, or LeagueOS platform assistance.
            </p>
            <Button
              variant="outline"
              asChild
              className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest"
            >
              <a href="mailto:konnor@indianaesportsnetwork.org,trevor@indianaesportsnetwork.org">
                EMAIL LEAGUE OPERATIONS
              </a>
            </Button>
          </div>

          <div className="bg-card border border-primary/20 p-8 rounded-xl flex flex-col items-center text-center hover:border-primary transition-colors group">
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Handshake className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white mb-2">
              Sponsorships & Partnerships
            </h3>
            <p className="text-sm text-muted-foreground mb-6 flex-grow">
              Event sponsorship, unified program support, or brand integration.
            </p>
            <Button
              variant="outline"
              asChild
              className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest"
            >
              <a href="mailto:carlos@indianaesportsnetwork.org">
                CONTACT PARTNERSHIPS
              </a>
            </Button>
          </div>

          <div className="bg-card border border-primary/20 p-8 rounded-xl flex flex-col items-center text-center hover:border-primary transition-colors group">
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mic className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white mb-2">
              Media / Press
            </h3>
            <p className="text-sm text-muted-foreground mb-6 flex-grow">
              Interview requests, event coverage, or asset usage permission.
            </p>
            <Button
              variant="outline"
              asChild
              className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest"
            >
              <a href="mailto:carlos@indianaesportsnetwork.org">
                CONTACT MARKETING
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground text-sm mb-2">
            General inquiries and support
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-heading font-bold text-primary text-lg hover:underline tracking-wide"
          >
            {SUPPORT_EMAIL}
          </a>
        </div>
      </section>
    </Layout>
  );
}
