import { evolutionData, images } from '../../data/client'
import SectionWrapper from '../ui/SectionWrapper'
import SectionLabel from '../ui/SectionLabel'
import ImageZone from '../ui/ImageZone'
import Reveal from '../ui/Reveal'

function CheckIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true" style={{ color: 'rgba(211,180,127,0.65)' }}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function BrowserFrame({ children }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(211,180,127,0.12)', boxShadow: '0 24px 64px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.35)' }}>
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b" style={{ background: '#0A0A0A', borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.10)' }} />
        <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.10)' }} />
        <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.10)' }} />
        <div className="flex-1 mx-4 h-5 rounded-md flex items-center px-2.5" style={{ background: 'rgba(255,255,255,0.04)' }}>
          <div className="h-1 w-28 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }} />
        </div>
      </div>
      {children}
    </div>
  )
}

export default function DigitalEvolution() {
  return (
    <SectionWrapper id="evolution" variant="elevated">

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        <Reveal mode="left" className="lg:col-span-5">
          <SectionLabel>{evolutionData.sectionLabel}</SectionLabel>
          <h2 className="display-lg mt-2 mb-6">{evolutionData.title}</h2>
          <p className="font-serif font-light text-sm leading-relaxed mb-8" style={{ color: 'rgba(222,218,210,0.36)' }}>
            {evolutionData.subtitle}
          </p>
          <div className="p-6 rounded-xl glass-gold">
            <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', letterSpacing: '0.18em', color: 'rgba(211,180,127,0.42)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              {evolutionData.preview.label}
            </p>
            <p className="font-serif font-light text-sm leading-relaxed mb-5" style={{ color: 'rgba(222,218,210,0.60)' }}>
              {evolutionData.preview.description}
            </p>
            <ul className="space-y-2.5">
              {evolutionData.preview.features.map(f => (
                <li key={f} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <span className="text-xs leading-relaxed" style={{ color: 'rgba(222,218,210,0.38)' }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal mode="up" delay={150} className="lg:col-span-7">
          <BrowserFrame>
            <ImageZone
              src={images.landingPreview}
              alt="Aperçu landing page MVP"
              label="Landing page MVP"
              hint="Screenshot de la maquette ou du site de référence"
              ratio="3/2"
              rounded="rounded-none"
            />
          </BrowserFrame>
        </Reveal>

      </div>

    </SectionWrapper>
  )
}
