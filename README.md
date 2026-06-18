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

Deploy the `dist` folder (e.g. Vercel, Netlify, GitHub Pages). See `vercel.json` for SPA routing.

## Event images

Event artwork lives in `public/events/` (URLs like `/events/ftc-qualifier-4.svg`). Update files there or change paths in `src/data/events.js`.
