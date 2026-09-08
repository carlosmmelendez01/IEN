import { useEffect, useMemo, useState } from "react";
import type { ComponentType, ReactNode } from "react";
import { Link, useRoute } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  User,
  Clock,
  ChevronRight,
  ArrowUpRight,
  Megaphone,
  Gamepad2,
  Award,
  Layers,
  ClipboardList,
  Monitor,
  Newspaper,
  Users,
  Trophy,
  Sparkles,
  Briefcase,
} from "lucide-react";
import drewRhodaPhoto from "@assets/state-finals/04-drew-rhoda-1200.jpg";
import brandIdentityImage from "@assets/IEN_Horizontal Logo Transparent.png";
import registrationExtensionImage from "@assets/registration-extension-ms-unified.png";
import liveCompetitionImage from "@assets/state-finals/02-central-hs-1200.jpg";
import trophiesImage from "@assets/state-finals/03-marvel-rivals-1200.jpg";
import { GAME_RULESET_LIBRARY_HREF, RULEBOOK_HREF } from "@/data/gameRules";
import { REGISTRATION_EXTENSION } from "@/lib/registration";

type Category =
  | "Season Announcement"
  | "Game Announcement"
  | "Coach Spotlight"
  | "League Operations"
  | "Registration Update"
  | "Website Update"
  | "Press Release"
  | "Community"
  | "Event Announcement"
  | "Event Recap"
  | "Program Spotlight"
  | "Hiring";

const CATEGORY_STYLES: Record<
  Category,
  {
    icon: ComponentType<{ className?: string }>;
    tone: "solid" | "outline";
  }
> = {
  "Season Announcement": { icon: Megaphone, tone: "solid" },
  "Game Announcement": { icon: Gamepad2, tone: "solid" },
  "Coach Spotlight": { icon: Award, tone: "outline" },
  "League Operations": { icon: Layers, tone: "outline" },
  "Registration Update": { icon: ClipboardList, tone: "outline" },
  "Website Update": { icon: Monitor, tone: "outline" },
  "Press Release": { icon: Newspaper, tone: "solid" },
  Community: { icon: Users, tone: "outline" },
  "Event Announcement": { icon: Calendar, tone: "solid" },
  "Event Recap": { icon: Trophy, tone: "solid" },
  "Program Spotlight": { icon: Sparkles, tone: "outline" },
  Hiring: { icon: Briefcase, tone: "outline" },
};

function CategoryBadge({
  category,
  size = "sm",
}: {
  category: Category;
  size?: "xs" | "sm" | "md";
}) {
  const meta = CATEGORY_STYLES[category];
  const Icon = meta.icon;
  const sizing =
    size === "xs"
      ? "h-6 px-2.5 text-[0.6rem] gap-1"
      : size === "md"
        ? "h-9 px-4 text-xs gap-2"
        : "h-7 px-3 text-[0.65rem] gap-1.5";
  const palette =
    meta.tone === "solid"
      ? "bg-primary text-primary-foreground border border-primary"
      : "bg-primary/10 text-primary border border-primary/50 backdrop-blur-sm";
  return (
    <span
      className={`inline-flex items-center font-heading font-bold tracking-[0.2em] uppercase rounded-full whitespace-nowrap ${palette} ${sizing}`}
    >
      <Icon className={size === "md" ? "w-3.5 h-3.5" : "w-3 h-3"} />
      {category}
    </span>
  );
}

interface NewsPost {
  id: number;
  slug: string;
  date: string;
  author: string;
  category: Category;
  headline: string;
  excerpt: string;
  body: string;
  content?: ReactNode;
  image: string;
  imageFocal?: string;
  hubCtaLabel?: string;
  cta?: {
    label: string;
    href: string;
  };
  ctaNote?: string;
  featured?: boolean;
}

const KICKOFF_BODY = `We held the mandatory 2026-27 season coaches meeting on August 12, 2026. If you missed it, or if you just want the short version to forward to your athletic director, here is everything that matters.

Watch the full kickoff recording: https://www.youtube.com/watch?v=jK1VoXu3gvE

WHERE WE ARE
180+ schools across Indiana. Every one of them run by an educator, not a corporation. Last season IEN awarded 32 state championships: 24 high school, 6 middle school, and 2 Unified.

FIVE THINGS ARE DIFFERENT THIS SEASON
1. The Championship Record Book is live. Every title, finals appearance, and active win streak is now permanent and public across IHSEN, IMSEN, and IUEN.
2. Students can now be recruited through IEN's signed partnership with SPIN. Students build their own profiles, college coaches search for the titles and roles they need, and contact happens directly on the platform.
3. Championship Weekend will bring state finals into a real stage, real venue, and real crowd experience.
4. The whole season is on one page with a published calendar from registration through state finals.
5. Support moved to email. Discord ticketing is retired. Use support@indianaesportsnetwork.org for searchable, forwardable support from your school account. Every email gets a reply within five business days.

DIVISION CHANGES
IHSEN High School splits into 1A and 2A with a ten-week regular season from November through February.
IUEN now spans middle school and high school, with competition registration in LeagueOS and program coordination through IEN and Special Olympics Indiana.
IMSEN Middle School remains grades 6-8 with the same overall structure.

RULES
Three things changed: substitutes and bench, live coaching, and a condensed general rules document. The 2026-27 IEN Bylaws & General Rules and posted title rulesets are live on the Rules & Policies page.

DATES TO MARK NOW
August 12: Registration opens for all divisions.
September 18: Middle School and Unified registration deadline.
October 19: High School registration deadline.
September-December: Middle School and Unified regular season.
October-February: High School regular season.
Playoffs: Roster lock. Lineups final. Two warnings, no exceptions.
December 12: IMSEN and IUEN State Finals.

REGISTRATION AND COST
Registration opens August 12 for all divisions and runs in LeagueOS. Charter your school, then enter teams and rosters before the division deadline. Club Division is free. Varsity Division is $100 flat per school, per year.

YOUR FIRST SEVEN DAYS
Charter your school for 2026-27. Register teams in LeagueOS before the deadline. Confirm eligibility for every student.

General questions go to support@indianaesportsnetwork.org.

Education First. Esports Always.`;

const REGISTRATION_EXTENSION_BODY = `Middle School and Unified competition registration now closes September 18, 2026.

Middle School (IMSEN) and Unified (IUEN) programs have until September 18 to complete competition registration in LeagueOS.

Completing the annual IEN School Census & Charter does not register teams for competition. Schools must complete the chartering process and register their teams and rosters through LeagueOS.

High School registration currently remains October 19, 2026.`;

const LOS_PREMIER_BODY = `LOS Premier is returning for the 2026-27 school year with national ranked competition for high school esports programs.

Titles currently include Overwatch, Rocket League, VALORANT, League of Legends, Marvel Rivals, and Super Smash Bros. Ultimate. Additional titles may also be offered.

PROGRAM STRUCTURE
Each high school may enter one Premier team per title. Premier participation is $96 per Premier team for the year, with a maximum fee of $384 per high school. Once a school reaches the $384 maximum, it may participate in as many available Premier titles as applicable without exceeding that school maximum.

MEDIA AND NATIONAL EXPOSURE
LOS Premier national ranked play will air live each week on Roku as part of a weekly live high school esports telecast. Throughout the year, similarly ranked Premier teams may also be invited to participate in additional online and in-person competitions.

INDIANA EXAMPLE
Hamilton Southeastern participated in LOS Premier last spring. Its VALORANT team reached #3 in the national rankings and earned an opportunity to travel to San Antonio for competition.

REGISTRATION
LeagueOS will provide registration instructions through its Dashboard. No separate LOS Premier registration deadline has been announced.`;

const SPARTAN_SHOWDOWN_BODY = `Spartan Showdown returns Saturday, November 7, 2026, as a high school only Super Smash Bros. opportunity.

Spartan Showdown is a major Indiana youth Super Smash Bros. event that brings together high school competitors from across the Midwest.

EVENT HIGHLIGHTS
Free entry, free lunch, arcade games, ladder matches, a costume contest, prizes, and $35,000 in scholarships awarded. The event expects 200+ high school players from across the Midwest.

WHO CAN PARTICIPATE
This opportunity is for high school students only.

REGISTRATION
Registration and event details are handled externally through start.gg. IEN is sharing this opportunity for Indiana schools; this announcement does not list IEN as the event operator.`;

const BRAND_RELEASE_BODY = `INDIANA — July 17, 2026 — The Indiana Esports Network (IEN), a volunteer-driven, educator-led nonprofit serving scholastic esports programs across Indiana, has officially adopted a new brand identity and launched a redesigned website.

The new identity represents the next chapter of IEN's work to provide accessible, equitable, and education-centered esports opportunities for Indiana students.

More than a logo change, the rebrand reflects IEN's continued organizational growth, renewed leadership, and commitment to strengthening the support it provides to schools, coaches, students, families, and community partners throughout the state.

"Indiana Esports Network has grown from an educator-led idea into a statewide community connecting schools and students through competition, leadership, and belonging," said Carlos Melendez, President of the Indiana Esports Network. "Our new identity honors the foundation built by the educators and volunteers who came before us while giving IEN a stronger, more unified presence for the future."

IEN connects schools and scholastic esports programs across Indiana through three primary networks:

• The Indiana High School Esports Network
• The Indiana Middle School Esports Network
• Unified Esports programming in collaboration with Special Olympics Indiana

Schools participate through one annual membership fee that provides access to eligible IEN programs, while students are never charged participation fees by the organization.

The newly redesigned website will serve as a central destination for information about IEN's programs, competitions, school membership, resources, partnerships, collegiate opportunities, and statewide events. The site is designed to make it easier for educators, families, prospective members, and community partners to understand IEN's mission and become involved.

The organization's adopted tagline, Education First. Esports Always., remains at the center of the new brand.

"Our responsibility is not simply to operate esports competitions," Melendez said. "It is to create meaningful opportunities for students, support the educators leading these programs, and demonstrate that scholastic esports can strengthen education, career readiness, teamwork, and school engagement."

IEN will begin transitioning its digital platforms, communications, event materials, apparel, and organizational resources to the new identity throughout the 2026–27 academic year.

Schools will not be required to immediately replace existing jerseys, banners, equipment, or other materials displaying IEN's previous logo. The new identity will be introduced gradually as materials are updated, reordered, or newly created.

The new brand will also support IEN's efforts to:

• Improve communication and support for member schools
• Expand middle school and Unified Esports opportunities
• Strengthen statewide partnerships
• Improve coach onboarding and organizational resources
• Connect students with collegiate and career opportunities
• Deliver more professional competitions, events, and broadcasts

IEN's previous identity played an important role in establishing the organization and building its statewide community. The organization recognizes and celebrates the educators, volunteers, schools, partners, and students whose work created the foundation for this next chapter.

To explore the new website and learn more about the Indiana Esports Network, visit indianaesportsnetwork.org.

ABOUT THE INDIANA ESPORTS NETWORK

The Indiana Esports Network is a 501(c)(3) nonprofit organization dedicated to advancing accessible, equitable, and education-centered scholastic esports across Indiana. Led by educators and volunteers, IEN supports high school, middle school, and Unified Esports programs while creating opportunities for competition, leadership, career exploration, and student belonging.

Education First. Esports Always.

MEDIA CONTACT

Carlos Melendez
President
Indiana Esports Network
ienboard@indianaesportsnetwork.org
indianaesportsnetwork.org`;

const FEATURED_BODY = `The Indiana Esports Network is preparing for one of the biggest evolutions in organization history. The 2026–27 season will introduce sweeping updates to divisions, game titles, registration workflows, support systems, and the broader infrastructure that powers Indiana scholastic esports.

This year-long preview marks a turning point for IEN. After three years of rapid growth — from 30 founding programs to a statewide scholastic esports network across IHSEN, IMSEN, and IUEN — the organization is doubling down on the systems that make competition feel professional, fair, and accessible to every Indiana student.

Headline changes for 2026–27:

GAMES
• Apex Legends officially joins the IHSEN title roster, replacing Fortnite at the high school level
• Fortnite remains the marquee IMSEN title for middle school competition
• Marvel Rivals and iRacing return after strong inaugural seasons

DIVISIONS
• IHSEN Varsity moves from three divisions to a two-division structure: 1A and 2A
• Placement is set per title each season — smaller schools generally in 1A, larger in 2A — with the line adjusted to keep brackets competitive
• The result: tighter, more competitive playoff brackets and clearer pathways from the regular season into State Finals

REGISTRATION
• A redesigned, Google Forms-based registration experience launches before Fall season opens
• Schools, coaches, and team rosters all flow through a single intake process to reduce paperwork and onboarding friction

ORGANIZATION
• Drew Rhoda has been named IEN's first-ever Coach of the Year
• A redesigned IEN website launches this summer with deeper school resources, sponsor presentation, and the Hall of Champions
• IEN returns to the HECC Conference with booth presence, community engagement, and live game demos

Each of these stories is covered in depth in the articles below. Current schedules, posted rulebooks, ruleset versions, and policy documents are maintained on the Rules & Policies page as additional season details roll out.`;

const APEX_BODY = `Apex Legends will officially join the IHSEN title roster for the 2026–27 season, replacing Fortnite at the high school level. The decision follows a community survey, coach feedback sessions, and a competitive review of the high school esports landscape across the country.

WHY THE CHANGE
Apex Legends offers a deeper team-based competitive structure than Fortnite, with three-player squads, defined Legend roles, and a meta that rewards coordination, communication, and strategic decision-making — skills that translate directly into the kind of teamwork IEN champions in every title.

Fortnite remains an important part of IEN's middle school identity. IMSEN will continue to feature Fortnite as a flagship title for 6th–8th graders, where the gameplay tempo and accessibility match middle school program goals.

WHAT TO EXPECT
• Three-player squads competing in custom IEN lobbies
• A regular season + playoff format consistent with other IHSEN titles
• Tier structure pending the broader divisional review now underway
• PC, Xbox, and PlayStation support, with ruleset and scrim guidance maintained in the rules library

ROLLOUT TIMELINE
• June 2026: Coach feedback window opens
• July 2026: Official ruleset published
• August 2026: Registration opens with Apex as a default IHSEN title
• October 2026: Inaugural Apex Legends season begins

Coaches with questions about transitioning Fortnite rosters into Apex teams can reach out at support@indianaesportsnetwork.org.`;

const COACH_BODY = `The Indiana Esports Network is proud to recognize Drew Rhoda as its first-ever Coach of the Year, honoring his leadership, mentorship, and lasting impact on the student competitors who pass through his program.

The IEN Coach of the Year award celebrates educators whose work goes beyond match wins and trophies — coaches who build culture, advocate for their students, and treat scholastic esports as the developmental pathway it is meant to be. Drew embodies all three.

Across multiple seasons, Drew has built one of the most consistent and student-centered programs in the state. Athletes who started in his program have gone on to college esports rosters, broadcast internships, and program-leadership roles at other schools. More importantly, students describe his program as a place where they feel seen.

In his own words:

"This is a huge honor for me, and I am very grateful to all the coaches and league admins for this opportunity. The Indiana Esports Network is an outstanding organization comprised of incredible volunteers, working to help our Indiana kids succeed in competition, school and life. The fact that this incredible group of people would think of what I am doing as valuable, means the world to me. Not just that I received an award, but that this award was voted on by some of the hardest working, dedicated and driven educators I have ever met.

"I was on my spring break when the voting came out, and didn't see the voting link until it had already closed. I didn't even know I was on the ballot to be honest. Just after the awards presentation for iRacing, I looked up and saw my face on the big screen and knew something was up. If you have never seen your face 60 feet in the air at the Riverview Health Arena at Innovation Mile, it is quite the experience, let me tell you.

"This award is incredibly meaningful to me and I am very thankful for all of our outstanding coaches and volunteers throughout the league for everything you do for our Indiana students."

Drew was officially recognized at the 2026 IEN State Finals in front of more than 400 students, coaches, and families.

The Coach of the Year award becomes a permanent IEN tradition, with future honorees selected each spring through a combination of peer nominations and IEN leadership review. Coaches interested in nominating a colleague for the 2026–27 season can submit nominations beginning January 2027.`;

const DIVISION_BODY = `The Indiana Esports Network has announced a new IHSEN Varsity division structure for the 2026–27 season: a two-division model — Division 1A and Division 2A — replacing the prior three-division alignment. The change is designed to improve competitive balance, simplify scheduling, and create a cleaner playoff bracket from the regular season through State Finals.

THE NEW STRUCTURE
IHSEN Varsity will compete across two divisions:
• Division 1A — generally smaller-enrollment programs
• Division 2A — generally larger-enrollment programs

Placement is set per title each season. Smaller schools generally land in 1A and larger schools in 2A, but the exact dividing line is adjusted by IEN league operations based on which schools register for that title — keeping each bracket competitive instead of locking a school into a fixed division across every game.

WHAT THIS CHANGES
• Three divisions consolidate into two: 1A and 2A
• Per-title placement replaces a single school-wide division assignment
• Club tier is unchanged — new schools still play one semester of Club before moving up to Varsity
• IMSEN and IUEN are not affected by this change

WHY IT MATTERS
The IEN coaching council has been clear: the best esports seasons are the ones where every match feels meaningful. A two-division model delivers that more consistently — fewer lopsided matchups in the regular season, tighter playoff races, and a more legible path to State Finals for new programs.

WHAT'S NEXT
• August 2026: 2026–27 registration opens with the new model
• September 2026: Per-title 1A/2A placements published
• October 2026: First competitive matches under the new structure

Coaches with questions about how their program will be placed under the new model can reach out at support@indianaesportsnetwork.org.`;

const REGISTRATION_BODY = `Registration for the 2026–27 season will move to a redesigned, Google Forms-based intake process — a streamlined experience built around the realities of how Indiana schools, coaches, and athletic departments actually work.

WHY THE CHANGE
School onboarding is one of the most important — and most friction-heavy — moments in an IEN season. After three years of running registration through several different systems, IEN has consolidated everything that worked into a single redesigned flow:
• One form for school registration
• One form for coach intake and verification
• One form for team rosters per title

All three flows live inside a single Google Workspace environment that schools and coaches already use, reducing the learning curve to effectively zero.

WHAT'S NEW
• Auto-populated school directory pulled from existing IEN member data
• Per-title roster entry that matches IEN's actual divisional structure
• Built-in eligibility and parental-consent prompts so coaches don't have to chase paperwork separately
• A single "submit and confirm" path that emails the coach a registration receipt and forwards a copy to IEN operations

WHEN
The new registration system launches in early August 2026 ahead of the official August registration windows. Returning schools will receive direct outreach with login links and instructions; new schools will be onboarded through their initial intake meeting as before.

WHAT STAYS THE SAME
LeagueOS remains IEN's match operations and standings platform. Registration is the only piece moving — everything from match scheduling to playoff brackets continues to live where coaches expect it.`;

const WEBSITE_BODY = `The redesigned Indiana Esports Network website launches this summer, putting the league's growing identity front and center for students, families, and prospective sponsors.

WHAT'S NEW
• A revamped homepage that anchors the IEN brand and surfaces live season status
• Deeper school resources for both prospective programs and current member schools
• A reimagined Partners & Sponsors experience that makes IEN's sponsor inventory legible at a glance
• The new Hall of Champions, a permanent home for every IHSEN, IMSEN, and IUEN state title in IEN history
• Community storytelling baked into a refreshed Latest Updates hub

WHY THIS MATTERS
The IEN website is often the first thing a new coach, athletic director, or potential sponsor encounters. The redesign treats the site as a piece of league infrastructure — fast, clear, easy to scan, and designed to communicate the seriousness of Indiana scholastic esports.

The Hall of Champions deserves a special call-out. For the first time, every IEN state champion — from the inaugural 2022–23 season through the most recent 2025–26 finals — lives in a single permanent archive, sortable by year, game, division, and school.

ROLLOUT
The new IEN website goes live this summer ahead of the 2026–27 registration window. All existing URLs will redirect to their new homes; coaches and schools should not need to update bookmarks.

Feedback is welcome. Coaches and partners noticing anything that should be improved can reach out at support@indianaesportsnetwork.org.`;

const HECC_BODY = `The Indiana Esports Network is returning to the HECC Conference this year with a permanent booth presence, expanded community programming, and a possible Apex Legends live demonstration.

WHAT TO EXPECT
• An IEN booth on the main convention floor with staff, coaches, and student representatives
• A daily community engagement schedule featuring meet-and-greets with state champions and Coach of the Year Drew Rhoda
• Apex Legends demo stations, in coordination with the Apex IHSEN announcement, giving attendees a first look at the format
• Hall of Champions display, including the trophy lineup from the most recent State Finals
• Open conversation with IEN leadership about the 2026–27 changes outlined across this update cycle

WHY HECC
The HECC Conference is one of the most important scholastic esports events in Indiana, drawing students, parents, educators, and gaming community members. Returning with a stronger booth presence reflects IEN's continued investment in being visible — not just as an organization, but as part of the broader Indiana scholastic esports community.

Schools planning to attend with students are encouraged to reach out in advance. IEN can coordinate group visits, panel time with coaches, and dedicated sessions for new programs considering joining the network.

More information — booth location, daily schedule, demo windows — will be published as the convention date approaches.`;

const POSTS: NewsPost[] = [
  {
    id: 10,
    slug: "middle-school-unified-registration-closes-september-18",
    date: "September 8, 2026",
    author: "IEN Staff",
    category: "Registration Update",
    headline: REGISTRATION_EXTENSION.title,
    excerpt:
      "Middle School and Unified teams have until September 18, 2026 to complete competition registration in LeagueOS.",
    body: REGISTRATION_EXTENSION_BODY,
    content: <RegistrationExtensionContent />,
    image: registrationExtensionImage,
    hubCtaLabel: "Registration Information",
    cta: {
      label: "Register in LeagueOS",
      href: REGISTRATION_EXTENSION.leagueOsUrl,
    },
    ctaNote:
      "School chartering and LeagueOS competition registration are both required.",
    featured: true,
  },
  {
    id: 11,
    slug: "los-premier-returns-national-ranked-play-2026-27",
    date: "September 8, 2026",
    author: "IEN Staff",
    category: "Program Spotlight",
    headline: "LOS Premier Returns With National Ranked Play For 2026-27",
    excerpt:
      "LOS Premier returns with national ranked competition, Roku broadcasts, and a high school fee cap for participating titles.",
    body: LOS_PREMIER_BODY,
    content: <LosPremierContent />,
    image: liveCompetitionImage,
    imageFocal: "45% 45%",
    hubCtaLabel: "Learn About LOS Premier",
    ctaNote:
      "LeagueOS will provide registration instructions through its Dashboard.",
  },
  {
    id: 12,
    slug: "spartan-showdown-returns-november-7",
    date: "September 8, 2026",
    author: "IEN Staff",
    category: "Event Announcement",
    headline: "Spartan Showdown Returns November 7",
    excerpt:
      "The high school only Super Smash Bros. event returns November 7 with free entry, lunch, ladder matches, prizes, and scholarships.",
    body: SPARTAN_SHOWDOWN_BODY,
    content: <SpartanShowdownContent />,
    image: trophiesImage,
    imageFocal: "35% 50%",
    hubCtaLabel: "Spartan Showdown 2026",
    cta: {
      label: "Spartan Showdown 2026",
      href: "https://www.start.gg/tournament/spartan-showdown-2026/details",
    },
    ctaNote: "External event registration and details on start.gg.",
  },
  {
    id: 9,
    slug: "2026-27-season-kickoff-for-coaches",
    date: "August 13, 2026",
    author: "IEN Staff",
    category: "Event Recap",
    headline: "2026-27 Season Kickoff: The TL;DR for Coaches",
    excerpt:
      "Missed the mandatory kickoff event? Here are the dates, registration steps, division changes, support contacts, and links coaches need for the 2026-27 season.",
    body: KICKOFF_BODY,
    content: <KickoffContent />,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1800",
  },
  {
    id: 8,
    slug: "indiana-esports-network-new-brand-identity-website",
    date: "July 17, 2026",
    author: "Indiana Esports Network",
    category: "Press Release",
    headline: "Indiana Esports Network Unveils New Brand Identity and Website",
    excerpt:
      "IEN's new visual identity reflects continued growth, statewide reach, and its commitment to education-first scholastic esports across Indiana.",
    body: BRAND_RELEASE_BODY,
    image: brandIdentityImage,
  },
  {
    id: 1,
    slug: "ien-announces-major-changes-for-2026-27-season",
    date: "May 2026",
    author: "IEN Staff",
    category: "Season Announcement",
    headline: "IEN Announces Major Changes for the 2026–27 Season",
    excerpt:
      "The Indiana Esports Network is preparing for one of the biggest evolutions in organization history with updates to divisions, games, registration, support systems, and the future of Indiana scholastic esports.",
    body: FEATURED_BODY,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2400",
  },
  {
    id: 2,
    slug: "apex-legends-coming-to-ihsen",
    date: "May 2026",
    author: "IEN Staff",
    category: "Game Announcement",
    headline: "Apex Legends Officially Coming to IHSEN",
    excerpt:
      "Apex Legends will replace Fortnite at the high school level while Fortnite remains available for middle school competition.",
    body: APEX_BODY,
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 3,
    slug: "drew-rhoda-named-first-ever-ien-coach-of-year",
    date: "April 2026",
    author: "IEN Staff",
    category: "Coach Spotlight",
    headline: "Drew Rhoda Named First-Ever IEN Coach of the Year",
    excerpt:
      "IEN recognizes Drew Rhoda as its first Coach of the Year, honoring leadership, mentorship, and impact on student competitors.",
    body: COACH_BODY,
    image: drewRhodaPhoto,
    imageFocal: "50% 25%",
  },
  {
    id: 4,
    slug: "ihsen-new-1a-2a-division-structure-2026-27",
    date: "May 2026",
    author: "IEN Staff",
    category: "League Operations",
    headline: "IHSEN Announces New 1A & 2A Division Structure for 2026–27",
    excerpt:
      "IHSEN Varsity moves from three divisions to two — 1A and 2A — with per-title placement to keep brackets competitive.",
    body: DIVISION_BODY,
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 5,
    slug: "registration-system-overhaul-coming-this-fall",
    date: "May 2026",
    author: "IEN Staff",
    category: "Registration Update",
    headline: "Registration System Overhaul Coming This Fall",
    excerpt:
      "IEN will move toward a streamlined Google Forms-based registration process for schools, coaches, and teams.",
    body: REGISTRATION_BODY,
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 6,
    slug: "inside-the-new-ien-website-redesign",
    date: "May 2026",
    author: "IEN Staff",
    category: "Website Update",
    headline: "Inside the New IEN Website Redesign",
    excerpt:
      "The redesigned IEN website improves school resources, sponsor presentation, Hall of Champions access, and community storytelling.",
    body: WEBSITE_BODY,
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 7,
    slug: "ien-returning-to-hecc-conference",
    date: "May 2026",
    author: "IEN Staff",
    category: "Community",
    headline: "IEN Returning to HECC Conference",
    excerpt:
      "IEN will return to the HECC Conference with booth presence, community engagement, and potential Apex Legends demonstrations.",
    body: HECC_BODY,
    image:
      "https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&q=80&w=1600",
  },
];

function readTime(body: string): string {
  const words = body.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

const ALL = "All Stories";

export default function News() {
  const [isStoryRoute, params] = useRoute<{ slug: string }>("/news/:slug");

  if (isStoryRoute) {
    const post = POSTS.find((p) => p.slug === params?.slug);
    return post ? <NewsStoryPage post={post} /> : <NewsStoryNotFound />;
  }

  return <NewsIndex />;
}

function postPath(post: NewsPost) {
  return `/news/${post.slug}`;
}

function NewsIndex() {
  const [activePost, setActivePost] = useState<NewsPost | null>(null);
  const [filter, setFilter] = useState<string>(ALL);

  const featured = POSTS.find((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured);

  const categoryOptions = useMemo(
    () => [ALL, ...Array.from(new Set(POSTS.map((p) => p.category)))],
    [],
  );
  const visible =
    filter === ALL ? rest : rest.filter((p) => p.category === filter);
  useEffect(() => {
    if (!activePost) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activePost]);
  useEffect(() => {
    if (!activePost) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActivePost(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activePost]);
  useEffect(() => {
    const openFromHash = () => {
      const match = window.location.hash.match(/^#post-(\d+)$/);
      if (!match) return;
      const id = Number(match[1]);
      const target = POSTS.find((p) => p.id === id);
      if (target) setActivePost(target);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <Layout>
      <SEO
        title="News"
        description="Latest news from the Indiana Esports Network — game announcements, coach spotlights, league operations, and event recaps."
        path="/news"
      />
      <AnimatePresence>
        {activePost && (
          <NewsModal
            post={activePost}
            related={POSTS.filter((p) => p.id !== activePost.id).slice(0, 3)}
            onClose={() => setActivePost(null)}
            onOpen={(p) => setActivePost(p)}
          />
        )}
      </AnimatePresence>

      <section className="relative overflow-hidden border-b border-primary/15">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2400')] bg-cover bg-center opacity-15 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,55,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
        <div className="absolute inset-0 opacity-[0.04] [background:repeating-linear-gradient(45deg,transparent_0_22px,rgba(212,175,55,0.6)_22px_23px)]" />

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-primary/40 bg-primary/10 text-primary text-xs font-bold tracking-[0.25em] rounded-full uppercase">
              <Megaphone className="w-3.5 h-3.5" /> Indiana Esports Network ·
              Newsroom
            </div>
            <h1 className="font-heading font-bold text-white tracking-tight leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block">LATEST</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-primary to-yellow-300">
                UPDATES
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              Season announcements, league operations, coach spotlights, and the
              stories driving Indiana scholastic esports forward.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <span className="font-heading font-bold tracking-widest uppercase">
                  Live newsroom
                </span>
              </span>
              <span className="text-muted-foreground">
                <span className="text-primary font-bold">{POSTS.length}</span>{" "}
                stories ·{" "}
                <span className="text-primary font-bold">
                  {categoryOptions.length - 1}
                </span>{" "}
                categories
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="sticky top-20 z-30 border-b border-primary/15 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-3 flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categoryOptions.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`shrink-0 inline-flex items-center h-9 px-4 rounded-full text-xs font-heading font-bold tracking-[0.18em] uppercase border transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card/60 text-muted-foreground border-primary/20 hover:text-primary hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {featured && (filter === ALL || filter === featured.category) && (
        <section className="py-12 md:py-16 container mx-auto px-4">
          <FeaturedCard post={featured} />
        </section>
      )}

      <section className="pb-20 container mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white tracking-tight">
            {filter === ALL ? "More Stories" : filter}
          </h2>
          <span className="text-sm text-muted-foreground">
            <span className="text-primary font-bold">{visible.length}</span>{" "}
            {visible.length === 1 ? "story" : "stories"}
          </span>
        </div>

        {visible.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-primary/20 rounded-lg text-muted-foreground">
            No stories in this category yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((post) => (
              <NewsCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>

      <section className="border-t border-primary/15 bg-card/40">
        <div className="container mx-auto px-4 py-14 md:py-16 text-center">
          <p className="text-primary font-heading tracking-[0.25em] uppercase font-bold text-sm mb-3">
            Stay In The Loop
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
            Follow IEN For Live Updates
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-12 px-6"
            >
              <a
                href="https://www.facebook.com/indianaesportsnetwork"
                target="_blank"
                rel="noopener noreferrer"
              >
                FOLLOW ON FACEBOOK
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest h-12 px-6"
            >
              <a href="mailto:support@indianaesportsnetwork.org">EMAIL US</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function FeaturedCard({ post }: { post: NewsPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link
        href={postPath(post)}
        className="group relative block w-full text-left overflow-hidden rounded-2xl border border-primary/30 bg-card transition-all duration-300 hover:border-primary/70 hover:shadow-[0_25px_60px_-20px_rgba(212,175,55,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <div className="relative h-[26rem] md:h-[32rem] overflow-hidden">
          <img
            src={post.image}
            alt={post.headline}
            style={{ objectPosition: post.imageFocal ?? "center" }}
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-[1.03] transition-all duration-700 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-primary text-primary-foreground text-[0.65rem] font-heading font-bold tracking-[0.25em] uppercase">
                <Sparkles className="w-3 h-3" /> Featured
              </span>
              <CategoryBadge category={post.category} size="sm" />
            </div>

            <h2 className="font-heading font-bold text-white tracking-tight leading-[1.05] text-3xl md:text-5xl lg:text-6xl mb-4">
              {post.headline}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 max-w-2xl line-clamp-3">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs md:text-sm text-muted-foreground mb-6">
              <Meta
                icon={<Calendar className="w-3.5 h-3.5" />}
                label={post.date}
              />
              <Meta
                icon={<User className="w-3.5 h-3.5" />}
                label={post.author}
              />
              <Meta
                icon={<Clock className="w-3.5 h-3.5" />}
                label={readTime(post.body)}
              />
            </div>

            <div className="inline-flex items-center gap-2 self-start h-12 px-6 rounded-md bg-primary text-primary-foreground font-heading font-bold tracking-[0.2em] text-sm uppercase group-hover:bg-primary/90 transition-colors">
              {post.hubCtaLabel ?? "Read Story"}{" "}
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_55%)]" />
      </Link>
    </motion.div>
  );
}

function NewsCard({ post }: { post: NewsPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={postPath(post)}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-primary/15 bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <div className="relative h-48 overflow-hidden shrink-0">
          <img
            src={post.image}
            alt={post.headline}
            style={{ objectPosition: post.imageFocal ?? "center" }}
            className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-65 group-hover:scale-110 transition-all duration-700 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-card/10" />
          <div className="absolute top-3 left-3">
            <CategoryBadge category={post.category} size="xs" />
          </div>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-3">
            <Meta
              icon={<Calendar className="w-3 h-3" />}
              label={post.date}
              small
            />
            <Meta
              icon={<Clock className="w-3 h-3" />}
              label={readTime(post.body)}
              small
            />
          </div>

          <h3 className="font-heading font-bold text-lg md:text-xl text-white leading-snug mb-2 tracking-tight group-hover:text-primary transition-colors line-clamp-2">
            {post.headline}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-auto inline-flex items-center gap-1.5 text-primary text-xs font-heading font-bold tracking-[0.2em] uppercase group-hover:gap-2.5 transition-all">
            {post.hubCtaLabel ?? "Read Story"}{" "}
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function Meta({
  icon,
  label,
  small,
}: {
  icon: ReactNode;
  label: string;
  small?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 ${small ? "text-xs" : ""}`}
    >
      <span className="text-primary/80">{icon}</span> {label}
    </span>
  );
}

function ArticleLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const opensNewTab = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1 font-semibold text-primary underline decoration-primary/40 underline-offset-4 hover:text-primary/80 hover:decoration-primary"
    >
      {children}
      {opensNewTab && <ArrowUpRight className="h-3.5 w-3.5" />}
    </a>
  );
}

function ArticleCta({ href, children }: { href: string; children: ReactNode }) {
  const opensNewTab = /^https?:\/\//.test(href);
  const mailto = href.startsWith("mailto:");
  const content = (
    <>
      {children}
      {(opensNewTab || mailto) && (
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      )}
    </>
  );

  if (!opensNewTab && !mailto) {
    return (
      <Button asChild className="font-heading uppercase tracking-widest">
        <Link href={href}>{content}</Link>
      </Button>
    );
  }

  return (
    <Button asChild className="font-heading uppercase tracking-widest">
      <a
        href={href}
        target={opensNewTab ? "_blank" : undefined}
        rel={opensNewTab ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    </Button>
  );
}

function RegistrationExtensionContent() {
  return (
    <div className="space-y-6">
      <section className="border-l-2 border-primary pl-4">
        <p className="font-heading text-lg font-bold uppercase text-white">
          {REGISTRATION_EXTENSION.title}
        </p>
        <p className="mt-2">{REGISTRATION_EXTENSION.message}</p>
      </section>

      <p>{REGISTRATION_EXTENSION.clarification}</p>

      <section className="space-y-3">
        <h3 className="font-heading text-xl font-bold uppercase text-white">
          Register Now
        </h3>
        <div className="not-prose">
          <ArticleCta href={REGISTRATION_EXTENSION.leagueOsUrl}>
            {REGISTRATION_EXTENSION.leagueOsLabel}
          </ArticleCta>
        </div>
      </section>

      <p>
        High School registration currently remains{" "}
        <strong>October 19, 2026</strong>.
      </p>

      <p>
        Coaches who run into account or registration issues can contact{" "}
        <ArticleLink href="mailto:support@indianaesportsnetwork.org">
          support@indianaesportsnetwork.org
        </ArticleLink>
        .
      </p>
    </div>
  );
}

function LosPremierContent() {
  const titles = [
    "Overwatch",
    "Rocket League",
    "VALORANT",
    "League of Legends",
    "Marvel Rivals",
    "Super Smash Bros. Ultimate",
    "Additional titles may also be offered",
  ];

  return (
    <div className="space-y-7">
      <section className="border-l-2 border-primary pl-4">
        <p className="font-heading text-lg font-bold uppercase text-white">
          National ranked play returns for 2026-27
        </p>
        <p className="mt-2">
          LOS Premier is returning with national ranked competition for high
          school esports programs.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="font-heading text-xl font-bold uppercase text-white">
          Titles
        </h3>
        <ul className="grid gap-2 sm:grid-cols-2">
          {titles.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="font-heading text-xl font-bold uppercase text-white">
          Program Structure
        </h3>
        <ul className="space-y-2">
          <li>One Premier team per title per high school.</li>
          <li>$96 per Premier team for the year.</li>
          <li>Maximum fee of $384 per high school.</li>
          <li>
            Once a school reaches the $384 maximum, it may participate in as
            many available Premier titles as applicable without exceeding that
            school maximum.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="font-heading text-xl font-bold uppercase text-white">
          Media And National Exposure
        </h3>
        <p>
          LOS Premier national ranked play will air live each week on Roku as
          part of a weekly live high school esports telecast.
        </p>
        <p>
          Throughout the year, similarly ranked Premier teams may also be
          invited to participate in additional online and in-person
          competitions.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="font-heading text-xl font-bold uppercase text-white">
          Indiana Example
        </h3>
        <p>
          Hamilton Southeastern participated in LOS Premier last spring. Their
          VALORANT team reached #3 in the national rankings and earned an
          opportunity to travel to San Antonio for competition.
        </p>
      </section>

      <section className="border-l-2 border-primary pl-4">
        <p className="font-heading text-lg font-bold uppercase text-white">
          Registration
        </p>
        <p className="mt-2">
          LeagueOS will provide registration instructions through its Dashboard.
          No separate LOS Premier registration deadline has been announced.
        </p>
      </section>
    </div>
  );
}

function SpartanShowdownContent() {
  const highlights = [
    "Free entry",
    "Free lunch",
    "Arcade games",
    "Ladder matches",
    "$35,000 in scholarships awarded",
    "200+ high school players from across the Midwest",
    "Costume contest",
    "Prizes",
    "High school students only",
  ];

  return (
    <div className="space-y-7">
      <section className="border-l-2 border-primary pl-4">
        <p className="font-heading text-lg font-bold uppercase text-white">
          High school only
        </p>
        <p className="mt-2">
          Spartan Showdown returns Saturday, November 7, 2026, as a high school
          only Super Smash Bros. event.
        </p>
      </section>

      <div className="not-prose">
        <ArticleCta href="https://www.start.gg/tournament/spartan-showdown-2026/details">
          Spartan Showdown 2026
        </ArticleCta>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          External event registration and details are hosted on start.gg.
        </p>
      </div>

      <p>
        Spartan Showdown is a major Indiana youth Super Smash Bros. event and
        brings together high school competitors from across the Midwest.
      </p>

      <section className="space-y-3">
        <h3 className="font-heading text-xl font-bold uppercase text-white">
          Event Highlights
        </h3>
        <ul className="grid gap-2 sm:grid-cols-2">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="border-l-2 border-primary pl-4">
        <p className="font-heading text-lg font-bold uppercase text-white">
          External Registration
        </p>
        <p className="mt-2">
          Registration is handled externally. This announcement shares the
          opportunity with Indiana schools and does not list IEN as the event
          operator.
        </p>
      </section>
    </div>
  );
}

function KickoffContent() {
  const updates = [
    {
      title: "The Championship Record Book is live.",
      copy: "Every title, finals appearance, and active win streak is now permanent and public across IHSEN, IMSEN, and IUEN.",
    },
    {
      title: "Students can now be recruited.",
      copy: "IEN has a signed partnership with SPIN. Students build recruiting profiles, college coaches search by title and role, and contact happens directly on the platform.",
    },
    {
      title: "Championship Weekend gets bigger.",
      copy: "State finals are moving toward the stage, venue, and crowd experience Indiana students deserve.",
    },
    {
      title: "The whole season is on one page.",
      copy: "A published calendar now tracks registration, regular seasons, playoffs, and finals deadlines in one place.",
    },
    {
      title: "Support moved to email.",
      copy: "Discord ticketing is retired. Use support@indianaesportsnetwork.org so issues are searchable, forwardable, and school-account friendly.",
    },
  ];

  const dates = [
    ["Aug. 12", "Registration opens for all divisions"],
    ["Sept. 18", "Registration deadline: Middle School and Unified"],
    ["Oct. 19", "Registration deadline: High School"],
    ["Sept.-Dec.", "Regular season: Middle School and Unified"],
    ["Oct.-Feb.", "Regular season: High School"],
    ["Playoffs", "Roster lock: lineups final, two warnings, no exceptions"],
    ["Dec. 12", "IMSEN and IUEN State Finals"],
  ];

  const contacts = [
    ["Competition", "Konnor Powell", "Schedules, rules, disputes"],
    ["Technology", "Jonathan Morgan", "LeagueOS, accounts, registration"],
    ["Support", "Trevor Smith", "New programs, anything stuck"],
    ["Governance", "Shaun Doyle", "Policy, eligibility, appeals"],
    ["Finance", "Chris King", "Invoices, fees, purchase orders"],
    ["Collegiate", "Dylan Gentilcore", "SPIN, pathways, initiatives"],
  ];

  return (
    <div className="space-y-8">
      <p>
        We held the mandatory 2026-27 season coaches meeting on August 12, 2026.
        If you missed it, or if you just want the short version to forward to
        your athletic director, here is everything that matters.
      </p>

      <p>
        <ArticleLink href="https://www.youtube.com/watch?v=jK1VoXu3gvE">
          Watch the full kickoff recording
        </ArticleLink>{" "}
        when you have the hour. Everything below is covered there.
      </p>

      <section className="space-y-3">
        <h3 className="font-heading text-xl font-bold uppercase text-white">
          Where We Are
        </h3>
        <p>
          IEN now connects 180+ schools across Indiana. Every program is run by
          an educator, not a corporation. Last season, IEN awarded{" "}
          <strong>32 state championships</strong>: 24 high school, 6 middle
          school, and 2 Unified.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-heading text-xl font-bold uppercase text-white">
          Five Things Are Different
        </h3>
        <ol className="not-prose space-y-3">
          {updates.map((item) => (
            <li key={item.title} className="border-l-2 border-primary/70 pl-4">
              <span className="block font-heading text-sm font-bold uppercase text-white">
                {item.title}
              </span>
              <span className="mt-1 block text-sm leading-6 text-muted-foreground md:text-base">
                {item.copy}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-3">
        <h3 className="font-heading text-xl font-bold uppercase text-white">
          Division Changes
        </h3>
        <ul className="space-y-2">
          <li>
            <strong>IHSEN High School:</strong> splitting into 1A and 2A with a
            ten-week regular season from November through February.
          </li>
          <li>
            <strong>IUEN Unified:</strong> now spans middle school and high
            school, with competition registration in LeagueOS and program
            coordination through IEN and Special Olympics Indiana.
          </li>
          <li>
            <strong>IMSEN Middle School:</strong> grades 6-8, unchanged in
            structure.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="font-heading text-xl font-bold uppercase text-white">
          Rules
        </h3>
        <p>
          Three things changed: substitutes and bench, live coaching, and a
          condensed general rules document. The current bylaws and posted title
          rulesets are live on the{" "}
          <ArticleLink href={GAME_RULESET_LIBRARY_HREF}>
            Rules & Policies page
          </ArticleLink>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-heading text-xl font-bold uppercase text-white">
          Dates To Mark Now
        </h3>
        <div className="not-prose overflow-x-auto border-y border-primary/20">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <tbody>
              {dates.map(([date, what]) => (
                <tr
                  key={date}
                  className="border-b border-primary/10 last:border-0"
                >
                  <th className="w-36 px-3 py-3 font-heading text-xs font-bold uppercase text-primary">
                    {date}
                  </th>
                  <td className="px-3 py-3 text-muted-foreground">{what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="font-heading text-xl font-bold uppercase text-white">
          Registration And Cost
        </h3>
        <p>
          Registration opened August 12 for all divisions and runs through
          LeagueOS. Charter your school, then enter your teams and rosters
          before your division's deadline.
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Club Division:</strong> free.
          </li>
          <li>
            <strong>Varsity Division:</strong> $100 flat per school, per year.
            Not per student, title, or season.
          </li>
        </ul>
        <p>
          If your business office needs an invoice or purchase order, submit the{" "}
          <ArticleLink href="https://docs.google.com/forms/d/e/1FAIpQLScuvMFtFMdcLSpFTNeqG-oLDi4RJ14cURIdkJSz56fC6qedmQ/viewform">
            2026-27 Invoice Request Form
          </ArticleLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="font-heading text-xl font-bold uppercase text-white">
          Your First Seven Days
        </h3>
        <ol>
          <li>Charter your school for 2026-27.</li>
          <li>Register teams in LeagueOS before your division's deadline.</li>
          <li>
            Confirm eligibility for every student. This is the one thing that
            ends seasons early.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-heading text-xl font-bold uppercase text-white">
          Forms And Links
        </h3>
        <p>
          For the current form list, use the{" "}
          <ArticleLink href="/forms">IEN Forms hub</ArticleLink>. The links
          below are the kickoff essentials.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <h4 className="font-heading text-sm font-bold uppercase text-white">
              Start Here
            </h4>
            <ul className="mt-2 space-y-2">
              <li>
                <ArticleLink href="https://forms.gle/xYBFUvaex5veaQ2FA">
                  2026-27 Annual Charter
                </ArticleLink>
              </li>
              <li>
                <ArticleLink href="https://leagueos.gg">
                  LeagueOS Registration
                </ArticleLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-bold uppercase text-white">
              Required Before You Compete
            </h4>
            <ul className="mt-2 space-y-2">
              <li>
                <ArticleLink href="https://forms.gle/S5FWfho6DTNu5AyT7">
                  Nintendo Ethernet Verification Form
                </ArticleLink>
              </li>
              <li>
                <ArticleLink href="https://docs.google.com/forms/d/e/1FAIpQLSdsBvpSzpFfoCxD1bsVrg0ypWiLIC5sSZlMUfCQFhQrV7lw4Q/viewform">
                  Verified Streaming Form
                </ArticleLink>
              </li>
              <li>
                Student eligibility confirmation is completed through
                registration.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-bold uppercase text-white">
              Reference
            </h4>
            <ul className="mt-2 space-y-2">
              <li>
                <ArticleLink href="/schedule">
                  2026-27 Season Calendar
                </ArticleLink>
              </li>
              <li>
                <ArticleLink href="/hall-of-champions">
                  Championship Record Book
                </ArticleLink>
              </li>
              <li>
                <ArticleLink href={RULEBOOK_HREF}>
                  2026-27 IEN Bylaws & General Rules
                </ArticleLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-bold uppercase text-white">
              Opportunities
            </h4>
            <ul className="mt-2 space-y-2">
              <li>
                <ArticleLink href="https://www.staypluggedin.com">
                  SPIN Recruiting Profiles
                </ArticleLink>
              </li>
              <li>
                <ArticleLink href="/leagues/iuen">
                  Unified Registration
                </ArticleLink>
              </li>
              <li>
                GuardianProline coach jersey offer: details coming by coach
                email.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-heading text-xl font-bold uppercase text-white">
          Who To Email
        </h3>
        <div className="not-prose overflow-x-auto border-y border-primary/20">
          <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
            <tbody>
              {contacts.map(([area, person, need]) => (
                <tr
                  key={area}
                  className="border-b border-primary/10 last:border-0"
                >
                  <th className="w-36 px-3 py-3 font-heading text-xs font-bold uppercase text-primary">
                    {area}
                  </th>
                  <td className="w-44 px-3 py-3 font-semibold text-white">
                    {person}
                  </td>
                  <td className="px-3 py-3 text-muted-foreground">{need}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          General questions go to{" "}
          <ArticleLink href="mailto:support@indianaesportsnetwork.org">
            support@indianaesportsnetwork.org
          </ArticleLink>
          .
        </p>
      </section>

      <section className="border-l-2 border-primary pl-4">
        <p className="font-heading text-lg font-bold uppercase text-white">
          Education First. Esports Always.
        </p>
        <p className="mt-2">
          Thank you for the hours you put into this. We know exactly what it
          costs you.
        </p>
      </section>
    </div>
  );
}

function NewsStoryPage({ post }: { post: NewsPost }) {
  const related = POSTS.filter((p) => p.id !== post.id).slice(0, 3);
  const storyCta =
    post.cta && post.cta.href !== postPath(post) ? post.cta : undefined;

  return (
    <Layout>
      <SEO
        title={post.headline}
        description={post.excerpt}
        path={postPath(post)}
        image={post.image}
        type={post.category === "Event Announcement" ? "event" : "article"}
      />

      <article>
        <section className="relative overflow-hidden border-b border-primary/20 bg-card">
          <img
            src={post.image}
            alt=""
            style={{ objectPosition: post.imageFocal ?? "center" }}
            className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/30" />
          <div className="container relative z-10 mx-auto px-4 py-12 md:py-20">
            <Link
              href="/news"
              className="mb-8 inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-[0.2em] text-primary hover:text-primary/80"
            >
              <ChevronRight className="h-3.5 w-3.5 rotate-180" />
              News
            </Link>

            <div className="max-w-4xl">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                {post.featured && (
                  <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-primary text-primary-foreground text-[0.65rem] font-heading font-bold tracking-[0.25em] uppercase">
                    <Sparkles className="w-3 h-3" /> Featured
                  </span>
                )}
                <CategoryBadge category={post.category} size="sm" />
              </div>

              <h1 className="font-heading font-bold text-white tracking-tight leading-[1.02] text-4xl md:text-6xl lg:text-7xl">
                {post.headline}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <Meta
                  icon={<Calendar className="w-4 h-4" />}
                  label={post.date}
                />
                <Meta icon={<User className="w-4 h-4" />} label={post.author} />
                <Meta
                  icon={<Clock className="w-4 h-4" />}
                  label={readTime(post.body)}
                />
              </div>

              {(storyCta || post.ctaNote) && (
                <div className="mt-8 flex flex-col items-start gap-3">
                  {storyCta && (
                    <ArticleCta href={storyCta.href}>
                      {storyCta.label}
                    </ArticleCta>
                  )}
                  {post.ctaNote && (
                    <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                      {post.ctaNote}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10 md:py-14">
          <div className="mx-auto max-w-3xl">
            <div
              className={`prose prose-invert max-w-none text-base leading-[1.75] text-muted-foreground md:text-[1.05rem] ${
                post.content ? "" : "whitespace-pre-line [&_p]:my-4"
              }`}
            >
              {post.content ?? post.body}
            </div>
          </div>
        </section>
      </article>

      {related.length > 0 && (
        <section className="border-t border-primary/15 bg-card/40">
          <div className="container mx-auto px-4 py-12 md:py-14">
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-white tracking-tight">
                Related Stories
              </h2>
              <Link
                href="/news"
                className="hidden text-xs font-heading font-bold uppercase tracking-[0.2em] text-primary hover:text-primary/80 md:inline-flex"
              >
                All News
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {related.map((item) => (
                <RelatedStoryCard key={item.id} post={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

function RelatedStoryCard({ post }: { post: NewsPost }) {
  return (
    <Link
      href={postPath(post)}
      className="group overflow-hidden rounded-lg border border-primary/15 bg-background/70 transition-colors hover:border-primary/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="relative h-32 overflow-hidden">
        <img
          src={post.image}
          alt=""
          style={{ objectPosition: post.imageFocal ?? "center" }}
          className="absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-luminosity transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <div className="absolute left-3 top-3">
          <CategoryBadge category={post.category} size="xs" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-heading text-lg font-bold leading-snug text-white transition-colors group-hover:text-primary">
          {post.headline}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}

function NewsStoryNotFound() {
  return (
    <Layout>
      <SEO
        title="News Story Not Found"
        description="The requested Indiana Esports Network news story could not be found."
        path="/news"
        noindex
      />
      <section className="container mx-auto px-4 py-20 text-center">
        <p className="text-xs font-heading font-bold tracking-[0.22em] uppercase text-primary mb-3">
          News
        </p>
        <h1 className="font-heading text-white font-bold tracking-tight uppercase text-4xl md:text-6xl mb-4">
          Story Not Found
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
          The story link may have changed. The latest IEN updates are available
          in the news hub.
        </p>
        <Button asChild className="font-heading uppercase tracking-widest">
          <Link href="/news">Back To News</Link>
        </Button>
      </section>
    </Layout>
  );
}

function NewsModal({
  post,
  related,
  onClose,
  onOpen,
}: {
  post: NewsPost;
  related: NewsPost[];
  onClose: () => void;
  onOpen: (p: NewsPost) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/85 backdrop-blur-md p-2 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <motion.article
        initial={{ scale: 0.96, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0, y: 16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative bg-card border border-primary/40 rounded-2xl overflow-hidden max-w-4xl w-full my-4 md:my-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 md:h-[22rem] overflow-hidden">
          <img
            src={post.image}
            alt={post.headline}
            style={{ objectPosition: post.imageFocal ?? "center" }}
            className="absolute inset-0 w-full h-full object-cover opacity-55 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-card/40 via-transparent to-card/40" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-10 h-10 inline-flex items-center justify-center rounded-full bg-background/85 border border-primary/40 backdrop-blur text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-5 md:bottom-8 md:left-10 right-5 md:right-10 flex flex-wrap items-center gap-2">
            {post.featured && (
              <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-primary text-primary-foreground text-[0.65rem] font-heading font-bold tracking-[0.25em] uppercase">
                <Sparkles className="w-3 h-3" /> Featured
              </span>
            )}
            <CategoryBadge category={post.category} size="sm" />
          </div>
        </div>

        <div className="p-6 md:p-10">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
            className="font-heading font-bold text-white tracking-tight leading-[1.1] text-2xl md:text-4xl uppercase"
          >
            {post.headline}
          </motion.h2>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground border-b border-primary/15 pb-5">
            <Meta icon={<Calendar className="w-4 h-4" />} label={post.date} />
            <Meta icon={<User className="w-4 h-4" />} label={post.author} />
            <Meta
              icon={<Clock className="w-4 h-4" />}
              label={readTime(post.body)}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.18 }}
            className={`mt-6 prose prose-invert max-w-none text-base md:text-[1.05rem] text-muted-foreground leading-[1.75] ${
              post.content ? "" : "whitespace-pre-line [&_p]:my-4"
            }`}
          >
            {post.content ?? post.body}
          </motion.div>

          {related.length > 0 && (
            <div className="mt-10 pt-8 border-t border-primary/15">
              <div className="flex items-end justify-between gap-4 mb-5">
                <h3 className="font-heading font-bold text-lg md:text-xl text-white tracking-tight">
                  Related Stories
                </h3>
                <span className="hidden md:inline text-xs text-muted-foreground tracking-widest uppercase font-heading font-bold">
                  Continue reading
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {related.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => onOpen(r)}
                    className="group text-left bg-background/60 border border-primary/15 rounded-lg overflow-hidden hover:border-primary/50 hover:bg-card transition-colors"
                  >
                    <div className="relative h-24 overflow-hidden">
                      <img
                        src={r.image}
                        alt=""
                        style={{ objectPosition: r.imageFocal ?? "center" }}
                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500 mix-blend-luminosity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      <div className="absolute top-2 left-2">
                        <CategoryBadge category={r.category} size="xs" />
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="font-heading font-bold text-sm text-white leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                        {r.headline}
                      </div>
                      <div className="mt-2 inline-flex items-center gap-1 text-[0.65rem] text-primary font-heading font-bold tracking-[0.2em] uppercase">
                        Read <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.article>
    </motion.div>
  );
}
