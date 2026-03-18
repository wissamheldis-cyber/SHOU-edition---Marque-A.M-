// ═══════════════════════════════════════════════════════════
// ImageZone — Zone d'image configurable
// ───────────────────────────────────────────────────────────
// Usage :
//   <ImageZone src={images.heroVisual} label="Visuel client" />
//
// • Si `src` est null → affiche un cadre placeholder SHOU (coins dorés)
// • Si `src` est défini → affiche l'image en plein cadre
//
// Pour ajouter une image :
//   1. Mettre le fichier dans /public/images/
//   2. Mettre le chemin dans src/data/client.js → export const images
// ═══════════════════════════════════════════════════════════

export default function ImageZone({
  src       = null,
  alt       = '',
  label     = 'Image',
  hint      = 'Ajouter une image',
  ratio     = '16/9',
  className = '',
  rounded   = 'rounded-xl',
}) {
  // ─── Image définie → affichage direct ───────────────────
  if (src) {
    return (
      <div
        className={`overflow-hidden ${rounded} ${className}`}
        style={{ aspectRatio: ratio }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    )
  }

  // ─── Placeholder élégant SHOU ────────────────────────────
  return (
    <div
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{
        aspectRatio: ratio,
        background:  'rgba(255, 255, 255, 0.018)',
        border:      '1px dashed rgba(211, 180, 127, 0.18)',
      }}
    >
      {/* Coins architecturaux */}
      <Corner position="top-left"     />
      <Corner position="top-right"    />
      <Corner position="bottom-right" />
      <Corner position="bottom-left"  />

      {/* Centre */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
        {/* Icône image */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            background: 'rgba(211,180,127,0.07)',
            border:     '1px solid rgba(211,180,127,0.18)',
          }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.2}
            aria-hidden="true"
            style={{ color: 'rgba(211,180,127,0.55)' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Label + hint */}
        <div className="text-center space-y-1">
          <p
            className="font-mono text-[9px] tracking-widest uppercase"
            style={{ color: 'rgba(211,180,127,0.55)' }}
          >
            {label}
          </p>
          <p
            className="text-[10px] leading-relaxed max-w-[160px] mx-auto"
            style={{ color: 'rgba(222,218,210,0.20)' }}
          >
            {hint}
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Coin architectural ──────────────────────────────────
function Corner({ position }) {
  const isTop    = position.includes('top')
  const isLeft   = position.includes('left')
  const size     = 16
  const color    = 'rgba(211,180,127,0.45)'

  const style = {
    position: 'absolute',
    top:    isTop    ? 10 : undefined,
    bottom: !isTop   ? 10 : undefined,
    left:   isLeft   ? 10 : undefined,
    right:  !isLeft  ? 10 : undefined,
    width:  size,
    height: size,
  }

  return (
    <div style={style} aria-hidden="true">
      {/* Ligne horizontale */}
      <div style={{
        position:   'absolute',
        [isLeft ? 'left' : 'right']: 0,
        [isTop  ? 'top'  : 'bottom']: 0,
        width:      size,
        height:     1,
        background: color,
      }} />
      {/* Ligne verticale */}
      <div style={{
        position:   'absolute',
        [isLeft ? 'left' : 'right']: 0,
        [isTop  ? 'top'  : 'bottom']: 0,
        width:      1,
        height:     size,
        background: color,
      }} />
    </div>
  )
}
