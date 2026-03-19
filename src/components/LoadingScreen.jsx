// ─── LoadingScreen ──────────────────────────────────────────
// Séquence d'intro en 4 phases
//   Phase 0-1 : Logo + chargement           (~3.1 s)
//   Phase 2   : Bonjour client + contexte   (7 s)
//   Phase 3   : Carrousel images            (10 s)
//   Phase 4   : CTA + dévoilement flou

import { useState, useEffect, useRef } from 'react'
import { studio, client, images } from '../data/client'

// ── Timing (ms) ──────────────────────────────────────────────
const P1 = 1700          // logo fini
const P2 = 3100          // bonjour client (phase 2 = 7 000 ms)
const P3 = P2 + 7000     // = 10 100  carrousel (phase 3 = 10 000 ms)
const P4 = P3 + 10000    // = 20 100  CTA

// Carrousel : temps écoulé depuis le début de la phase 3
const C2 = 2800          // image 2 apparaît
const C3 = 5600          // image 3 apparaît
const CALL = 8300        // toutes les 3 ensemble

const SLIDES = [
  { num: '01', label: 'Logotype TVIS Groupe',  hint: 'Logo · Déclinaisons · Univers visuel',  icon: '◈', ratio: '4/3',  src: '/images/1.png'  },
  { num: '02', label: 'Supports de marque',    hint: 'Brochure · Fiches produits · Devis',    icon: '◉', ratio: '4/3',  src: '/images/5.png'  },
  { num: '03', label: "Système d'identité",    hint: 'Charte complète · Print · Digital',     icon: '◎', ratio: '16/9', src: '/images/7.png'  },
]

// ── Icônes ───────────────────────────────────────────────────
function PauseIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  )
}
function PlayIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

// ── Barre de chargement animée ────────────────────────────────
function LoadingBar({ done }) {
  const [w, setW] = useState(0)
  useEffect(() => {
    const t1 = setTimeout(() => setW(30),  120)
    const t2 = setTimeout(() => setW(68),  750)
    if (done) {
      const t3 = setTimeout(() => setW(100), 60)
      return () => [t1, t2, t3].forEach(clearTimeout)
    }
    return () => [t1, t2].forEach(clearTimeout)
  }, [done])

  return (
    <div style={{ width: '180px', height: '1px', background: 'rgba(211,180,127,0.10)', borderRadius: '1px', overflow: 'hidden' }}>
      <div style={{
        height: '100%', width: `${w}%`,
        background: done ? 'rgba(211,180,127,0.72)' : 'linear-gradient(to right,rgba(211,180,127,0.35),rgba(211,180,127,0.85))',
        transition: done ? 'width 0.35s ease' : 'width 0.9s cubic-bezier(0.4,0,0.2,1)',
        borderRadius: '1px',
      }} />
    </div>
  )
}

// ── Image du carrousel (réelle ou placeholder) ───────────────
function SlideImage({ slide, glow = false }) {
  if (slide.src) {
    return (
      <div style={{
        position: 'relative', overflow: 'hidden',
        aspectRatio: slide.ratio,
        width: '100%',
        borderRadius: '14px',
        border: `1px solid rgba(211,180,127,${glow ? 0.32 : 0.12})`,
        transition: 'border-color 0.6s ease, box-shadow 0.6s ease',
        boxShadow: glow ? '0 0 48px rgba(211,180,127,0.14)' : 'none',
      }}>
        <img src={slide.src} alt={slide.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        {/* Légende overlay */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 16px 14px', background: 'linear-gradient(to top,rgba(5,5,5,0.72) 0%,transparent 100%)' }}>
          <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: '8px', letterSpacing: '0.22em', color: 'rgba(211,180,127,0.65)', textTransform: 'uppercase' }}>{slide.num} — {slide.label}</span>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      position: 'relative', overflow: 'hidden',
      aspectRatio: slide.ratio,
      width: '100%',
      borderRadius: '14px',
      border: `1px dashed rgba(211,180,127,${glow ? 0.38 : 0.18})`,
      background: 'rgba(5,5,5,0.55)',
      transition: 'border-color 0.6s ease, box-shadow 0.6s ease',
      boxShadow: glow ? '0 0 40px rgba(211,180,127,0.10), inset 0 0 60px rgba(211,180,127,0.03)' : 'none',
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.020) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.020) 1px,transparent 1px)', backgroundSize: '36px 36px', opacity: 0.7 }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '55%', height: '55%', background: 'radial-gradient(circle,rgba(211,180,127,0.07) 0%,transparent 70%)' }} />
      <div className="scan-line-anim" style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(to right,transparent 0%,rgba(211,180,127,0.22) 50%,transparent 100%)' }} />
      <div style={{ position: 'absolute', top: 10, left: 10, width: 16, height: 16, borderTop: '1px solid rgba(211,180,127,0.28)', borderLeft: '1px solid rgba(211,180,127,0.28)' }} />
      <div style={{ position: 'absolute', top: 10, right: 10, width: 16, height: 16, borderTop: '1px solid rgba(211,180,127,0.28)', borderRight: '1px solid rgba(211,180,127,0.28)' }} />
      <div style={{ position: 'absolute', bottom: 10, left: 10, width: 16, height: 16, borderBottom: '1px solid rgba(211,180,127,0.28)', borderLeft: '1px solid rgba(211,180,127,0.28)' }} />
      <div style={{ position: 'absolute', bottom: 10, right: 10, width: 16, height: 16, borderBottom: '1px solid rgba(211,180,127,0.28)', borderRight: '1px solid rgba(211,180,127,0.28)' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: '11px', letterSpacing: '0.18em', color: 'rgba(211,180,127,0.45)', textTransform: 'uppercase' }}>{slide.num}</span>
        <span style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(1.1rem,2vw,1.5rem)', fontWeight: 300, color: 'rgba(222,218,210,0.88)', letterSpacing: '-0.01em' }}>{slide.label}</span>
        <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: '8px', letterSpacing: '0.14em', color: 'rgba(211,180,127,0.30)', textTransform: 'uppercase', textAlign: 'center', maxWidth: '80%' }}>{slide.hint}</span>
      </div>
    </div>
  )
}

// ── Fond décoratif (toutes phases) ───────────────────────────
function Backdrop() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-18%', left: '50%', transform: 'translateX(-50%)', width: '900px', height: '900px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(211,180,127,0.07) 0%,transparent 60%)', animation: 'floatY 9s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-12%', right: '6%', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(211,180,127,0.04) 0%,transparent 65%)', animation: 'floatY 13s ease-in-out infinite 4s' }} />
      <div style={{ position: 'absolute', bottom: '-8%', left: '4%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(211,180,127,0.03) 0%,transparent 65%)', animation: 'floatY 10s ease-in-out infinite 2s' }} />
      {/* Anneaux */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', width: '700px', height: '700px', marginLeft: '-350px', marginTop: '-350px', border: '1px solid rgba(211,180,127,0.042)', borderRadius: '50%', animation: 'rotateGlow 50s linear infinite' }}>
        <div style={{ position: 'absolute', top: '-4px', left: '50%', transform: 'translateX(-50%)', width: '7px', height: '7px', borderRadius: '50%', background: 'rgba(211,180,127,0.72)', boxShadow: '0 0 14px rgba(211,180,127,0.55)' }} />
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', width: '1100px', height: '1100px', marginLeft: '-550px', marginTop: '-550px', border: '1px solid rgba(211,180,127,0.016)', borderRadius: '50%', animation: 'rotateGlow 80s linear infinite reverse' }}>
        <div style={{ position: 'absolute', bottom: '-3px', left: '30%', transform: 'translateX(-50%)', width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(211,180,127,0.48)', boxShadow: '0 0 10px rgba(211,180,127,0.38)' }} />
      </div>
      {/* Grille */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.008) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.008) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
      {/* Halo horizontal */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '1200px', height: '1px', background: 'linear-gradient(to right,transparent,rgba(211,180,127,0.08),transparent)' }} />
      {/* Coins */}
      {[['top','left'],['top','right'],['bottom','left'],['bottom','right']].map(([v,h]) => (
        <div key={v+h} style={{ position:'absolute', [v]:24, [h]:24, width:28, height:28, [`border${v.charAt(0).toUpperCase()+v.slice(1)}`]:'1px solid rgba(211,180,127,0.16)', [`border${h.charAt(0).toUpperCase()+h.slice(1)}`]:'1px solid rgba(211,180,127,0.16)' }} />
      ))}
    </div>
  )
}

// ══════════════════════════════════════════════════════════════
// Composant principal
// ══════════════════════════════════════════════════════════════
export default function LoadingScreen({ onDone }) {
  const [elapsed,  setElapsed]  = useState(0)
  const [paused,   setPaused]   = useState(false)
  const [leaving,  setLeaving]  = useState(false)
  const [revealed, setRevealed] = useState(false)
  // "in" states pour déclencher les transitions d'entrée de phase
  const [p2in,     setP2in]     = useState(false)
  const [p3in,     setP3in]     = useState(false)
  // Step courant du carrousel (pour déclencher l'animation d'entrée de chaque slide)
  const [slideIn,  setSlideIn]  = useState(false)
  const prevStep = useRef(-1)

  // Dériver phase & step depuis elapsed
  const phase        = elapsed < P1 ? 0 : elapsed < P2 ? 1 : elapsed < P3 ? 2 : elapsed < P4 ? 3 : 4
  const p3e          = Math.max(0, elapsed - P3)
  const carouselStep = p3e < C2 ? 0 : p3e < C3 ? 1 : p3e < CALL ? 2 : 3
  const showAll      = carouselStep === 3

  // ── Timer principal ──────────────────────────────────────
  useEffect(() => {
    if (paused || phase >= 4) return
    const t = setInterval(() => setElapsed(e => e + 50), 50)
    return () => clearInterval(t)
  }, [paused, phase])

  // ── Animations d'entrée de phase ─────────────────────────
  useEffect(() => {
    if (phase === 2 && !p2in) { const t = setTimeout(() => setP2in(true), 80);  return () => clearTimeout(t) }
  }, [phase, p2in])
  useEffect(() => {
    if (phase === 3 && !p3in) { const t = setTimeout(() => setP3in(true), 80);  return () => clearTimeout(t) }
  }, [phase, p3in])

  // ── Animations d'entrée de chaque slide ──────────────────
  useEffect(() => {
    if (prevStep.current === carouselStep) return
    prevStep.current = carouselStep
    setSlideIn(false)
    const t = setTimeout(() => setSlideIn(true), 60)
    return () => clearTimeout(t)
  }, [carouselStep])

  // ── Dévoilement flou phase 4 ──────────────────────────────
  useEffect(() => {
    if (phase !== 4) return
    const t = setTimeout(() => setRevealed(true), 200)
    return () => clearTimeout(t)
  }, [phase])

  const handleEnter = () => { setLeaving(true); setTimeout(onDone, 850) }

  // Progression dans la phase courante (0 → 1)
  const phaseProgress =
    phase === 0 ? elapsed / P1 :
    phase === 1 ? (elapsed - P1) / (P2 - P1) :
    phase === 2 ? (elapsed - P2) / (P3 - P2) :
    phase === 3 ? p3e / (P4 - P3) : 1

  // Style overlay
  const bg  = phase >= 4 ? `rgba(5,5,5,${revealed ? 0.50 : 0.97})` : 'rgba(5,5,5,1)'
  const bdf = phase >= 4 ? `blur(${revealed ? 9 : 42}px) saturate(140%)` : 'none'

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200, overflow: 'hidden',
      background: bg, backdropFilter: bdf, WebkitBackdropFilter: bdf,
      opacity: leaving ? 0 : 1,
      transition: leaving ? 'opacity 0.85s ease'
        : phase >= 4 ? 'background 4s ease, backdrop-filter 4s ease, -webkit-backdrop-filter 4s ease, opacity 0.85s ease'
        : 'background 0.5s ease',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      userSelect: 'none',
    }}>
      <Backdrop />

      {/* ── Barre de progression générale (bas d'écran) ─── */}
      {phase < 4 && (
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'rgba(211,180,127,0.07)' }}>
          <div style={{ height: '100%', width: `${phaseProgress * 100}%`, background: 'linear-gradient(to right,rgba(211,180,127,0.28),rgba(211,180,127,0.55))', transition: 'width 0.12s linear', borderRadius: '1px' }} />
        </div>
      )}

      {/* ── Boutons Pause / Play + Passer ───────────────── */}
      {phase < 4 && !leaving && (
        <div style={{
          position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: '8px', alignItems: 'center',
          zIndex: 10,
        }}>
          {/* Pause / Play */}
          {phase >= 1 && (
            <button
              onClick={() => setPaused(p => !p)}
              aria-label={paused ? 'Reprendre' : 'Mettre en pause'}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '7px 14px', borderRadius: '20px',
                background: 'rgba(5,5,5,0.6)',
                border: '1px solid rgba(211,180,127,0.20)',
                color: 'rgba(211,180,127,0.55)',
                cursor: 'pointer',
                fontFamily: "'Share Tech Mono',monospace", fontSize: '8px', letterSpacing: '0.16em', textTransform: 'uppercase',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(211,180,127,0.42)'; e.currentTarget.style.color = 'rgba(211,180,127,0.90)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(211,180,127,0.20)'; e.currentTarget.style.color = 'rgba(211,180,127,0.55)' }}
            >
              {paused ? <PlayIcon /> : <PauseIcon />}
              {paused ? 'Reprendre' : 'Pause'}
            </button>
          )}
          {/* Passer */}
          <button
            onClick={() => setElapsed(P4)}
            aria-label="Passer l'introduction"
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '7px 14px', borderRadius: '20px',
              background: 'rgba(5,5,5,0.6)',
              border: '1px solid rgba(211,180,127,0.20)',
              color: 'rgba(211,180,127,0.55)',
              cursor: 'pointer',
              fontFamily: "'Share Tech Mono',monospace", fontSize: '8px', letterSpacing: '0.16em', textTransform: 'uppercase',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(211,180,127,0.42)'; e.currentTarget.style.color = 'rgba(211,180,127,0.90)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(211,180,127,0.20)'; e.currentTarget.style.color = 'rgba(211,180,127,0.55)' }}
          >
            Passer
            <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6 18L14.5 12 6 6v12zm2.5-6l6 4-6-4zm5.5-6v12h2V6h-2z"/>
            </svg>
          </button>
        </div>
      )}

      {/* ══ PHASE 0-1 : Logo + chargement ══════════════════ */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        opacity: phase <= 1 ? 1 : 0,
        transform: phase <= 1 ? 'translateY(0)' : 'translateY(-32px)',
        transition: 'opacity 0.65s ease, transform 0.65s ease',
        pointerEvents: 'none',
      }}>
        <div style={{ marginBottom: '2.8rem', filter: 'drop-shadow(0 0 36px rgba(211,180,127,0.30))' }}>
          {images.studioLogo ? (
            <img src={images.studioLogo} alt={studio.name} style={{ height: '76px', width: 'auto', objectFit: 'contain' }} />
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(2.8rem,5.5vw,4.2rem)', fontWeight: 300, letterSpacing: '0.22em', color: 'rgba(211,180,127,0.92)', textTransform: 'uppercase' }}>
                {studio.name}
              </div>
              <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: '8px', letterSpacing: '0.30em', color: 'rgba(211,180,127,0.32)', textTransform: 'uppercase', marginTop: '8px' }}>
                {studio.service}
              </div>
            </div>
          )}
        </div>
        <LoadingBar done={phase >= 1} />
        <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: '8px', letterSpacing: '0.22em', color: 'rgba(211,180,127,0.22)', textTransform: 'uppercase', marginTop: '0.9rem', transition: 'opacity 0.4s ease' }}>
          {phase < 1 ? 'Initialisation...' : 'Proposition chargée'}
        </span>
      </div>

      {/* ══ PHASE 2 : Bonjour client ═══════════════════════ */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '0 2rem', textAlign: 'center',
        opacity: phase === 2 ? 1 : 0,
        transform: phase === 2 ? 'translateY(0)' : phase < 2 ? 'translateY(26px)' : 'translateY(-26px)',
        transition: 'opacity 0.85s ease, transform 0.85s cubic-bezier(0.16,1,0.3,1)',
        pointerEvents: 'none',
      }}>
        {/* Label */}
        <p style={{
          fontFamily: "'Share Tech Mono',monospace", fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'rgba(211,180,127,0.42)', marginBottom: '1.2rem',
          opacity: p2in ? 1 : 0, transform: p2in ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.7s ease 0ms, transform 0.7s ease 0ms',
        }}>Bonjour</p>

        {/* Nom client */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond',Georgia,serif", fontWeight: 300, letterSpacing: '-0.015em', lineHeight: 1,
          fontSize: 'clamp(3rem,7.5vw,5.5rem)', color: 'rgba(222,218,210,0.92)', marginBottom: '0',
          opacity: p2in ? 1 : 0, transform: p2in ? 'translateY(0)' : 'translateY(14px)',
          transition: 'opacity 0.75s ease 120ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) 120ms',
        }}>
          {client.name}
        </h1>

        {/* Ligne dorée animée */}
        <div style={{
          width: p2in ? '52px' : '0px', height: '1px',
          background: 'rgba(211,180,127,0.38)',
          margin: '2rem auto',
          transition: 'width 0.9s cubic-bezier(0.16,1,0.3,1) 350ms',
        }} />

        {/* Corps texte */}
        <p style={{
          fontFamily: "'Cormorant Garamond',Georgia,serif", fontWeight: 300, lineHeight: 1.72,
          fontSize: 'clamp(1.1rem,2.5vw,1.55rem)', color: 'rgba(222,218,210,0.72)', maxWidth: '600px',
          opacity: p2in ? 1 : 0, transform: p2in ? 'translateY(0)' : 'translateY(14px)',
          transition: 'opacity 0.75s ease 260ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) 260ms',
        }}>
          Vous recherchez une identité de marque solide, des supports cohérents et une présence digitale à la hauteur de vos ambitions.
        </p>

        {/* Ligne basse */}
        <p style={{
          fontFamily: "'Share Tech Mono',monospace", fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(211,180,127,0.28)', marginTop: '2.8rem',
          opacity: p2in ? 1 : 0, transform: p2in ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.7s ease 480ms, transform 0.7s ease 480ms',
        }}>
          Nous avons construit quelque chose pour vous.
        </p>

        {/* Compteur de temps restant discret */}
        <div style={{
          position: 'absolute', bottom: 48,
          display: 'flex', gap: '4px', alignItems: 'center',
          opacity: p2in ? 0.5 : 0, transition: 'opacity 0.7s ease 700ms',
        }}>
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} style={{
              width: '4px', height: '4px', borderRadius: '50%',
              background: (elapsed - P2) / (P3 - P2) > i / 14
                ? 'rgba(211,180,127,0.55)' : 'rgba(211,180,127,0.14)',
              transition: 'background 0.3s ease',
            }} />
          ))}
        </div>
      </div>

      {/* ══ PHASE 3 : Carrousel ═════════════════════════════ */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '0 2rem',
        opacity: phase === 3 ? 1 : 0,
        transform: phase === 3 ? 'translateY(0)' : phase < 3 ? 'translateY(28px)' : 'translateY(-28px)',
        transition: 'opacity 0.85s ease, transform 0.85s cubic-bezier(0.16,1,0.3,1)',
        pointerEvents: phase === 3 ? 'auto' : 'none',
      }}>

        {/* Label + compteur step */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '2.4rem',
          opacity: p3in ? 1 : 0, transform: p3in ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}>
          <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: '9px', letterSpacing: '0.24em', color: 'rgba(211,180,127,0.38)', textTransform: 'uppercase' }}>
            Ce que nous proposons
          </span>
          <div style={{ width: '1px', height: '14px', background: 'rgba(211,180,127,0.15)' }} />
          <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: '9px', letterSpacing: '0.18em', color: showAll ? 'rgba(211,180,127,0.55)' : 'rgba(211,180,127,0.42)', transition: 'color 0.5s ease' }}>
            {showAll ? 'ENSEMBLE' : `0${carouselStep + 1} / 03`}
          </span>
        </div>

        {/* Zone images */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '900px' }}>

          {/* ── Vue solo : une image centrée à la fois ── */}
          <div style={{
            display: 'flex', justifyContent: 'center',
            position: 'absolute', inset: 0,
            opacity: showAll ? 0 : 1,
            transition: 'opacity 0.6s ease',
            pointerEvents: showAll ? 'none' : 'auto',
          }}>
            {SLIDES.map((slide, i) => {
              const isActive = i === carouselStep && !showAll
              return (
                <div key={i} style={{
                  position: 'absolute',
                  width: slide.ratio === '16/9' ? 'min(65vw,680px)' : 'min(52vw,560px)',
                  opacity: isActive ? 1 : 0,
                  transform: isActive
                    ? (slideIn ? 'scale(1) translateY(0)' : 'scale(0.93) translateY(12px)')
                    : 'scale(0.90) translateY(0)',
                  transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)',
                  pointerEvents: 'none',
                }}>
                  <SlideImage slide={slide} glow={isActive} />
                </div>
              )
            })}
            {/* Spacer pour maintenir la hauteur */}
            <div style={{ width: 'min(65vw,680px)', visibility: 'hidden' }}>
              <SlideImage slide={SLIDES[2]} />
            </div>
          </div>

          {/* ── Vue ensemble : 3 images en flex ── */}
          <div style={{
            display: 'flex', gap: '1rem', justifyContent: 'center',
            opacity: showAll ? 1 : 0,
            transition: 'opacity 0.7s ease',
            pointerEvents: showAll ? 'auto' : 'none',
          }}>
            {SLIDES.map((slide, i) => (
              <div key={i} style={{
                flex: '1 1 0', minWidth: 0,
                opacity: showAll ? 1 : 0,
                transform: showAll ? 'translateY(0)' : 'translateY(18px)',
                transition: `opacity 0.65s ease ${i * 180}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 180}ms`,
              }}>
                <SlideImage slide={slide} glow />
              </div>
            ))}
          </div>

        </div>

        {/* Dots indicateurs */}
        <div style={{
          display: 'flex', gap: '8px', marginTop: '2rem', alignItems: 'center',
          opacity: p3in ? 1 : 0, transition: 'opacity 0.7s ease 400ms',
        }}>
          {SLIDES.map((_, i) => (
            <div key={i} style={{
              width: (i === carouselStep && !showAll) || showAll ? '22px' : '5px',
              height: '5px', borderRadius: '3px',
              background: (i === carouselStep && !showAll) || showAll
                ? 'rgba(211,180,127,0.80)' : 'rgba(211,180,127,0.20)',
              boxShadow: ((i === carouselStep && !showAll) || showAll) ? '0 0 10px rgba(211,180,127,0.30)' : 'none',
              transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
            }} />
          ))}
        </div>

        {/* Barre de progression spécifique phase 3 */}
        <div style={{
          width: 'min(300px,70vw)', height: '1px', marginTop: '1.5rem',
          background: 'rgba(211,180,127,0.08)', borderRadius: '1px', overflow: 'hidden',
          opacity: p3in ? 0.7 : 0, transition: 'opacity 0.7s ease 500ms',
        }}>
          <div style={{ height: '100%', width: `${(p3e / (P4 - P3)) * 100}%`, background: 'rgba(211,180,127,0.45)', transition: 'width 0.12s linear' }} />
        </div>

      </div>

      {/* ══ PHASE 4 : CTA + dévoilement ════════════════════ */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '0 2rem', textAlign: 'center',
        opacity: phase >= 4 ? 1 : 0,
        transition: 'opacity 1.1s ease',
      }}>
        <p style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: '9px', letterSpacing: '0.26em', color: 'rgba(211,180,127,0.42)', textTransform: 'uppercase', marginBottom: '1.6rem' }}>
          Votre proposition est prête
        </p>
        <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.08, fontSize: 'clamp(2.2rem,5vw,4rem)', color: 'rgba(222,218,210,0.92)', marginBottom: '0.2rem' }}>
          Découvrez la vision
        </h2>
        <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.08, fontSize: 'clamp(2.2rem,5vw,4rem)', color: 'rgba(211,180,127,0.88)', marginBottom: '2.8rem' }}>
          construite pour vous.
        </h2>
        <div style={{ width: '44px', height: '1px', background: 'rgba(211,180,127,0.30)', marginBottom: '2.8rem' }} />
        <button
          onClick={handleEnter}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '17px 46px', borderRadius: '12px',
            background: '#D3B47F', color: '#050505',
            border: 'none', cursor: 'pointer',
            fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.025em',
            boxShadow: '0 8px 40px rgba(211,180,127,0.28)',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#E8CFA0'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 18px 55px rgba(211,180,127,0.42)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#D3B47F'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(211,180,127,0.28)' }}
        >
          Accéder à la proposition
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        <p style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: '8px', letterSpacing: '0.18em', color: 'rgba(211,180,127,0.20)', textTransform: 'uppercase', marginTop: '2.4rem' }}>
          {studio.name} · {studio.service}
        </p>
      </div>

    </div>
  )
}
