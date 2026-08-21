import ContactSection from '../components/Contact'
import Seo from '../components/Seo'
import { contactPageJsonLd } from '../seo/jsonLd'

export default function Contact() {
  return (
    <div className="py-4">
      <Seo
        title="Contact"
        description="Contact Cyber Strix FTC Team 31022 in Mountain House, CA — join the team, sponsor us, or ask about outreach."
        path="/contact"
        jsonLd={contactPageJsonLd()}
      />
      <ContactSection />
    </div>
  )
}
