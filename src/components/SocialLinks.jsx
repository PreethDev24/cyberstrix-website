import { Instagram, Youtube } from 'lucide-react'
import { SOCIAL_LINKS } from '../data/socials'

const ICONS = {
  Instagram,
  YouTube: Youtube,
}

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {SOCIAL_LINKS.map((link) => {
        const Icon = ICONS[link.label]
        return (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2.5 text-white/80 transition hover:border-sky-400/40 hover:bg-white/10 hover:text-white"
            >
              {Icon ? <Icon className="h-5 w-5 text-sky-300" aria-hidden /> : null}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
