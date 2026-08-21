export { PRERENDER_ROUTES } from './prerender-routes'

/** Production site URL — set VITE_SITE_URL in Vercel (or .env) to your real domain. */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://cyberstrix31022.vercel.app').replace(
  /\/$/,
  '',
)

export const SITE_NAME = 'Cyber Strix — FTC Team 31022'
export const TEAM_NUMBER = '31022'
export const TEAM_EMAIL = 'cyberstrix31022@gmail.com'

export const TEAM_LOCATION = {
  city: 'Mountain House',
  region: 'CA',
  country: 'US',
  display: 'Mountain House, CA',
}

/** Quotable highlight for SEO / AI citation. */
export const TEAM_AWARD =
  '2nd Place Finalist Alliance at the 2026 North East League Tournament (FTC Qualifier 4)'

export const DEFAULT_DESCRIPTION =
  'Cyber Strix is FIRST Tech Challenge Team 31022 from Mountain House, CA — robotics, outreach, and STEM for grades 9–12.'

export const DEFAULT_OG_IMAGE =
  'https://flamesimagestorage.blob.core.windows.net/files/048b51bf-77e6-48b5-9da9-6c8f3c3ec493_1773803815459_prj_ndxbgk0s/100d8a0a-20ac-441c-995f-42fb9e8dfdc3-Cyber_Strix_Logo.png'

export const SOCIAL_LINKS = [
  'https://www.instagram.com/ftc_cyberstrix/',
  'https://www.youtube.com/@CyberStrix',
]

/** Optional Search Console / Bing ownership tokens (from env). */
export const GOOGLE_SITE_VERIFICATION = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION || ''
export const BING_SITE_VERIFICATION = import.meta.env.VITE_BING_SITE_VERIFICATION || ''

/** Clear facts for About page + generative engines. */
export const TEAM_FACTS = [
  { label: 'Team', value: `Cyber Strix — FIRST Tech Challenge Team ${TEAM_NUMBER}` },
  { label: 'Location', value: TEAM_LOCATION.display },
  { label: 'Award', value: TEAM_AWARD },
  { label: 'Outreach', value: '150+ students reached through STEM outreach, including an online exchange with students in Gadag, India' },
  { label: 'Focus', value: 'Competitive robotics, CAD, programming, leadership, and community STEM programs' },
]
