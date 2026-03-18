// ─── Card ─────────────────────────────────────────────────
// variantes : dark | gold

export default function Card({ children, variant = 'dark', className = '', ...props }) {
  const variants = {
    dark: 'card-dark',
    gold: 'card-gold-border',
  }

  return (
    <div className={`rounded-xl p-7 ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  )
}
