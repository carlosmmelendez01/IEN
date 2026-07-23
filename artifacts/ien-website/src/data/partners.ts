import spinLogo from "@assets/White_SPIN_Icon_1776776398973.png";
import gravityLogo from "@assets/Gravity_Gaming_Logo_1776776398973.png";
import leagueOSLogo from "@assets/LeagueOS_1776776398973.jpg";
import mcdonaldsLogo from "@assets/McDonald's_Golden_Arches_1776776398973.png";
import zotacLogo from "@assets/Zotac_Vertical_Logo_1776776398973.png";
import starfallLogo from "@assets/Sponsor_Logo_01_1776776398973.png";

export type PartnerCategoryKey =
  | "strategic"
  | "technology"
  | "education"
  | "workforce"
  | "community"
  | "founding";

export type Partner = {
  name: string;
  category: string;
  relationshipLabel?: string;
  description: string;
  logo?: string;
  logoAlt?: string;
  logoTreatment?: "light" | "dark";
  url?: string;
  linkLabel?: string;
  featured?: boolean;
  initials?: string;
};

export type PartnerCategory = {
  key: PartnerCategoryKey;
  title: string;
  description: string;
  shortDescription: string;
  limited?: boolean;
  partners: Partner[];
};

export const partners: Partner[] = [
  {
    name: "Stay Plugged In",
    category: "Education and Recruiting Partner",
    relationshipLabel: "Student Pathways Partner",
    description:
      "Helping IEN students explore college esports, recruiting opportunities, scholarships, and career pathways beyond competition.",
    logo: spinLogo,
    logoAlt: "Stay Plugged In logo",
    logoTreatment: "dark",
    url: "https://www.staypluggedin.com",
    linkLabel: "Visit Stay Plugged In",
    featured: true,
    initials: "SPIN",
  },
  {
    name: "Gravity Gaming by ByteSpeed",
    category: "Technology Partner",
    relationshipLabel: "Official Hardware Partner",
    description:
      "Providing gaming hardware, equipment solutions, event support, and technical expertise for IEN competitions.",
    logo: gravityLogo,
    logoAlt: "Gravity Gaming by ByteSpeed logo",
    logoTreatment: "light",
    url: "https://www.bytespeed.com",
    linkLabel: "Visit ByteSpeed",
    featured: true,
    initials: "GG",
  },
  {
    name: "LeagueOS",
    category: "Competition Technology Partner",
    relationshipLabel: "Official Competition Platform",
    description:
      "Powering IEN registration, scheduling, standings, brackets, statistics, and league operations.",
    logo: leagueOSLogo,
    logoAlt: "LeagueOS logo",
    logoTreatment: "light",
    url: "https://leagueos.gg",
    linkLabel: "Visit LeagueOS",
    featured: true,
    initials: "LOS",
  },
  {
    name: "Zotac Gaming",
    category: "Technology Partner",
    relationshipLabel: "Hardware Partner",
    description:
      "Supporting competition-ready gaming hardware and event technology represented in current IEN partner assets.",
    logo: zotacLogo,
    logoAlt: "Zotac Gaming logo",
    logoTreatment: "dark",
    url: "https://www.zotac.com",
    linkLabel: "Visit Zotac Gaming",
    initials: "ZG",
  },
  {
    name: "Riverview Health Arena",
    category: "Events and Venues",
    relationshipLabel: "Event Venue",
    description:
      "Hosting IEN championship experiences referenced in current IEN event content.",
    initials: "RHA",
  },
  {
    name: "McDonald's",
    category: "Community Supporter",
    relationshipLabel: "Community Supporter",
    description:
      "Investing in Indiana students, school programs, events, and community engagement across the IEN network.",
    logo: mcdonaldsLogo,
    logoAlt: "McDonald's Golden Arches logo",
    url: "https://www.mcdonalds.com",
    linkLabel: "Visit McDonald's",
    initials: "M",
  },
  {
    name: "Starfall PR",
    category: "Strategic and Creative Partner",
    relationshipLabel: "Communications Partner",
    description:
      "Supporting IEN through communications, public relations, storytelling, and organizational visibility.",
    logo: starfallLogo,
    logoAlt: "Starfall PR logo",
    logoTreatment: "dark",
    url: "https://www.starfallpr.com",
    linkLabel: "Visit Starfall PR",
    featured: true,
    initials: "SPR",
  },
];

const byName = new Map(partners.map((partner) => [partner.name, partner]));

export const featuredPartners = partners.filter(
  (partner) => partner.featured,
);

export const partnerCategories: PartnerCategory[] = [
  {
    key: "strategic",
    title: "Strategic",
    shortDescription: "Multi-year, organization-wide alignment",
    description:
      "Multi-year partners aligned to IEN's statewide mission, school growth, student opportunities, and long-term organizational direction.",
    partners: [
      byName.get("Stay Plugged In"),
      byName.get("Gravity Gaming by ByteSpeed"),
      byName.get("LeagueOS"),
      byName.get("Starfall PR"),
    ].filter(Boolean) as Partner[],
  },
  {
    key: "technology",
    title: "Technology",
    shortDescription: "Hardware, platforms & streaming",
    description:
      "Partners supporting league management, gaming hardware, streaming, networking, event infrastructure, and competition operations.",
    partners: [
      byName.get("LeagueOS"),
      byName.get("Gravity Gaming by ByteSpeed"),
      byName.get("Zotac Gaming"),
    ].filter(Boolean) as Partner[],
  },
  {
    key: "education",
    title: "Education",
    shortDescription: "Universities & curriculum",
    description:
      "Partners connecting students to colleges, curriculum, recruiting, scholarships, certifications, and postsecondary pathways.",
    partners: [byName.get("Stay Plugged In")].filter(Boolean) as Partner[],
  },
  {
    key: "workforce",
    title: "Workforce",
    shortDescription: "Employers & talent pipeline",
    description:
      "Partners helping students understand career pathways, industry skills, talent pipelines, and real opportunities beyond competition.",
    partners: [
      byName.get("Stay Plugged In"),
      byName.get("McDonald's"),
    ].filter(Boolean) as Partner[],
  },
  {
    key: "community",
    title: "Community",
    shortDescription: "Local support for local schools",
    description:
      "Partners investing in Indiana students, school programs, local events, venues, and community engagement.",
    partners: [
      byName.get("McDonald's"),
      byName.get("Riverview Health Arena"),
    ].filter(Boolean) as Partner[],
  },
  {
    key: "founding",
    title: "Founding",
    shortDescription: "A named place in IEN history - limited",
    description:
      "A limited recognition category for partners who help define named places in IEN history.",
    limited: true,
    partners: [],
  },
];
