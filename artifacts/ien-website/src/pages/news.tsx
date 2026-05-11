import { useEffect, useMemo, useState } from "react";
import { Layout } from "@/components/layout/Layout";
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
  Users,
  Trophy,
  Sparkles,
  Briefcase,
} from "lucide-react";
import drewRhodaPhoto from "@assets/state-finals/04-drew-rhoda-coach-of-year.jpg";

// =============================================================================
// CATEGORY DESIGN SYSTEM
// Reusable gold-pill badges with subtle variation per category. Each carries
// an icon and a tone hint so the editorial grid stays scannable at a glance.
// =============================================================================

type Category =
  | "Season Announcement"
  | "Game Announcement"
  | "Coach Spotlight"
  | "League Operations"
  | "Registration Update"
  | "Website Update"
  | "Community"
  | "Event Recap"
  | "Program Spotlight"
  | "Hiring";

const CATEGORY_STYLES: Record<Category, { icon: React.ComponentType<{ className?: string }>; tone: "solid" | "outline" }> = {
  "Season Announcement": { icon: Megaphone,      tone: "solid"   },
  "Game Announcement":   { icon: Gamepad2,       tone: "solid"   },
  "Coach Spotlight":     { icon: Award,          tone: "outline" },
  "League Operations":   { icon: Layers,         tone: "outline" },
  "Registration Update": { icon: ClipboardList,  tone: "outline" },
  "Website Update":      { icon: Monitor,        tone: "outline" },
  "Community":           { icon: Users,          tone: "outline" },
  "Event Recap":         { icon: Trophy,         tone: "solid"   },
  "Program Spotlight":   { icon: Sparkles,       tone: "outline" },
  "Hiring":              { icon: Briefcase,      tone: "outline" },
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

// =============================================================================
// CONTENT
// =============================================================================

interface NewsPost {
  id: number;
  date: string;
  author: string;
  category: Category;
  headline: string;
  excerpt: string;
  body: string;
  image: string;
  /** CSS object-position value applied to the image. Defaults to "center"; set
   *  to "top", "30% 20%", etc. when the subject's face/focus isn't centered. */
  imageFocal?: string;
  featured?: boolean;
}

const FEATURED_BODY = `The Indiana Esports Network is preparing for one of the biggest evolutions in organization history. The 2026–27 season will introduce sweeping updates to divisions, game titles, registration workflows, support systems, and the broader infrastructure that powers Indiana scholastic esports.

This year-long preview marks a turning point for IEN. After three years of rapid growth — from 30 founding programs to nearly 200 schools across IHSEN, IMSEN, and IUEN — the organization is doubling down on the systems that make competition feel professional, fair, and accessible to every Indiana student.

Headline changes for 2026–27:

GAMES
• Apex Legends officially joins the IHSEN title roster, replacing Fortnite at the high school level
• Fortnite remains the marquee IMSEN title for middle school competition
• Marvel Rivals and iRacing return after strong inaugural seasons

DIVISIONS
• IEN is exploring a move from three IHSEN divisions (A / AA / AAA) to a streamlined two-division structure
• The goal: tighter, more competitive playoff brackets and clearer pathways from the regular season into State Finals

REGISTRATION
• A redesigned, Google Forms-based registration experience launches before Fall season opens
• Schools, coaches, and team rosters all flow through a single intake process to reduce paperwork and onboarding friction

ORGANIZATION
• Drew Rhoda has been named IEN's first-ever Coach of the Year
• A redesigned IEN website launches this summer with deeper school resources, sponsor presentation, and the Hall of Champions
• IEN returns to the HECC Conference with booth presence, community engagement, and live game demos

Each of these stories is covered in depth in the articles below. Stay tuned to /news as more details — schedules, divisional alignments, the official Apex Legends ruleset, and sponsor announcements — roll out across the summer.`;

const APEX_BODY = `Apex Legends will officially join the IHSEN title roster for the 2026–27 season, replacing Fortnite at the high school level. The decision follows a community survey, coach feedback sessions, and a competitive review of the high school esports landscape across the country.

WHY THE CHANGE
Apex Legends offers a deeper team-based competitive structure than Fortnite, with three-player squads, defined Legend roles, and a meta that rewards coordination, communication, and strategic decision-making — skills that translate directly into the kind of teamwork IEN champions in every title.

Fortnite remains an important part of IEN's middle school identity. IMSEN will continue to feature Fortnite as a flagship title for 6th–8th graders, where the gameplay tempo and accessibility match middle school program goals.

WHAT TO EXPECT
• Three-player squads competing in custom IEN lobbies
• A regular season + playoff format consistent with other IHSEN titles
• Tier structure pending the broader divisional review now underway
• A full ruleset, scrim guidelines, and PC/peripheral standards rolling out before Fall registration

ROLLOUT TIMELINE
• June 2026: Coach feedback window opens
• July 2026: Official ruleset published
• August 2026: Registration opens with Apex as a default IHSEN title
• October 2026: Inaugural Apex Legends season begins

Coaches with questions about transitioning Fortnite rosters into Apex teams can reach out at info@indianaesportsnetwork.org.`;

const COACH_BODY = `The Indiana Esports Network is proud to recognize Drew Rhoda as its first-ever Coach of the Year, honoring his leadership, mentorship, and lasting impact on the student competitors who pass through his program.

The IEN Coach of the Year award celebrates educators whose work goes beyond match wins and trophies — coaches who build culture, advocate for their students, and treat scholastic esports as the developmental pathway it is meant to be. Drew embodies all three.

Across multiple seasons, Drew has built one of the most consistent and student-centered programs in the state. Athletes who started in his program have gone on to college esports rosters, broadcast internships, and program-leadership roles at other schools. More importantly, students describe his program as a place where they feel seen.

In his own words:

"Esports gives students a place to belong, compete, and grow together. Watching students gain confidence, build friendships, and discover opportunities through this activity has been one of the most rewarding experiences of my career."

Drew was officially recognized at the 2026 IEN State Finals in front of more than 400 students, coaches, and families.

The Coach of the Year award becomes a permanent IEN tradition, with future honorees selected each spring through a combination of peer nominations and IEN leadership review. Coaches interested in nominating a colleague for the 2026–27 season can submit nominations beginning January 2027.`;

const DIVISION_BODY = `The Indiana Esports Network is evaluating a move from three IHSEN divisions to two divisions for the 2026–27 season — a structural change designed to improve competitive balance, simplify scheduling, and create a cleaner playoff bracket from the regular season through State Finals.

THE CURRENT STATE
IHSEN currently runs three divisions — A, AA, and AAA — based on school enrollment and program experience. While this structure has produced excellent competition at the top, regular-season data shows that bracket sizes within each division can vary significantly between Fall and Spring, leading to uneven match volume and inconsistent playoff seeding pressure.

WHAT'S BEING CONSIDERED
A simpler two-division model — likely framed as Open and Premier (working titles) — would consolidate similarly-skilled teams into deeper, more competitive brackets. Programs would be placed using a combination of:
• Multi-season win/loss history
• Roster experience and returning starters
• School enrollment as a baseline tiebreaker

WHY IT MATTERS
The IEN coaching council has been clear: the best esports seasons are the ones where every match feels meaningful. A two-division model is intended to deliver that more consistently — fewer lopsided matchups in the regular season, tighter playoff races, and a more legible path to State Finals for new programs.

WHAT'S NEXT
• May–June 2026: Coach feedback window
• July 2026: Final structure announced
• August 2026: 2026–27 registration opens with the new model
• October 2026: First competitive matches under the new structure

This is a working proposal, not a final decision. Coach feedback during the May–June window will be a major input into the final call.`;

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
The new registration system launches in early August 2026 ahead of the official August 10 registration window. Returning schools will receive direct outreach with login links and instructions; new schools will be onboarded through their initial intake meeting as before.

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

Feedback is welcome. Coaches and partners noticing anything that should be improved can reach out at info@indianaesportsnetwork.org.`;

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
    id: 1,
    date: "May 2026",
    author: "IEN Staff",
    category: "Season Announcement",
    headline: "IEN Announces Major Changes for the 2026–27 Season",
    excerpt:
      "The Indiana Esports Network is preparing for one of the biggest evolutions in organization history with updates to divisions, games, registration, support systems, and the future of Indiana scholastic esports.",
    body: FEATURED_BODY,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2400",
    featured: true,
  },
  {
    id: 2,
    date: "May 2026",
    author: "IEN Staff",
    category: "Game Announcement",
    headline: "Apex Legends Officially Coming to IHSEN",
    excerpt:
      "Apex Legends will replace Fortnite at the high school level while Fortnite remains available for middle school competition.",
    body: APEX_BODY,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 3,
    date: "April 2026",
    author: "IEN Staff",
    category: "Coach Spotlight",
    headline: "Drew Rhoda Named First-Ever IEN Coach of the Year",
    excerpt:
      "IEN recognizes Drew Rhoda as its first Coach of the Year, honoring leadership, mentorship, and impact on student competitors.",
    body: COACH_BODY,
    image: drewRhodaPhoto,
    imageFocal: "50% 8%", // anchor the crop high so his full head sits in frame
  },
  {
    id: 4,
    date: "May 2026",
    author: "IEN Staff",
    category: "League Operations",
    headline: "IHSEN Exploring New Division Structure for 2026–27",
    excerpt:
      "IEN is evaluating a move from three divisions to two divisions to improve competitive balance across high school competition.",
    body: DIVISION_BODY,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 5,
    date: "May 2026",
    author: "IEN Staff",
    category: "Registration Update",
    headline: "Registration System Overhaul Coming This Fall",
    excerpt:
      "IEN will move toward a streamlined Google Forms-based registration process for schools, coaches, and teams.",
    body: REGISTRATION_BODY,
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 6,
    date: "May 2026",
    author: "IEN Staff",
    category: "Website Update",
    headline: "Inside the New IEN Website Redesign",
    excerpt:
      "The redesigned IEN website improves school resources, sponsor presentation, Hall of Champions access, and community storytelling.",
    body: WEBSITE_BODY,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: 7,
    date: "May 2026",
    author: "IEN Staff",
    category: "Community",
    headline: "IEN Returning to HECC Conference",
    excerpt:
      "IEN will return to the HECC Conference with booth presence, community engagement, and potential Apex Legends demonstrations.",
    body: HECC_BODY,
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&q=80&w=1600",
  },
];

// Estimate read time from word count, ~220 wpm.
function readTime(body: string): string {
  const words = body.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

// =============================================================================
// PAGE
// =============================================================================

const ALL = "All Stories";

export default function News() {
  const [activePost, setActivePost] = useState<NewsPost | null>(null);
  const [filter, setFilter] = useState<string>(ALL);

  const featured = POSTS.find((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured);

  const categoryOptions = useMemo(
    () => [ALL, ...Array.from(new Set(POSTS.map((p) => p.category)))],
    [],
  );
  const visible = filter === ALL ? rest : rest.filter((p) => p.category === filter);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!activePost) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [activePost]);

  // Esc to close modal
  useEffect(() => {
    if (!activePost) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActivePost(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activePost]);

  return (
    <Layout>
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

      {/* ===================================================================
          HERO
      =================================================================== */}
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
              <Megaphone className="w-3.5 h-3.5" /> Indiana Esports Network · Newsroom
            </div>
            <h1 className="font-heading font-bold text-white tracking-tight leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block">LATEST</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-primary to-yellow-300">
                UPDATES
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300/90 max-w-2xl leading-relaxed">
              Season announcements, league operations, coach spotlights, and the stories driving Indiana scholastic esports forward.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="font-heading font-bold tracking-widest uppercase">Live newsroom</span>
              </span>
              <span className="text-muted-foreground">
                <span className="text-primary font-bold">{POSTS.length}</span> stories ·{" "}
                <span className="text-primary font-bold">{categoryOptions.length - 1}</span> categories
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================================================
          FILTER STRIP
      =================================================================== */}
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

      {/* ===================================================================
          FEATURED ARTICLE
      =================================================================== */}
      {featured && (filter === ALL || filter === featured.category) && (
        <section className="py-12 md:py-16 container mx-auto px-4">
          <FeaturedCard post={featured} onOpen={() => setActivePost(featured)} />
        </section>
      )}

      {/* ===================================================================
          ARTICLE GRID
      =================================================================== */}
      <section className="pb-20 container mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white tracking-tight">
            {filter === ALL ? "More Stories" : filter}
          </h2>
          <span className="text-sm text-muted-foreground">
            <span className="text-primary font-bold">{visible.length}</span> {visible.length === 1 ? "story" : "stories"}
          </span>
        </div>

        {visible.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-primary/20 rounded-lg text-muted-foreground">
            No stories in this category yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((post) => (
              <NewsCard key={post.id} post={post} onOpen={() => setActivePost(post)} />
            ))}
          </div>
        )}
      </section>

      {/* ===================================================================
          BOTTOM CTA
      =================================================================== */}
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
              <a href="mailto:info@indianaesportsnetwork.org">EMAIL US</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// =============================================================================
// FEATURED CARD
// =============================================================================

function FeaturedCard({ post, onOpen }: { post: NewsPost; onOpen: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group relative w-full text-left overflow-hidden rounded-2xl border border-primary/30 hover:border-primary/70 transition-all duration-300 hover:shadow-[0_25px_60px_-20px_rgba(212,175,55,0.4)] bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
            <Meta icon={<Calendar className="w-3.5 h-3.5" />} label={post.date} />
            <Meta icon={<User className="w-3.5 h-3.5" />} label={post.author} />
            <Meta icon={<Clock className="w-3.5 h-3.5" />} label={readTime(post.body)} />
          </div>

          <div className="inline-flex items-center gap-2 self-start h-12 px-6 rounded-md bg-primary text-primary-foreground font-heading font-bold tracking-[0.2em] text-sm uppercase group-hover:bg-primary/90 transition-colors">
            Read Story <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_55%)]" />
    </motion.button>
  );
}

// =============================================================================
// ARTICLE CARD
// =============================================================================

function NewsCard({ post, onOpen }: { post: NewsPost; onOpen: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group bg-card border border-primary/15 rounded-xl overflow-hidden hover:border-primary/60 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.3)] transition-all duration-300 flex flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
          <Meta icon={<Calendar className="w-3 h-3" />} label={post.date} small />
          <Meta icon={<Clock className="w-3 h-3" />} label={readTime(post.body)} small />
        </div>

        <h3 className="font-heading font-bold text-lg md:text-xl text-white leading-snug mb-2 tracking-tight group-hover:text-primary transition-colors line-clamp-2">
          {post.headline}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-auto inline-flex items-center gap-1.5 text-primary text-xs font-heading font-bold tracking-[0.2em] uppercase group-hover:gap-2.5 transition-all">
          Read Story <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </motion.button>
  );
}

function Meta({ icon, label, small }: { icon: React.ReactNode; label: string; small?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${small ? "text-xs" : ""}`}>
      <span className="text-primary/80">{icon}</span> {label}
    </span>
  );
}

// =============================================================================
// MODAL
// =============================================================================

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
        {/* Hero image */}
        <div className="relative h-64 md:h-[22rem] overflow-hidden">
          <img
            src={post.image}
            alt={post.headline}
            style={{ objectPosition: post.imageFocal ?? "center" }}
            className="absolute inset-0 w-full h-full object-cover opacity-55 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-card/40 via-transparent to-card/40" />

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-10 h-10 inline-flex items-center justify-center rounded-full bg-background/85 border border-primary/40 backdrop-blur text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category + featured (if applicable) */}
          <div className="absolute bottom-5 left-5 md:bottom-8 md:left-10 right-5 md:right-10 flex flex-wrap items-center gap-2">
            {post.featured && (
              <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-primary text-primary-foreground text-[0.65rem] font-heading font-bold tracking-[0.25em] uppercase">
                <Sparkles className="w-3 h-3" /> Featured
              </span>
            )}
            <CategoryBadge category={post.category} size="sm" />
          </div>
        </div>

        {/* Body */}
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
            <Meta icon={<Clock className="w-4 h-4" />} label={readTime(post.body)} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.18 }}
            className="mt-6 prose prose-invert max-w-none text-base md:text-[1.05rem] text-muted-foreground leading-[1.75] whitespace-pre-line [&_p]:my-4"
          >
            {post.body}
          </motion.div>

          {/* Related Stories */}
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
                      <img src={r.image} alt="" style={{ objectPosition: r.imageFocal ?? "center" }} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500 mix-blend-luminosity" />
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
