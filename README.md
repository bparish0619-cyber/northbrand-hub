# Northbrand Hub

The front door of the **Northbrand Collective**: a single-page index of small, useful web projects from Abilene, Texas.

**Live:** [northbrand.net](https://northbrand.net)

## The sites

| Site | Address | What it is |
| --- | --- | --- |
| CFB Saga | [cfbsaga.northbrand.net](https://cfbsaga.northbrand.net) | Jeff Sagarin's college football ratings for all 266 teams, with a matchup predictor |
| Wylie Colorguard Digest | [colorguard.northbrand.net](https://colorguard.northbrand.net) | Schedules, deadlines, and need-to-know updates for the Wylie Pure Gold colorguard |
| Abilene Weekend | [weekend.northbrand.net](https://weekend.northbrand.net) | The week's events, shows, and pop-ups around Abilene, refreshed every Wednesday |
| Northbrand Weather | [weather.northbrand.net](https://weather.northbrand.net) | A plain, quick weather board for Abilene and the surrounding country |
| VA Health Care Quick Guide | [va.northbrand.net](https://va.northbrand.net) | Priority groups, copays, urgent vs. emergency care, and key contacts for 2026 |
| Retirement Curator | [retirement.northbrand.net](https://retirement.northbrand.net) | Retirement outcome simulations based on VOO and VTI, with 2026 tax-aware analysis |

Each site has its own repository; this repo holds only the hub page itself.

## Design

The hub follows the **Northbrand design DNA** (see `DESIGN.md` in this repo, which governs every northbrand.net page): warm ink `#14161c`, Northbrand Gold `#c9a227`, serif display type, hairline card borders, and a calm, printed feel.

The hub is the one page allowed gentle motion: the cards rise in one after another, a gold rule shimmers under the title, a live Abilene clock ticks in the header (24-hour format), cards lift on hover with a warm highlight that follows the pointer, and the background glow breathes slowly. All of it settles for visitors who prefer reduced motion. The topic pages stay still.

## Editing

Everything lives in the single file `index.html`. There is no build step.

- **Add or change a site:** copy a card block in the `<main>` section (each card is one `<a class="card">` block) and edit its link, title, one-line description, and address.
- **Change colors:** edit the variables in `:root` at the top of the `<style>` block.
- **Change the wording:** the tagline and footer are plain HTML in the `<header>` and `<footer>` sections.
- **The clock:** a small script at the bottom of the page formats the America/Chicago date and time. The card highlight script sits right below it.

## Deployment

The page is hosted on **Cloudflare Pages** (project `northbrand`, Direct Upload, no git link) and served at northbrand.net and www.northbrand.net.

Working files:

- Local master: `~/workspace/northbrand-hub/index.html`
- Staging copy: `~/workspace/cloudflare-sites/northbrand/index.html`

Publish flow:

1. Copy the master over the staging copy.
2. Deploy with the Cloudflare helper: `python3 ~/workspace/custom-connectors/custom.cloudflare/bin/cloudflare_deploy.py northbrand ~/workspace/cloudflare-sites/northbrand`
3. Verify https://northbrand.net answers 200 and shows the change.
4. Commit the same `index.html` to this repo so the archive matches the live page.

This repository is the backup and archive of record for the hub page, the same pattern the other Northbrand sites use.

## Files

- `index.html`: the hub page (the only file the site serves)
- `DESIGN.md`: the Northbrand design DNA, shared by all northbrand.net pages
- `README.md`: this file
