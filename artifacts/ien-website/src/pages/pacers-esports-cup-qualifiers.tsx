import { Link } from "wouter";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Download,
  ExternalLink,
  FileText,
  Gamepad2,
  MapPin,
  ShieldCheck,
  Trophy,
  UsersRound,
  Wifi,
} from "lucide-react";

import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const EVENT_PATH = "/events/pacers-esports-cup-qualifiers";
const LEAGUEOS_URL = "https://leagueos.gg";
const QUALIFIER_INFO_PDF = "/events/pacers-esports-cup-2027-qualifier-info.pdf";
const NBA_2K_RULESET_PDF = "/events/pacers-esports-cup-2027-nba-2k-ruleset.pdf";
const CALENDAR_HREF = "/events/pacers-esports-cup-2027.ics";

const milestones = [
  {
    label: "Registration closes",
    date: "Wednesday, November 11, 2026",
    detail: "Complete event registration in LeagueOS.",
    icon: CalendarDays,
  },
  {
    label: "Online qualifier",
    date: "Saturday, November 14, 2026",
    detail: "Check-in at 8:30 AM CT / 9:30 AM ET.",
    icon: Wifi,
  },
  {
    label: "Live finals",
    date: "Saturday, January 30, 2027",
    detail: "Gainbridge Fieldhouse in Indianapolis.",
    icon: Trophy,
  },
];

const games = [
  {
    name: "Super Smash Bros. Ultimate",
    roster: "Crew of 4",
    format: "Groups of 4, round robin. Every team plays 3 matches.",
    advances: "Top 8 teams",
  },
  {
    name: "Rocket League",
    roster: "3v3",
    format: "Groups of 4, round robin. Every team plays 3 matches.",
    advances: "Top 4 teams",
  },
  {
    name: "NBA 2K",
    roster: "1v1, one starter, no substitutes",
    format: "Swiss rounds, best-of-one, as time allows.",
    advances: "Top 4 players",
  },
];

const qualifierSchedule = [
  ["8:30 AM", "9:30 AM", "Check-in opens. Captains confirm roster and connection."],
  [
    "9:00 AM",
    "10:00 AM",
    "Round 1. NBA 2K Swiss rounds begin and run through 12:00 PM CT / 1:00 PM ET as time allows.",
  ],
  ["10:00 AM", "11:00 AM", "Round 2"],
  ["11:00 AM", "12:00 PM", "Round 3"],
  ["12:00 PM", "1:00 PM", "Tiebreaker matches, only if needed."],
  ["12:30 PM", "1:30 PM", "Results posted and advancing teams announced."],
];

const generalRules = [
  {
    title: "School-only rosters",
    body: "All rosters must represent one school. Teams from the same school will be seeded into different groups.",
  },
  {
    title: "Official rulesets",
    body: "All three titles use IEN's normal rulesets and match settings. NBA 2K uses the event-specific rules below.",
  },
  {
    title: "Smash starting stage",
    body: "Pokémon Stadium 2 is the starting stage for Super Smash Bros. Ultimate.",
  },
  {
    title: "Connection requirements",
    body: "Smash requires ethernet. Rocket League and NBA 2K require game connections linked as in the regular season.",
  },
  {
    title: "Group tiebreakers",
    body: "Smash and Rocket League ties are decided by head-to-head, then score differential. If still tied, a tiebreaker match is played at 12:00 PM CT / 1:00 PM ET.",
  },
  {
    title: "NBA 2K standings",
    body: "Players earn 2 points per win, including BYE wins, and lose 2 points for a forfeit. Ties go to strength of schedule, then score differential.",
  },
];

const nbaRules = [
  ["Platform", "PlayStation 5 or Xbox Series X/S"],
  ["Roster", "One starter; no substitutes"],
  ["Format", "Best-of-one for the online qualifier and live Final Four"],
  ["Streaming", "No spectators; stream from the player's perspective"],
  ["Lobby host", "The Home player shown on LeagueOS hosts the lobby"],
  [
    "Team selection",
    "Any current NBA team is allowed. Classic, All-Time, and alternative teams are excluded. Mirror teams are allowed, and players may change teams between games.",
  ],
  ["Match settings", "Quickplay 1v1; Superstar game style; 5-minute quarters"],
  ["Arena", "The home team's default arena"],
  [
    "Score reporting",
    "Report every score and select the winner on the LeagueOS match page. Both players must confirm the result; screenshots of the final score screen are recommended.",
  ],
  ["Disconnects", "Handled case by case by IEN tournament staff"],
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "Pacers Esports Cup 2027 Online Qualifier",
    description:
      "Online school esports qualifier for Super Smash Bros. Ultimate, Rocket League, and NBA 2K. Advancing teams compete live at Gainbridge Fieldhouse.",
    startDate: "2026-11-14T09:30:00-05:00",
    endDate: "2026-11-14T13:30:00-05:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: LEAGUEOS_URL,
    },
    organizer: {
      "@type": "Organization",
      name: "Indiana Esports Network",
      url: "https://indianaesportsnetwork.org",
    },
    url: `https://indianaesportsnetwork.org${EVENT_PATH}`,
  },
  {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "Pacers Esports Cup 2027 Finals",
    description:
      "Live Pacers Esports Cup finals for teams and players advancing from the online qualifier.",
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
    url: `https://indianaesportsnetwork.org${EVENT_PATH}`,
  },
];

export default function PacersEsportsCupQualifiers() {
  return (
    <Layout>
      <SEO
        title="Pacers Esports Cup 2027 Qualifiers"
        description="Register for the Pacers Esports Cup 2027 online qualifier in Super Smash Bros. Ultimate, Rocket League, or NBA 2K, and compete for a place in the live finals at Gainbridge Fieldhouse."
        path={EVENT_PATH}
        type="event"
        jsonLd={jsonLd}
      />

      <section className="relative overflow-hidden border-b border-primary/30 bg-[#0b1524]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(212,175,55,0.22),transparent_32%),linear-gradient(135deg,transparent_52%,rgba(212,175,55,0.08)_52%,rgba(212,175,55,0.08)_53%,transparent_53%)]" />
        <div className="container relative mx-auto px-4 py-14 md:py-20">
          <Link
            href="/events"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All events
          </Link>

          <div className="grid items-end gap-10 lg:grid-cols-[1fr_20rem]">
            <div className="max-w-4xl">
              <p className="mb-4 font-heading text-sm font-bold uppercase tracking-[0.24em] text-primary">
                IEN × Pacers Esports Cup 2027
              </p>
              <h1 className="text-5xl font-heading font-bold leading-[0.95] text-white sm:text-6xl md:text-7xl">
                Qualify online.
                <span className="mt-2 block text-primary">Play live at Gainbridge.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                Indiana schools can compete in Super Smash Bros. Ultimate,
                Rocket League, and NBA 2K for a place in the Pacers Esports Cup
                finals at Gainbridge Fieldhouse.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 bg-primary px-7 font-heading tracking-widest text-primary-foreground hover:bg-primary/90"
                >
                  <a href={LEAGUEOS_URL} target="_blank" rel="noopener noreferrer">
                    REGISTER IN LEAGUEOS
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 border-primary/50 px-7 font-heading tracking-widest text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href={CALENDAR_HREF} download>
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    ADD DATES TO CALENDAR
                  </a>
                </Button>
              </div>
            </div>

            <aside className="border-l-4 border-primary bg-background/80 p-6 shadow-2xl backdrop-blur">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Registration deadline
              </p>
              <p className="mt-3 text-4xl font-heading font-bold text-white">NOV 11</p>
              <p className="mt-1 text-sm text-muted-foreground">Wednesday · 2026</p>
              <div className="my-5 h-px bg-primary/20" />
              <p className="text-sm leading-6 text-gray-300">
                School-only rosters. The online qualifier begins three days later.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid gap-4 md:grid-cols-3">
          {milestones.map(({ label, date, detail, icon: Icon }) => (
            <article
              key={label}
              className="rounded-lg border border-primary/25 bg-card/80 p-6"
            >
              <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                {label}
              </p>
              <h2 className="mt-2 text-xl font-heading font-bold normal-case tracking-normal text-white">
                {date}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-primary/15 bg-card/45 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Three paths to the finals
            </p>
            <h2 className="mt-3 text-4xl font-heading font-bold text-white">The games</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Each title has its own roster and qualifier format. All competition is
              school-based.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {games.map((game) => (
              <article
                key={game.name}
                className="flex h-full flex-col rounded-lg border border-primary/25 bg-background/80 p-6"
              >
                <Gamepad2 className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-2xl font-heading font-bold text-white">
                  {game.name}
                </h3>
                <dl className="mt-6 grid gap-4 text-sm">
                  <div>
                    <dt className="font-bold uppercase tracking-wide text-primary">Roster</dt>
                    <dd className="mt-1 leading-6 text-gray-300">{game.roster}</dd>
                  </div>
                  <div>
                    <dt className="font-bold uppercase tracking-wide text-primary">Format</dt>
                    <dd className="mt-1 leading-6 text-gray-300">{game.format}</dd>
                  </div>
                </dl>
                <div className="mt-6 border-t border-primary/15 pt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    Advances to Gainbridge
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">{game.advances}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 rounded-md border border-primary/20 bg-primary/5 p-4 text-sm leading-6 text-gray-300">
            <strong className="text-white">Smash and Rocket League:</strong> every
            group winner advances first. The best remaining records across all groups
            fill the open spots, using match wins and then score differential.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Saturday, November 14
            </p>
            <h2 className="mt-3 text-4xl font-heading font-bold text-white">
              Qualifier schedule
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Check in before Round 1 so tournament staff can confirm every roster
              and connection.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-lg border border-primary/20 bg-card p-4">
              <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-sm leading-6 text-gray-300">
                All times are shown in both Central and Eastern time.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-primary/20 bg-card/70">
            <div className="grid grid-cols-[5.5rem_5.5rem_1fr] gap-3 bg-[#0b1524] px-4 py-3 text-xs font-bold uppercase tracking-wide text-primary sm:grid-cols-[7rem_7rem_1fr] sm:px-5">
              <span>Central</span>
              <span>Eastern</span>
              <span>What happens</span>
            </div>
            {qualifierSchedule.map(([central, eastern, detail]) => (
              <div
                key={`${central}-${detail}`}
                className="grid grid-cols-[5.5rem_5.5rem_1fr] gap-3 border-t border-primary/10 px-4 py-4 text-sm sm:grid-cols-[7rem_7rem_1fr] sm:px-5"
              >
                <strong className="text-white">{central}</strong>
                <strong className="text-gray-300">{eastern}</strong>
                <span className="leading-6 text-muted-foreground">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-card/45 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 max-w-2xl">
            <div className="flex items-center gap-2 text-primary">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.2em]">Qualifier rules</p>
            </div>
            <h2 className="mt-3 text-4xl font-heading font-bold text-white">
              What every team needs to know
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {generalRules.map((rule) => (
              <article key={rule.title} className="rounded-lg border border-primary/20 bg-background/70 p-5">
                <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-heading font-bold text-white">{rule.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{rule.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Event-specific ruleset
            </p>
            <h2 className="mt-3 text-4xl font-heading font-bold text-white">NBA 2K</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Swiss best-of-one rounds determine the four players invited to the live
              single-elimination Final Four.
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-6 border-primary/50 font-heading tracking-widest text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href={NBA_2K_RULESET_PDF} target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4" aria-hidden="true" />
                VIEW FULL NBA 2K RULESET
              </a>
            </Button>
          </div>

          <dl className="overflow-hidden rounded-lg border border-primary/20 bg-card/70">
            {nbaRules.map(([label, value]) => (
              <div
                key={label}
                className="grid gap-2 border-t border-primary/10 p-5 first:border-t-0 sm:grid-cols-[9rem_1fr]"
              >
                <dt className="font-heading text-sm font-bold uppercase tracking-wide text-primary">
                  {label}
                </dt>
                <dd className="text-sm leading-6 text-gray-300">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-primary/20 bg-[#0b1524] py-12 md:py-16">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Finals day</p>
            <h2 className="mt-3 text-4xl font-heading font-bold text-white md:text-5xl">
              Saturday, January 30, 2027
            </h2>
            <div className="mt-5 flex items-start gap-3 text-gray-300">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="leading-7">
                <strong className="text-white">Gainbridge Fieldhouse</strong>
                <br />
                Indianapolis, Indiana
              </p>
            </div>
            <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
              Qualifying students stay for Pacers vs. Wizards at 7:00 PM. Group-rate
              tickets are $25 per person, and family and friends are welcome. Ticket
              details will be shared with qualifying teams.
            </p>
          </div>
          <div className="rounded-lg border border-primary/30 bg-primary/10 p-6 md:p-8">
            <UsersRound className="h-7 w-7 text-primary" aria-hidden="true" />
            <h3 className="mt-5 text-2xl font-heading font-bold text-white">Who advances</h3>
            <ul className="mt-5 grid gap-3 text-sm text-gray-300">
              <li>8 Super Smash Bros. Ultimate teams</li>
              <li>4 Rocket League teams</li>
              <li>4 NBA 2K players</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border border-primary/25 bg-card p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Official documents
            </p>
            <h2 className="mt-3 text-3xl font-heading font-bold text-white">
              Download the event packet
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={QUALIFIER_INFO_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-md border border-primary/25 bg-background/60 p-4 transition-colors hover:border-primary"
              >
                <span className="flex items-center gap-3 text-sm font-bold text-white">
                  <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
                  Qualifier information
                </span>
                <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
              </a>
              <a
                href={NBA_2K_RULESET_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-md border border-primary/25 bg-background/60 p-4 transition-colors hover:border-primary"
              >
                <span className="flex items-center gap-3 text-sm font-bold text-white">
                  <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
                  NBA 2K ruleset
                </span>
                <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="rounded-lg border border-primary/25 bg-primary/8 p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Questions?</p>
            <h2 className="mt-3 text-2xl font-heading font-bold text-white">We can help.</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Email IEN support or ask in the IEN coaches Discord. Another coach may
              be wondering the same thing.
            </p>
            <a
              href="mailto:support@indianaesportsnetwork.org"
              className="mt-5 inline-block text-sm font-bold text-primary hover:underline"
            >
              support@indianaesportsnetwork.org
            </a>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
