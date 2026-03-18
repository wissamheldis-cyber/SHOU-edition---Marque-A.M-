import { studio, client } from '../../data/client'
import Reveal from '../ui/Reveal'

export default function Signature() {
  return (
    <section aria-label="Signature SHOU Edition" className="relative overflow-hidden bg-shou-900" style={{ borderTop: '1px solid rgba(211,180,127,0.10)' }}>
      <div className="container-page py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          <Reveal mode="up" className="lg:col-span-7">
            <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', letterSpacing: '0.18em', color: 'rgba(211,180,127,0.30)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Studio
            </p>
            <h2 className="font-serif font-light tracking-wide mb-3 leading-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'rgba(211,180,127,0.85)' }}>
              {studio.name}
            </h2>
            <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '10px', letterSpacing: '0.18em', color: 'rgba(222,218,210,0.25)', textTransform: 'uppercase', marginBottom: '2rem' }}>
              {studio.service}
            </p>
            <p className="font-serif font-light text-sm leading-relaxed max-w-md" style={{ color: 'rgba(222,218,210,0.30)' }}>
              {studio.tagline}
            </p>
          </Reveal>

          <Reveal mode="up" delay={150} className="lg:col-span-5">
            <div className="p-7 rounded-xl glass-dark space-y-4">
              <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', letterSpacing: '0.18em', color: 'rgba(211,180,127,0.32)', textTransform: 'uppercase' }}>
                Proposition préparée pour
              </p>
              <p className="font-serif font-light text-base" style={{ color: 'rgba(222,218,210,0.72)' }}>
                {client.name}
              </p>
              <p className="text-xs" style={{ color: 'rgba(222,218,210,0.28)' }}>
                {client.sector}
              </p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', letterSpacing: '0.14em', color: 'rgba(222,218,210,0.20)' }}>
                  {client.domain}
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
