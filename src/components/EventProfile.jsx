import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react'
import EventTagPill from './EventTagPill'
import { eventPath } from '../data/events'
import { eventsPath } from '../data/seasons'

function eventSlides(event) {
  if (event.images?.length) return event.images
  if (event.image_url) return [event.image_url]
  return []
}

function imageObjectPosition(event, src) {
  return event?.imageObjectPositions?.[src] ?? 'center'
}

export default function EventProfile({ event }) {
  const slides = eventSlides(event)
  const [index, setIndex] = useState(0)
  const n = slides.length

  useEffect(() => {
    setIndex(0)
  }, [event.title])

  const goPrev = useCallback(() => {
    setIndex((i) => (n <= 1 ? i : (i - 1 + n) % n))
  }, [n])

  const goNext = useCallback(() => {
    setIndex((i) => (n <= 1 ? i : (i + 1) % n))
  }, [n])

  useEffect(() => {
    const onKey = (ev) => {
      if (ev.key === 'ArrowLeft') goPrev()
      if (ev.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goPrev, goNext])

  const more = event.more_info || event.details

  return (
    <article className="mx-auto max-w-3xl px-6 py-8">
      <Link
        to={eventsPath(event.season)}
        className="inline-flex items-center gap-2 text-sm text-sky-300 transition hover:text-sky-200"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to events
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-bold text-white">{event.title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-white/60">
          <EventTagPill tagLabel={event.tagLabel} tagClassName={event.tagClassName} />
          <span>{event.date}</span>
          <span className="text-white/30">·</span>
          <span>{event.location}</span>
          {event.seasonLabel && (
            <>
              <span className="text-white/30">·</span>
              <span>{event.seasonLabel} season</span>
            </>
          )}
        </div>
      </header>

      {n > 0 && (
        <div className="relative mt-6 overflow-hidden rounded-xl border border-white/10 bg-black/50">
          <div className="aspect-[16/10] w-full">
            <img
              src={slides[index]}
              alt={`${event.title} — photo ${index + 1} of ${n}`}
              width={640}
              height={400}
              className="h-full w-full object-cover"
              style={{ objectPosition: imageObjectPosition(event, slides[index]) }}
            />
          </div>
          {n > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg backdrop-blur transition hover:bg-black/75"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg backdrop-blur transition hover:bg-black/75"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
      )}

      <div className="mt-6 space-y-3 text-sm leading-relaxed text-white/80">
        <p>{event.details}</p>
        {event.more_info && event.more_info !== event.details && (
          <p className="text-white/70">{more}</p>
        )}
      </div>

      <p className="sr-only">
        Event page for {event.title} by Cyber Strix FTC Team 31022. Permalink: {eventPath(event.title)}
      </p>
    </article>
  )
}
