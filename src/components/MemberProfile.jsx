import { Link } from 'react-router-dom'
import { Linkedin, ArrowLeft } from 'lucide-react'
import { memberPath } from '../data/members'
import { membersPath } from '../data/seasons'

function memberPhoto(member) {
  if (member.imageSrc) return member.imageSrc
  if (member.images?.length) return member.images[0]
  return null
}

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('')
}

function splitTags(specialties) {
  if (!specialties) return []
  return specialties
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)
}

export default function MemberProfile({ member, seasonId }) {
  const photo = memberPhoto(member)
  const tags = splitTags(member.specialties)

  return (
    <article className="mx-auto max-w-3xl px-6 py-8">
      <Link
        to={membersPath(seasonId)}
        className="inline-flex items-center gap-2 text-sm text-sky-300 transition hover:text-sky-200"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to team roster
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-bold text-white">{member.name}</h1>
        <p className="mt-2 text-white/70">
          <span className="text-sky-300">{member.role}</span>
          <span className="mx-2 text-white/30">·</span>
          Grade {member.grade}
        </p>
      </header>

      {member.linkedin_url && (
        <a
          href={member.linkedin_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition hover:border-sky-400/40 hover:bg-white/10 hover:text-white"
        >
          <Linkedin className="h-4 w-4 text-sky-300" />
          LinkedIn
        </a>
      )}

      {tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2 list-none p-0">
          {tags.map((tag) => (
            <li key={tag}>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      )}

      {photo ? (
        <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-black/50">
          <div className="aspect-[16/10] w-full">
            <img
              src={photo}
              alt={member.name}
              width={640}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ) : (
        <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(56,189,248,0.16),transparent_45%)]">
          <div className="flex aspect-[16/10] w-full items-center justify-center">
            <span className="text-5xl font-semibold text-sky-200/90">{initials(member.name)}</span>
          </div>
        </div>
      )}

      <div className="mt-6 space-y-3 text-sm leading-relaxed text-white/80">
        <p>{member.bio}</p>
        {member.more_bio && member.more_bio !== member.bio && (
          <p className="text-white/70">{member.more_bio}</p>
        )}
      </div>

      <p className="sr-only">
        Profile page for {member.name}, {member.role} on Cyber Strix FTC Team 31022.
        Permalink: {memberPath(member.name)}
      </p>
    </article>
  )
}
