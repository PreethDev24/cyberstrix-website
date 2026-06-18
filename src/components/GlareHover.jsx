import { useCallback, useRef } from 'react'
import './GlareHover.css'

const GlareHover = ({
  width = '500px',
  height = '500px',
  minHeight,
  background = '#000',
  borderRadius = '10px',
  borderColor = '#333',
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = '',
  style = {},
}) => {
  const rootRef = useRef(null)
  const hex = glareColor.replace('#', '')
  let rgba = glareColor
  if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16)
    const g = parseInt(hex.slice(2, 4), 16)
    const b = parseInt(hex.slice(4, 6), 16)
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`
  } else if (/^[0-9A-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16)
    const g = parseInt(hex[1] + hex[1], 16)
    const b = parseInt(hex[2] + hex[2], 16)
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`
  }

  const onMove = useCallback((e) => {
    const el = rootRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const mx = ((e.clientX - r.left) / r.width) * 100
    const my = ((e.clientY - r.top) / r.height) * 100
    el.style.setProperty('--mx', `${mx}%`)
    el.style.setProperty('--my', `${my}%`)
  }, [])

  const onLeave = useCallback(() => {
    const el = rootRef.current
    if (!el) return
    el.style.setProperty('--mx', '50%')
    el.style.setProperty('--my', '50%')
  }, [])

  const vars = {
    '--gh-width': width,
    '--gh-height': height,
    '--gh-bg': background,
    '--gh-br': borderRadius,
    '--gh-angle': `${glareAngle}deg`,
    '--gh-duration': `${transitionDuration}ms`,
    '--gh-size': `${glareSize}%`,
    '--gh-rgba': rgba,
    '--gh-border': borderColor,
    ...(minHeight ? { '--gh-min-height': minHeight } : {}),
  }

  return (
    <div
      ref={rootRef}
      className={`glare-hover ${playOnce ? 'glare-hover--play-once' : ''} ${className}`.trim()}
      style={{ ...vars, ...style }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="relative z-[1] flex h-full min-h-0 flex-1 flex-col">{children}</div>
    </div>
  )
}

export default GlareHover
