import { Link } from "wouter";
import ienShield from "@assets/IEN_Shield_1776709349969.png";

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background py-12 mt-20 relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
       
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
               <img src={ienShield} alt="IEN Shield Logo" className="w-14 h-14 object-contain shrink-0" />
               <span className="font-heading font-bold text-xl tracking-wider text-primary">INDIANA ESPORTS NETWORK</span>
            </Link>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Indiana's official scholastic esports league. Fostering community, competition, and career pathways through gaming since 2019.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-primary mb-4 tracking-wider">LEAGUE INFO</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/why-esports" className="hover:text-primary transition-colors">Why Esports?</Link></li>
              <li><Link href="/leagues" className="hover:text-primary transition-colors">Our Leagues</Link></li>
              <li><Link href="/start-a-program" className="hover:text-primary transition-colors">Start a Program</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary mb-4 tracking-wider">LEAGUE OFFICE</h4>
            <address className="not-italic text-sm text-muted-foreground space-y-1">
              <p>Indiana Esports Network</p>
              <p>Indiana Nonprofit</p>
              <p>EIN: 86-3091103</p>
              <p className="pt-2">info@indianaesportsnetwork.org</p>
            </address>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Indiana Esports Network. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}