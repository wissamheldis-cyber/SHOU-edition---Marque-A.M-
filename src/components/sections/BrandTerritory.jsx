import { territoryData } from '../../data/client'
import SectionWrapper from '../ui/SectionWrapper'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

export default function BrandTerritory() {
  return (
    <SectionWrapper id="territoire" variant="elevated">

      <Reveal mode="up">
        <div className="mb-14 lg:mb-16 text-center mx-auto max-w-2xl">
          <SectionLabel className="justify-center">{territoryData.sectionLabel}</SectionLabel>
          <h2 className="display-lg mt-2">{territoryData.title}</h2>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

        {/* Mots-clés */}
        <Reveal mode="up" delay={100} className="lg:col-span-7">
          <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', letterSpacing: '0.18em', color: 'rgba(211,180,127,0.38)', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Mots-clés de territoire
          </p>
          <div className="flex flex-wrap gap-2.5">
            {territoryData.keywords.map((kw, i) => (
              <span
                key={kw}
                className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-default"
                style={{
                  background: (i === 0 || i === 3 || i === 4) ? 'rgba(211,180,127,0.08)' : 'rgba(255,255,255,0.04)',
                  border: (i === 0 || i === 3 || i === 4) ? '1px solid rgba(211,180,127,0.22)' : '1px solid rgba(255,255,255,0.06)',
                  color: (i === 0 || i === 3 || i === 4) ? 'rgba(211,180,127,0.82)' : 'rgba(222,218,210,0.35)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(211,180,127,0.38)'
                  e.currentTarget.style.color = 'rgba(211,180,127,0.90)'
                  e.currentTarget.style.background = 'rgba(211,180,127,0.10)'
                }}
                onMouseLeave={e => {
                  const isAccent = [0, 3, 4].includes(i)
                  e.currentTarget.style.borderColor = isAccent ? 'rgba(211,180,127,0.22)' : 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.color = isAccent ? 'rgba(211,180,127,0.82)' : 'rgba(222,218,210,0.35)'
                  e.currentTarget.style.background = isAccent ? 'rgba(211,180,127,0.08)' : 'rgba(255,255,255,0.04)'
                }}
              >
                {kw}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Axe + Tension */}
        <Reveal mode="up" delay={200} className="lg:col-span-5 flex flex-col gap-4">
          <div className="p-6 rounded-xl glass-gold">
            <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', letterSpacing: '0.18em', color: 'rgba(211,180,127,0.40)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Axe de positionnement
            </p>
            <p className="font-serif font-light text-sm leading-snug" style={{ color: 'rgba(222,218,210,0.75)' }}>
              {territoryData.axis}
            </p>
          </div>
          <div className="p-6 rounded-xl glass-dark">
            <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', letterSpacing: '0.18em', color: 'rgba(211,180,127,0.40)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Tension de marque
            </p>
            <p className="font-serif font-light text-sm leading-snug" style={{ color: 'rgba(222,218,210,0.45)' }}>
              {territoryData.tension}
            </p>
          </div>
        </Reveal>

      </div>

    </SectionWrapper>
  )
}
