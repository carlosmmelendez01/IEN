export type Division = "IHSEN" | "IMSEN" | "IUEN";

export interface School {
  name: string;
  city: string;
  teams: number;

  divisions: Division[];
  lat: number;
  lng: number;

  logo?: string;

  description?: string;

  games?: string[];

  achievements?: string[];

  website?: string;

  coach?: string;

  established?: string;
}

export const SCHOOLS: School[] = [

  { name: "Adams Central Community Schools",           city: "Monroe, IN",          teams: 2, divisions: ["IHSEN"], lat: 40.77,  lng: -84.91, logo: "/schools/adams-central.webp" },
  { name: "Alexandria-Monroe Junior/Senior High School", city: "Alexandria, IN",    teams: 2, divisions: ["IHSEN"], lat: 40.26,  lng: -85.68 },
  { name: "Anderson High School",                       city: "Anderson, IN",       teams: 2, divisions: ["IHSEN"], lat: 40.10,  lng: -85.68 },
  { name: "Anderson Preparatory Academy",               city: "Anderson, IN",       teams: 2, divisions: ["IHSEN"], lat: 40.11,  lng: -85.67 },
  { name: "Andrean High School",                        city: "Merrillville, IN",   teams: 2, divisions: ["IHSEN"], lat: 41.47,  lng: -87.33 },
  { name: "Angola High School",                         city: "Angola, IN",         teams: 2, divisions: ["IHSEN"], lat: 41.64,  lng: -84.99 },
  { name: "Area 30 Career Center",                      city: "Clinton, IN",        teams: 2, divisions: ["IHSEN"], lat: 39.65,  lng: -87.40 },
  { name: "Argos Jr. Sr. High School",                  city: "Argos, IN",          teams: 2, divisions: ["IHSEN", "IUEN"], lat: 41.24,  lng: -86.24 },
  { name: "Attica Jr/Sr High School",                   city: "Attica, IN",         teams: 2, divisions: ["IHSEN"], lat: 40.29,  lng: -87.25 },

  { name: "Barker Middle School",                        city: "Michigan City, IN",  teams: 2, divisions: ["IMSEN"], lat: 41.71,  lng: -86.90 },
  { name: "Batchelor Middle School",                     city: "Bloomington, IN",    teams: 2, divisions: ["IMSEN"], lat: 39.17,  lng: -86.54, logo: "/schools/batchelor-ms.webp" },
  { name: "Batesville Middle School",                    city: "Batesville, IN",     teams: 2, divisions: ["IMSEN"], lat: 39.30,  lng: -85.22 },
  { name: "Ben Davis High School",                       city: "Indianapolis, IN",   teams: 3, divisions: ["IHSEN"], lat: 39.79,  lng: -86.28, logo: "/schools/ben-davis.webp" },
  { name: "Ben Davis University High School",            city: "Indianapolis, IN",   teams: 2, divisions: ["IHSEN"], lat: 39.80,  lng: -86.28, logo: "/schools/ben-davis-university.webp" },
  { name: "Blackford Junior Senior High School",         city: "Hartford City, IN",  teams: 2, divisions: ["IHSEN"], lat: 40.45,  lng: -85.37, logo: "/schools/blackford.png" },
  { name: "Bloomington High School North",               city: "Bloomington, IN",    teams: 3, divisions: ["IHSEN"], lat: 39.17,  lng: -86.54, logo: "/schools/bloomington-north.png" },
  { name: "Bloomington High School South",               city: "Bloomington, IN",    teams: 3, divisions: ["IHSEN"], lat: 39.15,  lng: -86.54, logo: "/schools/bloomington-south.png" },
  { name: "Blue River Valley Jr/Sr High School",         city: "Mount Summit, IN",   teams: 2, divisions: ["IHSEN"], lat: 39.97,  lng: -85.38 },
  { name: "Blue River Valley Middle School",             city: "Mount Summit, IN",   teams: 2, divisions: ["IMSEN"], lat: 39.97,  lng: -85.39 },
  { name: "Bluffton Harrison High School",               city: "Bluffton, IN",       teams: 2, divisions: ["IHSEN"], lat: 40.74,  lng: -85.17, logo: "/schools/bluffton.webp" },
  { name: "Bluffton Harrison Middle School",             city: "Bluffton, IN",       teams: 2, divisions: ["IMSEN"], lat: 40.74,  lng: -85.18, logo: "/schools/bluffton.webp" },
  { name: "Brebeuf Jesuit Preparatory School",           city: "Indianapolis, IN",   teams: 2, divisions: ["IHSEN"], lat: 39.87,  lng: -86.14, logo: "/schools/brebeuf.webp" },
  { name: "Bremen Senior High School",                   city: "Bremen, IN",         teams: 2, divisions: ["IHSEN"], lat: 41.45,  lng: -86.16 },
  { name: "Burris Laboratory School",                    city: "Muncie, IN",         teams: 2, divisions: ["IHSEN"], lat: 40.20,  lng: -85.39, logo: "/schools/burris.webp" },

  { name: "Canaan Community Academy",                    city: "Canaan, IN",         teams: 2, divisions: ["IHSEN"], lat: 38.87,  lng: -85.29 },
  { name: "Carmel High School",                          city: "Carmel, IN",         teams: 5, divisions: ["IHSEN"], lat: 39.98,  lng: -86.13 },
  { name: "Carmel Middle School",                        city: "Carmel, IN",         teams: 3, divisions: ["IMSEN"], lat: 39.97,  lng: -86.14 },
  { name: "Chapel Hill 7th & 8th Grade Center",          city: "Indianapolis, IN",   teams: 2, divisions: ["IMSEN"], lat: 39.86,  lng: -86.22 },
  { name: "Clark Pleasant Middle School",                city: "Whiteland, IN",      teams: 2, divisions: ["IMSEN"], lat: 39.55,  lng: -86.12 },
  { name: "Clay Middle School",                          city: "Carmel, IN",         teams: 2, divisions: ["IMSEN"], lat: 39.97,  lng: -86.12 },
  { name: "Columbia City High School",                   city: "Columbia City, IN",  teams: 2, divisions: ["IHSEN"], lat: 41.32,  lng: -85.49 },
  { name: "Columbus East High School",                   city: "Columbus, IN",       teams: 3, divisions: ["IHSEN"], lat: 39.19,  lng: -85.91, logo: "/schools/columbus-east.png" },
  { name: "Concord Community High School",               city: "Elkhart, IN",        teams: 3, divisions: ["IHSEN"], lat: 41.68,  lng: -85.98, logo: "/schools/concord.png" },
  { name: "Connersville High School",                    city: "Connersville, IN",   teams: 2, divisions: ["IHSEN"], lat: 39.64,  lng: -85.14 },
  { name: "Creekside Middle School",                     city: "Carmel, IN",         teams: 2, divisions: ["IMSEN"], lat: 39.98,  lng: -86.11 },
  { name: "Crown Point High School",                     city: "Crown Point, IN",    teams: 5, divisions: ["IHSEN"], lat: 41.42,  lng: -87.37 },
  { name: "Culver Community Middle/High School",         city: "Culver, IN",         teams: 2, divisions: ["IHSEN"], lat: 41.22,  lng: -86.42 },

  { name: "Daleville Jr/Sr High School",                 city: "Daleville, IN",      teams: 2, divisions: ["IHSEN"], lat: 40.12,  lng: -85.55 },
  { name: "Danville Community Middle School",            city: "Danville, IN",       teams: 2, divisions: ["IMSEN"], lat: 39.76,  lng: -86.52 },
  { name: "Delta High School",                           city: "Muncie, IN",         teams: 2, divisions: ["IHSEN"], lat: 40.30,  lng: -85.45 },
  { name: "Discovery Middle School",                     city: "Granger, IN",        teams: 2, divisions: ["IMSEN"], lat: 41.65,  lng: -86.14 },
  { name: "Driver Middle School",                        city: "Fort Wayne, IN",     teams: 2, divisions: ["IMSEN"], lat: 41.11,  lng: -85.21 },

  { name: "East Chicago Central High",                   city: "East Chicago, IN",   teams: 2, divisions: ["IHSEN"], lat: 41.64,  lng: -87.45 },
  { name: "East Tipp Middle School",                     city: "Lafayette, IN",      teams: 2, divisions: ["IMSEN"], lat: 40.51,  lng: -86.90, logo: "/schools/east-tipp.webp" },
  { name: "Eastern Greene High School",                  city: "Bloomfield, IN",     teams: 2, divisions: ["IHSEN"], lat: 39.03,  lng: -86.93 },
  { name: "Eastern Hancock",                             city: "Charlottesville, IN",teams: 2, divisions: ["IHSEN"], lat: 39.76,  lng: -85.65 },

  { name: "Fairfield High School",                       city: "Goshen, IN",         teams: 2, divisions: ["IHSEN"], lat: 41.57,  lng: -85.83, logo: "/schools/fairfield.png" },
  { name: "Fall Creek Valley Middle School",             city: "Indianapolis, IN",   teams: 2, divisions: ["IMSEN"], lat: 39.87,  lng: -86.00, logo: "/schools/fall-creek-valley.webp" },
  { name: "Fishers High School",                         city: "Fishers, IN",        teams: 6, divisions: ["IHSEN"], lat: 39.96,  lng: -85.97 },
  { name: "Frankfort High School",                       city: "Frankfort, IN",      teams: 2, divisions: ["IHSEN"], lat: 40.28,  lng: -86.51 },
  { name: "Franklin Central",                            city: "Indianapolis, IN",   teams: 4, divisions: ["IHSEN"], lat: 39.74,  lng: -85.98, logo: "/schools/franklin-central.webp" },
  { name: "Franklin Community High School",              city: "Franklin, IN",       teams: 2, divisions: ["IHSEN"], lat: 39.48,  lng: -86.05 },
  { name: "Franklin County High School",                 city: "Brookville, IN",     teams: 2, divisions: ["IHSEN"], lat: 39.41,  lng: -85.01 },

  { name: "Gibson Southern High School",                 city: "Fort Branch, IN",    teams: 2, divisions: ["IHSEN"], lat: 38.26,  lng: -87.58 },
  { name: "Greater Lafayette Career Academy",            city: "Lafayette, IN",      teams: 2, divisions: ["IHSEN"], lat: 40.42,  lng: -86.88 },
  { name: "Greencastle High School",                     city: "Greencastle, IN",    teams: 2, divisions: ["IHSEN"], lat: 39.64,  lng: -86.86, logo: "/schools/greencastle.webp" },
  { name: "Greensburg High School",                      city: "Greensburg, IN",     teams: 2, divisions: ["IHSEN", "IUEN"], lat: 39.33,  lng: -85.48 },
  { name: "Greensburg Jr. High School",                  city: "Greensburg, IN",     teams: 2, divisions: ["IMSEN"], lat: 39.33,  lng: -85.49 },
  { name: "Griffith Jr./Sr. High School",                city: "Griffith, IN",       teams: 2, divisions: ["IHSEN", "IUEN"], lat: 41.52,  lng: -87.42 },
  { name: "Guion Creek Middle School",                   city: "Indianapolis, IN",   teams: 2, divisions: ["IMSEN"], lat: 39.87,  lng: -86.22 },

  { name: "Hamilton Southeastern High School",           city: "Fishers, IN",        teams: 5, divisions: ["IHSEN"], lat: 39.95,  lng: -85.96, logo: "/schools/hse.png" },
  { name: "Hanover Central",                             city: "Cedar Lake, IN",     teams: 2, divisions: ["IHSEN"], lat: 41.36,  lng: -87.44 },
  { name: "Heartland Christian School",                  city: "Amo, IN",            teams: 2, divisions: ["IHSEN"], lat: 39.69,  lng: -86.62 },
  { name: "Hebron High School",                          city: "Hebron, IN",         teams: 2, divisions: ["IHSEN"], lat: 41.32,  lng: -87.20 },
  { name: "Hebron Middle School",                        city: "Hebron, IN",         teams: 2, divisions: ["IMSEN"], lat: 41.32,  lng: -87.20 },
  { name: "Heritage High School",                        city: "Monroeville, IN",    teams: 2, divisions: ["IHSEN"], lat: 41.00,  lng: -84.85 },
  { name: "Hobart High School",                          city: "Hobart, IN",         teams: 2, divisions: ["IHSEN"], lat: 41.53,  lng: -87.26, logo: "/schools/hobart.webp" },
  { name: "Hobart Middle School",                        city: "Hobart, IN",         teams: 2, divisions: ["IMSEN"], lat: 41.53,  lng: -87.26, logo: "/schools/hobart.webp" },
  { name: "Hoosier Academy (formerly Insight Indiana)", city: "Indianapolis, IN",   teams: 2, divisions: ["IHSEN"], lat: 39.80,  lng: -86.15 },
  { name: "Huntington North High School",                city: "Huntington, IN",     teams: 2, divisions: ["IHSEN"], lat: 40.89,  lng: -85.49 },

  { name: "Indiana Digital Learning School",             city: "Indianapolis, IN",   teams: 2, divisions: ["IHSEN"], lat: 39.77,  lng: -86.16, logo: "/schools/indls.webp" },
  { name: "Indiana Gateway Digital Academy",             city: "Indianapolis, IN",   teams: 2, divisions: ["IHSEN", "IUEN"], lat: 39.78,  lng: -86.15, logo: "/schools/indga.png" },

  { name: "Jackson Creek Middle School",                 city: "Bloomington, IN",    teams: 2, divisions: ["IMSEN"], lat: 39.12,  lng: -86.52, logo: "/schools/jackson-creek.webp" },
  { name: "Jennings County High School",                 city: "North Vernon, IN",   teams: 2, divisions: ["IHSEN", "IUEN"], lat: 38.99,  lng: -85.62, logo: "/schools/jennings-county.webp" },
  { name: "John Glenn High School",                      city: "Walkerton, IN",      teams: 2, divisions: ["IHSEN"], lat: 41.47,  lng: -86.49 },

  { name: "Kankakee Valley High School",                 city: "Wheatfield, IN",     teams: 2, divisions: ["IHSEN"], lat: 41.21,  lng: -87.07, logo: "/schools/kankakee-valley.png" },
  { name: "Knightstown Community High School",           city: "Knightstown, IN",    teams: 2, divisions: ["IHSEN"], lat: 39.79,  lng: -85.53, logo: "/schools/knightstown.webp" },
  { name: "Knightstown Middle School",                   city: "Knightstown, IN",    teams: 2, divisions: ["IMSEN"], lat: 39.79,  lng: -85.53, logo: "/schools/knightstown.webp" },
  { name: "Kokomo High School",                          city: "Kokomo, IN",         teams: 3, divisions: ["IHSEN"], lat: 40.49,  lng: -86.13 },

  { name: "Lafayette Jefferson",                         city: "Lafayette, IN",      teams: 2, divisions: ["IHSEN", "IUEN"], lat: 40.42,  lng: -86.88 },
  { name: "Lake Central High School",                    city: "St. John, IN",       teams: 5, divisions: ["IHSEN"], lat: 41.44,  lng: -87.46 },
  { name: "Lakeland Jr/Sr High School",                  city: "LaGrange, IN",       teams: 2, divisions: ["IHSEN"], lat: 41.64,  lng: -85.41 },
  { name: "LaVille Jr/Sr High School",                   city: "Lakeville, IN",      teams: 2, divisions: ["IHSEN"], lat: 41.53,  lng: -86.27, logo: "/schools/laville.png" },
  { name: "Lawrence Central High School",                city: "Indianapolis, IN",   teams: 3, divisions: ["IHSEN"], lat: 39.85,  lng: -86.01 },
  { name: "Lawrence North High School",                  city: "Indianapolis, IN",   teams: 3, divisions: ["IHSEN"], lat: 39.87,  lng: -86.00, logo: "/schools/lawrence-north.png" },
  { name: "Lawrenceburg High School",                    city: "Lawrenceburg, IN",   teams: 2, divisions: ["IHSEN"], lat: 39.09,  lng: -84.84, logo: "/schools/lawrenceburg.webp" },
  { name: "Leo High School",                             city: "Leo, IN",            teams: 2, divisions: ["IHSEN"], lat: 41.22,  lng: -85.01 },
  { name: "Lincoln Jr High School",                      city: "Vincennes, IN",      teams: 2, divisions: ["IMSEN"], lat: 38.68,  lng: -87.53 },
  { name: "Logansport High School",                      city: "Logansport, IN",     teams: 2, divisions: ["IHSEN", "IUEN"], lat: 40.75,  lng: -86.36, logo: "/schools/logansport.webp" },
  { name: "Logansport Junior High School",               city: "Logansport, IN",     teams: 2, divisions: ["IMSEN"], lat: 40.75,  lng: -86.36, logo: "/schools/logansport.webp" },
  { name: "Lowell Senior High School",                   city: "Lowell, IN",         teams: 2, divisions: ["IHSEN"], lat: 41.29,  lng: -87.42 },
  { name: "Lynhurst 7th and 8th Grade Center",           city: "Indianapolis, IN",   teams: 2, divisions: ["IMSEN"], lat: 39.79,  lng: -86.28, logo: "/schools/lynhurst.png" },

  { name: "Maconaquah High School",                      city: "Bunker Hill, IN",    teams: 2, divisions: ["IHSEN"], lat: 40.66,  lng: -86.10 },
  { name: "Madison Consolidated Junior High",            city: "Madison, IN",        teams: 2, divisions: ["IMSEN"], lat: 38.73,  lng: -85.38 },
  { name: "Martinsville High School",                    city: "Martinsville, IN",   teams: 7, divisions: ["IHSEN"], lat: 39.43,  lng: -86.43 },
  { name: "Michigan City High School",                   city: "Michigan City, IN",  teams: 2, divisions: ["IHSEN"], lat: 41.71,  lng: -86.90 },
  { name: "Milan Community Schools",                     city: "Milan, IN",          teams: 2, divisions: ["IHSEN"], lat: 39.12,  lng: -85.13 },
  { name: "Mishawaka High School",                       city: "Mishawaka, IN",      teams: 2, divisions: ["IHSEN"], lat: 41.66,  lng: -86.17 },
  { name: "Mississinewa Community School Corporation",   city: "Gas City, IN",       teams: 2, divisions: ["IHSEN"], lat: 40.49,  lng: -85.61 },
  { name: "Mitchell Community Schools",                  city: "Mitchell, IN",       teams: 2, divisions: ["IHSEN"], lat: 38.73,  lng: -86.47 },
  { name: "Mooresville High School",                     city: "Mooresville, IN",    teams: 2, divisions: ["IHSEN"], lat: 39.61,  lng: -86.37 },
  { name: "Morristown Jr. Sr. High School",              city: "Morristown, IN",     teams: 2, divisions: ["IHSEN"], lat: 39.68,  lng: -85.69 },
  { name: "MSD of Mt. Vernon",                           city: "Mt. Vernon, IN",     teams: 2, divisions: ["IHSEN"], lat: 37.93,  lng: -87.89, logo: "/schools/mt-vernon.webp" },
  { name: "Mt Vernon Middle School",                     city: "Fortville, IN",      teams: 2, divisions: ["IMSEN"], lat: 39.92,  lng: -85.85, logo: "/schools/mt-vernon.webp" },
  { name: "Muncie Central High School",                  city: "Muncie, IN",         teams: 3, divisions: ["IHSEN"], lat: 40.19,  lng: -85.39 },
  { name: "Munster High School",                         city: "Munster, IN",        teams: 2, divisions: ["IHSEN"], lat: 41.56,  lng: -87.51 },

  { name: "New Castle High School",                      city: "New Castle, IN",     teams: 2, divisions: ["IHSEN"], lat: 39.93,  lng: -85.37 },
  { name: "New Prairie High School",                     city: "New Carlisle, IN",   teams: 2, divisions: ["IHSEN"], lat: 41.70,  lng: -86.49 },
  { name: "North Decatur Jr/Sr High School",             city: "Westport, IN",       teams: 2, divisions: ["IHSEN"], lat: 39.18,  lng: -85.57 },
  { name: "North High School Evansville",                city: "Evansville, IN",     teams: 2, divisions: ["IHSEN"], lat: 37.97,  lng: -87.57 },
  { name: "North Judson-San Pierre Jr./Sr. High School", city: "North Judson, IN",   teams: 2, divisions: ["IHSEN"], lat: 41.21,  lng: -86.77 },
  { name: "North Manchester Jr-Sr High School",          city: "North Manchester, IN",teams: 2,divisions: ["IHSEN"], lat: 41.00,  lng: -85.77 },
  { name: "North Miami Jr/Sr High School",               city: "Denver, IN",         teams: 2, divisions: ["IHSEN"], lat: 40.87,  lng: -86.07 },
  { name: "North Newton Jr/Sr High School",              city: "Morocco, IN",        teams: 2, divisions: ["IHSEN"], lat: 41.06,  lng: -87.40, logo: "/schools/north-newton.png" },
  { name: "North Side High School",                      city: "Fort Wayne, IN",     teams: 2, divisions: ["IHSEN"], lat: 41.13,  lng: -85.11, logo: "/schools/north-side.webp" },
  { name: "North Vermillion High School",                city: "Cayuga, IN",         teams: 2, divisions: ["IHSEN"], lat: 39.94,  lng: -87.45 },
  { name: "North Vermillion Jr High School",             city: "Cayuga, IN",         teams: 2, divisions: ["IMSEN"], lat: 39.94,  lng: -87.45 },
  { name: "Northeastern High School",                    city: "Fountain City, IN",  teams: 2, divisions: ["IHSEN"], lat: 39.96,  lng: -84.94 },
  { name: "Northfield Jr/Sr High School",                city: "Wabash, IN",         teams: 2, divisions: ["IHSEN"], lat: 40.82,  lng: -85.80 },
  { name: "Northrop High School",                        city: "Fort Wayne, IN",     teams: 4, divisions: ["IHSEN"], lat: 41.13,  lng: -85.11 },
  { name: "Northside Middle School",                     city: "Muncie, IN",         teams: 2, divisions: ["IMSEN"], lat: 40.20,  lng: -85.40 },
  { name: "Norwell High School",                         city: "Ossian, IN",         teams: 2, divisions: ["IHSEN"], lat: 40.88,  lng: -85.17, logo: "/schools/norwell.webp" },

  { name: "Oregon-Davis School Corporation",             city: "Hamlet, IN",         teams: 2, divisions: ["IHSEN"], lat: 41.37,  lng: -86.59 },

  { name: "Park Tudor",                                  city: "Indianapolis, IN",   teams: 2, divisions: ["IHSEN"], lat: 39.89,  lng: -86.08 },
  { name: "Pendleton Heights High School",               city: "Pendleton, IN",      teams: 2, divisions: ["IHSEN"], lat: 40.00,  lng: -85.75, logo: "/schools/pendleton-heights.png" },
  { name: "Penn High School",                            city: "Mishawaka, IN",      teams: 4, divisions: ["IHSEN"], lat: 41.66,  lng: -86.17, logo: "/schools/penn.png" },
  { name: "Perry Central Jr-Sr High School",             city: "Tell City, IN",      teams: 2, divisions: ["IHSEN"], lat: 37.95,  lng: -86.77 },
  { name: "Pike High School",                            city: "Indianapolis, IN",   teams: 4, divisions: ["IHSEN"], lat: 39.86,  lng: -86.22 },
  { name: "Plainfield Community Public Schools",         city: "Plainfield, IN",     teams: 2, divisions: ["IHSEN"], lat: 39.70,  lng: -86.40, logo: "/schools/plainfield.webp" },
  { name: "Plainfield High School",                      city: "Plainfield, IN",     teams: 2, divisions: ["IHSEN"], lat: 39.70,  lng: -86.40, logo: "/schools/plainfield.webp" },
  { name: "Plainfield Middle School",                    city: "Plainfield, IN",     teams: 2, divisions: ["IMSEN", "IUEN"], lat: 39.70,  lng: -86.40, logo: "/schools/plainfield.webp" },
  { name: "Plymouth High School",                        city: "Plymouth, IN",       teams: 2, divisions: ["IHSEN"], lat: 41.35,  lng: -86.31 },
  { name: "Portage High School",                         city: "Portage, IN",        teams: 3, divisions: ["IHSEN"], lat: 41.58,  lng: -87.18 },
  { name: "PPHS Englewood",                              city: "Indianapolis, IN",   teams: 2, divisions: ["IHSEN"], lat: 39.72,  lng: -86.14 },
  { name: "Prairie Heights High School",                 city: "LaGrange, IN",       teams: 2, divisions: ["IHSEN"], lat: 41.77,  lng: -85.41 },
  { name: "Purdue Polytechnic South Bend",               city: "South Bend, IN",     teams: 2, divisions: ["IHSEN"], lat: 41.67,  lng: -86.27 },

  { name: "Queen of All Saints",                         city: "Mishawaka, IN",      teams: 2, divisions: ["IHSEN"], lat: 41.66,  lng: -86.18 },

  { name: "R.J. Basket Middle School",                   city: "Fort Wayne, IN",     teams: 2, divisions: ["IMSEN"], lat: 41.10,  lng: -85.10 },
  { name: "Rensselaer Central High School",              city: "Rensselaer, IN",     teams: 2, divisions: ["IHSEN"], lat: 40.94,  lng: -87.15 },
  { name: "Rensselaer Central Middle School",            city: "Rensselaer, IN",     teams: 2, divisions: ["IMSEN"], lat: 40.94,  lng: -87.15 },
  { name: "Richmond High School",                        city: "Richmond, IN",       teams: 2, divisions: ["IHSEN"], lat: 39.83,  lng: -84.89 },
  { name: "Riley High School - Career and Technical Education", city: "South Bend, IN", teams: 2, divisions: ["IHSEN"], lat: 41.67, lng: -86.27 },
  { name: "Rossville Consolidated School District",      city: "Rossville, IN",      teams: 2, divisions: ["IHSEN"], lat: 40.42,  lng: -86.59 },

  { name: "Saint Joseph High School",                    city: "South Bend, IN",     teams: 2, divisions: ["IHSEN"], lat: 41.67,  lng: -86.27 },
  { name: "Saint Monica Catholic School",                city: "Indianapolis, IN",   teams: 2, divisions: ["IHSEN"], lat: 39.86,  lng: -86.18 },
  { name: "Salem High School",                           city: "Salem, IN",          teams: 2, divisions: ["IHSEN"], lat: 38.61,  lng: -86.10 },
  { name: "Scottsburg High School",                      city: "Scottsburg, IN",     teams: 3, divisions: ["IHSEN"], lat: 38.69,  lng: -85.77, logo: "/schools/scottsburg.webp" },
  { name: "Seeger Memorial Jr/Sr High School",           city: "West Lebanon, IN",   teams: 2, divisions: ["IHSEN"], lat: 40.28,  lng: -87.38 },
  { name: "Shenandoah High School",                      city: "Middletown, IN",     teams: 2, divisions: ["IHSEN"], lat: 40.06,  lng: -85.54, logo: "/schools/shenandoah.webp" },
  { name: "Shenandoah Middle School",                    city: "Middletown, IN",     teams: 2, divisions: ["IMSEN"], lat: 40.06,  lng: -85.55, logo: "/schools/shenandoah.webp" },
  { name: "Snider High School",                          city: "Fort Wayne, IN",     teams: 2, divisions: ["IHSEN"], lat: 41.12,  lng: -85.09, logo: "/schools/snider.png" },
  { name: "South Adams High School (and Middle School)", city: "Berne, IN",          teams: 2, divisions: ["IHSEN"], lat: 40.66,  lng: -84.95 },
  { name: "South Dearborn High School",                  city: "Aurora, IN",         teams: 2, divisions: ["IHSEN"], lat: 39.06,  lng: -84.90 },
  { name: "South Ripley High School",                    city: "Versailles, IN",     teams: 2, divisions: ["IHSEN"], lat: 39.07,  lng: -85.25 },
  { name: "South Side High School",                      city: "Fort Wayne, IN",     teams: 2, divisions: ["IHSEN"], lat: 41.12,  lng: -85.10 },
  { name: "Southridge Middle School",                    city: "Huntingburg, IN",    teams: 2, divisions: ["IMSEN"], lat: 38.30,  lng: -86.95 },
  { name: "Southside Middle School",                     city: "Muncie, IN",         teams: 2, divisions: ["IMSEN"], lat: 40.18,  lng: -85.40 },
  { name: "Southwood Jr/Sr",                             city: "Akron, IN",          teams: 2, divisions: ["IHSEN"], lat: 40.75,  lng: -86.03 },
  { name: "Speedway High School",                        city: "Speedway, IN",       teams: 2, divisions: ["IHSEN"], lat: 39.80,  lng: -86.24, logo: "/schools/speedway.png" },
  { name: "Springs Valley High School",                  city: "French Lick, IN",    teams: 2, divisions: ["IHSEN"], lat: 38.55,  lng: -86.62 },
  { name: "Springs Valley Jr High School",               city: "French Lick, IN",    teams: 2, divisions: ["IMSEN"], lat: 38.55,  lng: -86.62 },
  { name: "St. Theodore Guerin High School (aka Guerin Catholic High School)", city: "Noblesville, IN", teams: 2, divisions: ["IHSEN"], lat: 40.05, lng: -86.01, logo: "/schools/guerin-catholic.webp" },
  { name: "Switzerland County High school",              city: "Vevay, IN",          teams: 2, divisions: ["IHSEN"], lat: 38.74,  lng: -85.06 },
  { name: "Switzerland County Middle school",            city: "Vevay, IN",          teams: 2, divisions: ["IMSEN"], lat: 38.74,  lng: -85.07 },

  { name: "The Academy of Science and Entrepreneurship", city: "Bloomington, IN",    teams: 2, divisions: ["IHSEN"], lat: 39.17,  lng: -86.52 },
  { name: "Tippecanoe Valley High School",               city: "Akron, IN",          teams: 2, divisions: ["IHSEN"], lat: 41.06,  lng: -86.03 },
  { name: "Tri-Central Jr/Sr High School",               city: "Sharpsville, IN",    teams: 2, divisions: ["IHSEN"], lat: 40.60,  lng: -86.11 },
  { name: "Tri-North Middle School",                     city: "Bloomington, IN",    teams: 2, divisions: ["IMSEN"], lat: 39.17,  lng: -86.55 },
  { name: "Tri-Township High School",                    city: "New Harmony, IN",    teams: 2, divisions: ["IHSEN"], lat: 38.13,  lng: -87.93 },
  { name: "Triton Central High School",                  city: "Fairland, IN",       teams: 2, divisions: ["IHSEN"], lat: 39.66,  lng: -85.87 },

  { name: "Union City Jr/Sr High School",                city: "Union City, IN",     teams: 2, divisions: ["IHSEN"], lat: 40.20,  lng: -84.81, logo: "/schools/union-city.webp" },
  { name: "Union County High School",                    city: "Liberty, IN",        teams: 2, divisions: ["IHSEN"], lat: 39.64,  lng: -84.94 },
  { name: "University High School of Indiana",           city: "Carmel, IN",         teams: 2, divisions: ["IHSEN"], lat: 39.97,  lng: -86.14 },
  { name: "Urey Middle School",                          city: "Walkerton, IN",      teams: 2, divisions: ["IMSEN"], lat: 41.47,  lng: -86.49 },

  { name: "Wabash High School",                          city: "Wabash, IN",         teams: 2, divisions: ["IHSEN", "IUEN"], lat: 40.79,  lng: -85.82, logo: "/schools/wabash.webp" },
  { name: "Waldron Jr. Sr. High School",                 city: "Waldron, IN",        teams: 2, divisions: ["IHSEN"], lat: 39.77,  lng: -85.64 },
  { name: "Wawasee High School",                         city: "Syracuse, IN",       teams: 2, divisions: ["IHSEN"], lat: 41.43,  lng: -85.75 },
  { name: "Wayne High School / New Tech Academy",        city: "Fort Wayne, IN",     teams: 2, divisions: ["IHSEN"], lat: 41.08,  lng: -85.20 },
  { name: "Wes-Del High School",                         city: "Gaston, IN",         teams: 2, divisions: ["IHSEN"], lat: 40.32,  lng: -85.50, logo: "/schools/wes-del.webp" },
  { name: "Westfield High School",                       city: "Westfield, IN",      teams: 3, divisions: ["IHSEN"], lat: 40.04,  lng: -86.13, logo: "/schools/westfield.webp" },
  { name: "Whiteland Community High School",             city: "Whiteland, IN",      teams: 2, divisions: ["IHSEN"], lat: 39.55,  lng: -86.12 },
  { name: "William Henry Harrison High School",          city: "West Lafayette, IN", teams: 2, divisions: ["IHSEN"], lat: 40.42,  lng: -86.87 },
  { name: "Winchester Community High School",            city: "Winchester, IN",     teams: 2, divisions: ["IHSEN"], lat: 40.17,  lng: -84.98 },

  { name: "Zionsville Community High School",            city: "Zionsville, IN",     teams: 4, divisions: ["IHSEN"], lat: 39.95,  lng: -86.26 },
];
