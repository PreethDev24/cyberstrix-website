# Cyber Strix — Frontend

React + Vite static site. No backend: events are defined in `src/data/events.js`, and the contact form opens the visitor’s email app via `mailto:`.

## Setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The build pre-renders every main route to static HTML (SSG) so crawlers and AI tools can read member names, events, and page copy without running JavaScript. It also generates `robots.txt` and `sitemap.xml` in `dist/`.

Set your live domain for canonical URLs and the sitemap (Vercel → Project Settings → Environment Variables):

```bash
VITE_SITE_URL=https://your-domain.com
```

Deploy the `dist` folder (e.g. Vercel, Netlify, GitHub Pages). See `vercel.json` for SPA routing fallback on client-side navigations.

### After deploy — submit to search engines

1. Set `VITE_SITE_URL` to your live domain in Vercel environment variables.
2. [Google Search Console](https://search.google.com/search-console) → add your site → submit `https://your-domain.com/sitemap.xml`.
3. [Bing Webmaster Tools](https://www.bing.com/webmasters) → same sitemap URL.

## Event images

Event artwork lives in `public/events/` (URLs like `/events/ftc-qualifier-4.svg`). Update files there or change paths in `src/data/events.js`.
