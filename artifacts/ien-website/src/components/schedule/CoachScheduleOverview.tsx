import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Calendar,
  ChevronDown,
  Clock,
  DollarSign,
  Download,
  ExternalLink,
  FileText,
  type LucideIcon,
  School,
  ZoomIn,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  coachOverviewCards,
  scheduleDivisions,
  schedulePdfDownloads,
  type CoachOverviewCard,
  type ScheduleDivision,
} from "@/data/scheduleCalendar";

const divisionTone: Record<ScheduleDivision, string> = {
  IHSEN: "border-sky-300/40 bg-sky-400/10 text-sky-100",
  IMSEN: "border-emerald-300/40 bg-emerald-400/10 text-emerald-100",
  IUEN: "border-violet-300/40 bg-violet-400/10 text-violet-100",
};

const hashToDivision: Record<string, ScheduleDivision> = {
  "high-school-schedules": "IHSEN",
  "middle-school-schedules": "IMSEN",
  "unified-schedules": "IUEN",
};

function getDivisionFromHash(): ScheduleDivision | null {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash.replace("#", "");
  return hashToDivision[hash] ?? null;
}

function OverviewMetaRow({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[1rem_1fr] gap-3 text-sm leading-6 text-muted-foreground">
      <Icon className="mt-1 h-4 w-4 text-primary" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

function OverviewCard({
  card,
  onPreview,
}: {
  card: CoachOverviewCard;
  onPreview: (card: CoachOverviewCard) => void;
}) {
  return (
    <article className="grid overflow-hidden rounded-lg border border-primary/20 bg-card/75 lg:grid-cols-[minmax(240px,340px)_minmax(0,1fr)]">
      <button
        type="button"
        onClick={() => onPreview(card)}
        className="group relative block aspect-[4/3] w-full overflow-hidden bg-background/70 lg:aspect-auto"
        aria-label={`Preview ${card.title} one-page overview`}
      >
        <img
          src={card.image}
          alt={card.imageAlt}
          loading="lazy"
          className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="absolute inset-0 grid place-items-center bg-black/0 transition-colors group-hover:bg-black/35">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
            <ZoomIn className="h-5 w-5" aria-hidden="true" />
          </span>
        </span>
      </button>

      <div className="space-y-4 p-4">
        <div>
          <span
            className={cn(
              "mb-2 inline-flex rounded-full border px-2.5 py-1 text-xs font-bold uppercase",
              divisionTone[card.division],
            )}
          >
            {card.eyebrow}
          </span>
          <h3 className="text-2xl font-heading font-bold text-white">
            {card.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {card.subtitle}
          </p>
        </div>

        <div className="space-y-2.5">
          <OverviewMetaRow icon={Calendar}>{card.dateRange}</OverviewMetaRow>
          <OverviewMetaRow icon={School}>{card.level}</OverviewMetaRow>
          <OverviewMetaRow icon={DollarSign}>{card.cost}</OverviewMetaRow>
          <OverviewMetaRow icon={Clock}>
            <span className="flex flex-col gap-1">
              <span>{card.matchTime}</span>
              {card.clubTime && <span>{card.clubTime}</span>}
            </span>
          </OverviewMetaRow>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            asChild
            size="sm"
            className="font-heading uppercase"
          >
            <a href={card.pdfHref} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              View PDF
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a href={card.pdfHref} download>
              <Download className="h-4 w-4" aria-hidden="true" />
              Download
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}

export function CoachScheduleOverview() {
  const [activeDivision, setActiveDivision] =
    useState<ScheduleDivision>("IHSEN");
  const [activeCardId, setActiveCardId] = useState(coachOverviewCards[0].id);
  const [previewCard, setPreviewCard] = useState<CoachOverviewCard | null>(null);

  useEffect(() => {
    const syncFromHash = () => {
      const division = getDivisionFromHash();
      if (division) {
        setActiveDivision(division);
        setActiveCardId(
          coachOverviewCards.find((card) => card.division === division)?.id ??
            coachOverviewCards[0].id,
        );
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const activeCards = useMemo(
    () => coachOverviewCards.filter((card) => card.division === activeDivision),
    [activeDivision],
  );

  const activeCard =
    activeCards.find((card) => card.id === activeCardId) ?? activeCards[0];

  const setDivision = (division: ScheduleDivision) => {
    setActiveDivision(division);
    setActiveCardId(
      coachOverviewCards.find((card) => card.division === division)?.id ??
        coachOverviewCards[0].id,
    );
  };

  return (
    <section
      id="coach-resources"
      className="space-y-6"
      aria-label="Coach overview and PDF downloads"
    >
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase text-primary">
            <FileText className="h-4 w-4" aria-hidden="true" />
            Coach resources
          </div>
          <h2 className="text-3xl font-heading font-bold text-white">
            One-page overviews and official PDFs
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            A quieter spot for printable schedule references, separated from the
            calendar so the main planning view can breathe.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 md:w-[22rem]">
          {scheduleDivisions.map(({ id, label, anchorId }) => {
            const active = activeDivision === id;
            return (
              <Button
                key={id}
                id={anchorId}
                type="button"
                size="sm"
                variant={active ? "default" : "outline"}
                aria-pressed={active}
                onClick={() => setDivision(id)}
                className={cn(
                  "min-w-0 flex-col gap-0.5 px-2 py-2 font-heading uppercase",
                  !active && "border-primary/30 text-white hover:bg-primary hover:text-primary-foreground",
                )}
              >
                <span>{id}</span>
                <span className="font-sans text-[0.68rem] normal-case">
                  {label}
                </span>
              </Button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          {activeCards.length > 1 && (
            <label className="mb-3 grid max-w-sm gap-2">
              <span className="text-xs font-bold uppercase text-muted-foreground">
                Overview
              </span>
              <span className="relative">
                <select
                  value={activeCard.id}
                  onChange={(event) => setActiveCardId(event.target.value)}
                  className="min-h-10 w-full appearance-none rounded-md border border-primary/25 bg-background px-3 py-2 pr-10 text-sm text-white outline-none focus:border-primary"
                >
                  {activeCards.map((card) => (
                    <option key={card.id} value={card.id}>
                      {card.title}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary"
                  aria-hidden="true"
                />
              </span>
            </label>
          )}

          {activeCard && (
            <OverviewCard
              key={activeCard.id}
              card={activeCard}
              onPreview={setPreviewCard}
            />
          )}
        </div>

        <section
          id="official-pdfs"
          className="rounded-lg border border-primary/15 bg-card/65 p-4"
        >
          <div className="mb-4">
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase text-primary">
              <Download className="h-4 w-4" aria-hidden="true" />
              Official downloads
            </div>
            <h3 className="text-2xl font-heading font-bold text-white">
              PDFs
            </h3>
          </div>

          <div className="space-y-2">
          {schedulePdfDownloads.map((download) => (
            <a
              key={download.href}
              href={download.href}
              target={download.href.endsWith(".pdf") ? "_blank" : undefined}
              rel={download.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
              className="grid grid-cols-[2.25rem_1fr_auto] items-center gap-3 rounded-lg border border-primary/15 bg-card/70 p-3 text-white transition-colors hover:border-primary/55"
            >
              <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/10 text-primary">
                <FileText className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <strong className="block truncate text-sm">
                  {download.title}
                </strong>
                <span className="mt-0.5 block text-xs leading-5 text-muted-foreground">
                  {download.description}
                </span>
              </span>
              {download.href.endsWith(".pdf") ? (
                <Download className="h-4 w-4 text-primary" aria-hidden="true" />
              ) : (
                <ExternalLink className="h-4 w-4 text-primary" aria-hidden="true" />
              )}
            </a>
          ))}
          </div>
        </section>
      </div>

      <Dialog open={!!previewCard} onOpenChange={(open) => !open && setPreviewCard(null)}>
        <DialogContent className="max-h-[94vh] max-w-5xl overflow-hidden border-primary/30 bg-background p-0">
          {previewCard && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{previewCard.title}</DialogTitle>
                <DialogDescription>{previewCard.imageAlt}</DialogDescription>
              </DialogHeader>
              <div className="grid max-h-[94vh] grid-rows-[1fr_auto]">
                <div className="overflow-auto bg-black/35 p-3 md:p-5">
                  <img
                    src={previewCard.image}
                    alt={previewCard.imageAlt}
                    className="mx-auto max-h-[82vh] w-auto max-w-full rounded-md object-contain"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-primary/20 bg-card p-4">
                  <div>
                    <p className="text-xs font-bold uppercase text-primary">
                      One-page overview
                    </p>
                    <h3 className="text-lg font-heading font-bold text-white">
                      {previewCard.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button asChild size="sm">
                      <a
                        href={previewCard.pdfHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        View PDF
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={previewCard.pdfHref} download>
                        <Download className="h-4 w-4" aria-hidden="true" />
                        Download
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
