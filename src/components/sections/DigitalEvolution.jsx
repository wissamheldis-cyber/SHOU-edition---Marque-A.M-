import { evolutionData, images } from '../../data/client'
import SectionWrapper from '../ui/SectionWrapper'
import SectionLabel from '../ui/SectionLabel'
import ImageZone from '../ui/ImageZone'
import SectionCarousel from '../ui/SectionCarousel'
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

function EvolutionSlide({ slide }) {
  const imgSrc = slide.imageKey ? images[slide.imageKey] : null

  return (
    <div>
      {/* Image dans le BrowserFrame */}
      <BrowserFrame>
        <ImageZone
          src={imgSrc}
          alt={slide.label}
          label={slide.label}
          hint="Screenshot de la maquette ou du site de référence"
          ratio="3/2"
          rounded="rounded-none"
        />
      </BrowserFrame>

      {/* Infos sous la frame */}
      <div style={{ marginTop: '1.75rem', padding: '0 0.5rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', letterSpacing: '0.18em', color: 'rgba(211,180,127,0.42)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          {evolutionData.preview.label}
        </p>
        <p className="font-serif font-light" style={{ fontSize: '1rem', color: 'rgba(222,218,210,0.72)', marginBottom: '0.5rem' }}>
          {slide.label}
        </p>
        <p style={{ fontSize: '0.8rem', lineHeight: 1.6, color: 'rgba(222,218,210,0.30)', maxWidth: '560px', margin: '0 auto' }}>
          {slide.description}
        </p>

        {/* Features si présentes */}
        {slide.features && (
          <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '1.25rem' }}>
            {slide.features.map(f => (
              <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckIcon />
                <span style={{ fontSize: '0.75rem', color: 'rgba(222,218,210,0.38)' }}>{f}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default function DigitalEvolution() {
  return (
    <SectionWrapper id="evolution" variant="elevated">

      <Reveal mode="up">
        <div className="mb-14 text-center mx-auto max-w-2xl">
          <SectionLabel className="justify-center">{evolutionData.sectionLabel}</SectionLabel>
          <h2 className="display-lg mt-2">{evolutionData.title}</h2>
          <p className="font-serif font-light mt-5 text-sm leading-relaxed mx-auto max-w-lg" style={{ color: 'rgba(222,218,210,0.36)' }}>
            {evolutionData.subtitle}
          </p>
        </div>
      </Reveal>

      <Reveal mode="fade" delay={150}>
        <SectionCarousel
          slides={evolutionData.slides}
          renderSlide={(slide) => <EvolutionSlide slide={slide} />}
          autoDelay={4000}
          fadeColor="#0F0F0F"
        />
      </Reveal>

    </SectionWrapper>
  )
}
