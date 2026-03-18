// ─── App ──────────────────────────────────────────────────
// Assemblage de la landing page complète.
// Pour dupliquer ce template, remplacer uniquement src/data/client.js

import CursorGlow       from './components/ui/CursorGlow'
import Navigation       from './components/Navigation'
import Hero             from './components/sections/Hero'
import ProjectReading   from './components/sections/ProjectReading'
import CentralHypothesis from './components/sections/CentralHypothesis'
import BrandTerritory   from './components/sections/BrandTerritory'
import BrandDirection   from './components/sections/BrandDirection'
import VisualDirection  from './components/sections/VisualDirection'
import MultiSupports    from './components/sections/MultiSupports'
import DurableSystem    from './components/sections/DurableSystem'
import DigitalEvolution from './components/sections/DigitalEvolution'
import ValueProposition from './components/sections/ValueProposition'
import Offer            from './components/sections/Offer'
import Signature        from './components/sections/Signature'
import FinalCTA         from './components/sections/FinalCTA'

export default function App() {
  return (
    <>
      {/* Spotlight doré qui suit le curseur */}
      <CursorGlow />

      {/* Navigation sticky */}
      <Navigation />

      {/* ── Sections ── */}
      <main>
        {/* 1. Hero / Ouverture */}
        <Hero />

        {/* 2. Lecture du projet */}
        <ProjectReading />

        {/* 3. Hypothèse centrale */}
        <CentralHypothesis />

        {/* 4. Territoire de marque */}
        <BrandTerritory />

        {/* 5. Direction de marque */}
        <BrandDirection />

        {/* 6. Direction visuelle */}
        <VisualDirection />

        {/* 7. Projection multi-supports */}
        <MultiSupports />

        {/* 8. Système durable */}
        <DurableSystem />

        {/* 9. Évolution digitale */}
        <DigitalEvolution />

        {/* 10. Ce que cette approche apporte */}
        <ValueProposition />

        {/* 11. Proposition d'accompagnement */}
        <Offer />

        {/* 12. Signature SHOU Edition */}
        <Signature />

        {/* 13. Bloc final / CTA */}
        <FinalCTA />
      </main>
    </>
  )
}
