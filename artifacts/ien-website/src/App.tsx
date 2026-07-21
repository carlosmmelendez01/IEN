import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { lazy, Suspense, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";

const About = lazy(() => import("@/pages/about"));
const Leagues = lazy(() => import("@/pages/leagues"));
const IHSEN = lazy(() => import("@/pages/ihsen"));
const IMSEN = lazy(() => import("@/pages/imsen"));
const IUEN = lazy(() => import("@/pages/iuen"));
const Events = lazy(() => import("@/pages/events"));
const Schools = lazy(() => import("@/pages/schools"));
const Partners = lazy(() => import("@/pages/partners"));
const Sponsor = lazy(() => import("@/pages/sponsor"));
const Support = lazy(() => import("@/pages/support"));
const PartnerWithIEN = lazy(() => import("@/pages/partner-with-ien"));
const StartAProgram = lazy(() => import("@/pages/start-a-program"));
const WhyEsports = lazy(() => import("@/pages/why-esports"));
const Schedule = lazy(() => import("@/pages/schedule"));
const Contact = lazy(() => import("@/pages/contact"));
const News = lazy(() => import("@/pages/news"));
const HallOfChampions = lazy(() => import("@/pages/hall-of-champions"));
const Privacy = lazy(() => import("@/pages/privacy"));
const Terms = lazy(() => import("@/pages/terms"));

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
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
      <Route path="/sponsor" component={Sponsor} />
      <Route path="/support" component={Support} />
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
    <HelmetProvider>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Suspense fallback={null}>
            <Router />
          </Suspense>
        </WouterRouter>
        <Toaster />
        <SpeedInsights />
      </TooltipProvider>
    </HelmetProvider>
  );
}

export default App;
