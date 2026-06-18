/** Event category tags for cards and filters. */

export const EVENT_TAGS = [
  {
    id: 'competition',
    label: 'Competition',
    className: 'border-violet-400/40 bg-violet-500/15 text-violet-200',
  },
  {
    id: 'outreach',
    label: 'Outreach',
    className: 'border-teal-400/40 bg-teal-500/15 text-teal-200',
  },
  {
    id: 'camp',
    label: 'Camp',
    className: 'border-amber-400/40 bg-amber-500/15 text-amber-200',
  },
]

export function getEventTag(tagId) {
  return EVENT_TAGS.find((t) => t.id === tagId)
}

export function enrichEventWithTag(event) {
  const tag = getEventTag(event.tag)
  return {
    ...event,
    tagLabel: tag?.label ?? event.type,
    tagClassName:
      tag?.className ?? 'border-white/20 bg-white/5 text-white/70',
  }
}
