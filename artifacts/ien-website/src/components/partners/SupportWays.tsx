import { Button } from "@/components/ui/button";
import { ExternalLink, Gift, Heart, ShoppingCart } from "lucide-react";

const supportWays = [
  {
    title: "Walmart Spark Good",
    description:
      "Round up your Walmart purchase and send the change directly to IEN. Simple, fee-free, and built for everyday support.",
    href: "https://www.walmart.com/nonprofits/a49bd66d-f7de-4d0c-ab33-cf0a8fdd1b74",
    label: "Round Up for IEN",
    icon: ShoppingCart,
  },
  {
    title: "Kroger Community Rewards",
    description:
      "Link your Kroger Plus Card to IEN and a portion of every purchase is donated at no cost to you. Search for Indiana Esports Network or code YD133.",
    href: "https://www.kroger.com/account/communityrewards",
    label: "Enroll with Kroger",
    icon: Heart,
  },
  {
    title: "PayPal Giving Fund",
    description:
      "Make a one-time or recurring tax-deductible donation through PayPal Giving Fund. 100% of your gift reaches IEN.",
    href: "https://www.paypal.com/us/fundraiser/charity/4539677",
    label: "Donate via PayPal",
    icon: Gift,
  },
];

export function SupportWays() {
  return (
    <section id="ways-to-support" className="relative py-20 bg-card border-y border-primary/30 scroll-mt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/15 border border-primary/40 rounded-full text-[10px] font-heading font-bold tracking-widest uppercase text-primary mb-4">
            <Heart className="w-3 h-3" />
            Every Dollar Counts
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Ways to Support IEN
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Families, fans, alumni, and community members can help fund
            scholastic esports in Indiana through everyday giving and direct
            donation options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {supportWays.map((way) => {
            const Icon = way.icon;
            return (
              <div
                key={way.title}
                className="bg-background border border-primary/20 hover:border-primary rounded-lg p-6 flex flex-col transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">
                  {way.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {way.description}
                </p>
                <Button
                  variant="outline"
                  asChild
                  className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest"
                >
                  <a href={way.href} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {way.label}
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto mt-10 text-center">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Indiana Esports Network Limited is a{" "}
            <span className="text-primary font-bold">501(c)(3) nonprofit</span>{" "}
            organization, EIN <span className="text-primary font-bold">86-3901103</span>.
            All donations are tax-deductible to the full extent allowed by law.
          </p>
        </div>
      </div>
    </section>
  );
}
