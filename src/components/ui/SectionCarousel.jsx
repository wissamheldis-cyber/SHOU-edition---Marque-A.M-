// ─── SectionCarousel ───────────────────────────────────────
// Carrousel centré avec items adjacents visibles en flou.
// Props :
//   slides      → array de données
//   renderSlide → (slide, isActive) => ReactNode
//   autoDelay   → ms entre chaque avance automatique (défaut 3500)
//   fadeColor   → couleur du dégradé de fondu sur les bords (défaut '#050505')

import { useState, useEffect, useCallback, useRef } from 'react'

// Icône Play
function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}
// Icône Pause
function PauseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  )
}
// Icône Chevron
function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  )
}
function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}

export default function SectionCarousel({
  slides,
  renderSlide,
  autoDelay = 3500,
  fadeColor = '#050505',
}) {
  const [current,  setCurrent] = useState(0)
  const [playing,  setPlaying] = useState(true)
  const [slideWidth, setSlideWidth] = useState(80)
  const touchStartX = useRef(null)
  const n = slides.length

  const next = useCallback(() => setCurrent(c => (c + 1) % n), [n])
  const prev = useCallback(() => setCurrent(c => (c - 1 + n) % n), [n])

  const onTouchStart = e => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd   = e => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) < 40) return   // trop court, pas un swipe
    if (delta < 0) next(); else prev()
  }

  useEffect(() => {
    const check = () => setSlideWidth(window.innerWidth < 640 ? 90 : 80)
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])

  // Auto-avance
  useEffect(() => {
    if (!playing) return
    const t = setInterval(next, autoDelay)
    return () => clearInterval(t)
  }, [playing, next, autoDelay])

  // Chaque slide occupe slideWidth% du container → marges visibles de chaque côté
  // translateX : centrage de la slide active
  const trackStyle = {
    display:    'flex',
    transform:  `translateX(calc(${(100 - slideWidth) / 2}% - ${current * slideWidth}%))`,
    transition: 'transform 0.72s cubic-bezier(0.16,1,0.3,1)',
  }

  return (
    <div style={{ userSelect: 'none' }}>

      {/* ─── Zone carrousel ─── */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>

        {/* Dégradés de fondu latéraux */}
        <div aria-hidden="true" style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: `${Math.max((100 - slideWidth) / 2 + 1, 4)}%`,
          background: `linear-gradient(to right, ${fadeColor}, transparent)`,
          pointerEvents: 'none', zIndex: 5,
        }} />
        <div aria-hidden="true" style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: `${Math.max((100 - slideWidth) / 2 + 1, 4)}%`,
          background: `linear-gradient(to left, ${fadeColor}, transparent)`,
          pointerEvents: 'none', zIndex: 5,
        }} />

        {/* Boutons prev / next */}
        <button
          onClick={prev}
          aria-label="Slide précédente"
          style={{
            position:        'absolute',
            left:            '1.5%',
            top:             '50%',
            transform:       'translateY(-50%)',
            zIndex:          10,
            width:           '36px',
            height:          '36px',
            minWidth:        '44px',
            minHeight:       '44px',
            borderRadius:    '50%',
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            background:      'rgba(5,5,5,0.70)',
            border:          '1px solid rgba(211,180,127,0.22)',
            color:           'rgba(211,180,127,0.70)',
            cursor:          'pointer',
            transition:      'all 0.25s ease',
            backdropFilter:  'blur(12px)',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(211,180,127,0.55)'; e.currentTarget.style.color = 'rgba(211,180,127,1)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(211,180,127,0.22)'; e.currentTarget.style.color = 'rgba(211,180,127,0.70)'; }}
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          aria-label="Slide suivante"
          style={{
            position:        'absolute',
            right:           '1.5%',
            top:             '50%',
            transform:       'translateY(-50%)',
            zIndex:          10,
            width:           '36px',
            height:          '36px',
            minWidth:        '44px',
            minHeight:       '44px',
            borderRadius:    '50%',
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            background:      'rgba(5,5,5,0.70)',
            border:          '1px solid rgba(211,180,127,0.22)',
            color:           'rgba(211,180,127,0.70)',
            cursor:          'pointer',
            transition:      'all 0.25s ease',
            backdropFilter:  'blur(12px)',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(211,180,127,0.55)'; e.currentTarget.style.color = 'rgba(211,180,127,1)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(211,180,127,0.22)'; e.currentTarget.style.color = 'rgba(211,180,127,0.70)'; }}
        >
          <ChevronRight />
        </button>

        {/* Track — swipeable */}
        <div
          style={trackStyle}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {slides.map((slide, i) => {
            const isActive = i === current
            return (
              <div
                key={i}
                style={{
                  flexShrink:      0,
                  width:           `${slideWidth}%`,
                  padding:         '0 12px',
                  transition:      'opacity 0.65s cubic-bezier(0.16,1,0.3,1), filter 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)',
                  opacity:         isActive ? 1 : 0.28,
                  filter:          isActive ? 'none' : 'blur(5px)',
                  transform:       `scale(${isActive ? 1 : 0.90})`,
                  transformOrigin: 'center',
                  cursor:          isActive ? 'default' : 'pointer',
                }}
                onClick={() => !isActive && setCurrent(i)}
              >
                {renderSlide(slide, isActive)}
              </div>
            )
          })}
        </div>

      </div>

      {/* ─── Contrôles ─── */}
      <div style={{
        display:        'flex',
        justifyContent: 'center',
        alignItems:     'center',
        gap:            '10px',
        marginTop:      '2rem',
      }}>

        {/* Dots */}
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Aller à la slide ${i + 1}`}
            style={{
              width:        i === current ? '22px' : '6px',
              height:       '6px',
              borderRadius: '3px',
              background:   i === current ? 'rgba(211,180,127,0.85)' : 'rgba(211,180,127,0.22)',
              border:       'none',
              cursor:       'pointer',
              transition:   'all 0.4s cubic-bezier(0.16,1,0.3,1)',
              padding:      0,
              boxShadow:    i === current ? '0 0 10px rgba(211,180,127,0.30)' : 'none',
            }}
          />
        ))}

        {/* Séparateur */}
        <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.08)', margin: '0 4px' }} />

        {/* Bouton play / pause */}
        <button
          onClick={() => setPlaying(p => !p)}
          aria-label={playing ? 'Mettre en pause' : 'Reprendre la lecture automatique'}
          style={{
            display:        'flex',
            alignItems:     'center',
            gap:            '6px',
            padding:        '5px 12px',
            borderRadius:   '20px',
            background:     'transparent',
            border:         '1px solid rgba(211,180,127,0.20)',
            color:          playing ? 'rgba(211,180,127,0.60)' : 'rgba(211,180,127,0.85)',
            cursor:         'pointer',
            fontFamily:     "'Share Tech Mono', monospace",
            fontSize:       '8px',
            letterSpacing:  '0.16em',
            textTransform:  'uppercase',
            transition:     'all 0.25s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(211,180,127,0.42)'; e.currentTarget.style.color = 'rgba(211,180,127,1)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(211,180,127,0.20)'; e.currentTarget.style.color = playing ? 'rgba(211,180,127,0.60)' : 'rgba(211,180,127,0.85)'; }}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
          {playing ? 'Pause' : 'Auto'}
        </button>

      </div>
    </div>
  )
}
