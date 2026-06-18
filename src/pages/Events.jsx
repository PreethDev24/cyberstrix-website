import { useParams, Navigate } from 'react-router-dom'
import EventsSection from '../components/Events'
import { isValidSeason } from '../data/seasons'

export default function EventsPage() {
  const { seasonId } = useParams()

  if (seasonId === 'all') {
    return <Navigate to="/events" replace />
  }

  if (seasonId && !isValidSeason(seasonId)) {
    return <Navigate to="/events" replace />
  }

  return (
    <div className="py-4">
      <EventsSection seasonId={seasonId} />
    </div>
  )
}
