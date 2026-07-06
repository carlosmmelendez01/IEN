

export type League = "IHSEN" | "IMSEN" | "IUEN";
export type Tier = "AAA" | "AA" | "A" | "A/AA" | "";

export interface Champion {
  season: string;
  league: League;
  game: string;
  tier: Tier;
  school: string;
  player?: string;
  runnerUp?: string;
  runnerUpPlayer?: string;
  third?: string;
  thirdPlayer?: string;
  finalist?: string;
  finalistPlayer?: string;

  logoUrl?: string;
}

export const CHAMPIONS: Champion[] = [
  { season: "2025-2026", league: "IHSEN" as League, game: "Chess", tier: "" as Tier, school: "Carmel", player: "pewpew", runnerUp: "LaVille", runnerUpPlayer: "TrueFollowerOfChrist", third: "Kankakee Valley", thirdPlayer: "TimothyAkv", finalist: "Blackford", finalistPlayer: "sigma3dart" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Fortnite", tier: "A" as Tier, school: "Knightstown Community High School", runnerUp: "Burris Laboratory" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Fortnite", tier: "AA" as Tier, school: "Guerin Catholic", runnerUp: "Scottsburg" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Fortnite", tier: "AAA" as Tier, school: "Plainfield", runnerUp: "Indiana Digital Learning School" },
  { season: "2025-2026", league: "IHSEN" as League, game: "League of Legends", tier: "" as Tier, school: "Wheatfield", runnerUp: "Lawrenceburg" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Mario Kart", tier: "A" as Tier, school: "Wes-Del", runnerUp: "Ben Davis University" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Mario Kart", tier: "AAA" as Tier, school: "William Henry Harrision High School", runnerUp: "Franklin Central" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Marvel Rivals", tier: "A/AA" as Tier, school: "Speedway", runnerUp: "Jennings County" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Marvel Rivals", tier: "AAA" as Tier, school: "Ben Davis", runnerUp: "Indiana Digital Learning School" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Minecraft", tier: "" as Tier, school: "North Newton", runnerUp: "Shenandoah", third: "Fairfield", finalist: "William Henry Harrison High School" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Overwatch", tier: "A" as Tier, school: "Union City", runnerUp: "Adams Central" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Overwatch", tier: "AA" as Tier, school: "Bluffton High School", runnerUp: "Norwell" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Overwatch", tier: "AAA" as Tier, school: "Snider", runnerUp: "Indiana Digital Learning" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Rocket League", tier: "A" as Tier, school: "Greencastle High School", runnerUp: "Wabash" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Rocket League", tier: "AA" as Tier, school: "Hobart", runnerUp: "Bluffton High School" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Rocket League", tier: "AAA" as Tier, school: "Concord", runnerUp: "Indiana Gateway Digital Academy" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Smash Bros.", tier: "A" as Tier, school: "Wabash", runnerUp: "Ben Davis University" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Smash Bros.", tier: "AA" as Tier, school: "Hobart", runnerUp: "Bluffton High School" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Smash Bros.", tier: "AAA" as Tier, school: "Ben Davis", runnerUp: "Franklin Central" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Tetris", tier: "" as Tier, school: "Carmel", player: "Stephanie Tan", runnerUp: "Bluffton", runnerUpPlayer: "Jordan Jellison", third: "Bluffton", thirdPlayer: "Hunter Zoll", finalist: "Bluffton", finalistPlayer: "Bartolo Zuniga" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Valorant", tier: "A" as Tier, school: "Burris Laboratory", runnerUp: "Shenandoah" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Valorant", tier: "AA" as Tier, school: "Brebeuf Jesuit", runnerUp: "Hobart" },
  { season: "2025-2026", league: "IHSEN" as League, game: "Valorant", tier: "AAA" as Tier, school: "Hamilton Southeastern", runnerUp: "Carmel" },
  { season: "2025-2026", league: "IHSEN" as League, game: "iRacing", tier: "" as Tier, school: "Carmel", player: "Robert Fisk", runnerUp: "Carmel", runnerUpPlayer: "Zach Leazenby", third: "Pike", thirdPlayer: "Andrew Scheel", finalist: "Lawrenceburg", finalistPlayer: "Pablo Nunez" },
  { season: "2025-2026", league: "IMSEN" as League, game: "Chess", tier: "" as Tier, school: "East Tipp", player: "WilliamCeja", runnerUp: "East Tipp", runnerUpPlayer: "AustinKligus13", third: "Lynhurst 7 & 8 Grade Center", thirdPlayer: "LHCLegionA3", finalist: "Winamac", finalistPlayer: "I_Calabrese" },
  { season: "2025-2026", league: "IMSEN" as League, game: "Marvel Rivals", tier: "" as Tier, school: "North Side Middle School", runnerUp: "Batchelor Middle School" },
  { season: "2025-2026", league: "IMSEN" as League, game: "Rocket League", tier: "" as Tier, school: "Wabash", runnerUp: "Mt Vernon" },
  { season: "2025-2026", league: "IMSEN" as League, game: "Smash Bros.", tier: "" as Tier, school: "Fall Creek Valley", runnerUp: "Jackson Creek" },
  { season: "2025-2026", league: "IUEN" as League, game: "Rocket League", tier: "" as Tier, school: "Logansport", runnerUp: "Wabash" },
  { season: "2025-2026", league: "IUEN" as League, game: "Smash Bros.",   tier: "" as Tier, school: "Wabash", runnerUp: "Logansport" },
  { season: "2024-2025", league: "IHSEN" as League, game: "Chess", tier: "" as Tier, school: "Lakeland", player: "Caden", runnerUp: "Michigan City High School", runnerUpPlayer: "Chessleprocarlos", third: "Knightstown", thirdPlayer: "mynevgc73" },
  { season: "2024-2025", league: "IHSEN" as League, game: "Fortnite", tier: "A" as Tier, school: "Anderson Prep", runnerUp: "Oregon-Davis" },
  { season: "2024-2025", league: "IHSEN" as League, game: "Fortnite", tier: "AA" as Tier, school: "Scottsburg", runnerUp: "Franklin County" },
  { season: "2024-2025", league: "IHSEN" as League, game: "Fortnite", tier: "AAA" as Tier, school: "Ben Davis", runnerUp: "Bloomington North" },
  { season: "2024-2025", league: "IHSEN" as League, game: "League of Legends", tier: "" as Tier, school: "Ben Davis", runnerUp: "Lawrenceburg" },
  { season: "2024-2025", league: "IHSEN" as League, game: "Minecraft", tier: "" as Tier, school: "Norwell", runnerUp: "Indiana Digital Learning School" },
  { season: "2024-2025", league: "IHSEN" as League, game: "Overwatch", tier: "A" as Tier, school: "Union City", runnerUp: "Prairie Heights" },
  { season: "2024-2025", league: "IHSEN" as League, game: "Overwatch", tier: "AA" as Tier, school: "Norwell", runnerUp: "Lakeland" },
  { season: "2024-2025", league: "IHSEN" as League, game: "Overwatch", tier: "AAA" as Tier, school: "Speedway", runnerUp: "Anderson" },
  { season: "2024-2025", league: "IHSEN" as League, game: "Rocket League", tier: "A" as Tier, school: "Wabash", runnerUp: "Union City" },
  { season: "2024-2025", league: "IHSEN" as League, game: "Rocket League", tier: "AA" as Tier, school: "Hobart", runnerUp: "Brebeuf" },
  { season: "2024-2025", league: "IHSEN" as League, game: "Rocket League", tier: "AAA" as Tier, school: "Carmel", runnerUp: "Hamilton Southeastern" },
  { season: "2024-2025", league: "IHSEN" as League, game: "Smash Bros.", tier: "A" as Tier, school: "North Miami", runnerUp: "Ben Davis University" },
  { season: "2024-2025", league: "IHSEN" as League, game: "Smash Bros.", tier: "AA" as Tier, school: "Hobart", runnerUp: "Bluffton High School" },
  { season: "2024-2025", league: "IHSEN" as League, game: "Smash Bros.", tier: "AAA" as Tier, school: "Mooresville", runnerUp: "Carmel" },
  { season: "2024-2025", league: "IHSEN" as League, game: "Tetris", tier: "" as Tier, school: "Bluffton", player: "Sugarlordz", runnerUp: "Carmel", runnerUpPlayer: "Stalpo", third: "Carmel", thirdPlayer: "Opye", finalist: "Bluffton", finalistPlayer: "xdarkninjaa" },
  { season: "2024-2025", league: "IHSEN" as League, game: "Valorant", tier: "A" as Tier, school: "Burris Laboratory", runnerUp: "Shenandoah" },
  { season: "2024-2025", league: "IHSEN" as League, game: "Valorant", tier: "AA" as Tier, school: "Brebeuf", runnerUp: "Hobart" },
  { season: "2024-2025", league: "IHSEN" as League, game: "Valorant", tier: "AAA" as Tier, school: "Carmel", runnerUp: "Hamilton Southeastern" },
  { season: "2024-2025", league: "IHSEN" as League, game: "iRacing", tier: "" as Tier, school: "Carmel", player: "Alex Jones", runnerUp: "Carmel", runnerUpPlayer: "Zach Leazenby", third: "Carmel", thirdPlayer: "Aidan Vahrenkamp", finalist: "Vaughn Beesley" },
  { season: "2024-2025", league: "IMSEN" as League, game: "Chess", tier: "" as Tier, school: "East Tipp", player: "Austin Kilgus", runnerUp: "East Tipp", runnerUpPlayer: "William Ceja", third: "Danville", thirdPlayer: "Dude_Guy_Bro" },
  { season: "2024-2025", league: "IMSEN" as League, game: "Fortnite", tier: "" as Tier, school: "Clark Pleasant", runnerUp: "Hobart" },
  { season: "2024-2025", league: "IMSEN" as League, game: "Minecraft", tier: "" as Tier, school: "Argos", runnerUp: "Greensburg" },
  { season: "2024-2025", league: "IMSEN" as League, game: "Rocket League", tier: "" as Tier, school: "Clark Pleasant", runnerUp: "Indiana Digital Learning School" },
  { season: "2024-2025", league: "IMSEN" as League, game: "Smash Bros.", tier: "" as Tier, school: "Bluffton-Harrision", runnerUp: "Lincoln Junior" },
  { season: "2024-2025", league: "IUEN" as League, game: "Rocket League", tier: "" as Tier, school: "Logansport", runnerUp: "Hebron" },
  { season: "2024-2025", league: "IUEN" as League, game: "Smash Bros.", tier: "" as Tier, school: "Lafayette Jefferson", runnerUp: "Griffith United" },
  { season: "2023-2024", league: "IHSEN" as League, game: "Chess", tier: "" as Tier, school: "Noblesville", player: "Snowiestorca", runnerUp: "Shenandoah", runnerUpPlayer: "Dillymovechesspieces", third: "Michigan City High School", thirdPlayer: "Chessleprocarlos" },
  { season: "2023-2024", league: "IHSEN" as League, game: "Fortnite", tier: "" as Tier, school: "Shenandoah", player: "F1re_16", runnerUp: "Carmel", runnerUpPlayer: "Elevationn", third: "Scottsburg", thirdPlayer: "RD Doc" },
  { season: "2023-2024", league: "IHSEN" as League, game: "Fortnite", tier: "" as Tier, school: "Anderson Prep", player: "Fluffymoose2644", runnerUp: "Carmel", runnerUpPlayer: "Elevationn", third: "Ben Davis", thirdPlayer: "Glaze" },
  { season: "2023-2024", league: "IHSEN" as League, game: "League of Legends", tier: "" as Tier, school: "Carmel" },
  { season: "2023-2024", league: "IHSEN" as League, game: "Minecraft", tier: "" as Tier, school: "Indiana Digital Learning School" },
  { season: "2023-2024", league: "IHSEN" as League, game: "Overwatch", tier: "A" as Tier, school: "Bluffton" },
  { season: "2023-2024", league: "IHSEN" as League, game: "Overwatch", tier: "AA" as Tier, school: "Speedway" },
  { season: "2023-2024", league: "IHSEN" as League, game: "Overwatch", tier: "AAA" as Tier, school: "Hamilton Southeastern" },
  { season: "2023-2024", league: "IHSEN" as League, game: "Rocket League", tier: "A" as Tier, school: "Union City" },
  { season: "2023-2024", league: "IHSEN" as League, game: "Rocket League", tier: "AA" as Tier, school: "Hoosier College & Career Academy" },
  { season: "2023-2024", league: "IHSEN" as League, game: "Rocket League", tier: "AAA" as Tier, school: "Carmel" },
  { season: "2023-2024", league: "IHSEN" as League, game: "Smash Bros.", tier: "A" as Tier, school: "Blackford" },
  { season: "2023-2024", league: "IHSEN" as League, game: "Smash Bros.", tier: "AA" as Tier, school: "Hobart" },
  { season: "2023-2024", league: "IHSEN" as League, game: "Smash Bros.", tier: "AAA" as Tier, school: "Carmel" },
  { season: "2023-2024", league: "IHSEN" as League, game: "Tetris", tier: "" as Tier, school: "Carmel", player: "Stalpo", runnerUp: "Bluffton", runnerUpPlayer: "Minion139", third: "Carmel", thirdPlayer: "Opye" },
  { season: "2023-2024", league: "IHSEN" as League, game: "Valorant", tier: "A" as Tier, school: "Wes-Del" },
  { season: "2023-2024", league: "IHSEN" as League, game: "Valorant", tier: "AA" as Tier, school: "Hobart" },
  { season: "2023-2024", league: "IHSEN" as League, game: "Valorant", tier: "AAA" as Tier, school: "Carmel" },
  { season: "2023-2024", league: "IHSEN" as League, game: "iRacing", tier: "" as Tier, school: "Carmel", player: "Alex Jones", runnerUp: "Carmel", runnerUpPlayer: "Aidan Vahrenkamp", third: "Carmel", thirdPlayer: "Zach Leazenby" },
  { season: "2023-2024", league: "IMSEN" as League, game: "Fortnite", tier: "" as Tier, school: "Oregon Davis", player: "nickfury555", runnerUp: "Blackford", runnerUpPlayer: "omxgaawesome", third: "Blackford", thirdPlayer: "Sharkmaniac9" },
  { season: "2023-2024", league: "IMSEN" as League, game: "Fortnite", tier: "" as Tier, school: "Blackford", player: "Sharkmaniac9", runnerUp: "Clark Pleasant", runnerUpPlayer: "Twitch ofszapop", third: "Oregon Davis", thirdPlayer: "nickfury555 & Danville - Litortuga" },
  { season: "2023-2024", league: "IMSEN" as League, game: "Minecraft", tier: "" as Tier, school: "Argos" },
  { season: "2023-2024", league: "IMSEN" as League, game: "Rocket League", tier: "" as Tier, school: "Northside Middle School" },
  { season: "2023-2024", league: "IMSEN" as League, game: "Smash Bros.", tier: "" as Tier, school: "Batchelor" },
  { season: "2023-2024", league: "IUEN" as League, game: "Rocket League", tier: "" as Tier, school: "Lafayette Jefferson" },
  { season: "2023-2024", league: "IUEN" as League, game: "Smash Bros.", tier: "" as Tier, school: "Noblesville" },
  { season: "2022-2023", league: "IHSEN" as League, game: "League of Legends", tier: "" as Tier, school: "Indiana Digital Learning School" },
  { season: "2022-2023", league: "IHSEN" as League, game: "Rocket League", tier: "A" as Tier, school: "Hoosier Academy" },
  { season: "2022-2023", league: "IHSEN" as League, game: "Rocket League", tier: "AA" as Tier, school: "South Dearborn" },
  { season: "2022-2023", league: "IHSEN" as League, game: "Rocket League", tier: "AAA" as Tier, school: "Portage" },
  { season: "2022-2023", league: "IHSEN" as League, game: "Smash Bros.", tier: "A" as Tier, school: "Ben Davis University" },
  { season: "2022-2023", league: "IHSEN" as League, game: "Smash Bros.", tier: "AA" as Tier, school: "Mooresville" },
  { season: "2022-2023", league: "IHSEN" as League, game: "Smash Bros.", tier: "AAA" as Tier, school: "Carmel" },
  { season: "2022-2023", league: "IHSEN" as League, game: "Valorant", tier: "A" as Tier, school: "Wes-Del" },
  { season: "2022-2023", league: "IHSEN" as League, game: "Valorant", tier: "AA" as Tier, school: "Hobart" },
  { season: "2022-2023", league: "IHSEN" as League, game: "Valorant", tier: "AAA" as Tier, school: "Carmel" },
  { season: "2022-2023", league: "IUEN" as League, game: "Smash Bros.", tier: "" as Tier, school: "Mississinewa" },
];
