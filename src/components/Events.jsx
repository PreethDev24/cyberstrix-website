import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getEventsForSeason, getAllEvents, eventPath } from '../data/events'
import { EVENT_TAGS } from '../data/eventTags'
import { getSeasonLabel, eventsPath, CURRENT_SEASON } from '../data/seasons'
import EventFilterTabs, { isAllEventsFilter } from './EventFilterTabs'
import EventTagFilter, { isAllTagFilter } from './EventTagFilter'
import EventTagPill from './EventTagPill'

function eventSlides(e) {
  if (e.images?.length) return e.images
  if (e.image_url) return [e.image_url]
  return []
}

function imageObjectPosition(event, src) {
  return event?.imageObjectPositions?.[src] ?? 'center'
}

export default function Events({ seasonId }) {
  const [activeTag, setActiveTag] = useState('all')
  const showAll = isAllEventsFilter(seasonId)
  const seasonEvents = showAll ? getAllEvents() : getEventsForSeason(seasonId)
  const seasonLabel = seasonId ? getSeasonLabel(seasonId) : null
  const isEmptySeason = seasonEvents.length === 0

  useEffect(() => {
    setActiveTag('all')
  }, [seasonId])

  const tagCounts = useMemo(() => {
    const counts = { all: seasonEvents.length }
    for (const { id } of EVENT_TAGS) {
      counts[id] = seasonEvents.filter((e) => e.tag === id).length
    }
    return counts
  }, [seasonEvents])

  const filteredEvents = useMemo(() => {
    if (isAllTagFilter(activeTag)) return seasonEvents
    return seasonEvents.filter((e) => e.tag === activeTag)
  }, [seasonEvents, activeTag])

  const upcoming = filteredEvents.filter((item) => item.is_upcoming)
  const past = filteredEvents.filter((item) => !item.is_upcoming)
  const activeTagLabel = EVENT_TAGS.find((t) => t.id === activeTag)?.label

  return (
    <section id="events" className="py-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-3xl font-bold text-white">Our Journey</h1>
        <p className="mt-2 text-white/70">
          From competitions to community outreach — follow Cyber Strix&apos;s progress and upcoming adventures.
        </p>
        <p className="mt-1 text-sm text-white/50">Select an event for full details and photo gallery.</p>

        <div className="mt-6">
          <EventFilterTabs activeFilterId={showAll ? 'all' : seasonId} />
        </div>

        {!showAll && seasonLabel && (
          <p className="mt-4 text-sm text-sky-300/80">{seasonLabel} season</p>
        )}

        {!isEmptySeason && (
          <div className="mt-4">
            <p className="text-xs text-white/50 mb-2">Filter by type</p>
            <EventTagFilter
              activeTag={activeTag}
              onChange={setActiveTag}
              counts={tagCounts}
            />
          </div>
        )}

        {isEmptySeason && !showAll && seasonId === CURRENT_SEASON && (
          <p className="mt-3 text-sm text-white/50">
            No events posted for this season yet.{' '}
            <Link to={eventsPath('2025-26')} className="text-sky-300 hover:text-sky-200 underline-offset-2 hover:underline">
              View 2025–26 events and photos
            </Link>
          </p>
        )}

        {!isEmptySeason && filteredEvents.length === 0 && (
          <p className="mt-6 text-sm text-white/50">
            No {activeTagLabel?.toLowerCase()} events in this view. Try another tag or season.
          </p>
        )}

        <div className="mt-8 space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-sky-300">Upcoming</h2>
            <ul className="mt-3 space-y-3 list-none p-0">
              {upcoming.length === 0 && filteredEvents.length > 0 && (
                <li className="text-sm text-white/50">
                  {showAll ? 'No upcoming events listed.' : `No upcoming events listed for ${seasonLabel}.`}
                </li>
              )}
              {upcoming.map((item) => (
                <li key={`${item.season}-${item.title}`}>
                  <EventCard e={item} showSeason={showAll} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-sky-300">Past Milestones</h2>
            <ul className="mt-3 grid sm:grid-cols-2 gap-4 list-none p-0">
              {past.length === 0 && filteredEvents.length > 0 && (
                <li className="col-span-full text-sm text-white/50">
                  {showAll ? 'No past events listed.' : `No past events listed for ${seasonLabel}.`}
                </li>
              )}
              {past.map((item) => (
                <li key={`${item.season}-${item.title}`}>
                  <EventCard e={item} showSeason={showAll} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function EventCard({ e, showSeason }) {
  const slides = eventSlides(e)

  return (
    <Link
      to={eventPath(e.title)}
      className="block w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 text-left transition hover:border-sky-500/40 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
    >
      {slides[0] ? (
        <div className="aspect-[16/10] w-full overflow-hidden bg-black/40 pointer-events-none">
          <img
            src={slides[0]}
            alt={e.title}
            width={640}
            height={400}
            className="h-full w-full object-cover"
            style={{ objectPosition: imageObjectPosition(e, slides[0]) }}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <div className="text-lg font-semibold text-white">{e.title}</div>
          <EventTagPill tagLabel={e.tagLabel} tagClassName={e.tagClassName} />
          {showSeason && e.seasonLabel && (
            <span className="text-xs rounded-full px-2 py-0.5 bg-white/5 border border-white/10 text-white/60">
              {e.seasonLabel}
            </span>
          )}
        </div>
        <div className="text-sm text-white/80 mt-1">Date: {e.date}</div>
        <div className="text-sm text-white/80">Location: {e.location}</div>
        <p className="mt-2 text-white/70 text-sm line-clamp-3">{e.details}</p>
        <span className="mt-3 inline-flex text-xs font-medium text-sky-300">View details →</span>
      </div>
    </Link>
  )
}
