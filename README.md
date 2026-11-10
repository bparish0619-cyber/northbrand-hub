# Northbrand Hub

The front door of the **Northbrand Collective**: a single-page index of small, useful web projects from Abilene, Texas.

**Live:** [northbrand.net](https://northbrand.net)

## The sites

| Site | Address | What it is |
| --- | --- | --- |
| Northbrand Aperture | [northbrandaperture.net](https://northbrandaperture.net) | The flagship photography site, presented as the hub's hero panel |
| CFB Saga | [cfbsaga.northbrand.net](https://cfbsaga.northbrand.net) | Jeff Sagarin's college football ratings for all 266 teams, with a matchup predictor |
| Wylie Colorguard Digest | [colorguard.northbrand.net](https://colorguard.northbrand.net) | Schedules, deadlines, and need-to-know updates for the Wylie Pure Gold colorguard |
| Abilene Weekend | [weekend.northbrand.net](https://weekend.northbrand.net) | The week's events, shows, and pop-ups around Abilene, refreshed every Wednesday |
| Northbrand Weather | [weather.northbrand.net](https://weather.northbrand.net) | A plain, quick weather board for Abilene and the surrounding country |
| VA Health Care Quick Guide | [va.northbrand.net](https://va.northbrand.net) | Priority groups, copays, urgent vs. emergency care, and key contacts for 2026 |
| Retirement Curator | [retirement.northbrand.net](https://retirement.northbrand.net) | Retirement outcome simulations based on VOO and VTI, with 2026 tax-aware analysis |
| PDFCraft | [pdfcraft.northbrand.net](https://pdfcraft.northbrand.net) | A browser PDF toolkit: a Northbrand theme layer over an open-source app |
| School Dashboard | [school.northbrand.net](https://school.northbrand.net) | A private school dashboard behind a sign-in (Cloudflare Access), in the hub's Behind the login group |

Most sites have their own repository; this repo holds only the hub page itself. Two exceptions: Northbrand Aperture and the school dashboard have no repository, and their masters live only in the local workspace.

## Design

The hub follows the **Northbrand design DNA** (see `DESIGN.md` in this repo, which governs every northbrand.net page): warm ink `#14161c`, Northbrand Gold `#c9a227`, serif display type, hairline card borders, and a calm, printed feel.

The page opens with a slim sticky top bar: the wordmark, anchor links (Photography, Everyday, Reference and Tools, Private), and a live Abilene clock in 24-hour format. Under the title block sits the Aperture hero panel, a full-width monochrome photograph with a gold "Enter the gallery" call to action. The cards below fall into three groups: Everyday boards, Reference and tools, and Behind the login, which holds pages that sit behind a sign-in (the school dashboard is its first card).

The hub is the one page allowed gentle motion. A three.js field of slow gold dust drifts behind the content, with a faint aperture ring turning behind the hero; the cards rise and settle in one after another; a gold rule shimmers under the title; cards lift and tilt on hover with a warm highlight that follows the pointer; and six aperture blades over the hero photograph open on hover, on keyboard focus, or once when the hero first scrolls into view. Motion values are the shared tokens in section 10 of `DESIGN.md`. All of it settles for visitors who prefer reduced motion, and the page is complete without the WebGL layer. The topic pages stay still.

## Favicon and home screen

The hub carries its own favicon: a gold serif "N" on Northbrand Ink (`favicon.svg`, with `favicon-32.png`, `favicon.ico`, and `apple-touch-icon.png` behind it, and `icon-512.png` as the master art).

It also offers an **Add to Home Screen** button, the last block above the footer. Android and Chrome fire the browser's native install prompt; iOS, which has no prompt, opens a small in-page card with the Share menu steps. The button hides itself once the hub is installed. The plumbing lives beside the page: `manifest.webmanifest` (with `icon-192.png` and the full-bleed `icon-maskable-512.png`) and `sw.js`, a service worker that deliberately caches nothing, present only so Chrome will offer the prompt. Both are recorded in `DESIGN.md`.

## Editing

The page itself lives in the single file `index.html`. There is no build step.

- **Add or change a site:** copy a card block in the `<main>` section (each card is one `<a class="card">` block) and edit its link, title, one-line description, and address.
- **Change colors:** edit the variables in `:root` at the top of the `<style>` block.
- **Change the wording:** the tagline and footer are plain HTML in the `<header>` and `<footer>` sections.
- **The motion:** scripts at the bottom of the page drive the card highlight and tilt, the gold particle field, and the hero iris; everything else is CSS in the `<style>` block.

## Deployment

The page is hosted on **Cloudflare Pages** (project `northbrand`, Direct Upload, no git link) and served at northbrand.net and www.northbrand.net.

Working files:

- Local master: `~/workspace/northbrand-hub/index.html`
- Staging copy: `~/workspace/cloudflare-sites/northbrand/index.html`

Publish flow:

1. Copy the master over the staging copy.
2. Deploy with the Cloudflare helper: `python3 ~/workspace/custom-connectors/custom.cloudflare/bin/cloudflare_deploy.py northbrand ~/workspace/cloudflare-sites/northbrand`
3. Verify https://northbrand.net answers 200 and shows the change.
4. Commit every changed file (page, icons, manifest, service worker) to this repo so the archive matches the live page.

This repository is the backup and archive of record for the hub page, the same pattern the other Northbrand sites use.

## Files

- `index.html`: the hub page
- `aperture-hero.jpg`: the Royal Street buskers photograph in the hero panel
- `DESIGN.md`: the Northbrand design DNA, shared by all northbrand.net pages
- `README.md`: this file
- `favicon.svg`, `favicon-32.png`, `favicon.ico`, `apple-touch-icon.png`, `icon-512.png`: the favicon set (gold serif N on ink)
- `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-maskable-512.png`: the Add to Home Screen plumbing
