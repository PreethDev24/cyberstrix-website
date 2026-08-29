import { Link } from 'react-router-dom'
import { getEventBySlug, eventPath } from '../data/events'

function eventSlides(event) {
  if (event?.images?.length) return event.images
  if (event?.image_url) return [event.image_url]
  return []
}

export default function Highlights() {
  const qualifier4 = getEventBySlug('ftc-qualifier-4')
  const gadag = getEventBySlug('international-outreach-gadag-india')

  const q4Slides = eventSlides(qualifier4)
  const q4Image = q4Slides.length >= 2 ? q4Slides[q4Slides.length - 2] : q4Slides[0]
  const gadagImage = eventSlides(gadag)[0]

  return (
    <section id="highlights" className="py-16 border-t border-white/10" aria-labelledby="highlights-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 id="highlights-title" className="text-3xl font-bold text-white">
            Highlights
          </h2>
          <p className="mt-3 text-white/70">
            Competition results and outreach that takes STEM beyond our own community.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col justify-center py-2">
            <p className="text-sm uppercase tracking-[0.2em] text-sky-300/80">Award</p>
            <h3 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
              2nd Place Finalist Alliance
            </h3>
            <p className="mt-3 text-lg text-white/80">FTC Qualifier 4 · 2026 North East League</p>
            <p className="mt-4 text-white/60 max-w-md">
              Won at Qualifier 4 during our DECODE season, a key result on the path toward the NorCal
              Regional Championship.
            </p>
          </div>

          {qualifier4 && q4Image && (
            <Link
              to={eventPath(qualifier4.title)}
              className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-sky-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
            >
              <div className="aspect-[16/10] overflow-hidden bg-black/40">
                <img
                  src={q4Image}
                  alt={`${qualifier4.title} — Cyber Strix at competition`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-300/80">Featured event</p>
                <h3 className="mt-2 text-2xl font-bold text-white group-hover:text-sky-200 transition-colors">
                  {qualifier4.title}
                </h3>
                <p className="mt-1 text-sm text-white/50">
                  {qualifier4.date} · {qualifier4.location}
                </p>
                <p className="mt-3 text-sm text-white/70 line-clamp-3">
                  Home of our 2nd Place Finalist Alliance. Cyber Strix competed for ranking points
                  toward the NorCal Regional Championship.
                </p>
                <span className="mt-4 inline-block text-sm text-sky-300 group-hover:text-sky-200">
                  View photos &amp; details →
                </span>
              </div>
            </Link>
          )}
        </div>

        {gadag && gadagImage && (
          <div className="mt-12 grid lg:grid-cols-2 gap-8 items-stretch">
            <Link
              to={eventPath(gadag.title)}
              className="group order-2 lg:order-1 block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-sky-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
            >
              <div className="aspect-[16/10] overflow-hidden bg-black/40">
                <img
                  src={gadagImage}
                  alt="Cyber Strix online STEM exchange with students in Gadag, India"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6 lg:hidden">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-300/80">Outreach</p>
                <h3 className="mt-2 text-2xl font-bold text-white">Gadag, India</h3>
                <p className="mt-1 text-sm text-white/50">
                  {gadag.date} · {gadag.location}
                </p>
                <span className="mt-4 inline-block text-sm text-sky-300">View photos &amp; details →</span>
              </div>
            </Link>

            <div className="order-1 lg:order-2 flex flex-col justify-center py-2">
              <p className="text-sm uppercase tracking-[0.2em] text-sky-300/80">Outreach</p>
              <h3 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
                STEM exchange with rural India
              </h3>
              <p className="mt-3 text-lg text-white/80">Online session with ~80 students in Gadag</p>
              <p className="mt-4 text-white/60 max-w-md">
                A multi-hour virtual meetup where Cyber Strix and around 80 students in Gadag traded ideas, STEM
                knowledge, and showcases of what each side built.
              </p>
              <Link
                to={eventPath(gadag.title)}
                className="mt-5 hidden lg:inline-flex text-sm text-sky-300 hover:text-sky-200"
              >
                View photos &amp; details →
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
