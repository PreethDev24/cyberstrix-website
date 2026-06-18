import { useParams, Navigate } from 'react-router-dom'
import MembersSection from '../components/Members'
import { CURRENT_SEASON, isValidSeason } from '../data/seasons'

export default function MembersPage() {
  const { seasonId } = useParams()

  if (seasonId === CURRENT_SEASON) {
    return <Navigate to="/members" replace />
  }

  if (seasonId && !isValidSeason(seasonId)) {
    return <Navigate to="/members" replace />
  }

  const activeSeason = seasonId ?? CURRENT_SEASON

  return (
    <div className="py-4">
      <MembersSection seasonId={activeSeason} />
    </div>
  )
}
