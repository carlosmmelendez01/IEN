import { Link } from "wouter";
import ienLogo from "@assets/IEN_LogoFooter.png";
import { socialLinks, ONBOARDING_URL } from "@/lib/socialLinks";

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Social bar */}
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
            href="/partners#ways-to-support"
            className="font-heading font-bold tracking-widest text-sm uppercase px-5 py-2 border border-primary/40 text-primary rounded-lg hover:bg-primary/10 hover:border-primary transition-all"
          >
            ♥ Donate
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link href="/" className="flex items-center mb-4" aria-label="Indiana Esports Network home">
              <img
                src={ienLogo}
                alt="Indiana Esports Network"
                className="h-20 w-auto object-contain shrink-0"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-5">
              Indiana's official scholastic esports league, fostering community, competition, and career pathways through gaming since 2019.
            </p>
            <a
              href="mailto:board@indianaesportsnetwork.org"
              className="text-sm text-primary hover:underline"
            >
              board@indianaesportsnetwork.org
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-primary mb-4 tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/why-esports" className="hover:text-primary transition-colors">About IEN</Link></li>
              <li><Link href="/leagues" className="hover:text-primary transition-colors">Leagues</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="/news" className="hover:text-primary transition-colors">News</Link></li>
              <li><Link href="/schedule" className="hover:text-primary transition-colors">Schedule</Link></li>
              <li><Link href="/schools" className="hover:text-primary transition-colors">Schools</Link></li>
              <li><Link href="/partners" className="hover:text-primary transition-colors">Partners</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
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

        {/* Bottom bar */}
        <div className="border-t border-primary/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-muted-foreground text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Indiana Esports Network. All rights reserved.</span>
            <span className="mx-2 opacity-40">|</span>
            <span>EIN: 86-3091103</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <Link
              href="/partners#ways-to-support"
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
