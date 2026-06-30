import { useParams, Navigate } from 'react-router-dom'
import EventsSection from '../components/Events'
import Seo from '../components/Seo'
import { eventsPageJsonLd } from '../seo/jsonLd'
import { OG_IMAGES } from '../seo/urls'
import { getAllEvents, getEventsForSeason } from '../data/events'
import { getSeasonLabel, isValidSeason, eventsPath } from '../data/seasons'
import EventDetailPage from './EventDetail'

export default function EventsRoute() {
  const { param } = useParams()

  if (param && !isValidSeason(param)) {
    return <EventDetailPage />
  }

  if (param === 'all') {
    return <Navigate to="/events" replace />
  }

  const path = eventsPath(param)
  const title = param ? `Events — ${getSeasonLabel(param)}` : 'Events'
  const description = param
    ? `Competitions, outreach, and STEM events from Cyber Strix FTC Team 31022 during the ${getSeasonLabel(param)} season.`
    : 'Competitions, outreach, and STEM events from Cyber Strix FTC Team 31022 across all seasons.'
  const events = param ? getEventsForSeason(param) : getAllEvents()

  return (
    <div className="py-4">
      <Seo
        title={title}
        description={description}
        path={path}
        ogImage={OG_IMAGES.events}
        jsonLd={events.length > 0 ? eventsPageJsonLd(events) : undefined}
      />
      <EventsSection seasonId={param} />
    </div>
  )
}
