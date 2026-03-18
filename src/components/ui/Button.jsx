// ─── Button ────────────────────────────────────────────────
// variantes : primary | secondary | ghost | outline

export default function Button({ children, variant = 'primary', href, onClick, className = '' }) {
  const base = 'inline-flex items-center justify-center gap-2 text-sm rounded-lg transition-all duration-200 cursor-pointer font-medium'

  const variants = {
    primary:   'bg-gold text-shou-900 px-8 py-4 hover:bg-gold-light font-semibold',
    secondary: 'border border-gold/30 text-gold px-8 py-4 hover:bg-gold/[0.07]',
    ghost:     'text-shou-200 px-4 py-2 hover:text-gold',
    outline:   'border border-white/10 text-shou-200 px-8 py-4 hover:border-gold/30 hover:text-gold',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) return <a href={href} className={classes}>{children}</a>

  return (
    <button onClick={onClick} className={classes}>{children}</button>
  )
}
