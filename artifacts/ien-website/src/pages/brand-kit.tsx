import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  BRAND_ASSET_ZIP,
  BRAND_CONTACT_EMAIL,
  BRAND_KIT_UPDATED,
  brandBoilerplate,
  coachChecklist,
  coreBrandColors,
  doDontRules,
  logoAssets,
  logoRules,
  programLockups,
  typography,
  websiteSupportColors,
} from "@/data/brandKit";
import {
  CheckCircle2,
  Download,
  Image as ImageIcon,
  Mail,
  Palette,
  Ruler,
  ShieldCheck,
  Type,
  XCircle,
} from "lucide-react";
import type { ReactNode } from "react";

type BrandColor = (typeof coreBrandColors)[number];

function SectionHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto mb-10 max-w-4xl text-center">
      <div className="mb-4 flex items-center justify-center">
        <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-primary/50 md:block" />
        <p className="px-4 font-heading text-sm font-bold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
        <div className="hidden h-px flex-1 bg-gradient-to-l from-transparent to-primary/50 md:block" />
      </div>
      <h2 className="font-heading text-3xl font-bold uppercase tracking-wider text-white md:text-5xl">
        {title}
      </h2>
      {children && (
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
          {children}
        </p>
      )}
    </div>
  );
}

function DownloadLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      download
      className="inline-flex w-fit items-center gap-2 rounded-md border border-primary/30 px-3 py-2 font-heading text-xs font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:border-primary hover:bg-primary/10"
    >
      <Download className="h-3.5 w-3.5" aria-hidden />
      {children}
    </a>
  );
}

function ColorCard({ color }: { color: BrandColor }) {
  const darkText = color.hex === "#FFFFFF" || color.hex === "#EAC453" || color.hex === "#ECBF1A";

  return (
    <article className="overflow-hidden rounded-lg border border-primary/20 bg-card">
      <div
        className="flex min-h-36 flex-col justify-end p-4"
        style={{
          backgroundColor: color.hex,
          color: darkText ? "#0D1623" : "#FFFFFF",
        }}
      >
        <h3 className="font-heading text-2xl font-bold uppercase tracking-wider">
          {color.name}
        </h3>
        <p className="font-mono text-sm">{color.hex}</p>
      </div>
      <div className="space-y-3 p-4">
        <p className="font-mono text-xs text-muted-foreground">RGB {color.rgb}</p>
        <p className="text-sm leading-6 text-muted-foreground">{color.use}</p>
      </div>
    </article>
  );
}

function LogoCard({
  title,
  description,
  href,
  preview,
  bestFor,
}: {
  title: string;
  description: string;
  href: string;
  preview: string;
  bestFor?: string;
}) {
  const needsDarkField =
    title.includes("Transparent") || title.includes("Icon") || title.includes("IHSEN") || title.includes("IMSEN") || title.includes("IUEN");

  return (
    <article className="flex h-full flex-col rounded-lg border border-primary/20 bg-card p-5 transition-colors hover:border-primary/50">
      <div
        className={`mb-5 flex min-h-52 items-center justify-center rounded-md border border-primary/15 p-6 ${
          needsDarkField ? "bg-background" : "bg-white"
        }`}
      >
        <img src={preview} alt="" className="max-h-40 max-w-full object-contain" loading="lazy" />
      </div>
      <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-white">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{description}</p>
      {bestFor && (
        <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-primary/80">
          {bestFor}
        </p>
      )}
      <div className="mt-5">
        <DownloadLink href={href}>Download PNG</DownloadLink>
      </div>
    </article>
  );
}

function RuleCard({ label, rule }: { label: string; rule: string }) {
  return (
    <article className="rounded-lg border border-primary/20 bg-card p-5">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
        <Ruler className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-white">{label}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{rule}</p>
    </article>
  );
}

export default function BrandKit() {
  return (
    <Layout>
      <SEO
        title="Brand Kit Guidelines"
        description="Official Indiana Esports Network brand guidelines, logo downloads, colors, typography, and coach usage rules."
        path="/brand-kit"
      />

      <section className="relative overflow-hidden border-b border-primary/30 bg-card py-20 md:py-24">
        <div className="absolute inset-0 opacity-35 bg-[linear-gradient(rgba(234,196,83,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(234,196,83,0.08)_1px,transparent_1px)] bg-[size:54px_54px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/20" />
        <div className="container relative z-10 mx-auto grid items-center gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
              Coach Resource
            </div>
            <h1 className="font-heading text-4xl font-bold uppercase tracking-wider text-white md:text-6xl">
              IEN Brand Kit Guidelines
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg lg:mx-0">
              A practical guide for using Indiana Esports Network logos, colors,
              typography, and usage rules on the website, school flyers,
              streams, newsletters, and coach communications.
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-primary/80">
              Last updated {BRAND_KIT_UPDATED}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest"
              >
                <a href={BRAND_ASSET_ZIP} download>
                  <Download className="mr-2 h-4 w-4" aria-hidden />
                  Download Logos
                </a>
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xl rounded-lg border border-primary/30 bg-background p-8 shadow-2xl shadow-black/30">
            <img
              src="/brand-kit/ien-horizontal-logo-transparent.png"
              alt="Indiana Esports Network"
              className="mx-auto h-auto w-full object-contain"
            />
            <div className="mt-8 grid grid-cols-3 gap-3">
              {coreBrandColors.map((color) => (
                <div key={color.hex} className="rounded-md border border-white/10 p-3">
                  <div
                    className="mb-3 h-10 rounded-sm"
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className="font-mono text-[11px] text-muted-foreground">{color.hex}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            ["Purpose", "Keep IEN recognizable across school, coach, and public materials."],
            ["Audience", "Coaches, administrators, student leaders, partners, and families."],
            ["Core Colors", "IEN Navy, Torch Gold, and white should lead every official layout."],
            ["Approval", "Ask IEN before using the brand on sponsor-facing or merchandise work."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-lg border border-primary/20 bg-card p-5">
              <h2 className="font-heading text-lg font-bold uppercase tracking-wider text-primary">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-primary/20 bg-card py-16">
        <div className="container mx-auto px-4">
          <SectionHeader eyebrow="Foundation" title="Brand Story">
            IEN should feel credible, energetic, inclusive, and easy for coaches
            to use. The brand carries the seriousness of school athletics with
            the momentum of competitive gaming.
          </SectionHeader>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-primary/20 bg-background p-6">
              <h3 className="font-heading text-2xl font-bold uppercase tracking-wider text-white">
                Purpose
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Prepare students for the future through collaboration,
                communication, creativity, and critical thinking through video
                games and esports.
              </p>
            </article>
            <article className="rounded-lg border border-primary/20 bg-background p-6">
              <h3 className="font-heading text-2xl font-bold uppercase tracking-wider text-white">
                Brand Promise
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                IEN gives Indiana schools a trusted, educator-led place for
                students to compete, belong, and grow.
              </p>
            </article>
            <article className="rounded-lg border border-primary/20 bg-background p-6 md:col-span-2">
              <h3 className="font-heading text-2xl font-bold uppercase tracking-wider text-white">
                Approved Boilerplate
              </h3>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <p className="mb-2 font-heading text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    Short
                  </p>
                  <p className="text-sm leading-7 text-muted-foreground">{brandBoilerplate.short}</p>
                </div>
                <div>
                  <p className="mb-2 font-heading text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    Standard
                  </p>
                  <p className="text-sm leading-7 text-muted-foreground">{brandBoilerplate.standard}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <SectionHeader eyebrow="Logo" title="Official Marks">
          Use the provided logo files as-is. The logo mark, torch, stars, and
          wordmark should never be redrawn or rebuilt.
        </SectionHeader>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {logoAssets.map((asset) => (
            <LogoCard key={asset.title} {...asset} />
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-primary/20 bg-card p-6">
            <h3 className="mb-5 font-heading text-2xl font-bold uppercase tracking-wider text-white">
              Clear Space
            </h3>
            <div className="rounded-md border border-dashed border-primary/50 bg-background p-6">
              <div className="rounded-md border border-primary/20 p-6">
                <img
                  src="/brand-kit/ien-horizontal-logo-transparent.png"
                  alt=""
                  className="mx-auto max-h-32 w-full object-contain"
                />
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Treat the dashed area as protected space. Do not place school
              logos, sponsor marks, text, or borders inside it.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {logoRules.map((rule) => (
              <RuleCard key={rule.label} {...rule} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-5 font-heading text-2xl font-bold uppercase tracking-wider text-white">
            Program Lockups
          </h3>
          <div className="grid gap-5 md:grid-cols-3">
            {programLockups.map((asset) => (
              <LogoCard key={asset.title} {...asset} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-primary/20 bg-card py-16">
        <div className="container mx-auto px-4">
          <SectionHeader eyebrow="Color" title="Palette">
            Core colors should drive official IEN materials. Website support
            colors can help with digital UI, alerts, labels, and secondary text.
          </SectionHeader>

          <div className="mb-10">
            <h3 className="mb-5 font-heading text-2xl font-bold uppercase tracking-wider text-white">
              Core Brand Colors
            </h3>
            <div className="grid gap-5 md:grid-cols-3">
              {coreBrandColors.map((color) => (
                <ColorCard key={color.hex} color={color} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-heading text-2xl font-bold uppercase tracking-wider text-white">
              Website Support Colors
            </h3>
            <div className="grid gap-5 md:grid-cols-5">
              {websiteSupportColors.map((color) => (
                <ColorCard key={color.hex} color={color} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <SectionHeader eyebrow="Typography" title="Type System">
          Typography should feel athletic, sharp, and readable. Reserve the
          logo wordmark for official logo artwork only.
        </SectionHeader>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-lg border border-primary/20 bg-card p-6">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
              <Type className="h-6 w-6" aria-hidden />
            </div>
            <p className="font-heading text-5xl font-bold uppercase tracking-wider text-white md:text-7xl">
              Match Week
            </p>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Coach updates should use readable body copy, short section
              headings, and enough spacing for fast scanning.
            </p>
          </div>
          <div className="grid gap-5">
            {typography.map((item) => (
              <article key={item.role} className="rounded-lg border border-primary/20 bg-card p-5">
                <div className="grid gap-4 md:grid-cols-[0.45fr_0.25fr_1fr]">
                  <div>
                    <p className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-primary">
                      Role
                    </p>
                    <h3 className="mt-2 font-heading text-xl font-bold uppercase tracking-wider text-white">
                      {item.role}
                    </h3>
                  </div>
                  <div>
                    <p className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-primary">
                      Family
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.family}</p>
                  </div>
                  <div>
                    <p className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-primary">
                      Use
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.usage}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-primary/20 bg-card py-16">
        <div className="container mx-auto px-4">
          <SectionHeader eyebrow="Usage" title="Dos And Don'ts">
            These rules help school-created graphics look aligned without
            slowing coaches down.
          </SectionHeader>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-primary/20 bg-background p-6">
              <div className="mb-5 flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wider text-white">
                  Do
                </h3>
              </div>
              <div className="space-y-4">
                {doDontRules.dos.map((item) => (
                  <p key={item} className="text-sm leading-6 text-muted-foreground">
                    {item}
                  </p>
                ))}
              </div>
            </article>
            <article className="rounded-lg border border-destructive/40 bg-background p-6">
              <div className="mb-5 flex items-center gap-3">
                <XCircle className="h-6 w-6 text-destructive" aria-hidden />
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wider text-white">
                  Don't
                </h3>
              </div>
              <div className="space-y-4">
                {doDontRules.donts.map((item) => (
                  <p key={item} className="text-sm leading-6 text-muted-foreground">
                    {item}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl rounded-lg border border-primary/30 bg-card p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                <ImageIcon className="h-6 w-6" aria-hidden />
              </div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-wider text-white">
                Coach Checklist
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Run through this before posting a school graphic, event flyer,
                stream overlay, or newsletter item.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <DownloadLink href={BRAND_ASSET_ZIP}>Logo Pack</DownloadLink>
              </div>
            </div>
            <div className="grid gap-3">
              {coachChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-md border border-primary/15 bg-background p-3">
                  <Palette className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-lg border border-primary/20 bg-card p-5 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-white">
              Need approval or a logo format that is not listed?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Email the IEN board before using the brand on merchandise,
              sponsor-facing materials, paid ads, or large public signage.
            </p>
          </div>
          <a
            href={`mailto:${BRAND_CONTACT_EMAIL}?subject=IEN%20Brand%20Kit%20Question`}
            className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-4 py-3 font-heading text-sm font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:border-primary hover:bg-primary/10"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Contact IEN
          </a>
        </div>
      </section>
    </Layout>
  );
}
