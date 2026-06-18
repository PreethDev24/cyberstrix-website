import { useState, useEffect, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { getEventsForSeason, getAllEvents } from '../data/events'
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
  const [openEvent, setOpenEvent] = useState(null)
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
        <h2 className="text-3xl font-bold text-white">Our Journey</h2>
        <p className="mt-2 text-white/70">
          From competitions to community outreach — follow Cyber Strix&apos;s progress and upcoming adventures.
        </p>
        <p className="mt-1 text-sm text-white/50">Tap an event for full details and photo gallery.</p>

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
            <h3 className="text-xl font-semibold text-sky-300">Upcoming</h3>
            <div className="mt-3 space-y-3">
              {upcoming.length === 0 && filteredEvents.length > 0 && (
                <p className="text-sm text-white/50">
                  {showAll ? 'No upcoming events listed.' : `No upcoming events listed for ${seasonLabel}.`}
                </p>
              )}
              {upcoming.map((item) => (
                <EventCard
                  key={`${item.season}-${item.title}`}
                  e={item}
                  showSeason={showAll}
                  onOpen={() => setOpenEvent(item)}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-sky-300">Past Milestones</h3>
            <div className="mt-3 grid sm:grid-cols-2 gap-4">
              {past.length === 0 && filteredEvents.length > 0 && (
                <p className="col-span-full text-sm text-white/50">
                  {showAll ? 'No past events listed.' : `No past events listed for ${seasonLabel}.`}
                </p>
              )}
              {past.map((item) => (
                <EventCard
                  key={`${item.season}-${item.title}`}
                  e={item}
                  showSeason={showAll}
                  onOpen={() => setOpenEvent(item)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <EventDetailDialog event={openEvent} onClose={() => setOpenEvent(null)} />
    </section>
  )
}

function EventCard({ e, showSeason, onOpen }) {
  const slides = eventSlides(e)

  return (
    <button
      type="button"
      onClick={onOpen}
      className="w-full text-left overflow-hidden rounded-xl bg-white/5 border border-white/10 transition hover:border-sky-500/40 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
    >
      {slides[0] ? (
        <div className="aspect-[16/10] w-full overflow-hidden bg-black/40 pointer-events-none">
          <img
            src={slides[0]}
            alt=""
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
    </button>
  )
}

function EventDetailDialog({ event, onClose }) {
  const open = Boolean(event)
  const slides = event ? eventSlides(event) : []
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (event) setIndex(0)
  }, [event])

  const n = slides.length
  const goPrev = useCallback(() => {
    setIndex((i) => (n <= 1 ? i : (i - 1 + n) % n))
  }, [n])
  const goNext = useCallback(() => {
    setIndex((i) => (n <= 1 ? i : (i + 1) % n))
  }, [n])

  useEffect(() => {
    if (!open) return
    const onKey = (ev) => {
      if (ev.key === 'ArrowLeft') goPrev()
      if (ev.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, goPrev, goNext])

  if (!event) return null

  const more = event.more_info || event.details

  return (
    <Dialog.Root open={open} onOpenChange={(v) => !v && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-[min(calc(100vw-1.5rem),42rem)] max-h-[min(calc(100vh-2rem),90vh)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-white/15 bg-zinc-950 p-0 shadow-2xl outline-none"
          onPointerDownOutside={onClose}
        >
          <div className="sticky top-0 z-10 flex justify-end border-b border-white/10 bg-zinc-950/95 px-3 py-2 backdrop-blur">
            <Dialog.Close
              type="button"
              className="rounded-lg p-2 text-white/70 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <div className="px-5 pb-5 pt-1">
            <Dialog.Title className="text-xl font-bold text-white pr-8">{event.title}</Dialog.Title>
            <Dialog.Description asChild>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-white/60">
                <EventTagPill tagLabel={event.tagLabel} tagClassName={event.tagClassName} />
                <span>{event.date}</span>
                <span className="text-white/30">·</span>
                <span>{event.location}</span>
              </div>
            </Dialog.Description>

            {n > 0 && (
              <div className="relative mt-5 overflow-hidden rounded-xl border border-white/10 bg-black/50">
                <div className="aspect-[16/10] w-full">
                  <img
                    src={slides[index]}
                    alt={`${event.title} — ${index + 1} of ${n}`}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: imageObjectPosition(event, slides[index]) }}
                  />
                </div>
                {n > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={goPrev}
                      className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg backdrop-blur transition hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg backdrop-blur transition hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}
                {n > 1 && (
                  <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setIndex(i)}
                        className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-sky-400' : 'w-1.5 bg-white/40 hover:bg-white/60'}`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="mt-5 space-y-3 text-sm leading-relaxed text-white/80">
              <p>{event.details}</p>
              {event.more_info && event.more_info !== event.details && <p className="text-white/70">{event.more_info}</p>}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
