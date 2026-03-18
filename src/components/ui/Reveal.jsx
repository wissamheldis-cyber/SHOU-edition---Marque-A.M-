// ─── Reveal ────────────────────────────────────────────────
// Animation d'apparition au scroll, déclinée en 3 modes :
//   • "up"   → fade + remontée (défaut)
//   • "fade" → fade only
//   • "left" → fade + glissement depuis gauche

import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Reveal({
  children,
  mode      = 'up',
  delay     = 0,
  duration  = 800,
  className = '',
}) {
  const [ref, visible] = useScrollReveal()

  const transforms = {
    up:   visible ? 'translateY(0)'   : 'translateY(32px)',
    fade: 'translateY(0)',
    left: visible ? 'translateX(0)'   : 'translateX(-20px)',
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  transforms[mode],
        transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: visible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
