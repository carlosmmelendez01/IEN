

import { SCHOOLS } from "@/data/schools";

const STRIP_PATTERNS: RegExp[] = [
  /\bcommunity\b/g,
  /\bpreparatory\b/g,
  /\bprep\b/g,
  /\bacademy\b/g,
  /\bcatholic\b/g,
  /\bjesuit\b/g,
  /\bjr\.?\s*\/?\s*sr\.?\b/g,
  /\bjunior\s*\/?\s*senior\b/g,
  /\bjr\.?\b/g,
  /\bsr\.?\b/g,
  /\bsenior\b/g,
  /\bhigh school\b/g,
  /\bmiddle school\b/g,
  /\belementary school\b/g,
  /\bschool\b/g,
  /\bschools\b/g,
  /\bthe\b/g,
  /\bof\b/g,
];

function normalize(name: string): string {
  let s = name.toLowerCase();

  s = s.replace(/[-'./,&()]/g, " ");
  for (const re of STRIP_PATTERNS) s = s.replace(re, " ");
  return s.replace(/\s+/g, " ").trim();
}

const LOGO_MAP: Map<string, string> = (() => {
  const m = new Map<string, string>();
  for (const s of SCHOOLS) {
    if (!s.logo) continue;
    const key = normalize(s.name);
    if (key && !m.has(key)) m.set(key, s.logo);
  }
  return m;
})();

export function findSchoolLogo(championSchool: string): string | undefined {
  const key = normalize(championSchool);
  if (!key) return undefined;

  if (LOGO_MAP.has(key)) return LOGO_MAP.get(key);

  let best: { key: string; logo: string } | undefined;
  for (const [schoolKey, logo] of LOGO_MAP) {
    const matches =
      schoolKey === key ||
      schoolKey.startsWith(key + " ") ||
      key.startsWith(schoolKey + " ") ||
      schoolKey.includes(" " + key + " ") ||
      key.includes(" " + schoolKey + " ");
    if (!matches) continue;
    if (!best || schoolKey.length > best.key.length) {
      best = { key: schoolKey, logo };
    }
  }
  return best?.logo;
}
