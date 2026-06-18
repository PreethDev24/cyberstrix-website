import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const LOGO = 'https://flamesimagestorage.blob.core.windows.net/files/048b51bf-77e6-48b5-9da9-6c8f3c3ec493_1773803815459_prj_ndxbgk0s/100d8a0a-20ac-441c-995f-42fb9e8dfdc3-Cyber_Strix_Logo.png'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About', end: true },
  { to: '/members', label: 'Members', end: false },
  { to: '/events', label: 'Events', end: false, matchPrefix: '/events' },
  { to: '/sponsors', label: 'Sponsors', end: true },
  { to: '/contact', label: 'Contact', end: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const barStyle = scrolled || open ? 'backdrop-blur-md bg-black/60 border-b border-white/10' : 'bg-transparent'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${barStyle}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img src={LOGO} alt="Cyber Strix logo" className="w-10 h-10 object-contain" />
            <div className="leading-tight">
              <div className="text-lg font-bold text-white tracking-tight">Cyber Strix</div>
              <div className="text-[11px] text-sky-300">FTC Team 31022</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                end={l.end}
                className={({ isActive }) => {
                  const active = l.matchPrefix
                    ? location.pathname.startsWith(l.matchPrefix)
                    : isActive
                  return `text-sm transition-colors ${active ? 'text-sky-300' : 'text-white/80 hover:text-white'}`
                }}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 pt-1 space-y-2 border-t border-white/10">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                end={l.end}
                className={({ isActive }) => {
                  const active = l.matchPrefix
                    ? location.pathname.startsWith(l.matchPrefix)
                    : isActive
                  return `block py-1 text-sm transition-colors ${active ? 'text-sky-300' : 'text-white/90 hover:text-white'}`
                }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
