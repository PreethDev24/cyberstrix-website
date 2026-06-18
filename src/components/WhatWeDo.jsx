export default function WhatWeDo() {
  const items = [
    {
      title: 'FTC Robotics',
      text:
        'Competing at the highest level in FIRST Tech Challenge, designing and building advanced robots that push the boundaries of student engineering.',
    },
    {
      title: 'STEM Outreach',
      text:
        'Inspiring younger students through robotics workshops, summer camps, and school visits that spark curiosity in science and technology.',
    },
    {
      title: 'Innovation',
      text:
        'Mastering CAD design, programming, and mechanical systems through real, high-stakes engineering projects.',
    },
    {
      title: 'Leadership',
      text:
        'Empowering students to own projects, develop leadership, and prepare for careers in engineering and STEM.',
    },
  ]
  return (
    <section className="py-16" aria-labelledby="whatwedo-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="font-medium text-white">Impact stats:</div>
          <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { k: '4+', v: 'Competitions per season' },
              { k: '100+', v: 'Students reached via outreach' },
              { k: '10+', v: 'Team members' },
              { k: 'Global', v: 'international outreach reach' },
            ].map((s, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-black/30 p-4">
                <div className="text-2xl font-bold text-teal-400">{s.k}</div>
                <div className="text-xs text-white/70">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl">
          <h2 id="whatwedo-title" className="text-3xl font-bold text-white">Built to Compete</h2>
          <p className="mt-3 text-white/70">
            Building robots, developing skills, and making a difference in our community through hands-on STEM education and real engineering challenges.
          </p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <div key={it.title} className="p-5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-lg font-semibold text-sky-300">{it.title}</div>
              <p className="mt-2 text-sm text-white/70">{it.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-500/5 border border-sky-400/20">
          <blockquote className="text-white text-lg font-medium">
            "We believe everyone should have an opportunity to compete in robotics — not just to learn, but to succeed and have fun."
          </blockquote>
          <p className="mt-3 text-white/70 max-w-3xl">
            Cyber Strix is more than a robotics team. We're a proving ground for the next generation of engineers, leaders, and community builders. Based in Mountain House, CA — competing globally.
          </p>
        </div>
      </div>
    </section>
  )
}
