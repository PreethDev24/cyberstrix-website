import { PRERENDER_ROUTES } from '../data/prerender-routes.js'
import { getAllMemberSlugs } from '../data/members.js'
import { getAllEventSlugs } from '../data/events.js'

const SITEMAP_META = {
  '/': { priority: '1.0', changefreq: 'weekly' },
  '/about': { priority: '0.8', changefreq: 'monthly' },
  '/what-we-do': { priority: '0.8', changefreq: 'monthly' },
  '/members': { priority: '0.9', changefreq: 'weekly' },
  '/members/2025-26': { priority: '0.8', changefreq: 'monthly' },
  '/events': { priority: '0.9', changefreq: 'weekly' },
  '/events/2025-26': { priority: '0.8', changefreq: 'weekly' },
  '/events/2026-27': { priority: '0.7', changefreq: 'weekly' },
  '/sponsors': { priority: '0.8', changefreq: 'monthly' },
  '/contact': { priority: '0.8', changefreq: 'monthly' },
}

/** Every route that should be pre-rendered and listed in the sitemap. */
export function getAllPrerenderRoutes() {
  const memberRoutes = getAllMemberSlugs().map((slug) => `/members/${slug}`)
  const eventRoutes = getAllEventSlugs().map((slug) => `/events/${slug}`)
  return [...PRERENDER_ROUTES, ...memberRoutes, ...eventRoutes]
}

export function getSitemapMeta(route) {
  if (SITEMAP_META[route]) return SITEMAP_META[route]
  if (route.startsWith('/members/')) return { priority: '0.7', changefreq: 'monthly' }
  if (route.startsWith('/events/')) return { priority: '0.7', changefreq: 'monthly' }
  return { priority: '0.5', changefreq: 'monthly' }
}
