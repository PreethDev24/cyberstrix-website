import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import Seo from '../components/Seo'
import { organizationJsonLd } from '../seo/jsonLd'
import { OG_IMAGES } from '../seo/urls'
import { DEFAULT_DESCRIPTION, SITE_NAME } from '../data/site'

export default function Home() {
  return (
    <>
      <Seo
        title={SITE_NAME}
        description={DEFAULT_DESCRIPTION}
        path="/"
        ogImage={OG_IMAGES.home}
        jsonLd={organizationJsonLd()}
      />
      <Hero />
      <WhatWeDo />
    </>
  )
}
