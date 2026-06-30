import SponsorsSection from '../components/Sponsors'
import Seo from '../components/Seo'

export default function Sponsors() {
  return (
    <div className="py-4">
      <Seo
        title="Sponsors"
        description="Thank you to the sponsors and partners who support Cyber Strix FTC Team 31022."
        path="/sponsors"
      />
      <SponsorsSection />
    </div>
  )
}
