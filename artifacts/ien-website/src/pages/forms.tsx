import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { schoolCharterConfig } from "@/lib/schoolCharter";
import {
  ArrowRight,
  ClipboardCheck,
  DollarSign,
  ExternalLink,
  Gamepad2,
} from "lucide-react";
import type { ComponentType } from "react";

type FormLink = {
  label: string;
  href?: string;
  note?: string;
};

type FormCard = {
  title: string;
  desc: string;
  icon: ComponentType<{ className?: string }>;
  links: FormLink[];
  footer?: string;
  featured?: boolean;
};

const formCards: FormCard[] = [
  {
    title: "Registration",
    desc: "Start here for school chartering, team entry, rosters, and student eligibility.",
    icon: ClipboardCheck,
    featured: true,
    links: [
      {
        label: "2026-27 Annual Charter",
        href: schoolCharterConfig.formUrl,
      },
      {
        label: "LeagueOS Registration",
        href: "https://leagueos.gg",
      },
      {
        label: "Student Eligibility",
        note: "completed during registration",
      },
    ],
    footer:
      "Deadlines: Sept. 4 for Middle School and Unified. Oct. 19 for High School.",
  },
  {
    title: "Competition",
    desc: "Required operational forms before match play, streaming, or Nintendo Switch competition.",
    icon: Gamepad2,
    links: [
      {
        label: "Nintendo Ethernet Verification",
        href: "https://forms.gle/S5FWfho6DTNu5AyT7",
      },
      {
        label: "Verified Streaming Form",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSdsBvpSzpFfoCxD1bsVrg0ypWiLIC5sSZlMUfCQFhQrV7lw4Q/viewform",
      },
    ],
    footer: "If your school account blocks a form, email support.",
  },
  {
    title: "Billing & Support",
    desc: "Use these for invoices, Unified next steps, and help when something gets stuck.",
    icon: DollarSign,
    links: [
      {
        label: "2026-27 Invoice Request",
        href: "https://docs.google.com/forms/d/e/1FAIpQLScuvMFtFMdcLSpFTNeqG-oLDi4RJ14cURIdkJSz56fC6qedmQ/viewform",
      },
      {
        label: "Unified Registration",
        href: "/leagues/iuen",
      },
      {
        label: "Email Support",
        href: "mailto:support@indianaesportsnetwork.org",
      },
    ],
    footer: "Varsity is $100 flat per school, per year.",
  },
];

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

function ResourceLink({ item }: { item: FormLink }) {
  if (!item.href) {
    return (
      <span className="flex gap-2 text-sm leading-6 text-muted-foreground">
        <span className="text-primary">✓</span>
        <span>
          {item.label}
          {item.note && (
            <span className="block text-xs text-muted-foreground/80">
              {item.note}
            </span>
          )}
        </span>
      </span>
    );
  }

  const external = isExternal(item.href);
  const mailto = item.href.startsWith("mailto:");
  const content = (
    <>
      <span className="text-primary">✓</span>
      <span>{item.label}</span>
      {external && <ExternalLink className="h-3.5 w-3.5" aria-hidden />}
      {!external && !mailto && (
        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      )}
    </>
  );
  const className =
    "flex items-center gap-2 text-sm leading-6 text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded";

  if (!external && !mailto) {
    return (
      <Link href={item.href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={item.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {content}
    </a>
  );
}

export default function Forms() {
  return (
    <Layout>
      <SEO
        title="IEN Forms"
        description="Official Indiana Esports Network forms for school chartering, LeagueOS registration, streaming verification, Nintendo Ethernet verification, invoices, Unified registration, and coach support."
        path="/forms"
      />

      <section className="py-16 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
            <h1 className="px-4 font-heading text-primary font-bold tracking-widest uppercase text-3xl">
              Forms
            </h1>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <p className="text-center text-muted-foreground text-sm mb-10">
            The core links coaches need for registration, competition, billing,
            and support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {formCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className={`bg-background p-8 rounded-xl ${
                    card.featured
                      ? "border-2 border-primary shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                      : "border border-primary/30"
                  }`}
                >
                  <Icon className="w-9 h-9 text-primary mb-5" aria-hidden />
                  <h2
                    className={`font-heading font-bold text-2xl mb-4 ${
                      card.featured ? "text-primary" : "text-white"
                    }`}
                  >
                    {card.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {card.desc}
                  </p>
                  <div className="space-y-2 mb-6">
                    {card.links.map((item) => (
                      <ResourceLink key={item.label} item={item} />
                    ))}
                  </div>
                  {card.footer && (
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 text-sm text-primary font-medium leading-6">
                      {card.footer}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
