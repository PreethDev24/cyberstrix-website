import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Layout from './components/Layout'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Members = lazy(() => import('./pages/Members'))
const Events = lazy(() => import('./pages/Events'))
const Sponsors = lazy(() => import('./pages/Sponsors'))
const Contact = lazy(() => import('./pages/Contact'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="members" element={<Members />} />
          <Route path="members/:seasonId" element={<Members />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:seasonId" element={<Events />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
