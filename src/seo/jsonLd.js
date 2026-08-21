import {
  SITE_NAME,
  SITE_URL,
  TEAM_NUMBER,
  TEAM_EMAIL,
  TEAM_LOCATION,
  TEAM_AWARD,
  DEFAULT_DESCRIPTION,
  SOCIAL_LINKS,
} from '../data/site'
import { absoluteUrl } from './urls'

function teamEntity() {
  return {
    '@type': 'SportsTeam',
    name: 'Cyber Strix',
    alternateName: [`FTC Team ${TEAM_NUMBER}`, `Team ${TEAM_NUMBER}`],
    url: SITE_URL,
  }
}

function isOnlineEvent(event) {
  if (event.attendanceMode === 'online') return true
  return /online/i.test(event.location || '')
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['SportsTeam', 'Organization'],
    name: 'Cyber Strix',
    alternateName: [`FTC Team ${TEAM_NUMBER}`, `Team ${TEAM_NUMBER}`, 'CyberStrix'],
    legalName: `Cyber Strix FTC Team ${TEAM_NUMBER}`,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    sport: 'FIRST Tech Challenge Robotics',
    slogan: 'Engineering the future. Inspiring the next generation.',
    email: TEAM_EMAIL,
    award: TEAM_AWARD,
    foundingLocation: {
      '@type': 'Place',
      name: TEAM_LOCATION.city,
      address: {
        '@type': 'PostalAddress',
        addressLocality: TEAM_LOCATION.city,
        addressRegion: TEAM_LOCATION.region,
        addressCountry: TEAM_LOCATION.country,
      },
    },
    memberOf: {
      '@type': 'Organization',
      name: 'FIRST Tech Challenge',
      url: 'https://www.firstinspires.org/robotics/ftc',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: TEAM_LOCATION.city,
      addressRegion: TEAM_LOCATION.region,
      addressCountry: TEAM_LOCATION.country,
    },
    areaServed: {
      '@type': 'Place',
      name: `${TEAM_LOCATION.city}, ${TEAM_LOCATION.region}`,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: TEAM_EMAIL,
      areaServed: 'US',
      availableLanguage: 'English',
    },
    sameAs: SOCIAL_LINKS,
    knowsAbout: [
      'FIRST Tech Challenge',
      'STEM outreach',
      'robotics',
      'CAD',
      'programming',
      TEAM_LOCATION.city,
    ],
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: teamEntity(),
    inLanguage: 'en-US',
  }
}

export function whatWeDoJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `What We Do | ${SITE_NAME}`,
    url: `${SITE_URL}/what-we-do`,
    description:
      'Hands-on FTC robotics, STEM outreach, leadership, and opportunities beyond the robot for Cyber Strix members.',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: teamEntity(),
    mainEntity: {
      '@type': 'ItemList',
      name: 'What Cyber Strix does',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'FTC Robotics',
          description:
            'Compete in FIRST Tech Challenge designing, building, and programming competitive robots.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'STEM Outreach',
          description:
            'Workshops, camps, school visits, and international STEM exchanges that expand access to engineering.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Leadership & beyond the robot',
          description:
            'Member leadership plus outreach, fundraising, media, and event planning experience.',
        },
      ],
    },
  }
}

export function contactPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact | ${SITE_NAME}`,
    url: `${SITE_URL}/contact`,
    description: `Contact Cyber Strix FTC Team ${TEAM_NUMBER} in ${TEAM_LOCATION.city}, ${TEAM_LOCATION.region}.`,
    mainEntity: {
      '@type': 'SportsTeam',
      name: 'Cyber Strix',
      alternateName: `FTC Team ${TEAM_NUMBER}`,
      url: SITE_URL,
      email: TEAM_EMAIL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: TEAM_LOCATION.city,
        addressRegion: TEAM_LOCATION.region,
        addressCountry: TEAM_LOCATION.country,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: TEAM_EMAIL,
        areaServed: 'US',
        availableLanguage: 'English',
      },
    },
  }
}

export function aboutPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `About | ${SITE_NAME}`,
    url: `${SITE_URL}/about`,
    description: `About Cyber Strix FTC Team ${TEAM_NUMBER} from ${TEAM_LOCATION.city}, ${TEAM_LOCATION.region}.`,
    mainEntity: {
      '@type': 'SportsTeam',
      name: 'Cyber Strix',
      alternateName: `FTC Team ${TEAM_NUMBER}`,
      url: SITE_URL,
      award: TEAM_AWARD,
      email: TEAM_EMAIL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: TEAM_LOCATION.city,
        addressRegion: TEAM_LOCATION.region,
        addressCountry: TEAM_LOCATION.country,
      },
    },
  }
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
    })),
  }
}

export function membersPageJsonLd(seasonLabel, members) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${SITE_NAME} — ${seasonLabel} roster`,
    url: SITE_URL,
    numberOfItems: members.length,
    itemListElement: members.map((member, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Person',
        name: member.name,
        jobTitle: member.role,
        description: member.bio,
        ...(member.linkedin_url ? { sameAs: member.linkedin_url } : {}),
        memberOf: teamEntity(),
      },
    })),
  }
}

export function personJsonLd(member) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.role,
    description: member.more_bio || member.bio,
    ...(member.imageSrc ? { image: absoluteUrl(member.imageSrc) } : {}),
    ...(member.linkedin_url ? { sameAs: member.linkedin_url } : {}),
    memberOf: {
      ...teamEntity(),
      url: SITE_URL,
    },
  }
}

function eventLocationJsonLd(event) {
  if (isOnlineEvent(event)) {
    return {
      '@type': 'VirtualLocation',
      name: event.location,
      url: SITE_URL,
    }
  }
  return {
    '@type': 'Place',
    name: event.location,
    address: {
      '@type': 'PostalAddress',
      addressLocality: event.location,
      addressRegion: TEAM_LOCATION.region,
      addressCountry: TEAM_LOCATION.country,
    },
  }
}

export function eventsPageJsonLd(events) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${SITE_NAME} — Events`,
    numberOfItems: events.length,
    itemListElement: events.map((event, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Event',
        name: event.title,
        description: event.details,
        startDate: parseEventDate(event.date),
        eventAttendanceMode: isOnlineEvent(event)
          ? 'https://schema.org/OnlineEventAttendanceMode'
          : 'https://schema.org/OfflineEventAttendanceMode',
        location: eventLocationJsonLd(event),
        organizer: teamEntity(),
      },
    })),
  }
}

export function eventJsonLd(event) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.more_info || event.details,
    startDate: parseEventDate(event.date),
    eventAttendanceMode: isOnlineEvent(event)
      ? 'https://schema.org/OnlineEventAttendanceMode'
      : 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: event.is_upcoming
      ? 'https://schema.org/EventScheduled'
      : 'https://schema.org/EventPast',
    location: eventLocationJsonLd(event),
    image: event.image_url ? absoluteUrl(event.image_url) : undefined,
    organizer: {
      ...teamEntity(),
      alternateName: `FTC Team ${TEAM_NUMBER}`,
      url: SITE_URL,
    },
  }
}

export function faqJsonLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/** Best-effort ISO date from human-readable event strings. */
function parseEventDate(dateStr) {
  const endPart = dateStr.includes('–') ? dateStr.split('–').pop().trim() : dateStr
  const parsed = Date.parse(endPart)
  if (Number.isNaN(parsed)) return undefined
  return new Date(parsed).toISOString().split('T')[0]
}
