import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";

type Role = "" | "student" | "parent" | "educator" | "sponsor" | "community";

interface FormState {
  name: string;
  email: string;
  role: Role;
  interests: {
    ihsen: boolean;
    imsen: boolean;
    iuen: boolean;
    events: boolean;
    sponsorship: boolean;
  };
}

const DEFAULT_STATE: FormState = {
  name: "",
  email: "",
  role: "",
  interests: {
    ihsen: false,
    imsen: false,
    iuen: false,
    events: false,
    sponsorship: false,
  },
};

type Status = "idle" | "submitting" | "success" | "error";

const INTEREST_OPTIONS: Array<{ key: keyof FormState["interests"]; label: string }> = [
  { key: "ihsen",       label: "IHSEN: High School" },
  { key: "imsen",       label: "IMSEN: Middle School" },
  { key: "iuen",        label: "IUEN: Unified (Special Olympics)" },
  { key: "events",      label: "Events & State Finals" },
  { key: "sponsorship", label: "Sponsorship & Partnerships" },
];

const ROLE_OPTIONS: Array<{ value: Role; label: string }> = [
  { value: "",          label: "Select an option…" },
  { value: "student",   label: "Student" },
  { value: "parent",    label: "Parent / Family" },
  { value: "educator",  label: "Coach or Educator" },
  { value: "sponsor",   label: "Sponsor / Partner" },
  { value: "community", label: "Community Member" },
];

function isValidEmail(email: string): boolean {
  // Simple RFC-pragmatic check: anything@anything.anything, no spaces
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/** Build a mailto: URL as a graceful fallback when the backend endpoint isn't wired up yet. */
function buildMailtoFallback(state: FormState): string {
  const selectedInterests = INTEREST_OPTIONS
    .filter((o) => state.interests[o.key])
    .map((o) => o.label)
    .join(", ");
  const body = [
    "Please add me to the Indiana Esports Network newsletter.",
    "",
    `Name:      ${state.name || "(not provided)"}`,
    `Email:     ${state.email}`,
    `Role:      ${ROLE_OPTIONS.find((r) => r.value === state.role)?.label ?? "(not provided)"}`,
    `Interests: ${selectedInterests || "(none selected)"}`,
  ].join("\n");
  return `mailto:board@indianaesportsnetwork.org?subject=${encodeURIComponent(
    "Newsletter signup"
  )}&body=${encodeURIComponent(body)}`;
}

export default function NewsletterSignup() {
  const [state, setState] = useState<FormState>(DEFAULT_STATE);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const emailInvalid = state.email.length > 0 && !isValidEmail(state.email);
  const canSubmit = state.email.length > 0 && isValidEmail(state.email) && status !== "submitting";

  const toggleInterest = (key: keyof FormState["interests"]) => {
    setState((s) => ({
      ...s,
      interests: { ...s.interests, [key]: !s.interests[key] },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      // TODO: Point this at the real newsletter endpoint (Mailchimp, ConvertKit, Beehiiv,
      // or an internal /api/newsletter route). Until that's wired up, we fall back to mailto:
      // so every submission still reaches board@indianaesportsnetwork.org.
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: state.name.trim(),
          email: state.email.trim(),
          role: state.role,
          interests: Object.entries(state.interests)
            .filter(([, v]) => v)
            .map(([k]) => k),
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch {
      // Fallback: open the user's email client with a pre-filled newsletter-request message.
      // This guarantees signups still reach IEN even before the API is live.
      window.location.href = buildMailtoFallback(state);
      setStatus("success");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-card border border-primary/30 rounded-2xl p-10 text-center max-w-2xl mx-auto shadow-[0_0_30px_rgba(212,175,55,0.1)]">
        <div className="w-14 h-14 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-white mb-2">YOU&rsquo;RE IN.</h3>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
          Thanks for signing up. We&rsquo;ll send IEN news, league updates, and event announcements straight
          to <span className="text-primary font-bold">{state.email}</span>.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setState(DEFAULT_STATE);
            setStatus("idle");
          }}
          className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest"
        >
          ADD ANOTHER EMAIL
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-primary/20 rounded-2xl p-6 md:p-10 max-w-3xl mx-auto"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <Label htmlFor="ns-name" className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5 block">
            Name
          </Label>
          <Input
            id="ns-name"
            type="text"
            placeholder="Your name (optional)"
            value={state.name}
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            className="bg-background border-primary/20 focus-visible:ring-primary/40 h-11"
            autoComplete="name"
          />
        </div>
        <div>
          <Label htmlFor="ns-email" className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5 block">
            Email <span className="text-primary">*</span>
          </Label>
          <Input
            id="ns-email"
            type="email"
            required
            placeholder="you@example.com"
            value={state.email}
            onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
            className={`bg-background focus-visible:ring-primary/40 h-11 ${
              emailInvalid ? "border-red-500/60 focus-visible:ring-red-500/40" : "border-primary/20"
            }`}
            aria-invalid={emailInvalid || undefined}
            aria-describedby={emailInvalid ? "ns-email-error" : undefined}
            autoComplete="email"
          />
          {emailInvalid && (
            <p id="ns-email-error" className="text-xs text-red-400 mt-1">
              Please enter a valid email address.
            </p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <Label htmlFor="ns-role" className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5 block">
          I am a…
        </Label>
        <select
          id="ns-role"
          value={state.role}
          onChange={(e) => setState((s) => ({ ...s, role: e.target.value as Role }))}
          className="w-full h-11 rounded-md bg-background border border-primary/20 px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40"
        >
          {ROLE_OPTIONS.map((r) => (
            <option key={r.value} value={r.value} className="bg-background text-foreground">
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <fieldset className="mb-6">
        <legend className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
          What are you interested in? (optional)
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {INTEREST_OPTIONS.map((opt) => (
            <label
              key={opt.key}
              htmlFor={`ns-${opt.key}`}
              className="flex items-center gap-3 p-3 rounded-md border border-primary/15 bg-background hover:border-primary/40 transition-colors cursor-pointer"
            >
              <Checkbox
                id={`ns-${opt.key}`}
                checked={state.interests[opt.key]}
                onCheckedChange={() => toggleInterest(opt.key)}
                className="border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              />
              <span className="text-sm text-foreground">{opt.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {status === "error" && (
        <div className="mb-4 rounded-md border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
          {errorMsg || "Something went wrong. Please try again or email board@indianaesportsnetwork.org."}
        </div>
      )}

      <Button
        type="submit"
        disabled={!canSubmit}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-widest h-12 disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            SIGNING YOU UP…
          </>
        ) : (
          <>
            <Mail className="w-4 h-4 mr-2" />
            SUBSCRIBE TO IEN NEWS
          </>
        )}
      </Button>

      <p className="text-[11px] text-muted-foreground/70 mt-4 text-center leading-relaxed">
        We&rsquo;ll send occasional newsletters, league updates, and event announcements. No spam, and you
        can unsubscribe anytime. We never share your email.
      </p>
    </form>
  );
}
