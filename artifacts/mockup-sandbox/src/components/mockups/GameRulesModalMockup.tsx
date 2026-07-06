import { useState, type ReactNode } from "react";
import {
  AlertCircle,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FileText,
  MapPinned,
  Monitor,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";

type Game = {
  name: string;
  type: string;
  color: string;
  platform: string;
  roster: string;
  format: string;
  matchWindow: string;
  leagues: string[];
};

type RulesTab = "quick" | "rotation" | "full";

type RotationRow = {
  week: string;
  values: string[];
};

type RotationData = {
  tabLabel: string;
  title: string;
  intro: string;
  currentWeek?: string;
  headers: string[];
  rows: RotationRow[];
  note?: string;
  secondaryTitle?: string;
  secondaryItems?: string[];
  secondaryHeaders?: string[];
  secondaryRows?: RotationRow[];
};

const games: Game[] = [
  {
    name: "Valorant",
    type: "Varsity A/AA + Club",
    color: "#ff5d67",
    platform: "PC",
    roster: "5 starters / 2 substitutes",
    format: "Best of 1 regular season",
    matchWindow: "Wednesdays, 5 PM ET / 4 PM CT",
    leagues: ["IHSEN"],
  },
  {
    name: "Apex Legends",
    type: "Varsity A/AA + Club",
    color: "#b56dff",
    platform: "PC",
    roster: "3 starters / 2 substitutes",
    format: "Placement + elimination scoring",
    matchWindow: "Thursdays, 5 PM ET / 4 PM CT",
    leagues: ["IHSEN"],
  },
  {
    name: "Rocket League",
    type: "Varsity A/AA + Club",
    color: "#4da0ff",
    platform: "Cross-platform",
    roster: "3 starters / 2 substitutes",
    format: "Best of 5 match series",
    matchWindow: "Mondays, 5 PM ET / 4 PM CT",
    leagues: ["IHSEN", "IMSEN", "IUEN"],
  },
  {
    name: "League of Legends",
    type: "Varsity A/AA + Club",
    color: "#f5c542",
    platform: "PC",
    roster: "5 starters / 2 substitutes",
    format: "Best of 1 regular season",
    matchWindow: "Tuesdays, 5 PM ET / 4 PM CT",
    leagues: ["IHSEN"],
  },
  {
    name: "Overwatch 2",
    type: "Varsity A/AA + Club",
    color: "#ff8a24",
    platform: "Cross-platform",
    roster: "5 starters / 2 substitutes",
    format: "Map-set match format",
    matchWindow: "Thursdays, 5 PM ET / 4 PM CT",
    leagues: ["IHSEN"],
  },
  {
    name: "Super Smash Bros.",
    type: "Varsity A/AA + Club",
    color: "#ff5eb8",
    platform: "Nintendo Switch",
    roster: "4 starters / 2 substitutes",
    format: "Crew battle format",
    matchWindow: "Tuesdays, 5 PM ET / 4 PM CT",
    leagues: ["IHSEN", "IMSEN", "IUEN"],
  },
  {
    name: "Mario Kart 8 Deluxe",
    type: "Varsity A/AA + Club",
    color: "#ff7676",
    platform: "Nintendo Switch",
    roster: "4 starters / 2 substitutes",
    format: "Cup-based team scoring",
    matchWindow: "Wednesdays, 5 PM ET / 4 PM CT",
    leagues: ["IHSEN", "IMSEN"],
  },
  {
    name: "Minecraft",
    type: "Varsity A/AA",
    color: "#23d37b",
    platform: "PC",
    roster: "Varies by challenge",
    format: "Challenge-based scoring",
    matchWindow: "Season event windows",
    leagues: ["IHSEN", "IMSEN"],
  },
  {
    name: "Marvel Rivals",
    type: "Varsity A/AA + Club",
    color: "#ff5275",
    platform: "PC",
    roster: "6 starters / 2 substitutes",
    format: "Best of 3 map series",
    matchWindow: "Mondays, 5 PM ET / 4 PM CT",
    leagues: ["IHSEN", "IMSEN"],
  },
  {
    name: "Chess",
    type: "Tournament",
    color: "#9ba7b7",
    platform: "Chess.com",
    roster: "Individual competitors",
    format: "Swiss-style tournament",
    matchWindow: "Published tournament windows",
    leagues: ["IHSEN", "IMSEN"],
  },
  {
    name: "Tetris",
    type: "Tournament",
    color: "#14c8df",
    platform: "Jstris / TETR.IO",
    roster: "Individual competitors",
    format: "Head-to-head rounds",
    matchWindow: "Published tournament windows",
    leagues: ["IHSEN", "IMSEN"],
  },
  {
    name: "iRacing",
    type: "Tournament",
    color: "#f0b323",
    platform: "PC",
    roster: "Individual drivers",
    format: "Race event scoring",
    matchWindow: "Published race windows",
    leagues: ["IHSEN"],
  },
];

const selectedDefault =
  games.find((game) => game.name === "Super Smash Bros.") ?? games[0];

const rotationData: Record<string, RotationData> = {
  "Super Smash Bros.": {
    tabLabel: "Stages",
    title: "Weekly Starter Stages",
    intro:
      "For Set 1, teams use the published starter stage for that week. Dates are shown as week-start dates from the league calendars.",
    headers: ["Week", "IHSEN Week Starts", "IMSEN Week Starts", "Starter Stage"],
    rows: [
      { week: "Week 1", values: ["Nov 2", "Jan 11", "Pokemon Stadium 2"] },
      { week: "Week 2", values: ["Nov 9", "Jan 18", "Battlefield"] },
      { week: "Week 3", values: ["Nov 16", "Jan 25", "Smashville"] },
      { week: "Week 4", values: ["Nov 30", "Feb 1", "Small Battlefield"] },
      { week: "Week 5", values: ["Dec 7", "Feb 8", "Final Destination"] },
      { week: "Week 6", values: ["Jan 4", "Feb 22", "Town & City"] },
      { week: "Week 7", values: ["Jan 11", "-", "Pokemon Stadium 2"] },
      { week: "Week 8", values: ["Jan 25", "-", "Small Battlefield"] },
      { week: "Week 9", values: ["Feb 1", "-", "Battlefield"] },
      { week: "Week 10", values: ["Feb 8", "-", "Smashville"] },
      { week: "Week 11", values: ["-", "-", "Town & City"] },
      { week: "Week 12", values: ["-", "-", "Final Destination"] },
      { week: "Round of 16 / Playoff 1", values: ["Feb 22", "Mar 1", "Pokemon Stadium 2"] },
      { week: "Quarterfinals / Playoff 2", values: ["Mar 1", "Mar 8", "Town & City"] },
      { week: "Semifinals / Playoff 3", values: ["Mar 8", "Apr 5", "Small Battlefield"] },
      { week: "Finals", values: ["Apr 24", "Apr 24", "Pokemon Stadium 2"] },
    ],
    secondaryTitle: "Set 2 & 3 Counterpick Stages",
    secondaryItems: [
      "Kalos Pokemon League",
      "Battlefield",
      "Hollow Bastion",
      "Small Battlefield",
      "Pokemon Stadium 2",
    ],
    note: "Stage hazards off, team attack on, launch rate 1.0x.",
  },
  "Mario Kart 8 Deluxe": {
    tabLabel: "Tracks",
    title: "Weekly Cup Rotation",
    intro:
      "Each week uses one assigned Grand Prix cup. Dates are shown as week-start dates from the league calendars.",
    headers: ["Week", "IHSEN Week Starts", "IMSEN Week Starts", "Assigned Cup / Track Set"],
    rows: [
      { week: "Preseason Week 1", values: ["Oct 12", "Sep 7", "Crossing Cup"] },
      { week: "Preseason Week 2", values: ["Oct 19", "Sep 14", "Star Cup"] },
      { week: "Week 1", values: ["Nov 2", "Sep 21", "Mushroom Cup"] },
      { week: "Week 2", values: ["Nov 9", "Sep 28", "Flower Cup"] },
      { week: "Week 3", values: ["Nov 16", "Oct 19", "Star Cup"] },
      { week: "Week 4", values: ["Nov 30", "Oct 26", "Special Cup"] },
      { week: "Week 5", values: ["Dec 7", "Nov 2", "Shell Cup"] },
      { week: "Week 6", values: ["Jan 4", "Nov 9", "Banana Cup"] },
      { week: "Week 7", values: ["Jan 11", "-", "Leaf Cup"] },
      { week: "Week 8", values: ["Jan 25", "-", "Lightning Cup"] },
      { week: "Week 9", values: ["Feb 1", "-", "Egg Cup"] },
      { week: "Week 10", values: ["Feb 8", "-", "Triforce Cup"] },
      { week: "Week 11", values: ["-", "-", "Crossing Cup"] },
      { week: "Week 12", values: ["-", "-", "Bell Cup"] },
      { week: "Playoffs Week 1", values: ["Feb 22", "Nov 16", "Turnip Cup (DLC)"] },
      { week: "Playoffs Week 2", values: ["Mar 1", "Nov 30", "Lucky Cat Cup (DLC)"] },
      { week: "Playoffs Week 3", values: ["Mar 8", "Dec 7", "Rock Cup (DLC)"] },
      { week: "Playoffs Week 4", values: ["Mar 14", "-", "Fruit Cup (DLC)"] },
      {
        week: "Finals",
        values: [
          "Apr 24",
          "Dec 12",
          "Rainbow Road 3DS, Rainbow Road, SNES Rainbow Road, Rainbow Road Wii",
        ],
      },
    ],
    note: "If the wrong track is selected before the race begins, restart and select the correct track. If the race is completed, results stand.",
  },
  "Overwatch 2": {
    tabLabel: "Maps",
    title: "Regular Season Map Rotation",
    intro:
      "The weekly rotation keeps each match predictable for coaches while still exposing teams to multiple game modes.",
    headers: ["Week", "IHSEN Week Starts", "Control", "Escort", "Flashpoint", "Push", "Hybrid"],
    rows: [
      {
        week: "1 & 7",
        values: ["Nov 2 / Jan 11", "Nepal", "Watchpoint: Gibraltar", "Suravasa", "Colosseo", "Midtown"],
      },
      {
        week: "2 & 8",
        values: ["Nov 9 / Jan 25", "Lijiang Tower", "Junkertown", "New Junk City", "Esperanca", "King's Row"],
      },
      {
        week: "3 & 9",
        values: ["Nov 16 / Feb 1", "Ilios", "Circuit Royal", "Suravasa", "Runasapi", "Paraiso"],
      },
      {
        week: "4 & 10",
        values: ["Nov 30 / Feb 8", "Oasis", "Shambali Monastery", "New Junk City", "New Queen St", "Eichenwalde"],
      },
      {
        week: "5 & 11",
        values: ["Dec 7 / TBD", "Samoa", "Dorado", "Suravasa", "Colosseo", "Numbani"],
      },
      {
        week: "6 & 12",
        values: ["Jan 4 / TBD", "Busan", "Havanna", "New Junk City", "Runasapi", "Hollywood"],
      },
    ],
    secondaryTitle: "Playoff Map Rotation",
    secondaryHeaders: ["Round", "IHSEN Week Starts", "Control", "Escort", "Flashpoint", "Push", "Hybrid"],
    secondaryRows: [
      {
        week: "Round 1",
        values: ["Feb 22", "Busan", "Watchpoint: Gibraltar", "New Junk City", "Colosseo", "Hollywood"],
      },
      {
        week: "Round 2",
        values: ["Mar 1", "Ilios", "Circuit Royal", "Suravasa", "Runasapi", "Midtown"],
      },
      {
        week: "Round 3",
        values: ["Mar 8", "Oasis", "Dorado", "New Junk City", "New Queen St", "Paraiso"],
      },
      {
        week: "Round 4",
        values: ["Mar 14", "Lijiang Tower", "Junkertown", "Suravasa", "Esperanca", "Eichenwalde"],
      },
      {
        week: "Finals",
        values: ["Apr 24", "Ilios", "Circuit Royal", "New Junk City", "Runasapi", "King's Row"],
      },
    ],
    note: "Match structure follows Control, Escort, Flashpoint, Push, Hybrid. Push and Hybrid are played only if necessary.",
  },
};

function getRotation(game: Game): RotationData | undefined {
  return rotationData[game.name];
}

function defaultTabForGame(game: Game): RulesTab {
  return getRotation(game) ? "rotation" : "quick";
}

const quickFacts = (game: Game) => [
  { label: "Platform", value: game.platform, icon: Monitor },
  { label: "Roster", value: game.roster, icon: Users },
  { label: "Match format", value: game.format, icon: ClipboardCheck },
  { label: "Match window", value: game.matchWindow, icon: CalendarDays },
];

const setupItems = [
  "Home team creates the match lobby and shares the lobby details in LeagueOS.",
  "Teams must use the published server region and default competitive settings.",
  "Coaches confirm player eligibility, gamertags, and roster order before match start.",
];

const scoringItems = [
  "Report final scores in LeagueOS immediately after the match concludes.",
  "Upload screenshots if a score is disputed or requested by league staff.",
  "Tiebreakers and postseason seeding follow the Competition Rulebook.",
];

const coachReminderItems = [
  "Players must be supervised by a school-approved coach or advisor.",
  "Substitutions must follow roster rules and may not create an ineligible lineup.",
  "Sportsmanship issues should be documented and reported through official channels.",
];

function FactCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Monitor;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-slate-700 bg-slate-950/70 p-4">
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        <Icon className="h-4 w-4 text-[#f0c84b]" aria-hidden="true" />
        {label}
      </div>
      <p className="text-base font-semibold leading-snug text-white">{value}</p>
    </div>
  );
}

function BulletPanel({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof ShieldCheck;
  title: string;
  items: string[];
}) {
  return (
    <section className="rounded-lg border border-slate-700 bg-[#0d1524] p-5">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-5 w-5 text-[#f0c84b]" aria-hidden="true" />
        <h3 className="text-lg font-bold tracking-tight text-white">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function TabButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`min-h-11 rounded-md px-4 py-2 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0c84b] ${
        active
          ? "bg-[#f0c84b] text-[#09111f]"
          : "border border-slate-700 text-slate-200 hover:bg-slate-800"
      }`}
    >
      {children}
    </button>
  );
}

function RotationTable({
  headers,
  rows,
  currentWeek,
}: {
  headers: string[];
  rows: RotationRow[];
  currentWeek?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-700">
      <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
        <thead className="bg-slate-950 text-xs uppercase tracking-[0.14em] text-slate-400">
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col" className="px-4 py-3 font-bold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800 bg-[#0d1524]">
          {rows.map((row) => {
            const highlighted = row.week === currentWeek;
            return (
              <tr
                key={row.week}
                className={highlighted ? "bg-[#f0c84b]/12" : undefined}
              >
                <th
                  scope="row"
                  className={`whitespace-nowrap px-4 py-3 font-bold ${
                    highlighted ? "text-[#f0c84b]" : "text-white"
                  }`}
                >
                  {row.week}
                  {highlighted && (
                    <span className="ml-2 rounded-full bg-[#f0c84b] px-2 py-0.5 text-[0.65rem] font-black uppercase tracking-[0.12em] text-[#09111f]">
                      current
                    </span>
                  )}
                </th>
                {row.values.map((value, index) => (
                  <td key={`${row.week}-${index}`} className="px-4 py-3 text-slate-300">
                    {value}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function QuickGuidePanel({ game }: { game: Game }) {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickFacts(game).map((fact) => (
          <FactCard key={fact.label} {...fact} />
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <BulletPanel icon={ShieldCheck} title="Match Setup" items={setupItems} />
        <BulletPanel icon={FileText} title="Scoring" items={scoringItems} />
        <BulletPanel icon={AlertCircle} title="Coach Reminders" items={coachReminderItems} />
      </div>
    </>
  );
}

function RotationPanel({ game }: { game: Game }) {
  const rotation = getRotation(game);

  if (!rotation) {
    return (
      <section className="rounded-lg border border-slate-700 bg-[#0d1524] p-6">
        <div className="flex items-start gap-3">
          <MapPinned className="mt-1 h-5 w-5 shrink-0 text-[#f0c84b]" aria-hidden="true" />
          <div>
            <h3 className="text-xl font-bold text-white">No weekly rotation needed</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              This title does not currently use weekly maps, stages, or tracks.
              Coaches can stay in the Quick Guide tab for the most important
              match setup details.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="space-y-5">
      <section className="rounded-lg border border-[#f0c84b]/30 bg-[#f0c84b]/10 p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f0c84b]">
              <MapPinned className="h-4 w-4" aria-hidden="true" />
              Published {rotation.tabLabel} Rotation
            </div>
            <h3 className="text-2xl font-black tracking-tight text-white">
              {rotation.title}
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-200">
              {rotation.intro}
            </p>
          </div>
          <div className="rounded-md border border-[#f0c84b]/40 bg-[#09111f] px-4 py-3 text-sm">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Maintenance model
            </p>
            <p className="mt-1 max-w-56 text-sm font-bold leading-5 text-[#f0c84b]">
              Publish dates once per season. No weekly current-week edits.
            </p>
          </div>
        </div>
      </section>

      <RotationTable
        headers={rotation.headers}
        rows={rotation.rows}
        currentWeek={rotation.currentWeek}
      />

      {rotation.secondaryItems && (
        <section className="rounded-lg border border-slate-700 bg-[#0d1524] p-5">
          <h3 className="mb-4 text-lg font-bold text-white">
            {rotation.secondaryTitle}
          </h3>
          <div className="flex flex-wrap gap-2">
            {rotation.secondaryItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-600 px-3 py-1.5 text-sm font-semibold text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      )}

      {rotation.secondaryHeaders && rotation.secondaryRows && (
        <section className="space-y-3">
          <h3 className="text-lg font-bold text-white">{rotation.secondaryTitle}</h3>
          <RotationTable
            headers={rotation.secondaryHeaders}
            rows={rotation.secondaryRows}
          />
        </section>
      )}

      {rotation.note && (
        <p className="rounded-lg border border-slate-700 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300">
          <strong className="text-[#f0c84b]">Note:</strong> {rotation.note}
        </p>
      )}

      <p className="rounded-lg border border-slate-700 bg-[#0d1524] p-4 text-sm leading-6 text-slate-300">
        <strong className="text-[#f0c84b]">Coach tip:</strong> Use your
        league calendar to confirm the active week and match day. Dates shown
        here are week-start dates from the published IHSEN and IMSEN calendars,
        so the table stays neutral instead of auto-labeling a single current
        week.
      </p>
    </div>
  );
}

function FullRulesPanel({ game }: { game: Game }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-lg border border-slate-700 bg-[#0d1524] p-6">
        <div className="mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-[#f0c84b]" aria-hidden="true" />
          <h3 className="text-xl font-black text-white">Full Game Guide</h3>
        </div>
        <p className="text-sm leading-6 text-slate-300">
          The quick-view answers the most common questions, but the downloadable
          guide remains the authoritative source for edge cases, postseason
          rulings, penalties, and formal procedures.
        </p>
        <a
          href="#"
          onClick={(event) => event.preventDefault()}
          className="mt-5 inline-flex h-11 items-center gap-2 rounded-md bg-[#f0c84b] px-4 text-sm font-extrabold text-[#09111f] transition hover:bg-[#ffd96a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label={`Download full ${game.name} game guide PDF`}
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Download Full PDF
        </a>
      </section>

      <section className="rounded-lg border border-slate-700 bg-slate-950/70 p-6">
        <h3 className="text-lg font-bold text-white">Related documents</h3>
        <div className="mt-4 space-y-2">
          {["Competition Rulebook", "League Handbook", "LeagueOS Help"].map((label) => (
            <a
              key={label}
              href="#"
              onClick={(event) => event.preventDefault()}
              className="block rounded-md border border-slate-700 px-3 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0c84b]"
            >
              {label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

function GameCard({
  game,
  active,
  onOpen,
}: {
  game: Game;
  active: boolean;
  onOpen: () => void;
}) {
  return (
    <article
      className="rounded-lg border bg-[#0d1524] p-5 text-center transition hover:bg-[#111c2f]"
      style={{ borderColor: active ? game.color : `${game.color}b3` }}
    >
      <h3
        className="text-xl font-extrabold tracking-tight"
        style={{ color: game.color }}
      >
        {game.name}
      </h3>
      <p className="mt-3 text-base font-medium text-slate-300">{game.type}</p>
      <button
        type="button"
        onClick={onOpen}
        className="mt-4 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-[#f0c84b] transition hover:bg-[#f0c84b]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0c84b]"
        aria-haspopup="dialog"
        aria-label={`Open ${game.name} rules quick guide`}
      >
        Rules
        <span className="ml-1" aria-hidden="true">
          -&gt;
        </span>
      </button>
    </article>
  );
}

function RulesDialog({
  activeTab,
  game,
  onClose,
  onTabChange,
}: {
  activeTab: RulesTab;
  game: Game;
  onClose: () => void;
  onTabChange: (tab: RulesTab) => void;
}) {
  const rotation = getRotation(game);
  const tabs: Array<{ id: RulesTab; label: string }> = [
    { id: "quick", label: "Quick Guide" },
    { id: "rotation", label: rotation ? `${rotation.tabLabel} of Week` : "Maps / Tracks" },
    { id: "full", label: "Full Rules" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end bg-black/72 px-0 py-0 sm:items-center sm:px-6 sm:py-10"
      role="presentation"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="rules-dialog-title"
        aria-describedby="rules-dialog-description"
        className="flex max-h-[100dvh] w-full flex-col overflow-hidden rounded-t-lg border border-slate-700 bg-[#09111f] shadow-2xl sm:mx-auto sm:max-h-[88dvh] sm:max-w-5xl sm:rounded-lg"
      >
        <header className="flex flex-col gap-4 border-b border-slate-700 bg-[#0d1524] px-5 py-5 sm:flex-row sm:items-start sm:justify-between sm:px-6">
          <div className="min-w-0">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {game.leagues.map((league) => (
                <span
                  key={league}
                  className="rounded-full border border-[#f0c84b]/40 px-2.5 py-1 text-xs font-bold tracking-[0.14em] text-[#f0c84b]"
                >
                  {league}
                </span>
              ))}
              <span className="rounded-full border border-slate-600 px-2.5 py-1 text-xs font-bold tracking-[0.14em] text-slate-300">
                2026-27 QUICK GUIDE
              </span>
            </div>
            <h2
              id="rules-dialog-title"
              className="text-3xl font-black tracking-tight text-white sm:text-4xl"
            >
              {game.name} Rules
            </h2>
            <p
              id="rules-dialog-description"
              className="mt-2 max-w-2xl text-sm leading-6 text-slate-300"
            >
              One-page coach reference for match setup, roster checks, scoring,
              and common reminders. The PDF remains the source of truth.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#"
              onClick={(event) => event.preventDefault()}
              className="inline-flex h-10 items-center gap-2 rounded-md bg-[#f0c84b] px-4 text-sm font-extrabold text-[#09111f] transition hover:bg-[#ffd96a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={`Download ${game.name} rules PDF`}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Download PDF</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-600 text-slate-200 transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0c84b]"
              aria-label="Close rules quick guide"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </header>

        <div className="border-b border-slate-700 bg-[#09111f] px-5 py-3 sm:px-6">
          <div
            className="flex gap-2 overflow-x-auto"
            role="tablist"
            aria-label={`${game.name} rules sections`}
          >
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                active={activeTab === tab.id}
                onClick={() => onTabChange(tab.id)}
              >
                {tab.label}
              </TabButton>
            ))}
          </div>
        </div>

        <div className="overflow-y-auto px-5 py-6 sm:px-6">
          {activeTab === "quick" && <QuickGuidePanel game={game} />}
          {activeTab === "rotation" && <RotationPanel game={game} />}
          {activeTab === "full" && <FullRulesPanel game={game} />}

          {activeTab === "quick" && (
            <div className="mt-6 rounded-lg border border-[#f0c84b]/30 bg-[#f0c84b]/10 p-4 text-sm leading-6 text-slate-200">
              <strong className="text-[#f0c84b]">Design note:</strong> this quick
              view is intentionally short. Anything that needs legal precision,
              edge cases, or postseason policy should link to the full Game Guide
              PDF or the Competition Rulebook.
            </div>
          )}
        </div>

        <footer className="flex flex-col gap-3 border-t border-slate-700 bg-[#0d1524] px-5 py-4 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Last updated: August 10, 2026</p>
          <div className="flex flex-wrap gap-2">
            <a
              href="#"
              onClick={(event) => event.preventDefault()}
              className="rounded-md border border-slate-600 px-3 py-2 font-semibold text-slate-100 transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0c84b]"
            >
              Competition Rulebook
            </a>
            <a
              href="#"
              onClick={(event) => event.preventDefault()}
              className="rounded-md border border-slate-600 px-3 py-2 font-semibold text-slate-100 transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0c84b]"
            >
              LeagueOS Help
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default function GameRulesModalMockup() {
  const [selectedGame, setSelectedGame] = useState<Game>(selectedDefault);
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<RulesTab>(
    defaultTabForGame(selectedDefault),
  );

  return (
    <main className="min-h-screen bg-[#07101f] px-4 py-10 font-sans text-white sm:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-6">
          <div className="hidden h-px flex-1 bg-[#f0c84b]/35 sm:block" />
          <div className="text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
              Rules quick-view concept
            </p>
            <h1 className="text-3xl font-black uppercase tracking-[0.18em] text-[#f0c84b] sm:text-4xl">
              IHSEN Game Titles
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
              Click a title rule link to open a one-page coach guide with the
              full PDF available in the top corner.
            </p>
          </div>
          <div className="hidden h-px flex-1 bg-[#f0c84b]/35 sm:block" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {games.map((game) => (
            <GameCard
              key={game.name}
              game={game}
              active={game.name === selectedGame.name}
              onOpen={() => {
                setSelectedGame(game);
                setActiveTab(defaultTabForGame(game));
                setIsOpen(true);
              }}
            />
          ))}
        </div>
      </section>

      {isOpen && (
        <RulesDialog
          activeTab={activeTab}
          game={selectedGame}
          onClose={() => setIsOpen(false)}
          onTabChange={setActiveTab}
        />
      )}
    </main>
  );
}
