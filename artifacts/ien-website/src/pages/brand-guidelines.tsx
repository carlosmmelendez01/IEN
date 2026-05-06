import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Download, Check, X, Palette, Type, ImageIcon, FileText } from "lucide-react";
import ienLockup from "@assets/IEN_Transparent.png";
import torchlineUpper from "@assets/brand/torchline-uppercase-numerals.png";
import torchlineLower from "@assets/brand/torchline-lowercase-numerals.png";

// Color palette — mirrors the actual values used in src/index.css so this page is the source
// of truth for what designers should specify when producing IEN-branded materials.
const PALETTE = [
  { name: "IEN Navy",       hex: "#080F1E", hsl: "218, 58%, 8%",  rgb: "8, 15, 30",    role: "Primary background" },
  { name: "IEN Gold",       hex: "#D4AF37", hsl: "45, 74%, 50%",  rgb: "212, 175, 55", role: "Primary accent / brand mark" },
  { name: "Card Navy",      hex: "#0D1828", hsl: "218, 50%, 11%", rgb: "13, 24, 40",   role: "Card / panel surfaces" },
  { name: "Border Navy",    hex: "#1F2C44", hsl: "218, 40%, 20%", rgb: "31, 44, 68",   role: "Subtle borders & dividers" },
  { name: "Text Light",     hex: "#F2F2F2", hsl: "0, 0%, 95%",    rgb: "242, 242, 242", role: "Primary body text" },
  { name: "Text Muted",     hex: "#8A95AA", hsl: "215, 18%, 62%", rgb: "138, 149, 170", role: "Secondary / supporting text" },
];

// Anything in /public/brand/ is served at /brand/<filename> at runtime.
const DOWNLOADS = [
  {
    title: "Official IEN Logo",
    desc: "The complete IEN brand mark. Always use it as a single, unmodified unit.",
    files: [
      { label: "PNG (transparent)", href: "/brand/IEN_Logo_Lockup.png", note: "Web · digital · presentations" },
      { label: "JPEG (navy bg)",    href: "/brand/IEN_Logo_Lockup.jpg", note: "Print · social posts" },
    ],
  },
];

export default function BrandGuidelines() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 bg-card border-b border-primary/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-1 border border-primary/50 bg-primary/10 text-primary text-xs font-bold tracking-widest rounded-full uppercase">
              Brand Guidelines · Updated April 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 tracking-tight">
              IEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">BRAND GUIDELINES</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The Indiana Esports Network identity system. Use these assets and
              guidelines whenever you reference IEN in publications, partner
              materials, school communications, or social media.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The IEN logo is one indivisible mark. We don't expose any internal terminology
          (icon vs. wordmark vs. tagline) because partners, schools, and the public
          should treat the logo as one complete brand mark. */}
      <section className="py-16 container mx-auto px-4">
        <SectionHeader icon={<ImageIcon className="w-4 h-4" />} eyebrow="Identity" title="The IEN Logo" />

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border-2 border-primary rounded-xl p-10 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
            <div className="aspect-[16/7] flex items-center justify-center bg-background rounded-lg border border-primary/10 mb-6 p-8">
              <img src={ienLockup} alt="Indiana Esports Network logo" className="max-w-full max-h-full object-contain" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              This is the official Indiana Esports Network logo. Use it as a single,
              complete brand mark in all communications. Do not crop, modify, recolor,
              or recreate any part of it.
            </p>
          </div>
        </div>

        {/* Do / Don't */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-10">
          <DosList
            title="Do"
            tone="positive"
            items={[
              "Use on the IEN navy background or other dark surfaces with strong contrast",
              "Maintain clear space around the logo equal to at least 25% of its height",
              "Use the official PNG or JPEG files provided below",
              "Render in full color whenever possible",
              "Scale proportionally — never stretch one axis",
            ]}
          />
          <DosList
            title="Don't"
            tone="negative"
            items={[
              "Don't crop, separate, or modify any part of the logo",
              "Don't recolor the logo",
              "Don't stretch, skew, rotate, or distort the logo",
              "Don't add drop shadows, glows, or other effects beyond what the file includes",
              "Don't recreate the logo in a different typeface",
            ]}
          />
        </div>
      </section>

      {/* Color palette */}
      <section className="py-16 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4">
          <SectionHeader icon={<Palette className="w-4 h-4" />} eyebrow="Color" title="Brand Palette" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PALETTE.map((c) => (
              <div key={c.name} className="bg-background border border-primary/20 rounded-xl overflow-hidden">
                <div
                  className="h-28 w-full border-b border-primary/10"
                  style={{ background: c.hex }}
                />
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h4 className="font-heading font-bold text-white tracking-wide">{c.name}</h4>
                    <span className="font-mono text-xs text-primary">{c.hex}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{c.role}</p>
                  <dl className="text-xs font-mono space-y-1 text-muted-foreground">
                    <div className="flex justify-between"><dt>HSL</dt><dd>{c.hsl}</dd></div>
                    <div className="flex justify-between"><dt>RGB</dt><dd>{c.rgb}</dd></div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-16 container mx-auto px-4">
        <SectionHeader icon={<Type className="w-4 h-4" />} eyebrow="Typography" title="Type System" />

        {/* Torchline (heading) */}
        <div className="bg-card border-2 border-primary rounded-xl p-8 max-w-5xl mx-auto mb-6 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
          <div className="flex flex-wrap items-baseline gap-4 mb-2">
            <h3 className="font-heading font-bold text-3xl text-primary tracking-wide">TORCHLINE</h3>
            <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
              Display · Headings
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-2xl">
            The official IEN typeface. Designed in-house to carry the energy of the
            torch mark into our headlines, signage, jerseys, and event branding.
            Currently shipping in <strong className="text-white">Bold</strong>;
            a Regular weight is in active design.
          </p>
          <div className="bg-white rounded-lg p-6 mb-3">
            <img src={torchlineUpper} alt="Torchline Bold uppercase A through Z and numerals 0–9" className="w-full h-auto" />
          </div>
          <div className="bg-white rounded-lg p-6">
            <img src={torchlineLower} alt="Torchline Bold lowercase a through z and numerals" className="w-full h-auto" />
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Note: site headings currently render in Rajdhani as a temporary web fallback
            while Torchline is being prepared for web. When the web font ships,
            every heading on this site will inherit Torchline automatically.
          </p>
        </div>

        {/* Inter (body) */}
        <div className="bg-card border border-primary/30 rounded-xl p-8 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-baseline gap-4 mb-2">
            <h3 className="font-sans font-bold text-3xl text-white tracking-tight">Inter</h3>
            <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
              Body · Supporting Text
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-2xl">
            Inter is our supporting typeface for body copy, captions, navigation, and
            any sustained reading. Open-source, hosted via Google Fonts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Regular 400</p>
              <p className="font-sans text-base leading-relaxed">
                Indiana's official scholastic esports league, fostering community,
                competition, and career pathways through gaming.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Bold 700</p>
              <p className="font-sans font-bold text-base leading-relaxed">
                Indiana's official scholastic esports league, fostering community,
                competition, and career pathways through gaming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 bg-card border-y border-primary/20">
        <div className="container mx-auto px-4">
          <SectionHeader icon={<Download className="w-4 h-4" />} eyebrow="Assets" title="Download Logos" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {DOWNLOADS.map((pack) => (
              <div key={pack.title} className="bg-background border border-primary/30 rounded-xl p-6 flex flex-col">
                <h3 className="font-heading font-bold text-xl text-white mb-2">{pack.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-grow">{pack.desc}</p>
                <div className="space-y-2">
                  {pack.files.map((f) => (
                    <a
                      key={f.label}
                      href={f.href}
                      download
                      className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-primary/20 hover:border-primary/60 hover:bg-primary/5 transition-all group"
                    >
                      <div className="flex flex-col">
                        <span className="font-heading font-bold text-sm text-white tracking-wide group-hover:text-primary transition-colors">
                          {f.label}
                        </span>
                        <span className="text-xs text-muted-foreground">{f.note}</span>
                      </div>
                      <Download className="w-4 h-4 text-primary shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Vector status notice */}
          <div className="max-w-3xl mx-auto mt-10 bg-background border border-primary/20 rounded-xl p-5 flex items-start gap-3">
            <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-white">SVG / vector files coming soon.</strong>{" "}
              For print, signage, or large-format applications that require vector
              artwork, contact{" "}
              <a href="mailto:info@indianaesportsnetwork.org" className="text-primary hover:underline">
                info@indianaesportsnetwork.org
              </a>{" "}
              and we&rsquo;ll send the source files directly while we finalize the public
              vector exports.
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-16 container mx-auto px-4 mb-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Questions about using the brand?
          </h2>
          <p className="text-muted-foreground mb-6">
            Email us if you&rsquo;re putting together a partnership announcement,
            school communication, press piece, or anything else where you&rsquo;d like an
            extra set of eyes on how IEN is represented.
          </p>
          <a
            href="mailto:info@indianaesportsnetwork.org"
            className="inline-block px-6 py-3 border border-primary text-primary font-heading tracking-widest text-sm uppercase rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
          >
            info@indianaesportsnetwork.org
          </a>
        </div>
      </section>
    </Layout>
  );
}

function SectionHeader({
  icon,
  eyebrow,
  title,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 text-primary font-heading font-bold tracking-widest uppercase text-xs mb-3">
        {icon} {eyebrow}
      </div>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">
        {title}
      </h2>
    </div>
  );
}

function DosList({
  title,
  tone,
  items,
}: {
  title: string;
  tone: "positive" | "negative";
  items: string[];
}) {
  const accent = tone === "positive" ? "text-green-400" : "text-red-400";
  const Icon = tone === "positive" ? Check : X;
  return (
    <div className="bg-background border border-primary/20 rounded-xl p-6">
      <h4 className={`font-heading font-bold tracking-widest uppercase text-sm ${accent} mb-4`}>
        {title}
      </h4>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
            <Icon className={`w-4 h-4 ${accent} shrink-0 mt-0.5`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
