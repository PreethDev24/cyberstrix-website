import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import WhatWeDo from './pages/WhatWeDo'
import MembersRoute from './pages/MembersRoute'
import EventsRoute from './pages/EventsRoute'
import Sponsors from './pages/Sponsors'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="what-we-do" element={<WhatWeDo />} />
        <Route path="members" element={<MembersRoute />} />
        <Route path="members/:param" element={<MembersRoute />} />
        <Route path="events" element={<EventsRoute />} />
        <Route path="events/:param" element={<EventsRoute />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
