import ContactSection from '../components/Contact'
import Seo from '../components/Seo'

export default function Contact() {
  return (
    <div className="py-4">
      <Seo
        title="Contact"
        description="Contact Cyber Strix FTC Team 31022 in Mountain House, CA — join the team, sponsor us, or ask about outreach."
        path="/contact"
      />
      <ContactSection />
    </div>
  )
}
