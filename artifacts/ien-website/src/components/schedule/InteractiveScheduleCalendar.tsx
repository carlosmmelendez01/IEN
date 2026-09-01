import { useMemo, useState } from "react";
import {
  CalendarCheck,
  CalendarDays,
  CalendarPlus,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  ExternalLink,
  FileText,
  Gamepad2,
  MapPin,
  UsersRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  eventTypeLabels,
  scheduleDivisions,
  scheduleEvents,
  type ScheduleDivision,
  type ScheduleEvent,
  type ScheduleEventType,
} from "@/data/scheduleCalendar";

const eventTypeOptions: ScheduleEventType[] = [
  "registration",
  "meeting",
  "game-week",
  "playoffs",
  "finals",
  "break",
];

const divisionStyles: Record<ScheduleDivision, string> = {
  IHSEN: "border-sky-300/40 bg-sky-400/10 text-sky-100",
  IMSEN: "border-emerald-300/40 bg-emerald-400/10 text-emerald-100",
  IUEN: "border-violet-300/40 bg-violet-400/10 text-violet-100",
};

const eventTypeStyles: Record<
  ScheduleEventType,
  {
    dot: string;
    chip: string;
    label: string;
  }
> = {
  registration: {
    dot: "bg-cyan-300",
    chip: "border-cyan-300/35 bg-cyan-300/10 text-cyan-100",
    label: "text-cyan-200",
  },
  meeting: {
    dot: "bg-[#ef4343]",
    chip: "border-[#ef4343]/45 bg-[#ef4343]/12 text-red-100",
    label: "text-red-200",
  },
  "game-week": {
    dot: "bg-sky-300",
    chip: "border-sky-300/35 bg-sky-300/10 text-sky-100",
    label: "text-sky-200",
  },
  playoffs: {
    dot: "bg-orange-300",
    chip: "border-orange-300/35 bg-orange-300/10 text-orange-100",
    label: "text-orange-200",
  },
  finals: {
    dot: "bg-primary",
    chip: "border-primary/45 bg-primary/12 text-primary",
    label: "text-primary",
  },
  break: {
    dot: "bg-muted-foreground",
    chip: "border-muted-foreground/35 bg-muted-foreground/10 text-muted-foreground",
    label: "text-muted-foreground",
  },
};

const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type DivisionFilter = "all" | ScheduleDivision;
type EventTypeFilter = "all" | ScheduleEventType;

function parseIsoDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function toIsoDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDaysIso(iso: string, days: number) {
  const date = parseIsoDate(iso);
  date.setDate(date.getDate() + days);
  return toIsoDate(date);
}

function formatMonth(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

function formatFullDate(iso: string) {
  return parseIsoDate(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatShortDate(iso: string) {
  return parseIsoDate(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function getTodayIso() {
  return toIsoDate(new Date());
}

function isEventOnDate(event: ScheduleEvent, iso: string) {
  const end = event.end ?? event.start;
  return iso >= event.start && iso <= end;
}

function isEventInMonth(event: ScheduleEvent, visibleMonth: Date) {
  const firstDay = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth(),
    1,
  );
  const lastDay = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth() + 1,
    0,
  );

  return (
    parseIsoDate(event.start) <= lastDay &&
    parseIsoDate(event.end ?? event.start) >= firstDay
  );
}

function getInitialEvent(referenceDate: string) {
  return (
    scheduleEvents.find((event) => (event.end ?? event.start) >= referenceDate) ??
    scheduleEvents[0]
  );
}

function getMonthGridDays(visibleMonth: Date) {
  const firstDay = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth(),
    1,
  );
  const gridStart = new Date(firstDay);
  gridStart.setDate(firstDay.getDate() - firstDay.getDay());

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);
    return date;
  });
}

function escapeIcsText(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

function downloadIcs(event: ScheduleEvent) {
  const start = event.start.replaceAll("-", "");
  const end = addDaysIso(event.end ?? event.start, 1).replaceAll("-", "");
  const filename = `${event.id}.ics`;
  const descriptionParts = [
    event.description,
    event.gameDays
      ? `Game days: ${event.gameDays
          .map(({ day, titles }) => `${day}: ${titles.join(", ")}`)
          .join(" | ")}`
      : "",
  ].filter(Boolean);

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Indiana Esports Network//Schedule//EN",
    "BEGIN:VEVENT",
    `UID:${event.id}@indianaesportsnetwork.org`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z")}`,
    `DTSTART;VALUE=DATE:${start}`,
    `DTEND;VALUE=DATE:${end}`,
    `SUMMARY:${escapeIcsText(event.title)}`,
    `DESCRIPTION:${escapeIcsText(descriptionParts.join("\n"))}`,
    `LOCATION:${escapeIcsText(event.location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function monthEventsFor(
  events: ScheduleEvent[],
  visibleMonth: Date,
): ScheduleEvent[] {
  return events
    .filter((event) => isEventInMonth(event, visibleMonth))
    .sort((a, b) => a.start.localeCompare(b.start) || a.title.localeCompare(b.title));
}

function eventsForDate(events: ScheduleEvent[], iso: string): ScheduleEvent[] {
  return events
    .filter((event) => isEventOnDate(event, iso))
    .sort((a, b) => {
      const typeWeight: Record<ScheduleEventType, number> = {
        meeting: 0,
        registration: 1,
        "game-week": 2,
        playoffs: 3,
        finals: 4,
        break: 5,
      };

      return (
        typeWeight[a.type] - typeWeight[b.type] ||
        a.start.localeCompare(b.start) ||
        a.title.localeCompare(b.title)
      );
    });
}

function gameTitlesForEventOnDate(event: ScheduleEvent, iso: string): string[] {
  const weekday = parseIsoDate(iso).toLocaleDateString("en-US", {
    weekday: "long",
  });

  return event.gameDays?.find(({ day }) => day === weekday)?.titles ?? [];
}

function EventTypeDot({ type }: { type: ScheduleEventType }) {
  return (
    <span
      className={cn("h-2 w-2 shrink-0 rounded-full", eventTypeStyles[type].dot)}
      aria-hidden="true"
    />
  );
}

function DivisionPill({ division }: { division: ScheduleDivision }) {
  return (
    <span
      className={cn(
        "rounded-full border px-2 py-0.5 text-[0.68rem] font-bold",
        divisionStyles[division],
      )}
    >
      {division}
    </span>
  );
}

export function InteractiveScheduleCalendar() {
  const todayIso = getTodayIso();
  const initialEvent = getInitialEvent(todayIso);
  const [visibleMonth, setVisibleMonth] = useState(() => {
    const startDate = parseIsoDate(initialEvent.start);
    return new Date(startDate.getFullYear(), startDate.getMonth(), 1);
  });
  const [selectedDate, setSelectedDate] = useState(initialEvent.start);
  const [selectedEventId, setSelectedEventId] = useState(initialEvent.id);
  const [activeDivision, setActiveDivision] = useState<DivisionFilter>("all");
  const [activeType, setActiveType] = useState<EventTypeFilter>("all");

  const filteredEvents = useMemo(
    () =>
      scheduleEvents.filter(
        (event) =>
          (activeType === "all" || event.type === activeType) &&
          (activeDivision === "all" || event.divisions.includes(activeDivision)),
      ),
    [activeDivision, activeType],
  );

  const visibleMonthEvents = useMemo(
    () => monthEventsFor(filteredEvents, visibleMonth),
    [filteredEvents, visibleMonth],
  );

  const selectedDateEvents = useMemo(
    () => eventsForDate(filteredEvents, selectedDate),
    [filteredEvents, selectedDate],
  );

  const selectedEvent =
    selectedDateEvents.find((event) => event.id === selectedEventId) ??
    selectedDateEvents[0] ??
    null;

  const nextEvent =
    filteredEvents.find((event) => (event.end ?? event.start) >= todayIso) ??
    filteredEvents[0] ??
    null;

  const gridDays = useMemo(() => getMonthGridDays(visibleMonth), [visibleMonth]);

  const selectDate = (iso: string) => {
    const dayEvents = eventsForDate(filteredEvents, iso);
    setSelectedDate(iso);
    setSelectedEventId(dayEvents[0]?.id ?? "");
  };

  const selectEvent = (event: ScheduleEvent) => {
    setSelectedEventId(event.id);
    setSelectedDate(event.start);
    const startDate = parseIsoDate(event.start);
    setVisibleMonth(new Date(startDate.getFullYear(), startDate.getMonth(), 1));
  };

  const shiftMonth = (offset: number) => {
    const nextMonth = new Date(
      visibleMonth.getFullYear(),
      visibleMonth.getMonth() + offset,
      1,
    );
    const nextMonthEvents = monthEventsFor(filteredEvents, nextMonth);
    setVisibleMonth(nextMonth);
    setSelectedDate(
      nextMonthEvents[0]?.start ??
        toIsoDate(new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 1)),
    );
    setSelectedEventId(nextMonthEvents[0]?.id ?? "");
  };

  return (
    <section
      id="interactive-calendar"
      className="rounded-lg border border-primary/20 bg-card/70 p-4 shadow-[0_0_24px_rgba(212,175,55,0.06)] md:p-5"
      aria-label="Interactive schedule calendar"
    >
      <div className="mb-5 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase text-primary">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            Interactive calendar
          </div>
          <h2 className="text-3xl font-heading font-bold text-white">
            Season calendar
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Pick a division or event type, then select a date for the details
            coaches need.
          </p>
        </div>

        {nextEvent && (
          <button
            type="button"
            onClick={() => selectEvent(nextEvent)}
            className="rounded-lg border border-[#ef4343]/45 bg-[#ef4343]/10 p-4 text-left transition-colors hover:border-[#ef4343] xl:w-72"
          >
            <span className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase text-[#ef4343]">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Next up
            </span>
            <strong className="block text-lg font-heading text-white">
              {nextEvent.title}
            </strong>
            <span className="mt-1 block text-xs leading-5 text-muted-foreground">
              {formatShortDate(nextEvent.start)} | {nextEvent.time}
            </span>
          </button>
        )}
      </div>

      <div className="mb-4 grid gap-3 border-y border-primary/10 py-4 md:grid-cols-[minmax(0,1fr)_220px] md:items-end">
        <div>
          <p className="mb-2 text-xs font-bold uppercase text-muted-foreground">
            Division
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              type="button"
              size="sm"
              variant={activeDivision === "all" ? "default" : "outline"}
              aria-pressed={activeDivision === "all"}
              onClick={() => setActiveDivision("all")}
              className={cn(
                "font-heading uppercase",
                activeDivision !== "all" &&
                  "border-primary/30 text-white hover:bg-primary hover:text-primary-foreground",
              )}
            >
              All
            </Button>
          {scheduleDivisions.map(({ id, label }) => {
            const active = activeDivision === id;
            return (
              <Button
                key={id}
                type="button"
                size="sm"
                variant={active ? "default" : "outline"}
                aria-pressed={active}
                onClick={() => setActiveDivision(id)}
                className={cn(
                  "font-heading uppercase",
                  !active && "border-primary/30 text-white hover:bg-primary hover:text-primary-foreground",
                )}
              >
                {id}
                <span className="hidden font-sans text-xs normal-case sm:inline">
                  {label}
                </span>
              </Button>
            );
          })}
          </div>
        </div>

        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase text-muted-foreground">
            Event type
          </span>
          <select
            value={activeType}
            onChange={(event) =>
              setActiveType(event.target.value as EventTypeFilter)
            }
            className="min-h-10 rounded-md border border-primary/25 bg-background px-3 py-2 text-sm text-white outline-none focus:border-primary"
          >
            <option value="all">All items</option>
            {eventTypeOptions.map((type) => (
              <option key={type} value={type}>
                {eventTypeLabels[type]}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div aria-live="polite">
          <h3 className="text-3xl font-heading font-bold text-white">
            {formatMonth(visibleMonth)}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {visibleMonthEvents.length} visible item
            {visibleMonthEvents.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Previous month"
            className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => shiftMonth(-1)}
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Next month"
            className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => shiftMonth(1)}
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>

      <div className="mb-4 grid gap-2 sm:grid-cols-3">
        {visibleMonthEvents.slice(0, 3).map((event) => (
          <button
            key={event.id}
            type="button"
            onClick={() => selectEvent(event)}
            className="rounded-md border border-primary/15 bg-background/45 p-3 text-left transition-colors hover:border-primary/50"
          >
            <span
              className={cn(
                "mb-1 inline-flex items-center gap-2 text-xs font-bold uppercase",
                eventTypeStyles[event.type].label,
              )}
            >
              <EventTypeDot type={event.type} />
              {formatShortDate(event.start)}
            </span>
            <strong className="block truncate text-sm text-white">
              {event.title}
            </strong>
          </button>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <div className="mb-2 grid grid-cols-7 gap-1 text-center text-[0.68rem] font-bold uppercase text-muted-foreground sm:gap-2">
            {WEEKDAY_LABELS.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {gridDays.map((date) => {
              const iso = toIsoDate(date);
              const dayEvents = eventsForDate(filteredEvents, iso);
              const inMonth = date.getMonth() === visibleMonth.getMonth();
              const selected = iso === selectedDate;

              return (
                <div
                  key={iso}
                  className={cn(
                    "min-h-[4.25rem] rounded-md border border-primary/10 bg-background/50 p-1.5 sm:min-h-[5.5rem] sm:p-2",
                    !inMonth && "opacity-40",
                    iso === todayIso && "border-primary/70 ring-1 ring-primary/35",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => selectDate(iso)}
                    className={cn(
                      "grid h-7 w-7 place-items-center rounded-full text-xs font-bold text-white transition-colors hover:bg-primary hover:text-primary-foreground",
                      selected && "bg-primary text-primary-foreground",
                    )}
                    aria-label={`Select ${formatFullDate(iso)}`}
                  >
                    {date.getDate()}
                  </button>

                  {dayEvents.length > 0 && (
                    <div className="mt-2 flex flex-wrap items-center gap-1">
                      {dayEvents.slice(0, 3).map((event) => (
                        <button
                          key={`${iso}-${event.id}`}
                          type="button"
                          onClick={() => {
                            setSelectedDate(iso);
                            setSelectedEventId(event.id);
                          }}
                          className={cn(
                            "h-3 w-3 rounded-full transition-transform hover:scale-125",
                            eventTypeStyles[event.type].dot,
                          )}
                          aria-label={`${event.title}, ${formatFullDate(iso)}`}
                        >
                          <span className="sr-only">{event.title}</span>
                        </button>
                      ))}
                      {dayEvents.length > 3 && (
                        <span className="text-[0.65rem] font-bold text-muted-foreground">
                          +{dayEvents.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <aside className="rounded-lg border border-primary/15 bg-background/55 p-4">
          <div className="mb-4">
            <p className="text-xs font-bold uppercase text-primary">
              Selected day
            </p>
            <h3 className="mt-1 text-xl font-heading font-bold text-white">
              {formatFullDate(selectedDate)}
            </h3>
          </div>

          <div className="grid gap-2" aria-live="polite">
            {selectedDateEvents.length > 0 ? (
              selectedDateEvents.map((event) => {
                const titlesForDate = gameTitlesForEventOnDate(
                  event,
                  selectedDate,
                );

                return (
                  <button
                    key={event.id}
                    type="button"
                    onClick={() => setSelectedEventId(event.id)}
                    className={cn(
                      "w-full rounded-md border p-3 text-left transition-colors hover:border-primary/60",
                      selectedEvent?.id === event.id
                        ? "border-primary bg-primary/12"
                        : "border-primary/15 bg-card/70",
                    )}
                  >
                    <span
                      className={cn(
                        "mb-1 inline-flex items-center gap-2 text-xs font-bold uppercase",
                        eventTypeStyles[event.type].label,
                      )}
                    >
                      <EventTypeDot type={event.type} />
                      {eventTypeLabels[event.type]}
                    </span>
                    <strong className="block text-sm text-white">
                      {event.title}
                    </strong>
                    <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                      {event.time}
                    </span>
                    {titlesForDate.length > 0 && (
                      <span className="mt-2 flex items-start gap-2 rounded-md bg-background/45 px-2.5 py-1.5 text-xs font-semibold leading-5 text-white">
                        <Gamepad2
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span>{titlesForDate.join(", ")}</span>
                      </span>
                    )}
                  </button>
                );
              })
            ) : (
              <div className="rounded-md border border-dashed border-primary/20 p-4 text-sm leading-6 text-muted-foreground">
                No matching events on this date.
              </div>
            )}
          </div>

          <div className="mt-4 rounded-lg border border-primary/15 bg-card/75 p-4">
            {selectedEvent ? (
              <>
                <span
                  className={cn(
                    "mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase",
                    eventTypeStyles[selectedEvent.type].label,
                  )}
                >
                  <EventTypeDot type={selectedEvent.type} />
                  {eventTypeLabels[selectedEvent.type]}
                </span>
                <h3 className="text-xl font-heading font-bold text-white">
                  {selectedEvent.title}
                </h3>

                <div className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground">
                  <div className="grid grid-cols-[1rem_1fr] gap-3">
                    <CalendarDays
                      className="mt-1 h-4 w-4 text-primary"
                      aria-hidden="true"
                    />
                    <strong className="font-semibold text-white">
                      {selectedEvent.end
                        ? `${formatFullDate(selectedEvent.start)} - ${formatFullDate(selectedEvent.end)}`
                        : formatFullDate(selectedEvent.start)}
                    </strong>
                  </div>
                  <div className="grid grid-cols-[1rem_1fr] gap-3">
                    <Clock
                      className="mt-1 h-4 w-4 text-primary"
                      aria-hidden="true"
                    />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="grid grid-cols-[1rem_1fr] gap-3">
                    <MapPin
                      className="mt-1 h-4 w-4 text-primary"
                      aria-hidden="true"
                    />
                    <span>{selectedEvent.location}</span>
                  </div>
                  <div className="grid grid-cols-[1rem_1fr] gap-3">
                    <UsersRound
                      className="mt-1 h-4 w-4 text-primary"
                      aria-hidden="true"
                    />
                    <div className="flex flex-wrap gap-1.5">
                      {selectedEvent.divisions.map((division) => (
                        <DivisionPill key={division} division={division} />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-[1rem_1fr] gap-3">
                    <FileText
                      className="mt-1 h-4 w-4 text-primary"
                      aria-hidden="true"
                    />
                    <span>{selectedEvent.description}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedEvent.action && (
                    <Button
                      asChild
                      size="sm"
                      className="font-heading uppercase"
                    >
                      <a
                        href={selectedEvent.action.href}
                        target={selectedEvent.action.external ? "_blank" : undefined}
                        rel={
                          selectedEvent.action.external
                            ? "noopener noreferrer"
                            : undefined
                        }
                        download={selectedEvent.action.download ? true : undefined}
                      >
                        {selectedEvent.action.external ? (
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <Download className="h-4 w-4" aria-hidden="true" />
                        )}
                        {selectedEvent.action.label}
                      </a>
                    </Button>
                  )}
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => downloadIcs(selectedEvent)}
                  >
                    <CalendarPlus className="h-4 w-4" aria-hidden="true" />
                    Add to calendar
                  </Button>
                </div>
              </>
            ) : (
              <div className="rounded-md border border-dashed border-primary/20 p-4 text-sm leading-6 text-muted-foreground">
                Change filters or move to another month to see schedule details.
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
