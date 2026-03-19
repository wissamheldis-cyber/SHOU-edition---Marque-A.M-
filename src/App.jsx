// ─── App V2 ────────────────────────────────────────────────
// Architecture V2 — 10 sections, ordre recentré sur le concret
// Pour dupliquer ce template, remplacer uniquement src/data/client.js

import CursorGlow      from './components/ui/CursorGlow'
import ParticleField   from './components/ui/ParticleField'
import Navigation      from './components/Navigation'
import Hero            from './components/sections/Hero'
import NeedAnswer      from './components/sections/NeedAnswer'
import ProjectReading  from './components/sections/ProjectReading'
import SupportsPriority from './components/sections/SupportsPriority'
import WhyABase        from './components/sections/WhyABase'
import VisualDirection from './components/sections/VisualDirection'
import DigitalEvolution from './components/sections/DigitalEvolution'
import Offer           from './components/sections/Offer'
import Signature       from './components/sections/Signature'
import FinalCTA        from './components/sections/FinalCTA'

export default function App() {
  return (
    <>
      <ParticleField />
      <CursorGlow />
      <Navigation />

      <main>
        {/* A. Hero — accroche directe + formule centrale */}
        <Hero />

        {/* B. NeedAnswer — réponse concrète aux besoins TVIS */}
        <NeedAnswer />

        {/* C. ProjectReading — lecture en 3 angles (fait / attentes / rôle marque) */}
        <ProjectReading />

        {/* D. SupportsPriority — les supports attendus, repositionnés */}
        <SupportsPriority />

        {/* E. WhyABase — production isolée vs base structurée */}
        <WhyABase />

        {/* F. VisualDirection — ce que ça donnera visuellement */}
        <VisualDirection />

        {/* G. DigitalEvolution — puis une présence digitale */}
        <DigitalEvolution />

        {/* H. Offer — 3 phases de livraison */}
        <Offer />

        {/* I. Signature */}
        <Signature />

        {/* J. FinalCTA */}
        <FinalCTA />
      </main>
    </>
  )
}
