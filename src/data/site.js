export { PRERENDER_ROUTES } from './prerender-routes'

/** Public site URL — set VITE_SITE_URL in production (e.g. Vercel env). */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://cyberstrix31022.vercel.app').replace(/\/$/, '')

export const SITE_NAME = 'Cyber Strix — FTC Team 31022'

export const DEFAULT_DESCRIPTION =
  'Cyber Strix is FIRST Tech Challenge Team 31022 from Mountain House, CA — robotics, outreach, and STEM for grades 9–12.'

export const DEFAULT_OG_IMAGE =
  'https://flamesimagestorage.blob.core.windows.net/files/048b51bf-77e6-48b5-9da9-6c8f3c3ec493_1773803815459_prj_ndxbgk0s/100d8a0a-20ac-441c-995f-42fb9e8dfdc3-Cyber_Strix_Logo.png'
