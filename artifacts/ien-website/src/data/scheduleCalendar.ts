import ihsenPlayoffsImage from "@assets/IHSEN Playoff Schedule.png";
import ihsenSeasonImage from "@assets/IHSEN Schedule.png";
import imsenFallImage from "@assets/IMSEN Fall.png";
import imsenSpringImage from "@assets/IMSEN Spring.png";
import iuenFallImage from "@assets/IUEN Fall.png";
import iuenSpringImage from "@assets/IUEN Spring.png";

export type ScheduleDivision = "IHSEN" | "IMSEN" | "IUEN";

export type ScheduleEventType =
  | "registration"
  | "meeting"
  | "game-week"
  | "playoffs"
  | "finals"
  | "break";

export type ScheduleGameDay = {
  day: string;
  titles: string[];
};

export type ScheduleEventAction = {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean;
};

export type ScheduleEvent = {
  id: string;
  title: string;
  type: ScheduleEventType;
  divisions: ScheduleDivision[];
  start: string;
  end?: string;
  time: string;
  location: string;
  description: string;
  gameDays?: ScheduleGameDay[];
  action?: ScheduleEventAction;
};

export type CoachOverviewCard = {
  id: string;
  division: ScheduleDivision;
  eyebrow: string;
  title: string;
  subtitle: string;
  dateRange: string;
  level: string;
  cost: string;
  matchTime: string;
  clubTime?: string;
  image: string;
  imageAlt: string;
  pdfHref: string;
  pdfLabel: string;
};

export type SchedulePdfDownload = {
  division: ScheduleDivision | "All";
  title: string;
  description: string;
  href: string;
};

export const IHSEN_CALENDAR_HREF = "/IHSEN_Calendar_2026-2027.pdf";
export const IMSEN_CALENDAR_HREF = "/IMSEN_Calendar_2026-2027.pdf";
export const IUEN_CALENDAR_HREF = "/IUEN_Calendar_2026-2027.pdf";

export const scheduleDivisions: Array<{
  id: ScheduleDivision;
  label: string;
  shortLabel: string;
  anchorId: string;
}> = [
  {
    id: "IHSEN",
    label: "High School",
    shortLabel: "IHSEN",
    anchorId: "high-school-schedules",
  },
  {
    id: "IMSEN",
    label: "Middle School",
    shortLabel: "IMSEN",
    anchorId: "middle-school-schedules",
  },
  {
    id: "IUEN",
    label: "Unified",
    shortLabel: "IUEN",
    anchorId: "unified-schedules",
  },
];

export const eventTypeLabels: Record<ScheduleEventType, string> = {
  registration: "Registration",
  meeting: "Coach meeting",
  "game-week": "Game week",
  playoffs: "Playoffs",
  finals: "Finals",
  break: "Break",
};

const allDivisions: ScheduleDivision[] = ["IHSEN", "IMSEN", "IUEN"];

const ihsenGameDays: ScheduleGameDay[] = [
  { day: "Monday", titles: ["Apex Legends", "Rocket League"] },
  { day: "Tuesday", titles: ["Marvel Rivals", "Chess", "Minecraft"] },
  { day: "Wednesday", titles: ["Super Smash Bros", "Valorant", "Tetris"] },
  { day: "Thursday", titles: ["Overwatch", "Mario Kart 8 Deluxe", "iRacing"] },
];

const imsenFallGameDays: ScheduleGameDay[] = [
  { day: "Monday", titles: ["Marvel Rivals"] },
  { day: "Tuesday", titles: ["Mario Kart 8 Deluxe"] },
  { day: "Wednesday", titles: ["Minecraft"] },
  { day: "Thursday", titles: ["Tetris"] },
];

const imsenSpringGameDays: ScheduleGameDay[] = [
  { day: "Monday", titles: ["Fortnite"] },
  { day: "Tuesday", titles: ["Super Smash Bros"] },
  { day: "Wednesday", titles: ["Rocket League"] },
  { day: "Thursday", titles: ["Chess"] },
];

const iuenFallGameDays: ScheduleGameDay[] = [
  { day: "Tuesday", titles: ["Super Smash Bros"] },
];

const iuenSpringGameDays: ScheduleGameDay[] = [
  { day: "Tuesday", titles: ["Rocket League"] },
];

type WeekConfig = {
  id: string;
  title: string;
  division: ScheduleDivision;
  start: string;
  end?: string;
  type?: Extract<ScheduleEventType, "game-week" | "playoffs">;
  seasonLabel: string;
  time: string;
  gameDays: ScheduleGameDay[];
  pdfHref: string;
};

type WeekTuple = readonly [string, string, string, string?];

const createWeekEvent = ({
  id,
  title,
  division,
  start,
  end,
  type = "game-week",
  seasonLabel,
  time,
  gameDays,
  pdfHref,
}: WeekConfig): ScheduleEvent => ({
  id,
  title,
  type,
  divisions: [division],
  start,
  end,
  time,
  location: "LeagueOS",
  description: `${seasonLabel}. Select a date in this week to see the game titles scheduled for that day.`,
  gameDays,
  action: {
    label: `${division} calendar PDF`,
    href: pdfHref,
    download: true,
  },
});

const meetingEvent = (
  id: string,
  title: string,
  start: string,
  divisions: ScheduleDivision[],
  description: string,
  time = "Time TBA",
  action?: ScheduleEventAction,
): ScheduleEvent => ({
  id,
  title,
  type: "meeting",
  divisions,
  start,
  time,
  location: action?.external ? "Google Meet" : "Coach meeting",
  description,
  action,
});

const registrationEvent = (
  id: string,
  title: string,
  start: string,
  divisions: ScheduleDivision[],
  description: string,
): ScheduleEvent => ({
  id,
  title,
  type: "registration",
  divisions,
  start,
  time: "All day",
  location: "IEN registration forms",
  description,
  action: {
    label: "Registration forms",
    href: "/forms",
  },
});

const ihsenWeeks: ScheduleEvent[] = [
  ["ihsen-preseason-1", "IHSEN Preseason Week 1", "2026-10-12", "2026-10-15"],
  ["ihsen-preseason-2", "IHSEN Preseason Week 2", "2026-10-19", "2026-10-22"],
  ["ihsen-preseason-3", "IHSEN Preseason Week 3", "2026-10-26", "2026-10-29"],
  ["ihsen-week-1", "IHSEN Week 1", "2026-11-02", "2026-11-05"],
  ["ihsen-week-2", "IHSEN Week 2", "2026-11-09", "2026-11-12"],
  ["ihsen-week-3", "IHSEN Week 3", "2026-11-16", "2026-11-19"],
  ["ihsen-week-4", "IHSEN Week 4", "2026-11-30", "2026-12-03"],
  ["ihsen-week-5", "IHSEN Week 5", "2026-12-07", "2026-12-10"],
  ["ihsen-week-6", "IHSEN Week 6", "2027-01-04", "2027-01-07"],
  ["ihsen-week-7", "IHSEN Week 7", "2027-01-11", "2027-01-14"],
  ["ihsen-week-8", "IHSEN Week 8", "2027-01-25", "2027-01-28"],
  ["ihsen-week-9", "IHSEN Week 9", "2027-02-01", "2027-02-04"],
  ["ihsen-week-10", "IHSEN Week 10", "2027-02-08", "2027-02-11"],
].map(([id, title, start, end]) =>
  createWeekEvent({
    id,
    title,
    division: "IHSEN",
    start,
    end,
    seasonLabel: "High school regular season window",
    time: "Mon-Thu | 4:00 PM CT / 5:00 PM ET",
    gameDays: ihsenGameDays,
    pdfHref: IHSEN_CALENDAR_HREF,
  }),
);

const ihsenPlayoffs: ScheduleEvent[] = [
  ["ihsen-playoff-1", "IHSEN Playoff Week 1", "2027-02-22", "2027-02-25"],
  ["ihsen-playoff-2", "IHSEN Playoff Week 2", "2027-03-01", "2027-03-04"],
  ["ihsen-playoff-3", "IHSEN Playoff Week 3", "2027-03-08", "2027-03-11"],
  ["ihsen-playoff-4", "IHSEN Playoff Week 4", "2027-03-14", "2027-03-18"],
].map(([id, title, start, end]) =>
  createWeekEvent({
    id,
    title,
    division: "IHSEN",
    start,
    end,
    type: "playoffs",
    seasonLabel: "High school varsity postseason",
    time: "Mon-Thu | match times by title",
    gameDays: ihsenGameDays,
    pdfHref: IHSEN_CALENDAR_HREF,
  }),
);

const imsenFallWeeks: ScheduleEvent[] = [
  ["imsen-preseason-1", "IMSEN Fall Preseason 1", "2026-09-07", "2026-09-10"],
  ["imsen-preseason-2", "IMSEN Fall Preseason 2", "2026-09-14", "2026-09-17"],
  ["imsen-fall-week-1", "IMSEN Fall Week 1", "2026-09-21", "2026-09-24"],
  ["imsen-fall-week-2", "IMSEN Fall Week 2", "2026-09-28", "2026-10-01"],
  ["imsen-fall-week-3", "IMSEN Fall Week 3", "2026-10-19", "2026-10-22"],
  ["imsen-fall-week-4", "IMSEN Fall Week 4", "2026-10-26", "2026-10-29"],
  ["imsen-fall-week-5", "IMSEN Fall Week 5", "2026-11-02", "2026-11-05"],
  ["imsen-fall-week-6", "IMSEN Fall Week 6", "2026-11-09", "2026-11-12"],
].map(([id, title, start, end]) =>
  createWeekEvent({
    id,
    title,
    division: "IMSEN",
    start,
    end,
    seasonLabel: "Middle school fall season",
    time: "Mon-Thu | 3:30 PM CT / 4:30 PM ET",
    gameDays: imsenFallGameDays,
    pdfHref: IMSEN_CALENDAR_HREF,
  }),
);

const imsenFallPlayoffs: ScheduleEvent[] = [
  ["imsen-fall-playoff-1", "IMSEN Fall Playoff 1", "2026-11-16", "2026-11-19"],
  ["imsen-fall-playoff-2", "IMSEN Fall Playoff 2", "2026-11-30", "2026-12-03"],
  ["imsen-fall-playoff-3", "IMSEN Fall Playoff 3", "2026-12-07", "2026-12-10"],
].map(([id, title, start, end]) =>
  createWeekEvent({
    id,
    title,
    division: "IMSEN",
    start,
    end,
    type: "playoffs",
    seasonLabel: "Middle school fall postseason",
    time: "Mon-Thu | 3:30 PM CT / 4:30 PM ET",
    gameDays: imsenFallGameDays,
    pdfHref: IMSEN_CALENDAR_HREF,
  }),
);

const imsenSpringWeeks: ScheduleEvent[] = [
  ["imsen-spring-week-1", "IMSEN Spring Week 1", "2027-01-11", "2027-01-14"],
  ["imsen-spring-week-2", "IMSEN Spring Week 2", "2027-01-18", "2027-01-21"],
  ["imsen-spring-week-3", "IMSEN Spring Week 3", "2027-01-25", "2027-01-28"],
  ["imsen-spring-week-4", "IMSEN Spring Week 4", "2027-02-01", "2027-02-04"],
  ["imsen-spring-week-5", "IMSEN Spring Week 5", "2027-02-08", "2027-02-11"],
  ["imsen-spring-week-6", "IMSEN Spring Week 6", "2027-02-22", "2027-02-25"],
].map(([id, title, start, end]) =>
  createWeekEvent({
    id,
    title,
    division: "IMSEN",
    start,
    end,
    seasonLabel: "Middle school spring season",
    time: "Mon-Thu | 3:30 PM CT / 4:30 PM ET",
    gameDays: imsenSpringGameDays,
    pdfHref: IMSEN_CALENDAR_HREF,
  }),
);

const imsenSpringPlayoffs: ScheduleEvent[] = [
  ["imsen-spring-playoff-1", "IMSEN Spring Playoff 1", "2027-03-01", "2027-03-04"],
  ["imsen-spring-playoff-2", "IMSEN Spring Playoff 2", "2027-03-08", "2027-03-11"],
  ["imsen-spring-playoff-3", "IMSEN Spring Playoff 3", "2027-04-05", "2027-04-08"],
].map(([id, title, start, end]) =>
  createWeekEvent({
    id,
    title,
    division: "IMSEN",
    start,
    end,
    type: "playoffs",
    seasonLabel: "Middle school spring postseason",
    time: "Mon-Thu | 3:30 PM CT / 4:30 PM ET",
    gameDays: imsenSpringGameDays,
    pdfHref: IMSEN_CALENDAR_HREF,
  }),
);

const iuenFallWeeks: ScheduleEvent[] = ([
  ["iuen-preseason-1", "IUEN Fall Preseason 1", "2026-09-08"],
  ["iuen-preseason-2", "IUEN Fall Preseason 2", "2026-09-15"],
  ["iuen-fall-week-1", "IUEN Fall Week 1", "2026-09-22"],
  ["iuen-fall-week-2", "IUEN Fall Week 2", "2026-09-29"],
  ["iuen-fall-week-3", "IUEN Fall Week 3", "2026-10-20"],
  ["iuen-fall-week-4", "IUEN Fall Week 4", "2026-10-27"],
  ["iuen-fall-week-5", "IUEN Fall Week 5", "2026-11-03"],
  ["iuen-fall-week-6", "IUEN Fall Week 6", "2026-11-10"],
] satisfies WeekTuple[]).map(([id, title, start]) =>
  createWeekEvent({
    id,
    title,
    division: "IUEN",
    start,
    seasonLabel: "Unified fall season",
    time: "Tuesday | 3:30 PM CT / 4:30 PM ET",
    gameDays: iuenFallGameDays,
    pdfHref: IUEN_CALENDAR_HREF,
  }),
);

const iuenFallPlayoffs: ScheduleEvent[] = ([
  ["iuen-fall-playoff-1", "IUEN Fall Playoff 1", "2026-11-17"],
  ["iuen-fall-playoff-2", "IUEN Fall Playoff 2", "2026-12-01"],
  ["iuen-fall-playoff-3", "IUEN Fall Playoff 3", "2026-12-07", "2026-12-08"],
] satisfies WeekTuple[]).map(([id, title, start, end]) =>
  createWeekEvent({
    id,
    title,
    division: "IUEN",
    start,
    end,
    type: "playoffs",
    seasonLabel: "Unified fall postseason",
    time: "Tuesday | 3:30 PM CT / 4:30 PM ET",
    gameDays: iuenFallGameDays,
    pdfHref: IUEN_CALENDAR_HREF,
  }),
);

const iuenSpringWeeks: ScheduleEvent[] = ([
  ["iuen-spring-week-1", "IUEN Spring Week 1", "2027-01-12"],
  ["iuen-spring-week-2", "IUEN Spring Week 2", "2027-01-19"],
  ["iuen-spring-week-3", "IUEN Spring Week 3", "2027-01-26"],
  ["iuen-spring-week-4", "IUEN Spring Week 4", "2027-02-02"],
  ["iuen-spring-week-5", "IUEN Spring Week 5", "2027-02-09"],
  ["iuen-spring-week-6", "IUEN Spring Week 6", "2027-02-23"],
] satisfies WeekTuple[]).map(([id, title, start]) =>
  createWeekEvent({
    id,
    title,
    division: "IUEN",
    start,
    seasonLabel: "Unified spring season",
    time: "Tuesday | 3:30 PM CT / 4:30 PM ET",
    gameDays: iuenSpringGameDays,
    pdfHref: IUEN_CALENDAR_HREF,
  }),
);

const iuenSpringPlayoffs: ScheduleEvent[] = [
  ["iuen-spring-playoff-1", "IUEN Spring Playoff 1", "2027-03-01", "2027-03-02"],
  ["iuen-spring-playoff-2", "IUEN Spring Playoff 2", "2027-03-08", "2027-03-09"],
  ["iuen-spring-playoff-3", "IUEN Spring Playoff 3", "2027-04-05", "2027-04-06"],
].map(([id, title, start, end]) =>
  createWeekEvent({
    id,
    title,
    division: "IUEN",
    start,
    end,
    type: "playoffs",
    seasonLabel: "Unified spring postseason",
    time: "Tuesday | 3:30 PM CT / 4:30 PM ET",
    gameDays: iuenSpringGameDays,
    pdfHref: IUEN_CALENDAR_HREF,
  }),
);

const keyDates: ScheduleEvent[] = [
  registrationEvent(
    "fall-registration-opens",
    "Fall registration opens",
    "2026-08-12",
    allDivisions,
    "Registration opens for high school, middle school, and Unified fall programs.",
  ),
  registrationEvent(
    "fall-registration-closes-imsen-iuen",
    "IMSEN & IUEN fall registration closes",
    "2026-09-04",
    ["IMSEN", "IUEN"],
    "Fall registration closes for middle school and Unified programs.",
  ),
  registrationEvent(
    "ihsen-registration-closes",
    "IHSEN registration closes",
    "2026-10-19",
    ["IHSEN"],
    "High school registration closes as the second preseason week begins.",
  ),
  registrationEvent(
    "spring-registration-opens",
    "Spring registration opens",
    "2026-11-30",
    ["IMSEN", "IUEN"],
    "Spring registration opens for middle school and Unified programs.",
  ),
  registrationEvent(
    "spring-registration-closes",
    "Spring registration closes",
    "2027-01-08",
    ["IMSEN", "IUEN"],
    "Spring registration closes for middle school and Unified programs.",
  ),
  meetingEvent(
    "mandatory-coaches-august",
    "Mandatory Coaches Meeting",
    "2026-08-12",
    allDivisions,
    "Mandatory start-of-season coaches meeting listed across the official IHSEN, IMSEN, and IUEN calendars.",
  ),
  meetingEvent(
    "unified-coaches-september",
    "Unified Coaches Meeting",
    "2026-09-01",
    ["IUEN"],
    "Fall season, registration, and Unified program updates with coaches.",
    "6:30 PM CT / 7:30 PM ET",
    {
      label: "Join Google Meet",
      href: "https://meet.google.com/vuc-injb-nzz",
      external: true,
    },
  ),
  meetingEvent(
    "coaches-september",
    "Coaches Meeting",
    "2026-09-10",
    allDivisions,
    "Monthly coaches meeting listed on the official season calendars.",
    "Time TBA",
    {
      label: "Join Google Meet",
      href: "https://meet.google.com/msa-qnbq-qju",
      external: true,
    },
  ),
  meetingEvent(
    "coaches-october",
    "Coaches Meeting",
    "2026-10-08",
    allDivisions,
    "Monthly coaches meeting listed on the official season calendars.",
  ),
  meetingEvent(
    "coaches-november",
    "Coaches Meeting",
    "2026-11-12",
    allDivisions,
    "Monthly coaches meeting listed on the official season calendars.",
  ),
  meetingEvent(
    "coaches-december",
    "Coaches Meeting",
    "2026-12-10",
    allDivisions,
    "Monthly coaches meeting listed on the official season calendars.",
  ),
  meetingEvent(
    "mandatory-coaches-january",
    "Mandatory Coaches Meeting",
    "2027-01-20",
    allDivisions,
    "Mandatory spring coaches meeting listed across the official IHSEN, IMSEN, and IUEN calendars.",
  ),
  meetingEvent(
    "coaches-february",
    "Coaches Meeting",
    "2027-02-17",
    allDivisions,
    "Monthly coaches meeting listed on the official season calendars.",
  ),
  meetingEvent(
    "coaches-march",
    "Coaches Meeting",
    "2027-03-17",
    allDivisions,
    "Monthly coaches meeting listed on the official season calendars.",
  ),
  meetingEvent(
    "coaches-april",
    "Coaches Meeting",
    "2027-04-21",
    allDivisions,
    "Monthly coaches meeting listed on the official season calendars.",
  ),
  {
    id: "ihsen-thanksgiving-break",
    title: "IHSEN Break Week",
    type: "break",
    divisions: ["IHSEN"],
    start: "2026-11-23",
    end: "2026-11-29",
    time: "All week",
    location: "No regular matches",
    description: "High school break week before Week 4 begins on November 30.",
  },
  {
    id: "ihsen-winter-break",
    title: "IHSEN Winter Break",
    type: "break",
    divisions: ["IHSEN"],
    start: "2026-12-14",
    end: "2027-01-01",
    time: "All week",
    location: "No regular matches",
    description: "High school winter break window listed on the official calendar.",
  },
  {
    id: "ihsen-january-break",
    title: "IHSEN Break Week",
    type: "break",
    divisions: ["IHSEN"],
    start: "2027-01-18",
    end: "2027-01-24",
    time: "All week",
    location: "No regular matches",
    description: "High school break week before Week 8 begins on January 25.",
  },
  {
    id: "imsen-iuen-october-break",
    title: "IMSEN & IUEN Fall Break",
    type: "break",
    divisions: ["IMSEN", "IUEN"],
    start: "2026-10-05",
    end: "2026-10-18",
    time: "All week",
    location: "No regular matches",
    description: "Middle School and Unified fall break window before play resumes the week of October 19.",
  },
  {
    id: "imsen-iuen-thanksgiving-break",
    title: "IMSEN & IUEN Break Week",
    type: "break",
    divisions: ["IMSEN", "IUEN"],
    start: "2026-11-23",
    end: "2026-11-29",
    time: "All week",
    location: "No regular matches",
    description: "Middle School and Unified break week before fall playoffs continue.",
  },
  {
    id: "imsen-iuen-winter-break",
    title: "IMSEN & IUEN Winter Break",
    type: "break",
    divisions: ["IMSEN", "IUEN"],
    start: "2026-12-14",
    end: "2027-01-01",
    time: "All week",
    location: "No regular matches",
    description: "Middle School and Unified winter break window listed on the official calendars.",
  },
  {
    id: "imsen-iuen-spring-break",
    title: "IMSEN & IUEN Spring Break",
    type: "break",
    divisions: ["IMSEN", "IUEN"],
    start: "2027-03-14",
    end: "2027-04-04",
    time: "All week",
    location: "No regular matches",
    description: "Middle School and Unified spring break window before final playoff week.",
  },
  {
    id: "imsen-iuen-fall-finals",
    title: "IMSEN & IUEN Fall Finals",
    type: "finals",
    divisions: ["IMSEN", "IUEN"],
    start: "2026-12-12",
    time: "Schedule TBA",
    location: "IEN event venue",
    description: "Middle School and Unified fall seasons conclude with finals competition.",
    action: {
      label: "IMSEN calendar PDF",
      href: IMSEN_CALENDAR_HREF,
      download: true,
    },
  },
  {
    id: "state-finals-2027",
    title: "IEN State Finals",
    type: "finals",
    divisions: allDivisions,
    start: "2027-04-24",
    time: "Full event schedule TBA",
    location: "Indiana",
    description: "IHSEN, IMSEN, and IUEN champions are crowned at the annual in-person State Finals.",
  },
];

export const scheduleEvents: ScheduleEvent[] = [
  ...keyDates,
  ...ihsenWeeks,
  ...ihsenPlayoffs,
  ...imsenFallWeeks,
  ...imsenFallPlayoffs,
  ...imsenSpringWeeks,
  ...imsenSpringPlayoffs,
  ...iuenFallWeeks,
  ...iuenFallPlayoffs,
  ...iuenSpringWeeks,
  ...iuenSpringPlayoffs,
].sort((a, b) => a.start.localeCompare(b.start) || a.title.localeCompare(b.title));

export const coachOverviewCards: CoachOverviewCard[] = [
  {
    id: "ihsen-regular-season",
    division: "IHSEN",
    eyebrow: "IHSEN | Fall / Winter 2026",
    title: "IHSEN Regular Season",
    subtitle:
      "High school competition across the full 2026-27 title lineup. Varsity teams earn playoff seeding through regular season play.",
    dateRange: "Oct 12, 2026 - Feb 8, 2027",
    level: "High School | Grades 9-12",
    cost: "$100 / school for Varsity | Club is free",
    matchTime: "Mon-Thu | Varsity 4:00 PM CT / 5:00 PM ET",
    clubTime: "Club queues: 3:00 PM CT / 4:00 PM ET or 4:00 PM CT / 5:00 PM ET",
    image: ihsenSeasonImage,
    imageAlt: "IHSEN 2026-2027 regular season one-page schedule",
    pdfHref: IHSEN_CALENDAR_HREF,
    pdfLabel: "IHSEN calendar PDF",
  },
  {
    id: "ihsen-playoffs",
    division: "IHSEN",
    eyebrow: "IHSEN | Playoffs 2027",
    title: "IHSEN Playoffs & State Finals",
    subtitle:
      "Varsity teams advance through the postseason path toward the in-person IEN State Finals.",
    dateRange: "Feb 22 - Apr 24, 2027",
    level: "High School Varsity Teams",
    cost: "Included with regular season registration",
    matchTime: "Mon-Thu | Same title cadence as regular season",
    image: ihsenPlayoffsImage,
    imageAlt: "IHSEN 2026-2027 playoff one-page schedule",
    pdfHref: IHSEN_CALENDAR_HREF,
    pdfLabel: "IHSEN calendar PDF",
  },
  {
    id: "imsen-fall",
    division: "IMSEN",
    eyebrow: "IMSEN | Fall 2026",
    title: "IMSEN Fall Season",
    subtitle:
      "Middle school fall competition featuring Marvel Rivals, Mario Kart 8 Deluxe, Minecraft, and Tetris.",
    dateRange: "Aug 12 - Dec 12, 2026",
    level: "Middle School | Grades 6-8",
    cost: "$100 / school for Varsity | Club is free",
    matchTime: "Mon-Thu | 3:30 PM CT / 4:30 PM ET",
    clubTime: "Club queue: 3:30 PM CT / 4:30 PM ET",
    image: imsenFallImage,
    imageAlt: "IMSEN 2026-2027 fall one-page schedule",
    pdfHref: IMSEN_CALENDAR_HREF,
    pdfLabel: "IMSEN calendar PDF",
  },
  {
    id: "imsen-spring",
    division: "IMSEN",
    eyebrow: "IMSEN | Spring 2027",
    title: "IMSEN Spring Season",
    subtitle:
      "Spring middle school competition featuring Fortnite, Super Smash Bros, Rocket League, and Chess.",
    dateRange: "Nov 30, 2026 - Apr 24, 2027",
    level: "Middle School | Grades 6-8",
    cost: "$100 / school for Varsity | Club is free",
    matchTime: "Mon-Thu | 3:30 PM CT / 4:30 PM ET",
    clubTime: "Club queue: 3:30 PM CT / 4:30 PM ET",
    image: imsenSpringImage,
    imageAlt: "IMSEN 2026-2027 spring one-page schedule",
    pdfHref: IMSEN_CALENDAR_HREF,
    pdfLabel: "IMSEN calendar PDF",
  },
  {
    id: "iuen-fall",
    division: "IUEN",
    eyebrow: "IUEN | Fall 2026",
    title: "IUEN Fall Season",
    subtitle:
      "Unified Athletes and Partners compete together in Super Smash Bros on Tuesdays.",
    dateRange: "Aug 12 - Dec 12, 2026",
    level: "High School & Middle School | Unified",
    cost: "Free to all schools and students",
    matchTime: "Tuesdays | 3:30 PM CT / 4:30 PM ET",
    image: iuenFallImage,
    imageAlt: "IUEN 2026-2027 fall one-page schedule",
    pdfHref: IUEN_CALENDAR_HREF,
    pdfLabel: "IUEN calendar PDF",
  },
  {
    id: "iuen-spring",
    division: "IUEN",
    eyebrow: "IUEN | Spring 2027",
    title: "IUEN Spring Season",
    subtitle:
      "Unified teams compete in Rocket League on Tuesdays, concluding at IEN State Finals.",
    dateRange: "Nov 30, 2026 - Apr 24, 2027",
    level: "High School & Middle School | Unified",
    cost: "Free to all schools and students",
    matchTime: "Tuesdays | 3:30 PM CT / 4:30 PM ET",
    image: iuenSpringImage,
    imageAlt: "IUEN 2026-2027 spring one-page schedule",
    pdfHref: IUEN_CALENDAR_HREF,
    pdfLabel: "IUEN calendar PDF",
  },
];

export const schedulePdfDownloads: SchedulePdfDownload[] = [
  {
    division: "IHSEN",
    title: "IHSEN Calendar",
    description: "High school regular season, playoffs, meetings, and State Finals.",
    href: IHSEN_CALENDAR_HREF,
  },
  {
    division: "IMSEN",
    title: "IMSEN Calendar",
    description: "Middle school fall and spring seasons, playoffs, and finals.",
    href: IMSEN_CALENDAR_HREF,
  },
  {
    division: "IUEN",
    title: "IUEN Calendar",
    description: "Unified fall and spring seasons, meetings, and finals.",
    href: IUEN_CALENDAR_HREF,
  },
  {
    division: "All",
    title: "Rules & Policies",
    description: "Bylaws, title rulesets, LeagueOS guidance, and coach resources.",
    href: "/rules-policies",
  },
];
