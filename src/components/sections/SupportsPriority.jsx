import { supportsData, images } from '../../data/client'
import SectionWrapper from '../ui/SectionWrapper'
import SectionLabel from '../ui/SectionLabel'
import ImageZone from '../ui/ImageZone'
import SectionCarousel from '../ui/SectionCarousel'
import Reveal from '../ui/Reveal'

const iconPaths = {
  'LinkedIn':           <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />,
  'Bannières':          <><rect x="3" y="7" width="18" height="11" rx="2" strokeWidth="1.5"/><path strokeLinecap="round" d="M7 12h10M7 9.5h5" strokeWidth="1.5"/></>,
  'Brochures':          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth="1.5"/>,
  'Fiches produits':    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeWidth="1.5"/>,
  'Devis & documents':  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth="1.5"/>,
  'Catalogue':          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeWidth="1.5"/>,
  'Landing page':       <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeWidth="1.5"/>,
  'Supports terrain':   <><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="1.5"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="1.5"/></>,
}

// Placeholder cadenas — affiché quand aucune image n'est disponible
function SupportTypoVisual({ label }) {
  return (
    <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(255,255,255,0.018)',
        border: '1px dashed rgba(211,180,127,0.18)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '12px',
      }}>
        {/* Coins */}
        <div aria-hidden="true" style={{ position:'absolute', top:10, left:10,  width:16, height:16, borderTop:'1px solid rgba(211,180,127,0.45)', borderLeft:'1px solid rgba(211,180,127,0.45)' }} />
        <div aria-hidden="true" style={{ position:'absolute', top:10, right:10, width:16, height:16, borderTop:'1px solid rgba(211,180,127,0.45)', borderRight:'1px solid rgba(211,180,127,0.45)' }} />
        <div aria-hidden="true" style={{ position:'absolute', bottom:10, left:10,  width:16, height:16, borderBottom:'1px solid rgba(211,180,127,0.45)', borderLeft:'1px solid rgba(211,180,127,0.45)' }} />
        <div aria-hidden="true" style={{ position:'absolute', bottom:10, right:10, width:16, height:16, borderBottom:'1px solid rgba(211,180,127,0.45)', borderRight:'1px solid rgba(211,180,127,0.45)' }} />
        {/* Cadenas */}
        <div style={{
          width:'40px', height:'40px', borderRadius:'10px', flexShrink:0,
          display:'flex', alignItems:'center', justifyContent:'center',
          background:'rgba(211,180,127,0.07)', border:'1px solid rgba(211,180,127,0.18)',
        }}>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="rgba(211,180,127,0.55)" strokeWidth="1.2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        {/* Texte */}
        <div style={{ textAlign:'center' }}>
          <p style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:'9px', letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(211,180,127,0.55)', marginBottom:'6px' }}>
            {label}
          </p>
          <p style={{ fontSize:'10px', lineHeight:1.6, color:'rgba(222,218,210,0.28)', maxWidth:'180px', margin:'0 auto' }}>
            Sera défini lors de notre rendez-vous pour affiner vos intentions.
          </p>
        </div>
      </div>
    </div>
  )
}

function SupportSlide({ item }) {
  const imgSrc = item.imageKey ? images[item.imageKey] : null

  return (
    <article
      style={{
        borderRadius: '16px',
        overflow:     'hidden',
        background:   '#0A0A0A',
        border:       '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Zone image ou vitrine typographique */}
      {imgSrc ? (
        <ImageZone
          src={imgSrc}
          alt={item.label}
          label={item.label}
          hint={`Visuel pour ${item.label}`}
          ratio="16/9"
          rounded="rounded-none"
        />
      ) : (
        <SupportTypoVisual label={item.label} />
      )}

      {/* Infos */}
      <div style={{ padding: '1.5rem 1.75rem 1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
          <div style={{
            width: '36px', height: '36px', flexShrink: 0,
            borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(211,180,127,0.07)', border: '1px solid rgba(211,180,127,0.16)',
          }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" style={{ color: 'rgba(211,180,127,0.65)' }}>
              {iconPaths[item.label]}
            </svg>
          </div>
          <p className="font-serif font-light" style={{ fontSize: '1rem', color: 'rgba(222,218,210,0.80)' }}>
            {item.label}
          </p>
        </div>
        <p style={{ fontSize: '0.8rem', lineHeight: 1.6, color: 'rgba(222,218,210,0.82)' }}>
          {item.description}
        </p>
      </div>
    </article>
  )
}

export default function SupportsPriority() {
  return (
    <SectionWrapper id="supports" variant="surface">

      <Reveal mode="up">
        <div className="mb-14 text-center mx-auto max-w-2xl">
          <SectionLabel className="justify-center">{supportsData.sectionLabel}</SectionLabel>
          <h2 className="display-lg mt-2">{supportsData.title}</h2>
        </div>
      </Reveal>

      <Reveal mode="fade" delay={150}>
        <SectionCarousel
          slides={supportsData.items}
          renderSlide={(item) => <SupportSlide item={item} />}
          autoDelay={3000}
          fadeColor="#0A0A0A"
        />
      </Reveal>

    </SectionWrapper>
  )
}
