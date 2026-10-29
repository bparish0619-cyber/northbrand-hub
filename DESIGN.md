# DESIGN.md: Northbrand Design DNA

The shared design DNA for every Northbrand Collective page: the hub at northbrand.net and the sites at cfbsaga, colorguard, weekend, weather, va, retirement, and pdfcraft .northbrand.net. PDFCraft is the exception that proves the rule: a third-party app hosted stock (see the site map), so the DNA governs only its hub card, not the app itself. Any agent designing, restyling, or rebuilding one of these pages reads this file first, then the site's own DESIGN.md if it has one. This file governs what the family shares; a site's own DESIGN.md governs its local accent and content rules.

## 1. Visual Theme & Atmosphere

One household, one hand. Every page should feel like it came from the same small studio in Abilene: calm, printed, and trustworthy, with warm neutrals, one gold accent, and nothing shouting. Sites may be dark (the hub) or light (the topic pages), and each keeps a local accent tied to its subject, but the shell is always recognizably Northbrand: a serif wordmark moment, the gold rule, card based layout, generous spacing, and the same footer lockup closing the page.

Key characteristics:
- Warm paper and ink neutrals, never blue-grey corporate tones
- Northbrand Gold is the one accent shared by every page
- Cards with hairline borders and at most a whisper of shadow
- Low density and scannable: one clear fact at a time, short phrases over prose
- No ads, no popups, no autoplay. Motion: the topic pages stay still beyond a subtle hover; the hub is the exception (set 2026-10-27 at Brandon's request) and may use gentle entrance, ambient, and hover motion, always with a prefers-reduced-motion fallback

## 2. Color Palette & Roles

Shared tokens (every page carries these values, under whatever local variable names it already uses):
- **Northbrand Ink** (`#14161c`): The hub background and the darkest surface family-wide. Light pages use a warm ink for text instead (`#14201a` to `#2d2433` range).
- **Northbrand Paper** (`#f4f3ec`): Light page background. Warm off-white cards sit on it (`#fffdf9` / `#fffdf6`).
- **Northbrand Gold** (`#c9a227`): THE brand accent. Rules, dividers, wordmark eyebrow, link highlights, small markers. Never body text on light backgrounds.
- **Gold Deep** (`#9a7208`): Gold darkened for text and links on light backgrounds, where `#c9a227` fails contrast.
- **Gold Bright** (`#e8b33c`): Gold lifted for dark backgrounds. Weather's amber `#fbbf24` is its local tint of Gold Bright.
- **Muted** (warm grey, `#5c6a60` to `#a7aabc` by theme): Secondary text, captions, timestamps.
- **Line** (hairline, `#d5d2c2` light / `#2c303e` dark): Card borders and separators.

Local accents (one per site, always subordinate to the gold shell):
- Colorguard: Royal Purple `#4b145f` (the guard's own color, its DESIGN.md governs)
- Weekend: Burnt Orange `#bc5227` on warm paper
- CFB Saga: Field Green `#177245`, used for data meaning only (favorites, wins)
- Weather: Gold Bright amber `#fbbf24` (no second accent)
- VA Guide: Slate `#4a5568`, used sparingly; gold carries the brand
- Retirement Curator: strategy series colors (green `#059669`, orange `#d97706`, purple `#7c3aed`), data meaning only

If a new element needs a color, it takes a token from this file or the site's local accent. Do not introduce new hues without updating this file first.

## 3. Typography Rules

- **Display and wordmark**: a serif face, Georgia or Playfair Display. Page titles and the Northbrand wordmark moment are serif; nothing else is required to be.
- **Body**: a clean sans, the site's existing stack (system sans, Nunito, Inter, Avenir Next are all in family). Base size 16px, line height 1.5 or better.
- **Eyebrow**: the brand line above a title is small caps, letter spaced (about 4px), Gold or Gold Deep, never larger than 13px.
- Numbers and data may use a mono or tabular figures where the site already does (CFB Saga).
- Times in 24-hour format everywhere Brandon-facing (17:00, not 5:00 PM). Dates name the day ("Friday, Oct 30").
- Never use em dashes in page copy. Use commas, colons, or parentheses.

## 4. Component Stylings

- **Footer lockup (required on every page, identical wording)**: a centered closing block: "A Northbrand Collective project · northbrand.net", with northbrand.net linking to https://northbrand.net in the page's gold. A site credit line (data source, refresh cadence, copyright) may sit above or below it, in Muted. On the hub itself the lockup reads "© 2026 Northbrand Collective · northbrand.net".
- **Brand eyebrow**: new pages and rebuilds put "Northbrand Collective" as the eyebrow above the page title, in the eyebrow style above. Existing pages carry the footer lockup as their brand anchor until their next rebuild.
- **Favicon (hub only, set 2026-10-27)**: the hub carries its own tab icon: a gold `#c9a227` serif "N" (Georgia/DejaVu Serif bold) centered on Northbrand Ink `#14161c` with a 20 percent corner radius. Files in the hub root: favicon.svg (primary), favicon-32.png, favicon.ico (16/32/48), apple-touch-icon.png (180), plus icon-512.png as the master art. The topic sites carry no custom favicon yet; if they get one, it follows this same mark unless a site's own DESIGN.md says otherwise. Weather adopted the mark on 2026-10-28: its header logo and favicon are the hub's gold N art (see the weather DESIGN.md).
- **Add to Home Screen (hub only, set 2026-10-27)**: the hub offers an install button as the last block above the footer lockup: gold fill pill, ink serif text, "Add Northbrand to your home screen". Android and Chrome fire the browser's native install prompt; iOS (which has no prompt) opens a small card panel with the Share menu steps instead. The block hides itself once the hub runs standalone. Plumbing in the hub root: manifest.webmanifest (name Northbrand Collective, short name Northbrand, theme and background Ink, icons 192 any / 512 any / 512 maskable from icon-maskable-512.png, a full-bleed square variant), sw.js (a deliberate pass-through service worker that caches nothing, present only so Chrome offers the prompt), and the theme-color and apple-mobile-web-app tags in the page head. The topic sites do not carry the button yet.
- **Card**: Paper card surface, hairline Line border, radius 14px to 18px, padding 16px to 20px, flat or one whisper shadow. No boxes inside boxes.
- **Link pill**: where a page offers standalone links (digests, flyers), each link is its own tappable pill on its own line, gold outline, site accent text. Inline prose links stay simple and gold toned.
- **Updated stamp**: small Muted text near the title, format "Updated Tue, Oct 27 · 17:00 CT" (24-hour). Data pages state their edition or data source beside it.
- **Buttons and controls**: gold fill with ink text, or hairline outline with gold text on dark. One primary style per page.

## 5. Layout Principles

- One centered container. Reading pages cap at about 720 to 780px; data and dashboard pages may run 1080 to 1200px.
- Page padding 16px on phones, 24px on desktop. Sections separated by space and hairlines, not nested panels.
- Order on every page: brand or title block, primary content, supporting content, footer lockup last. Nothing renders below the footer lockup except scripts.
- The hub is the index: its cards name each site and show its northbrand.net address. When a site is added or renamed, the hub card and this file's site list change in the same pass.

## 6. Depth & Elevation

- Flat by default. Hairlines do the separating; shadows are a whisper at most (one soft shadow on cards over a tinted background is the ceiling).
- No glass effects, no stacked elevation, no gradients except a single subtle depth band in a site header where its own DESIGN.md allows it (Colorguard).

## 7. Do's and Don'ts

Do:
- Carry the exact footer lockup on every page, wired into whatever generates the page so refreshes never erase it
- Use Gold for accent and Gold Deep wherever gold meets a light background as text
- Keep pages calm, scannable, and quick on a phone
- Update this file in the same pass as any token change, and note the change in the site's DESIGN.md

Don't:
- No new hues, fonts, or radius languages without updating this file first
- No blue link colors or blue hover states (the VA guide's old blue hover is retired)
- No em dashes, no hype language, no exclamation marks in page copy
- Public family pages (Colorguard, Weekend) never carry family names or calendar content, whatever the design pass
- Never let a refresh job's content region swallow the footer lockup; it lives outside every content marker and template region

## 8. Responsive Behavior

- Mobile first: most readers arrive on a phone. The single column centers on desktop with more air.
- Tap targets at least 44px tall for pills and primary controls.
- Nothing essential lives in a hover state. Dark mode variants (Hub, CFB Saga, VA Guide) must both carry the gold and the lockup legibly.

## 9. Agent Prompt Guide

Quick reference: Ink `#14161c`, Paper `#f4f3ec`, Card `#fffdf9`, Gold `#c9a227`, Gold Deep `#9a7208`, Gold Bright `#e8b33c`, radius 14 to 18px, serif display (Georgia / Playfair Display), sans body, footer lockup "A Northbrand Collective project · northbrand.net" (gold link to https://northbrand.net), 24-hour times, no em dashes.

Site map (project, public address, local accent, master):
- Hub: northbrand.net, gold on ink, ~/workspace/northbrand-hub/index.html
- CFB Saga: cfbsaga.northbrand.net, Field Green data accent, ~/workspace/sagarin-site/index.html (refresh.py splices data only; shell and footer persist)
- Colorguard Digest: colorguard.northbrand.net, Royal Purple, ~/workspace/colorguard-digest/index.html (refresh rewrites only between the DIGEST CONTENT markers; header, style, and footer persist)
- Weekend Flyer: weekend.northbrand.net, Burnt Orange, the weekend-events-flyer artifact (exported to ~/workspace/cloudflare-sites/abileneweekend/index.html on publish)
- Weather: weather.northbrand.net, Gold Bright amber, ~/workspace/cloudflare-sites/northbrandweather/ (static app, no refresh job)
- VA Quick Guide: va.northbrand.net, Slate, ~/workspace/va-healthcare/index.html
- Retirement Curator: retirement.northbrand.net, strategy data accents, ~/workspace/retirement-curator/index.html (single file tool; design passes touch CSS variables, header, and footer only, never the simulation script)
- PDFCraft: pdfcraft.northbrand.net, no Northbrand styling (third-party AGPL-3.0 app by PDFCraftTool, hosted completely stock with its own name, credits, and license; do NOT reskin it or add the footer lockup), fork bparish0619-cyber/pdfcraft, local build ~/workspace/pdfcraft/ (staging ~/workspace/cloudflare-sites/pdfcraft/)

Prompt seed: "Style this page with the Northbrand design DNA in ~/workspace/northbrand-hub/DESIGN.md: warm ink and paper neutrals, Northbrand Gold #c9a227 as the one shared accent (Gold Deep #9a7208 for gold text on light), serif display type, hairline card borders at 14 to 18px radius, the exact Northbrand footer lockup, 24-hour times, no em dashes, no new hues."
