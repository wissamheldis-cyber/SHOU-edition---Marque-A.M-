// ─── SectionWrapper ────────────────────────────────────────
// variants : base | surface | elevated | deep | accent

export default function SectionWrapper({ children, id, variant = 'base', className = '' }) {
  const variants = {
    base:     'bg-shou-900',         // #050505
    surface:  'bg-shou-800',         // #0A0A0A
    elevated: 'bg-shou-700',         // #0F0F0F
    deep:     'bg-[#030304]',        // plus profond que la base
  }

  return (
    <section id={id} className={`${variants[variant]} ${className}`}>
      <div className="container-page py-14 md:py-20 lg:py-32">
        {children}
      </div>
    </section>
  )
}
