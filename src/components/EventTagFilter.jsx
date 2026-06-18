import { EVENT_TAGS } from '../data/eventTags'

const ALL_TAG = 'all'

export function isAllTagFilter(tagId) {
  return !tagId || tagId === ALL_TAG
}

export default function EventTagFilter({ activeTag, onChange, counts }) {
  const active = isAllTagFilter(activeTag) ? ALL_TAG : activeTag

  const tabs = [
    { id: ALL_TAG, label: 'All' },
    ...EVENT_TAGS.map((t) => ({ id: t.id, label: t.label })),
  ]

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter events by type">
      {tabs.map((tab) => {
        const isActive = tab.id === active
        const count = counts?.[tab.id]
        const isEmpty = tab.id !== ALL_TAG && count === 0
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            disabled={isEmpty}
            aria-pressed={isActive}
            className={
              isActive
                ? 'px-3 py-1.5 rounded-full text-xs font-medium border border-sky-400/50 bg-sky-500/20 text-sky-200'
                : isEmpty
                  ? 'px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 bg-white/[0.02] text-white/30 cursor-not-allowed'
                  : 'px-3 py-1.5 rounded-full text-xs font-medium border border-white/15 bg-white/5 text-white/80 hover:border-white/30 hover:text-white transition'
            }
          >
            {tab.label}
            {count != null && tab.id !== ALL_TAG && (
              <span className="ml-1 opacity-70">({count})</span>
            )}
          </button>
        )
      })}
    </div>
  )
}
