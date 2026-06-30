import { Helmet } from 'react-helmet-async'
import { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../data/site'
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
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

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
