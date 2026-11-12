import { useMemo, useState } from "react";
import {
  AlertTriangle,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  ClipboardCheck,
  Clock3,
  Download,
  ExternalLink,
  FileWarning,
  Gamepad2,
  ListChecks,
  Monitor,
  Printer,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";

type AuditStatus = "ready" | "review" | "blocked";

type Guide = {
  id: string;
  name: string;
  displayName?: string;
  color: string;
  leagues: string[];
  competition: string;
  version: string;
  status: AuditStatus;
  statusLabel: string;
  sourceNote?: string;
  facts: Array<{ label: string; value: string }>;
  sections?: Array<{
    title: string;
    eyebrow: string;
    items: string[];
  }>;
  callout?: string;
};

const guides: Guide[] = [
  {
    id: "valorant",
    name: "Valorant",
    color: "#ff5d67",
    leagues: ["IHSEN"],
    competition: "Varsity 1A/2A + Club",
    version: "v1.0",
    status: "ready",
    statusLabel: "Guide verified",
    facts: [
      { label: "Platform", value: "PC" },
      { label: "Roster", value: "5 starters / 3 substitutes" },
      { label: "Regular season", value: "Best-of-1" },
      { label: "Match length", value: "45-90 minutes" },
      { label: "Playoffs / finals", value: "Best-of-3" },
      { label: "Win condition", value: "First to 13 rounds, win by 2" },
    ],
    sections: [
      {
        eyebrow: "Lobby checklist",
        title: "Before the match",
        items: [
          "Create a closed Custom lobby in Standard mode with Tournament Mode on.",
          "Turn cheats off and Overtime Win by Two on; players show corpses and hide blood.",
          "Use the current Riot competitive map pool and confirm all five eligible starters.",
        ],
      },
      {
        eyebrow: "Series flow",
        title: "How it plays",
        items: [
          "Regular season is one map; postseason is a Best-of-3 series.",
          "Teams switch Attacker and Defender sides after the first 12 rounds.",
          "At 12-12, continue with alternating-side overtime until a winner is determined.",
        ],
      },
      {
        eyebrow: "Result handling",
        title: "Win & report",
        items: [
          "The team that wins the required number of maps wins the match.",
          "A match win earns 1 standings point; a loss earns 0.",
          "Disabled agents and newly released agents within the two-week restriction are ineligible.",
        ],
      },
    ],
  },
  {
    id: "apex-legends",
    name: "Apex Legends",
    color: "#b56dff",
    leagues: ["IHSEN"],
    competition: "Varsity / JV",
    version: "v1.0",
    status: "ready",
    statusLabel: "Guide verified",
    facts: [
      { label: "Platform", value: "PC, Xbox, PlayStation" },
      { label: "Roster", value: "3 active / 2 substitutes" },
      { label: "Regular season", value: "3 Battle Royale rounds" },
      { label: "Match length", value: "About 75-90 minutes" },
      { label: "Scoring", value: "Placement + eliminations" },
      { label: "Championship", value: "30-point Match Point, max 7 rounds" },
    ],
    sections: [
      {
        eyebrow: "Admin-run lobby",
        title: "Before the match",
        items: [
          "Join the administrator-controlled Tournament Mode custom lobby; teams do not self-host.",
          "Use the assigned team slot and postseason POI when one is issued.",
          "Enable cross-platform play and Anonymous Mode when the current client supports it.",
        ],
      },
      {
        eyebrow: "Three-round series",
        title: "How it plays",
        items: [
          "Complete three Battle Royale rounds on the approved map rotation.",
          "Add placement points and elimination points across all three rounds.",
          "The highest cumulative raw score wins the weekly match day.",
        ],
      },
      {
        eyebrow: "Standings",
        title: "Win & report",
        items: [
          "Weekly finish converts to League Points used for season standings.",
          "Weekly ties break by best single-round score, placement, then eliminations.",
          "Postseason qualification uses League Points and seeded lobbies with a POI draft.",
        ],
      },
    ],
    callout: "Apex is the clearest example of why the current generic ‘home team creates the lobby’ copy must be removed.",
  },
  {
    id: "rocket-league",
    name: "Rocket League",
    color: "#4da0ff",
    leagues: ["IHSEN", "IMSEN"],
    competition: "Varsity 1A/2A + Club",
    version: "v1.0",
    status: "ready",
    statusLabel: "Guide verified",
    facts: [
      { label: "Platform", value: "PC, Xbox, PlayStation, Switch" },
      { label: "Roster", value: "3 starters / 2 substitutes" },
      { label: "Regular season", value: "Best-of-5" },
      { label: "Game length", value: "5 minutes" },
      { label: "Championship", value: "Best-of-7" },
      { label: "Server", value: "US-East" },
    ],
    sections: [
      {
        eyebrow: "Private match",
        title: "Before the match",
        items: [
          "Host a password-protected 3v3 private match on DFH Stadium.",
          "Use no bots, no mutators, a five-minute timer, and US-East servers.",
          "Confirm cross-platform compatibility and all three eligible starters before kickoff.",
        ],
      },
      {
        eyebrow: "Series flow",
        title: "How it plays",
        items: [
          "Regular season and playoffs are Best-of-5; first to three game wins takes the match.",
          "The championship is Best-of-7; first to four game wins takes the match.",
          "A tied game goes directly to sudden-death overtime; the next goal wins.",
        ],
      },
      {
        eyebrow: "Result handling",
        title: "Win & report",
        items: [
          "The series winner earns 1 standings point; the loser earns 0.",
          "Continue directly to the next game until one team clinches the series.",
          "Private-match admin controls may be used only when an IEN official directs it.",
        ],
      },
    ],
  },
  {
    id: "league-of-legends",
    name: "League of Legends",
    color: "#f5c542",
    leagues: ["IHSEN"],
    competition: "Cross-state Competition",
    version: "ISEA Trials",
    status: "ready",
    statusLabel: "Guide verified",
    facts: [
      { label: "Platform", value: "PC" },
      { label: "Roster", value: "5 active players" },
      { label: "Regular season", value: "Best-of-3" },
      { label: "Grand finals", value: "Best-of-5" },
      { label: "Mode", value: "Tournament Draft" },
      { label: "Win condition", value: "Destroy the enemy Nexus" },
    ],
    sections: [
      {
        eyebrow: "Account & draft",
        title: "Before the match",
        items: [
          "Connect each Riot in-game name to the player’s LeagueOS profile.",
          "Send the full starting roster and registered substitutes to the opponent 10 minutes early.",
          "Use Tournament Draft; custom lobbies are permitted when tournament codes are unavailable.",
        ],
      },
      {
        eyebrow: "Series flow",
        title: "How it plays",
        items: [
          "Regular season and playoffs are Best-of-3; first to two game wins takes the match.",
          "Grand Finals are Best-of-5; first to three game wins takes the match.",
          "A game of record starts on combat/objective interaction, opposing vision, or at 2:00.",
        ],
      },
      {
        eyebrow: "Pause & substitution",
        title: "Coach reminders",
        items: [
          "Substitutions occur only between games; never replace a player mid-game.",
          "Use /pause outside active engagements and immediately explain the reason in Match Lobby Chat.",
          "A pause longer than 10 minutes requires approval or may result in a game forfeit.",
        ],
      },
    ],
  },
  {
    id: "overwatch-2",
    name: "Overwatch 2",
    color: "#ff8a24",
    leagues: ["IHSEN"],
    competition: "Varsity 1A/2A + Club",
    version: "v1.0 + Nov. 3 update",
    status: "ready",
    statusLabel: "Guide verified",
    facts: [
      { label: "Platform", value: "PC, Xbox, PlayStation, Switch" },
      { label: "Roster", value: "5 starters / 3 substitutes" },
      { label: "Regular season", value: "Competitive preset Best-of-5" },
      { label: "Match length", value: "1-2.5 hours" },
      { label: "Playoffs", value: "Best-of-5 through semifinals" },
      { label: "Grand finals", value: "Best-of-7" },
    ],
    sections: [
      {
        eyebrow: "Lobby checklist",
        title: "Before the match",
        items: [
          "Create a custom lobby and import IEN lobby code 5Z36M.",
          "Enable perks and confirm the current approved competitive map pool.",
          "Field 1 Tank, 2 Damage, and 2 Support players at the start of every map.",
        ],
      },
      {
        eyebrow: "Map order",
        title: "How it plays",
        items: [
          "Play Control, Escort, Flashpoint, then Push and Hybrid if necessary.",
          "The first team to win three maps wins a Best-of-5 series.",
          "Substitutions may happen between maps, never during an active map except under approved procedures.",
          "A match win earns 1 standings point; a loss earns 0.",
        ],
      },
      {
        eyebrow: "Before every map",
        title: "Hero bans",
        items: [
          "Each team bans one hero; neither team may play either banned hero on that map.",
          "The home team bans first on Map 1. After that, the team that lost the previous map bans first.",
          "Post both bans in Match Chat before the scheduled start. The second ban must be from a different role.",
          "Choose new bans each map, and do not repeat a hero your team already banned during the match.",
        ],
      },
    ],
  },
  {
    id: "super-smash-bros",
    name: "Super Smash Bros.",
    displayName: "Super Smash Bros. Ultimate",
    color: "#ff5eb8",
    leagues: ["IHSEN", "IMSEN"],
    competition: "Varsity 1A/2A + Club",
    version: "v1.01",
    status: "ready",
    statusLabel: "Guide verified",
    facts: [
      { label: "Platform", value: "Nintendo Switch" },
      { label: "Active crew", value: "4 players" },
      { label: "Match format", value: "Best-of-3 crew-battle rounds" },
      { label: "Team stocks", value: "12 per round (4 × 3)" },
      { label: "Round win", value: "Eliminate all 12 opponent stocks" },
      { label: "Match win", value: "First team to win 2 rounds" },
    ],
    sections: [
      {
        eyebrow: "Ruleset checklist",
        title: "Before the match",
        items: [
          "Use 3 stocks, 7 minutes, items off, stage hazards off, and launch rate 1.0x.",
          "Turn team attack on and use the published starter stage for the active week.",
          "Confirm the four-player crew order and all character selections before play.",
        ],
      },
      {
        eyebrow: "Crew flow",
        title: "How it plays",
        items: [
          "Every round begins with 12 stocks per team: four players with three stocks each.",
          "Players compete 1v1; the winner keeps remaining stocks for the next opponent.",
          "A defeated player is replaced in crew order until one team has lost all 12 stocks.",
          "That ends the round. Reset both teams to 12 stocks, then begin the next round.",
        ],
      },
      {
        eyebrow: "Tie & conduct",
        title: "Win & report",
        items: [
          "The match is Best-of-3 rounds; the first team to win two rounds wins the match.",
          "Play Round 2 after Round 1. Play Round 3 only if the teams are tied 1–1.",
          "A simultaneous final-stock tie uses stocks, then lower damage, then a 1-stock/3-minute tiebreaker.",
          "Taunting is prohibited except for the limited utility taunts listed in the full rules.",
        ],
      },
    ],
  },
  {
    id: "mario-kart-8-deluxe",
    name: "Mario Kart 8 Deluxe",
    color: "#ff7676",
    leagues: ["IHSEN", "IMSEN"],
    competition: "Varsity 1A/2A + Club",
    version: "v1.01",
    status: "ready",
    statusLabel: "Guide verified",
    facts: [
      { label: "Platform", value: "Nintendo Switch / Switch 2" },
      { label: "Roster", value: "4 starters / 2 substitutes" },
      { label: "Regular season", value: "Best-of-3 Grand Prix sets" },
      { label: "One set", value: "4 races on the assigned cup" },
      { label: "Championship", value: "Best-of-5 sets" },
      { label: "Race settings", value: "150cc, normal items, no COM" },
    ],
    sections: [
      {
        eyebrow: "Lobby checklist",
        title: "Before the match",
        items: [
          "Use Team Game 4v4, 150cc Race, normal items, no COM racers, and all vehicles permitted.",
          "Select the week’s assigned Grand Prix cup and play its four tracks in order.",
          "Confirm all four starters; substitutions are allowed only between sets.",
        ],
      },
      {
        eyebrow: "Set flow",
        title: "How it plays",
        items: [
          "Add all four player scores across the four races to determine the set winner.",
          "Regular season is Best-of-3 sets; the first team to win two sets wins the match.",
          "The State Championship is Best-of-5 sets; the first team to win three sets wins.",
        ],
      },
      {
        eyebrow: "Result handling",
        title: "Win & report",
        items: [
          "Report the match in LeagueOS and retain race-result screenshots for verification.",
          "A tied third set produces a tied regular-season match unless administrators publish another procedure.",
          "If a wrong track is caught before racing, restart; completed race results stand.",
        ],
      },
    ],
  },
  {
    id: "minecraft",
    name: "Minecraft",
    color: "#23d37b",
    leagues: ["IHSEN", "IMSEN"],
    competition: "Varsity",
    version: "v1.1",
    status: "ready",
    statusLabel: "Guide verified",
    facts: [
      { label: "Platform", value: "PC, Java Edition 1.8.9" },
      { label: "Roster", value: "4 starters / 2 substitutes" },
      { label: "Format", value: "Best-of-3 BedWars" },
      { label: "Map order", value: "Undergrowth / Savoy / Riptide" },
      { label: "Server", value: "CompMC private, Chicago" },
      { label: "Playoffs / finals", value: "Single elimination / Bo3" },
    ],
    sections: [
      {
        eyebrow: "Server checklist",
        title: "Before the match",
        items: [
          "Use Minecraft Java Edition 1.8.9 on the CompMC private server in Chicago.",
          "Team 1, the home team, hosts the lobby and confirms four eligible starters.",
          "Player-perspective streams are allowed only with at least a three-minute delay.",
        ],
      },
      {
        eyebrow: "Map order",
        title: "How it plays",
        items: [
          "Play Undergrowth, then Savoy, then Riptide if a third map is needed.",
          "A map ends when one team remains alive or the game timer expires.",
          "At time, a sole surviving bed wins; otherwise compare remaining players, then first bed destroyed.",
        ],
      },
      {
        eyebrow: "No point system",
        title: "Win & report",
        items: [
          "The v1.1 rules removed cumulative points for kills, beds, and map wins.",
          "If neither team destroys a bed, play the next map as a head-to-head tiebreaker until the Bo3 has a winner.",
          "Submit the final result in LeagueOS the same day the match is completed.",
        ],
      },
    ],
    callout: "This is the proposed replacement for the currently generic Minecraft quick guide.",
  },
  {
    id: "marvel-rivals",
    name: "Marvel Rivals",
    color: "#ff5275",
    leagues: ["IHSEN", "IMSEN"],
    competition: "Varsity / JV",
    version: "v1.03",
    status: "ready",
    statusLabel: "Guide verified",
    facts: [
      { label: "Platform", value: "PC, Xbox, PlayStation" },
      { label: "Roster", value: "6 starters / 3 substitutes" },
      { label: "Regular season", value: "Best-of-3" },
      { label: "Map length", value: "15-30 minutes" },
      { label: "Finals", value: "Best-of-5" },
      { label: "Server", value: "NA North Virginia" },
    ],
    sections: [
      {
        eyebrow: "Tournament room",
        title: "Before the match",
        items: [
          "Use NA North Virginia, Lock Room, Invitation Only, and no public spectator access.",
          "Choose Tournament (Basic) ban/pick, enable player/coach pauses, and disable Balance Latency.",
          "Use default skins; coaches may use designated lobby slots to spectate.",
        ],
      },
      {
        eyebrow: "Scheduled maps",
        title: "How it plays",
        items: [
          "Play the published Domination map, then Convoy, then Convergence if necessary.",
          "The first team to win two maps wins the Best-of-3 series.",
          "The loser of the previous map selects the next side; substitutions happen only between maps.",
        ],
      },
      {
        eyebrow: "Result handling",
        title: "Win & report",
        items: [
          "A match win earns 1 standings point; a loss earns 0.",
          "If the three scheduled maps do not determine a winner, use a random Domination tiebreaker map.",
          "Finals are Best-of-5 with scheduled maps 4 and 5 played only if needed.",
        ],
      },
    ],
  },
  {
    id: "chess",
    name: "Chess",
    color: "#aeb9c8",
    leagues: ["IHSEN", "IMSEN"],
    competition: "Tournament",
    version: "v1.0",
    status: "review",
    statusLabel: "Document metadata conflict",
    sourceNote: "The cover says v1.0; the inner document information table says version ‘none.’",
    facts: [
      { label: "Platform", value: "Chess.com" },
      { label: "Roster", value: "1 active / unlimited roster" },
      { label: "Regular season", value: "Swiss splits, Best-of-3" },
      { label: "Time control", value: "10+3, unranked" },
      { label: "Playoffs", value: "Top 32, single elimination Bo3" },
      { label: "Finals / third", value: "Best-of-5" },
    ],
    sections: [
      {
        eyebrow: "Challenge setup",
        title: "Before the match",
        items: [
          "Create an unranked custom Chess.com challenge with 10+3 time control.",
          "Use LeagueOS Match Chat for the invitation, coordination, and result verification.",
          "Respond within five minutes; failure to communicate may result in a round forfeit.",
        ],
      },
      {
        eyebrow: "Swiss match",
        title: "How it plays",
        items: [
          "Regular-season splits use at least six Swiss rounds; records reset between splits.",
          "Each pairing is Best-of-3; the first player to two game wins takes the match.",
          "Chess.com assigns colors automatically and standard platform rules govern play.",
        ],
      },
      {
        eyebrow: "Draws & standings",
        title: "Win & report",
        items: [
          "Draws are allowed; at 1.5-1.5, play additional 10+3 games until there is a winner.",
          "Standings points are awarded from placement at the end of each split.",
          "The top 32 advance to Bo3 playoffs; finals and the third-place match are Bo5.",
        ],
      },
    ],
  },
  {
    id: "tetris",
    name: "Tetris",
    color: "#14c8df",
    leagues: ["IHSEN", "IMSEN"],
    competition: "Tournament",
    version: "v1.0",
    status: "review",
    statusLabel: "Document metadata conflict",
    sourceNote: "The cover says v1.0; the inner document information table says version ‘none.’",
    facts: [
      { label: "Platform", value: "TETR.IO" },
      { label: "Roster", value: "1 active / unlimited roster" },
      { label: "Regular season", value: "Swiss, Best-of-5" },
      { label: "Match length", value: "10-20 minutes" },
      { label: "Early playoffs", value: "Best-of-5" },
      { label: "Semis / finals", value: "Best-of-7" },
    ],
    sections: [
      {
        eyebrow: "Room setup",
        title: "Before the match",
        items: [
          "Create a Multiplayer → Custom Game → Private Room and share its Room ID in LeagueOS.",
          "Use unranked 1v1 with default rotation and scoring settings.",
          "Disable ALL-MINI+ and enable T-SPINS+ before saving the room configuration.",
        ],
      },
      {
        eyebrow: "Swiss match",
        title: "How it plays",
        items: [
          "Regular season and early playoffs are Best-of-5; first to three game wins takes the match.",
          "Semifinals and finals are Best-of-7; first to four game wins takes the match.",
          "Weekly Swiss pairings match players with similar records while every competitor continues playing.",
        ],
      },
      {
        eyebrow: "Standings",
        title: "Win & report",
        items: [
          "Report the result on the LeagueOS Match Page using Match Chat for coordination.",
          "Placement at the end of the competition determines standings points.",
          "Streaming is permitted without an additional game-specific restriction.",
        ],
      },
    ],
  },
  {
    id: "iracing",
    name: "iRacing",
    color: "#f0b323",
    leagues: ["IHSEN"],
    competition: "Varsity / JV",
    version: "v1.0",
    status: "ready",
    statusLabel: "Guide verified",
    facts: [
      { label: "Platform", value: "PC" },
      { label: "Roster", value: "Up to 5 drivers / no substitutes" },
      { label: "Race night", value: "Practice, qualifying, 20-minute race" },
      { label: "Session length", value: "About 1 hour" },
      { label: "Championship", value: "Season points" },
      { label: "Drivers meeting", value: "4:40 PM ET / 3:40 PM CT" },
    ],
    sections: [
      {
        eyebrow: "Registration & meeting",
        title: "Before the race",
        items: [
          "Complete LeagueOS registration, the IEN form, and the iRacing league join request.",
          "Use real names, approved liveries, and the week’s Mazda MX-5 or Street Stock content.",
          "Attend the drivers meeting with camera on; missing it makes a driver ineligible to race.",
        ],
      },
      {
        eyebrow: "Points race",
        title: "How it scores",
        items: [
          "iRacing combines qualifying, race-finish, and bonus points for the official result.",
          "Qualifying pays 15, 10, and 5 for the top three, then 4 through 1 for fourth through seventh.",
          "Bonuses: 5 fastest lap, 5 most laps led, and 1 for leading a lap; maximum 76 points.",
        ],
      },
      {
        eyebrow: "Safety & eligibility",
        title: "Coach reminders",
        items: [
          "No substitutes are allowed; a missed race forfeits that week’s available points.",
          "First-season drivers use the official yellow rookie stripe on approved liveries.",
          "Incident thresholds can trigger drive-throughs at 8x and 12x and disqualification at 16x.",
        ],
      },
    ],
  },
  {
    id: "unified-rocket-league",
    name: "Unified Rocket League",
    color: "#4da0ff",
    leagues: ["IUEN"],
    competition: "Unified Spring",
    version: "v1.0",
    status: "ready",
    statusLabel: "Guide verified",
    facts: [
      { label: "Platform", value: "PC, Xbox, PlayStation, Switch" },
      { label: "Roster", value: "3 starters / 2 substitutes" },
      { label: "Regular season", value: "Best-of-5" },
      { label: "Game length", value: "5 minutes" },
      { label: "Championship", value: "Best-of-7" },
      { label: "Server", value: "US-East" },
    ],
    sections: [
      {
        eyebrow: "Unified lineup",
        title: "Before the match",
        items: [
          "Field exactly two athletes and one unified partner in the active three-player lineup.",
          "Host a password-protected 3v3 private match on DFH Stadium.",
          "Use no bots, no mutators, a five-minute timer, and US-East servers.",
          "Confirm cross-platform compatibility before kickoff.",
        ],
      },
      {
        eyebrow: "Series flow",
        title: "How it plays",
        items: [
          "Regular season and playoffs are Best-of-5; first to three game wins takes the match.",
          "The championship is Best-of-7; first to four game wins takes the match.",
          "A tied game goes directly to sudden-death overtime; the next goal wins.",
        ],
      },
      {
        eyebrow: "Result handling",
        title: "Win & report",
        items: [
          "The series winner earns 1 standings point; the loser earns 0.",
          "Continue directly to the next game until one team clinches the series.",
          "Private-match admin controls may be used only when an IEN official directs it.",
          "Substitutions must preserve the two-athlete/one-partner active lineup.",
        ],
      },
    ],
  },
  {
    id: "unified-super-smash-bros",
    name: "Unified Super Smash Bros.",
    displayName: "Unified Super Smash Bros. Ultimate",
    color: "#ff5eb8",
    leagues: ["IUEN"],
    competition: "Unified Fall",
    version: "v1.0",
    status: "ready",
    statusLabel: "Guide verified",
    facts: [
      { label: "Platform", value: "Nintendo Switch" },
      { label: "Active crew", value: "4 players" },
      { label: "Match format", value: "Best-of-3 crew-battle rounds" },
      { label: "Team stocks", value: "12 per round (4 × 3)" },
      { label: "Round win", value: "Eliminate all 12 opponent stocks" },
      { label: "Match win", value: "First team to win 2 rounds" },
    ],
    sections: [
      {
        eyebrow: "Unified lineup",
        title: "Before the match",
        items: [
          "Field exactly two athletes and two unified partners in the four-player crew.",
          "Use 3 stocks, 7 minutes, items off, stage hazards off, and launch rate 1.0x.",
          "Turn team attack on and use the published starter stage for the active week.",
          "Confirm the four-player crew order and all character selections before play.",
        ],
      },
      {
        eyebrow: "Crew flow",
        title: "How it plays",
        items: [
          "Every round begins with 12 stocks per team: four players with three stocks each.",
          "Players compete 1v1; the winner keeps remaining stocks for the next opponent.",
          "A defeated player is replaced in crew order until one team has lost all 12 stocks.",
          "That ends the round. Reset both teams to 12 stocks, then begin the next round.",
        ],
      },
      {
        eyebrow: "Tie & conduct",
        title: "Win & report",
        items: [
          "The match is Best-of-3 rounds; the first team to win two rounds wins the match.",
          "Play Round 2 after Round 1. Play Round 3 only if the teams are tied 1–1.",
          "A simultaneous final-stock tie uses stocks, then lower damage, then a 1-stock/3-minute tiebreaker.",
          "Taunting is prohibited except for the limited utility taunts listed in the full rules.",
          "Substitutions must preserve the required two-athlete/two-partner active lineup.",
        ],
      },
    ],
  },
  {
    id: "fortnite",
    name: "Fortnite",
    color: "#b56dff",
    leagues: ["IMSEN"],
    competition: "Varsity + Club",
    version: "Latest IEN update",
    status: "ready",
    statusLabel: "Guide verified",
    facts: [
      { label: "Platform", value: "Cross-platform" },
      { label: "Roster", value: "3 starters / 2 substitutes" },
      { label: "Format", value: "Custom match scoring" },
      { label: "League", value: "IMSEN" },
      { label: "Match window", value: "Mondays, 4:30 PM ET" },
      { label: "Season", value: "2026-27" },
    ],
    sections: [
      {
        eyebrow: "Roster & lobby",
        title: "Before the match",
        items: [
          "Confirm three eligible starters and up to two registered substitutes before the match window.",
          "Use cross-platform accounts and join the assigned IEN custom lobby.",
          "Check Match Chat for the current lobby and administrator instructions before play.",
        ],
      },
      {
        eyebrow: "Competition flow",
        title: "How it plays",
        items: [
          "Complete the scheduled custom matches using the current IEN Fortnite event settings.",
          "The official custom-match scoring determines the team result.",
          "Follow administrator directions for lobby sequencing and any match restart.",
        ],
      },
      {
        eyebrow: "Result handling",
        title: "Win & report",
        items: [
          "Confirm the recorded custom-match result before leaving the lobby.",
          "Report roster, lobby, or scoring issues in Match Chat immediately.",
          "Provide result evidence when requested by an IEN administrator.",
        ],
      },
    ],
  },
];

const statusStyles: Record<AuditStatus, string> = {
  ready: "border-emerald-400/35 bg-emerald-400/10 text-emerald-300",
  review: "border-amber-300/35 bg-amber-300/10 text-amber-200",
  blocked: "border-rose-400/35 bg-rose-400/10 text-rose-300",
};

const statusIcons = {
  ready: CheckCircle2,
  review: AlertTriangle,
  blocked: CircleAlert,
};

const factIcons = [Monitor, Users, ClipboardCheck, Clock3, Trophy, Gamepad2];

function GuideStatus({ guide, compact = false }: { guide: Guide; compact?: boolean }) {
  const Icon = statusIcons[guide.status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-bold uppercase tracking-[0.12em] ${statusStyles[guide.status]} ${
        compact ? "px-2 py-1 text-[0.58rem]" : "px-3 py-1.5 text-[0.68rem]"
      }`}
    >
      <Icon className={compact ? "h-3 w-3" : "h-3.5 w-3.5"} aria-hidden="true" />
      {guide.statusLabel}
    </span>
  );
}

function GuidePaper({ guide }: { guide: Guide }) {
  return (
    <article className="relative mx-auto w-full max-w-[940px] overflow-hidden rounded-[1.6rem] border border-slate-700 bg-[#fbfaf6] text-slate-950 shadow-[0_30px_90px_rgba(0,0,0,0.42)]">
      <div className="absolute inset-x-0 top-0 h-2" style={{ backgroundColor: guide.color }} />
      <header className="relative overflow-hidden border-b border-slate-200 px-6 pb-6 pt-8 sm:px-9">
        <div
          className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full opacity-[0.08]"
          style={{ backgroundColor: guide.color }}
        />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {guide.leagues.map((league) => (
                <span
                  key={league}
                  className="rounded-full bg-[#101a2c] px-2.5 py-1 text-[0.65rem] font-black tracking-[0.16em] text-white"
                >
                  {league}
                </span>
              ))}
              <span className="rounded-full border border-slate-300 bg-white px-2.5 py-1 text-[0.65rem] font-black tracking-[0.12em] text-slate-700">
                {guide.competition.toUpperCase()}
              </span>
              <span className="rounded-full border border-slate-300 px-2.5 py-1 text-[0.65rem] font-black tracking-[0.14em] text-slate-600">
                2026-27 QUICK GUIDE
              </span>
            </div>
            <p className="mb-1 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Coach one-page reference</p>
            <h1 className="max-w-3xl text-3xl font-black leading-[1.02] tracking-[-0.04em] text-[#101a2c] sm:text-5xl">
              {guide.displayName ?? guide.name}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              The essentials for setup, match flow, scoring, and reporting. The official PDF controls if this guide and the full rules differ.
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
            <GuideStatus guide={guide} />
            <span className="text-xs font-bold text-slate-500">Rules source: {guide.version}</span>
          </div>
        </div>

        {guide.sourceNote && (
          <div className="relative mt-5 flex gap-3 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm leading-5 text-amber-950">
            <FileWarning className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <div>
              <span className="font-black">Audit note:</span> {guide.sourceNote}
            </div>
          </div>
        )}
      </header>

      <div className="px-6 py-6 sm:px-9 sm:py-8">
        <section aria-label="Quick facts" className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3">
          {guide.facts.map((fact, index) => {
            const Icon = factIcons[index % factIcons.length];
            return (
              <div key={fact.label} className="bg-white px-4 py-4 sm:px-5">
                <div className="mb-2 flex items-center gap-2 text-[0.62rem] font-black uppercase tracking-[0.15em] text-slate-500">
                  <Icon className="h-3.5 w-3.5" style={{ color: guide.color }} aria-hidden="true" />
                  {fact.label}
                </div>
                <p className="text-sm font-extrabold leading-snug text-[#101a2c] sm:text-[0.95rem]">{fact.value}</p>
              </div>
            );
          })}
        </section>

        {guide.sections ? (
          <section aria-label="Game-specific guide" className="mt-6 grid gap-4 lg:grid-cols-3">
            {guide.sections.map((section, index) => (
              <div key={section.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-slate-500">{section.eyebrow}</p>
                    <h2 className="mt-1 text-lg font-black tracking-tight text-[#101a2c]">{section.title}</h2>
                  </div>
                  <span
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-black text-white"
                    style={{ backgroundColor: guide.color }}
                  >
                    {index + 1}
                  </span>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[0.78rem] leading-5 text-slate-700 sm:text-[0.82rem]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: guide.color }} strokeWidth={3} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ) : (
          <section className="mt-6 rounded-2xl border-2 border-dashed border-rose-300 bg-rose-50 px-6 py-12 text-center">
            <FileWarning className="mx-auto h-10 w-10 text-rose-500" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-black tracking-tight text-rose-950">Quick guide held for source</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-rose-900">
              Game-specific instructions should not be published until an official rules document is available to verify setup, scoring, tiebreakers, and reporting.
            </p>
          </section>
        )}

        {guide.callout && (
          <div className="mt-5 flex gap-3 rounded-xl bg-[#101a2c] px-4 py-3.5 text-sm leading-5 text-slate-200">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" style={{ color: guide.color }} aria-hidden="true" />
            <p>{guide.callout}</p>
          </div>
        )}
      </div>

      <footer className="flex flex-col gap-3 border-t border-slate-200 bg-white px-6 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-9">
        <p><span className="font-black text-slate-700">Quick guide only.</span> Consult the full rules for penalties, disputes, and edge cases.</p>
        <div className="flex items-center gap-4 font-black uppercase tracking-[0.12em]">
          <span className="inline-flex items-center gap-1.5 text-slate-700"><BookOpen className="h-3.5 w-3.5" /> Full rules</span>
          <span className="inline-flex items-center gap-1.5 text-slate-700"><ExternalLink className="h-3.5 w-3.5" /> LeagueOS</span>
        </div>
      </footer>
    </article>
  );
}

export default function RulesQuickGuideOnePagerMockup() {
  const [selectedId, setSelectedId] = useState("unified-rocket-league");
  const selectedGuide = useMemo(
    () => guides.find((guide) => guide.id === selectedId) ?? guides[0],
    [selectedId],
  );
  const readyCount = guides.filter((guide) => guide.status === "ready").length;
  const reviewCount = guides.filter((guide) => guide.status === "review").length;
  const blockedCount = guides.filter((guide) => guide.status === "blocked").length;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#07101e] text-white">
      <div className="border-b border-slate-800 bg-[#0b1627]">
        <div className="mx-auto flex max-w-[1580px] flex-col gap-5 px-5 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#f0c84b]">
              <ListChecks className="h-4 w-4" aria-hidden="true" />
              Review-only mockup
            </div>
            <h1 className="max-w-full break-words text-2xl font-black tracking-tight sm:text-4xl">Rules Quick Guide — One-Page System</h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
              Switch titles to audit the same compact layout with game-specific facts. Production files are not changed by this mockup.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-xs font-bold text-emerald-300">{readyCount} ready</span>
            <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-2 text-xs font-bold text-amber-200">{reviewCount} source reviews</span>
            <span className="rounded-full border border-rose-400/30 bg-rose-400/10 px-3 py-2 text-xs font-bold text-rose-300">{blockedCount} blocked</span>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1580px] gap-6 px-5 py-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:px-8">
        <div className="rounded-2xl border border-slate-800 bg-[#0b1627] p-4 lg:hidden">
          <label htmlFor="mobile-title-select" className="block text-xs font-black uppercase tracking-[0.17em] text-slate-400">
            Select a title
          </label>
          <select
            id="mobile-title-select"
            value={selectedGuide.id}
            onChange={(event) => setSelectedId(event.target.value)}
            className="mt-2 h-11 w-full rounded-lg border border-slate-700 bg-[#07101e] px-3 text-sm font-bold text-white outline-none focus:border-[#f0c84b]"
          >
            {guides.map((guide) => (
              <option key={guide.id} value={guide.id}>{guide.name} — {guide.statusLabel}</option>
            ))}
          </select>
        </div>

        <aside className="hidden lg:sticky lg:top-5 lg:block lg:self-start">
          <div className="rounded-2xl border border-slate-800 bg-[#0b1627] p-3 shadow-xl">
            <div className="px-2 pb-3 pt-2">
              <p className="text-xs font-black uppercase tracking-[0.17em] text-slate-400">Select a title</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">Every title uses the same one-page hierarchy.</p>
            </div>
            <div className="max-h-[calc(100vh-215px)] space-y-1 overflow-y-auto pr-1">
              {guides.map((guide) => {
                const active = guide.id === selectedGuide.id;
                return (
                  <button
                    key={guide.id}
                    type="button"
                    onClick={() => setSelectedId(guide.id)}
                    className={`group flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left transition ${
                      active
                        ? "border-[#f0c84b]/50 bg-[#f0c84b]/10"
                        : "border-transparent hover:border-slate-700 hover:bg-slate-900/70"
                    }`}
                  >
                    <span className="h-9 w-1 shrink-0 rounded-full" style={{ backgroundColor: guide.color }} />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-extrabold text-white">{guide.name}</span>
                      <span className="mt-1 block"><GuideStatus guide={guide} compact /></span>
                    </span>
                    <ChevronRight className={`h-4 w-4 shrink-0 ${active ? "text-[#f0c84b]" : "text-slate-600 group-hover:text-slate-300"}`} aria-hidden="true" />
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <section className="min-w-0">
          <div className="mb-4 flex flex-col gap-3 rounded-2xl border border-slate-800 bg-[#0b1627] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#f0c84b]/10 text-[#f0c84b]"><ClipboardCheck className="h-5 w-5" /></span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">Active preview</p>
                <p className="text-sm font-bold text-white">{selectedGuide.displayName ?? selectedGuide.name}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <button type="button" className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-700 px-3 text-xs font-bold text-slate-200 hover:bg-slate-800">
                <Printer className="h-4 w-4" /> Print layout
              </button>
              <button type="button" className="inline-flex h-9 items-center gap-2 rounded-lg bg-[#f0c84b] px-3 text-xs font-black text-[#07101e] hover:bg-[#ffd968]">
                <Download className="h-4 w-4" /> Full PDF
              </button>
            </div>
          </div>
          <GuidePaper guide={selectedGuide} />
          <div className="mt-4 flex gap-3 rounded-2xl border border-slate-800 bg-[#0b1627] px-4 py-4 text-sm leading-6 text-slate-300">
            <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-[#f0c84b]" aria-hidden="true" />
            <p>
                <span className="font-black text-white">Approval scope:</span> layout, hierarchy, and the game-specific content model. On approval, the verified production guides can be populated while Chess and Tetris remain visibly in progress.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
