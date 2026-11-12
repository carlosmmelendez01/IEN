export type QuickGuideStatus = "verified" | "in-progress";

export type QuickGuideFact = {
  label: string;
  value: string;
};

export type QuickGuideSection = {
  eyebrow: string;
  title: string;
  items: string[];
};

export type QuickGuide = {
  status: QuickGuideStatus;
  statusLabel: string;
  sourceLabel: string;
  note?: string;
  facts: QuickGuideFact[];
  sections: QuickGuideSection[];
};

const verified = (
  sourceLabel: string,
  facts: QuickGuideFact[],
  sections: QuickGuideSection[],
): QuickGuide => ({
  status: "verified",
  statusLabel: "Guide verified",
  sourceLabel,
  facts,
  sections,
});

export const quickGuides: Record<string, QuickGuide> = {
  valorant: verified(
    "v1.0",
    [
      { label: "Platform", value: "PC" },
      { label: "Roster", value: "5 starters / 3 substitutes" },
      { label: "Regular season", value: "Best-of-1" },
      { label: "Match length", value: "45-90 minutes" },
      { label: "Playoffs / finals", value: "Best-of-3" },
      { label: "Win condition", value: "First to 13 rounds, win by 2" },
    ],
    [
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
  ),

  "apex-legends": verified(
    "v1.0",
    [
      { label: "Platform", value: "PC, Xbox, PlayStation" },
      { label: "Roster", value: "3 active / 2 substitutes" },
      { label: "Regular season", value: "3 Battle Royale rounds" },
      { label: "Match length", value: "About 75-90 minutes" },
      { label: "Scoring", value: "Placement + eliminations" },
      { label: "Championship", value: "30-point Match Point, max 7 rounds" },
    ],
    [
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
  ),

  "rocket-league": verified(
    "v1.0",
    [
      { label: "Platform", value: "PC, Xbox, PlayStation, Switch" },
      { label: "Roster", value: "3 starters / 2 substitutes" },
      { label: "Regular season", value: "Best-of-5" },
      { label: "Game length", value: "5 minutes" },
      { label: "Championship", value: "Best-of-7" },
      { label: "Server", value: "US-East" },
    ],
    [
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
  ),

  "league-of-legends": verified(
    "ISEA Trials",
    [
      { label: "Platform", value: "PC" },
      { label: "Roster", value: "5 active players" },
      { label: "Regular season", value: "Best-of-3" },
      { label: "Grand finals", value: "Best-of-5" },
      { label: "Mode", value: "Tournament Draft" },
      { label: "Win condition", value: "Destroy the enemy Nexus" },
    ],
    [
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
  ),

  "overwatch-2": verified(
    "v1.0 + Nov. 3 update",
    [
      { label: "Platform", value: "PC, Xbox, PlayStation, Switch" },
      { label: "Roster", value: "5 starters / 3 substitutes" },
      { label: "Regular season", value: "Competitive preset Best-of-5" },
      { label: "Match length", value: "1-2.5 hours" },
      { label: "Playoffs", value: "Best-of-5 through semifinals" },
      { label: "Grand finals", value: "Best-of-7" },
    ],
    [
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
  ),

  "super-smash-bros": verified(
    "v1.01",
    [
      { label: "Platform", value: "Nintendo Switch" },
      { label: "Active crew", value: "4 players" },
      { label: "Match format", value: "Best-of-3 crew-battle rounds" },
      { label: "Team stocks", value: "12 per round (4 × 3)" },
      { label: "Round win", value: "Eliminate all 12 opponent stocks" },
      { label: "Match win", value: "First team to win 2 rounds" },
    ],
    [
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
  ),

  "mario-kart-8-deluxe": verified(
    "v1.01",
    [
      { label: "Platform", value: "Nintendo Switch / Switch 2" },
      { label: "Roster", value: "4 starters / 2 substitutes" },
      { label: "Regular season", value: "Best-of-3 Grand Prix sets" },
      { label: "One set", value: "4 races on the assigned cup" },
      { label: "Championship", value: "Best-of-5 sets" },
      { label: "Race settings", value: "150cc, normal items, no COM" },
    ],
    [
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
  ),

  minecraft: verified(
    "v1.1",
    [
      { label: "Platform", value: "PC, Java Edition 1.8.9" },
      { label: "Roster", value: "4 starters / 2 substitutes" },
      { label: "Format", value: "Best-of-3 BedWars" },
      { label: "Map order", value: "Undergrowth / Savoy / Riptide" },
      { label: "Server", value: "CompMC private, Chicago" },
      { label: "Playoffs / finals", value: "Single elimination / Bo3" },
    ],
    [
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
  ),

  "marvel-rivals": verified(
    "v1.03",
    [
      { label: "Platform", value: "PC, Xbox, PlayStation" },
      { label: "Roster", value: "6 starters / 3 substitutes" },
      { label: "Regular season", value: "Best-of-3" },
      { label: "Map length", value: "15-30 minutes" },
      { label: "Finals", value: "Best-of-5" },
      { label: "Server", value: "NA North Virginia" },
    ],
    [
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
  ),

  chess: {
    status: "in-progress",
    statusLabel: "Update in progress",
    sourceLabel: "v1.0",
    note: "Chess is currently being updated; the existing guide remains available during revision.",
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

  tetris: {
    status: "in-progress",
    statusLabel: "Update in progress",
    sourceLabel: "v1.0",
    note: "Tetris is currently being updated; the existing guide remains available during revision.",
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

  iracing: verified(
    "v1.0",
    [
      { label: "Platform", value: "PC" },
      { label: "Roster", value: "Up to 5 drivers / no substitutes" },
      { label: "Race night", value: "Practice, qualifying, 20-minute race" },
      { label: "Session length", value: "About 1 hour" },
      { label: "Championship", value: "Season points" },
      { label: "Drivers meeting", value: "4:40 PM ET / 3:40 PM CT" },
    ],
    [
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
  ),

  "unified-rocket-league": verified(
    "v1.0",
    [
      { label: "Platform", value: "PC, Xbox, PlayStation, Switch" },
      { label: "Roster", value: "3 starters / 2 substitutes" },
      { label: "Regular season", value: "Best-of-5" },
      { label: "Game length", value: "5 minutes" },
      { label: "Championship", value: "Best-of-7" },
      { label: "Server", value: "US-East" },
    ],
    [
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
  ),

  "unified-super-smash-bros": verified(
    "v1.0",
    [
      { label: "Platform", value: "Nintendo Switch" },
      { label: "Active crew", value: "4 players" },
      { label: "Match format", value: "Best-of-3 crew-battle rounds" },
      { label: "Team stocks", value: "12 per round (4 × 3)" },
      { label: "Round win", value: "Eliminate all 12 opponent stocks" },
      { label: "Match win", value: "First team to win 2 rounds" },
    ],
    [
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
  ),

  fortnite: verified(
    "Latest IEN update",
    [
      { label: "Platform", value: "Cross-platform" },
      { label: "Roster", value: "3 starters / 2 substitutes" },
      { label: "Format", value: "Custom match scoring" },
      { label: "League", value: "IMSEN" },
      { label: "Match window", value: "Mondays, 4:30 PM ET" },
      { label: "Season", value: "2026-27" },
    ],
    [
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
  ),
};
