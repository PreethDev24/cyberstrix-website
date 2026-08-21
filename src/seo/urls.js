import { DEFAULT_OG_IMAGE, SITE_URL } from '../data/site'

export function absoluteUrl(path) {
  if (!path) return DEFAULT_OG_IMAGE
  if (path.startsWith('http')) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export const OG_IMAGES = {
  home: '/hero-team.png?v=2',
  members: '/hero-team.png?v=2',
  events: '/events/ftc-qualifier-4/01.png',
  about: '/hero-team.png?v=2',
  whatWeDo: '/hero-team.png?v=2',
}
