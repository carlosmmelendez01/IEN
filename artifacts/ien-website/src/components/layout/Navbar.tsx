import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ienShield from "@assets/IEN_Shield_1776709349969.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src={ienShield} alt="IEN Shield Logo" className="w-12 h-12 object-contain shrink-0" />
          <span className="font-heading font-bold text-lg md:text-xl hidden sm:inline-block tracking-wider text-primary">INDIANA ESPORTS NETWORK</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="/why-esports" className="text-sm font-medium hover:text-primary transition-colors">About IEN</Link>
          <Link href="/leagues" className="text-sm font-medium hover:text-primary transition-colors">Leagues</Link>
          <Link href="/events" className="text-sm font-medium hover:text-primary transition-colors">Events</Link>
          <Link href="/schools" className="text-sm font-medium hover:text-primary transition-colors">Schools</Link>
          <Link href="/partners" className="text-sm font-medium hover:text-primary transition-colors">Partners</Link>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest px-6 ml-4">
             <a href="https://leagueos.gg" target="_blank" rel="noopener noreferrer">JOIN THE LEAGUE</a>
          </Button>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-primary/20 bg-background/95 px-4 py-4 space-y-4">
          <Link href="/" className="block text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/why-esports" className="block text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>About IEN</Link>
          <Link href="/leagues" className="block text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Leagues</Link>
          <Link href="/events" className="block text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Events</Link>
          <Link href="/schools" className="block text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Schools</Link>
          <Link href="/partners" className="block text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Partners</Link>
          <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest mt-4">
             <a href="https://leagueos.gg" target="_blank" rel="noopener noreferrer">JOIN THE LEAGUE</a>
          </Button>
        </div>
      )}
    </header>
  );
}