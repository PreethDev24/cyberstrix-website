import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 text-center">
      <Seo
        title="Page Not Found"
        description="The page you are looking for does not exist on the Cyber Strix website."
        path="/404"
        noIndex
      />
      <p className="text-sm font-medium text-sky-300">404</p>
      <h1 className="mt-2 text-3xl font-bold text-white">Page not found</h1>
      <p className="mt-3 text-white/70">
        That URL is not on our site. Try one of the links below.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:border-sky-400/40 hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/members"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:border-sky-400/40 hover:text-white"
        >
          Team Members
        </Link>
        <Link
          to="/events"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:border-sky-400/40 hover:text-white"
        >
          Events
        </Link>
        <Link
          to="/contact"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:border-sky-400/40 hover:text-white"
        >
          Contact
        </Link>
      </div>
    </div>
  )
}
