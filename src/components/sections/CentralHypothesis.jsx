import { hypothesisData } from '../../data/client'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

export default function CentralHypothesis() {
  const lines = hypothesisData.formula.split('\n')

  return (
    <section
      aria-labelledby="hypothesis-heading"
      className="relative overflow-hidden bg-shou-900 text-center"
    >
      {/* ─── Décoration ─── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full gold-pulse"
          style={{
            width:      '800px',
            height:     '800px',
            background: 'radial-gradient(circle, rgba(211,180,127,0.045) 0%, transparent 60%)',
          }}
        />
        {/* Lignes horizontales décoratives */}
        <div className="absolute inset-0 flex flex-col justify-between py-16 pointer-events-none">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="w-full h-px"
              style={{ background: 'linear-gradient(to right, transparent, rgba(211,180,127,0.06), transparent)' }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container-page py-36 lg:py-44 flex flex-col items-center">

        <Reveal mode="fade" delay={0}>
          <SectionLabel className="justify-center">{hypothesisData.sectionLabel}</SectionLabel>
        </Reveal>

        {/* Thèse */}
        <Reveal mode="up" delay={100}>
          <p
            className="font-serif font-light leading-relaxed mx-auto mt-4 mb-16"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color:    'rgba(222,218,210,0.35)',
              maxWidth: '540px',
            }}
          >
            {hypothesisData.thesis}
          </p>
        </Reveal>

        {/* Séparateur */}
        <Reveal mode="fade" delay={200}>
          <div className="flex items-center justify-center gap-4 mb-14">
            <div className="w-6 h-px" style={{ background: 'rgba(211,180,127,0.40)' }} />
            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', letterSpacing: '0.20em', color: 'rgba(211,180,127,0.45)' }}>
              FORMULE CENTRALE
            </span>
            <div className="w-6 h-px" style={{ background: 'rgba(211,180,127,0.40)' }} />
          </div>
        </Reveal>

        {/* Formule — grande, centrée, shimmer sur la dernière ligne */}
        <div id="hypothesis-heading" role="heading" aria-level="2">
          {lines.map((line, i) => (
            <Reveal key={line} mode="up" delay={260 + i * 100}>
              <p
                className={i === lines.length - 1 ? 'shimmer-text' : ''}
                style={{
                  fontFamily:   "'Cormorant Garamond', Georgia, serif",
                  fontSize:     'clamp(2.5rem, 6.5vw, 5.5rem)',
                  fontWeight:   300,
                  lineHeight:   1.05,
                  letterSpacing:'-0.01em',
                  color:        i === lines.length - 1
                    ? undefined
                    : `rgba(222,218,210,${[0.20, 0.55][i] ?? 0.88})`,
                  marginBottom: i < lines.length - 1 ? '0.12em' : 0,
                }}
              >
                {line}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Accent bar centré */}
        <Reveal mode="fade" delay={600}>
          <div className="flex justify-center gap-2 mt-14" aria-hidden="true">
            {[40, 24, 12].map((w, n) => (
              <div
                key={n}
                className="h-px rounded-full"
                style={{
                  width:      w,
                  background: `rgba(211,180,127,${[0.55, 0.30, 0.15][n]})`,
                }}
              />
            ))}
          </div>
        </Reveal>

      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(211,180,127,0.10), transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
