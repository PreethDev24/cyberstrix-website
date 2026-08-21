import CountUp from './CountUp'
import { TEAM_FACTS } from '../data/site'

export default function About() {
  return (
    <section id="about" className="py-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold text-white">About Us</h1>
          <div className="mt-6 space-y-4 text-white/80">
            <p>
              A student-led team of passionate high school engineers, programmers, and designers competing in the FIRST Tech Challenge.
            </p>
            <p>
              We compete in FIRST Tech Challenge and are in our second year at the moment. We joined for the FTC DECODE season and have competed in four events, earning 2nd Place Finalist Alliance at the 2026 North East League Tournament.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Our Mission</h3>
          <p className="mt-3 text-white/70">
            Building competitive robots while expanding STEM access for younger students and developing the next generation of innovators.
          </p>
          <p className="mt-2 text-white/70">
            We run robotics workshops, summer camps, and school outreach programs that bring hands-on engineering to students who might not otherwise get the chance to experience it.
          </p>
          <p className="mt-2 text-white/70">
            Every member brings something different to the team: their own experience, knowledge, and expertise. Working together, we build something amazing.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {[
              { t: 'Engineering Excellence', d: 'Designing and building robots with precision, creativity, and relentless improvement.' },
              { t: 'Technical Mastery', d: 'Learning programming, CAD, and mechanical systems through real projects.' },
              { t: 'Collaboration', d: 'Every voice matters and the best idea wins — regardless of who had it.' },
              { t: 'Community Impact', d: 'Inspiring the next generation through accessible STEM outreach.' },
            ].map(v => (
              <div key={v.t} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="font-medium text-sky-300">{v.t}</div>
                <p className="mt-1 text-sm text-white/70">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-12">
        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-xl font-semibold text-white">Cyber Strix at a glance</h2>
          <p className="mt-2 text-sm text-white/60">
            Key facts about FTC Team 31022 for students, parents, sponsors, and partners.
          </p>
          <dl className="mt-6 grid sm:grid-cols-2 gap-4">
            {TEAM_FACTS.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-white/10 bg-black/30 p-4">
                <dt className="text-xs uppercase tracking-[0.18em] text-sky-300/80">{fact.label}</dt>
                <dd className="mt-2 text-sm text-white/80">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-12">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-xl font-semibold text-white">What is FTC?</h3>
          <p className="mt-2 text-white/80">
            FIRST Tech Challenge (FTC) is a robotics competition designed for students in grades 7–12. Teams design, build, and program robots to compete in an alliance format against other teams.
          </p>
          <p className="mt-2 text-white/70">
            FTC isn&apos;t just about building robots. It&apos;s about learning teamwork, problem-solving, and real-world engineering skills that prepare students for careers in STEM.
          </p>
          <p className="mt-2 text-white/70">
            Each season brings a new game challenge that requires teams to rethink their approach from scratch, keeping every year fresh and demanding.
          </p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { n: 3000, v: 'Teams worldwide' },
              { n: 50, v: 'Countries' },
              { n: 100000, v: 'Students' },
              { n: 30, v: 'Years of FIRST' },
            ].map((s, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-sky-300 tabular-nums">
                  <CountUp to={s.n} separator="," />
                  +
                </div>
                <div className="text-xs text-white/70">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
