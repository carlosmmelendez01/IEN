import { Link } from "wouter";
import ienShield from "@assets/IEN_Shield_1776709349969.png";

const ONBOARDING_URL = "https://calendar.app.google/9equTEK5Cp1NeoWh9";
const DONATE_URL = "https://www.paypal.com/donate/?hosted_button_id=PLACEHOLDER";

const socials = [
  {
    name: "Discord",
    href: "https://discord.gg/indianaesportsnetwork",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.031.053a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/indianaesportsnetwork",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com/INEsportsNetwork",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@IndianaEsportsNetwork",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/IndianaEsportsNetwork",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

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
            {socials.map((s) => (
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
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading font-bold tracking-widest text-sm uppercase px-5 py-2 border border-primary/40 text-primary rounded-lg hover:bg-primary/10 hover:border-primary transition-all"
          >
            ♥ Donate
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img src={ienShield} alt="IEN Shield Logo" className="w-12 h-12 object-contain shrink-0" />
              <span className="font-heading font-bold text-lg tracking-wider text-primary leading-tight">
                INDIANA ESPORTS<br />NETWORK
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-5">
              Indiana's official scholastic esports league — fostering community, competition, and career pathways through gaming since 2019.
            </p>
            <a
              href={`mailto:info@indianaesportsnetwork.org`}
              className="text-sm text-primary hover:underline"
            >
              info@indianaesportsnetwork.org
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
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
