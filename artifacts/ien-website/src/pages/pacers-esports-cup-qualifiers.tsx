import { ArrowLeft, CalendarDays, ExternalLink, MapPin, Ticket } from "lucide-react";
import { Link } from "wouter";

import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { PACERS_CUP_FINALS_DATE, PACERS_CUP_PATH } from "@/data/pacersCup";

const PACERS_CUP_TICKETS_URL = "https://www.gofevo.com/event/Pacersesports2";

const brackets = [
  {
    name: "NBA 2K26",
    filename: "pacers-esports-cup-nba2k-gainbridge-bracket.png",
    semifinals: [
      "Kmills515 (Wabash) vs. Pnxchmike (Michigan City)",
      "thtboijaden (Michigan City) vs. derriusb (Michigan City)",
    ],
    series: "Best of 3 for the championship and third-place match",
  },
  {
    name: "Rocket League",
    filename: "pacers-esports-cup-rocket-league-gainbridge-bracket-trophy-glow.png",
    semifinals: [
      "Westfield Varsity Rocket League vs. BHMSD Rocket League Varsity",
      "INGDA Rocket League Varsity vs. Speedway Varsity Rocket League",
    ],
    series: "Best of 7 for the championship and third-place match",
  },
  {
    name: "Super Smash Bros. Ultimate",
    filename: "pacers-esports-cup-ssbu-gainbridge-bracket.png",
    semifinals: [
      "Wabash vs. Michigan City Smash Varsity",
      "Ben Davis University vs. BHMSD SSBU Varsity",
    ],
    series: "Best of 5 for the championship and third-place match",
  },
];

const sponsors = [
  { name: "Purdue University Northwest", games: "NBA 2K26" },
  { name: "Manchester University", games: "Rocket League and Super Smash Bros. Ultimate" },
];

const description =
  "Congratulations to the 2027 Pacers Esports Cup finalists. View the NBA 2K26, Rocket League, and Super Smash Bros. Ultimate championship brackets for Gainbridge Fieldhouse.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: "Pacers Esports Cup 2027 Finals",
  description,
  startDate: "2027-01-30",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Gainbridge Fieldhouse",
    address: {
      "@type": "PostalAddress",
      streetAddress: "125 S Pennsylvania St",
      addressLocality: "Indianapolis",
      addressRegion: "IN",
      postalCode: "46204",
      addressCountry: "US",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Indiana Esports Network",
    url: "https://indianaesportsnetwork.org",
  },
  sponsor: sponsors.map(({ name }) => ({ "@type": "Organization", name })),
  url: `https://indianaesportsnetwork.org${PACERS_CUP_PATH}`,
};

export default function PacersEsportsCupFinals() {
  return (
    <Layout>
      <SEO
        title="Pacers Esports Cup 2027 Finals | Road to Gainbridge"
        description={description}
        path={PACERS_CUP_PATH}
        type="event"
        jsonLd={jsonLd}
      />

      <section className="relative overflow-hidden border-b border-primary/30 bg-[#0b1524]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(212,175,55,0.22),transparent_32%),linear-gradient(135deg,transparent_52%,rgba(212,175,55,0.08)_52%,rgba(212,175,55,0.08)_53%,transparent_53%)]" />
        <div className="container relative mx-auto px-4 py-12 md:py-20">
          <Link
            href="/events"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All events
          </Link>

          <div className="grid items-end gap-8 lg:grid-cols-[1fr_20rem]">
            <div>
              <p className="mb-4 font-heading text-sm font-bold uppercase tracking-[0.2em] text-primary">
                IEN × Pacers Esports Cup 2027
              </p>
              <h1 className="font-heading text-5xl font-bold leading-none text-white sm:text-6xl md:text-7xl">
                Road to <span className="text-primary">Gainbridge</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
                Congratulations to the teams and players who earned their spot in
                the 2027 Pacers Esports Cup finals! We’ll see you at Gainbridge
                Fieldhouse in Indianapolis.
              </p>
              <Button asChild className="mt-6">
                <a href="#tickets">
                  <Ticket className="h-4 w-4" aria-hidden="true" />
                  Buy tickets
                </a>
              </Button>
            </div>

            <aside className="border-l-4 border-primary bg-background/80 p-5 shadow-2xl">
              <p className="font-heading text-xs font-bold uppercase tracking-widest text-primary">
                Finals day
              </p>
              <p className="mt-2 font-heading text-2xl font-bold text-white">
                {PACERS_CUP_FINALS_DATE}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                Gainbridge Fieldhouse
              </p>
              <Button asChild variant="outline" className="mt-5 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="/events/pacers-esports-cup-2027.ics" download>
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  Add finals to calendar
                </a>
              </Button>
            </aside>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16" aria-labelledby="brackets">
        <h2 id="brackets" className="mb-6 font-heading text-3xl font-bold text-white md:text-4xl">
          Championship brackets
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {brackets.map(({ name, filename, semifinals, series }) => {
            const imagePath = `/events/${filename}`;
            return (
              <article key={name} className="min-w-0 overflow-hidden rounded-lg border border-primary/25 bg-card">
                <h3 className="px-4 py-4 font-heading text-xl font-bold text-white sm:px-6">
                  {name}
                </h3>
                <a
                  href={imagePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open full-size ${name} championship bracket in a new tab`}
                  className="group relative block focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary"
                >
                  <img
                    src={imagePath}
                    alt={`${name} championship bracket and trophy`}
                    width={1920}
                    height={1080}
                    loading="lazy"
                    className="h-auto w-full"
                  />
                  <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded bg-[#0b1524] px-2 py-1 text-xs font-semibold text-white group-hover:text-primary">
                    Full size <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </span>
                </a>
                <div className="px-4 py-4 text-sm leading-6 text-gray-300 sm:px-6">
                  <p className="font-bold text-primary">Semifinals</p>
                  <ol className="list-decimal space-y-1 pl-5">
                    {semifinals.map((match) => <li key={match}>{match}</li>)}
                  </ol>
                  <p className="mt-2 text-muted-foreground">{series}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-primary/20 bg-[#0b1524] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Thank you to our sponsors
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {sponsors.map(({ name, games }) => (
              <article key={name} className="rounded-lg border border-primary/25 bg-card p-5 sm:p-6">
                <h3 className="font-heading text-xl font-bold text-primary">{name}</h3>
                <p className="mt-2 text-gray-300">{games}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-2">
        <div id="tickets" className="scroll-mt-28 rounded-lg border border-primary/25 bg-card p-5 sm:p-6">
          <h2 className="font-heading text-2xl font-bold text-white">Pacers vs. Wizards tickets</h2>
          <p className="mt-3 max-w-xl leading-7 text-gray-300">
            The Pacers tip off at 7:00 PM ET on January 30 at Gainbridge Fieldhouse.
            Finalists, families, and friends are invited to the Pacers Esports Cup group night.
            Tickets purchased through the group offer include a Pacers × WWE gift
            for pickup during the game.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Purchase by December 30, 2026 at 5:00 PM. Tickets are limited and subject
            to availability.
          </p>
          <Button asChild className="mt-5">
            <a href={PACERS_CUP_TICKETS_URL} target="_blank" rel="noopener noreferrer">
              Buy group tickets on FEVO
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold text-white">Event questions</h2>
          <p className="mt-3 leading-7 text-gray-300">
            Email IEN support or ask in the IEN coaches Discord.
          </p>
          <a
            href="mailto:support@indianaesportsnetwork.org"
            className="mt-2 inline-block break-all text-sm font-bold text-primary hover:underline"
          >
            support@indianaesportsnetwork.org
          </a>
        </div>
      </section>
    </Layout>
  );
}
