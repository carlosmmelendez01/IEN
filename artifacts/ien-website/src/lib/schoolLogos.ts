// =============================================================================
// School logo lookup.
//
// The Champions data uses short names ("Carmel", "Ben Davis"), but logos are
// keyed off the full school names in src/data/schools.ts ("Carmel High School",
// "Ben Davis High School"). This helper normalizes both sides so we get an
// auto-match for the common case without having to copy logoUrl onto every
// champion row.
//
// Anywhere a champion needs a logo (Hall of Champions plaques, future per-
// school pages, etc.) should call findSchoolLogo() and fall back to the shield
// placeholder when undefined is returned.
// =============================================================================

import { SCHOOLS } from "@/data/schools";

// Words and suffixes that don't help identify a school — stripped from both
// sides during normalization so "Carmel" matches "Carmel High School".
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
  // Punctuation → spaces so "Wes-Del" and "Bluffton-Harrison" tokenize cleanly.
  s = s.replace(/[-'./,&()]/g, " ");
  for (const re of STRIP_PATTERNS) s = s.replace(re, " ");
  return s.replace(/\s+/g, " ").trim();
}

// Precomputed map: normalized school name -> logo path. Built once at module
// load. Schools without a logo are skipped so iteration order doesn't matter.
const LOGO_MAP: Map<string, string> = (() => {
  const m = new Map<string, string>();
  for (const s of SCHOOLS) {
    if (!s.logo) continue;
    const key = normalize(s.name);
    if (key && !m.has(key)) m.set(key, s.logo);
  }
  return m;
})();

/**
 * Resolve a champion's short school name to a logo path from src/data/schools.ts.
 * Returns undefined when no confident match exists — callers should render a
 * fallback placeholder rather than a generic stock image.
 */
export function findSchoolLogo(championSchool: string): string | undefined {
  const key = normalize(championSchool);
  if (!key) return undefined;

  // Exact normalized match — the common, unambiguous case.
  if (LOGO_MAP.has(key)) return LOGO_MAP.get(key);

  // Substring match as a safety net for variants we didn't anticipate.
  // Picks the longest matching school name so "Ben Davis University" doesn't
  // collapse onto "Ben Davis" when both are present.
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
