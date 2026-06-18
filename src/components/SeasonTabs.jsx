import { Link } from 'react-router-dom'
import { SEASONS, CURRENT_SEASON } from '../data/seasons'

export default function SeasonTabs({ activeSeasonId, pathForSeason }) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Season">
      {SEASONS.map((season) => {
        const isActive = season.id === activeSeasonId
        return (
          <Link
            key={season.id}
            to={pathForSeason(season.id)}
            role="tab"
            aria-selected={isActive}
            className={
              isActive
                ? 'px-4 py-2 rounded-full text-sm font-medium border border-sky-400/50 bg-sky-500/20 text-sky-200'
                : 'px-4 py-2 rounded-full text-sm font-medium border border-white/15 bg-white/5 text-white/80 hover:border-white/30 hover:text-white transition'
            }
          >
            {season.label}
            {season.id === CURRENT_SEASON && (
              <span className="ml-1.5 text-xs font-normal text-sky-300/80">· Current</span>
            )}
          </Link>
        )
      })}
    </div>
  )
}
