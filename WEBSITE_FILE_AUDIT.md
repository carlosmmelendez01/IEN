# Website File Audit

Date: August 20, 2026

Scope: Git-tracked files in this repository. Local ignored files such as `node_modules`, `dist`, `.DS_Store`, and `.pnpm-store` are not treated as GitHub files.

## Current Vercel Build Path

The root `vercel.json` is the current deployment source of truth:

- Build command: `pnpm --filter @workspace/ien-website build`
- Output directory: `artifacts/ien-website/dist/public`
- Framework: Vite

I verified this with:

```sh
pnpm --filter @workspace/ien-website build
```

The build completed successfully. Vite emitted non-fatal sourcemap/chunk-size warnings only.

## How To Read This Audit

- "Required for current website build" means the file is used by the Vercel build command above or by files that command imports.
- "Not needed for the site to run" means the live Vercel site can build and serve without the file, assuming the current root Vercel setup stays the same.
- Some files are not needed at runtime but are still useful for development, documentation, future rebuilds, SEO, or repository hygiene. Those are called out separately.

## Files And Areas To Keep

Keep these for the current deployment unless you are intentionally restructuring the repo:

```text
.npmrc
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
vercel.json
artifacts/ien-website/package.json
artifacts/ien-website/index.html
artifacts/ien-website/vite.config.ts
artifacts/ien-website/src/** except the orphan source files listed below
artifacts/ien-website/public/** files referenced by the app
attached_assets/** files imported through @assets
```

Keep these for development/typechecking even though the live Vercel build does not directly need them:

```text
.gitignore
tsconfig.base.json
tsconfig.json
artifacts/ien-website/tsconfig.json
```

The app currently imports these `attached_assets` files. Do not delete them unless the corresponding app imports are changed:

```text
attached_assets/Gravity_Gaming_Logo_1776776398973.png
attached_assets/IEN_Horizontal Logo Transparent.png
attached_assets/IEN_IHSEN White Text.png
attached_assets/IEN_IMSEN White Text .png
attached_assets/IEN_IUEN White Text.png
attached_assets/IHSEN Playoff Schedule.png
attached_assets/IHSEN Schedule.png
attached_assets/IMSEN Fall.png
attached_assets/IMSEN Spring.png
attached_assets/IUEN Fall.png
attached_assets/IUEN Spring.png
attached_assets/LeagueOS_1776776398973.jpg
attached_assets/McDonald's_Golden_Arches_1776776398973.png
attached_assets/Sponsor_Logo_01_1776776398973.png
attached_assets/White_SPIN_Icon_1776776398973.png
attached_assets/Zotac_Vertical_Logo_1776776398973.png
attached_assets/state-finals/01-greencastle-hero-1280.jpg
attached_assets/state-finals/01-greencastle-hero-2400.jpg
attached_assets/state-finals/02-central-hs-1200.jpg
attached_assets/state-finals/03-marvel-rivals-1200.jpg
attached_assets/state-finals/04-drew-rhoda-1200.jpg
```

## High-Confidence Not Needed For The Current Site

These are not used by the current Vercel website build. They may be useful for history, experiments, API work, mockups, or content operations, but they are not required for the deployed website to run.

### Root And Repo Support Files

```text
.replit
.replitignore
README.md
replit.md
pnpm-lock.yaml.replit-backup
artifacts/hosting-cost-analysis.md
artifacts/playvs-only-outreach.csv
artifacts/playvs-website-school-comparison.csv
```

Notes:

- `README.md` is not needed for the site to run, but usually should stay in a public repo.
- `.replit`, `.replitignore`, and `replit.md` are Replit-specific, not Vercel runtime files.
- `pnpm-lock.yaml.replit-backup` is a backup lockfile and is not used by the current install.

### Separate API Server Package

The current Vercel config does not deploy this API server package.

```text
artifacts/api-server/.replit-artifact/artifact.toml
artifacts/api-server/build.mjs
artifacts/api-server/package.json
artifacts/api-server/src/app.ts
artifacts/api-server/src/index.ts
artifacts/api-server/src/lib/.gitkeep
artifacts/api-server/src/lib/logger.ts
artifacts/api-server/src/middlewares/.gitkeep
artifacts/api-server/src/routes/health.ts
artifacts/api-server/src/routes/index.ts
artifacts/api-server/tsconfig.json
```

### API Spec, Generated Clients, Zod, And DB Packages

These are not bundled by the website app. Caveat: some are referenced by root TypeScript project references or the website `tsconfig.json`, so deleting them without adjusting TypeScript config can break local typecheck commands.

```text
lib/api-client-react/package.json
lib/api-client-react/src/custom-fetch.ts
lib/api-client-react/src/generated/api.schemas.ts
lib/api-client-react/src/generated/api.ts
lib/api-client-react/src/index.ts
lib/api-client-react/tsconfig.json
lib/api-spec/openapi.yaml
lib/api-spec/orval.config.ts
lib/api-spec/package.json
lib/api-zod/package.json
lib/api-zod/src/generated/api.ts
lib/api-zod/src/generated/types/healthStatus.ts
lib/api-zod/src/generated/types/index.ts
lib/api-zod/src/index.ts
lib/api-zod/tsconfig.json
lib/db/drizzle.config.ts
lib/db/package.json
lib/db/src/index.ts
lib/db/src/schema/index.ts
lib/db/tsconfig.json
```

### Scripts Package

This package is not part of the website build.

```text
scripts/package.json
scripts/post-merge.sh
scripts/src/hello.ts
scripts/tsconfig.json
```

### Mockup Sandbox

This is a separate mockup app and not the deployed website.

```text
artifacts/mockup-sandbox/.replit-artifact/artifact.toml
artifacts/mockup-sandbox/components.json
artifacts/mockup-sandbox/index.html
artifacts/mockup-sandbox/mockupPreviewPlugin.ts
artifacts/mockup-sandbox/package.json
artifacts/mockup-sandbox/src/.generated/mockup-components.ts
artifacts/mockup-sandbox/src/App.tsx
artifacts/mockup-sandbox/src/components/mockups/GameRulesModalMockup.tsx
artifacts/mockup-sandbox/src/components/ui/accordion.tsx
artifacts/mockup-sandbox/src/components/ui/alert-dialog.tsx
artifacts/mockup-sandbox/src/components/ui/alert.tsx
artifacts/mockup-sandbox/src/components/ui/aspect-ratio.tsx
artifacts/mockup-sandbox/src/components/ui/avatar.tsx
artifacts/mockup-sandbox/src/components/ui/badge.tsx
artifacts/mockup-sandbox/src/components/ui/breadcrumb.tsx
artifacts/mockup-sandbox/src/components/ui/button-group.tsx
artifacts/mockup-sandbox/src/components/ui/button.tsx
artifacts/mockup-sandbox/src/components/ui/calendar.tsx
artifacts/mockup-sandbox/src/components/ui/card.tsx
artifacts/mockup-sandbox/src/components/ui/carousel.tsx
artifacts/mockup-sandbox/src/components/ui/chart.tsx
artifacts/mockup-sandbox/src/components/ui/checkbox.tsx
artifacts/mockup-sandbox/src/components/ui/collapsible.tsx
artifacts/mockup-sandbox/src/components/ui/command.tsx
artifacts/mockup-sandbox/src/components/ui/context-menu.tsx
artifacts/mockup-sandbox/src/components/ui/dialog.tsx
artifacts/mockup-sandbox/src/components/ui/drawer.tsx
artifacts/mockup-sandbox/src/components/ui/dropdown-menu.tsx
artifacts/mockup-sandbox/src/components/ui/empty.tsx
artifacts/mockup-sandbox/src/components/ui/field.tsx
artifacts/mockup-sandbox/src/components/ui/form.tsx
artifacts/mockup-sandbox/src/components/ui/hover-card.tsx
artifacts/mockup-sandbox/src/components/ui/input-group.tsx
artifacts/mockup-sandbox/src/components/ui/input-otp.tsx
artifacts/mockup-sandbox/src/components/ui/input.tsx
artifacts/mockup-sandbox/src/components/ui/item.tsx
artifacts/mockup-sandbox/src/components/ui/kbd.tsx
artifacts/mockup-sandbox/src/components/ui/label.tsx
artifacts/mockup-sandbox/src/components/ui/menubar.tsx
artifacts/mockup-sandbox/src/components/ui/navigation-menu.tsx
artifacts/mockup-sandbox/src/components/ui/pagination.tsx
artifacts/mockup-sandbox/src/components/ui/popover.tsx
artifacts/mockup-sandbox/src/components/ui/progress.tsx
artifacts/mockup-sandbox/src/components/ui/radio-group.tsx
artifacts/mockup-sandbox/src/components/ui/resizable.tsx
artifacts/mockup-sandbox/src/components/ui/scroll-area.tsx
artifacts/mockup-sandbox/src/components/ui/select.tsx
artifacts/mockup-sandbox/src/components/ui/separator.tsx
artifacts/mockup-sandbox/src/components/ui/sheet.tsx
artifacts/mockup-sandbox/src/components/ui/sidebar.tsx
artifacts/mockup-sandbox/src/components/ui/skeleton.tsx
artifacts/mockup-sandbox/src/components/ui/slider.tsx
artifacts/mockup-sandbox/src/components/ui/sonner.tsx
artifacts/mockup-sandbox/src/components/ui/spinner.tsx
artifacts/mockup-sandbox/src/components/ui/switch.tsx
artifacts/mockup-sandbox/src/components/ui/table.tsx
artifacts/mockup-sandbox/src/components/ui/tabs.tsx
artifacts/mockup-sandbox/src/components/ui/textarea.tsx
artifacts/mockup-sandbox/src/components/ui/toast.tsx
artifacts/mockup-sandbox/src/components/ui/toaster.tsx
artifacts/mockup-sandbox/src/components/ui/toggle-group.tsx
artifacts/mockup-sandbox/src/components/ui/toggle.tsx
artifacts/mockup-sandbox/src/components/ui/tooltip.tsx
artifacts/mockup-sandbox/src/hooks/use-mobile.tsx
artifacts/mockup-sandbox/src/hooks/use-toast.ts
artifacts/mockup-sandbox/src/index.css
artifacts/mockup-sandbox/src/lib/utils.ts
artifacts/mockup-sandbox/src/main.tsx
artifacts/mockup-sandbox/tsconfig.json
artifacts/mockup-sandbox/vite.config.ts
```

### Static Mockup And Brand Build Source

```text
artifacts/wp-full-site-mockup/index.html
artifacts/brand-kit/build_brand_kit_pdf.py
output/pdf/ien-brand-kit-guidelines.pdf
```

Notes:

- `output/pdf/ien-brand-kit-guidelines.pdf` is outside the website public folder. The deployed copy, if you want one, is `artifacts/ien-website/public/documents/ien-brand-kit-guidelines.pdf`.

## Website Package Files That Are Not Needed By The Current Vercel Build

These are inside `artifacts/ien-website`, but are not used by the current root Vercel build command.

```text
artifacts/ien-website/.env.example
artifacts/ien-website/.replit-artifact/artifact.toml
artifacts/ien-website/scripts/prerender.ts
artifacts/ien-website/src/components/contact/NewsletterSignup.tsx
artifacts/ien-website/src/components/ui/checkbox.tsx
artifacts/ien-website/src/components/ui/dialog.tsx
artifacts/ien-website/src/components/ui/label.tsx
artifacts/ien-website/vercel.json
```

Notes:

- `.env.example` is documentation for env vars, not runtime.
- `scripts/prerender.ts` is only used by the `build:prerender` and `prerender` scripts. Current Vercel uses `build`, not `build:prerender`.
- `NewsletterSignup.tsx` is not imported anywhere from `src/main.tsx`.
- `checkbox.tsx`, `dialog.tsx`, and `label.tsx` are also unreachable from the app import graph. If those files are removed, the matching Radix dependencies may also be removable after testing.
- `artifacts/ien-website/vercel.json` is not used while Vercel is configured from the repo root. Keep it only if you might later set the Vercel project root to `artifacts/ien-website`.

## Public Files Copied To Production But Not Linked By App Code

Vite copies everything in `artifacts/ien-website/public` to the production output. I scanned app code and found these public files are copied but not referenced by exact URL strings:

```text
artifacts/ien-website/public/brand-kit/ien-icon-navy.png
artifacts/ien-website/public/brand-kit/ien-main-logo-transparent.png
artifacts/ien-website/public/documents/ien-brand-kit-guidelines.pdf
artifacts/ien-website/public/events/ien-newsletter.pdf
artifacts/ien-website/public/robots.txt
artifacts/ien-website/public/sitemap.xml
```

Recommendations:

- The two brand-kit PNGs and the two PDFs appear removable from a pure app-runtime perspective.
- `robots.txt` and `sitemap.xml` are not needed for the app to run, but they are useful for search engines. Keep them if public discoverability matters.
- If the brand guidelines PDF or newsletter PDF is intentionally meant to be available by direct URL, keep it and consider adding links from the app.

## Unused `attached_assets` Files

These tracked source assets are not imported by the current website app. They are not copied to production unless some future code imports them.

```text
attached_assets/1.jpg
attached_assets/2.jpg
attached_assets/3.jpg
attached_assets/Coach of the Year.jpg
attached_assets/IEN_Favicon Transparent.png
attached_assets/IEN_Horizontal Logo.png
attached_assets/IEN_Icon Transparent .png
attached_assets/IEN_Icon.png
attached_assets/IEN_Main Logo Transparent .png
attached_assets/IEN_Main Logo Transparent.png
attached_assets/IEN_Main Logo.png
attached_assets/IHSEN 26-27 Calendar.pdf
attached_assets/IMSEN 26-27 Calendar.pdf
attached_assets/IMSEN Current.png
attached_assets/IUEN 26-27 Calendar.pdf
attached_assets/Pasted--IEN-Partners-with-SPIN-Stay-Plugged-In-a-leading-gamin_1776720014162.txt
attached_assets/Pasted-Adams-Central-Community-Schools-Alexandria-Monroe-Junio_1776718439006.txt
attached_assets/brand/torchline-lowercase-numerals.png
attached_assets/brand/torchline-uppercase-numerals.png
attached_assets/state-finals/02-central-hs-competing.jpg
attached_assets/state-finals/04-drew-rhoda-coach-of-year.jpg
```

Notes:

- The website uses newer/cropped `state-finals` images, not all originals.
- Calendar PDFs under `attached_assets` are not linked by the app. The linked calendar PDFs live under `artifacts/ien-website/public`.

## Suggested Cleanup Order

If the goal is to make the GitHub repo safer and easier to understand before making it public, clean up in this order:

1. Remove obvious non-site packages and experiments: `artifacts/mockup-sandbox`, `artifacts/api-server`, `artifacts/wp-full-site-mockup`, `scripts`, and unused `lib` packages if you do not plan to use them.
2. Remove unused raw assets from `attached_assets`, while keeping the imported assets listed in the keep section.
3. Decide whether unlinked public files should stay available by direct URL. If not, remove the unlinked brand-kit/event/document files.
4. Keep `robots.txt` and `sitemap.xml` if SEO matters.
5. After removing workspace packages, update TypeScript references and refresh the lockfile so local `pnpm build` and `pnpm typecheck` behavior is intentional.

## Important Caveats

- I did not delete anything in this audit.
- This is a file-necessity audit, not a full secret-history scan. Before making the repo public, also scan Git history for committed secrets and rotate any exposed keys.
- If Vercel project settings are changed to use `artifacts/ien-website` as the project root, this audit should be revisited because `artifacts/ien-website/vercel.json` would become relevant.
