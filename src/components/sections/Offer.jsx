import { offerData } from '../../data/client'
import SectionWrapper from '../ui/SectionWrapper'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

const phaseIcons = {
  '01': <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
  '02': <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />,
  '03': <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />,
}

function PhaseCard({ phase, delay }) {
  return (
    <Reveal mode="up" delay={delay}>
      <article
        className="flex flex-col gap-5 p-7 rounded-xl h-full card-hover"
        style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div
            style={{
              width: '38px', height: '38px',
              borderRadius: '12px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(211,180,127,0.07)',
              border: '1px solid rgba(211,180,127,0.16)',
              color: 'rgba(211,180,127,0.65)',
              flexShrink: 0,
            }}
          >
            <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3} aria-hidden="true">
              {phaseIcons[phase.number]}
            </svg>
          </div>
          <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', letterSpacing: '0.18em', color: 'rgba(211,180,127,0.30)', textTransform: 'uppercase' }}>
            {phase.tag}
          </span>
        </div>

        {/* Titre phase */}
        <h3 className="font-serif font-light text-base leading-snug" style={{ color: 'rgba(222,218,210,0.88)' }}>
          {phase.label}
        </h3>

        {/* Description */}
        <p className="text-xs leading-relaxed" style={{ color: 'rgba(222,218,210,0.86)' }}>
          {phase.description}
        </p>

        {/* Séparateur */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 'auto' }} />

        {/* Livrables */}
        <div>
          <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '8px', letterSpacing: '0.18em', color: 'rgba(211,180,127,0.38)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Vous possédez
          </p>
          <ul className="space-y-2">
            {phase.deliverables.map(d => (
              <li key={d} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgba(211,180,127,0.40)' }} />
                <span className="text-xs" style={{ color: 'rgba(222,218,210,0.87)' }}>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  )
}

export default function Offer() {
  return (
    <SectionWrapper id="offre" variant="elevated">

      <Reveal mode="up">
        <div className="text-center mx-auto max-w-2xl mb-6">
          <SectionLabel className="justify-center">{offerData.sectionLabel}</SectionLabel>
          <h2 className="display-lg mt-2">{offerData.title}</h2>
        </div>
      </Reveal>

      <Reveal mode="up" delay={100}>
        <div className="text-center mx-auto max-w-xl mb-14">
          <p className="font-serif font-light text-base leading-relaxed" style={{ color: 'rgba(222,218,210,0.86)' }}>
            {offerData.subtitle}
          </p>
          <div className="flex justify-center mt-6">
            <span className="gold-line" />
          </div>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-4 lg:gap-5">
        {offerData.phases.map((phase, i) => (
          <PhaseCard key={phase.number} phase={phase} delay={i * 100} />
        ))}
      </div>

      <Reveal mode="fade" delay={400}>
        <div className="mt-12 p-6 rounded-xl glass-gold">
          <p className="text-xs leading-relaxed text-center max-w-2xl mx-auto" style={{ color: 'rgba(222,218,210,0.82)' }}>
            Chaque phase est livrée de façon documentée et transmissible. Votre équipe peut faire évoluer la base, sans faire appel à une agence à chaque modification, et sans repartir de zéro.
          </p>
        </div>
      </Reveal>

    </SectionWrapper>
  )
}
