import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import ienLogo from "@assets/IEN_LogoNavbar.png";
import { ONBOARDING_URL } from "@/lib/socialLinks";

type NavItem = {
  label: string;
  href: string;

  hashAware?: boolean;

  children?: Array<{ label: string; href: string }>;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home",      href: "/" },
  { label: "About IEN", href: "/about" },
  { label: "Leagues",   href: "/leagues" },
  { label: "Games",     href: "/leagues#game-titles", hashAware: true },
  {
    label: "Community",
    href: "/news",
    children: [
      { label: "News",                href: "/news" },
      { label: "Events",              href: "/events" },
      { label: "Hall of Champions",   href: "/hall-of-champions" },
    ],
  },
  { label: "Schedule",  href: "/schedule" },
  { label: "Schools",   href: "/schools" },
  { label: "Partners",  href: "/partners" },
  { label: "Contact",   href: "/contact" },
];

function isActive(
  pathname: string,
  currentHash: string,
  item: NavItem,
  allItems: NavItem[],
): boolean {
  if (item.children && item.children.length > 0) {
    return item.children.some((c) => {
      const t = c.href.split("#")[0] || "/";
      if (t === "/") return pathname === "/";
      return pathname === t || pathname.startsWith(t + "/");
    });
  }

  const target = item.href.split("#")[0] || "/";
  if (item.hashAware) {
    const targetHash = item.href.split("#")[1] ?? "";
    return pathname === target && currentHash === targetHash;
  }

  const hashSiblingActive = allItems.some((other) => {
    if (other === item || !other.hashAware) return false;
    const otherTarget = other.href.split("#")[0] || "/";
    const otherHash = other.href.split("#")[1] ?? "";
    return otherTarget === target && currentHash === otherHash;
  });
  if (hashSiblingActive) return false;

  if (target === "/") return pathname === "/";
  return pathname === target || pathname.startsWith(target + "/");
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const [hash, setHash] = useState<string>(() =>
    typeof window !== "undefined" ? window.location.hash.slice(1) : "",
  );
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash.slice(1));
    window.addEventListener("hashchange", onHashChange);

    onHashChange();
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [location]);

  const handleHashNav = (href: string) => {
    const [target, anchor] = href.split("#");
    if (!anchor) return;
    const targetPath = target || "/";
    if (location !== targetPath) return;
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const linkClass = (active: boolean) =>
    `text-sm font-medium transition-colors ${
      active
        ? "text-primary"
        : "text-foreground hover:text-primary"
    }`;

  const linkClassMobile = (active: boolean) =>
    `block text-sm font-medium transition-colors ${
      active
        ? "text-primary border-l-2 border-primary pl-3 -ml-3"
        : "text-foreground hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Indiana Esports Network home">
          <img
            src={ienLogo}
            alt="Indiana Esports Network"
            className="h-12 md:h-16 w-auto object-contain shrink-0"
          />
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const active = isActive(location, hash, item, NAV_ITEMS);
            if (item.children && item.children.length > 0) {
              return (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger
                    className={`${linkClass(active)} inline-flex items-center gap-1 outline-none focus-visible:text-primary`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="bg-background border border-primary/30 min-w-[10rem]"
                  >
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild className="focus:bg-primary/10 focus:text-primary">
                        <Link
                          href={child.href}
                          className="w-full cursor-pointer text-sm font-medium text-foreground"
                        >
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={linkClass(active)}
                aria-current={active ? "page" : undefined}
                onClick={item.hashAware ? () => handleHashNav(item.href) : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest px-6 ml-4">
             <a href={ONBOARDING_URL} target="_blank" rel="noopener noreferrer">JOIN THE LEAGUE</a>
          </Button>
        </nav>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="primary-mobile-navigation"
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <div
          id="primary-mobile-navigation"
          role="navigation"
          aria-label="Primary mobile navigation"
          className="md:hidden border-t border-primary/20 bg-background/95 px-4 py-4 space-y-4"
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(location, hash, item, NAV_ITEMS);
            if (item.children && item.children.length > 0) {
              return (
                <div key={item.label} className="space-y-2">
                  <div className="text-xs font-heading font-bold tracking-widest uppercase text-primary/70">
                    {item.label}
                  </div>
                  <div className="pl-3 space-y-3 border-l border-primary/20">
                    {item.children.map((child) => {
                      const childActive = location === child.href || location.startsWith(child.href + "/");
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={linkClassMobile(childActive)}
                          aria-current={childActive ? "page" : undefined}
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={linkClassMobile(active)}
                aria-current={active ? "page" : undefined}
                onClick={() => {
                  setIsOpen(false);
                  if (item.hashAware) handleHashNav(item.href);
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest mt-4">
             <a href={ONBOARDING_URL} target="_blank" rel="noopener noreferrer">JOIN THE LEAGUE</a>
          </Button>
        </div>
      )}
    </header>
  );
}
