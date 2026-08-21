import WhatWeDoSection from '../components/WhatWeDo'
import Seo from '../components/Seo'
import { whatWeDoJsonLd } from '../seo/jsonLd'
import { OG_IMAGES } from '../seo/urls'

export default function WhatWeDo() {
  return (
    <div className="py-4">
      <Seo
        title="What We Do"
        description="Cyber Strix FTC Team 31022 — hands-on robotics, STEM outreach, leadership, and opportunities beyond the robot in Mountain House, CA."
        path="/what-we-do"
        ogImage={OG_IMAGES.whatWeDo}
        jsonLd={whatWeDoJsonLd()}
      />
      <WhatWeDoSection />
    </div>
  )
}
