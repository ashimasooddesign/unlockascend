# Technical Decisions

- Photos shown on pages are served as same-origin static files from `public/` (e.g. `public/ashima-sadhana.jpg`), not CDN asset pointers; `/__l5e/assets-v1/` URLs are not proxied by the sandbox dev server, so they render as broken images in the preview (same issue as the About portrait).
- The Navratri announcement banner renders in normal page flow on the homepage behind a `pt-[72px]` spacer that clears the fixed header; never place it inside the fixed header, whose height varies with banner text wrapping.
