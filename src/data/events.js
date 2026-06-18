/** Static event list. Each event can include `images` (carousel) and `more_info` (extra copy in the detail view). */

import { SEASONS } from './seasons'
import { enrichEventWithTag } from './eventTags'

export const EVENTS = [
  {
    season: '2025-26',
    title: 'Robotics Camp 2026',
    type: 'Outreach',
    tag: 'camp',
    date: 'February 26 – March 13, 2026',
    location: 'Mountain House, CA',
    details:
      'Cyber Strix ran a multi-week program where kids built and drove their own remote-controlled robots, ' +
      'learning hands-on engineering from registration through the final sessions.',
    more_info:
      'Participants worked through mechanical assembly, wiring, and controller basics — ending with robots they ' +
      'could operate themselves. The camp extended our community outreach right after the competition season.',
    image_url: '/events/robotics-camp-2026/01.png',
    images: [
      '/events/robotics-camp-2026/01.png',
      '/events/robotics-camp-2026/02.png',
      '/events/robotics-camp-2026/03.png',
      '/events/robotics-camp-2026/04.png',
      '/events/robotics-camp-2026/05.png',
      '/events/robotics-camp-2026/06.png',
      '/events/robotics-camp-2026/07.png',
      '/events/robotics-camp-2026/08.png',
      '/events/robotics-camp-2026/09.png',
      '/events/robotics-camp-2026/10.png',
    ],
  },
  {
    season: '2025-26',
    title: 'FTC Qualifier 4',
    type: 'Competition',
    tag: 'competition',
    date: 'February 6, 2026',
    location: 'Mountain House, CA',
    details:
      'The fourth regional qualifier in the NorCal circuit. Cyber Strix competed to earn ' +
      'ranking points toward the NorCal Regional Championship.',
    more_info:
      'Qualifier 4 was a key opportunity to refine autonomous routines, tele-op strategy, and alliance selection ' +
      'before championships. Fans and families attended to cheer on NorCal FTC teams.',
    image_url: '/events/ftc-qualifier-4/01.png',
    images: [
      '/events/ftc-qualifier-4/01.png',
      '/events/ftc-qualifier-4/02.png',
      '/events/ftc-qualifier-4/03.png',
      '/events/ftc-qualifier-4/04.png',
      '/events/ftc-qualifier-4/05.png',
      '/events/ftc-qualifier-4/06.png',
      '/events/ftc-qualifier-4/07.png',
      '/events/ftc-qualifier-4/08.png',
      '/events/ftc-qualifier-4/09.png',
      '/events/ftc-qualifier-4/10.png',
      '/events/ftc-qualifier-4/11.png',
      '/events/ftc-qualifier-4/12.png',
    ],
  },
  {
    season: '2025-26',
    title: 'International Outreach — Gadag, India',
    type: 'Outreach',
    tag: 'outreach',
    date: 'February 3, 2026',
    location: 'Gadag, India',
    details:
      'Cyber Strix traveled internationally to Gadag, India to run STEM education workshops for local ' +
      'students, sharing robotics knowledge and inspiring the next generation of engineers globally.',
    more_info:
      'Sessions covered basic programming logic, robot mechanisms, and teamwork — mirroring how we learn at home ' +
      'while adapting activities for the classroom. Outreach like this reflects FIRST’s mission beyond the playing field.',
    image_url: '/events/outreach-gadag/01.png',
    images: [
      '/events/outreach-gadag/01.png',
      '/events/outreach-gadag/02.png',
      '/events/outreach-gadag/03.png',
      '/events/outreach-gadag/04.png',
    ],
  },
  {
    season: '2025-26',
    title: 'Bethany STEAM Fair',
    type: 'Outreach',
    tag: 'outreach',
    date: 'January 28, 2026',
    location: 'Bethany School',
    details:
      'Cyber Strix participated in the Bethany STEAM Fair, running hands-on robotics demonstrations and ' +
      'inspiring elementary and middle school students about engineering and technology.',
    more_info:
      'Students drove demo bots, saw CAD on a laptop, and asked questions about competition and club life. ' +
      'Events like this help us recruit future members and give back to our community.',
    image_url: '/events/bethany-steam-fair/01.png',
    images: [
      '/events/bethany-steam-fair/01.png',
      '/events/bethany-steam-fair/02.png',
      '/events/bethany-steam-fair/03.png',
      '/events/bethany-steam-fair/04.png',
      '/events/bethany-steam-fair/05.png',
      '/events/bethany-steam-fair/06.png',
    ],
    imageObjectPositions: {
      '/events/bethany-steam-fair/02.png': 'center 62%',
    },
  },
  {
    season: '2025-26',
    title: 'Hansen STEAM Fair',
    type: 'Outreach',
    tag: 'outreach',
    date: 'January 13, 2026',
    location: 'Hansen School',
    details:
      "The team ran interactive robotics booths at Hansen School's STEAM Fair, engaging with hundreds of " +
      'students and families to spark interest in engineering and computer science.',
    more_info:
      'We brought field elements and small demos so kids could see cause-and-effect in mechanisms firsthand. ' +
      'Parents learned about FTC and how to support local STEM programs.',
    image_url: '/events/hansen-steam-fair.svg',
    images: ['/events/hansen-steam-fair.svg', '/events/bethany-steam-fair.svg', '/events/outreach-gadag.svg'],
  },
  {
    season: '2025-26',
    title: 'FTC Qualifier 3',
    type: 'Competition',
    tag: 'competition',
    date: 'January 9, 2026',
    location: 'NorCal, CA',
    details:
      'The third regional qualifier of the 2025–26 season. The team competed with their refined robot, ' +
      'applying improvements from previous qualifiers to climb the rankings.',
    more_info:
      'Between matches, drive team debriefed with coaches, and the pit crew iterated on reliability fixes. ' +
      'Scouting data from Qualifier 2 shaped our match strategy.',
    image_url: '/events/ftc-qualifier-3/01.png',
    images: [
      '/events/ftc-qualifier-3/01.png',
      '/events/ftc-qualifier-3/02.png',
      '/events/ftc-qualifier-3/03.png',
      '/events/ftc-qualifier-3/04.png',
      '/events/ftc-qualifier-3/05.png',
      '/events/ftc-qualifier-3/06.png',
      '/events/ftc-qualifier-3/07.png',
      '/events/ftc-qualifier-3/08.png',
      '/events/ftc-qualifier-3/09.png',
    ],
  },
  {
    season: '2025-26',
    title: 'FTC Qualifier 2',
    type: 'Competition',
    tag: 'competition',
    date: 'December 12, 2025',
    location: 'NorCal, CA',
    details:
      'Second regional qualifier of the season. The team made significant improvements to the robot design ' +
      'based on lessons learned at Qualifier 1.',
    more_info:
      'Software added sensor feedback for more consistent autonomous scoring; mechanical subsystems were stiffened ' +
      'after stress-testing in practice. Every qualifier is a learning lab for the next one.',
    image_url: '/events/ftc-qualifier-2/01.png',
    images: [
      '/events/ftc-qualifier-2/01.png',
      '/events/ftc-qualifier-2/02.png',
      '/events/ftc-qualifier-2/03.png',
    ],
  },
  {
    season: '2025-26',
    title: 'FTC Qualifier 1',
    type: 'Competition',
    tag: 'competition',
    date: 'November 14, 2025',
    location: 'NorCal, CA',
    details:
      'The opening competition of the 2025–26 season. The team debuted their robot design and gained ' +
      'valuable experience competing against top NorCal teams.',
    more_info:
      'First outing of the year sets a baseline for cycle times, autonomous consistency, and drive practice. ' +
      'We left with a clear punch list for the weeks leading into Qualifier 2.',
    image_url: '/events/ftc-qualifier-1/01.png',
    images: [
      '/events/ftc-qualifier-1/01.png',
      '/events/ftc-qualifier-1/02.png',
      '/events/ftc-qualifier-1/03.png',
      '/events/ftc-qualifier-1/04.png',
    ],
  },
  {
    season: '2025-26',
    title: 'Robotics Summer Camp 2025',
    type: 'Outreach',
    tag: 'camp',
    date: 'July 14–25, 2025',
    location: 'Mountain House, CA',
    details:
      'A two-week summer camp run by Cyber Strix where students learned the basics of robotics, programming, ' +
      'and engineering through hands-on projects and challenges.',
    more_info:
      'Campers worked in small groups with mentors from the team, progressing from simple mechanisms to mini-games ' +
      'and a Friday showcase for families. Many alumni of camp later join the team formally.',
    image_url: '/events/summer-camp-2025/01.png',
    images: [
      '/events/summer-camp-2025/01.png',
      '/events/summer-camp-2025/02.png',
      '/events/summer-camp-2025/03.png',
      '/events/summer-camp-2025/04.png',
      '/events/summer-camp-2025/05.png',
      '/events/summer-camp-2025/06.png',
      '/events/summer-camp-2025/07.png',
      '/events/summer-camp-2025/08.png',
    ],
  },
]

/** Parse event date strings; date ranges use the end date for ordering. */
function eventSortTime(dateStr) {
  const endPart = dateStr.includes('–') ? dateStr.split('–').pop().trim() : dateStr
  const t = Date.parse(endPart)
  return Number.isNaN(t) ? 0 : t
}

function mapEvent(event) {
  return enrichEventWithTag({
    ...event,
    seasonLabel: SEASONS.find((s) => s.id === event.season)?.label ?? event.season,
  })
}

export function getEventsForSeason(seasonId) {
  return EVENTS.filter((e) => e.season === seasonId)
    .sort((a, b) => eventSortTime(b.date) - eventSortTime(a.date))
    .map(mapEvent)
}

/** All events across seasons, newest first (for the “All” tab). */
export function getAllEvents() {
  return [...EVENTS]
    .sort((a, b) => eventSortTime(b.date) - eventSortTime(a.date))
    .map(mapEvent)
}
