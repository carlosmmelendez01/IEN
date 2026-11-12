# IEN Rules Quick Guide Audit

Date: November 12, 2026

Scope: production ruleset cards, current quick-guide behavior, all locally published title PDFs, and the proposed one-page quick-guide mockup. Production rules UI and data were not changed during this audit.

## Executive findings

- Fifteen title cards appear in the rules library. The latest IEN updates verify thirteen quick guides; Chess and Tetris remain in active revision.
- Only iRacing has game-specific `quickGuide` data. Every other title falls back to the same generic match setup, scoring, and coach reminders.
- The generic fallback is materially wrong for several titles. Apex uses administrator-controlled lobbies; Chess and Tetris are individual Swiss competitions; iRacing has no substitutions; Minecraft v1.1 removed points-based scoring; and League of Legends uses ISEA-specific lobby, draft, and pause procedures.
- The proposed mockup uses one consistent one-page hierarchy while requiring title-specific source-backed copy.

## Source and metadata audit

| Title | PDF | Quick guide today | Audit result |
|---|---|---|---|
| Valorant | v1.0 | Generic fallback | Game facts match. Competition label confirmed as Varsity 1A/2A + Club. |
| Apex Legends | v1.0 | Generic fallback | Game facts match. Generic home-team lobby copy is wrong because lobbies are administrator-controlled. |
| Rocket League | v1.0 | Generic fallback | Game facts match. Competition label confirmed as Varsity 1A/2A + Club. |
| League of Legends | ISEA Trials | Generic fallback | Verified with the newest IEN updates provided for this audit. |
| Overwatch 2 | v1.0 + Nov. 3 rules update | Generic fallback | Game facts match. Competition label confirmed as Varsity 1A/2A + Club; the hero-ban procedure comes from the news rules update. |
| Super Smash Bros. Ultimate | v1.01 | Generic fallback | Format confirmed: Best-of-3 crew-battle rounds. Each team starts every round with 12 total stocks (4 players × 3); the first team to win 2 rounds wins the match. |
| Mario Kart 8 Deluxe | cover v1.01 | Generic fallback | Verified with the newest IEN updates provided for this audit. |
| Minecraft | v1.1 | Generic fallback | Verified against the updated v1.1 rules. |
| Marvel Rivals | v1.03 | Generic fallback | Game facts and scheduled map rotation match the PDF. |
| Chess | cover v1.0 | Generic fallback | Cover says v1.0; inner document information says version `none`. |
| Tetris | cover v1.0 | Generic fallback | Cover says v1.0; inner document information says version `none`. |
| iRacing | v1.0 | Custom guide | Detailed custom guide and current metadata are verified. |
| Unified Rocket League | v1.0 | Generic fallback | Gameplay and series rules match Rocket League exactly; only the Unified lineup requirement differs. |
| Unified Super Smash Bros. Ultimate | v1.0 | Generic fallback | Gameplay and Best-of-3, 12-stock-per-round structure match Super Smash Bros. Ultimate exactly; only the Unified lineup requirement differs. |
| Fortnite | Latest IEN update | Generic fallback | Verified with the newest IEN update provided for this audit. |

## Proposed one-page content model

Every guide uses the same scan order:

1. Title, leagues, season, official source version, and verification status.
2. Six quick facts: platform, roster, format, duration, postseason, and one game-defining setting.
3. Three game-specific panels: before the match, how it plays, and win/report or coach reminders.
4. A short source-of-truth footer linking to the complete PDF and LeagueOS.

The mockup keeps Chess and Tetris in review while their updates are underway. Every other title is marked verified using the newest IEN updates provided.

## Approval boundary

The mockup is review-only. After approval, production work should:

- Replace generic fallback content with source-backed guide data for every verified title.
- Preserve visible in-progress states for Chess and Tetris until their updates are complete.
- Keep map, stage, and track rotations in their dedicated tabs so the quick guide remains a one-page overview.
- Add content checks so every published rules card either has a verified quick guide or an explicit pending reason.
