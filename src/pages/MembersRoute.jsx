import { useParams, Navigate } from 'react-router-dom'
import MembersSection from '../components/Members'
import Seo from '../components/Seo'
import { membersPageJsonLd, faqJsonLd } from '../seo/jsonLd'
import { OG_IMAGES } from '../seo/urls'
import { getMembersForSeason } from '../data/members'
import { JOIN_FAQ } from '../data/joinFaq'
import { CURRENT_SEASON, getSeasonLabel, isValidSeason, membersPath } from '../data/seasons'
import MemberDetailPage from './MemberDetail'

function rosterDescription(seasonLabel, members) {
  if (members.length === 0) {
    return `Cyber Strix FTC Team 31022 ${seasonLabel} roster.`
  }
  const names = members.map((m) => m.name).join(', ')
  return `Meet the Cyber Strix ${seasonLabel} roster: ${names}. FIRST Tech Challenge Team 31022 from Mountain House, CA.`
}

export default function MembersRoute() {
  const { param } = useParams()

  if (param && !isValidSeason(param)) {
    return <MemberDetailPage />
  }

  if (param === CURRENT_SEASON) {
    return <Navigate to="/members" replace />
  }

  const activeSeason = param ?? CURRENT_SEASON
  const seasonLabel = getSeasonLabel(activeSeason)
  const { leaders, engineers } = getMembersForSeason(activeSeason)
  const members = [...leaders, ...engineers]
  const path = membersPath(activeSeason)
  const jsonLd = [
    members.length > 0 ? membersPageJsonLd(seasonLabel, members) : null,
    activeSeason === CURRENT_SEASON ? faqJsonLd(JOIN_FAQ) : null,
  ].filter(Boolean)

  return (
    <div className="py-4">
      <Seo
        title={`Team Members — ${seasonLabel}`}
        description={rosterDescription(seasonLabel, members)}
        path={path}
        ogImage={OG_IMAGES.members}
        jsonLd={jsonLd}
      />
      <MembersSection seasonId={activeSeason} />
    </div>
  )
}
