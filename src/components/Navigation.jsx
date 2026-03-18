import { useState, useEffect, useMemo } from 'react'
import { studio, images, navLinks } from '../data/client'
import { useActiveSection } from '../hooks/useActiveSection'

// ─── Indicateur de chapitre ──────────────────────────────
// Affiche les sections comme points de progression sur la gauche
function ChapterIndicator({ activeId }) {
  const chapters = useMemo(() => [
    { id: 'lecture',    label: 'Lecture'    },
    { id: 'territoire', label: 'Territoire' },
    { id: 'supports',   label: 'Supports'   },
    { id: 'offre',      label: 'Proposition'},
  ], [])

  return (
    <div className="hidden lg:flex items-center gap-0">
      {chapters.map((ch, i) => {
        const isActive = activeId === ch.id
        return (
          <a
            key={ch.id}
            href={`#${ch.id}`}
            className="flex items-center gap-1.5 group"
            style={{ padding: '4px 6px' }}
          >
            {/* Dot */}
            <div
              style={{
                width:      isActive ? 6 : 4,
                height:     isActive ? 6 : 4,
                borderRadius: '50%',
                background: isActive
                  ? 'rgba(211,180,127,0.92)'
                  : 'rgba(211,180,127,0.22)',
                transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
                boxShadow: isActive ? '0 0 8px rgba(211,180,127,0.40)' : 'none',
                flexShrink: 0,
              }}
            />
            {/* Label — visible seulement si actif */}
            <span
              style={{
                fontFamily:    "'Share Tech Mono', monospace",
                fontSize:      '8px',
                letterSpacing: '0.16em',
                color:         isActive ? 'rgba(211,180,127,0.75)' : 'transparent',
                maxWidth:      isActive ? '80px' : '0px',
                overflow:      'hidden',
                whiteSpace:    'nowrap',
                transition:    'all 0.35s cubic-bezier(0.16,1,0.3,1)',
                opacity:       isActive ? 1 : 0,
              }}
            >
              {ch.label.toUpperCase()}
            </span>

            {/* Trait de liaison entre les dots (sauf dernier) */}
            {i < chapters.length - 1 && (
              <div
                style={{
                  width:      isActive ? 8 : 12,
                  height:     1,
                  background: 'rgba(211,180,127,0.14)',
                  marginLeft: 2,
                  transition: 'width 0.3s ease',
                  flexShrink: 0,
                }}
              />
            )}
          </a>
        )
      })}
    </div>
  )
}

// ─── Logo SHOU ─────────────────────────────────────────────
function StudioLogo({ large }) {
  if (images.studioLogo) {
    return (
      <img
        src={images.studioLogo}
        alt={studio.name}
        style={{
          height:        large ? '44px' : '32px',
          width:         'auto',
          objectFit:     'contain',
          maxWidth:      large ? '180px' : '130px',
          transition:    'height 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
      />
    )
  }

  // Placeholder élégant
  return (
    <div
      className="flex items-center justify-center rounded-xl"
      style={{
        width:   large ? '52px' : '38px',
        height:  large ? '52px' : '38px',
        border:  '1px dashed rgba(211,180,127,0.28)',
        background: 'rgba(211,180,127,0.06)',
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '8px', letterSpacing: '0.12em', color: 'rgba(211,180,127,0.50)' }}>
        LOGO
      </span>
    </div>
  )
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const sectionIds = useMemo(() => ['lecture', 'territoire', 'supports', 'offre'], [])
  const activeId   = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      aria-label="Navigation principale"
      style={{
        position:       'fixed',
        top:            0,
        left:           0,
        right:          0,
        zIndex:         50,
        height:         scrolled ? '64px' : '80px',
        background:     scrolled
          ? 'rgba(5,5,5,0.88)'
          : 'transparent',
        backdropFilter:       scrolled ? 'blur(28px) saturate(140%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(28px) saturate(140%)' : 'none',
        borderBottom:   scrolled ? '1px solid rgba(211,180,127,0.10)' : 'none',
        boxShadow:      scrolled ? '0 4px 40px rgba(0,0,0,0.50)' : 'none',
        transition:     'height 0.5s cubic-bezier(0.16,1,0.3,1), background 0.5s ease, box-shadow 0.4s ease',
      }}
    >
      <div
        className="container-page"
        style={{
          height:     '100%',
          display:    'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap:        '1rem',
        }}
      >

        {/* ─── Gauche — Indicateur de chapitres ─── */}
        <div style={{ flex: '1', minWidth: 0 }}>
          <ChapterIndicator activeId={activeId} />
        </div>

        {/* ─── Centre — Logo + Brand ─── */}
        <a
          href="#top"
          style={{
            display:        'flex',
            flexDirection:  'column',
            alignItems:     'center',
            gap:            '4px',
            textDecoration: 'none',
            flexShrink:     0,
          }}
        >
          <StudioLogo large={!scrolled} />
          {/* Sous-label — visible uniquement avant scroll */}
          <span
            style={{
              fontFamily:    "'Share Tech Mono', monospace",
              fontSize:      '7px',
              letterSpacing: '0.20em',
              color:         'rgba(211,180,127,0.38)',
              textTransform: 'uppercase',
              opacity:       scrolled ? 0 : 1,
              maxHeight:     scrolled ? 0 : '14px',
              overflow:      'hidden',
              transition:    'opacity 0.3s ease, max-height 0.3s ease',
            }}
          >
            {studio.service}
          </span>
        </a>

        {/* ─── Droite — Liens ─── */}
        <div
          style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1.5rem' }}
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="hidden md:block"
              style={{
                fontFamily:    "'Share Tech Mono', monospace",
                fontSize:      '9px',
                letterSpacing: '0.18em',
                color:         'rgba(255,255,255,0.28)',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition:    'color 0.2s ease',
              }}
              onMouseEnter={e => e.target.style.color = 'rgba(211,180,127,0.80)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.28)'}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#offre"
            className="hidden md:flex items-center"
            style={{
              fontFamily:    "'Share Tech Mono', monospace",
              fontSize:      '9px',
              letterSpacing: '0.18em',
              color:         'rgba(211,180,127,0.80)',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border:        '1px solid rgba(211,180,127,0.24)',
              borderRadius:  '8px',
              padding:       '7px 14px',
              transition:    'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background   = 'rgba(211,180,127,0.07)'
              e.currentTarget.style.borderColor  = 'rgba(211,180,127,0.44)'
              e.currentTarget.style.color        = 'rgba(211,180,127,1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background   = 'transparent'
              e.currentTarget.style.borderColor  = 'rgba(211,180,127,0.24)'
              e.currentTarget.style.color        = 'rgba(211,180,127,0.80)'
            }}
          >
            Démarrer
          </a>
        </div>

      </div>
    </nav>
  )
}
