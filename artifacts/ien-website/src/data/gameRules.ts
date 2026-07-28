export type LeagueKey = "ihsen" | "imsen" | "iuen";

export type RulesTab = "quick" | "rotation" | "full";

export type RulesetGame = {
  id: string;
  name: string;
  type: string;
  color: string;
  platform: string;
  roster: string;
  format: string;
  matchWindow: string;
  leagues: string[];
  ruleDocHref?: string;
  status?: string;
};

export type RotationRow = {
  week: string;
  values: string[];
};

export type RotationData = {
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

export const RULEBOOK_HREF = "";
export const GAME_RULESET_LIBRARY_HREF = "/leagues#rules-resources";
export const RULES_DOCUMENTS_AVAILABLE = false;
export const RULES_UPDATE_SHORT_LABEL = "Currently being updated";
export const RULES_UPDATE_NOTICE =
  "IEN rulesets, bylaws, and general rules are currently being updated for the 2026-27 season. Final documents will be posted here when they are ready.";

export const rulesetGames: RulesetGame[] = [
  {
    id: "valorant",
    name: "Valorant",
    type: "Varsity 1A/2A + Club",
    color: "#ff5d67",
    platform: "PC",
    roster: "5 starters / 2 substitutes",
    format: "Best of 1 regular season",
    matchWindow: "Wednesdays, 5 PM ET / 4 PM CT",
    leagues: ["IHSEN"],
  },
  {
    id: "apex-legends",
    name: "Apex Legends",
    type: "Varsity 1A/2A + Club",
    color: "#b56dff",
    platform: "PC",
    roster: "3 starters / 2 substitutes",
    format: "Placement + elimination scoring",
    matchWindow: "Mondays, 5 PM ET / 4 PM CT",
    leagues: ["IHSEN"],
    status: "Official ruleset scheduled for July 2026",
  },
  {
    id: "rocket-league",
    name: "Rocket League",
    type: "Varsity 1A/2A + Club",
    color: "#4da0ff",
    platform: "Cross-platform",
    roster: "3 starters / 2 substitutes",
    format: "Best of 5 match series",
    matchWindow: "IHSEN Mondays 5 PM ET / IMSEN Wednesdays 4:30 PM ET",
    leagues: ["IHSEN", "IMSEN"],
  },
  {
    id: "league-of-legends",
    name: "League of Legends",
    type: "Varsity 1A/2A + Club",
    color: "#f5c542",
    platform: "PC",
    roster: "5 starters / 2 substitutes",
    format: "Best of 1 regular season",
    matchWindow: "Tuesdays, 5 PM ET / 4 PM CT",
    leagues: ["IHSEN"],
  },
  {
    id: "overwatch-2",
    name: "Overwatch 2",
    type: "Varsity 1A/2A + Club",
    color: "#ff8a24",
    platform: "Cross-platform",
    roster: "5 starters / 2 substitutes",
    format: "Map-set match format",
    matchWindow: "Thursdays, 5 PM ET / 4 PM CT",
    leagues: ["IHSEN"],
  },
  {
    id: "super-smash-bros",
    name: "Super Smash Bros.",
    type: "Varsity 1A/2A + Club",
    color: "#ff5eb8",
    platform: "Nintendo Switch",
    roster: "4 starters / 2 substitutes",
    format: "Crew battle format",
    matchWindow: "IHSEN Wednesdays 5 PM ET / IMSEN Tuesdays 4:30 PM ET",
    leagues: ["IHSEN", "IMSEN"],
  },
  {
    id: "mario-kart-8-deluxe",
    name: "Mario Kart 8 Deluxe",
    type: "Varsity 1A/2A + Club",
    color: "#ff7676",
    platform: "Nintendo Switch",
    roster: "4 starters / 2 substitutes",
    format: "Cup-based team scoring",
    matchWindow: "IHSEN Thursdays 5 PM ET / IMSEN Tuesdays 4:30 PM ET",
    leagues: ["IHSEN", "IMSEN"],
  },
  {
    id: "minecraft",
    name: "Minecraft",
    type: "Varsity 1A/2A",
    color: "#23d37b",
    platform: "PC",
    roster: "Varies by format",
    format: "Challenge-based scoring",
    matchWindow: "IHSEN Tuesdays 5 PM ET / IMSEN Wednesdays 4:30 PM ET",
    leagues: ["IHSEN", "IMSEN"],
  },
  {
    id: "marvel-rivals",
    name: "Marvel Rivals",
    type: "Varsity 1A/2A + Club",
    color: "#ff5275",
    platform: "PC",
    roster: "6 starters / 2 substitutes",
    format: "Best of 3 map series",
    matchWindow: "IHSEN Tuesdays 5 PM ET / IMSEN Mondays 4:30 PM ET",
    leagues: ["IHSEN", "IMSEN"],
  },
  {
    id: "chess",
    name: "Chess",
    type: "Tournament",
    color: "#9ba7b7",
    platform: "Chess.com",
    roster: "Individual competitors",
    format: "Swiss-style tournament",
    matchWindow: "IHSEN Tuesdays 5 PM ET / IMSEN Thursdays 4:30 PM ET",
    leagues: ["IHSEN", "IMSEN"],
  },
  {
    id: "tetris",
    name: "Tetris",
    type: "Tournament",
    color: "#14c8df",
    platform: "Jstris / TETR.IO",
    roster: "Individual competitors",
    format: "Head-to-head rounds",
    matchWindow: "IHSEN Wednesdays 5 PM ET / IMSEN Thursdays 4:30 PM ET",
    leagues: ["IHSEN", "IMSEN"],
  },
  {
    id: "iracing",
    name: "iRacing",
    type: "Tournament",
    color: "#f0b323",
    platform: "PC",
    roster: "Individual drivers",
    format: "Race event scoring",
    matchWindow: "Thursdays, 5 PM ET / 4 PM CT",
    leagues: ["IHSEN"],
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
  },
  {
    id: "unified-rocket-league",
    name: "Rocket League",
    type: "Unified Spring",
    color: "#4da0ff",
    platform: "Cross-platform",
    roster: "3 starters / 2 substitutes",
    format: "Best of 5 match series",
    matchWindow: "Tuesdays, 4:30 PM ET / 3:30 PM CT",
    leagues: ["IUEN"],
  },
  {
    id: "unified-super-smash-bros",
    name: "Super Smash Bros.",
    type: "Unified Fall",
    color: "#ff5eb8",
    platform: "Nintendo Switch",
    roster: "4 starters / 2 substitutes",
    format: "Crew battle format",
    matchWindow: "Tuesdays, 4:30 PM ET / 3:30 PM CT",
    leagues: ["IUEN"],
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
  return `/leagues#ruleset-${getRulesetGame(gameName, league).id}`;
}
