import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function RouteFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-6 text-white/70">
      <p className="text-sm">Loading…</p>
    </div>
  )
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white">
      <Navbar />
      <main className="pt-20">
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
