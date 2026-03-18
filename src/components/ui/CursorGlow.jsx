// ─── CursorGlow ────────────────────────────────────────────
// Spotlight doré qui suit le curseur — effet moderne subtil.
// Utilise des refs + RAF pour 0 re-render React.

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Valeurs interpolées pour un mouvement "magnétique" fluide
    let targetX = -999, targetY = -999
    let currentX = -999, currentY = -999
    let rafId

    const onMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const tick = () => {
      // Lerp (lissage) pour un suivi fluide
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08
      el.style.transform = `translate(${currentX - 350}px, ${currentY - 350}px)`
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position:       'fixed',
        top:            0,
        left:           0,
        width:          '700px',
        height:         '700px',
        borderRadius:   '50%',
        background:     'radial-gradient(circle, rgba(211,180,127,0.042) 0%, rgba(211,180,127,0.008) 40%, transparent 65%)',
        pointerEvents:  'none',
        zIndex:         0,
        willChange:     'transform',
      }}
    />
  )
}
