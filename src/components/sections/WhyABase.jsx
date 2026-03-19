import { whyBaseData } from '../../data/client'
import SectionWrapper from '../ui/SectionWrapper'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

export default function WhyABase() {
  const { contrasts, pillars, quote } = whyBaseData

  return (
    <SectionWrapper id="base" variant="surface">

      <Reveal mode="up">
        <div className="mb-14 lg:mb-18 text-center mx-auto max-w-2xl">
          <SectionLabel className="justify-center">{whyBaseData.sectionLabel}</SectionLabel>
          <h2 className="display-lg mt-2">{whyBaseData.title}</h2>
        </div>
      </Reveal>

      {/* ─── Tableau de contraste ─── */}
      <div className="max-w-4xl mx-auto mb-14 lg:mb-20">

        {/* En-têtes colonnes */}
        <Reveal mode="up" delay={60}>
          <div className="grid grid-cols-2 gap-4 mb-4 px-1">
            <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', letterSpacing: '0.20em', textTransform: 'uppercase', color: 'rgba(222,218,210,0.75)' }}>
              Sans base commune
            </p>
            <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', letterSpacing: '0.20em', textTransform: 'uppercase', color: 'rgba(211,180,127,0.50)' }}>
              Avec une base structurée
            </p>
          </div>
        </Reveal>

        {/* Lignes de contraste */}
        <div className="flex flex-col gap-3">
          {contrasts.map((row, i) => (
            <Reveal key={i} mode="up" delay={100 + i * 90}>
              <div className="grid grid-cols-2 gap-4">

                {/* Gauche — production isolée */}
                <div
                  className="flex flex-col gap-3 p-6 rounded-xl"
                  style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <h3
                    className="font-serif font-light text-sm leading-snug"
                    style={{ color: 'rgba(222,218,210,0.86)' }}
                  >
                    {row.left.label}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(222,218,210,0.78)' }}>
                    {row.left.text}
                  </p>
                </div>

                {/* Droite — base structurée */}
                <div
                  className="flex flex-col gap-3 p-6 rounded-xl"
                  style={{
                    background: 'rgba(211,180,127,0.03)',
                    border:     '1px solid rgba(211,180,127,0.16)',
                  }}
                >
                  <h3
                    className="font-serif font-light text-sm leading-snug"
                    style={{ color: 'rgba(222,218,210,0.80)' }}
                  >
                    {row.right.label}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(222,218,210,0.87)' }}>
                    {row.right.text}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ─── Séparateur ─── */}
      <Reveal mode="fade" delay={380}>
        <div className="flex items-center gap-4 mb-12 max-w-4xl mx-auto">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(211,180,127,0.12))' }} />
          <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '8px', letterSpacing: '0.20em', color: 'rgba(211,180,127,0.35)', textTransform: 'uppercase' }}>
            Ce que vous possédez à la fin
          </span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(211,180,127,0.12))' }} />
        </div>
      </Reveal>

      {/* ─── Piliers du système ─── */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {pillars.map((p, i) => (
          <Reveal key={p.label} mode="up" delay={440 + i * 80}>
            <article className="flex flex-col gap-4 p-6 rounded-xl h-full card-hover glass-dark">
              <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '10px', letterSpacing: '0.16em', color: 'rgba(211,180,127,0.40)' }}>
                {'0' + (i + 1)}
              </span>
              <div className="w-5 h-px" style={{ background: 'rgba(211,180,127,0.35)' }} />
              <h3 className="font-serif font-light text-sm" style={{ color: 'rgba(222,218,210,0.80)' }}>
                {p.label}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(222,218,210,0.84)' }}>
                {p.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* ─── Citation manifeste ─── */}
      <Reveal mode="up" delay={700}>
        <div className="p-8 lg:p-10 rounded-xl glass-gold max-w-4xl mx-auto">
          <p
            className="font-serif font-light leading-relaxed text-center mx-auto"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', color: 'rgba(222,218,210,0.90)', maxWidth: '680px' }}
          >
            {quote}
          </p>
        </div>
      </Reveal>

    </SectionWrapper>
  )
}
