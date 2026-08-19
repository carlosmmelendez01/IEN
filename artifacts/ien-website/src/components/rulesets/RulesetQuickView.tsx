import { useEffect, type ReactNode } from "react";
import {
  AlertCircle,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  FileText,
  MapPinned,
  Monitor,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import {
  GAME_RULESET_LIBRARY_HREF,
  RULEBOOK_HREF,
  RULES_DOCUMENTS_AVAILABLE,
  RULES_UPDATE_NOTICE,
  RULES_UPDATE_SHORT_LABEL,
  rotationData,
  type RotationRow,
  type RulesTab,
  type RulesetGame,
} from "@/data/gameRules";

const displayNameForGame = (game: RulesetGame) => game.displayName ?? game.name;
const fullRulesLabel = (game: RulesetGame) =>
  game.ruleDocVersion
    ? `Full Rules v${game.ruleDocVersion}`
    : game.ruleDocLabel
      ? `Full Rules - ${game.ruleDocLabel}`
      : "Full Rules";

export function defaultTabForGame(game: RulesetGame): RulesTab {
  return rotationData[game.id] ? "rotation" : "quick";
}

const quickFacts = (game: RulesetGame) => [
  { label: "Platform", value: game.platform, icon: Monitor },
  { label: "Roster", value: game.roster, icon: Users },
  { label: "Match format", value: game.format, icon: ClipboardCheck },
  { label: "Match window", value: game.matchWindow, icon: CalendarDays },
];

const setupItems = [
  "Home team creates the match lobby and shares match details in LeagueOS.",
  "Teams use the published server region and official competitive settings.",
  "Coaches confirm eligibility, gamertags, and roster order before match start.",
];

const scoringItems = [
  "Report final scores in LeagueOS immediately after the match concludes.",
  "Upload screenshots if a score is disputed or requested by league staff.",
  "Tiebreakers and postseason seeding follow the IEN general rules.",
];

const coachReminderItems = [
  "Players must be supervised by a school-approved coach or advisor.",
  "Substitutions must follow roster rules and may not create an ineligible lineup.",
  "Sportsmanship issues should be documented and reported through official channels.",
];

function FactCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Monitor;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-primary/20 bg-background p-4">
      <div className="mb-2 flex items-center gap-2 text-[0.65rem] font-heading font-bold uppercase tracking-[0.16em] text-muted-foreground">
        <Icon className="h-4 w-4 text-primary" aria-hidden />
        {label}
      </div>
      <p className="text-sm font-semibold leading-snug text-white">{value}</p>
    </div>
  );
}

function BulletPanel({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof ShieldCheck;
  title: string;
  items: string[];
}) {
  return (
    <section className="rounded-lg border border-primary/20 bg-background p-5">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-5 w-5 text-primary" aria-hidden />
        <h3 className="font-heading text-lg font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function TabButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`min-h-11 rounded-md px-4 py-2 text-sm font-heading font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
        active
          ? "bg-primary text-primary-foreground"
          : "border border-primary/20 text-white hover:bg-primary/10"
      }`}
    >
      {children}
    </button>
  );
}

function RotationTable({
  headers,
  rows,
  currentWeek,
}: {
  headers: string[];
  rows: RotationRow[];
  currentWeek?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-primary/20">
      <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
        <thead className="bg-background text-xs uppercase tracking-[0.14em] text-muted-foreground">
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col" className="px-4 py-3 font-heading font-bold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-primary/10 bg-card">
          {rows.map((row) => {
            const highlighted = row.week === currentWeek;
            return (
              <tr key={row.week} className={highlighted ? "bg-primary/10" : undefined}>
                <th
                  scope="row"
                  className={`whitespace-nowrap px-4 py-3 font-heading font-bold ${
                    highlighted ? "text-primary" : "text-white"
                  }`}
                >
                  {row.week}
                  {highlighted && (
                    <span className="ml-2 rounded bg-primary px-2 py-0.5 text-[0.65rem] font-black uppercase tracking-[0.12em] text-primary-foreground">
                      current
                    </span>
                  )}
                </th>
                {row.values.map((value, index) => (
                  <td key={`${row.week}-${index}`} className="px-4 py-3 text-muted-foreground">
                    {value}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function QuickGuidePanel({ game }: { game: RulesetGame }) {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickFacts(game).map((fact) => (
          <FactCard key={fact.label} {...fact} />
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <BulletPanel icon={ShieldCheck} title="Match Setup" items={setupItems} />
        <BulletPanel icon={FileText} title="Scoring" items={scoringItems} />
        <BulletPanel icon={AlertCircle} title="Coach Reminders" items={coachReminderItems} />
      </div>
    </>
  );
}

function RotationPanel({ game }: { game: RulesetGame }) {
  const rotation = rotationData[game.id];

  if (!rotation) {
    return (
      <section className="rounded-lg border border-primary/20 bg-background p-6">
        <div className="flex items-start gap-3">
          <MapPinned className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
          <div>
            <h3 className="font-heading text-xl font-bold text-white">No weekly rotation needed</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              This title does not currently use weekly maps, stages, or tracks.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="space-y-5">
      <section className="rounded-lg border border-primary/30 bg-primary/10 p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-[0.16em] text-primary">
              <MapPinned className="h-4 w-4" aria-hidden />
              Published {rotation.tabLabel} Rotation
            </div>
            <h3 className="font-heading text-2xl font-bold text-white">{rotation.title}</h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-200">{rotation.intro}</p>
          </div>
          <div className="rounded-md border border-primary/40 bg-background px-4 py-3 text-sm">
            <p className="text-xs font-heading font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Season Reference
            </p>
            <p className="mt-1 max-w-56 text-sm font-bold leading-5 text-primary">
              Published dates are maintained with the season calendar.
            </p>
          </div>
        </div>
      </section>

      <RotationTable headers={rotation.headers} rows={rotation.rows} currentWeek={rotation.currentWeek} />

      {rotation.secondaryItems && (
        <section className="rounded-lg border border-primary/20 bg-background p-5">
          <h3 className="mb-4 font-heading text-lg font-bold text-white">{rotation.secondaryTitle}</h3>
          <div className="flex flex-wrap gap-2">
            {rotation.secondaryItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-primary/20 px-3 py-1.5 text-sm font-semibold text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      )}

      {rotation.secondaryHeaders && rotation.secondaryRows && (
        <section className="space-y-3">
          <h3 className="font-heading text-lg font-bold text-white">{rotation.secondaryTitle}</h3>
          <RotationTable headers={rotation.secondaryHeaders} rows={rotation.secondaryRows} />
        </section>
      )}

      {rotation.note && (
        <p className="rounded-lg border border-primary/20 bg-background p-4 text-sm leading-6 text-muted-foreground">
          <strong className="text-primary">Note:</strong> {rotation.note}
        </p>
      )}
    </div>
  );
}

function FullRulesPanel({ game }: { game: RulesetGame }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-lg border border-primary/20 bg-background p-6">
        <div className="mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" aria-hidden />
          <h3 className="font-heading text-xl font-bold text-white">Official Game Rules</h3>
        </div>
        <p className="text-sm leading-6 text-muted-foreground">
          Use the official rules document for edge cases, postseason rulings, penalties, and formal procedures.
        </p>
        {game.ruleDocVersion && (
          <p className="mt-3 text-xs font-heading font-bold uppercase tracking-[0.16em] text-primary">
            Ruleset version v{game.ruleDocVersion}
          </p>
        )}
        {!game.ruleDocVersion && game.ruleDocLabel && (
          <p className="mt-3 text-xs font-heading font-bold uppercase tracking-[0.16em] text-primary">
            Ruleset document: {game.ruleDocLabel}
          </p>
        )}
        {RULES_DOCUMENTS_AVAILABLE && game.ruleDocHref ? (
          <a
            href={game.ruleDocHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-heading font-bold text-primary-foreground transition hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ExternalLink className="h-4 w-4" aria-hidden />
            Open {fullRulesLabel(game)}
          </a>
        ) : (
          <div className="mt-5 rounded-md border border-primary/20 bg-card px-4 py-3 text-sm font-semibold text-muted-foreground">
            {RULES_DOCUMENTS_AVAILABLE
              ? game.status ?? "Official rules document pending"
              : RULES_UPDATE_NOTICE}
          </div>
        )}
      </section>

      <section className="rounded-lg border border-primary/20 bg-card p-6">
        <h3 className="font-heading text-lg font-bold text-white">Related Documents</h3>
        <div className="mt-4 space-y-2">
          {RULES_DOCUMENTS_AVAILABLE ? (
            <a
              href={RULEBOOK_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 rounded-md border border-primary/20 px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-primary/10 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              IEN Bylaws & General Rules
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          ) : (
            <div className="rounded-md border border-primary/20 px-3 py-2 text-sm font-semibold text-muted-foreground">
              IEN Bylaws & General Rules: {RULES_UPDATE_SHORT_LABEL}
            </div>
          )}
          <a
            href="https://leagueos.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 rounded-md border border-primary/20 px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-primary/10 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            LeagueOS
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </section>
    </div>
  );
}

export function RulesDialog({
  activeTab,
  game,
  onClose,
  onTabChange,
}: {
  activeTab: RulesTab;
  game: RulesetGame;
  onClose: () => void;
  onTabChange: (tab: RulesTab) => void;
}) {
  const rotation = rotationData[game.id];
  const tabs: Array<{ id: RulesTab; label: string }> = [
    { id: "quick", label: "Quick Guide" },
    { id: "rotation", label: rotation ? `${rotation.tabLabel} of Week` : "Maps / Tracks" },
    { id: "full", label: fullRulesLabel(game) },
  ];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end bg-black/75 px-0 py-0 sm:items-center sm:px-6 sm:py-10"
      role="presentation"
      onMouseDown={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="rules-dialog-title"
        aria-describedby="rules-dialog-description"
        className="flex max-h-[100dvh] w-full flex-col overflow-hidden rounded-t-xl border border-primary/20 bg-card shadow-2xl sm:mx-auto sm:max-h-[88dvh] sm:max-w-5xl sm:rounded-xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="flex flex-col gap-4 border-b border-primary/20 bg-background px-5 py-5 sm:flex-row sm:items-start sm:justify-between sm:px-6">
          <div className="min-w-0">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {game.leagues.map((league) => (
                <span
                  key={league}
                  className="rounded-full border border-primary/40 px-2.5 py-1 text-xs font-heading font-bold tracking-[0.14em] text-primary"
                >
                  {league}
                </span>
              ))}
              <span className="rounded-full border border-primary/20 px-2.5 py-1 text-xs font-heading font-bold tracking-[0.14em] text-muted-foreground">
                2026-27 QUICK GUIDE
              </span>
            </div>
            <h2 id="rules-dialog-title" className="font-heading text-3xl font-bold text-white sm:text-4xl">
              {displayNameForGame(game)} Rules
            </h2>
            <p id="rules-dialog-description" className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              Coach reference for match setup, roster checks, scoring, and common reminders.
            </p>
            {game.note && (
              <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-primary">
                {game.note}
              </p>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {RULES_DOCUMENTS_AVAILABLE && game.ruleDocHref ? (
              <a
                href={game.ruleDocHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-heading font-bold text-primary-foreground transition hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
                <span>{fullRulesLabel(game)}</span>
              </a>
            ) : (
              <span className="inline-flex min-h-10 items-center rounded-md border border-primary/20 px-4 text-xs font-heading font-bold uppercase tracking-[0.14em] text-muted-foreground">
                {RULES_UPDATE_SHORT_LABEL}
              </span>
            )}
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary/20 text-white transition hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label="Close rules quick guide"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </header>

        <div className="border-b border-primary/20 bg-card px-5 py-3 sm:px-6">
          <div className="flex gap-2 overflow-x-auto" role="tablist" aria-label={`${displayNameForGame(game)} rules sections`}>
            {tabs.map((tab) => (
              <TabButton key={tab.id} active={activeTab === tab.id} onClick={() => onTabChange(tab.id)}>
                {tab.label}
              </TabButton>
            ))}
          </div>
        </div>

        <div className="overflow-y-auto px-5 py-6 sm:px-6">
          {activeTab === "quick" && <QuickGuidePanel game={game} />}
          {activeTab === "rotation" && <RotationPanel game={game} />}
          {activeTab === "full" && <FullRulesPanel game={game} />}
        </div>

        <footer className="flex flex-col gap-3 border-t border-primary/20 bg-background px-5 py-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Season reference: 2026-27</p>
          <a
            href={GAME_RULESET_LIBRARY_HREF}
            className="font-heading font-bold tracking-[0.16em] text-primary hover:text-yellow-200"
          >
            RULESET LIBRARY
          </a>
        </footer>
      </section>
    </div>
  );
}

export function RulesetLibrary({
  games,
  onOpenRules,
}: {
  games: RulesetGame[];
  onOpenRules: (game: RulesetGame) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {games.map((game) => (
        <article
          key={game.id}
          id={`ruleset-${game.id}`}
          className="scroll-mt-24 bg-card border border-primary/20 rounded-xl p-5 flex flex-col gap-4 hover:border-primary transition-colors"
          style={{ borderTopColor: game.color, borderTopWidth: 3 }}
        >
          <div className="flex flex-wrap gap-2">
            {game.leagues.map((league) => (
              <span
                key={`${game.id}-${league}`}
                className="rounded-full border border-primary/30 px-2.5 py-1 text-[0.65rem] font-heading font-bold tracking-[0.14em] text-primary"
              >
                {league}
              </span>
            ))}
          </div>

          <div>
            <h3 className="font-heading text-xl font-bold leading-tight" style={{ color: game.color }}>
              {displayNameForGame(game)}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">{game.type}</p>
            {game.note && <p className="mt-2 text-xs font-semibold leading-5 text-primary">{game.note}</p>}
          </div>

          <dl className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <dt className="font-heading font-bold uppercase tracking-[0.14em] text-muted-foreground">Platform</dt>
              <dd className="mt-1 text-white/80">{game.platform}</dd>
            </div>
            <div>
              <dt className="font-heading font-bold uppercase tracking-[0.14em] text-muted-foreground">Roster</dt>
              <dd className="mt-1 text-white/80">{game.roster}</dd>
            </div>
          </dl>

          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            <button
              type="button"
              onClick={() => onOpenRules(game)}
              className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-3 text-xs font-heading font-bold tracking-[0.14em] text-primary-foreground transition hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-haspopup="dialog"
            >
              <FileText className="h-4 w-4" aria-hidden />
              QUICK VIEW
            </button>
            {RULES_DOCUMENTS_AVAILABLE && game.ruleDocHref ? (
              <a
                href={game.ruleDocHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-md border border-primary/30 px-3 text-xs font-heading font-bold tracking-[0.14em] text-primary transition hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
                {fullRulesLabel(game).toUpperCase()}
              </a>
            ) : (
              <span className="inline-flex min-h-10 items-center rounded-md border border-primary/20 px-3 text-[0.65rem] font-heading font-bold uppercase tracking-[0.14em] text-muted-foreground">
                {RULES_DOCUMENTS_AVAILABLE
                  ? game.status ?? "Pending"
                  : RULES_UPDATE_SHORT_LABEL}
              </span>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
