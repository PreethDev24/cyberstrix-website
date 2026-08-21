import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks'

const LOGO = 'https://flamesimagestorage.blob.core.windows.net/files/048b51bf-77e6-48b5-9da9-6c8f3c3ec493_1773803815459_prj_ndxbgk0s/100d8a0a-20ac-441c-995f-42fb9e8dfdc3-Cyber_Strix_Logo.png'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="Cyber Strix logo" className="w-9 h-9 object-contain" />
            <div className="text-lg font-bold text-white tracking-tight">Cyber Strix — FTC Team 31022</div>
          </div>
          <p className="mt-2 text-sm text-white/70">
            A student-led FTC robotics team dedicated to engineering excellence, innovation, and inspiring the next generation of STEM leaders.
          </p>
          <p className="mt-2 text-xs text-white/60">© 2026 Cyber Strix. All rights reserved. FIRST Tech Challenge is a registered trademark of FIRST.</p>
        </div>
        <div>
          <div className="font-semibold text-white">Links</div>
          <ul className="mt-2 text-sm text-white/80 space-y-1">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/what-we-do', label: 'What We Do' },
              { to: '/events', label: 'Events' },
              { to: '/members', label: 'Members' },
              { to: '/sponsors', label: 'Sponsors' },
              { to: '/contact', label: 'Contact' },
            ].map(l => (
              <li key={l.to}><Link to={l.to} className="hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Contact</div>
          <ul className="mt-2 text-sm text-white/80 space-y-1">
            <li>cyberstrix31022@gmail.com</li>
            <li>Mon–Fri, 7–9:30 PM</li>
            <li>Mountain House, CA</li>
            <li className="mt-3">
              <div className="text-white/60 text-xs mb-2">Follow us</div>
              <SocialLinks />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
