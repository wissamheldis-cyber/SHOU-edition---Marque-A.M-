// ─── Reveal ────────────────────────────────────────────────
// Animation d'apparition au scroll, déclinée en 5 modes :
//   • "up"    → fade + remontée (défaut)
//   • "fade"  → fade only
//   • "left"  → fade + glissement depuis gauche
//   • "right" → fade + glissement depuis droite
//   • "scale" → fade + zoom léger depuis 0.90

import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Reveal({
  children,
  mode      = 'up',
  delay     = 0,
  duration  = 900,
  className = '',
}) {
  const [ref, visible] = useScrollReveal()

  const transforms = {
    up:    visible ? 'translateY(0)'    : 'translateY(44px)',
    fade:  'translateY(0)',
    left:  visible ? 'translateX(0)'   : 'translateX(-36px)',
    right: visible ? 'translateX(0)'   : 'translateX(36px)',
    scale: visible ? 'scale(1)'        : 'scale(0.91)',
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
