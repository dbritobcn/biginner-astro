---
name: Paper Design Audit — Full Artboard Analysis
description: Complete structural and visual analysis of all 6 Paper artboards (Discos desktop/mobile, Conciertos desktop/mobile, Noticias desktop/mobile). Includes layout specs, component structure, typography, color observations, and design gaps. Generated 2026-03-23.
type: reference
---

# BIGinner Paper Design Audit — Full Artboard Analysis
Date: 2026-03-23
File: Biginner / Page 1
Total nodes: 622 | Artboards: 6

---

## Artboard Inventory

| ID    | Name                      | Width | Height | Breakpoint |
|-------|---------------------------|-------|--------|------------|
| 1-0   | Discos — biginner.es      | 1440  | 960    | Desktop    |
| 3A-0  | Discos — Mobile           | 390   | 844    | Mobile     |
| 5Z-0  | Conciertos — biginner.es  | 1440  | 960    | Desktop    |
| 8L-0  | Conciertos — Mobile       | 390   | 844    | Mobile     |
| F4-0  | Noticias — biginner.es    | 1440  | 960    | Desktop    |
| II-0  | Noticias — Mobile         | 390   | 844    | Mobile     |

Font families in use: Inter, Archivo Black, Inter Tight, System Sans-Serif

---

## Global Layer Structure

### Desktop artboards (Discos, Conciertos, Noticias)
- Header (Frame, 2 children: Logo + Nav)
- Main (Frame, 1 child: Content)
  - Content contains: Section Header + primary list/grid
- Footer (Frame, 5 text children)

### Mobile artboards (Discos, Conciertos, Noticias)
- Header (Frame, 1 child: Logo only — no nav)
- Section Header (Frame, standalone — outside Main)
- Primary list (Album List / Concert List / News List)
- Footer (Frame, 5 icon children — icon tab bar)

---

## 1. DISCOS — Desktop (1440 x 960)

### Header
- Full-width, white background
- Left: Logo (circle icon + "biginner" wordmark in Archivo Black)
- Right: Nav with 5 items — NOTICIAS | DISCOS (active, underlined) | CONCIERTOS | ENTREVISTAS | TV
- Nav items in uppercase, letter-spaced, light gray; active item in black with bottom underline
- Thin horizontal rule (1px, light gray) separates header from content

### Content — Main
- Section label "DISCOS" in uppercase, small caps, gray — top-left, above a thin rule
- Album Grid: 2-column layout
  - Each row spans full content width, divided by a vertical divider at the center
  - 7 rows visible = 14 album items displayed
  - Row structure: left column (Album item) + right column (Album item)

### Album Item — Desktop (Row item)
- Thumbnail: ~56x56px square placeholder (gray fill) — aspect ratio 1:1
- Text block (inline with thumbnail):
  - Line 1: "Artist — Album Title" — Inter, medium weight, black, ~14–15px
  - Line 2: "TAG DD/MM/YYYY" — Inter, regular, gray, ~12px
- Horizontal rule (1px, light gray) separates each row
- No hover state defined

### Footer — Desktop
- Centered, full-width, white background
- 5 text links: CONCIERTOS | DISCOS (active, bold/underlined) | NOTICIAS | ENTREVISTAS | BIGINNERTV
- Thin top border separating from content

---

## 2. DISCOS — Mobile (390 x 844)

### Header
- Centered logo only (circle icon + "biginner" wordmark)
- Thin bottom border
- No hamburger menu — nav is absent in header

### Section Header
- "DISCOS" label — uppercase, small, gray, left-aligned with left padding ~16px
- Below thin horizontal rule

### Album List — Mobile
- Single column, full width
- 9 album items visible before scroll
- Each item:
  - Thumbnail: ~64x64px square (gray fill, 1:1 ratio), left-aligned
  - Text block to the right:
    - Line 1: "Artist — Album Title" — Inter, ~16px, black, regular/medium
    - Line 2: "TAG DD/MM/YYYY" — Inter, ~13px, gray
  - Horizontal rule (1px, light gray) separates items
  - Left padding ~16px, consistent gutter between thumbnail and text ~12–16px

### Footer — Mobile (Tab Bar)
- Fixed bottom bar with 5 icon buttons
- Icons: person/profile, circle (discos, active with filled dot), hamburger lines, person outline, play rectangle (TV)
- Icons are gray; active icon (Discos) is black with filled state
- Thin top border

---

## 3. CONCIERTOS — Desktop (1440 x 960)

### Header
- Identical structure to Discos desktop
- Active nav item: CONCIERTOS (underlined black)

### Content — Main
- Section Header Frame contains:
  - Left: "CONCIERTOS" section label
  - Right: "ORDENAR POR: FECHA | ARTISTA" — sort control, "FECHA" is active (underlined, black), "ARTISTA" is gray
- Column Headers row (4 columns): FECHA | ARTISTA | SALA | CIUDAD — uppercase, letter-spaced, small, gray
- Concert List: 12 items, single-column table layout

### Concert Item — Desktop
- 4-column table row:
  - Column 1 (FECHA): Day number large (bold, ~28–32px), month abbrev below (uppercase, ~10px, gray), year below (~10px, gray) — stacked vertically
  - Column 2 (ARTISTA): Artist name — Inter, medium/semibold, black, ~14–15px
  - Column 3 (SALA): Venue name — Inter, regular, gray, ~14px
  - Column 4 (CIUDAD): City code abbreviation (BCN, MAD) — Inter, regular, gray, small, right-aligned
- Horizontal rule (1px, light gray) between each row
- No image thumbnail — purely text-based layout

### Footer — Desktop
- Identical structure to Discos footer

---

## 4. CONCIERTOS — Mobile (390 x 844)

### Header
- Identical to Discos mobile (centered logo, no nav)

### Section Header
- Left: "CONCIERTOS" label
- Right: Sort toggle "FECHA" (active, underlined) | "ARTISTA"
- Thin bottom border

### Concert List — Mobile
- Single column, 9 items visible
- Each item: condensed 3-zone layout
  - Left zone: Date block — large day number (~32px, black bold), month abbrev + year stacked (gray, ~10px)
  - Vertical divider line separates date from content
  - Center zone: Artist name (black, ~16px, semibold) + Venue below (gray, ~13px, regular)
  - Right zone: City code (gray, ~12px, right-aligned)
- Horizontal rule (1px, light gray) between items

### Footer — Mobile
- Tab bar identical to Discos mobile
- Active icon: Conciertos icon has a download/arrow variant (black, filled)

---

## 5. NOTICIAS — Desktop (1440 x 960)

### Header
- Identical structure to Discos/Conciertos desktop
- Active nav item: NOTICIAS (underlined black)

### Content — Main
- Section Header Frame contains:
  - Left: "NOTICIAS" section label
  - Right: "ORDENAR POR: FECHA | ALFABÉTICO" — "FECHA" active (underlined, black)
- No column headers row (unlike Conciertos)
- News List: 10 items, single-column table layout

### News Item — Desktop
- 3-zone row:
  - Left zone: Date block — large day number (~28–32px, black bold), month abbrev + year stacked (gray, ~10px)
  - Center zone: Full article headline — Inter, black, ~14–15px, regular/medium — left-aligned, spans the majority of row width
  - Right zone: Author initials/tag (DBF, CPR, LLM) — gray, small, right-aligned
- No thumbnail image
- Horizontal rule (1px, light gray) between each row

### Footer — Desktop
- Identical to other desktop footers

---

## 6. NOTICIAS — Mobile (390 x 844)

### Header
- Identical to other mobile headers (centered logo, no nav)

### Section Header
- Left: "NOTICIAS" label
- Right: Sort toggle "FECHA" (active, underlined) | "ALFABÉTICO"
- Thin bottom border

### News List — Mobile
- Single column, 7 items visible before scroll
- Each item:
  - Left zone: Date block (identical format to Conciertos mobile — large day, month, year)
  - Vertical divider line
  - Right zone: Article headline — Inter Tight or Inter, black, ~16px, semibold/bold — wraps to 2 lines when long
- No thumbnail, no author tag visible on mobile (omitted)
- Horizontal rule between items

### Footer — Mobile
- Tab bar identical to others
- Active icon: Noticias (hamburger/list icon, black)

---

## Global Design System Observations

### Color Palette (observed from screenshots)
- Background: #FFFFFF (white) — all artboards
- Primary text: #000000 (black) — headings, active nav, artist names, dates
- Secondary text: approximately #888888–#AAAAAA (medium gray) — dates, metadata, inactive nav, venue names, city codes
- Active nav underline: #000000 (black)
- Dividers/rules: approximately #E0E0E0–#EBEBEB (very light gray, 1px)
- Image placeholders: approximately #C4C4C4 or #CCCCCC (mid gray fill)
- Footer background: #FFFFFF

Note: Exact hex values require get_computed_styles (permission denied during this audit). Values above are visual estimates from 2x screenshots.

### Typography Scale (observed)
- Logo wordmark: Archivo Black, ~24px desktop / ~22px mobile, black
- Nav items (desktop): Inter or Inter Tight, ~12–13px, uppercase, letter-spacing ~0.08–0.1em, gray (#888)
- Section label (e.g., "DISCOS", "CONCIERTOS"): Inter, ~11–12px, uppercase, letter-spacing wide, gray
- Date day number (concerts/news): Inter or Inter Tight, ~28–32px, bold/black weight, black
- Date month/year: Inter, ~10px, uppercase, gray
- Item title (desktop): Inter, ~14–15px, regular or medium (400–500), black
- Item title (mobile): Inter, ~16px, medium or semibold (500–600), black
- Metadata / tags (TAG, author initials): Inter, ~12–13px, regular, gray
- Footer links (desktop): Inter, ~12px, uppercase, letter-spacing wide
- Tab bar labels: absent — icons only on mobile footer

### Spacing Observations (estimated from visual analysis of 2x screenshots)
- Desktop page horizontal padding: ~40–48px each side (content starts well away from edges)
- Desktop content max-width: approximately 1360px within 1440px artboard
- Mobile horizontal padding: ~16px each side
- Item row height (desktop album): ~72–80px
- Item row height (mobile album): ~88–96px
- Item row height (desktop concert/news): ~64–72px
- Item row height (mobile concert/news): ~80–88px
- Gap between thumbnail and text (Discos): ~12–16px
- Section header top padding: ~24–32px

### Responsive Patterns
- Desktop nav (top right) collapses entirely to mobile tab bar (bottom icons) — no intermediate hamburger
- 2-column desktop album grid → single column mobile list
- Desktop concert/news: inline metadata columns → mobile: date-divider-content vertical stack within single row
- Sort controls present on desktop (Conciertos, Noticias) carry over to mobile Section Header
- Author initials present on desktop Noticias but absent on mobile version

---

## Design Gaps / Missing Artboards

### Missing sections (no Paper artboard exists)
1. **Homepage / Index** — no artboard for `index.astro` at any breakpoint
2. **Entrevistas** — section referenced in nav but no artboard (desktop or mobile)
3. **TV / BiginnerTV** — section referenced in nav/tab bar but no artboard
4. **404 page** — no error state artboard

### Missing breakpoints for existing sections
5. **Tablet (768px)** — no artboard for any section at tablet breakpoint
6. **Discos desktop scroll state** — artboard is 960px tall but list overflows; no "loaded more" state

### Missing page types
7. **Album detail** (`/discos/[slug]`) — no artboard at any breakpoint
8. **Concert detail** (`/conciertos/[slug]`) — no artboard at any breakpoint
9. **News article detail** (`/noticias/[slug]`) — no artboard at any breakpoint
10. **Interview detail** (`/entrevistas/[slug]`) — no artboard at any breakpoint

### Missing interactive states
11. **Hover states** — no hover treatment defined for any list item or nav link
12. **Focus states** — no keyboard focus ring defined
13. **Empty states** — no design for sections with no content
14. **Loading skeleton** — not applicable for SSG but no shimmer/placeholder treatment shown

---

## Consistency Analysis

### What is consistent across all sections
- Header structure: logo + nav (desktop), centered logo only (mobile)
- Footer: text links (desktop), icon tab bar (mobile)
- 1px light gray horizontal rule as the universal row separator
- White background throughout
- Black for active/primary, gray for secondary/inactive
- Section label uppercase in top-left of content area
- Sort controls (Conciertos, Noticias) share identical UI pattern: "ORDENAR POR: OPTION1 | OPTION2"

### What differs between sections
| Attribute              | Discos             | Conciertos          | Noticias            |
|------------------------|--------------------|---------------------|---------------------|
| Desktop layout         | 2-column grid      | Single-column table | Single-column table |
| Thumbnail image        | Yes (1:1 square)   | No                  | No                  |
| Column headers row     | No                 | Yes (FECHA/ARTISTA/SALA/CIUDAD) | No     |
| Date display           | Inline (DD/MM/YYYY)| Stacked block (day large, month, year) | Stacked block |
| Sort options           | None               | FECHA / ARTISTA     | FECHA / ALFABÉTICO  |
| Right-aligned metadata | No                 | City code (BCN/MAD) | Author tag (DBF/CPR/LLM) |
| Mobile items visible   | 9                  | 9                   | 7                   |
| Mobile: thumbnail      | Yes                | No                  | No                  |
