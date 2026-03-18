import { directionData } from '../../data/client'
import SectionWrapper from '../ui/SectionWrapper'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

export default function BrandDirection() {
  return (
    <SectionWrapper variant="surface">

      <Reveal mode="up">
        <div className="mb-14 lg:mb-20 text-center mx-auto max-w-2xl">
          <SectionLabel className="justify-center">{directionData.sectionLabel}</SectionLabel>
          <h2 className="display-lg mt-2">{directionData.title}</h2>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
        {directionData.points.map((point, i) => (
          <Reveal key={point.label} mode="up" delay={i * 110}>
            <article
              className="flex flex-col gap-5 p-8 rounded-xl h-full card-hover"
              style={{
                background: i === 1 ? 'rgba(211,180,127,0.04)' : '#0F0F0F',
                border: i === 1 ? '1px solid rgba(211,180,127,0.16)' : '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '10px', letterSpacing: '0.16em', color: 'rgba(211,180,127,0.38)' }}>
                {'0' + (i + 1)}
              </span>
              <h3 className="font-serif font-light text-base leading-snug" style={{ color: 'rgba(222,218,210,0.82)' }}>
                {point.label}
              </h3>
              <div className="w-full h-px" style={{ background: i === 1 ? 'rgba(211,180,127,0.12)' : 'rgba(255,255,255,0.05)' }} />
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(222,218,210,0.36)' }}>
                {point.text}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

    </SectionWrapper>
  )
}
