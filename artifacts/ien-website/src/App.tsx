import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import About from "@/pages/about";
import Leagues from "@/pages/leagues";
import IHSEN from "@/pages/ihsen";
import IMSEN from "@/pages/imsen";
import IUEN from "@/pages/iuen";
import Events from "@/pages/events";
import Schools from "@/pages/schools";
import Partners from "@/pages/partners";
import PartnerWithIEN from "@/pages/partner-with-ien";
import StartAProgram from "@/pages/start-a-program";
import WhyEsports from "@/pages/why-esports";
import Schedule from "@/pages/schedule";
import Contact from "@/pages/contact";
import News from "@/pages/news";
import HallOfChampions from "@/pages/hall-of-champions";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";

const queryClient = new QueryClient();

// WCAG 2.4.2 Page Titled. Each route gets a unique, descriptive <title> so
// browser tabs, screen readers, and bookmarks reflect the actual page. Map
// is kept central instead of per-page so the route table and the title table
// can't drift apart.
const BRAND_SUFFIX = "Indiana Esports Network";
const PAGE_TITLES: Record<string, string> = {
  "/":                  "Home",
  "/about":             "About IEN",
  "/leagues":           "Leagues",
  "/leagues/ihsen":     "IHSEN — High School",
  "/leagues/imsen":     "IMSEN — Middle School",
  "/leagues/iuen":      "IUEN — Unified",
  "/events":            "Events",
  "/schools":           "Member Schools",
  "/partners":          "Our Partners",
  "/partner-with-ien":  "Partner with IEN",
  "/start-a-program":   "Start a Program",
  "/why-esports":       "Why Esports",
  "/schedule":          "Schedule",
  "/contact":           "Contact",
  "/news":              "News",
  "/hall-of-champions": "Hall of Champions",
  "/privacy":           "Privacy Policy",
  "/terms":             "Terms of Use",
};

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function DocumentTitle() {
  const [location] = useLocation();
  useEffect(() => {
    // Strip any trailing #hash before lookup (e.g. /news#post-3 -> /news).
    const path = location.split("#")[0] || "/";
    const pageTitle = PAGE_TITLES[path];
    document.title = pageTitle
      ? `${pageTitle} — ${BRAND_SUFFIX}`
      : `${BRAND_SUFFIX} — Indiana's Official Scholastic Esports League`;
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/leagues" component={Leagues} />
      <Route path="/leagues/ihsen" component={IHSEN} />
      <Route path="/leagues/imsen" component={IMSEN} />
      <Route path="/leagues/iuen" component={IUEN} />
      <Route path="/events" component={Events} />
      <Route path="/schools" component={Schools} />
      <Route path="/partners" component={Partners} />
      <Route path="/partner-with-ien" component={PartnerWithIEN} />
      <Route path="/start-a-program" component={StartAProgram} />
      <Route path="/why-esports" component={WhyEsports} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/contact" component={Contact} />
      <Route path="/news" component={News} />
      <Route path="/hall-of-champions" component={HallOfChampions} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <DocumentTitle />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;