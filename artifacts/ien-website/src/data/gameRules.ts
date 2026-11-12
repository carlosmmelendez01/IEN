import { quickGuides, type QuickGuide } from "@/data/quickGuides";

export type LeagueKey = "ihsen" | "imsen" | "iuen";

export type RulesTab = "quick" | "rotation" | "full";

export type RulesetGame = {
  id: string;
  name: string;
  displayName?: string;
  type: string;
  color: string;
  platform: string;
  roster: string;
  format: string;
  matchWindow: string;
  leagues: string[];
  ruleDocHref?: string;
  ruleDocLabel?: string;
  ruleDocVersion?: string;
  note?: string;
  status?: string;
  contact?: {
    name: string;
    email: string;
  };
  quickGuide?: QuickGuide;
};

export type RotationRow = {
  week: string;
  values: string[];
};

export type RotationData = {
  tabLabel: string;
  navLabel?: string;
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

export const RULEBOOK_HREF = "/documents/ien-bylaws-general-rules-2026-27.pdf";
export const GAME_RULESET_LIBRARY_HREF = "/rules-policies#ruleset-library";
export const RULES_DOCUMENTS_AVAILABLE = true;
export const RULES_UPDATE_SHORT_LABEL = "Rules pending";
export const RULES_UPDATE_NOTICE =
  "Official 2026-27 IEN bylaws and available title rulesets are posted. The Schedule page and official league calendars are authoritative for each title's competition day; dates inside title rulesets describe the season window.";

export const rulesetGames: RulesetGame[] = [
  {
    id: "valorant",
    name: "Valorant",
    type: "Varsity 1A/2A + Club",
    color: "#ff5d67",
    platform: "PC",
    roster: "5 starters / 3 substitutes",
    format: "Regular season Bo1; playoffs Bo3",
    matchWindow: "Wednesdays, 5 PM ET / 4 PM CT",
    leagues: ["IHSEN"],
    ruleDocHref: "/documents/rulesets/valorant-bylaws-game-rules-2026-27.pdf",
    ruleDocVersion: "1.0",
    quickGuide: quickGuides.valorant,
  },
  {
    id: "apex-legends",
    name: "Apex Legends",
    type: "Varsity / JV",
    color: "#b56dff",
    platform: "PC, Xbox, PlayStation",
    roster: "3 starters / 2 substitutes",
    format: "3 Battle Royale rounds; placement + eliminations",
    matchWindow: "Mondays, 5 PM ET / 4 PM CT",
    leagues: ["IHSEN"],
    ruleDocHref: "/documents/rulesets/apex-legends-ruleset-2026-27.pdf",
    ruleDocVersion: "1.0",
    quickGuide: quickGuides["apex-legends"],
  },
  {
    id: "rocket-league",
    name: "Rocket League",
    type: "Varsity 1A/2A + Club",
    color: "#4da0ff",
    platform: "PC, Xbox, PlayStation, Nintendo Switch",
    roster: "3 starters / 2 substitutes",
    format: "Bo5 match series; championship Bo7",
    matchWindow: "IHSEN Mondays 5 PM ET / IMSEN Wednesdays 4:30 PM ET",
    leagues: ["IHSEN", "IMSEN"],
    ruleDocHref: "/documents/rulesets/rocket-league-bylaws-game-rules-2026-27.pdf",
    ruleDocVersion: "1.0",
    quickGuide: quickGuides["rocket-league"],
  },
  {
    id: "league-of-legends",
    name: "League of Legends",
    type: "Cross-state Competition",
    color: "#f5c542",
    platform: "PC",
    roster: "5 players",
    format: "Bo3 regular season/playoffs; Bo5 grand finals",
    matchWindow: "To be announced",
    leagues: ["IHSEN"],
    ruleDocHref: "/documents/rulesets/league-of-legends-trials-rule-book.pdf",
    ruleDocLabel: "Trials Rule Book",
    note: "Cross-state ISEA Trials competition.",
    quickGuide: quickGuides["league-of-legends"],
  },
  {
    id: "overwatch-2",
    name: "Overwatch 2",
    type: "Varsity 1A/2A + Club",
    color: "#ff8a24",
    platform: "PC, Xbox, PlayStation, Nintendo Switch",
    roster: "5 starters / 3 substitutes",
    format: "Competitive preset Bo5; grand finals Bo7",
    matchWindow: "Thursdays, 5 PM ET / 4 PM CT",
    leagues: ["IHSEN"],
    ruleDocHref: "/documents/rulesets/overwatch-2-ruleset-2026-27.pdf",
    ruleDocVersion: "1.0",
    quickGuide: quickGuides["overwatch-2"],
  },
  {
    id: "super-smash-bros",
    name: "Super Smash Bros.",
    displayName: "Super Smash Bros. Ultimate",
    type: "Varsity 1A/2A + Club",
    color: "#ff5eb8",
    platform: "Nintendo Switch",
    roster: "4 starters / 2 substitutes",
    format: "Bo3 4v4 crew-battle rounds; 12 stocks per team per round",
    matchWindow: "IHSEN Wednesdays 5 PM ET / IMSEN Tuesdays 4:30 PM ET",
    leagues: ["IHSEN", "IMSEN"],
    ruleDocHref: "/documents/rulesets/super-smash-bros-ultimate-bylaws-game-rules-2026-27.pdf",
    ruleDocVersion: "1.01",
    quickGuide: quickGuides["super-smash-bros"],
  },
  {
    id: "mario-kart-8-deluxe",
    name: "Mario Kart 8 Deluxe",
    type: "Varsity 1A/2A + Club",
    color: "#ff7676",
    platform: "Nintendo Switch or Switch 2",
    roster: "4 starters / 2 substitutes",
    format: "Bo3 4v4 Grand Prix sets; championship Bo5",
    matchWindow: "IHSEN Thursdays 5 PM ET / IMSEN Tuesdays 4:30 PM ET",
    leagues: ["IHSEN", "IMSEN"],
    ruleDocHref: "/documents/rulesets/mario-kart-8-deluxe-ruleset-2026-27.pdf",
    ruleDocVersion: "1.01",
    quickGuide: quickGuides["mario-kart-8-deluxe"],
  },
  {
    id: "minecraft",
    name: "Minecraft",
    type: "Varsity",
    color: "#23d37b",
    platform: "PC, Java Edition",
    roster: "4 starters / 2 substitutes",
    format: "Bo3 BedWars; up to three maps",
    matchWindow: "IHSEN Tuesdays 5 PM ET / IMSEN Wednesdays 4:30 PM ET",
    leagues: ["IHSEN", "IMSEN"],
    ruleDocHref: "/documents/rulesets/minecraft-ruleset-2026-27.pdf",
    ruleDocVersion: "1.1",
    quickGuide: quickGuides.minecraft,
  },
  {
    id: "marvel-rivals",
    name: "Marvel Rivals",
    type: "Varsity / JV",
    color: "#ff5275",
    platform: "PC, Xbox, PlayStation",
    roster: "6 starters / 3 substitutes",
    format: "Bo3 match series; championship Bo5",
    matchWindow: "IHSEN Tuesdays 5 PM ET / IMSEN Mondays 4:30 PM ET",
    leagues: ["IHSEN", "IMSEN"],
    ruleDocHref: "/documents/rulesets/marvel-rivals-bylaws-game-rules-2026-27.pdf",
    ruleDocVersion: "1.03",
    quickGuide: quickGuides["marvel-rivals"],
  },
  {
    id: "chess",
    name: "Chess",
    type: "Tournament",
    color: "#9ba7b7",
    platform: "Chess.com",
    roster: "1 active player / unlimited roster",
    format: "Swiss splits; Bo3 10+3 games",
    matchWindow: "IHSEN Tuesdays 5 PM ET / IMSEN Thursdays 4:30 PM ET",
    leagues: ["IHSEN", "IMSEN"],
    ruleDocHref: "/documents/rulesets/chess-ruleset-2026-27.pdf",
    ruleDocVersion: "1.0",
    quickGuide: quickGuides.chess,
  },
  {
    id: "tetris",
    name: "Tetris",
    type: "Tournament",
    color: "#14c8df",
    platform: "TETR.IO",
    roster: "Individual competitors",
    format: "Head-to-head rounds",
    matchWindow: "IHSEN Wednesdays 5 PM ET / IMSEN Thursdays 4:30 PM ET",
    leagues: ["IHSEN", "IMSEN"],
    ruleDocHref: "/documents/rulesets/tetris-ruleset-2026-27.pdf",
    ruleDocVersion: "1.0",
    quickGuide: quickGuides.tetris,
  },
  {
    id: "iracing",
    name: "iRacing",
    type: "Varsity / JV",
    color: "#f0b323",
    platform: "PC",
    roster: "Up to 5 drivers per school / no substitutes",
    format: "Weekly practice, qualifying, and 20-minute race; season points championship",
    matchWindow: "Thursdays, 5 PM ET / 4 PM CT; drivers meeting at 4:40 PM ET / 3:40 PM CT",
    leagues: ["IHSEN"],
    ruleDocHref: "/documents/rulesets/iracing-bylaws-game-rules-2026-27.pdf",
    ruleDocVersion: "1.0",
    note: "Individual season-points championship; the regular season extends through the first playoff week.",
    contact: {
      name: "Drew Rhoda",
      email: "rhodad@wl.k12.in.us",
    },
    quickGuide: quickGuides.iracing,
  },
  {
    id: "fortnite",
    name: "Fortnite",
    type: "Varsity + Club",
    color: "#b56dff",
    platform: "Cross-platform",
    roster: "3 starters / 2 substitutes",
    format: "Custom match scoring",
    matchWindow: "Mondays, 4:30 PM ET / 3:30 PM CT",
    leagues: ["IMSEN"],
    status: "Quick guide verified from the latest IEN update; official PDF not posted.",
    quickGuide: quickGuides.fortnite,
  },
  {
    id: "unified-rocket-league",
    name: "Rocket League",
    displayName: "Unified Rocket League",
    type: "Unified Spring",
    color: "#4da0ff",
    platform: "PC, Xbox, PlayStation, Nintendo Switch",
    roster: "3 starters (2 athletes / 1 partner) / 2 substitutes",
    format: "Bo5 match series; championship Bo7",
    matchWindow: "Tuesdays, 4:30 PM ET / 3:30 PM CT",
    leagues: ["IUEN"],
    ruleDocHref: "/documents/rulesets/unified-rocket-league-bylaws-game-rules-2026-27.pdf",
    ruleDocVersion: "1.0",
    quickGuide: quickGuides["unified-rocket-league"],
  },
  {
    id: "unified-super-smash-bros",
    name: "Super Smash Bros.",
    displayName: "Unified Super Smash Bros. Ultimate",
    type: "Unified Fall",
    color: "#ff5eb8",
    platform: "Nintendo Switch",
    roster: "4 starters (2 athletes / 2 partners) / 2 substitutes",
    format: "Bo3 4v4 crew-battle rounds; 12 stocks per team per round",
    matchWindow: "Tuesdays, 4:30 PM ET / 3:30 PM CT",
    leagues: ["IUEN"],
    ruleDocHref: "/documents/rulesets/unified-super-smash-bros-ultimate-bylaws-game-rules-2026-27.pdf",
    ruleDocVersion: "1.0",
    quickGuide: quickGuides["unified-super-smash-bros"],
  },
];

export const rotationData: Record<string, RotationData> = {
  "super-smash-bros": {
    tabLabel: "Stages",
    title: "Weekly Starter Stages",
    intro: "Set 1 uses the published starter stage for that week. Dates are shown as week-start dates from the league calendars.",
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
  "unified-super-smash-bros": {
    tabLabel: "Stages",
    navLabel: "Stages by Window",
    title: "Unified Starter Stage Rotation",
    intro: "IUEN Super Smash Bros. uses four regular-season match windows. Teams have two weeks to complete the games assigned to each window.",
    headers: ["Match Window", "Dates", "Starter Stage"],
    rows: [
      { week: "Window 1", values: ["Sep 22-Oct 5", "Pokemon Stadium 2"] },
      { week: "Window 2", values: ["Oct 20-Nov 2", "Battlefield"] },
      { week: "Window 3", values: ["Nov 3-16", "Smashville"] },
      { week: "Window 4", values: ["Nov 17-30", "Small Battlefield"] },
      { week: "Playoff Week", values: ["Dec 1-7", "Pokemon Stadium 2"] },
      { week: "Finals", values: ["Dec 12", "Pokemon Stadium 2"] },
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
  "mario-kart-8-deluxe": {
    tabLabel: "Tracks",
    title: "Weekly Cup Rotation",
    intro: "Each week uses one assigned Grand Prix cup. Dates are shown as week-start dates from the league calendars.",
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
      { week: "Playoffs Week 1", values: ["Feb 22", "Nov 16", "Turnip Cup (DLC)"] },
      { week: "Playoffs Week 2", values: ["Mar 1", "Nov 30", "Lucky Cat Cup (DLC)"] },
      { week: "Playoffs Week 3", values: ["Mar 8", "Dec 7", "Rock Cup (DLC)"] },
      { week: "Playoffs Week 4", values: ["Mar 15", "-", "Fruit Cup (DLC)"] },
      { week: "Finals", values: ["Apr 24", "Dec 12", "Rainbow Road 3DS, Rainbow Road, SNES Rainbow Road, Rainbow Road Wii"] },
    ],
    note: "If the wrong track is selected before the race begins, restart and select the correct track. If the race is completed, results stand.",
  },
  "marvel-rivals": {
    tabLabel: "Maps",
    navLabel: "Weekly Maps",
    title: "Marvel Rivals Weekly Map Rotation",
    intro: "Play each week's maps from left to right. The Convergence map is played only if the Best-of-Three series reaches a third map.",
    headers: ["Week", "Domination", "Convoy", "Convergence"],
    rows: [
      { week: "Week 1", values: ["Birnin T'Challa", "Thebes", "Central Park"] },
      { week: "Week 2", values: ["Krakoa", "Spider-Islands", "Hall of Djalia"] },
      { week: "Week 3", values: ["Celestial Husk", "Yggdrasill Path", "Lower Manhattan"] },
      { week: "Week 4", values: ["God Quarry", "Midtown", "Heart of Heaven"] },
      { week: "Week 5", values: ["Hell's Heaven", "Arakko", "Symbiotic Surface"] },
      { week: "Week 6", values: ["Royal Palace", "Museum of Contemplation", "Shin-Shibuya"] },
      { week: "Week 7", values: ["Birnin T'Challa", "Midtown", "Heart of Heaven"] },
      { week: "Week 8", values: ["Celestial Husk", "Thebes", "Lower Manhattan"] },
      { week: "Week 9", values: ["God Quarry", "Spider-Islands", "Hall of Djalia"] },
      { week: "Week 10", values: ["Krakoa", "Yggdrasill Path", "Central Park"] },
    ],
    secondaryTitle: "Playoff Map Rotation",
    secondaryHeaders: ["Round", "Domination", "Convoy", "Convergence", "Domination", "Convoy"],
    secondaryRows: [
      { week: "Round of 32", values: ["Birnin T'Challa", "Yggdrasill Path", "Lower Manhattan", "-", "-"] },
      { week: "Round of 16", values: ["Royal Palace", "Arakko", "Shin-Shibuya", "-", "-"] },
      { week: "Round of 8", values: ["God Quarry", "Midtown", "Heart of Heaven", "-", "-"] },
      { week: "Semifinals", values: ["Hell's Heaven", "Thebes", "Symbiotic Surface", "-", "-"] },
      { week: "Finals (Bo5)", values: ["Celestial Husk", "Spider-Islands", "Central Park", "Krakoa*", "Museum of Contemplation*"] },
    ],
    note: "Map bans do not apply to scheduled matches. Finals maps marked with an asterisk are played only if necessary.",
  },
  "overwatch-2": {
    tabLabel: "Maps",
    title: "Regular Season Map Rotation",
    intro: "The weekly rotation keeps each match predictable for coaches while still exposing teams to multiple game modes.",
    headers: ["Week", "IHSEN Week Starts", "Control", "Escort", "Flashpoint", "Push", "Hybrid"],
    rows: [
      { week: "1 & 7", values: ["Nov 2 / Jan 11", "Nepal", "Watchpoint: Gibraltar", "Suravasa", "Colosseo", "Midtown"] },
      { week: "2 & 8", values: ["Nov 9 / Jan 25", "Lijiang Tower", "Junkertown", "New Junk City", "Esperanca", "King's Row"] },
      { week: "3 & 9", values: ["Nov 16 / Feb 1", "Ilios", "Circuit Royal", "Suravasa", "Runasapi", "Paraiso"] },
      { week: "4 & 10", values: ["Nov 30 / Feb 8", "Oasis", "Shambali Monastery", "New Junk City", "New Queen St", "Eichenwalde"] },
      { week: "5 & 11", values: ["Dec 7 / TBD", "Samoa", "Dorado", "Suravasa", "Colosseo", "Numbani"] },
      { week: "6 & 12", values: ["Jan 4 / TBD", "Busan", "Havanna", "New Junk City", "Runasapi", "Hollywood"] },
    ],
    secondaryTitle: "Playoff Map Rotation",
    secondaryHeaders: ["Round", "IHSEN Week Starts", "Control", "Escort", "Flashpoint", "Push", "Hybrid"],
    secondaryRows: [
      { week: "Round 1", values: ["Feb 22", "Busan", "Watchpoint: Gibraltar", "New Junk City", "Colosseo", "Hollywood"] },
      { week: "Round 2", values: ["Mar 1", "Ilios", "Circuit Royal", "Suravasa", "Runasapi", "Midtown"] },
      { week: "Round 3", values: ["Mar 8", "Oasis", "Dorado", "New Junk City", "New Queen St", "Paraiso"] },
      { week: "Round 4", values: ["Mar 15", "Lijiang Tower", "Junkertown", "Suravasa", "Esperanca", "Eichenwalde"] },
      { week: "Finals", values: ["Apr 24", "Ilios", "Circuit Royal", "New Junk City", "Runasapi", "King's Row"] },
    ],
    note: "Match structure follows Control, Escort, Flashpoint, Push, Hybrid. Push and Hybrid are played only if necessary.",
  },
};

const rulesetIdByGameName: Record<string, string> = {
  "Apex Legends": "apex-legends",
  Chess: "chess",
  Fortnite: "fortnite",
  iRacing: "iracing",
  "League of Legends": "league-of-legends",
  "Mario Kart 8 Deluxe": "mario-kart-8-deluxe",
  "Marvel Rivals": "marvel-rivals",
  Minecraft: "minecraft",
  "Overwatch 2": "overwatch-2",
  "Rocket League": "rocket-league",
  "Super Smash Bros.": "super-smash-bros",
  Tetris: "tetris",
  Valorant: "valorant",
};

export function getRulesetGame(gameName: string, league: LeagueKey = "ihsen") {
  if (league === "iuen" && gameName === "Rocket League") {
    return rulesetGames.find((game) => game.id === "unified-rocket-league") ?? rulesetGames[0];
  }

  if (league === "iuen" && gameName === "Super Smash Bros.") {
    return rulesetGames.find((game) => game.id === "unified-super-smash-bros") ?? rulesetGames[0];
  }

  const id = rulesetIdByGameName[gameName];
  return rulesetGames.find((game) => game.id === id) ?? rulesetGames[0];
}

export function getRulesetPath(gameName: string, league: LeagueKey = "ihsen") {
  return `/rules-policies#ruleset-${getRulesetGame(gameName, league).id}`;
}
