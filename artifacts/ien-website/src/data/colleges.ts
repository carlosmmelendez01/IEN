// Indiana colleges and universities with varsity or officially-supported esports programs
// that recruit from IEN. These are partnered colleges, the next step after scholastic
// competition. Intentionally separate from SCHOOLS (K-12 members) so the membership stats
// and division filtering stay clean.
//
// Coordinates are approximate campus center for each institution.
// Add new entries alphabetically and include lat/lng so the map stays accurate.

export interface College {
  name: string;
  city: string;
  /** Program name, e.g. "Esports" or "Valpo Esports". */
  program: string;
  lat: number;
  lng: number;
  /** Optional: link to the program page or university site. */
  website?: string;
  /** Optional: path to university/program logo, e.g. "/colleges/ball-state.png". */
  logo?: string;
}

export const COLLEGES: College[] = [
  {
    name: "Anderson University",
    city: "Anderson, IN",
    program: "AU Esports",
    lat: 40.1018,
    lng: -85.6710,
    website: "https://athletics.anderson.edu/sports/esports",
  },
  {
    name: "Ball State University",
    city: "Muncie, IN",
    program: "Esports",
    lat: 40.199,
    lng: -85.409,
  },
  {
    name: "Bethel University",
    city: "Mishawaka, IN",
    program: "Bethel Esports",
    lat: 41.6628,
    lng: -86.1525,
  },
  {
    name: "Butler University",
    city: "Indianapolis, IN",
    program: "Esports",
    lat: 39.839,
    lng: -86.169,
  },
  {
    name: "Franklin College",
    city: "Franklin, IN",
    program: "Grizzly Esports",
    lat: 39.4897,
    lng: -86.0482,
  },
  {
    name: "Huntington University",
    city: "Huntington, IN",
    program: "Forester Esports",
    lat: 40.8901,
    lng: -85.4926,
    website: "https://www.huathletics.com/sports/esports",
  },
  {
    name: "Indiana Tech",
    city: "Fort Wayne, IN",
    program: "Warrior Esports",
    lat: 41.0994,
    lng: -85.1216,
    website: "https://indianatechwarriors.com/sports/esports",
  },
  {
    name: "Indiana University Bloomington",
    city: "Bloomington, IN",
    program: "IU Esports",
    lat: 39.1682,
    lng: -86.5230,
    website: "https://gaming.indiana.edu/esports.html",
  },
  {
    name: "Indiana University East",
    city: "Richmond, IN",
    program: "IU East Esports",
    lat: 39.8342,
    lng: -84.9169,
    website: "https://www.iueredwolves.com/sports/esports/index",
  },
  {
    name: "Indiana University Indianapolis",
    city: "Indianapolis, IN",
    program: "IU Indy Esports",
    lat: 39.7737,
    lng: -86.1742,
  },
  {
    name: "Indiana University Kokomo",
    city: "Kokomo, IN",
    program: "IUK Esports",
    lat: 40.4920,
    lng: -86.1330,
    website: "https://iukcougars.com/sports/esports",
  },
  {
    name: "Indiana Wesleyan University",
    city: "Marion, IN",
    program: "IWU Esports",
    lat: 40.519,
    lng: -85.675,
  },
  {
    name: "Manchester University",
    city: "North Manchester, IN",
    program: "Esports",
    lat: 41.002,
    lng: -85.766,
  },
  {
    name: "Purdue University Fort Wayne",
    city: "Fort Wayne, IN",
    program: "Mastodon Esports",
    lat: 41.1211,
    lng: -85.0672,
    website: "https://www.pfw.edu/campus-recreation/esports",
  },
  {
    name: "Purdue University Northwest",
    city: "Hammond, IN",
    program: "Esports",
    lat: 41.584,
    lng: -87.473,
  },
  {
    name: "Trine University",
    city: "Angola, IN",
    program: "Trine Esports",
    lat: 41.6954,
    lng: -85.0007,
    website: "https://www.trine.edu/esports/",
  },
  {
    name: "University of Evansville",
    city: "Evansville, IN",
    program: "UE Esports",
    lat: 37.9719,
    lng: -87.5434,
  },
  {
    name: "University of Saint Francis",
    city: "Fort Wayne, IN",
    program: "Cougar Esports",
    lat: 41.0745,
    lng: -85.2134,
    website: "https://www.saintfranciscougars.com/sports/esports/index",
  },
  {
    name: "Valparaiso University",
    city: "Valparaiso, IN",
    program: "Valpo Esports",
    lat: 41.462,
    lng: -87.044,
  },
];
