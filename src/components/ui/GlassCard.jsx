// ─── GlassCard ────────────────────────────────────────────
// variantes : dark | gold

export default function GlassCard({ children, variant = 'dark', className = '', ...props }) {
  const variants = {
    dark: 'glass-dark',
    gold: 'glass-gold',
  }

  return (
    <div className={`rounded-xl p-7 ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  )
}
