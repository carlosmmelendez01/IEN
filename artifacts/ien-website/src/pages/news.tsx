import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, ChevronRight } from "lucide-react";

interface NewsPost {
  id: number;
  date: string;
  author: string;
  category: string;
  headline: string;
  excerpt: string;
  body: string;
  image: string;
  featured?: boolean;
}

const posts: NewsPost[] = [
  {
    id: 1,
    date: "August 10, 2026",
    author: "IEN Staff",
    category: "Season Announcement",
    headline: "2026–27 Season Registration Is Now Open",
    excerpt:
      "Registration for the Indiana Esports Network's 2026–27 school year is officially live on LeagueOS. New and returning schools can now register their Varsity and Club teams for the Fall season.",
    body: `Registration for the Indiana Esports Network's 2026–27 school year is officially live on LeagueOS. New and returning schools can now register their Varsity and Club teams for the Fall season beginning October 12, 2026.

This season IEN is excited to expand the IHSEN title roster to include Marvel Rivals and iRacing alongside fan favorites Valorant, Rocket League, League of Legends, Overwatch 2, Fortnite, Smash Bros. Ultimate, Chess, Minecraft, Mario Kart, and Tetris.

IMSEN registration opens the same day with Fall titles including Fortnite, Mario Kart 8 Deluxe, Minecraft, and Tetris. Spring registration opens November 30 for both leagues.

New schools must schedule an onboarding meeting before registering. Visit our Start a Program page or click the JOIN THE LEAGUE button to book your session today.

Key Dates:
• Aug 10: Registration opens (IHSEN, IMSEN, IUEN)
• Oct 12: Fall season begins (IHSEN)
• Dec 12: IMSEN & IUEN Fall Finals
• Apr 24: IEN State Finals 2027`,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: 2,
    date: "April 25, 2026",
    author: "IEN Staff",
    category: "Event Recap",
    headline: "IEN State Finals 2026: Champions Crowned at Ball State",
    excerpt:
      "Over 400 students from 80+ Indiana schools competed at the 2026 IEN State Finals at Ball State University. Congratulations to all of this year's champions.",
    body: `The 2026 IEN State Finals brought together the best high school, middle school, and unified esports teams in Indiana for a day of championship-level competition at Ball State University.

More than 400 students from 80+ schools participated across six title championships. The energy in the arena was electric as teams that had competed online all season finally faced off in person.

2026 State Champions:
• Valorant (IHSEN): Penn High School
• Rocket League (IHSEN): Zionsville High School
• Smash Bros. Ultimate (IHSEN): Carmel High School
• Overwatch 2 (IHSEN): Cathedral High School
• Fortnite (IMSEN): Hamilton Southeastern Middle School
• Smash Bros. Ultimate (IUEN): Warren Central / United Athletes

A huge thank you to our volunteers, coaches, and the Ball State University campus for hosting such an incredible event. We can't wait to see everyone at the 2027 State Finals on April 24!`,
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    date: "March 15, 2026",
    author: "Joe Wilhelm, Executive Director",
    category: "Program Spotlight",
    headline: "IUEN Spotlight: How Unified Esports Is Changing Lives",
    excerpt:
      "IEN's Unified Esports Network (IUEN), a Special Olympics Indiana partnership, is giving students with intellectual disabilities a place to compete, connect, and belong.",
    body: `The Indiana Unified Esports Network (IUEN) launched as a Special Olympics Indiana partnership to create competitive esports opportunities for students with intellectual disabilities alongside their peers.

In its second full season, IUEN now serves over 30 schools and 200 Unified Athletes and Partners competing together in Super Smash Bros. Ultimate and Rocket League.

Coach Testimonial, Brownsburg High School:
"Before IUEN, several of our Unified Athletes had never participated in any extracurricular activity. Now they show up every Tuesday with teammates who genuinely care about them. The growth we've seen, in confidence, communication, and school pride, has been remarkable."

IUEN is completely free for all participating schools and students, supported by Special Olympics Indiana and IEN's nonprofit mission.

If your school isn't participating yet, there's still time to join the Spring season. Registration is open and all you need to get started is an onboarding meeting with our team.`,
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    date: "February 1, 2026",
    author: "IEN Staff",
    category: "Hiring",
    headline: "Now Hiring: League Operations Officer",
    excerpt:
      "Indiana Esports Network is seeking a part-time League Operations Officer to support scheduling, LeagueOS administration, and school coordination for the 2026–27 season.",
    body: `Indiana Esports Network is growing, and we're looking for a detail-oriented League Operations Officer to join our team on a part-time basis.

About the Role:
The League Operations Officer will work closely with the Executive Director to manage day-to-day league operations, including LeagueOS administration, match scheduling, school onboarding coordination, and dispute resolution support.

Responsibilities:
• Maintain and update team rosters on LeagueOS
• Coordinate match schedules across IHSEN, IMSEN, and IUEN
• Serve as the primary point of contact for coach questions
• Assist in running virtual and in-person league events
• Compile weekly standings reports for IEN leadership

Requirements:
• Familiarity with scholastic esports or competitive gaming
• Strong organizational and communication skills
• Ability to work 10–15 hours per week during the school year
• Experience with Google Workspace tools

Compensation: $15–$18/hr commensurate with experience

To apply, send your resume and a brief cover letter to info@indianaesportsnetwork.org with the subject line "League Operations Officer Application."`,
    image:
      "https://images.unsplash.com/photo-1542751110-b0d0f9f33f2d?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    date: "December 15, 2025",
    author: "IEN Staff",
    category: "Event Recap",
    headline: "Fall 2025 Season Wraps with IMSEN & IUEN Finals",
    excerpt:
      "The Fall 2025 season concluded with the IMSEN and IUEN Finals on December 13. Congratulations to all competing teams. Spring registration opens January 15.",
    body: `The Fall 2025 season came to a close on December 13 with the IMSEN and IUEN Finals, wrapping up a tremendous semester of scholastic esports competition across Indiana.

IMSEN Fall 2025 Champions:
• Fortnite: Noblesville West Middle School
• Mario Kart 8 Deluxe: Carmel Middle School
• Minecraft: Plainfield Middle School
• Tetris: Brownsburg East Middle School

IUEN Fall 2025 Champions:
• Smash Bros. Ultimate: Perry Meridian High School / United Athletes

This fall season saw a record 68 schools compete across all IEN programs, a 25% increase from Fall 2024. We are incredibly proud of every student, coach, and administrator who made this season possible.

Spring registration for IMSEN and IUEN opens January 15, 2026. Spring titles will include Marvel Rivals, Rocket League, Super Smash Bros. Ultimate, and Chess. Reach out to info@indianaesportsnetwork.org with any questions.`,
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    date: "September 5, 2025",
    author: "IEN Staff",
    category: "Community",
    headline: "Welcome to the 2025–26 Season: 12 New Partner Schools Join IEN",
    excerpt:
      "IEN is proud to welcome 12 new schools to the network for the 2025–26 school year, including the first schools from the Wabash Valley and Calumet regions.",
    body: `Indiana Esports Network is thrilled to welcome 12 new schools to the network for the 2025–26 school year, our largest single-season expansion to date.

New schools joining IEN for 2025–26 include programs from the Wabash Valley and Calumet regions, areas that had not previously had IEN representation. This geographic growth brings IEN coverage to 29 of Indiana's 92 counties.

New member schools include:
• West Vigo High School
• Terre Haute South Vigo High School
• Harrison High School (West Lafayette)
• Chesterton High School
• Lowell High School
• And 7 additional schools in Indianapolis metro, Fort Wayne, and Evansville

Each new school has completed an onboarding meeting with IEN leadership and has a designated coach ready to lead their programs into competition.

IEN Executive Director Joe Wilhelm: "Every new school represents dozens of students who now have a place to compete and belong. We are building something truly statewide, and we couldn't do it without the coaches and administrators who believe in this mission."

If your school is interested in joining for 2026–27, start by scheduling an onboarding meeting with our team.`,
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80",
  },
];

function NewsModal({
  post,
  onClose,
}: {
  post: NewsPost;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 p-4 md:p-10 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative bg-card border border-primary/30 rounded-2xl overflow-hidden max-w-2xl w-full my-8 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-56 overflow-hidden">
            <img
              src={post.image}
              alt={post.headline}
              className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/60 hover:bg-primary rounded-full p-2 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-6">
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold tracking-widest rounded-full uppercase">
                {post.category}
              </span>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                {post.author}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6 leading-tight">
              {post.headline}
            </h2>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {post.body}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function NewsCard({
  post,
  onOpen,
  featured,
}: {
  post: NewsPost;
  onOpen: () => void;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="col-span-1 md:col-span-2 lg:col-span-3 group relative rounded-2xl overflow-hidden border-2 border-primary/40 hover:border-primary shadow-[0_0_25px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-all cursor-pointer"
        onClick={onOpen}
      >
        <div className="relative h-72 md:h-80">
          <img
            src={post.image}
            alt={post.headline}
            className="w-full h-full object-cover opacity-40 group-hover:opacity-55 transition-opacity mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-card via-card/80 to-transparent" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 md:max-w-xl">
          <span className="mb-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold tracking-widest rounded-full uppercase w-fit">
            {post.category}
          </span>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3 leading-tight">
            {post.headline}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              {post.author}
            </span>
          </div>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest w-fit gap-2"
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
          >
            READ MORE <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card border border-primary/20 rounded-xl overflow-hidden hover:border-primary transition-all cursor-pointer flex flex-col"
      onClick={onOpen}
    >
      <div className="relative h-44 overflow-hidden shrink-0">
        <img
          src={post.image}
          alt={post.headline}
          className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity group-hover:scale-105 duration-500 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <span className="absolute top-3 left-3 px-2 py-0.5 bg-primary/90 text-primary-foreground text-xs font-bold tracking-widest rounded-full uppercase">
          {post.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" />
            {post.author}
          </span>
        </div>

        <h3 className="font-heading font-bold text-lg text-white mb-2 leading-snug group-hover:text-primary transition-colors">
          {post.headline}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
          {post.excerpt}
        </p>

        <button className="flex items-center gap-1 text-primary text-sm font-heading font-bold tracking-wide hover:gap-2 transition-all mt-auto">
          READ MORE <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

export default function News() {
  const [activePost, setActivePost] = useState<NewsPost | null>(null);

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <Layout>
      {activePost && (
        <NewsModal post={activePost} onClose={() => setActivePost(null)} />
      )}

      {/* Hero */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden bg-card border-b border-primary/30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block mb-4 px-4 py-1 border border-primary/50 bg-primary/10 text-primary text-xs font-bold tracking-widest rounded-full uppercase">
              Indiana Esports Network
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tight">
              LATEST{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                UPDATES
              </span>
            </h1>
            <p className="mt-4 text-muted-foreground text-lg font-light max-w-xl mx-auto">
              Season announcements, event recaps, program spotlights, and more from IEN.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured && (
            <NewsCard
              post={featured}
              featured
              onOpen={() => setActivePost(featured)}
            />
          )}
          {rest.map((post) => (
            <NewsCard
              key={post.id}
              post={post}
              onOpen={() => setActivePost(post)}
            />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 text-center border-t border-primary/20 bg-card">
        <p className="text-primary font-heading tracking-widest uppercase font-bold mb-3">
          Stay in the Loop
        </p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          Follow IEN for Live Updates
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest"
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
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest"
          >
            <a
              href="mailto:info@indianaesportsnetwork.org"
            >
              EMAIL US
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
