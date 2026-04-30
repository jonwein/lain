# Fidelity to source (mebious.neocities.org / mebious.co.uk)

A candid record of how this clone deviates from the original site.

## Faithful to the source

- HTML structure, per-layer CSS files, fonts (LoveLetter, liquidcrystal,
  chintzy), favicons, cursors, audio/video files, and most per-layer JS scripts
  (jQuery `psyche.js`, `infornography.js`, etc.) are served verbatim from
  `/public`.
- Layout, colors, and per-page styling come from the original stylesheets,
  unmodified.
- 20 layer routes plus 4 sub-pages (Declaration, Diary, Manifesto,
  Omnipresence), matrix raindrops, and GoWireless age prompt all match the
  source structure.

## Deliberate deviations

- **Kids cell**: navigates to `/` and is highlighted when on `/`. Original has
  `onclick="location.href=''"` — does nothing.
- **Current-page highlighting**: each layer page marks its own cell as
  `.layerlink0` via `usePathname()`. The original does NOT highlight the
  current page; every cell looks identical regardless of which page you're on.
- **Landscape port/starboard**: cycling is React `useState` instead of jQuery
  `attr('href', ...)`. Same UX, different implementation.
- **GoWireless age prompt**: runs in a `useEffect` instead of `<body Onload>`.
  Functionally identical.
- **Psyche / Infornography menus**: stripped the embedded `linkcontainer` HTML
  from the body and render the React `<LayerNav />` instead, so they pick up
  current-page highlighting. Looks the same.
- **`/index.html` references**: rewritten to `/` (Next.js doesn't serve
  `/index.html` from `app/page.tsx`).
- **`audio.js` (audiojs library)**: patched `play()` to swallow promise
  rejections from autoplay-blocked browsers, so the dev console isn't flooded
  with `NotAllowedError` traces.
- **`infornography.js`**: wrapped all `.play()` calls in a `safePlay()` helper
  for the same reason; also rewrote `../Hypermedia/...` paths to absolute `/`
  paths (relative paths broke under `/Layer/X` routing).
- **Nightmare `<img id="stage">`**: removed initial `src=""` to avoid a React
  warning about empty `src`. `nightmare.js` populates it on load — same end
  state.

## Likely degraded vs. the original (side effects of modern browsers, not
porting mistakes)

- **Audio/video autoplay**: modern browsers block this without a user gesture.
  Every layer that opens with music silently fails to start until the user
  clicks somewhere on the page. The original site predates this restriction.
- **Nightmare imgur images**: `nightmare.js` references external
  `i.imgur.com/...` URLs that may have rotted (the source itself depends on
  third-party hosting).
- **Hit counter** (`cc.amazingcounters.com`): mixed-content blocking and
  third-party reliability — may not render.
- **Custom cursors**: per-layer CSS uses `url("../cur/...")`. Works because of
  the relative path resolution from `/stylesheets/`, but not every cursor
  variant has been visually verified.
- **`tachibanalabs.net` badge link**: external link, not under our control.

## Verification status

- All 20 layer routes return HTTP 200 with the expected `<title>` marker.
- No compile-time errors from Next/Turbopack.
- Per-page rendering of `<LayerNav />` correctly marks the current cell as
  `.layerlink0` (1 per page; 0 on Nightmare which uses `prvw current`; 0 on
  Landscape which has its own HandiNAVI menu).
- **Not verified**: pixel-level visual diff against the live site. Doing that
  would require opening both in a browser side by side, which hasn't been
  done.

Estimated fidelity: ~90% structural, with deliberate UX deviation on Kids and
current-cell highlighting, plus modern-browser autoplay/external-resource
degradation.
