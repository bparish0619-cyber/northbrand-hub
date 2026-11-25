# DESIGN.md: Northbrand Design DNA

The shared design DNA for every Northbrand Collective page: the hub at northbrand.net and the sites at cfbsaga, colorguard, weekend, weather, va, retirement, and pdfcraft .northbrand.net. The flagship is Northbrand Aperture (northbrandaperture.net, its own domain), the photography site, folded into the hub as its hero on 2026-11-06; its interior is governed by its own DESIGN.md (~/workspace/northbrand-aperture/DESIGN.md), while the hub hero panel that presents it follows this hub DNA. PDFCraft started as the exception (a third-party app hosted stock), but on 2026-10-29 Brandon directed a theme pass: its design tokens now follow this DNA and it carries the footer lockup (see the site map), while its tools and own credits stay its own; its frame adopted the Sylva shell on 2026-11-21 (see the site map). Any agent designing, restyling, or rebuilding one of these pages reads this file first, then the site's own DESIGN.md if it has one. This file governs what the family shares; a site's own DESIGN.md governs its local accent and content rules.

## 1. Visual Theme & Atmosphere

One household, one hand. Every page should feel like it came from the same small studio in Abilene: calm, printed, and trustworthy, with warm neutrals, one gold accent, and nothing shouting. Sites may be dark (the hub) or light (the topic pages), and each keeps a local accent tied to its subject, but the shell is always recognizably Northbrand: a serif wordmark moment, the gold rule, card based layout, generous spacing, and the same footer lockup closing the page.

Key characteristics:
- Warm paper and ink neutrals, never blue-grey corporate tones
- Northbrand Gold is the one accent shared by every page
- Cards with hairline borders and at most a whisper of shadow
- Low density and scannable: one clear fact at a time, short phrases over prose
- No ads, no popups, no autoplay. Motion: the topic pages stay still beyond a subtle hover; the hub is the exception (set 2026-10-27 at Brandon's request) and may use gentle entrance, ambient, and hover motion, always with a prefers-reduced-motion fallback. Motion values and interaction rules are tokenized in section 10 (added 2026-11-10). Since 2026-10-29 the hub also carries a three.js gold particle field (a fixed WebGL canvas of slow drifting gold dust behind the content, pointer parallax, pinned CDN module); it is decoration only, removes itself when WebGL or the library is unavailable or reduced motion is preferred, and the page must remain complete without it. On 2026-11-25 the hub was rebuilt as the Aperture Index at Brandon's direction (the card grid read generic and corporate): a full-viewport photographic cover under a magazine masthead, an opening shutter moment, and the destinations as a numbered contents index. The hub is the family's showpiece, the one page with motion that has character; section 5 carries its organization and section 10 its motion record. It stays a single file with no build step (Brandon's standing convention, reaffirmed 2026-11-25).

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

Role names (added 2026-11-15 at Brandon's direction, from the Astryx mining): the values above also carry canonical role names, so new pages and Spaces start from roles instead of inventing local variable names. Existing pages keep their local names; this table is the mapping every name resolves to.
- **background-body**: Paper `#f4f3ec` (light) / Ink `#14161c` (dark)
- **background-card**: Card `#fffdf9` / `#fffdf6` (light) / a raised Ink panel (dark)
- **text-primary**: the warm ink range (light) / the Paper range (dark)
- **text-secondary**: Muted `#5c6a60` (light) / `#a7aabc` (dark)
- **text-disabled** (new): Muted at reduced strength on its surface, never under 3:1 against that surface. A disabled control pairs the color with a label or state word, never color alone.
- **border**: Line `#d5d2c2` (light) / `#2c303e` (dark)
- **accent**: Gold `#c9a227` in both modes
- **accent-text**: Gold Deep `#9a7208` (light) / Gold Bright `#e8b33c` (dark)
- **overlay-hover** and **overlay-pressed** (new): Ink at 6% and 12% over light surfaces, Paper at 6% and 12% over dark surfaces, for hover and pressed tints on neutral elements.

## 3. Typography Rules

- **Display and wordmark**: a serif face, Georgia or Playfair Display. Page titles and the Northbrand wordmark moment are serif; nothing else is required to be.
- **Body**: a clean sans, the site's existing stack (system sans, Nunito, Inter, Avenir Next are all in family). Base size 16px, line height 1.5 or better.
- **Eyebrow**: the brand line above a title is small caps, letter spaced (about 4px), Gold or Gold Deep, never larger than 13px.
- Numbers and data may use a mono or tabular figures where the site already does (CFB Saga).
- Times in 24-hour format everywhere Brandon-facing (17:00, not 5:00 PM). Dates name the day ("Friday, Oct 30").
- Never use em dashes in page copy. Use commas, colons, or parentheses.
- **Type scale** (added 2026-11-15 at Brandon's direction): named steps from the 16px base at a 1.25 ratio. New pages reach for these steps instead of picking sizes. Eyebrow 12px, line height 1.4 (the 13px cap above still governs). Small 13px, line height 1.45 (captions, timestamps, updated stamps). Body 16px, line height 1.5. Heading 20px, line height 1.3 (section headings inside a page). Title 25px, line height 1.2 (page titles, serif). Display 31 to 39px, line height 1.15 (the wordmark moment and hero titles, serif).
- **Hub exception** (recorded 2026-11-15 at Brandon's direction; sizes retuned 2026-11-25 for the Aperture Index): the hub's type sizes predate the scale and stay as tuned. Its masthead (the flagship's name, Northbrand Aperture) runs fluid 42px to 92px at line height 1.04, above the display step, and its in-between text sizes stay too (wordmark 19px, index entry names fluid 24px to 32px, tagline fluid 16px to 19px, nav and bylines 15px, labels and stamps 14px, entry numerals 30px outline). The scale governs new pages and rebuilds; the hub is a deliberate exception, like its motion exception in section 1. The hub was audited against sections 2, 4, 6, 7, and 12 on 2026-11-15 and passed, with one fix: the top bar nav links moved from 8px to the 10px element radius.

## 4. Component Stylings

- **Footer lockup (required on every page, identical wording)**: a centered closing block: "A Northbrand Collective project · northbrand.net", with northbrand.net linking to https://northbrand.net in the page's gold. A site credit line (data source, refresh cadence, copyright) may sit above or below it, in Muted. On the hub itself the lockup reads "© 2026 Northbrand Collective · northbrand.net".
- **Brand eyebrow**: new pages and rebuilds put "Northbrand Collective" as the eyebrow above the page title, in the eyebrow style above. Existing pages carry the footer lockup as their brand anchor until their next rebuild.
- **Favicon (hub only, set 2026-10-27)**: the hub carries its own tab icon: a gold `#c9a227` serif "N" (Georgia/DejaVu Serif bold) centered on Northbrand Ink `#14161c` with a 20 percent corner radius. Files in the hub root: favicon.svg (primary), favicon-32.png, favicon.ico (16/32/48), apple-touch-icon.png (180), plus icon-512.png as the master art. The topic sites carry no custom favicon yet; if they get one, it follows this same mark unless a site's own DESIGN.md says otherwise. Weather adopted the mark on 2026-10-28: its header logo and favicon are the hub's gold N art (see the weather DESIGN.md).
- **Add to Home Screen (hub only, set 2026-10-27)**: the hub offers an install button as the last block above the footer lockup: gold fill pill, ink serif text, "Add Northbrand to your home screen". Android and Chrome fire the browser's native install prompt; iOS (which has no prompt) opens a small card panel with the Share menu steps instead. The block hides itself once the hub runs standalone. Plumbing in the hub root: manifest.webmanifest (name Northbrand Collective, short name Northbrand, theme and background Ink, icons 192 any / 512 any / 512 maskable from icon-maskable-512.png, a full-bleed square variant), sw.js (a deliberate pass-through service worker that caches nothing, present only so Chrome offers the prompt), and the theme-color and apple-mobile-web-app tags in the page head. The topic sites do not carry the button yet.
- **Card**: Paper card surface, hairline Line border, radius 14px to 18px, padding 16px to 20px, flat or one whisper shadow. No boxes inside boxes.
- **Link pill**: where a page offers standalone links (digests, flyers), each link is its own tappable pill on its own line, gold outline, site accent text. Inline prose links stay simple and gold toned.
- **Updated stamp**: small Muted text near the title, format "Updated Tue, Oct 27 · 17:00 CT" (24-hour). Data pages state their edition or data source beside it.
- **Buttons and controls**: gold fill with ink text, or hairline outline with gold text on dark. One primary style per page.
- **Radius follows role** (added 2026-11-15 at Brandon's direction): element radius 10px for buttons and inputs (pills stay fully round), container radius 14px to 18px for cards and panels, page radius up to 28px for hero panels. The Card rule above is the container step of this scale.
- **Control rhythm** (added 2026-11-15 at Brandon's direction): controls sharing a row share an apparent height and a baseline, even when one of them is content-sized. Size and padding are tuned together, never independently.

## 5. Layout Principles

- One centered container. Reading pages cap at about 720 to 780px; data and dashboard pages may run 1080 to 1200px.
- Page padding 16px on phones, 24px on desktop. Sections separated by space and hairlines, not nested panels.
- Order on every page: brand or title block, primary content, supporting content, footer lockup last. Nothing renders below the footer lockup except scripts.
- The hub is the index: its entries name each site and show its northbrand.net address. When a site is added or renamed, the hub entry and this file's site list change in the same pass.
- Hub organization (set 2026-11-06, rebuilt as the Aperture Index 2026-11-25): a slim sticky top bar carries the wordmark, anchor links (Photography, Everyday, Reference and Tools, Private), and a live Abilene clock in 24-hour format. The collective's name lives in the top bar only (Brandon's call, 2026-11-25); the cover below belongs to the flagship. The Aperture cover is the flagship moment: the Royal Street buskers frame full-bleed for the full viewport (shown exactly as shot), a magazine masthead across the top (place line, the name Northbrand Aperture in large serif, the gold rule, one plain tagline), film sprocket marks down the left edge, a contact-sheet frame caption in the corner, and at the foot the flagship eyebrow, one poetic line, the byline, and a gold "Enter the gallery" call to action to northbrandaperture.net; the whole cover is clickable through that link. Below the cover, the nine destinations form a numbered contents index in three plates (Plate I Everyday boards, Plate II Reference and tools, Plate III Behind the login, group added 2026-11-09), each plate opening with a plate marker, its label, and its entry range (N° 01 to 03 and so on), then a one-line description of what belongs there. Each entry is a full-width row: an outline numeral that fills gold on hover or focus, the site name in large serif, one plain line, its address in gold small caps, and a cadence tag only where a cadence is real (never a tag that repeats what its plate already says). On phones the rows restack, numeral and name first, address and tag beneath, still one tap target per destination. A colophon ("Set in Georgia. Abilene, Texas.") sits above the Add to Home Screen block and the footer lockup. The Behind the login plate holds pages that sit behind a sign-in: the school page (school.northbrand.net, Cloudflare Access) was its first entry on 2026-11-09 at Brandon's direction, superseding the earlier never-link rule. The Access wall, not the hub link, is what guards those pages, and their hub entries carry no family names, like every public surface. Copy discipline for the hub (set 2026-11-25 at Brandon's direction): no wording may repeat what a neighboring element already says; a fact (by hand, a place, a sign-in) is stated once, where it does the most work.

## 6. Depth & Elevation

- Flat by default. Hairlines do the separating; shadows are a whisper at most (one soft shadow on cards over a tinted background is the ceiling).
- No glass effects, no stacked elevation, no gradients except a single subtle depth band in a site header where its own DESIGN.md allows it (Colorguard).
- Nested corners stay concentric (added 2026-11-15 at Brandon's direction): an inner radius equals the outer radius minus the gap between them, so nested shapes read as one shape instead of fighting at the corners.

## 7. Do's and Don'ts

Do:
- Carry the exact footer lockup on every page, wired into whatever generates the page so refreshes never erase it
- Use Gold for accent and Gold Deep wherever gold meets a light background as text
- Keep pages calm, scannable, and quick on a phone
- Update this file in the same pass as any token change, and note the change in the site's DESIGN.md
- Check every new color pairing before it lands in this file (added 2026-11-15 at Brandon's direction): 4.5:1 for text, 3:1 for large text and UI elements, and note the checked pairing in the site's DESIGN.md

Don't:
- No new hues, fonts, or radius languages without updating this file first
- No blue link colors or blue hover states (the VA guide's old blue hover is retired)
- No em dashes, no hype language, no exclamation marks in page copy
- Public family pages (Colorguard, Weekend) never carry family names or calendar content, whatever the design pass
- Never let a refresh job's content region swallow the footer lockup; it lives outside every content marker and template region
- No descriptive paragraph in or above the footer (removed 2026-11-06 at Brandon's direction; the October 2026 crawler and recategorization paragraphs are retired). The footer carries the lockup and at most a short site credit line; what a page is about lives only in its meta description tag, never as visible footer prose
- Never print Brandon's middle initial on any page (set 2026-11-06 at his direction). He is "Brandon Parish" everywhere: body copy, headings, captions, alt text, aria labels, and meta descriptions alike

## 8. Responsive Behavior

- Mobile first: most readers arrive on a phone. The single column centers on desktop with more air.
- Tap targets at least 44px tall for pills and primary controls.
- Nothing essential lives in a hover state. Dark mode variants (Hub, CFB Saga, VA Guide) must both carry the gold and the lockup legibly.

## 9. Agent Prompt Guide

Quick reference: Ink `#14161c`, Paper `#f4f3ec`, Card `#fffdf9`, Gold `#c9a227`, Gold Deep `#9a7208`, Gold Bright `#e8b33c`, radius 14 to 18px, serif display (Georgia / Playfair Display), sans body, footer lockup "A Northbrand Collective project · northbrand.net" (gold link to https://northbrand.net), 24-hour times, no em dashes. 24-hour times, no em dashes, status and feedback per section 12.

Site map (project, public address, local accent, master):
- Hub: northbrand.net, gold on ink, ~/workspace/northbrand-hub/index.html
- School Dashboard: school.northbrand.net, private behind Cloudflare Access (sign-in required), linked only from the hub's Behind the login group since 2026-11-09, masters in ~/workspace/cadence-school/
- Northbrand Aperture: northbrandaperture.net, the flagship photography site (monochrome first, Leica led), presented on the hub as the hero panel; its interior follows its own DESIGN.md at ~/workspace/northbrand-aperture/DESIGN.md, masters at ~/workspace/northbrand-aperture/site/
- CFB Saga: cfbsaga.northbrand.net, Field Green data accent, ~/workspace/sagarin-site/index.html (refresh.py splices data only; shell and footer persist)
- Colorguard Digest: colorguard.northbrand.net, Royal Purple, ~/workspace/colorguard-digest/index.html (refresh rewrites only between the DIGEST CONTENT markers; header, style, and footer persist)
- Weekend Flyer: weekend.northbrand.net, Burnt Orange, the weekend-events-flyer artifact (exported to ~/workspace/cloudflare-sites/abileneweekend/index.html on publish)
- Weather: weather.northbrand.net, Gold Bright amber, ~/workspace/cloudflare-sites/northbrandweather/ (static app, no refresh job)
- VA Quick Guide: va.northbrand.net, Slate, ~/workspace/va-healthcare/index.html
- Retirement Curator: retirement.northbrand.net, strategy data accents, ~/workspace/retirement-curator/index.html (single file tool; Brandon's 2026-11-06 authorization retired the earlier CSS-only limit on design passes, so presentation and chart rendering may be edited, while the simulation's calculations and logic stay untouched without his specific approval)
- PDFCraft: pdfcraft.northbrand.net, Northbrand theme layer over a third-party AGPL-3.0 app (upstream PDFCraftTool): the app's design tokens follow the DNA (Gold Deep primary on light, Gold Bright on dark, Paper and Ink surfaces, serif display headings, 14 to 18px radii) and the standard footer lockup sits below the app's own footer; tools and PDFCraft's credits are untouched. On 2026-11-21 the Sylva shell was adopted inside the six-file theme contract (glass sidebar and phone dock in the locale layout, views are the app's main destinations); its design record is ~/workspace/pdfcraft-theme/DESIGN.md. A few tool-internal panels keep utility blue accents. Modified source lives in the public fork bparish0619-cyber/pdfcraft (AGPL source offer), local build ~/workspace/pdfcraft/ (staging ~/workspace/cloudflare-sites/pdfcraft/)

Prompt seed: "Style this page with the Northbrand design DNA in ~/workspace/northbrand-hub/DESIGN.md: warm ink and paper neutrals, Northbrand Gold #c9a227 as the one shared accent (Gold Deep #9a7208 for gold text on light), serif display type, hairline card borders at 14 to 18px radius, the exact Northbrand footer lockup, 24-hour times, no em dashes, no new hues, motion per the section 10 tokens (ease-out strong entries, under 300ms, reduced motion honored)."

## 10. Motion Tokens & Rules (added 2026-11-10 at Brandon's direction)

Signature moment (added 2026-11-10; became the opening 2026-11-25): the Aperture cover carries a six-blade SVG aperture iris over the photograph (ink fill, gold stroke). As the page opens, the iris opens once, slowly (about a second, Ease In Out Strong), while the photograph settles from a slight oversize, and the blades then stay open: a shutter that has opened does not close again, and the cover stays clean. Hover and focus-within rules remain in the CSS but the opened state is the resting state. The iris renders only when scripting runs (a no-script visit gets the clean photograph), and reduced motion skips the opening entirely. It is the hub's one subject-derived effect; keep it, and do not add a second competing effect.

Hub scroll reveals (added 2026-11-13; retargeted 2026-11-25): the hub's plate headers and index rows hold below the fold and rise as they enter the viewport (IntersectionObserver, Ease Out Strong, 300ms, 60ms stagger within a plate), instead of every entrance running on page load whether anyone is looking or not. The reveal is gated by a class set in the page head before first paint, so a no-script visit and a reduced-motion visit both get the settled page exactly as before, and each row returns to its normal rules the moment its entrance finishes. Two quiet scroll effects ride along (added 2026-11-25): a 2px gold progress hairline at the top of the viewport fills as the page is read (scroll-driven scaleX, transform only), and the hero photograph parallaxes at a fraction of the scroll speed over an oversized media layer, while the ambient glow warms as the lower plates arrive. The index rows carry one sanctioned hover exception to the color-only rule below: a gold tint sweeps across the row via background-size (no layout shift, no content movement), and the row's numeral fills gold.

Shared motion tokens (every page that animates carries these values, under whatever local variable names it already uses):
- **Ease Out Strong** (`cubic-bezier(0.23, 1, 0.32, 1)`): entries, menus, reveals. The default UI easing family-wide.
- **Ease In Out Strong** (`cubic-bezier(0.77, 0, 0.175, 1)`): elements moving or morphing on screen.
- **Ease Exit** (`cubic-bezier(0.4, 0, 1, 1)`): elements leaving the screen.
- **Duration Press** (100 to 160ms): button and control press feedback.
- **Duration Small** (125 to 200ms): tooltips, small popovers.
- **Duration Menu** (150 to 250ms): dropdowns, panels, expanding sections.
- **Duration Large** (200 to 500ms): drawers and modals only, where the travel distance justifies it.
- **Press Scale** (0.97): the :active scale on pressable controls, near-instant in, about 100ms release.
- **Stagger** (30 to 80ms per item): grouped entrances step by this much, never all at once.

Rules:
- Animate transform and opacity only. Never animate layout properties (width, height, top, left). Never write `transition: all`; name the exact properties.
- Entering elements use Ease Out Strong, exiting elements use Ease Exit, and nothing enters on an ease-in curve. Popovers and menus animate from their trigger, with transform-origin at the source point.
- The ceiling is 300ms for UI animation; only Duration Large travel may exceed it. When in doubt, go faster: perceived speed is perceived quality.
- Never animate keyboard-initiated actions, and never animate anything a user triggers hundreds of times a day.
- Hover states change color, opacity, or shadow only. No scale or movement on cards at hover; layout never shifts under the pointer.
- Every animation answers a purpose: feedback, state indication, spatial consistency, explanation, or preventing a jarring jump. Motion without a purpose is cut.
- Section 1 still governs which pages may move at all (topic pages still, hub the exception). This section governs HOW anything that moves, moves.
- `prefers-reduced-motion` disables or minimizes all motion on every surface, including the hub WebGL scene. No surface ships motion without the fallback.

## 11. Chart & Data Rules (added 2026-11-14 at Brandon's direction)

Adopted after the Energy pilot of 2026-11-14, in which the UI UX Pro Max catalog's chart standards were applied to the Energy Space and the Energy page, verified, and approved by Brandon. These rules govern every chart on every Northbrand page and Space.

- Every chart ships with its data in print. A table, a list, or printed labels beside the chart carry every value the chart shows, so no fact lives only in a hover tooltip. Exception for mirror surfaces (amended 2026-11-14 at Brandon's direction): where a surface mirrors a primary one, a long daily series may print a recent window (such as the last 7 days) plus a full-period summary carrying the total, the average, and the highest and lowest values with their dates, provided the full series stays printed on the primary surface. The Energy page works this way against the Energy Space.
- Color never carries meaning alone. Anything singled out in Gold Bright also carries a printed value or a word such as highest, on the chart or directly beside it.
- Bars carry printed value labels wherever the layout allows, in Paper, small and quiet, above the bar.
- One tooltip treatment everywhere: Paper `#ece9df` text on `#1c1f27`, a 1px Line `#2c303e` border, axis ticks in Muted `#a7aabc`. No light tooltips on dark pages.
- Bars stay muted gold, `#c9a227` at 0.55 opacity. Gold Bright `#e8b33c` marks at most one thing per chart, and the label rule above always applies to it.
- What hover reveals, the eye and the keyboard reach without it: the printed equivalent sits adjacent, and interactive chart elements take a visible Gold Bright focus outline.
- Series read in time order, oldest on the left. Sources stay labeled per series, and figures from different meters are never blended into one chart (Taylor Electric and Enphase stay separate, as on the Energy surfaces).

## 12. Status & Feedback Rules (added 2026-11-15 at Brandon's direction)

Adopted from the Astryx mining of 2026-11-15: status is a family system, not a per-page improvisation. Four roles, each with a text and border value and a muted fill, per mode. Values are drawn from hues the family already owns, plus one new hue (Brick, for error) adopted in this pass.

- **Success**: text and border Field Green `#177245` (light) / `#45a877` (dark); muted fill `#e7f2ea` / `#16281e`. Solid form: Field Green fill with Card `#fffdf9` text.
- **Warning**: text and border Warning Deep `#826006` (light) / Gold Bright `#e8b33c` (dark); muted fill `#faf0d2` / `#2c2410`. Solid form: Gold Bright fill with Ink `#14161c` text. Warning Deep exists because Gold Deep measures about 3.9:1 on Paper, under the 4.5:1 text line; Gold Deep stays the link and large-text gold, Warning Deep carries warning text.
- **Error**: text and border Brick `#9e2b1e` (light) / `#e88a75` (dark); muted fill `#fbeae6` / `#2e1a16`. Solid form: Brick fill with Card `#fffdf9` text. Brick is a warm red in family with the warm neutrals, and it is reserved for error and destructive meaning only.
- **Info**: text and border Slate `#4a5568` (light) / `#93a3b8` (dark); muted fill `#eceff2` / `#1d232c`. This promotes the VA Guide's local Slate to a family role.

Rules:
- Status never rides on color alone: every status carries a word or an icon beside the color, on every surface. This generalizes the section 11 chart rule to the whole family.
- Prominence follows persistence and urgency. Persistent, in-flow feedback stays quiet: muted fill, colored text. Urgent or blocking feedback may go solid: the filled status color with its on-status text. Brief, transient feedback may invert.
- Loading and busy states keep the shape of what they replace. Nothing shifts layout while waiting.
- One meaning, one treatment: the same status looks the same on every page and Space.
- Contrast verified at adoption (2026-11-15, per the section 7 rule): every text pairing above measures at least 4.5:1 against Paper, Ink, and its own muted fill, and the solid on-status pairings measure 5.86:1 (success), 9.42:1 (warning), and 7.33:1 (error).

## 13. Card Grid Alignment Rules (added 2026-11-21 at Brandon's direction)

Adopted after Brandon's phone screenshot of the Energy Overview the day the Sylva shell went live there: the four source cards' headers, big values, and sublabels sat at different heights from card to card because each card's header wrapped or sized to its own content, so nothing lined up across the row. Standing rule for every card grid on every Northbrand page and Space:

- One structure per card set. Every card in a grid carries the same zones in the same order: eyebrow or header, display value, sublabel, body, action. No card invents its own layout.
- Fixed zones, not content-sized zones. The header zone and the value zone carry a fixed height (or min-height) shared by every card in the row, so the display values start at the same Y position in every card regardless of header length.
- Headers never wrap inside a card grid. An eyebrow or header that does not fit on one line truncates with an ellipsis; wrapping is what pushed the values out of line.
- Shared baselines across the row. Display values sit on one horizontal line across each row, sublabels sit on the line below it, body text starts on a common line, and actions pin to the card bottom. Cards in a row stretch to equal height.
- Verify by eye at phone width before calling a grid done: run a mental horizontal line through the headers, the values, and the sublabels across each row. Any offset is a defect to fix, in the same class as content sliding under a status bar, never a style variation.

## 14. Theme Exception: School (added 2026-11-21 at Brandon's direction)

The School Space does NOT wear the Northbrand black-and-gold DNA. It follows the Wylie colorguard theme (~/workspace/colorguard-digest/DESIGN.md): deep purple glass (backdrop #1c0530, Royal Purple #4b145f, Purple Soft #5e2b97), antique gold accents, warm off-white ink #f5efe2, Playfair Display headings and Nunito body. The Sylva shell mechanics, the Section 13 alignment rule, and all other standing rules still apply there; only the palette and type family differ. Do not "fix" School back to black and gold.
