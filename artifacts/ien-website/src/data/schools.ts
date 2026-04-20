export interface School {
  name: string;
  city: string;
  teams: number;
  division: "IHSEN" | "IMSEN" | "IUEN";
  lat: number;
  lng: number;
}

export const SCHOOLS: School[] = [
  // ── North ──────────────────────────────────────────────
  { name: "Michigan City High School",         city: "Michigan City, IN",  teams: 2, division: "IHSEN", lat: 41.7073, lng: -86.8950 },
  { name: "Penn High School",                  city: "Mishawaka, IN",      teams: 4, division: "IHSEN", lat: 41.6614, lng: -86.1703 },
  { name: "South Bend Riley High School",      city: "South Bend, IN",     teams: 3, division: "IHSEN", lat: 41.6700, lng: -86.2700 },
  { name: "South Bend Adams High School",      city: "South Bend, IN",     teams: 2, division: "IHSEN", lat: 41.6542, lng: -86.2520 },
  { name: "Elkhart Central High School",       city: "Elkhart, IN",        teams: 3, division: "IHSEN", lat: 41.6820, lng: -85.9766 },
  { name: "Goshen High School",                city: "Goshen, IN",         teams: 2, division: "IHSEN", lat: 41.5742, lng: -85.8347 },
  { name: "Warsaw Community High School",      city: "Warsaw, IN",         teams: 3, division: "IHSEN", lat: 41.2400, lng: -85.8522 },
  { name: "Valparaiso High School",            city: "Valparaiso, IN",     teams: 4, division: "IHSEN", lat: 41.4731, lng: -87.0611 },
  { name: "Crown Point High School",           city: "Crown Point, IN",    teams: 5, division: "IHSEN", lat: 41.4164, lng: -87.3667 },
  { name: "Merrillville High School",          city: "Merrillville, IN",   teams: 3, division: "IHSEN", lat: 41.4731, lng: -87.3320 },
  { name: "Lake Central High School",          city: "St. John, IN",       teams: 5, division: "IHSEN", lat: 41.4400, lng: -87.4600 },
  { name: "Portage High School",               city: "Portage, IN",        teams: 3, division: "IHSEN", lat: 41.5800, lng: -87.1800 },
  { name: "Fort Wayne Northrop High School",   city: "Fort Wayne, IN",     teams: 4, division: "IHSEN", lat: 41.1306, lng: -85.1079 },
  { name: "Fort Wayne Snider High School",     city: "Fort Wayne, IN",     teams: 2, division: "IHSEN", lat: 41.1200, lng: -85.0900 },
  { name: "Carroll High School",               city: "Fort Wayne, IN",     teams: 3, division: "IHSEN", lat: 41.1500, lng: -85.1400 },
  { name: "Homestead High School",             city: "Fort Wayne, IN",     teams: 4, division: "IHSEN", lat: 41.1700, lng: -85.2200 },
  { name: "New Haven High School",             city: "New Haven, IN",      teams: 2, division: "IHSEN", lat: 41.0709, lng: -85.0145 },

  // ── Central ────────────────────────────────────────────
  { name: "Carmel High School",                city: "Carmel, IN",         teams: 5, division: "IHSEN", lat: 39.9784, lng: -86.1272 },
  { name: "Zionsville Community High School",  city: "Zionsville, IN",     teams: 4, division: "IHSEN", lat: 39.9509, lng: -86.2600 },
  { name: "Fishers High School",               city: "Fishers, IN",        teams: 6, division: "IHSEN", lat: 39.9556, lng: -85.9669 },
  { name: "Hamilton Southeastern HS",          city: "Fishers, IN",        teams: 5, division: "IHSEN", lat: 39.9469, lng: -85.9589 },
  { name: "Noblesville High School",           city: "Noblesville, IN",    teams: 3, division: "IHSEN", lat: 40.0453, lng: -86.0086 },
  { name: "Westfield High School",             city: "Westfield, IN",      teams: 3, division: "IHSEN", lat: 40.0434, lng: -86.1277 },
  { name: "Avon High School",                  city: "Avon, IN",           teams: 3, division: "IHSEN", lat: 39.7634, lng: -86.3985 },
  { name: "Brownsburg High School",            city: "Brownsburg, IN",     teams: 4, division: "IHSEN", lat: 39.8437, lng: -86.3985 },
  { name: "Plainfield High School",            city: "Plainfield, IN",     teams: 2, division: "IHSEN", lat: 39.7042, lng: -86.3997 },
  { name: "Franklin Central High School",      city: "Indianapolis, IN",   teams: 4, division: "IHSEN", lat: 39.7400, lng: -85.9800 },
  { name: "Lawrence North High School",        city: "Indianapolis, IN",   teams: 3, division: "IHSEN", lat: 39.8700, lng: -86.0000 },
  { name: "Lawrence Central High School",      city: "Indianapolis, IN",   teams: 3, division: "IHSEN", lat: 39.8500, lng: -86.0100 },
  { name: "Pike High School",                  city: "Indianapolis, IN",   teams: 4, division: "IHSEN", lat: 39.8600, lng: -86.2200 },
  { name: "Ben Davis High School",             city: "Indianapolis, IN",   teams: 3, division: "IHSEN", lat: 39.7900, lng: -86.2800 },
  { name: "Perry Meridian High School",        city: "Indianapolis, IN",   teams: 3, division: "IHSEN", lat: 39.6800, lng: -86.1200 },
  { name: "Greenwood Community High School",   city: "Greenwood, IN",      teams: 3, division: "IHSEN", lat: 39.6134, lng: -86.1069 },
  { name: "Kokomo High School",                city: "Kokomo, IN",         teams: 3, division: "IHSEN", lat: 40.4864, lng: -86.1336 },
  { name: "Frankfort High School",             city: "Frankfort, IN",      teams: 2, division: "IHSEN", lat: 40.2792, lng: -86.5147 },
  { name: "Logansport High School",            city: "Logansport, IN",     teams: 2, division: "IHSEN", lat: 40.7542, lng: -86.3578 },
  { name: "Muncie Central High School",        city: "Muncie, IN",         teams: 3, division: "IHSEN", lat: 40.1934, lng: -85.3864 },
  { name: "Anderson High School",              city: "Anderson, IN",       teams: 2, division: "IHSEN", lat: 40.1053, lng: -85.6803 },
  { name: "Pendleton Heights High School",     city: "Pendleton, IN",      teams: 2, division: "IHSEN", lat: 40.0000, lng: -85.7500 },
  { name: "New Palestine High School",         city: "New Palestine, IN",  teams: 2, division: "IHSEN", lat: 39.7320, lng: -85.8883 },
  { name: "Shelbyville High School",           city: "Shelbyville, IN",    teams: 2, division: "IHSEN", lat: 39.5214, lng: -85.7766 },

  // ── South ─────────────────────────────────────────────
  { name: "Martinsville High School",          city: "Martinsville, IN",   teams: 7, division: "IHSEN", lat: 39.4278, lng: -86.4283 },
  { name: "Columbus North High School",        city: "Columbus, IN",       teams: 4, division: "IHSEN", lat: 39.2014, lng: -85.9213 },
  { name: "Columbus East High School",         city: "Columbus, IN",       teams: 3, division: "IHSEN", lat: 39.1900, lng: -85.9100 },
  { name: "Bloomington South High School",     city: "Bloomington, IN",    teams: 5, division: "IHSEN", lat: 39.1500, lng: -86.5264 },
  { name: "Bloomington North High School",     city: "Bloomington, IN",    teams: 3, division: "IHSEN", lat: 39.1700, lng: -86.5350 },
  { name: "Jeffersonville High School",        city: "Jeffersonville, IN", teams: 4, division: "IHSEN", lat: 38.2775, lng: -85.7372 },
  { name: "New Albany High School",            city: "New Albany, IN",     teams: 3, division: "IHSEN", lat: 38.2858, lng: -85.8244 },
  { name: "Scottsburg High School",            city: "Scottsburg, IN",     teams: 3, division: "IHSEN", lat: 38.6853, lng: -85.7747 },
  { name: "Seymour High School",               city: "Seymour, IN",        teams: 2, division: "IHSEN", lat: 38.9584, lng: -85.8905 },
  { name: "Terre Haute North Vigo HS",         city: "Terre Haute, IN",    teams: 3, division: "IHSEN", lat: 39.4667, lng: -87.4139 },
  { name: "Terre Haute South Vigo HS",         city: "Terre Haute, IN",    teams: 2, division: "IHSEN", lat: 39.4500, lng: -87.4000 },
  { name: "Evansville Reitz High School",      city: "Evansville, IN",     teams: 3, division: "IHSEN", lat: 37.9716, lng: -87.5711 },
  { name: "Evansville Harrison High School",   city: "Evansville, IN",     teams: 2, division: "IHSEN", lat: 37.9900, lng: -87.5600 },
  { name: "Vincennes Lincoln High School",     city: "Vincennes, IN",      teams: 2, division: "IHSEN", lat: 38.6773, lng: -87.5286 },

  // ── Middle Schools ─────────────────────────────────────
  { name: "East Washington Middle School",     city: "Pekin, IN",          teams: 2, division: "IMSEN", lat: 38.4857, lng: -86.0200 },
  { name: "Noblesville East Middle School",    city: "Noblesville, IN",    teams: 2, division: "IMSEN", lat: 40.0350, lng: -86.0200 },
  { name: "Avon Middle School North",          city: "Avon, IN",           teams: 2, division: "IMSEN", lat: 39.7600, lng: -86.4000 },
  { name: "Franklin Community Middle School",  city: "Franklin, IN",       teams: 2, division: "IMSEN", lat: 39.4806, lng: -86.0547 },
  { name: "Lake Central Middle School",        city: "Dyer, IN",           teams: 3, division: "IMSEN", lat: 41.4900, lng: -87.5200 },
  { name: "Carmel Middle School",              city: "Carmel, IN",         teams: 3, division: "IMSEN", lat: 39.9700, lng: -86.1350 },
  { name: "Brownsburg East Middle School",     city: "Brownsburg, IN",     teams: 2, division: "IMSEN", lat: 39.8400, lng: -86.3900 },
  { name: "West Middle School (Bloomington)", city: "Bloomington, IN",    teams: 2, division: "IMSEN", lat: 39.1650, lng: -86.5400 },
  { name: "Kokomo Center Middle School",       city: "Kokomo, IN",         teams: 2, division: "IMSEN", lat: 40.4864, lng: -86.1450 },
  { name: "Warsaw Community Middle School",    city: "Warsaw, IN",         teams: 2, division: "IMSEN", lat: 41.2350, lng: -85.8600 },

  // ── Unified ────────────────────────────────────────────
  { name: "Carmel High School (Unified)",      city: "Carmel, IN",         teams: 1, division: "IUEN",  lat: 39.9850, lng: -86.1350 },
  { name: "Fishers HS (Unified)",              city: "Fishers, IN",        teams: 1, division: "IUEN",  lat: 39.9620, lng: -85.9750 },
  { name: "Martinsville HS (Unified)",         city: "Martinsville, IN",   teams: 1, division: "IUEN",  lat: 39.4200, lng: -86.4350 },
];
