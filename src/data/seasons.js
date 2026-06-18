/** FTC season slugs used in URLs and data filters. */

export const CURRENT_SEASON = '2026-27'

export const SEASONS = [
  { id: '2026-27', label: '2026–27' },
  { id: '2025-26', label: '2025–26' },
]

const SEASON_IDS = new Set(SEASONS.map((s) => s.id))

export function isValidSeason(id) {
  return SEASON_IDS.has(id)
}

export function getSeasonLabel(id) {
  return SEASONS.find((s) => s.id === id)?.label ?? id
}

export function isCurrentSeason(id) {
  return id === CURRENT_SEASON
}

/** Current season uses a short URL; past seasons include the slug. */
export function membersPath(seasonId) {
  if (seasonId === CURRENT_SEASON) return '/members'
  return `/members/${seasonId}`
}

/** `all` or omitted → every season; a season slug → that year only. */
export function eventsPath(seasonId) {
  if (!seasonId || seasonId === 'all') return '/events'
  return `/events/${seasonId}`
}
