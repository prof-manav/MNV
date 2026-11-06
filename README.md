# my-website

prof-manav.github.io/MNV/

## Layout

The site is one page, `index.html`, with five sections (Home, Research, Talks, Education, Misc) that `site.js` shows one at a time based on the URL hash (`#research`, `#talks`, ...). A hash can also name any element id, e.g. `#fanformer`, which opens the right section and scrolls to that item.

- `index.html`: all content
- `styles.css`: design tokens (dark theme by default, light theme under `[data-theme="light"]`) and layout
- `site.js`: hash routing, scroll cues, light/dark toggle (remembered per visitor)
- `education.html`, `research.html`, `talks.html`, `misc.html`: redirects so old links keep working

## Editing

- **Photo:** replace `<div class="hero-photo" ...>MV</div>` with `<img class="hero-photo" src="images/photo.jpg" alt="Muktinath Vishwakarma">`.
- **Publications:** copy an `<li>` inside `.pubs`; give it a unique `id` so it can be linked.
- **Paper / Code / Data buttons:** paste the URL between the quotes, e.g. `<a class="pub-link code" href="https://github.com/...">Code</a>`. Filled links open in a new tab; empty ones show as a dimmed "soon" button. Delete a button's line to drop it.
- **Talks / education:** copy an `<li>` inside `.entries`.
