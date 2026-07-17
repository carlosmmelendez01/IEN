import { Button } from "@/components/ui/button";
import { Check, Mail } from "lucide-react";

const sponsorshipTiers = [
  {
    tier: "Tier 3",
    title: "Community Sponsor",
    description:
      "Support local schools and regional events with entry-level brand presence.",
    accent: "via-gray-400",
    buttonVariant: "outline" as const,
    subject: "Community Sponsor Inquiry (Tier 3)",
    features: [
      "Logo on IEN sponsor page",
      "Regional event recognition",
      "Social media shoutout",
      "Quarterly IEN newsletter mention",
    ],
  },
  {
    tier: "Tier 1",
    title: "State Finals Sponsor",
    description:
      "Premium placement at IEN's largest event of the year, the IEN State Championships.",
    accent: "via-primary",
    highlighted: true,
    buttonVariant: "default" as const,
    subject: "State Finals Sponsor Inquiry (Tier 1)",
    features: [
      "Top-tier logo on State Finals materials",
      "On-stream broadcast mentions and lower-third",
      "Venue signage and booth space at Finals",
      "Trophy or award presentation opportunity",
      "Dedicated social campaign and press release",
      "Featured placement on IEN website",
    ],
  },
  {
    tier: "Tier 2",
    title: "Regional Sponsor",
    description:
      "Strong brand presence at regional LAN events and across the IEN season.",
    accent: "via-blue-400",
    buttonVariant: "outline" as const,
    subject: "Regional Sponsor Inquiry (Tier 2)",
    features: [
      "Logo on regional event materials and streams",
      "Booth space at regional LANs",
      "Social media campaign inclusion",
      "Featured logo on IEN website",
      "Season-long newsletter recognition",
    ],
  },
];

export function SponsorTiers() {
  return (
    <section id="sponsorship-opportunities" className="py-20 bg-card scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Sponsorship Opportunities
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            IEN sponsorships connect organizations with students, parents, coaches,
            educators, and championship experiences across Indiana. Packages can be
            shaped around event support, program growth, scholarships, technology,
            and community activation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.title}
              className={`bg-background border p-8 rounded-lg relative overflow-hidden flex flex-col ${
                tier.highlighted
                  ? "border-2 border-primary md:-translate-y-4 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                  : "border-primary/30"
              }`}
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${tier.accent} to-transparent`}
              />
              {tier.highlighted && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-[10px] font-heading font-bold tracking-widest uppercase px-2 py-1 rounded">
                  Most Visible
                </div>
              )}
              <div className="text-xs uppercase tracking-widest text-primary mb-1">
                {tier.tier}
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                {tier.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {tier.description}
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.buttonVariant}
                asChild
                className={
                  tier.buttonVariant === "outline"
                    ? "w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest"
                    : "w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest"
                }
              >
                <a
                  href={`mailto:ienboard@indianaesportsnetwork.org?subject=${encodeURIComponent(
                    tier.subject,
                  )}`}
                >
                  Inquire
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-center font-heading font-bold tracking-widest uppercase text-primary text-sm mb-8">
            How to Become a Sponsor
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Reach Out",
                copy: "Email the IEN partnerships team with the opportunity that fits your goals.",
              },
              {
                step: "2",
                title: "Customize Your Package",
                copy: "Build a sponsorship around your audience, budget, and preferred impact area.",
              },
              {
                step: "3",
                title: "Activate",
                copy: "Launch your support across IEN events, broadcasts, digital channels, and student programming.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full border-2 border-primary text-primary font-heading font-bold text-xl flex items-center justify-center mx-auto mb-3">
                  {item.step}
                </div>
                <h4 className="font-heading font-bold text-white text-sm mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest px-8 h-12"
          >
            <a href="mailto:ienboard@indianaesportsnetwork.org?subject=IEN%20Sponsorship%20Inquiry">
              <Mail className="w-4 h-4 mr-2" />
              Contact Partnerships
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-3">
            ienboard@indianaesportsnetwork.org
          </p>
        </div>
      </div>
    </section>
  );
}
