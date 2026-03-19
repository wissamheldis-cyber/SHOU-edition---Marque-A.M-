import { readingData } from '../../data/client'
import SectionWrapper from '../ui/SectionWrapper'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

export default function ProjectReading() {
  return (
    <SectionWrapper id="lecture" variant="surface">

      {/* ─── En-tête centré ─── */}
      <Reveal mode="up">
        <div className="mb-14 lg:mb-20 text-center mx-auto max-w-2xl">
          <SectionLabel className="justify-center">{readingData.sectionLabel}</SectionLabel>
          <h2 className="display-lg mt-2">{readingData.title}</h2>
        </div>
      </Reveal>

      {/* ─── Colonnes ─── */}
      <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
        {readingData.columns.map((col, i) => (
          <Reveal key={col.label} mode="up" delay={i * 100}>
            <article
              className="flex flex-col gap-5 p-7 rounded-xl h-full card-hover"
              style={{
                background: '#0A0A0A',
                border: `1px solid ${i === 1 ? 'rgba(211,180,127,0.18)' : 'rgba(255,255,255,0.05)'}`,
              }}
            >
              <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '10px', letterSpacing: '0.16em', color: 'rgba(211,180,127,0.38)' }}>
                {'0' + (i + 1)}
              </span>
              <div className="w-6 h-px rounded-full" style={{ background: i === 1 ? 'rgba(211,180,127,0.45)' : 'rgba(255,255,255,0.10)' }} />
              <h3 className="font-serif font-light text-base leading-snug" style={{ color: 'rgba(222,218,210,0.80)' }}>
                {col.label}
              </h3>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} />
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(222,218,210,0.86)' }}>
                {col.text}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

    </SectionWrapper>
  )
}
