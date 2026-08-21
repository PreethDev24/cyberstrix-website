export default function Hero() {
  return (
    <section id="home" className="relative pt-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.06),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">Cyber Strix</h1>
          <p className="mt-4 text-xl text-white/80">Engineering the future. Inspiring the next generation.</p>
          <p className="mt-4 text-white/70 max-w-xl">
            A student-led FTC team from Mountain House designing, building, and programming competitive
            robots while expanding STEM access in our community and beyond.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { k: '4+ ', v: 'Qualifiers this season' },
              { k: 'NorCal', v: 'Regional target' },
              { k: '10+ ', v: 'Team members' },
              { k: '150+ ', v: 'Students reached' },
            ].map((s, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-sky-300">{s.k}</div>
                <div className="text-xs text-white/70">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-2xl">
          <img
            src="/hero-team.png?v=2"
            alt="Cyber Strix team with robot at competition"
            width={800}
            height={600}
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
