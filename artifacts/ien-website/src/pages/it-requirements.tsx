import { useState } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardCopy,
  Clock3,
  Copy,
  ExternalLink,
  FileCheck2,
  Gamepad2,
  Mail,
  MonitorCheck,
  Network,
  Router,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const requirements = [
  {
    title: "Game launchers may install and run",
    body: "Steam, Epic Games Launcher, Riot Client, Battle.net, EA App, and Minecraft all ship through publisher launchers. Schools only need the launchers required for the titles their program registered.",
  },
  {
    title: "Publisher anti-cheat may install and load",
    body: "Riot Vanguard and other publisher anti-cheat systems may install at the driver level. This is a publisher requirement, not an IEN preference, and the affected titles will not launch without it.",
  },
  {
    title: "Students can launch titles without an administrator present",
    body: "Matches start at fixed times, so an escalation request at match time becomes a forfeit risk. Marvel Rivals is a known case where an administrator must sign in on the machine before students use their own accounts.",
  },
  {
    title: "Outbound game and authentication traffic is not filtered",
    body: "Game traffic includes UDP, not only HTTPS. SSL inspection, deep packet inspection, and category filters commonly break game login in ways that look like ordinary game errors.",
  },
  {
    title: "LeagueOS is reachable",
    body: "Coaches and student accounts need access to leagueos.gg, the platform IEN uses for schedules, match management, and results. LeagueOS is web-only and does not require a client install.",
  },
  {
    title: "Outbound streaming is allowed",
    body: "Programs register a Twitch or YouTube channel with IEN so matches can be verified by stream. This means the upload path must work, not only video viewing.",
  },
  {
    title: "Competition stations use wired ethernet",
    body: "Wired ethernet is required by league rule for Nintendo Switch titles and recommended for every other title. A signed verification form must be on file before match play.",
  },
  {
    title: "No backups, imaging, or forced updates during matches",
    body: "Competitive play uses very little bandwidth but is latency-sensitive. A scheduled job that starts mid-match can cost the match.",
  },
];

const nonRequests = [
  "Disabling or weakening the firewall",
  "Standing local admin rights for students",
  "Opening inbound ports",
  "Unmanaged or personal software installs",
];

const matchWindows = [
  { league: "Middle School · IMSEN", window: "Mon-Thu, 3:30 PM CT" },
  { league: "Unified · IUEN", window: "Tuesdays, see calendar" },
  { league: "High School Varsity", window: "Mon-Thu, 4:00 PM CT" },
  { league: "High School Club", window: "3:00 or 4:00 PM CT queues" },
];

const platformPorts = [
  {
    platform: "Steam",
    titles: "Rocket League, Apex, iRacing, Overwatch 2",
    tcp: "27015-27030",
    udp: "4380, 27000-27031",
  },
  {
    platform: "Epic Games",
    titles: "Rocket League, Marvel Rivals",
    tcp: "80, 443",
    udp: "3478-3479, 5060, 5062, 6250, 7000-9000, 12000-65000",
  },
  {
    platform: "Riot · VALORANT",
    titles: "Valorant",
    tcp: "80, 443, 2099, 5222-5223, 8393-8400",
    udp: "7000-8000, 8180-8181, 27016-27024, 54000-54012",
  },
  {
    platform: "Riot · League of Legends",
    titles: "League of Legends",
    tcp: "80, 443, 2099, 5222-5223, 8088",
    udp: "5100-5400, 8088",
  },
  {
    platform: "Battle.net",
    titles: "Overwatch 2",
    tcp: "80, 443, 1119, 1120, 3724, 4000, 6112-6114",
    udp: "3478-3479, 5060, 5062, 6250, 12000-64000",
  },
  {
    platform: "EA",
    titles: "Apex Legends",
    tcp: "80, 443, 1024-1124, 3216, 9960-9969, 18000, 18060, 18120, 27900, 28910, 29900",
    udp: "1024-1124, 3659, 18000, 29900",
  },
  {
    platform: "Nintendo Switch Online",
    titles: "Smash Ultimate, Mario Kart 8 Deluxe",
    tcp: "No fixed port list published",
    udp: "Use unrestricted outbound UDP from competition stations only",
  },
];

const domainRows = [
  {
    group: "League platform",
    domains: "leagueos.gg · indianaesportsnetwork.org",
  },
  {
    group: "Riot",
    domains:
      "riotgames.com · auth.riotgames.com · *.na2.lol.riotgames.com · leagueoflegends.com · playvalorant.com",
  },
  {
    group: "Epic",
    domains: "epicgames.com · unrealengine.com · psyonix.com · rl-cdn.psyonix.com",
  },
  {
    group: "Valve",
    domains: "steampowered.com · steamcommunity.com · steamstatic.com",
  },
  {
    group: "Blizzard",
    domains: "blizzard.com · battle.net · blizzard.gcdn.blizzard.com",
  },
  { group: "EA", domains: "ea.com · easports.com · origin.com" },
  {
    group: "Nintendo",
    domains: "nintendo.com · accounts.nintendo.com · nintendo.net · *.nintendowifi.net",
  },
  {
    group: "Other titles and streaming",
    domains: "chess.com · tetr.io · iracing.com · minecraft.net · twitch.tv · youtube.com",
  },
];

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-heading font-bold uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-bold uppercase tracking-wider text-white md:text-5xl">
        {title}
      </h2>
      {children && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          {children}
        </p>
      )}
    </div>
  );
}

export default function ITRequirements() {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    const url =
      typeof window !== "undefined"
        ? window.location.href
        : "https://indianaesportsnetwork.org/it-requirements";

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Esports IT Requirements"
        description="Network, launcher, anti-cheat, streaming, ethernet, port, and domain requirements for Indiana school esports programs competing through IEN."
        path="/it-requirements"
      />

      <section className="relative overflow-hidden border-b border-primary/30 bg-card py-16 md:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(212,175,55,0.16),transparent_38%),radial-gradient(circle_at_85%_20%,rgba(14,165,160,0.2),transparent_30%)]" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-xs font-heading font-bold uppercase tracking-[0.24em] text-primary">
                Coach Resource
              </p>
              <h1 className="max-w-4xl font-heading text-4xl font-bold uppercase tracking-tight text-white md:text-6xl">
                Esports IT Requirements
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                What a school esports program needs from its network
                administrator, and what it does not.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  type="button"
                  onClick={copyLink}
                  className="h-12 bg-primary px-6 font-heading tracking-widest text-primary-foreground hover:bg-primary/90"
                >
                  {copied ? (
                    <CheckCircle2 className="mr-2 h-4 w-4" aria-hidden />
                  ) : (
                    <Copy className="mr-2 h-4 w-4" aria-hidden />
                  )}
                  {copied ? "LINK COPIED" : "COPY LINK"}
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href="#ports">
                    <Network className="mr-2 h-4 w-4" aria-hidden />
                    PORTS &amp; DOMAINS
                  </a>
                </Button>
              </div>
            </div>

            <div className="border border-primary/30 bg-background/80 p-6 shadow-2xl md:p-8">
              <div className="mb-5 flex items-center gap-3 text-primary">
                <ClipboardCopy className="h-6 w-6" aria-hidden />
                <h2 className="font-heading text-2xl font-bold uppercase tracking-wider">
                  Send This to IT
                </h2>
              </div>
              <p className="text-sm leading-7 text-muted-foreground">
                A request from a state league carries more context than a
                request from one teacher. Coaches can share this page with their
                IT director before installs, testing, imaging, or the first
                match week.
              </p>
              <div className="mt-6 grid gap-3 text-sm">
                <Link
                  href="/forms"
                  className="inline-flex items-center justify-between border border-primary/20 bg-primary/10 px-4 py-3 text-primary transition-colors hover:border-primary/60 hover:bg-primary/15"
                >
                  Competition verification forms
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/schedule"
                  className="inline-flex items-center justify-between border border-primary/20 bg-primary/10 px-4 py-3 text-primary transition-colors hover:border-primary/60 hover:bg-primary/15"
                >
                  Season calendars and match windows
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-5xl border-l-4 border-destructive bg-destructive/10 p-6 md:p-8">
          <div className="mb-4 flex items-center gap-3 text-destructive">
            <AlertTriangle className="h-6 w-6 shrink-0" aria-hidden />
            <p className="font-heading text-sm font-bold uppercase tracking-[0.2em]">
              Match-Day Risk
            </p>
          </div>
          <p className="text-lg leading-8 text-white md:text-xl">
            IEN is Indiana's official scholastic esports league and a 501(c)(3)
            nonprofit. Schools compete on a fixed weekly schedule with
            postseason play and in-person state finals. A network block
            discovered at 3:45 PM on match day is not an inconvenience. It is a
            forfeit risk.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeading eyebrow="Checklist" title="What the Program Needs">
          Each item below is cheaper to arrange before match week than to
          troubleshoot after students are already seated.
        </SectionHeading>

        <ol className="mx-auto grid max-w-6xl list-none gap-4 p-0 md:grid-cols-2">
          {requirements.map((item, index) => (
            <li
              key={item.title}
              className="grid grid-cols-[3rem_1fr] gap-4 border border-primary/25 bg-card p-5"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-primary/40 bg-primary/10 font-heading text-xl font-bold text-primary">
                {index + 1}
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-primary/20 bg-card py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-3 text-xs font-heading font-bold uppercase tracking-[0.22em] text-primary">
                Scope
              </p>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-wider text-white md:text-4xl">
                What IEN Is Not Asking For
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                The request is limited to the machines and services needed for
                scheduled competition.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {nonRequests.map((item) => (
                <div
                  key={item}
                  className="flex min-h-20 items-center gap-3 border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-white"
                >
                  <ShieldCheck
                    className="h-5 w-5 shrink-0 text-emerald-300"
                    aria-hidden
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeading eyebrow="Match Windows" title="When Matches Run">
          These are the weekly windows when the network needs to be dependable.
        </SectionHeading>
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {matchWindows.map((item) => (
            <div
              key={item.league}
              className="border border-primary/25 bg-card p-5 text-center"
            >
              <Clock3 className="mx-auto mb-4 h-7 w-7 text-primary" aria-hidden />
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-white">
                {item.league}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.window}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="ports"
        className="border-y border-primary/20 bg-card py-12 scroll-mt-24 md:py-16"
      >
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Network Details" title="Outbound Ports">
            Allow outbound traffic only for the platforms tied to the titles
            this school registered. Inbound ports are not required.
          </SectionHeading>

          <div className="mx-auto max-w-7xl overflow-x-auto border border-primary/25 bg-background">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-primary/70 text-xs uppercase tracking-[0.18em] text-primary">
                  <th className="px-4 py-4 font-heading">Platform</th>
                  <th className="px-4 py-4 font-heading">IEN Titles</th>
                  <th className="px-4 py-4 font-heading">TCP</th>
                  <th className="px-4 py-4 font-heading">UDP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/10">
                {platformPorts.map((row) => (
                  <tr key={row.platform} className="align-top">
                    <td className="whitespace-nowrap px-4 py-4 font-heading text-base font-bold uppercase tracking-wider text-white">
                      {row.platform}
                    </td>
                    <td className="px-4 py-4 text-muted-foreground">
                      {row.titles}
                    </td>
                    <td className="px-4 py-4 font-mono text-xs leading-6 text-white/90">
                      {row.tcp}
                    </td>
                    <td className="px-4 py-4 font-mono text-xs leading-6 text-white/90">
                      {row.udp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mx-auto mt-8 grid max-w-6xl gap-4 lg:grid-cols-3">
            {[
              {
                icon: Router,
                title: "Ports alone may not fix it",
                body: "Modern game traffic is often identified by destination. If a title still fails with ports open, check SSL inspection, deep packet inspection, and category filtering.",
              },
              {
                icon: MonitorCheck,
                title: "Limit Nintendo exceptions",
                body: "Nintendo publishes no fixed port list and expects open outbound UDP. The safer approach is limiting that exception to competition stations, reserved IPs, or a dedicated VLAN.",
              },
              {
                icon: Wrench,
                title: "Publisher lists drift",
                body: "Treat these ranges as a starting point and verify against current publisher documentation before making permanent district-wide policy changes.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="border border-primary/25 bg-background p-5">
                  <Icon className="mb-4 h-7 w-7 text-primary" aria-hidden />
                  <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeading eyebrow="Allowlist" title="Domains to Check">
          Where port ranges alone do not resolve login or launch failures, these
          destinations are the usual next place to look.
        </SectionHeading>

        <div className="mx-auto max-w-6xl overflow-x-auto border border-primary/25 bg-card">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <tbody className="divide-y divide-primary/10">
              {domainRows.map((row) => (
                <tr key={row.group} className="align-top">
                  <th className="w-52 px-4 py-4 font-heading text-base font-bold uppercase tracking-wider text-primary">
                    {row.group}
                  </th>
                  <td className="px-4 py-4 font-mono text-xs leading-6 text-white/90">
                    {row.domains}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-primary/20 bg-card py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-heading font-bold uppercase tracking-[0.22em] text-primary">
                Maintenance
              </p>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-wider text-white md:text-4xl">
                The Recurring Problem
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Exceptions granted at the start of a season often revert after
                imaging, group policy refreshes, or school breaks. Coaches
                usually cannot see the issue until a student cannot log in.
              </p>
            </div>
            <div className="border-l-4 border-primary bg-primary/10 p-6">
              <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-primary">
                The Ask
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                After any imaging, policy change, or extended break, re-apply
                the esports program exceptions and send the coach a one-line
                email. The coach should re-test every title before the first
                match back. The next scheduled break is fall break, October
                5-10, 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          <div className="border border-primary/25 bg-card p-6">
            <FileCheck2 className="mb-4 h-7 w-7 text-primary" aria-hidden />
            <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-white">
              Forms
            </h2>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Nintendo ethernet and streaming verification live with the rest of
              the coach forms.
            </p>
            <Link
              href="/forms"
              className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.16em] text-primary hover:text-yellow-200"
            >
              Open forms <ExternalLink className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="border border-primary/25 bg-card p-6">
            <Gamepad2 className="mb-4 h-7 w-7 text-primary" aria-hidden />
            <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-white">
              Rules
            </h2>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Game-specific rulesets and the general IEN rulebook are available
              from the rules hub.
            </p>
            <Link
              href="/rules-policies"
              className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.16em] text-primary hover:text-yellow-200"
            >
              Open rules <ExternalLink className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="border border-primary/25 bg-card p-6">
            <Mail className="mb-4 h-7 w-7 text-primary" aria-hidden />
            <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-white">
              Questions
            </h2>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              IEN staff can speak with school IT directly. Replies are normally
              sent within five business days.
            </p>
            <a
              href="mailto:support@indianaesportsnetwork.org"
              className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.16em] text-primary hover:text-yellow-200"
            >
              Email support <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
