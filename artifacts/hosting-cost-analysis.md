# Hosting Cost Analysis for Indiana Esports Network

Date: 2026-07-09

## Executive recommendation

For the current IEN website, the best fit is **Vercel**.

The current site is a static React/Vite frontend, not a WordPress site. It has about **33 MB** of public assets across **73 files**, plus about **604 KB** of source code. That is tiny by hosting standards. Storage is not the real problem. The real decision is workflow:

- If we want to keep the current custom site quality: use **Vercel**.
- If the board needs a traditional editor and is okay rebuilding the site: use **Hostinger managed WordPress**.
- If the board wants the easiest drag-and-drop editor and does not care about custom code ownership: stay with **Wix**.
- If we want a Vercel alternative for static hosting: use **Netlify**.
- If we want hosted WordPress.com specifically: use **WordPress.com Business**, but it is expensive compared with Hostinger.

My honest ranking:

1. **Vercel** - best for the site we already built.
2. **Netlify** - best backup option if we want a Vercel-like host.
3. **Hostinger** - best if we commit to full WordPress.
4. **WordPress.com** - workable, but pricier for the developer features we would want.
5. **Wix** - easiest for nontechnical editing, but weakest for custom code ownership and migration.

## Quick comparison

| Platform | Best-fit plan for IEN | Approx. monthly cost | Approx. annual cost | Storage / usage | Editing workflow | Developer workflow | Fit for current site |
|---|---:|---:|---:|---|---|---|---|
| Vercel | Hobby or Pro | $0, or $20/mo per developer seat for Pro | $0, or $240+/yr | 100 GB/mo fast data transfer on Hobby; 1 TB/mo on Pro; Blob storage starts at 1 GB included | Code-based; no built-in page editor | Excellent Git deploys, previews, CDN, rollbacks | Excellent |
| Netlify | Free, Personal, or Pro | $0, $9, or $20/mo | $0, $108, or $240/yr | Credit-based: Free 300 credits/mo, Personal 1,000, Pro 3,000; bandwidth costs 20 credits/GB | Code-based; no built-in full CMS unless added separately | Excellent Git deploys, previews, CDN | Very good |
| Hostinger | Managed WordPress Unlimited | Promo $3.79/mo, renews $16.99/mo | Promo requires 48 months upfront; renewal about $203.88/yr | 50 GB NVMe storage; daily backups; CDN | WordPress admin, block editor, plugins | Good WP tooling: WP-CLI, SSH, Git integration | Good only after WordPress rebuild |
| WordPress.com | Business | $40/mo monthly, or $25/mo yearly | $300/yr if yearly; $480/yr if monthly | 50 GB storage; developer tools on Business/Commerce | WordPress admin, block editor, plugins | Good on Business: SFTP/SSH, WP-CLI, GitHub deployments | Good only after WordPress rebuild |
| Wix | Core or Business | Displayed at $29.77/mo Core, $39.77/mo Business | About $357.24/yr Core, $477.24/yr Business before taxes | Core 50 GB; Business 100 GB; Business Elite unlimited | Easiest drag-and-drop editing | Weak for portable custom code | Poor fit for current custom site |

Notes:

- Wix prices vary by location and taxes; the numbers above are the USD reference prices displayed in the current session.
- Hostinger promo pricing is for a 48-month term paid upfront. Renewal price matters more for long-term budgeting.
- Vercel and Netlify do not think about storage the way Wix/WordPress hosts do. They are usually better for static/front-end apps because assets are deployed to a global CDN.
- The registered-agent WordPress account should be treated as **unknown** until we confirm its exact limits: storage, custom domain, ads, plugins, custom themes, backups, SFTP/SSH, and whether it is WordPress.com or self-hosted WordPress.

## Feature comparison

| Feature | Vercel | Netlify | Hostinger WordPress | WordPress.com Business | Wix |
|---|---|---|---|---|---|
| Custom domain | Yes | Yes | Yes | Yes | Yes on paid plans |
| SSL | Included | Included | Included | Included | Included |
| Global CDN | Yes | Yes | Yes / included on listed plans | Yes | Multi-cloud hosting |
| Git deploys | Excellent | Excellent | Possible with Git integration | GitHub deployments on Business | Not the normal workflow |
| Preview deployments | Excellent | Excellent | Not native like Vercel/Netlify | Staging on higher plans | Limited compared with code hosts |
| Built-in visual editor | No | No | Yes, WordPress | Yes, WordPress | Yes, best-in-class for nontechnical editing |
| Blog/news editing by board | Needs CMS integration or code edits | Needs CMS integration or code edits | Yes | Yes | Yes |
| Plugin ecosystem | No, app integrations instead | No, app integrations instead | Yes, WordPress plugins | Yes, WordPress plugins | Wix App Market |
| Custom theme/code ownership | Strong | Strong | Strong if self-hosted WP theme is built well | Medium to strong on Business | Weak to medium; proprietary platform |
| Maintenance burden | Low | Low | Medium: WP updates/plugins/security | Medium-low, managed by WordPress.com | Low, managed by Wix |
| Migration risk | Low from current repo | Low from current repo | High because site must be rebuilt in WP | High because site must be rebuilt in WP | Already on Wix, but harder to export cleanly |
| Performance potential | Excellent | Excellent | Good if optimized | Good if optimized | Fine, but less lean than static hosting |

## Platform notes

### Vercel

Best for: keeping the current React/Vite site.

Pros:

- Lowest friction for the current codebase.
- Global CDN, automatic SSL, Git deploys, instant rollbacks, preview deployments.
- No WordPress plugin/theme/database maintenance.
- Current site storage is tiny, so Vercel's bandwidth limits matter more than storage.

Cons:

- Board members cannot edit pages directly unless we add a CMS.
- Pro may be needed depending on organization/commercial-use needs and team workflow.
- Some usage-based add-ons can cost money if the site grows beyond included limits.

Best IEN path:

- Keep the site on Vercel.
- Add a lightweight CMS later only for news/events if needed.
- Cancel Wix once DNS and content are settled.

### Netlify

Best for: Vercel-like hosting with a different billing model.

Pros:

- Very strong static/frontend hosting.
- Git deploys, custom domains, deploy previews, global CDN.
- Free and $9/mo options can be enough for small sites.

Cons:

- Credit model is harder to explain.
- No built-in full website editor unless we add a CMS.
- For this repo, it is not clearly better than Vercel, just a credible alternative.

Best IEN path:

- Use only if we decide not to use Vercel but still want modern static hosting.

### Hostinger

Best for: full WordPress rebuild at better long-term value than WordPress.com.

Pros:

- Much cheaper than WordPress.com Business at renewal.
- Managed WordPress, CDN, backups, email/mailboxes in promo terms, and developer tools.
- Good if nontechnical editing becomes the top priority.

Cons:

- Requires rebuilding the current site into WordPress.
- WordPress means plugin/theme/security/update responsibility.
- Promo price requires a long upfront term; renewal is the real number.

Best IEN path:

- Use if the board votes for full WordPress.
- Choose Hostinger over WordPress.com unless the registered-agent account gives unusually good terms.

### WordPress.com

Best for: managed WordPress with less server responsibility.

Pros:

- Familiar WordPress editing experience.
- Business plan includes 50 GB storage and developer tools like SFTP/SSH, WP-CLI, and GitHub deployments.
- Less host maintenance than generic self-hosted WordPress.

Cons:

- More expensive than Hostinger.
- Still requires rebuilding the current site into WordPress.
- Free/cheap WordPress plans may not support everything needed for a custom site.

Best IEN path:

- Use the free registered-agent WordPress account only as a test/staging environment until we verify limits.
- Do not commit to WordPress.com Business unless board editing is worth the extra annual cost.

### Wix

Best for: easiest nontechnical editing.

Pros:

- Simple page editing for nontechnical users.
- Hosting, templates, apps, forms, and marketing features are bundled.
- Current organization already pays for it, so it is familiar.

Cons:

- Not a good fit for the custom React/Vite site.
- Harder to preserve code ownership and migrate cleanly later.
- More expensive than Vercel/Netlify for a mostly static site.
- Design can drift or become inconsistent when edited by many users.

Best IEN path:

- Keep only until the new site is ready and DNS can be switched.

## Cost scenarios

| Scenario | Year 1 estimate | Year 2+ estimate | What we get |
|---|---:|---:|---|
| Keep current site on Vercel Hobby | $0 | $0 | Best cost if account eligibility and usage fit |
| Keep current site on Vercel Pro | $240+/yr | $240+/yr | Best professional setup if Pro/org features are needed |
| Move current site to Netlify Personal | $108/yr | $108/yr | Good Vercel alternative for small traffic |
| Full WordPress on Hostinger Unlimited | $181.92 due upfront for 48 months, effective $45.48/yr | About $203.88/yr after promo | Best-value WordPress path |
| Full WordPress on WordPress.com Business | $300/yr yearly billing | $300/yr yearly billing | Managed WordPress with developer tools |
| Stay on Wix Core | About $357.24/yr | About $357.24/yr, before taxes/changes | Builder workflow, 50 GB storage |
| Stay on Wix Business | About $477.24/yr | About $477.24/yr, before taxes/changes | Builder workflow, 100 GB storage |

## Storage reality check

The current site does not need much storage:

- Public assets: about **33 MB**
- Public asset files: **73**
- Source code: about **604 KB**

Even the smallest paid storage limits are far beyond the current site. If storage becomes a problem, it will likely be because of future high-resolution photos, videos, PDFs, or media uploads, not because of the current website code.

For photos and video-heavy content, the better long-term pattern is:

- Website on Vercel or Netlify.
- Videos on YouTube/Vimeo.
- Large photo galleries in a dedicated media workflow or optimized image storage.
- News/events managed through a CMS only if regular nontechnical editing is required.

## Board-ready recommendation

Use this wording:

> I recommend we stop thinking of this as "which storage plan is biggest" and instead choose based on workflow. Our new site is a custom React/Vite site, so Vercel is the cleanest and cheapest host for what we already built. Wix is easy to edit but expensive and less portable. WordPress is useful if the board needs direct editing, but a full WordPress rebuild would add cost and maintenance. If we ever choose full WordPress, Hostinger is a better value than WordPress.com Business. For now, I recommend Vercel, with the free WordPress account used only for testing or future CMS experiments.

## Source links

- Vercel pricing: https://vercel.com/pricing
- Netlify pricing: https://www.netlify.com/pricing/
- Hostinger WordPress hosting: https://www.hostinger.com/wordpress-hosting
- WordPress.com pricing: https://wordpress.com/pricing/
- Wix plans: https://www.wix.com/plans
