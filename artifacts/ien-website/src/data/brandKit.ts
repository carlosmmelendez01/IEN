export const BRAND_KIT_UPDATED = "August 2, 2026";

export const BRAND_ASSET_ZIP = "/brand-kit/ien-brand-assets.zip";
export const BRAND_CONTACT_EMAIL = "ienboard@indianaesportsnetwork.org";

export const brandBoilerplate = {
  short:
    "Indiana Esports Network is a nonprofit scholastic esports organization serving Indiana schools through competition, community, and career-connected learning.",
  standard:
    "Indiana Esports Network (IEN) is a nonprofit organization founded and led by Indiana educators. IEN operates scholastic esports leagues and events that help students compete, belong, and build future-ready skills through gaming.",
};

export const coreBrandColors = [
  {
    name: "IEN Navy",
    hex: "#0D1623",
    rgb: "13, 22, 35",
    use: "Primary background field for official IEN marks, headers, and coach-facing collateral.",
  },
  {
    name: "Torch Gold",
    hex: "#ECBF1A",
    rgb: "236, 191, 26",
    use: "Primary accent for calls to action, highlights, rules, and recognition moments.",
  },
  {
    name: "White",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    use: "Logo text, high-contrast text on navy, and clean space in print layouts.",
  },
];

export const websiteSupportColors = [
  {
    name: "Site Midnight",
    hex: "#091120",
    rgb: "9, 17, 32",
    use: "Website background and immersive page sections.",
  },
  {
    name: "Panel Navy",
    hex: "#0E182A",
    rgb: "14, 24, 42",
    use: "Cards, resource panels, and quiet content blocks.",
  },
  {
    name: "Gold Highlight",
    hex: "#EAC453",
    rgb: "234, 196, 83",
    use: "Accessible web text accents, borders, icons, and hover states.",
  },
  {
    name: "Steel",
    hex: "#B1BDCD",
    rgb: "177, 189, 205",
    use: "Secondary text on dark backgrounds.",
  },
  {
    name: "Signal Red",
    hex: "#EF4343",
    rgb: "239, 67, 67",
    use: "Warnings, closures, urgent schedule notes, and error states only.",
  },
];

export const logoAssets = [
  {
    title: "Primary Horizontal Logo",
    description:
      "Use this version when a navy logo field is acceptable, including flyers, newsletters, sponsor decks, and handouts.",
    href: "/brand-kit/ien-horizontal-logo-navy.png",
    preview: "/brand-kit/ien-horizontal-logo-navy.png",
    bestFor: "Light pages, printed documents, and coach packets",
  },
  {
    title: "Transparent Horizontal Logo",
    description:
      "Use this version on dark navy, black, or approved image backgrounds. The wordmark is white and needs contrast.",
    href: "/brand-kit/ien-horizontal-logo-transparent.png",
    preview: "/brand-kit/ien-horizontal-logo-transparent.png",
    bestFor: "Website headers, broadcast graphics, and dark social templates",
  },
  {
    title: "Stacked Main Mark",
    description:
      "Use the main mark when a square or centered placement is stronger than the horizontal lockup.",
    href: "/brand-kit/ien-main-logo-navy.png",
    preview: "/brand-kit/ien-main-logo-navy.png",
    bestFor: "Profile graphics, event signage, and title slides",
  },
  {
    title: "IEN Icon",
    description:
      "Use the icon only when the audience already knows IEN or when space is too small for the full wordmark.",
    href: "/brand-kit/ien-icon-transparent.png",
    preview: "/brand-kit/ien-icon-transparent.png",
    bestFor: "Avatars, watermarks, favicons, and small badges",
  },
];

export const programLockups = [
  {
    title: "IHSEN",
    description: "High school league references and event materials.",
    href: "/brand-kit/ien-ihsen-white-text.png",
    preview: "/brand-kit/ien-ihsen-white-text.png",
  },
  {
    title: "IMSEN",
    description: "Middle school league references and event materials.",
    href: "/brand-kit/ien-imsen-white-text.png",
    preview: "/brand-kit/ien-imsen-white-text.png",
  },
  {
    title: "IUEN",
    description: "Unified league references and event materials.",
    href: "/brand-kit/ien-iuen-white-text.png",
    preview: "/brand-kit/ien-iuen-white-text.png",
  },
];

export const logoRules = [
  {
    label: "Clear Space",
    rule: "Keep open space around the logo equal to at least the height of the torch flame inside the mark.",
  },
  {
    label: "Minimum Size",
    rule: "Keep the horizontal logo at least 180 px wide on screens or 1.5 in wide in print. Keep the icon at least 40 px wide on screens.",
  },
  {
    label: "Contrast",
    rule: "Use transparent white logo files only on dark or image backgrounds with enough contrast. Use the navy-field file on light pages.",
  },
  {
    label: "Co-branding",
    rule: "When pairing IEN with a school logo, give both marks equal breathing room and do not lock them together as a new combined logo.",
  },
];

export const doDontRules = {
  dos: [
    "Use approved PNG files from the brand kit downloads.",
    "Keep IEN Navy, Torch Gold, and white as the dominant colors.",
    "Use the full Indiana Esports Network name on first mention, then IEN after that.",
    "Describe schools as IEN member schools or participating schools.",
    "Send high-visibility public designs to IEN when the placement is prominent or sponsor-facing.",
  ],
  donts: [
    "Do not stretch, rotate, recolor, outline, or add shadows to the logo.",
    "Do not place white logo text on light or busy backgrounds.",
    "Do not rebuild the wordmark with a font or recreate the torch icon.",
    "Do not imply that a school-run event is officially operated by IEN unless IEN has approved that language.",
    "Do not use Signal Red as decoration; reserve it for urgent notices or warnings.",
  ],
};

export const typography = [
  {
    role: "Headings",
    family: "Oswald",
    weights: "600-700",
    usage:
      "Use uppercase for major headings, event titles, section labels, and calls to action.",
  },
  {
    role: "Body",
    family: "Lato",
    weights: "400, 700",
    usage:
      "Use sentence case for guidance, paragraphs, captions, tables, and coach communications.",
  },
  {
    role: "Logo Wordmark",
    family: "Custom artwork",
    weights: "N/A",
    usage:
      "Do not recreate the IEN wordmark with a font. Use the provided logo files.",
  },
];

export const coachChecklist = [
  "Use the approved IEN logo file for the background you are placing it on.",
  "Keep enough clear space around the logo.",
  "Use IEN Navy and Torch Gold as the primary brand colors.",
  "Use Oswald for short headings and Lato for readable body copy.",
  "Name the league correctly: IHSEN, IMSEN, IUEN, or Indiana Esports Network.",
  "Use student-first, coach-friendly language.",
  "Ask IEN before using the brand in sponsor-facing, merchandise, paid advertising, or large public signage.",
];
