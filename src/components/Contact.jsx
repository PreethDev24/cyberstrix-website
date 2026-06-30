import { useState, useId } from 'react'
import { Plus, Minus } from 'lucide-react'
import SocialLinks from './SocialLinks'

const CONTACT_EMAIL = 'cyberstrix31022@gmail.com'

const CONTACT_TOPICS = [
  'Sponsorship inquiry',
  'Joining the team',
  'Outreach & collaboration',
  'Media & press',
  'Other',
]

const FAQS = [
  {
    q: 'How can I join Cyber Strix?',
    a: (
      <>
        We recruit new members at the start of every school year. We look for students in grades 9–12 who are
        passionate about STEM. You can join through{' '}
        <a
          href="https://tinyurl.com/FTC-CyberStrix26-27"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-300 hover:text-sky-200 underline-offset-2 hover:underline"
        >
          this link
        </a>
        . No prior experience is needed — just enthusiasm and dedication. Follow us on Instagram for interest
        meeting announcements.
      </>
    ),
  },
  {
    q: 'How can my company sponsor the team?',
    a: 'Check out our Sponsors page for tiers ranging from $250 to $1,000+ per season. We also offer custom packages — contact us directly to discuss what works best for your company. All sponsors receive visibility at competitions, on our robot, and across social media.',
  },
  {
    q: 'Do I need prior robotics experience to join?',
    a: 'Not at all. We teach everything from CAD and programming to mechanical build and business management. The most important qualities are willingness to learn, commitment to the team, and passion for engineering and STEM.',
  },
  {
    q: 'What competitions do you participate in?',
    a: 'We compete in FIRST Tech Challenge (FTC), participating in several NorCal regional qualifiers throughout the season. Our goal is to advance to the NorCal Regional Championship and ultimately the FIRST World Championship.',
  },
  {
    q: 'When and where does the team meet?',
    a: 'We meet Monday–Friday from 7:00 PM to 9:30 PM in Mountain House, CA. During build season (roughly September through March) we may add weekend sessions to ensure our robot is competition-ready.',
  },
  {
    q: 'How do I stay updated on team news and results?',
    a: 'Follow us on Instagram and YouTube for the latest competition results, outreach events, and behind-the-scenes content. You can also check the Events page on this website for updates.',
  },
]

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const topic = String(form.get('topic') || '').trim()
    const message = String(form.get('message') || '').trim()

    const subject = encodeURIComponent(`[Cyber Strix] ${topic}`)
    const body = encodeURIComponent(`Name: ${name}\nReply-To: ${email}\n\n${message}`)
    const href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`

    window.location.href = href
    e.currentTarget.reset()
    setStatus({
      ok: true,
      msg: `Your email app should open with a draft to ${CONTACT_EMAIL}. If nothing opens, copy your message and send it to that address.`,
    })
    setLoading(false)
  }

  return (
    <section id="contact" className="py-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold text-white">Let&apos;s Talk</h1>
          <p className="mt-3 text-white/70">Have questions? Want to sponsor us? Interested in joining? We'd love to hear from you.</p>

          <div className="mt-6 space-y-1 text-sm text-white/80">
            <div>Email: cyberstrix31022@gmail.com</div>
            <div>Meeting Times: Monday–Friday, 7:00–9:30 PM</div>
            <div>Build Season: September–March (plus weekends)</div>
            <div>Location: Mountain House, CA</div>
            <div>Team Number: 31022</div>
            <div className="mt-4">
              <div className="text-white/60 text-xs mb-2">Follow us</div>
              <SocialLinks />
            </div>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-semibold text-white">FAQ</h3>
            <div className="mt-2 divide-y divide-white/10">
              {FAQS.map((item, idx) => (
                <AccordionItem key={idx} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={onSubmit} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/80">Name</label>
                <input
                  name="name"
                  required
                  minLength={1}
                  maxLength={100}
                  className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                />
              </div>
              <div>
                <label className="block text-sm text-white/80">Email</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/80">Topic</label>
                <select name="topic" required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50">
                  {CONTACT_TOPICS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/80">Message</label>
                <textarea
                  name="message"
                  rows="6"
                  required
                  minLength={1}
                  maxLength={5000}
                  className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                />
              </div>
            </div>
            <button disabled={loading} className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 text-black font-semibold disabled:opacity-60">
              {loading ? 'Opening…' : 'Open in email app'}
            </button>
            {status && (
              <div className={`mt-3 text-sm ${status.ok ? 'text-emerald-300' : 'text-red-300'}`}>{status.msg}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function AccordionItem({ item }) {
  const [open, setOpen] = useState(false)
  const contentId = useId()
  return (
    <div className="py-1">
      <button
        type="button"
        className={`w-full flex items-center justify-between text-left py-3 px-2 rounded-lg transition-colors ${open ? 'bg-sky-500/10' : 'hover:bg-white/5'}`}
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-controls={contentId}
      >
        <span className="font-medium text-white/90 pr-4">{item.q}</span>
        <span className={`ml-4 inline-flex h-7 w-7 items-center justify-center rounded-md border ${open ? 'border-sky-400/40 bg-sky-500/10' : 'border-white/15'} text-sky-300`}
          aria-hidden="true"
        >
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div id={contentId} className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="pl-2 border-l border-sky-500/30 ml-2">
            <p className="py-3 text-sm text-white/70">{item.a}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
