// ─── ParticleField ─────────────────────────────────────────
// Particules dorées flottantes — remontée vers le haut,
// réaction au curseur (répulsion douce), glow sur les grosses.
// Canvas fixe, pointer-events: none, z-index: 0.

import { useEffect, useRef } from 'react'

// ─── Constantes de design ──────────────────────────────────
const GOLD        = [211, 180, 127]
const COUNT       = 120          // nombre total de particules
const MOUSE_R     = 130          // rayon d'influence du curseur (px)
const MOUSE_FORCE = 0.055        // intensité de la répulsion

// ─── Fabrique de particule ────────────────────────────────
function mkParticle(w, h, atBottom = false) {
  // 12% de grosses particules lumineuses, 88% de fines
  const large = Math.random() < 0.12
  const size  = large
    ? 1.4 + Math.random() * 1.2      // 1.4 → 2.6 px
    : 0.30 + Math.random() * 0.75    // 0.3 → 1.05 px

  const baseVx = (Math.random() - 0.5) * 0.10
  const baseVy = -(0.10 + Math.random() * 0.28)  // remonte

  return {
    x:         Math.random() * w,
    y:         atBottom ? h + 10 + Math.random() * 60 : Math.random() * h,
    size,
    vx:        baseVx,
    vy:        baseVy,
    baseVx,
    baseVy,
    // opacité de base — les grosses sont légèrement plus intenses
    opacity:   large
      ? 0.28 + Math.random() * 0.38
      : 0.10 + Math.random() * 0.28,
    glow:      large,
    glowR:     large ? 6 + Math.random() * 14 : 0,
    // oscillation douce en X
    wave:      Math.random() * Math.PI * 2,
    waveAmp:   0.08 + Math.random() * 0.12,
    waveSpeed: 0.006 + Math.random() * 0.008,
    // respiration de l'opacité
    pulse:     Math.random() * Math.PI * 2,
    pulseSpeed:0.005 + Math.random() * 0.009,
  }
}

export default function ParticleField() {
  const canvasRef = useRef(null)
  const stateRef  = useRef({ particles: [], mouse: { x: -9999, y: -9999 }, w: 0, h: 0 })
  const frameRef  = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const S   = stateRef.current

    // ─── Resize ────────────────────────────────────────────
    function resize() {
      S.w = canvas.width  = window.innerWidth
      S.h = canvas.height = window.innerHeight
    }
    resize()

    // ─── Init particules ──────────────────────────────────
    S.particles = Array.from({ length: COUNT }, () => mkParticle(S.w, S.h))

    // ─── Boucle de rendu ──────────────────────────────────
    function tick() {
      const { particles, mouse, w, h } = S
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {

        // — Répulsion curseur —————————————————————————————
        const dx   = p.x - mouse.x
        const dy   = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < MOUSE_R && dist > 0.5) {
          // force croissante en s'approchant du curseur
          const strength = Math.pow(1 - dist / MOUSE_R, 1.6) * MOUSE_FORCE
          p.vx += (dx / dist) * strength
          p.vy += (dy / dist) * strength
        }

        // — Rappel vers la vitesse naturelle ——————————————
        // (amortissement différencié : plus lent en X, plus rapide en Y)
        p.vx += (p.baseVx - p.vx) * 0.035
        p.vy += (p.baseVy - p.vy) * 0.045

        // — Oscillation latérale douce ————————————————————
        p.wave += p.waveSpeed
        p.x += p.vx + Math.sin(p.wave) * p.waveAmp

        // — Déplacement vertical ——————————————————————————
        p.y += p.vy

        // — Pulsation de l'opacité ————————————————————————
        p.pulse += p.pulseSpeed
        const breathe = 0.70 + 0.30 * Math.sin(p.pulse)

        // — Fondu aux bordures (haut et bas) ——————————————
        const fadeTop    = Math.min(1, p.y / 100)
        const fadeBottom = Math.min(1, (h - p.y) / 80)
        const fadeSides  = Math.min(1, Math.min(p.x, w - p.x) / 60)
        const fade       = fadeTop * fadeBottom * fadeSides

        const alpha = p.opacity * breathe * fade

        // — Recyclage ——————————————————————————————————————
        if (p.y < -20) {
          Object.assign(p, mkParticle(w, h, true))
          continue
        }
        // reboucle horizontalement
        if (p.x < -12) p.x = w + 12
        if (p.x > w + 12) p.x = -12

        if (alpha < 0.004) continue

        // — Dessin ————————————————————————————————————————
        ctx.save()

        if (p.glow) {
          // double halo : large et diffus + petit et intense
          ctx.shadowBlur  = p.glowR
          ctx.shadowColor = `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},0.90)`
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},${alpha.toFixed(3)})`
        ctx.fill()

        // Halo secondaire sur les grosses particules
        if (p.glow && alpha > 0.12) {
          ctx.shadowBlur  = p.glowR * 2.2
          ctx.shadowColor = `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},0.30)`
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 1.6, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},${(alpha * 0.18).toFixed(3)})`
          ctx.fill()
        }

        ctx.restore()
      }

      frameRef.current = requestAnimationFrame(tick)
    }

    // ─── Événements ───────────────────────────────────────
    const onMouse  = e => { S.mouse.x = e.clientX; S.mouse.y = e.clientY }
    const onLeave  = ()  => { S.mouse.x = -9999;   S.mouse.y = -9999 }
    const onResize = ()  => resize()

    window.addEventListener('mousemove',  onMouse,  { passive: true })
    window.addEventListener('mouseleave', onLeave,  { passive: true })
    window.addEventListener('resize',     onResize, { passive: true })

    tick()

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('mousemove',  onMouse)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('resize',     onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position:      'fixed',
        inset:         0,
        width:         '100%',
        height:        '100%',
        pointerEvents: 'none',
        zIndex:        0,
        willChange:    'transform',   // GPU layer
      }}
    />
  )
}
