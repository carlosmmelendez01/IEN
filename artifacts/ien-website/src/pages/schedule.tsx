import { motion } from "framer-motion";
import { CalendarDays, Download, FileText } from "lucide-react";

import { CoachScheduleOverview } from "@/components/schedule/CoachScheduleOverview";
import { InteractiveScheduleCalendar } from "@/components/schedule/InteractiveScheduleCalendar";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

export default function Schedule() {
  return (
    <Layout>
      <SEO
        title="Schedule"
        description="Interactive 2026-2027 Indiana Esports Network season calendar with IHSEN, IMSEN, and IUEN game weeks, meetings, finals, one-page overviews, and official PDFs."
        path="/schedule"
      />

      <section className="relative overflow-hidden border-b border-primary/25 bg-card">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/20" />

        <div className="container relative z-10 mx-auto px-4 py-12 md:py-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase text-primary">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              2026-2027 official season schedule
            </div>
            <h1 className="text-4xl font-heading font-bold leading-none text-white md:text-6xl">
              Season schedules, now built for coaches
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              Browse the calendar for planning, then grab the one-page
              overviews or official PDFs when you need a clean reference.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 bg-primary px-7 font-heading uppercase text-primary-foreground hover:bg-primary/90"
              >
                <a href="#interactive-calendar">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  Browse Calendar
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 border-primary/50 px-7 font-heading uppercase text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="#coach-resources">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Coach Resources
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-12 px-7 font-heading uppercase text-muted-foreground hover:text-primary"
              >
                <a href="#official-pdfs">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  PDFs
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <main>
        <section className="container mx-auto px-4 py-8">
          <InteractiveScheduleCalendar />
        </section>

        <section className="border-y border-primary/15 bg-card/45 py-10">
          <div className="container mx-auto px-4">
            <CoachScheduleOverview />
          </div>
        </section>
      </main>
    </Layout>
  );
}
