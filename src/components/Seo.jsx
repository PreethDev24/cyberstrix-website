import { Helmet } from 'react-helmet-async'
import {
  BING_SITE_VERIFICATION,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  GOOGLE_SITE_VERIFICATION,
  SITE_NAME,
  SITE_URL,
  TEAM_LOCATION,
} from '../data/site'
import { absoluteUrl } from '../seo/urls'

export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  ogImage,
  jsonLd,
  noIndex = false,
}) {
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`
  const image = absoluteUrl(ogImage || DEFAULT_OG_IMAGE)

  const jsonLdItems = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large" />
      )}

      <meta name="geo.region" content={`US-${TEAM_LOCATION.region}`} />
      <meta name="geo.placename" content={TEAM_LOCATION.city} />
      <meta name="ICBM" content="37.7739, -121.5430" />

      {GOOGLE_SITE_VERIFICATION ? (
        <meta name="google-site-verification" content={GOOGLE_SITE_VERIFICATION} />
      ) : null}
      {BING_SITE_VERIFICATION ? (
        <meta name="msvalidate.01" content={BING_SITE_VERIFICATION} />
      ) : null}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLdItems.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  )
}
