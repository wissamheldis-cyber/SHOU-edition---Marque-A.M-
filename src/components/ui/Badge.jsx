// ─── Badge / Tag ──────────────────────────────────────────
// variantes : default | gold | outline | mono

export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-white/[0.04] text-shou-200 border border-white/[0.07]',
    gold:    'text-gold border border-gold/20',
    outline: 'border border-white/[0.12] text-shou-300',
    mono:    'font-mono text-gold/60 border border-gold/15 bg-gold/[0.04]',
  }

  return (
    <span
      className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
