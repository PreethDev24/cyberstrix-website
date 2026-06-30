import AboutSection from '../components/About'
import Seo from '../components/Seo'
import { OG_IMAGES } from '../seo/urls'

export default function About() {
  return (
    <div className="py-4">
      <Seo
        title="About"
        description="Learn about Cyber Strix FTC Team 31022 — our mission, outreach, and STEM impact in Mountain House, CA."
        path="/about"
        ogImage={OG_IMAGES.about}
      />
      <AboutSection />
    </div>
  )
}
