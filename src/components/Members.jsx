import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getMembersForSeason, memberPath } from '../data/members'
import { JOIN_FAQ } from '../data/joinFaq'
import { getSeasonLabel, isCurrentSeason, membersPath } from '../data/seasons'
import SeasonTabs from './SeasonTabs'

function memberSlides(m) {
  if (m.images?.length) return m.images
  if (m.imageSrc) return [m.imageSrc]
  return []
}

export default function Members({ seasonId }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const { leaders, engineers } = getMembersForSeason(seasonId)
  const isCurrent = isCurrentSeason(seasonId)
  const seasonLabel = getSeasonLabel(seasonId)
  const isEmpty = leaders.length === 0 && engineers.length === 0
  const filteredLeaders = useMemo(
    () => leaders.filter((m) => memberMatchesFilter(m, activeFilter)),
    [leaders, activeFilter],
  )
  const filteredEngineers = useMemo(
    () => engineers.filter((m) => memberMatchesFilter(m, activeFilter)),
    [engineers, activeFilter],
  )
  const filteredMembers = useMemo(
    () => [...leaders, ...engineers].filter((m) => memberMatchesFilter(m, activeFilter)),
    [leaders, engineers, activeFilter],
  )
  const leadMembers = useMemo(() => {
    if (activeFilter === 'all') return filteredLeaders
    const leadNames = LEADERS_BY_FILTER[activeFilter] ?? []
    return filteredMembers.filter((m) => leadNames.includes(m.name))
  }, [activeFilter, filteredLeaders, filteredMembers])
  const leadNameSet = useMemo(() => new Set(leadMembers.map((m) => m.name)), [leadMembers])
  const nonLeadMembers = useMemo(
    () => filteredMembers.filter((m) => !leadNameSet.has(m.name)),
    [filteredMembers, leadNameSet],
  )
  const isFinanceView = activeFilter === 'treasurer'
  const primaryMembers = isFinanceView ? filteredMembers : leadMembers
  const secondaryMembers = isFinanceView ? [] : nonLeadMembers
  const primaryHeading =
    activeFilter === 'all'
      ? 'Team Leadership'
      : isFinanceView
        ? 'Finance Team'
        : leadMembers.length === 1
          ? 'Lead'
          : 'Leads'
  const secondaryHeading = activeFilter === 'all' ? 'The Engineers' : 'Team Members'
  const filterCounts = useMemo(() => {
    const allMembers = [...leaders, ...engineers]
    const counts = { all: allMembers.length }
    for (const filterId of MEMBER_FILTERS) {
      if (filterId === 'all') continue
      counts[filterId] = allMembers.filter((m) => memberMatchesFilter(m, filterId)).length
    }
    return counts
  }, [leaders, engineers])

  useEffect(() => {
    setActiveFilter('all')
  }, [seasonId])

  return (
    <section id="members" className="py-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-3xl font-bold text-white">Team Members</h1>
        <p className="mt-2 text-white/70">Meet the students behind Cyber Strix.</p>

        <div className="mt-6">
          <SeasonTabs activeSeasonId={seasonId} pathForSeason={membersPath} />
        </div>

        {!isCurrent && (
          <p className="mt-4 text-sm text-white/50">
            Archive — {seasonLabel} season
          </p>
        )}

        {isEmpty ? (
          <p className="mt-8 text-sm text-white/50">
            {isCurrent
              ? 'Our 2026–27 roster will be announced before build season. Check back soon!'
              : 'No members listed for this season.'}
          </p>
        ) : (
          <>
            <div className="mt-5">
              <p className="text-xs text-white/50 mb-2">Filter by specialty</p>
              <div className="flex flex-wrap gap-2">
                {MEMBER_FILTERS.map((filterId) => {
                  const isActive = activeFilter === filterId
                  const count = filterCounts[filterId] ?? 0
                  const disabled = filterId !== 'all' && count === 0
                  return (
                    <button
                      key={filterId}
                      type="button"
                      onClick={() => setActiveFilter(filterId)}
                      disabled={disabled}
                      className={
                        isActive
                          ? 'px-3 py-1.5 rounded-full text-xs font-medium border border-sky-400/50 bg-sky-500/20 text-sky-200'
                          : disabled
                            ? 'px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 bg-white/[0.02] text-white/30 cursor-not-allowed'
                            : 'px-3 py-1.5 rounded-full text-xs font-medium border border-white/15 bg-white/5 text-white/80 hover:border-white/30 hover:text-white transition'
                      }
                    >
                      {filterLabel(filterId)}
                      {filterId !== 'all' && <span className="ml-1 opacity-70">({count})</span>}
                    </button>
                  )
                })}
              </div>
            </div>

            {filteredMembers.length === 0 && (
              <p className="mt-6 text-sm text-white/50">
                No members match this specialty filter in {seasonLabel}.
              </p>
            )}

            <h3 className="mt-8 text-2xl font-semibold text-white">{primaryHeading}</h3>
            <p className="mt-1 text-sm text-white/50">Tap a card for full bio and photo gallery.</p>
            <ul className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 list-none p-0 m-0">
              {primaryMembers.map((m) => (
                <li key={m.name} className="list-none">
                  <MemberCard member={m} />
                </li>
              ))}
            </ul>

            {secondaryMembers.length > 0 && (
              <>
                <h3 className="mt-10 text-2xl font-semibold text-white">{secondaryHeading}</h3>
                <ul className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 list-none p-0 m-0">
                  {secondaryMembers.map((m) => (
                    <li key={m.name} className="list-none">
                      <MemberCard member={m} />
                    </li>
                  ))}
                </ul>
              </>
            )}
          </>
        )}

        {isCurrent && (
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-500/5 border border-sky-400/20">
            <h2 className="text-xl font-semibold text-white">Interested in Joining Cyber Strix?</h2>
            <ul className="mt-3 text-white/80 space-y-1 list-none p-0">
              {JOIN_FAQ.map((item) => (
                <li key={item.question}>• {item.answer}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
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

const MEMBER_FILTERS = ['all', 'programming', 'cad', 'build', 'outreach', 'treasurer']
const LEADERS_BY_FILTER = {
  programming: ['Shresta Bollu'],
  cad: ['Shreeansh Shinde'],
  build: ['Shreeansh Shinde'],
  outreach: ['Rohan Sugate'],
  treasurer: ['Preeth Nambiar'],
}

function memberMatchesFilter(member, activeFilter) {
  if (activeFilter === 'all') return true
  const tags = splitTags(member.specialties).map((t) => t.toLowerCase())
  return tags.some((t) => t.includes(activeFilter))
}

function filterLabel(filterId) {
  if (filterId === 'all') return 'All'
  if (filterId === 'cad') return 'CAD'
  return filterId.charAt(0).toUpperCase() + filterId.slice(1)
}

function MemberCard({ member }) {
  const tags = splitTags(member.specialties)
  const bodyType = 'text-base font-normal leading-6 [font-style:normal]'
  const slides = memberSlides(member)
  const cover = slides[0]

  return (
    <Link
      to={memberPath(member.name)}
      aria-label={`${member.name}, ${member.role}`}
      className="group relative rounded-3xl bg-white/5 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_80px_-40px_rgba(0,0,0,0.9)] min-h-[420px] flex flex-col text-left transition hover:border-sky-500/40 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_10%,rgba(56,189,248,0.14),transparent_45%),radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.10),transparent_45%)]" />

      <div className="relative h-[210px] shrink-0 overflow-hidden rounded-t-3xl pointer-events-none">
        {cover ? (
          <img
            src={cover}
            alt={`${member.name}, ${member.role}`}
            width={400}
            height={210}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="h-full w-full bg-[linear-gradient(135deg,rgba(56,189,248,0.16),transparent_45%),radial-gradient(circle_at_70%_25%,rgba(59,130,246,0.12),transparent_50%)]">
            <div className="h-full w-full flex items-center justify-center">
              <div
                className={`w-16 h-16 rounded-2xl bg-black/30 border border-white/10 backdrop-blur-sm flex items-center justify-center text-sky-200 ${bodyType}`}
              >
                {initials(member.name)}
              </div>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/25 to-transparent" />

        <div className={`absolute left-4 bottom-4 right-4 ${bodyType}`}>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-sky-500/15 border border-sky-400/25 text-sky-200">
            {member.role}
          </div>
          <div className="mt-3 text-white">{member.name}</div>
        </div>

      </div>

      <div className={`relative px-5 pb-6 pt-4 flex-1 flex flex-col min-w-0 ${bodyType} text-white/90`}>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pointer-events-none">
            {tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {member.bio && (
          <p className="mt-3 text-white/70 line-clamp-3 break-words">{member.bio}</p>
        )}

        <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between gap-3 text-white/60 shrink-0">
          <div className="shrink-0">Grade {member.grade}</div>
          <span className="text-xs font-medium text-sky-300 shrink-0">Profile →</span>
        </div>
      </div>
    </Link>
  )
}
