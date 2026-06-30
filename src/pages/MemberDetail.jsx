import { useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import MemberProfile from '../components/MemberProfile'
import { getMemberBySlug, memberPath } from '../data/members'
import { breadcrumbJsonLd, personJsonLd } from '../seo/jsonLd'
import NotFound from './NotFound'

export default function MemberDetailPage() {
  const { param } = useParams()
  const result = getMemberBySlug(param)

  if (!result) return <NotFound />

  const { member, seasonId } = result
  const path = memberPath(member.name)
  const description = `${member.name} — ${member.role} on Cyber Strix FTC Team 31022. ${member.bio}`

  return (
    <div className="py-4">
      <Seo
        title={member.name}
        description={description}
        path={path}
        ogImage={member.imageSrc || undefined}
        jsonLd={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Team Members', path: '/members' },
            { name: member.name, path },
          ]),
          personJsonLd(member),
        ]}
      />
      <MemberProfile member={member} seasonId={seasonId} />
    </div>
  )
}
