import { useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import EventProfile from '../components/EventProfile'
import { eventPath, getEventBySlug } from '../data/events'
import { breadcrumbJsonLd, eventJsonLd } from '../seo/jsonLd'
import NotFound from './NotFound'

export default function EventDetailPage() {
  const { param } = useParams()
  const event = getEventBySlug(param)

  if (!event) return <NotFound />

  const path = eventPath(event.title)
  const description = `${event.title} — ${event.date} in ${event.location}. ${event.details}`

  return (
    <div className="py-4">
      <Seo
        title={event.title}
        description={description}
        path={path}
        ogImage={event.image_url}
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Events', path: '/events' },
            { name: event.title, path },
          ]),
          eventJsonLd(event),
        ]}
      />
      <EventProfile event={event} />
    </div>
  )
}
