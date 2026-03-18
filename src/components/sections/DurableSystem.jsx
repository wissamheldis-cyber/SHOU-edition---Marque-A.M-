import { systemData } from '../../data/client'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

export default function DurableSystem() {
  return (
    <section aria-labelledby="system-heading" className="relative overflow-hidden bg-shou-900">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(211,180,127,0.12), transparent)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 container-page py-24 lg:py-32">

        <Reveal mode="up">
          <div className="mb-14 lg:mb-20 text-center mx-auto max-w-2xl">
            <SectionLabel className="justify-center">{systemData.sectionLabel}</SectionLabel>
            <h2 id="system-heading" className="display-lg mt-2">{systemData.title}</h2>
            <p className="font-serif font-light mt-5 text-sm leading-relaxed mx-auto max-w-lg" style={{ color: 'rgba(222,218,210,0.35)' }}>
              {systemData.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {systemData.pillars.map((p, i) => (
            <Reveal key={p.label} mode="up" delay={i * 100}>
              <article
                className="flex flex-col gap-4 p-6 rounded-xl h-full card-hover glass-dark"
              >
                <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '10px', letterSpacing: '0.16em', color: 'rgba(211,180,127,0.40)' }}>
                  {'0' + (i + 1)}
                </span>
                <div className="w-5 h-px" style={{ background: 'rgba(211,180,127,0.35)' }} />
                <h3 className="font-serif font-light text-sm" style={{ color: 'rgba(222,218,210,0.80)' }}>
                  {p.label}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(222,218,210,0.32)' }}>
                  {p.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Citation manifeste */}
        <Reveal mode="up" delay={400}>
          <div className="mt-10 p-8 lg:p-10 rounded-xl glass-gold">
            <p
              className="font-serif font-light leading-relaxed text-center mx-auto"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(222,218,210,0.52)', maxWidth: '680px' }}
            >
              "Un système de marque bien construit ne se refait pas à chaque nouveau support. Il se décline, il s'adapte, il grandit — sans perdre sa cohérence ni sa force."
            </p>
          </div>
        </Reveal>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(211,180,127,0.10), transparent)' }} aria-hidden="true" />
    </section>
  )
}
