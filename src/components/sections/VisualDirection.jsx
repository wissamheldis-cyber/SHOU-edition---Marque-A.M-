import { visualDirectionData, images } from '../../data/client'
import SectionWrapper from '../ui/SectionWrapper'
import SectionLabel from '../ui/SectionLabel'
import ImageZone from '../ui/ImageZone'
import Reveal from '../ui/Reveal'

const imageConfig = {
  'Palette de couleurs':  { src: images.vdPalette, label: 'Palette de couleurs',   hint: 'Screenshot depuis Figma ou outil de design' },
  'Logotype':             { src: images.vdLogo,    label: 'Direction logotype',     hint: 'Export ou screenshot du concept de logo' },
  'Système typographique':{ src: images.vdTypo,    label: 'Système typographique',  hint: 'Specimen typo — capture depuis votre outil' },
  "Système d'interface":  { src: images.vdUI,      label: "Système d'interface",    hint: 'Composants UI — capture depuis Figma' },
}

export default function VisualDirection() {
  return (
    <SectionWrapper variant="elevated">

      <Reveal mode="up">
        <div className="mb-14 lg:mb-20 text-center mx-auto max-w-2xl">
          <SectionLabel className="justify-center">{visualDirectionData.sectionLabel}</SectionLabel>
          <h2 className="display-lg mt-2">{visualDirectionData.title}</h2>
          <p className="font-serif font-light mt-5 text-sm leading-relaxed mx-auto max-w-lg" style={{ color: 'rgba(222,218,210,0.36)' }}>
            {visualDirectionData.subtitle}
          </p>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {visualDirectionData.placeholders.map((p, i) => {
          const cfg = imageConfig[p.label] || {}
          return (
            <Reveal key={p.label} mode="up" delay={i * 90}>
              <article
                className="flex flex-col gap-5 p-5 rounded-xl card-hover"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(211,180,127,0.10)' }}
              >
                <ImageZone
                  src={cfg.src}
                  alt={p.label}
                  label={cfg.label}
                  hint={cfg.hint}
                  ratio="3/2"
                  rounded="rounded-lg"
                />
                <div>
                  <p className="font-serif font-light text-sm mb-1" style={{ color: 'rgba(222,218,210,0.72)' }}>
                    {p.label}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(222,218,210,0.28)' }}>
                    {p.description}
                  </p>
                </div>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '8px', letterSpacing: '0.16em', color: 'rgba(211,180,127,0.42)' }}>
                  {p.hint.toUpperCase()}
                </span>
              </article>
            </Reveal>
          )
        })}
      </div>

    </SectionWrapper>
  )
}
