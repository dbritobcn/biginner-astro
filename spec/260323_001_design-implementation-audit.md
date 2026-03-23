# Design vs Implementation Audit — BIGinner

**Date:** 2026-03-23
**Scope:** All sections (Discos, Conciertos, Noticias) × all breakpoints (mobile 390px, tablet 768px, desktop 1440px)
**Sources:** Paper design file (6 artboards) + codebase audit (Astro 5, Tailwind CSS)

---

## Summary

The current implementation diverges significantly from the Paper designs in typography, spacing, and component structure. The color scheme (light theme, white background) is correctly shared between design and implementation. The most impactful gaps are: no design fonts loaded (Verdana used everywhere instead of Inter/Archivo Black), a `Box` component with a heavy 4px gray border that does not exist in any Paper artboard, critically insufficient lateral padding on mobile (4px vs 16px in design), and broken HTML semantics throughout.

---

## Paper Design Inventory

The Paper file contains **6 artboards** across 2 breakpoints only. No tablet artboard exists.

| Artboard | Dimensions | Section |
|---|---|---|
| Discos — biginner.es | 1440 × 960 | Desktop |
| Discos — Mobile | 390 × 844 | Mobile |
| Conciertos — biginner.es | 1440 × 960 | Desktop |
| Conciertos — Mobile | 390 × 844 | Mobile |
| Noticias — biginner.es | 1440 × 960 | Desktop |
| Noticias — Mobile | 390 × 844 | Mobile |

**Fonts in use:** Inter, Inter Tight, Archivo Black, System Sans-Serif

---

## I. Global Design System

| Aspect | Paper (design) | Implementation | Status |
|---|---|---|---|
| Typography | Inter, Inter Tight, Archivo Black (logo) | Verdana (single font, used everywhere) | **CRITICAL — no design font loaded** |
| Primary color | `#000000` | `black` ✓ | OK |
| Secondary color | `#888`–`#AAA` | `text-gray-400` (`#9ca3af`) — close but insufficient contrast on white | IMPORTANT |
| Dividers | 1px rule, light gray (`~#E0E0E0`) | `border-4 border-gray-400` via Box | **CRITICAL — Box doesn't exist in design** |
| Mobile lateral padding | ~16px | `mx-1` = 4px | **CRITICAL — 4× under spec** |
| Desktop lateral padding | ~40–48px | Tailwind container, no explicit padding | IMPORTANT |
| Breakpoints in design | Mobile (390px) + Desktop (1440px) | Mobile + md (768px) + lg (1024px) | GAP — tablet not in design spec |
| `<header>` semantic | — | `<div class="header">` | CRITICAL |
| `<footer>` semantic | — | `<div class="container">` | CRITICAL |
| `<main>` landmark | — | absent | IMPORTANT |

### Design color tokens (estimated from Paper screenshots)

| Semantic token | Estimated hex | Usage |
|---|---|---|
| Background | `#FFFFFF` | General background, header, footer |
| Text primary | `#000000` | Titles, active nav, artist names, large dates |
| Text secondary | `#888888`–`#AAAAAA` | Metadata, inactive nav, venues, small dates |
| Divider | `#E0E0E0`–`#EBEBEB` | 1px horizontal/vertical rules |
| Image placeholder | `#C4C4C4`–`#CCCCCC` | Album thumbnail fill |
| Active underline | `#000000` | Active nav item, active sort control |

### Design typography scale (estimated from Paper screenshots)

| Element | Font | Size | Weight | Color |
|---|---|---|---|---|
| Logo wordmark | Archivo Black | ~22–24px | 900 | #000 |
| Desktop nav | Inter / Inter Tight | ~12–13px | 400 | gray, uppercase |
| Active nav | Inter / Inter Tight | ~12–13px | 400 | #000 + underline |
| Section label | Inter | ~11–12px | 400–500 | gray, uppercase |
| Day number (date block) | Inter / Inter Tight | ~28–32px | 700–900 | #000 |
| Month/year (date block) | Inter | ~10px | 400 | gray, uppercase |
| Item title desktop | Inter | ~14–15px | 400–500 | #000 |
| Item title mobile | Inter | ~16px | 500–600 | #000 |
| Metadata / tags | Inter | ~12–13px | 400 | gray |
| Footer links | Inter | ~12px | 400 | gray/black, uppercase |

### Design spacing scale (estimated from Paper screenshots)

| Token | Tailwind equivalent | Usage |
|---|---|---|
| Mobile lateral padding | `px-4` (16px) | Container padding on mobile |
| Desktop lateral padding | `px-10`–`px-12` (40–48px) | Container padding on desktop |
| Row height (desktop items) | `h-18`–`h-20` (~72–80px) | List row height |
| Row height (mobile items) | `h-22`–`h-24` (~88–96px) | List row height |
| Thumbnail → text gap | `gap-3`–`gap-4` (12–16px) | Horizontal gap inside item row |
| Section header padding top | `pt-6`–`pt-8` (24–32px) | Above section label |

---

## II. Header — all breakpoints

| Breakpoint | Design | Implementation | Status |
|---|---|---|---|
| Mobile | Logo centered, no nav | Logo centered (`justify-center`), nav hidden (`hidden md:block`) | OK visually |
| Desktop | Logo left, nav right — uppercase Inter ~12px, active item underlined | Logo left (`md:justify-between`), nav visible | Structure OK, wrong font, no active state |
| Tablet | Not defined in Paper | `md:` inherits desktop behavior | DESIGN GAP |
| Semantics | `<header>` (implicit) | `<div>` | CRITICAL |
| Active state | Active item: black + underline | Not implemented | IMPORTANT |
| ARIA | `<nav aria-label="...">` (implicit) | `<nav>` without `aria-label` | IMPORTANT |

---

## III. Footer — all breakpoints

| Breakpoint | Design | Implementation | Status |
|---|---|---|---|
| Mobile | Tab bar, 5 icons, space-between, top border | Tab bar, 5 icons, `justify-around` | OK structurally |
| Mobile — touch targets | Visual icons | `size-6` (24px) without padding | IMPORTANT — WCAG 2.5.5 requires 44×44px |
| Desktop | 5 text links in a row, uppercase Inter ~12px | Icons hidden, text visible | Correct behavior, wrong font |
| Semantics | `<footer>` (implicit) | `<div>` | CRITICAL |
| `<nav>` label | Implicit | No `aria-label` | IMPORTANT |
| Content | Nav only | Nav only | MINOR — no copyright, social links |

---

## IV. Discos section — all breakpoints

### List page (`discos/index.astro`)

| Breakpoint | Design | Implementation | Status |
|---|---|---|---|
| Mobile — layout | 1 col, full width, 16px padding | 1 col ✓, Box with `mx-1` (4px) | **CRITICAL — wrong spacing + Box absent from design** |
| Mobile — item image | Square thumbnail ~64px (1:1) | `w-1/3 h-full` — fragile, height depends on text | IMPORTANT |
| Mobile — item title | "Artist — Title", ~16px, semibold, Inter | `font-bold` artist + hyphen + title, `text-sm` Verdana | IMPORTANT |
| Mobile — metadata | label + date, ~13px, gray, Inter | `text-gray-400 text-sm` Verdana | MINOR — concept correct, wrong font |
| Desktop — grid | **2 columns** with center divider | `md:grid-cols-2` ✓ | OK — matches |
| Desktop — thumbnail | ~56px square | `md:size-16` (64px) | MINOR — 8px off |
| Section header | "DISCOS" label uppercase, Inter ~11px, 1px rule below | `<h1>` inside Box with `border-b-2` | **CRITICAL — wrong HTML + Box absent from design** |
| HTML structure | `<ul> > <li> > <a>` | `<ul> > <a> > <li>` | **CRITICAL — invalid HTML** |
| Row separators | 1px light gray rule | `gap-2` without visual separator | IMPORTANT |
| Empty state | Not designed | Empty `<ul>` without message | MINOR |

### Detail page (`discos/[slug]/index.astro`)

| Breakpoint | Design | Implementation | Status |
|---|---|---|---|
| Any | **No detail artboard in Paper** | Page implemented with issues | **DESIGN GAP — needs to be designed** |
| Mobile — image | No spec | No base size class (only `md:size-16 lg:size-56`) | **CRITICAL — uncontrolled image on mobile** |
| Tablet — image | No spec | `md:size-16` = 64px (too small for detail view) | IMPORTANT |
| Desktop — image | No spec | `lg:size-56` = 224px, float-left | Reasonable but no reference |
| H1 hierarchy | No spec | Two `<h1>` (Box title + album title) | **CRITICAL — broken heading hierarchy** |
| Score icon alt | No spec | `alt={album.score.toString()}` — missing context | IMPORTANT |
| uppercase on artist `<h2>` | No spec | `uppercase` CSS — AT may spell out letters | IMPORTANT |

---

## V. Conciertos and Noticias sections — design reference

These sections have Paper designs but **no implementation yet**. Design spec for when they are built:

### Conciertos

| Element | Desktop | Mobile |
|---|---|---|
| Layout | 4-column table: date block, artist, venue, city | 3 zones: date block \| artist + venue \| city |
| Column headers | FECHA \| ARTISTA \| SALA \| CIUDAD | None |
| Date block | Large day (~28–32px bold) + month/year (~10px gray uppercase) stacked | Same |
| Thumbnail | None | None |
| Sort controls | "ORDENAR POR: FECHA \| ARTISTA" | Same |

### Noticias

| Element | Desktop | Mobile |
|---|---|---|
| Layout | 3 zones: date block, headline (wide), author initials | 2 zones: date block \| headline (2 lines) |
| Author | Abbreviated initials (DBF, CPR) — right-aligned | **Omitted** |
| Thumbnail | None | None |
| Sort controls | "ORDENAR POR: FECHA \| ALFABÉTICO" | Same |

**Shared date block component** — required by both Conciertos and Noticias:
- Large day number: ~28–32px, bold/black, `#000`
- Month abbreviated + year: stacked below, ~10px, gray, uppercase
- Fixed width column on the left of each row

---

## VI. Accessibility violations (WCAG 2.1 AA)

| # | File | WCAG Criterion | Severity | Issue |
|---|---|---|---|---|
| 1 | `Header.astro` | 1.3.1 Info and Relationships | Critical | `<div>` instead of `<header>` — missing `banner` landmark |
| 2 | `Header.astro` | 2.4.1 Bypass Blocks | Critical | Nav completely invisible on mobile, no alternative |
| 3 | `Header.astro` | 2.4.6 Headings and Labels | Important | `<nav>` without `aria-label` |
| 4 | `Header.astro` | 2.4.4 Link Purpose | Important | Unimplemented nav links point to `/` |
| 5 | `Footer.astro` | 1.3.1 Info and Relationships | Critical | `<div>` instead of `<footer>` — missing `contentinfo` landmark |
| 6 | `Footer.astro` | 2.5.5 Target Size | Important | 24×24px icons without sufficient padding for 44×44px tap target |
| 7 | `Footer.astro` | 2.4.6 Headings and Labels | Important | `<nav>` without `aria-label` |
| 8 | `Box.astro` | 1.3.1 Info and Relationships | Critical | Title rendered as `<h1>` — multiple `<h1>` per page on detail view |
| 9 | `Layout.astro` | 1.3.1 Info and Relationships | Important | No `<main>` landmark |
| 10 | `discos/[slug]` | 1.1.1 Non-text Content | Important | Score GIF alt shows only number, no context ("Puntuación: X de 10") |
| 11 | `discos/index` | 1.3.1 Info and Relationships | Critical | `<a>` as direct parent of `<li>` — invalid HTML |
| 12 | `404.astro` | 2.1.1 Keyboard | Important | `focus:outline-none` without visible ring breaks keyboard focus indicator |
| 13 | All pages | 2.4.2 Page Titled | Important | Static `<title>` on all pages — detail pages don't reflect their content |

---

## VII. Other issues

| File | Severity | Issue |
|---|---|---|
| `Welcome.astro` | Critical | Homepage shows Astro framework welcome screen, not magazine content |
| `Welcome.astro` | Critical | `console.log` active in production exposes `apiBaseUrl` and env flags |
| `Welcome.astro` | Critical | Logo links to `astro.build` instead of magazine home |
| `Head.astro` | Important | `og:image` uses favicon `.ico` — invalid social image |
| `Head.astro` | Important | `og:url` hardcoded to `http://` (not HTTPS), same URL for all pages |
| `Head.astro` | Minor | `<meta name="Keywords">` — discontinued SEO practice since ~2009 |
| `Head.astro` | Minor | No `<link rel="canonical">` |
| `Head.astro` | Minor | No `initial-scale=1` in viewport meta |
| `404.astro` | Important | `h-4/5` depends on `body` height which may resolve to 0 in SSG |
| `404.astro` | Important | `bg-red-600` — only red in the entire codebase, no design system justification |
| `discos/[slug]` | Minor | Commented-out `console.log` lines should be removed |
| `tailwind.config.mjs` | Important | No brand color tokens defined — all ad-hoc on Tailwind defaults |
| `tailwind.config.mjs` | Minor | No `darkMode` configured |

---

## VIII. Design gaps — what is missing in Paper

| Gap | Priority |
|---|---|
| Homepage (`/`) | High — currently shows Astro placeholder |
| Disco detail (`/discos/[slug]`) — mobile + desktop | High — page is implemented without design reference |
| Tablet breakpoint (768px) for all sections | Medium |
| Entrevistas — all views | Medium — section pending implementation |
| TV — all views | Medium — section pending |
| 404 page | Low |
| Concert, news, interview detail pages | Low — sections not yet implemented |
| Hover / focus / empty / error states | Medium — no interactive states defined in Paper |

---

## IX. Action plan

### Phase 0 — Foundations (blocks everything else)
1. Load fonts — Inter + Inter Tight + Archivo Black via Google Fonts in `Head.astro`
2. Configure Tailwind — add `fontFamily` for Inter/Archivo Black + semantic brand color tokens + spacing scale
3. Design homepage in Paper — then replace `Welcome.astro`

### Phase 1 — Global components
4. `Layout.astro` — add `<main>` wrapping slot, `initial-scale=1`, dynamic `<title>` prop
5. `Header.astro` — change `<div>` to `<header>`, add `aria-label` to `<nav>`, implement active page indicator (`aria-current="page"` + visual style)
6. `Footer.astro` — change `<div>` to `<footer>`, add `aria-label` to `<nav>`, increase tap target size (`p-3` on icon links for 44px area)
7. `Head.astro` — fix `og:image`, dynamic `og:url` with HTTPS, remove Keywords meta, add canonical

### Phase 2 — Discos section
8. Remove `Box.astro` from discos pages — replace with direct section header pattern from design
9. `discos/index.astro` — fix HTML (`<li> > <a>`), lateral padding (`px-4` mobile / `px-10` desktop), fixed thumbnail (`size-16` mobile / `size-14` desktop), 1px row separators, Inter typography
10. Design disco detail in Paper (mobile + desktop) — then fix `[slug]/index.astro`: mobile image size, single `<h1>`, correct image sizing per breakpoint

### Phase 3 — Cross-cutting accessibility
11. Text secondary contrast — replace `text-gray-400` with a token that achieves ≥ 4.5:1 ratio on white
12. `focus:outline-none` in 404 → `focus-visible:ring-2 focus-visible:ring-black`
13. Score GIF alt → `alt={\`Puntuación: ${album.score} de 10\`}`

### Phase 4 — Pending sections (Conciertos, Noticias)
14. Implement modules using Paper designs as reference, sharing the date block component between sections
