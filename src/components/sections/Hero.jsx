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
      {/* ─── Fonds décoratifs ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

        {/* Orbe principal — centre */}
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 rounded-full glow-orb"
          style={{
            width:  '900px',
            height: '900px',
            background: 'radial-gradient(circle, rgba(211,180,127,0.08) 0%, transparent 60%)',
            animationDelay: '0s',
          }}
        />
        {/* Orbe bas-gauche */}
        <div
          className="absolute bottom-[-10%] left-[10%] rounded-full"
          style={{
            width:  '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(211,180,127,0.05) 0%, transparent 65%)',
            animation: 'floatY 10s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
        {/* Orbe bas-droite */}
        <div
          className="absolute bottom-[5%] right-[8%] rounded-full"
          style={{
            width:  '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(211,180,127,0.04) 0%, transparent 65%)',
            animation: 'floatY 12s ease-in-out infinite',
            animationDelay: '5s',
          }}
        />

        {/* ─── Anneaux rotatifs ─── */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            width:        '680px',
            height:       '680px',
            marginLeft:   '-340px',
            marginTop:    '-340px',
            border:       '1px solid rgba(211,180,127,0.055)',
            borderRadius: '50%',
            animation:    'rotateGlow 45s linear infinite',
          }}
        >
          {/* Point brillant sur l'anneau */}
          <div style={{
            position:     'absolute',
            top:          '-4px',
            left:         '50%',
            transform:    'translateX(-50%)',
            width:        '8px',
            height:       '8px',
            borderRadius: '50%',
            background:   'rgba(211,180,127,0.75)',
            boxShadow:    '0 0 16px rgba(211,180,127,0.60)',
          }} />
        </div>

        <div
          className="absolute top-1/2 left-1/2"
          style={{
            width:        '1050px',
            height:       '1050px',
            marginLeft:   '-525px',
            marginTop:    '-525px',
            border:       '1px solid rgba(211,180,127,0.025)',
            borderRadius: '50%',
            animation:    'rotateGlow 80s linear infinite reverse',
          }}
        >
          <div style={{
            position:     'absolute',
            bottom:       '-3px',
            left:         '30%',
            transform:    'translateX(-50%)',
            width:        '5px',
            height:       '5px',
            borderRadius: '50%',
            background:   'rgba(211,180,127,0.50)',
            boxShadow:    '0 0 10px rgba(211,180,127,0.40)',
          }} />
        </div>

        {/* Grille subtile */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)',
            backgroundSize:  '80px 80px',
          }}
        />

        {/* Halo or horizontal */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width:      '1400px',
            height:     '1px',
            background: 'linear-gradient(to right, transparent, rgba(211,180,127,0.12), transparent)',
          }}
        />

        {/* Ligne de scan verticale */}
        <div
          className="absolute left-0 right-0 scan-line-anim"
          style={{
            height:     '1px',
            background: 'linear-gradient(to right, transparent 0%, rgba(211,180,127,0.18) 50%, transparent 100%)',
          }}
        />

        {/* Coins décoratifs */}
        <div style={{ position: 'absolute', top: '24px', left: '24px', width: '32px', height: '32px', borderTop: '1px solid rgba(211,180,127,0.18)', borderLeft: '1px solid rgba(211,180,127,0.18)' }} />
        <div style={{ position: 'absolute', top: '24px', right: '24px', width: '32px', height: '32px', borderTop: '1px solid rgba(211,180,127,0.18)', borderRight: '1px solid rgba(211,180,127,0.18)' }} />
        <div style={{ position: 'absolute', bottom: '24px', left: '24px', width: '32px', height: '32px', borderBottom: '1px solid rgba(211,180,127,0.18)', borderLeft: '1px solid rgba(211,180,127,0.18)' }} />
        <div style={{ position: 'absolute', bottom: '24px', right: '24px', width: '32px', height: '32px', borderBottom: '1px solid rgba(211,180,127,0.18)', borderRight: '1px solid rgba(211,180,127,0.18)' }} />

      </div>

      {/* ─── Contenu centré ─── */}
      <div className="relative z-10 container-page pt-40 pb-20 flex flex-col items-center">

        {/* Label studio + indicateur live */}
        <Reveal mode="fade" delay={0} duration={700}>
          <div className="mb-10 flex items-center gap-3 justify-center">
            <div className="dot-blink" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(211,180,127,0.75)', boxShadow: '0 0 8px rgba(211,180,127,0.50)', flexShrink: 0 }} />
            <span className="section-label">{heroData.label}</span>
          </div>
        </Reveal>

        {/* Titre — Cormorant Garamond, très grand */}
        <Reveal mode="up" delay={120} duration={1100}>
          <h1 className="mb-8" aria-label={heroData.title}>
            <span
              className="block font-serif font-light tracking-tight leading-none"
              style={{ fontSize: 'clamp(5.5rem, 14vw, 11rem)', color: 'rgba(222,218,210,0.92)' }}
            >
              TVIS
            </span>
            <span
              className="block font-serif font-extralight tracking-tight leading-none"
              style={{ fontSize: 'clamp(5.5rem, 14vw, 11rem)', color: 'rgba(222,218,210,0.12)' }}
            >
              Groupe
            </span>
          </h1>
        </Reveal>

        {/* Sous-titre */}
        <Reveal mode="up" delay={240} duration={1000}>
          <p
            className="font-serif font-light leading-relaxed mx-auto mb-5"
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.4rem)',
              color:    'rgba(222,218,210,0.46)',
              maxWidth: '560px',
            }}
          >
            {heroData.subtitle}
          </p>
        </Reveal>

        {/* Séparateur */}
        <Reveal mode="scale" delay={340} duration={800}>
          <div className="flex justify-center mb-8">
            <span className="gold-line" />
          </div>
        </Reveal>

        {/* Corps encadré */}
        <Reveal mode="up" delay={400} duration={1000}>
          <div
            className="mb-12 p-7 rounded-2xl mx-auto"
            style={{
              background: 'rgba(211,180,127,0.03)',
              border:     '1px solid rgba(211,180,127,0.10)',
              maxWidth:   '520px',
              boxShadow:  '0 0 40px rgba(211,180,127,0.04)',
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(222,218,210,0.32)' }}>
              {heroData.body}
            </p>
          </div>
        </Reveal>

        {/* CTAs */}
        <Reveal mode="up" delay={520} duration={1000}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={heroData.cta.primary.href}
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-xl font-semibold text-sm transition-all"
              style={{ background: '#D3B47F', color: '#050505' }}
              onMouseEnter={e => {
                e.currentTarget.style.background  = '#E8CFA0'
                e.currentTarget.style.transform   = 'translateY(-3px)'
                e.currentTarget.style.boxShadow   = '0 12px 40px rgba(211,180,127,0.30)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background  = '#D3B47F'
                e.currentTarget.style.transform   = 'translateY(0)'
                e.currentTarget.style.boxShadow   = 'none'
              }}
            >
              {heroData.cta.primary.label}
              <ArrowRight />
            </a>
            <a
              href={heroData.cta.secondary.href}
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-xl font-medium text-sm transition-all"
              style={{ border: '1px solid rgba(211,180,127,0.22)', color: 'rgba(211,180,127,0.62)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(211,180,127,0.44)'
                e.currentTarget.style.color       = 'rgba(211,180,127,0.90)'
                e.currentTarget.style.transform   = 'translateY(-3px)'
                e.currentTarget.style.boxShadow   = '0 8px 30px rgba(211,180,127,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(211,180,127,0.22)'
                e.currentTarget.style.color       = 'rgba(211,180,127,0.62)'
                e.currentTarget.style.transform   = 'translateY(0)'
                e.currentTarget.style.boxShadow   = 'none'
              }}
            >
              {heroData.cta.secondary.label}
            </a>
          </div>
        </Reveal>

        {/* ─── Zone image — centrée, large ─── */}
        <Reveal mode="up" delay={680} duration={1200}>
          <div className="relative mt-20 w-full max-w-5xl mx-auto">
            {/* Ombre de profondeur */}
            <div
              className="absolute inset-4 rounded-2xl"
              style={{
                background: 'rgba(211,180,127,0.03)',
                border:     '1px solid rgba(211,180,127,0.06)',
                transform:  'rotate(1deg) translateY(8px)',
                zIndex:     0,
              }}
            />
            <div
              className="absolute inset-2 rounded-2xl"
              style={{
                background: 'rgba(211,180,127,0.015)',
                border:     '1px solid rgba(211,180,127,0.04)',
                transform:  'rotate(-0.5deg) translateY(4px)',
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

            {/* Badge flottant gauche */}
            <div
              className="absolute -bottom-4 left-6 px-4 py-2 rounded-full float-y"
              style={{
                background:          'rgba(5,5,5,0.85)',
                backdropFilter:      'blur(16px)',
                WebkitBackdropFilter:'blur(16px)',
                border:              '1px solid rgba(255,255,255,0.08)',
                zIndex:              20,
                animationDelay:      '0.5s',
              }}
            >
              <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', letterSpacing: '0.18em', color: 'rgba(222,218,210,0.38)' }}>
                ANALYSE EN COURS
              </span>
            </div>

            {/* Badge flottant droite */}
            <div
              className="absolute -bottom-4 right-6 px-4 py-2 rounded-full float-x"
              style={{
                background:          'rgba(211,180,127,0.09)',
                backdropFilter:      'blur(16px)',
                WebkitBackdropFilter:'blur(16px)',
                border:              '1px solid rgba(211,180,127,0.24)',
                zIndex:              20,
                animationDelay:      '1.5s',
              }}
            >
              <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', letterSpacing: '0.18em', color: 'rgba(211,180,127,0.75)' }}>
                PROPOSITION SUR-MESURE
              </span>
            </div>

          </div>
        </Reveal>

      </div>

      {/* ─── Indicateur de défilement ─── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3" aria-hidden="true">
        <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '8px', letterSpacing: '0.22em', color: 'rgba(211,180,127,0.22)' }}>
          EXPLORER
        </span>
        <div
          className="w-px h-12"
          style={{ background: 'linear-gradient(to bottom, rgba(211,180,127,0.35), transparent)', animation: 'floatY 2.5s ease-in-out infinite' }}
        />
      </div>

    </section>
  )
}
