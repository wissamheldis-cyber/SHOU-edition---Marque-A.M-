import { useState, useEffect, useMemo } from 'react'
import { studio, images, navLinks } from '../data/client'
import { useActiveSection } from '../hooks/useActiveSection'

// ─── Indicateur de chapitre ──────────────────────────────
function ChapterIndicator({ activeId }) {
  const chapters = useMemo(() => [
    { id: 'lecture',    label: 'Lecture',     num: '01' },
    { id: 'territoire', label: 'Territoire',  num: '02' },
    { id: 'supports',   label: 'Supports',    num: '03' },
    { id: 'offre',      label: 'Proposition', num: '04' },
  ], [])

  return (
    <div className="hidden lg:flex items-center gap-0">
      {chapters.map((ch, i) => {
        const isActive = activeId === ch.id
        return (
          <a
            key={ch.id}
            href={`#${ch.id}`}
            className="flex items-center gap-2 group"
            style={{ padding: '6px 8px' }}
          >
            {/* Numéro */}
            <span style={{
              fontFamily:    "'Share Tech Mono', monospace",
              fontSize:      '9px',
              letterSpacing: '0.10em',
              color:         isActive ? 'rgba(211,180,127,0.60)' : 'rgba(211,180,127,0.18)',
              transition:    'color 0.4s ease',
              minWidth:      '16px',
            }}>{ch.num}</span>

            {/* Dot */}
            <div style={{
              width:        isActive ? 8 : 4,
              height:       isActive ? 8 : 4,
              borderRadius: '50%',
              background:   isActive ? 'rgba(211,180,127,0.92)' : 'rgba(211,180,127,0.22)',
              transition:   'all 0.4s cubic-bezier(0.16,1,0.3,1)',
              boxShadow:    isActive ? '0 0 14px rgba(211,180,127,0.65), 0 0 4px rgba(211,180,127,0.90)' : 'none',
              flexShrink:   0,
            }} />

            {/* Label */}
            <span style={{
              fontFamily:    "'Share Tech Mono', monospace",
              fontSize:      '9px',
              letterSpacing: '0.16em',
              color:         isActive ? 'rgba(211,180,127,0.80)' : 'transparent',
              maxWidth:      isActive ? '90px' : '0px',
              overflow:      'hidden',
              whiteSpace:    'nowrap',
              transition:    'all 0.4s cubic-bezier(0.16,1,0.3,1)',
              opacity:       isActive ? 1 : 0,
              textTransform: 'uppercase',
            }}>{ch.label}</span>

            {/* Trait */}
            {i < chapters.length - 1 && (
              <div style={{
                width:      16,
                height:     1,
                background: isActive ? 'rgba(211,180,127,0.28)' : 'rgba(211,180,127,0.10)',
                marginLeft: 4,
                transition: 'background 0.35s ease',
                flexShrink: 0,
              }} />
            )}
          </a>
        )
      })}
    </div>
  )
}

// ─── Logo SHOU ─────────────────────────────────────────────
function StudioLogo({ scrolled }) {
  const h  = scrolled ? '44px' : '76px'
  const mw = scrolled ? '160px' : '300px'

  if (images.studioLogo) {
    return (
      <img
        src={images.studioLogo}
        alt={studio.name}
        style={{
          height:     h,
          width:      'auto',
          objectFit:  'contain',
          maxWidth:   mw,
          transition: 'height 0.55s cubic-bezier(0.16,1,0.3,1), max-width 0.55s cubic-bezier(0.16,1,0.3,1), filter 0.55s ease',
          filter:     `drop-shadow(0 0 ${scrolled ? '8px' : '24px'} rgba(211,180,127,${scrolled ? '0.10' : '0.22'}))`,
        }}
      />
    )
  }

  return (
    <div
      className="flex items-center justify-center rounded-2xl"
      style={{
        width:      h,
        height:     h,
        border:     '1px dashed rgba(211,180,127,0.28)',
        background: 'rgba(211,180,127,0.06)',
        transition: 'all 0.55s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', letterSpacing: '0.12em', color: 'rgba(211,180,127,0.50)' }}>
        LOGO
      </span>
    </div>
  )
}

// ─── Navigation ────────────────────────────────────────────
export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [entered,  setEntered]  = useState(false)
  const sectionIds = useMemo(() => ['lecture', 'territoire', 'supports', 'offre'], [])
  const activeId   = useActiveSection(sectionIds)

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 80)
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(t)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const navTransition = entered
    ? 'height 0.6s cubic-bezier(0.16,1,0.3,1), background 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease, opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)'
    : 'none'

  return (
    <nav
      aria-label="Navigation principale"
      style={{
        position:             'fixed',
        top:                  0,
        left:                 0,
        right:                0,
        zIndex:               50,
        height:               scrolled ? '72px' : '116px',
        background:           scrolled
          ? 'rgba(5,5,5,0.94)'
          : 'rgba(5,5,5,0.22)',
        backdropFilter:       'blur(36px) saturate(160%)',
        WebkitBackdropFilter: 'blur(36px) saturate(160%)',
        borderBottom:         `1px solid rgba(211,180,127,${scrolled ? '0.14' : '0.06'})`,
        boxShadow:            scrolled ? '0 4px 64px rgba(0,0,0,0.65)' : 'none',
        opacity:              entered ? 1 : 0,
        transform:            entered ? 'translateY(0)' : 'translateY(-100%)',
        transition:           navTransition,
      }}
    >

      {/* ─── Ligne or animée (scroll progress indicator) ─── */}
      <div
        aria-hidden="true"
        style={{
          position:       'absolute',
          bottom:         0,
          left:           0,
          height:         '1px',
          width:          scrolled ? '100%' : '0%',
          background:     'linear-gradient(to right, transparent 0%, rgba(211,180,127,0.50) 40%, rgba(211,180,127,0.50) 60%, transparent 100%)',
          transition:     'width 1s cubic-bezier(0.16,1,0.3,1)',
          pointerEvents:  'none',
        }}
      />

      {/* ─── Contenu ─── */}
      <div
        className="container-page"
        style={{
          height:         '100%',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          gap:            '2rem',
        }}
      >

        {/* ─── Gauche — Chapitres ─── */}
        <div style={{ flex: '1', minWidth: 0 }}>
          <ChapterIndicator activeId={activeId} />
        </div>

        {/* ─── Centre — Logo + Service ─── */}
        <a
          href="#top"
          style={{
            display:       'flex',
            flexDirection: 'column',
            alignItems:    'center',
            gap:           '8px',
            textDecoration: 'none',
            flexShrink:    0,
          }}
        >
          <StudioLogo scrolled={scrolled} />
          <span
            style={{
              fontFamily:    "'Share Tech Mono', monospace",
              fontSize:      '8px',
              letterSpacing: '0.28em',
              color:         'rgba(211,180,127,0.36)',
              textTransform: 'uppercase',
              opacity:       scrolled ? 0 : 1,
              maxHeight:     scrolled ? 0 : '20px',
              overflow:      'hidden',
              transition:    'opacity 0.35s ease, max-height 0.35s ease',
            }}
          >
            {studio.service}
          </span>
        </a>

        {/* ─── Droite — Liens ─── */}
        <div
          style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '2rem' }}
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="hidden md:block"
              style={{
                fontFamily:     "'Share Tech Mono', monospace",
                fontSize:       '10px',
                letterSpacing:  '0.20em',
                color:          'rgba(255,255,255,0.28)',
                textTransform:  'uppercase',
                textDecoration: 'none',
                transition:     'color 0.25s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(211,180,127,0.88)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.28)'}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="hidden md:flex items-center"
            style={{
              fontFamily:     "'Share Tech Mono', monospace",
              fontSize:       '10px',
              letterSpacing:  '0.20em',
              color:          'rgba(211,180,127,0.85)',
              textTransform:  'uppercase',
              textDecoration: 'none',
              border:         '1px solid rgba(211,180,127,0.28)',
              borderRadius:   '10px',
              padding:        '10px 22px',
              transition:     'all 0.3s cubic-bezier(0.16,1,0.3,1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background  = 'rgba(211,180,127,0.09)'
              e.currentTarget.style.borderColor = 'rgba(211,180,127,0.55)'
              e.currentTarget.style.color       = 'rgba(211,180,127,1)'
              e.currentTarget.style.boxShadow   = '0 0 28px rgba(211,180,127,0.14), inset 0 1px 0 rgba(211,180,127,0.15)'
              e.currentTarget.style.transform   = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background  = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(211,180,127,0.28)'
              e.currentTarget.style.color       = 'rgba(211,180,127,0.85)'
              e.currentTarget.style.boxShadow   = 'none'
              e.currentTarget.style.transform   = 'translateY(0)'
            }}
          >
            Démarrer
          </a>
        </div>

      </div>
    </nav>
  )
}
