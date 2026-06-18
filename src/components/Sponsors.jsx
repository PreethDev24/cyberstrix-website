import { Link } from 'react-router-dom'
import { Check, DollarSign, Star } from 'lucide-react'
import GlareHover from './GlareHover'

const currentSponsors = [
  {
    name: 'Polymaker',
    category: '3D Filament Partner',
    description: 'Providing high-quality filament for our robot parts.',
    href: 'https://polymaker.com',
    logo: '/sponsors/polymaker.png',
  },
]

const tiers = [
  {
    id: 'bronze',
    label: 'Bronze',
    price: '$250+',
    checkClass: 'text-amber-600',
    badgeClass: 'border border-amber-800/50 bg-amber-950/60 text-amber-600',
    cardClass: 'border border-white/10',
    benefits: [
      'Logo on team website',
      'Social media recognition',
      'Certificate of appreciation',
      'Team newsletter updates',
    ],
  },
  {
    id: 'silver',
    label: 'Silver',
    price: '$500+',
    checkClass: 'text-zinc-400',
    badgeClass: 'border border-zinc-600/50 bg-zinc-800/80 text-zinc-300',
    cardClass: 'border border-white/10',
    benefits: [
      'All Bronze benefits',
      'Logo on team t-shirts',
      'Banner at competitions',
      'Invitation to team events',
      'Quarterly progress reports',
    ],
  },
  {
    id: 'gold',
    label: 'Gold',
    price: '$1,000+',
    checkClass: 'text-amber-400',
    badgeClass: 'border border-amber-500/40 bg-amber-950/50 text-amber-400',
    cardClass:
      'border-2 border-teal-400/50 shadow-[0_0_50px_-12px_rgba(34,211,238,0.45)] ring-1 ring-teal-400/20',
    highlight: true,
    benefits: [
      'All Silver benefits',
      'Logo on robot & pit display',
      'Featured sponsor spotlight',
      'VIP access to competitions',
      'Speaking opportunity at events',
      'Direct student mentorship connection',
    ],
  },
]

export default function Sponsors() {
  return (
    <section id="sponsors" className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="pb-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Our Current Sponsors</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-400 md:text-base">
              Powering our innovation through their generous support
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <ul className="flex flex-col items-stretch gap-4">
              {currentSponsors.map((s) => {
                const inner = (
                  <>
                    {s.logo ? (
                      <img
                        src={s.logo}
                        alt={`${s.name} logo`}
                        className="h-14 w-14 shrink-0 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-500/10 text-xl font-bold text-white"
                        aria-hidden
                      >
                        {s.initial}
                      </div>
                    )}
                    <div className="min-w-0 flex-1 text-center sm:text-left">
                      <h3 className="text-lg font-semibold text-white">{s.name}</h3>
                      <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-teal-400/90">
                        {s.category}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.description}</p>
                    </div>
                  </>
                )

                return (
                  <li key={s.name}>
                    {s.href ? (
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 transition hover:border-teal-400/30 hover:bg-white/[0.05] sm:flex-row sm:items-center sm:gap-6"
                      >
                        {inner}
                      </a>
                    ) : (
                      <article className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 sm:flex-row sm:items-center sm:gap-6">
                        {inner}
                      </article>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <p className="mx-auto max-w-2xl text-center text-base text-zinc-400">
          Your sponsorship enables us to build competitive robots, compete at the highest level, and inspire the next
          generation of engineers through community outreach.
        </p>

        <div className="mt-14 text-center">
          <h2 className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Sponsorship Tiers
          </h2>
          <p className="mt-3 text-sm text-zinc-400 md:text-base">Choose the level that works best for you</p>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-teal-400 to-green-400" />
        </div>

        <div className="mt-12 grid gap-6 pt-4 md:grid-cols-3 md:gap-5 md:pt-6 lg:gap-8">
          {tiers.map((t) => (
            <GlareHover
              key={t.id}
              width="100%"
              height="100%"
              minHeight="420px"
              background="#09090b"
              borderRadius="1rem"
              borderColor="transparent"
              glareColor="#ffffff"
              glareOpacity={0.22}
              glareAngle={-45}
              glareSize={250}
              transitionDuration={650}
              playOnce={false}
              className={`flex flex-col ${t.cardClass}`}
            >
              <div className="relative flex h-full flex-col p-8">
                {t.highlight && (
                  <div className="absolute -top-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full border border-teal-400/40 bg-gradient-to-r from-teal-400 to-emerald-400 px-3 py-1 text-xs font-bold text-zinc-900 shadow-lg">
                    <Star className="h-3.5 w-3.5 fill-zinc-900 text-zinc-900" aria-hidden />
                    Most Popular
                  </div>
                )}

                <div className="flex flex-col items-center">
                  <span
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide ${t.badgeClass}`}
                  >
                    {t.label}
                  </span>
                </div>

                <div className="mt-6 text-center">
                  <span className="text-4xl font-bold text-white tabular-nums">{t.price}</span>
                  <span className="mt-1 block text-sm text-zinc-500">per season</span>
                </div>

                <ul className="mt-8 flex flex-1 flex-col gap-3 text-left text-sm text-zinc-300">
                  {t.benefits.map((b) => (
                    <li key={b} className="flex gap-3">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${t.checkClass}`} strokeWidth={2.5} aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {t.highlight ? (
                  <Link
                    to="/contact"
                    className="relative z-10 mt-10 block w-full rounded-xl bg-gradient-to-r from-teal-400 to-green-400 py-3.5 text-center text-sm font-bold text-zinc-900 shadow-lg transition hover:brightness-110"
                  >
                    Become a Gold Sponsor
                  </Link>
                ) : (
                  <Link
                    to="/contact"
                    className="relative z-10 mt-10 block w-full rounded-xl border border-white/15 bg-zinc-900/40 py-3.5 text-center text-sm font-medium text-white transition hover:border-white/25 hover:bg-zinc-900/60"
                  >
                    Become a {t.label} Sponsor
                  </Link>
                )}
              </div>
            </GlareHover>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/95 via-zinc-950 to-teal-950/25 px-6 py-12 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.04),inset_0_1px_0_rgba(255,255,255,0.06)] sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-400/25 bg-teal-500/10 text-teal-400 shadow-[0_0_24px_-4px_rgba(45,212,191,0.35)]">
            <DollarSign className="h-8 w-8" strokeWidth={2.2} aria-hidden />
          </div>
          <h3 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">Ready to Make an Impact?</h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Join our growing list of sponsors and help us build the future of STEM education in our community. Every
            contribution makes a difference.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:gap-5">
            <Link
              to="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 px-8 py-3 text-center text-xs font-bold uppercase tracking-wide text-white shadow-lg transition hover:brightness-110 sm:text-sm"
            >
              Contact us today
            </Link>
            <a
              href="mailto:cyberstrix31022@gmail.com"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-teal-400/50 bg-zinc-950/80 px-5 py-3 text-center text-[10px] font-semibold uppercase leading-snug tracking-wide text-teal-400 transition hover:border-teal-300 hover:bg-zinc-900/90 sm:px-6 sm:text-[11px]"
            >
              Email: cyberstrix31022@gmail.com
            </a>
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-zinc-400">
          Custom sponsorship packages available.{' '}
          <Link to="/contact" className="font-medium text-teal-400 transition hover:text-teal-300">
            Contact us
          </Link>{' '}
          to discuss.
        </p>
      </div>
    </section>
  )
}
