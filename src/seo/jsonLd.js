import { SITE_NAME, SITE_URL } from '../data/site'
import { absoluteUrl } from './urls'

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsTeam',
    name: 'Cyber Strix',
    alternateName: 'FTC Team 31022',
    url: SITE_URL,
    sport: 'FIRST Tech Challenge Robotics',
    memberOf: {
      '@type': 'Organization',
      name: 'FIRST Tech Challenge',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mountain House',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    email: 'cyberstrix31022@gmail.com',
    sameAs: [
      'https://www.instagram.com/ftc_cyberstrix/',
      'https://www.youtube.com/@CyberStrix',
    ],
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
        memberOf: {
          '@type': 'SportsTeam',
          name: 'Cyber Strix',
          alternateName: 'FTC Team 31022',
        },
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
      '@type': 'SportsTeam',
      name: 'Cyber Strix',
      alternateName: 'FTC Team 31022',
      url: SITE_URL,
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
        location: {
          '@type': 'Place',
          name: event.location,
        },
        organizer: {
          '@type': 'SportsTeam',
          name: 'Cyber Strix',
        },
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
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: event.is_upcoming
      ? 'https://schema.org/EventScheduled'
      : 'https://schema.org/EventPast',
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: event.location,
      },
    },
    image: event.image_url ? absoluteUrl(event.image_url) : undefined,
    organizer: {
      '@type': 'SportsTeam',
      name: 'Cyber Strix',
      alternateName: 'FTC Team 31022',
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
