import { heroData, images } from '../../data/client'
import ImageZone from '../ui/ImageZone'
import Reveal from '../ui/Reveal'

function ArrowRight() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Ouverture"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-shou-900 text-center"
    >
      {/* ─── Fonds décoratifs animés ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Orbe principal */}
        <div
          className="absolute top-[-15%] left-1/2 -translate-x-1/2 rounded-full glow-orb"
          style={{
            width:  '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(211,180,127,0.07) 0%, transparent 65%)',
            animationDelay: '0s',
          }}
        />
        {/* Orbe secondaire bas-gauche */}
        <div
          className="absolute bottom-[-10%] left-[15%] rounded-full"
          style={{
            width:  '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(211,180,127,0.04) 0%, transparent 65%)',
            animation: 'floatY 9s ease-in-out infinite',
            animationDelay: '3s',
          }}
        />
        {/* Grille subtile */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Halo or horizontal */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width:  '1200px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(211,180,127,0.10), transparent)',
          }}
        />
      </div>

      {/* ─── Contenu centré ─── */}
      <div className="relative z-10 container-page pt-36 pb-20 flex flex-col items-center">

        {/* Label studio */}
        <Reveal mode="fade" delay={0}>
          <div className="mb-12">
            <span className="section-label">{heroData.label}</span>
          </div>
        </Reveal>

        {/* Titre — Cormorant Garamond, très grand, centré */}
        <Reveal mode="up" delay={100}>
          <h1 className="mb-8" aria-label={heroData.title}>
            <span
              className="block font-serif font-light tracking-tight leading-none"
              style={{ fontSize: 'clamp(5rem, 13vw, 10rem)', color: 'rgba(222,218,210,0.92)' }}
            >
              TVIS
            </span>
            <span
              className="block font-serif font-extralight tracking-tight leading-none"
              style={{ fontSize: 'clamp(5rem, 13vw, 10rem)', color: 'rgba(222,218,210,0.14)' }}
            >
              Groupe
            </span>
          </h1>
        </Reveal>

        {/* Sous-titre centré */}
        <Reveal mode="up" delay={200}>
          <p
            className="font-serif font-light leading-relaxed mx-auto mb-5"
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.35rem)',
              color:    'rgba(222,218,210,0.48)',
              maxWidth: '540px',
            }}
          >
            {heroData.subtitle}
          </p>
        </Reveal>

        {/* Séparateur centré */}
        <Reveal mode="fade" delay={300}>
          <div className="flex justify-center mb-8">
            <span className="gold-line" />
          </div>
        </Reveal>

        {/* Corps centré */}
        <Reveal mode="up" delay={350}>
          <div
            className="mb-12 p-6 rounded-xl mx-auto"
            style={{
              background: 'rgba(211,180,127,0.035)',
              border:     '1px solid rgba(211,180,127,0.10)',
              maxWidth:   '520px',
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(222,218,210,0.33)' }}>
              {heroData.body}
            </p>
          </div>
        </Reveal>

        {/* CTAs centrés */}
        <Reveal mode="up" delay={450}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={heroData.cta.primary.href}
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-lg font-semibold text-sm transition-all"
              style={{ background: '#D3B47F', color: '#050505' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#E8CFA0'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#D3B47F'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {heroData.cta.primary.label}
              <ArrowRight />
            </a>
            <a
              href={heroData.cta.secondary.href}
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-lg font-medium text-sm transition-all"
              style={{ border: '1px solid rgba(211,180,127,0.20)', color: 'rgba(211,180,127,0.60)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(211,180,127,0.40)'
                e.currentTarget.style.color       = 'rgba(211,180,127,0.88)'
                e.currentTarget.style.transform   = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(211,180,127,0.20)'
                e.currentTarget.style.color       = 'rgba(211,180,127,0.60)'
                e.currentTarget.style.transform   = 'translateY(0)'
              }}
            >
              {heroData.cta.secondary.label}
            </a>
          </div>
        </Reveal>

        {/* ─── Zone image — centrée, large, avec cadre ─── */}
        <Reveal mode="up" delay={600}>
          <div className="relative mt-20 w-full max-w-4xl mx-auto">
            {/* Ombre de profondeur */}
            <div
              className="absolute inset-3 rounded-2xl"
              style={{
                background: 'rgba(211,180,127,0.03)',
                border:     '1px solid rgba(211,180,127,0.06)',
                transform:  'rotate(1deg) translateY(6px)',
                zIndex:     0,
              }}
            />
            <div className="relative z-10">
              <ImageZone
                src={images.heroVisual}
                alt="Présence actuelle de TVIS Groupe"
                label="Visuel client"
                hint="Screenshot du site actuel, ou mockup de direction"
                ratio="16/9"
                rounded="rounded-2xl"
              />
            </div>
            {/* Badge flottant */}
            <div
              className="absolute -bottom-4 right-6 px-4 py-2 rounded-full float-x"
              style={{
                background:          'rgba(211,180,127,0.09)',
                backdropFilter:      'blur(12px)',
                WebkitBackdropFilter:'blur(12px)',
                border:              '1px solid rgba(211,180,127,0.22)',
                zIndex:              20,
                animationDelay:      '1s',
              }}
            >
              <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', letterSpacing: '0.18em', color: 'rgba(211,180,127,0.72)' }}>
                PROPOSITION SUR-MESURE
              </span>
            </div>
          </div>
        </Reveal>

      </div>

      {/* ─── Indicateur de défilement ─── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3" aria-hidden="true">
        <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '8px', letterSpacing: '0.20em', color: 'rgba(211,180,127,0.20)' }}>
          EXPLORER
        </span>
        <div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, rgba(211,180,127,0.30), transparent)' }}
        />
      </div>

    </section>
  )
}
