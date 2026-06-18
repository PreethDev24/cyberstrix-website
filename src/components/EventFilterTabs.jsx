import { Link } from 'react-router-dom'
import { SEASONS, eventsPath } from '../data/seasons'

const ALL_FILTER = 'all'

export function isAllEventsFilter(filterId) {
  return !filterId || filterId === ALL_FILTER
}

export default function EventFilterTabs({ activeFilterId }) {
  const active = isAllEventsFilter(activeFilterId) ? ALL_FILTER : activeFilterId

  const tabs = [
    { id: ALL_FILTER, label: 'All' },
    ...SEASONS.map((s) => ({ id: s.id, label: s.label })),
  ]

  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter events by season">
      {tabs.map((tab) => {
        const isActive = tab.id === active
        return (
          <Link
            key={tab.id}
            to={eventsPath(tab.id === ALL_FILTER ? 'all' : tab.id)}
            role="tab"
            aria-selected={isActive}
            className={
              isActive
                ? 'px-4 py-2 rounded-full text-sm font-medium border border-sky-400/50 bg-sky-500/20 text-sky-200'
                : 'px-4 py-2 rounded-full text-sm font-medium border border-white/15 bg-white/5 text-white/80 hover:border-white/30 hover:text-white transition'
            }
          >
            {tab.label}
          </Link>
        )
      })}
    </div>
  )
}
