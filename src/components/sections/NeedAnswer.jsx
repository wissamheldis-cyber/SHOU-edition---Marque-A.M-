import { needAnswerData } from '../../data/client'
import SectionWrapper from '../ui/SectionWrapper'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

function CheckIcon() {
  return (
    <svg style={{ width: '13px', height: '13px', flexShrink: 0, marginTop: '2px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg style={{ width: '13px', height: '13px', flexShrink: 0, marginTop: '2px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

export default function NeedAnswer() {
  const { left, right } = needAnswerData

  return (
    <SectionWrapper id="besoins" variant="elevated">

      <Reveal mode="up">
        <div className="mb-14 text-center mx-auto max-w-2xl">
          <SectionLabel className="justify-center">{needAnswerData.sectionLabel}</SectionLabel>
          <h2 className="display-lg mt-2">{needAnswerData.title}</h2>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-4 lg:gap-5 max-w-5xl mx-auto">

        {/* ─── Colonne gauche : ce que vous recherchez ─── */}
        <Reveal mode="up" delay={80}>
          <div
            className="flex flex-col h-full rounded-xl p-7"
            style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            {/* En-tête colonne */}
            <div className="mb-6 flex items-center gap-3">
              <div className="w-5 h-px" style={{ background: 'rgba(255,255,255,0.16)' }} />
              <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(222,218,210,0.84)' }}>
                {left.heading}
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {left.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3"
                  style={{ color: 'rgba(222,218,210,0.90)' }}
                >
                  <span style={{ color: 'rgba(255,255,255,0.22)', marginTop: '0px' }}>
                    <CheckIcon />
                  </span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* ─── Colonne droite : ce que nous proposons ─── */}
        <Reveal mode="up" delay={180}>
          <div
            className="flex flex-col h-full rounded-xl p-7"
            style={{
              background: 'rgba(211,180,127,0.03)',
              border:     '1px solid rgba(211,180,127,0.18)',
              boxShadow:  '0 0 40px rgba(211,180,127,0.04)',
            }}
          >
            {/* En-tête colonne */}
            <div className="mb-6 flex items-center gap-3">
              <div className="w-5 h-px" style={{ background: 'rgba(211,180,127,0.40)' }} />
              <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(211,180,127,0.55)' }}>
                {right.heading}
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {right.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3"
                  style={{ color: 'rgba(222,218,210,0.70)' }}
                >
                  <span style={{ color: 'rgba(211,180,127,0.65)' }}>
                    <ArrowIcon />
                  </span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

      </div>

    </SectionWrapper>
  )
}
