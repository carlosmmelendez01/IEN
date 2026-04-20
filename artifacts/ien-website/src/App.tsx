import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import Leagues from "@/pages/leagues";
import IUEN from "@/pages/iuen";
import Events from "@/pages/events";
import Schools from "@/pages/schools";
import Partners from "@/pages/partners";
import PartnerWithIEN from "@/pages/partner-with-ien";
import StartAProgram from "@/pages/start-a-program";
import WhyEsports from "@/pages/why-esports";
import Contact from "@/pages/contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/leagues" component={Leagues} />
      <Route path="/leagues/iuen" component={IUEN} />
      <Route path="/events" component={Events} />
      <Route path="/schools" component={Schools} />
      <Route path="/partners" component={Partners} />
      <Route path="/partner-with-ien" component={PartnerWithIEN} />
      <Route path="/start-a-program" component={StartAProgram} />
      <Route path="/why-esports" component={WhyEsports} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;