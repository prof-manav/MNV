# MNV

Live site: https://prof-manav.github.io/MNV/

## Layout

The site is one page, `index.html`, with five sections (Home, Publications, Talks, CV, Misc) that `site.js` shows one at a time based on the URL hash (`#publications`, `#talks`, ...). A hash can also name any element id, e.g. `#mswc-loss` or `#education`, which opens the right section and scrolls to that item.

- `index.html`: all content
- `styles.css`: design tokens (dark theme by default, light theme under `[data-theme="light"]`) and layout
- `site.js`: hash routing, scroll cues, light/dark toggle (remembered per visitor)
- `education.html`, `research.html`, `talks.html`, `misc.html`: redirects so old links keep working

## Editing

- **Scholar / Scopus / CV buttons:** in the profile card, paste the link into the empty `href=""` (for CV, upload a PDF without personal details, e.g. `cv.pdf`, and use `href="cv.pdf"`). Buttons with no link stay hidden.
- **Photo:** upload a square-ish portrait named `photo.jpg` (or `photo.png`) next to `index.html`. It appears in the circle automatically; until then the "MV" initials show. About 600×600 px and under 300 KB works well.
- **Publications:** copy an `<li>` inside `.pubs`; give it a unique `id` so it can be linked.
- **Paper / Code / Data buttons:** paste the URL between the quotes, e.g. `<a class="pub-link code" href="https://github.com/...">Code</a>`. Filled links open in a new tab; empty ones show as a dimmed "soon" button. Delete a button's line to drop it.
- **Talks / CV entries:** copy an `<li>` inside `.entries`.
