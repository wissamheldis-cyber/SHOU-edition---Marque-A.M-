// ─── SectionLabel ─────────────────────────────────────────
// Mono label doré — typique SHOU Edition

export default function SectionLabel({ children, className = '' }) {
  return (
    <p className={`section-label mb-7 ${className}`}>
      {children}
    </p>
  )
}
