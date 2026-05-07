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
import BrandGuidelines from "@/pages/brand-guidelines";
import HallOfChampions from "@/pages/hall-of-champions";

const queryClient = new QueryClient();

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
      <Route path="/partner-with-ien" component={PartnerWithIEN} />
      <Route path="/start-a-program" component={StartAProgram} />
      <Route path="/why-esports" component={WhyEsports} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/contact" component={Contact} />
      <Route path="/news" component={News} />
      <Route path="/brand-guidelines" component={BrandGuidelines} />
      <Route path="/hall-of-champions" component={HallOfChampions} />
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
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;