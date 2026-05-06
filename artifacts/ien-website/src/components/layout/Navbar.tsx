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
import ienLogo from "@assets/IEN_Transparent.png";
import { ONBOARDING_URL } from "@/lib/socialLinks";

type NavItem = {
  label: string;
  href: string;
  /** If true, treat href's hash as part of matching (e.g. Games on /leagues). */
  hashAware?: boolean;
  /** Optional children for dropdown items (desktop only). If set, `href` is still used for active-match fallback. */
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
      { label: "News",              href: "/news" },
      { label: "Events",            href: "/events" },
      { label: "Brand Guidelines",  href: "/brand-guidelines" },
    ],
  },
  { label: "Schedule",  href: "/schedule" },
  { label: "Schools",   href: "/schools" },
  { label: "Partners",  href: "/partners" },
  { label: "Contact",   href: "/contact" },
];

/**
 * Returns true if the current route should show this nav item as "active".
 * - Home is exact-match only.
 * - Items with children match if ANY child path matches current route.
 * - The Games link (hash-aware) only lights up when the hash is present.
 * - Other top-level pages match exact path + any sub-path (e.g. /leagues/ihsen matches /leagues).
 * - If a hash-aware sibling matches the current hash on the same pathname, its non-hash sibling
 *   (e.g. Leagues) yields so only one nav item lights up.
 */
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

  // Non-hash-aware item: if a sibling hash-aware item is currently matching on this same
  // pathname, yield to that sibling so we don't highlight both (e.g. Games vs Leagues).
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
  // wouter's useLocation only tracks pathname, so we track the hash ourselves
  // to keep hash-aware active states (e.g. "Games" -> /leagues#game-titles) in sync.
  const [hash, setHash] = useState<string>(() =>
    typeof window !== "undefined" ? window.location.hash.slice(1) : "",
  );
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash.slice(1));
    window.addEventListener("hashchange", onHashChange);
    // Also re-read on route change (wouter Link clicks can change hash without firing hashchange).
    onHashChange();
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [location]);

  // For hash-aware items (e.g. Games -> /leagues#game-titles), manually scroll to the
  // target section when the user is already on that pathname. Without this, clicking the
  // link a second time (when the hash is already set) fires no hashchange event and the
  // page doesn't re-scroll.
  const handleHashNav = (href: string) => {
    const [target, anchor] = href.split("#");
    if (!anchor) return;
    const targetPath = target || "/";
    if (location !== targetPath) return; // let wouter handle cross-page nav
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

        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const active = isActive(location, hash, item, NAV_ITEMS);

            // Dropdown variant (for items with children)
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

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-primary/20 bg-background/95 px-4 py-4 space-y-4">
          {NAV_ITEMS.map((item) => {
            const active = isActive(location, hash, item, NAV_ITEMS);

            // On mobile, expand children inline rather than using a dropdown.
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
