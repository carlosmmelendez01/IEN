import { Link } from "wouter";
import ienLogo from "@assets/IEN_Horizontal Logo Transparent.png";
import { socialLinks, ISEA_URL, ONBOARDING_URL } from "@/lib/socialLinks";

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="bg-card border-b border-primary/10 py-5">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-heading font-bold tracking-widest text-primary text-sm uppercase">
            Follow IEN
          </span>
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/10 transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 font-heading font-bold tracking-widest text-sm uppercase px-5 py-2 border border-primary/40 text-primary rounded-lg hover:bg-primary/10 hover:border-primary transition-all"
          >
            <span>♥ Donate</span>
            <span className="text-[0.6rem] tracking-[0.18em] text-primary/70 normal-case font-medium">Tax-Deductible</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">

          <div className="sm:col-span-2">
            <Link href="/" className="flex items-center mb-4" aria-label="Indiana Esports Network home">
              <img
                src={ienLogo}
                alt="Indiana Esports Network"
                className="h-24 md:h-28 w-auto object-contain shrink-0"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-5">
              Indiana's official scholastic esports league, fostering community, competition, and career pathways through gaming since 2019.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-5">
              Proud member of the{" "}
              <a
                href={ISEA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Interstate Scholastic Esports Alliance (ISEA)
              </a>
              .
            </p>
            <a
              href="mailto:ienboard@indianaesportsnetwork.org"
              className="text-sm text-primary hover:underline"
            >
              ienboard@indianaesportsnetwork.org
            </a>
            <div className="mt-6">
              <a
                aria-label="Indiana Esports Network Candid profile"
                href="https://app.candid.org/profile/10983331/indiana-esports-network-86-3901103/?pkId=31ad6aaf-f16e-40da-a8e3-750e106b4e85"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <img
                  alt=""
                  src="https://widgets.guidestar.org/prod/v1/pdp/transparency-seal/10983331/svg"
                  width={96}
                  height={96}
                  loading="lazy"
                  decoding="async"
                  className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
                />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary mb-4 tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/why-esports" className="hover:text-primary transition-colors">About IEN</Link></li>
              <li><Link href="/leagues" className="hover:text-primary transition-colors">Leagues</Link></li>
              <li><Link href="/rules-policies" className="hover:text-primary transition-colors">Rules &amp; Policies</Link></li>
              <li><Link href="/forms" className="hover:text-primary transition-colors">Forms</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="/news" className="hover:text-primary transition-colors">News</Link></li>
              <li><Link href="/brand-kit" className="hover:text-primary transition-colors">Brand Kit</Link></li>
              <li><Link href="/schedule" className="hover:text-primary transition-colors">Schedule</Link></li>
              <li><Link href="/schools" className="hover:text-primary transition-colors">Schools</Link></li>
              <li><Link href="/partners" className="hover:text-primary transition-colors">Partners</Link></li>
              <li><Link href="/sponsor" className="hover:text-primary transition-colors">Sponsor IEN</Link></li>
              <li><Link href="/support" className="hover:text-primary transition-colors">Support IEN</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary mb-4 tracking-wider text-sm">Programs</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/leagues" className="hover:text-primary transition-colors">IHSEN (High School)</Link></li>
              <li><Link href="/leagues" className="hover:text-primary transition-colors">IMSEN (Middle School)</Link></li>
              <li><Link href="/leagues/iuen" className="hover:text-primary transition-colors">IUEN (Unified)</Link></li>
              <li><Link href="/start-a-program" className="hover:text-primary transition-colors">Start a Program</Link></li>
              <li>
                <a
                  href={ONBOARDING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Schedule Onboarding
                </a>
              </li>
              <li>
                <a
                  href="https://leagueos.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LeagueOS Platform ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-muted-foreground text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Indiana Esports Network. All rights reserved.</span>
            <span className="mx-2 opacity-40">|</span>
            <span>501(c)(3) · EIN 86-3901103 · Donations tax-deductible</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link
              href="/support"
              className="hover:text-primary transition-colors"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
