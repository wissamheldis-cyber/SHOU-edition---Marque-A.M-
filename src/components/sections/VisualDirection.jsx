import { visualDirectionData, images } from '../../data/client'
import SectionWrapper from '../ui/SectionWrapper'
import SectionLabel from '../ui/SectionLabel'
import ImageZone from '../ui/ImageZone'
import SectionCarousel from '../ui/SectionCarousel'
import Reveal from '../ui/Reveal'

const imageMap = {
  'Palette de couleurs':   { src: images.vdPalette, hint: 'Screenshot depuis Figma ou outil de design' },
  'Logotype':              { src: images.vdLogo,    hint: 'Export ou screenshot du concept de logo'     },
  'Système typographique': { src: images.vdTypo,    hint: 'Specimen typo — capture depuis votre outil'  },
  "Système d'interface":   { src: images.vdUI,      hint: "Composants UI — capture depuis Figma"        },
}

function VisualSlide({ slide, isActive }) {
  const cfg = imageMap[slide.label] || {}
  return (
    <article style={{ borderRadius: '16px', overflow: 'hidden', background: 'rgba(255,255,255,0.022)', border: '1px solid rgba(211,180,127,0.10)' }}>
      {/* Image grande */}
      <ImageZone
        src={cfg.src}
        alt={slide.label}
        label={slide.label}
        hint={cfg.hint}
        ratio="3/2"
        rounded="rounded-none"
      />

      {/* Infos sous l'image */}
      <div style={{ padding: '1.5rem 1.75rem 1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <p className="font-serif font-light" style={{ fontSize: '1.05rem', color: 'rgba(222,218,210,0.85)' }}>
            {slide.label}
          </p>
          <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '8px', letterSpacing: '0.18em', color: 'rgba(211,180,127,0.45)', textTransform: 'uppercase' }}>
            {slide.hint}
          </span>
        </div>
        <p style={{ fontSize: '0.8rem', lineHeight: 1.6, color: 'rgba(222,218,210,0.32)' }}>
          {slide.description}
        </p>
      </div>
    </article>
  )
}

export default function VisualDirection() {
  return (
    <SectionWrapper variant="elevated">

      <Reveal mode="up">
        <div className="mb-14 text-center mx-auto max-w-2xl">
          <SectionLabel className="justify-center">{visualDirectionData.sectionLabel}</SectionLabel>
          <h2 className="display-lg mt-2">{visualDirectionData.title}</h2>
          <p className="font-serif font-light mt-5 text-sm leading-relaxed mx-auto max-w-lg" style={{ color: 'rgba(222,218,210,0.36)' }}>
            {visualDirectionData.subtitle}
          </p>
        </div>
      </Reveal>

      <Reveal mode="fade" delay={150}>
        <SectionCarousel
          slides={visualDirectionData.placeholders}
          renderSlide={(slide, isActive) => <VisualSlide slide={slide} isActive={isActive} />}
          autoDelay={3500}
          fadeColor="#0F0F0F"
        />
      </Reveal>

    </SectionWrapper>
  )
}
