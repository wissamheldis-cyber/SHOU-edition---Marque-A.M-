import { studio } from '../../data/client'
import Reveal from '../ui/Reveal'

export default function FinalCTA() {
  return (
    <section id="contact" aria-labelledby="final-cta-heading" className="relative overflow-hidden bg-shou-900 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>

      {/* Décoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full gold-pulse"
          style={{ width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(211,180,127,0.06) 0%, transparent 60%)' }}
        />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      </div>

      <div className="relative z-10 container-page py-36 lg:py-48 flex flex-col items-center">

        <Reveal mode="fade">
          <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', letterSpacing: '0.20em', color: 'rgba(211,180,127,0.28)', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
            Prochaine étape
          </p>
        </Reveal>

        <Reveal mode="up" delay={100}>
          <h2
            id="final-cta-heading"
            className="font-serif font-light tracking-tight leading-tight mx-auto mb-8"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)', color: 'rgba(222,218,210,0.88)', maxWidth: '680px' }}
          >
            Voir ce que votre présence pourrait réellement devenir.
          </h2>
        </Reveal>

        <Reveal mode="fade" delay={200}>
          <div className="flex justify-center mb-8">
            <span className="gold-line" />
          </div>
        </Reveal>

        <Reveal mode="up" delay={250}>
          <p
            className="font-serif font-light text-base leading-relaxed mx-auto mb-14"
            style={{ color: 'rgba(222,218,210,0.28)', maxWidth: '400px' }}
          >
            Cette page n'est qu'un aperçu. La prochaine étape, c'est de construire la vraie base — ensemble.
          </p>
        </Reveal>

        <Reveal mode="up" delay={350}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${studio.contact}`}
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-lg font-semibold text-sm transition-all"
              style={{ background: '#D3B47F', color: '#050505' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#E8CFA0'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#D3B47F'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Démarrer la conversation
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#top"
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-lg font-medium text-sm transition-all"
              style={{ border: '1px solid rgba(211,180,127,0.18)', color: 'rgba(211,180,127,0.55)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(211,180,127,0.38)'; e.currentTarget.style.color = 'rgba(211,180,127,0.85)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(211,180,127,0.18)'; e.currentTarget.style.color = 'rgba(211,180,127,0.55)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Revoir la proposition
            </a>
          </div>
        </Reveal>

        <Reveal mode="fade" delay={500}>
          <div className="mt-24 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', letterSpacing: '0.18em', color: 'rgba(211,180,127,0.20)', textTransform: 'uppercase' }}>
              {studio.name} — {studio.service}
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
