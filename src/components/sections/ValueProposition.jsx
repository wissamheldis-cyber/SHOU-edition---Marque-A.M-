import { valueData } from '../../data/client'
import SectionWrapper from '../ui/SectionWrapper'
import SectionLabel from '../ui/SectionLabel'
import Reveal from '../ui/Reveal'

export default function ValueProposition() {
  return (
    <SectionWrapper variant="surface">

      {/* ─── Titre centré ─── */}
      <Reveal mode="up">
        <div className="text-center mx-auto max-w-xl mb-16">
          <SectionLabel className="justify-center">{valueData.sectionLabel}</SectionLabel>
          <h2 className="display-md leading-tight mt-3">
            Ce que cette approche<br />cherche à apporter
          </h2>
          <div className="flex justify-center mt-6">
            <span className="gold-line" />
          </div>
        </div>
      </Reveal>

      {/* ─── Liste éditoriale, centrée ─── */}
      <div className="max-w-2xl mx-auto">
        <ul className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          {valueData.items.map((item, i) => (
            <Reveal key={item} mode="left" delay={i * 60}>
              <li className="flex items-start gap-6 py-6 group">
                <span
                  style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '10px', letterSpacing: '0.16em', color: 'rgba(211,180,127,0.30)', flexShrink: 0, paddingTop: '4px', transition: 'color 0.2s ease' }}
                  className="group-hover:text-gold-dim"
                >
                  {'0' + (i + 1)}
                </span>
                <p
                  className="font-serif font-light text-base leading-relaxed transition-colors"
                  style={{ color: 'rgba(222,218,210,0.62)' }}
                >
                  {item}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>

    </SectionWrapper>
  )
}
