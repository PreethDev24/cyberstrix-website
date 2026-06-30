/** Team roster by FTC season. `images` powers the profile carousel; fall back to `imageSrc` when building cards. */

import { slugify } from '../lib/slugs.js'

const TEAM_SNAPS = [
  '/events/ftc-qualifier-4.svg',
  '/events/robotics-summer-camp-2025.svg',
  '/events/bethany-steam-fair.svg',
]

function gallery(primary, extras = TEAM_SNAPS) {
  const base = primary ? [primary, ...extras] : [...extras]
  return base.slice(0, 3)
}

const LEADERS_2025_26 = [
  {
    name: 'Rohan Sugate',
    role: 'Captain',
    grade: '11',
    specialties: 'Programming, Outreach, Build, Treasurer',
    bio: 'Team Captain, Driver, Programmer, and Outreach Manager.',
    more_bio:
      'Rohan, founder of Cyber Strix, sets strategy for the season, keeps meetings on track, and represents the team with judges and ' +
      'the community. As the team driver, he led match execution and helped carry Cyber Strix to key wins throughout the season. ' +
      'He also handled sponsorship spending and budget execution, making sure team funds were used where they mattered most. ' +
      'He bridges software and outreach so our robot story reaches sponsors and new students alike.',
    imageSrc: '/members/rohan.png',
    linkedin_url: 'https://www.linkedin.com/in/rohan-sugate/',
    images: gallery('/members/rohan.png'),
  },
  {
    name: 'Shreeansh Shinde',
    role: 'Co-Captain',
    grade: '11',
    specialties: 'CAD, Build',
    bio: 'Co-Captain leading CAD and Build.',
    more_bio:
      'Shreeansh, co-founder of Cyber Strix, leads mechanical design and assembly, turning CAD into a reliable robot on the field. ' +
      'He mentors newer builders on tool safety, iteration, and how to document design decisions for the notebook.',
    imageSrc: '/members/shreeansh.png',
    linkedin_url: 'https://www.linkedin.com/in/shreeansh-shinde-705a25371/',
    images: gallery('/members/shreeansh.png'),
  },
]

const ENGINEERS_2025_26 = [
  {
    name: 'Shresta Bollu',
    role: 'Programming',
    grade: '11',
    bio: 'Programming Lead.',
    more_bio:
      'Shresta owns autonomous paths, driver controls, and code review. She helps the team practice Git workflows ' +
      'and keeps the codebase organized as features land late in the season.',
    specialties: 'Programming, Build',
    imageSrc: '/members/shresta.png',
    images: gallery('/members/shresta.png'),
  },
  {
    name: 'Preeth Nambiar',
    role: 'Treasurer',
    grade: '11',
    bio: 'Programmer, Treasurer, and Scout.',
    more_bio:
      'Preeth splits time between software features and treasury operations — making sure funds were routed to the correct team account, ' +
      'tracking transfers accurately, and keeping sponsor and expense records organized. Scout during competition day — tracks matches and alliance options for the drive team.',
    specialties: 'Programming, Treasurer, Build, Scout',
    imageSrc: '/members/preeth.png',
    linkedin_url: 'https://www.linkedin.com/in/preeth-nambiar-30090a37b/',
    images: gallery('/members/preeth.png'),
  },
  {
    name: 'Pranav Nittala',
    role: 'Engineer',
    grade: '9',
    bio: 'Builder and CAD.',
    more_bio:
      'Pranav supports both the machine shop and the CAD room, learning fast-prototype cycles and how drawings ' +
      'translate to parts on the robot.',
    specialties: 'Build, CAD',
    imageSrc: null,
    images: [...TEAM_SNAPS],
  },
  {
    name: 'Bea Verdan',
    role: 'Engineer',
    grade: '11',
    bio: 'CAD and Build.',
    more_bio:
      'Bea iterates intake and chassis models with the drive team, then helps translate designs into machined ' +
      'and printed components.',
    specialties: 'CAD, Build',
    imageSrc: '/members/bea.png',
    images: gallery('/members/bea.png'),
  },
  {
    name: 'Sebastian Hernandez',
    role: 'Engineer',
    grade: '9',
    bio: 'Builder.',
    more_bio:
      'Sebastian focuses on robust assembly and pit repairs — making sure mechanisms survive practice matches ' +
      'before we load in at qualifiers.',
    specialties: 'Build, CAD',
    imageSrc: '/members/sebastian.png',
    images: gallery('/members/sebastian.png'),
  },
  {
    name: 'Harshita Pandey',
    role: 'Engineer',
    grade: '10',
    bio: 'Programmer.',
    more_bio:
      'Harshita works across subsystems during build season, from wiring support to mechanical adjustments ' +
      'during test matches.',
    specialties: 'Programming',
    imageSrc: '/members/harshita.png',
    linkedin_url: 'https://www.linkedin.com/in/harshita-pandey-3b2b2a353/',
    images: gallery('/members/harshita.png'),
  },
  {
    name: 'Nikil Sriram',
    role: 'Engineer',
    grade: '10',
    bio: 'Builder.',
    more_bio:
      'Nikil contributes to frame and mechanism integration, collaborating with CAD on clearances and with ' +
      'programming on sensor placement.',
    specialties: 'Build',
    imageSrc: '/members/nikil.png',
    images: gallery('/members/nikil.png'),
  },
  {
    name: 'Shantanu Prakash',
    role: 'Engineer',
    grade: '11',
    bio: 'Builder, camp leader, and Scout.',
    more_bio:
      'Shantanu strengthens pit operations and match prep — quick fixes, spare parts, and keeping the robot ' +
      'match legal between inspections. He also led camp operations during our outreach programs. Scout during competition day — tracks matches and alliance options for the drive team.',
    specialties: 'Build, Camp, Scout',
    imageSrc: '/members/shantanu.png',
    images: gallery('/members/shantanu.png'),
  },
]

export const MEMBERS_BY_SEASON = {
  '2025-26': {
    leaders: LEADERS_2025_26,
    engineers: ENGINEERS_2025_26,
  },
  '2026-27': {
    leaders: [LEADERS_2025_26[0], LEADERS_2025_26[1]],
    engineers: [ENGINEERS_2025_26[0], ENGINEERS_2025_26[1]],
  },
}

export function getMembersForSeason(seasonId) {
  return MEMBERS_BY_SEASON[seasonId] ?? { leaders: [], engineers: [] }
}

export function memberSlug(name) {
  return slugify(name)
}

export function memberPath(name) {
  return `/members/${memberSlug(name)}`
}

export function getMemberBySlug(slug) {
  for (const [seasonId, roster] of Object.entries(MEMBERS_BY_SEASON)) {
    const all = [...roster.leaders, ...roster.engineers]
    const member = all.find((m) => memberSlug(m.name) === slug)
    if (member) return { member, seasonId }
  }
  return null
}

export function getAllMemberSlugs() {
  const slugs = new Set()
  for (const roster of Object.values(MEMBERS_BY_SEASON)) {
    for (const member of [...roster.leaders, ...roster.engineers]) {
      slugs.add(memberSlug(member.name))
    }
  }
  return [...slugs]
}
