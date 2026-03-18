// ═══════════════════════════════════════════════════════════
// CLIENT DATA — Fichier central de contenu & d'images
// Remplacer ce fichier pour adapter la landing à un nouveau client
// ═══════════════════════════════════════════════════════════

// ─── Images ───────────────────────────────────────────────
// • null  → affiche un placeholder élégant (mode démo)
// • '/images/fichier.ext' → affiche l'image réelle
//
// Comment ajouter une image :
//   1. Copier le fichier dans /public/images/
//   2. Remplacer null par '/images/nom-du-fichier.png'
// ──────────────────────────────────────────────────────────
export const images = {
  // Logo SHOU Edition — navigation
  studioLogo: '/images/shou_logo.png',

  // Logo du client — affiché dans le Hero à la place du texte
  // Format recommandé : PNG transparent, hauteur 80-120px
  clientLogo: null, // ex : '/images/tvis-logo.png'

  // Visuel principal du Hero — screenshot du site actuel ou mockup
  heroVisual: null, // ex : '/images/tvis-site-actuel.png'

  // Direction visuelle — captures depuis votre outil de design
  vdPalette:  null, // ex : '/images/direction-palette.png'
  vdLogo:     null, // ex : '/images/direction-logo.png'
  vdTypo:     null, // ex : '/images/direction-typo.png'
  vdUI:       null, // ex : '/images/direction-ui.png'

  // Projection digitale — 3 vues du MVP
  landingPreview: null, // Desktop
  landingMobile:  null, // Mobile
  landingTablet:  null, // Tablette

  // Supports multi-canal
  supportLinkedIn:  null,
  supportBanners:   null,
  supportBrochures: null,
  supportFiches:    null,
  supportDevis:     null,
  supportCatalogue: null,
  supportLanding:   null,
  supportTerrain:   null,
}

// ─── Studio ───────────────────────────────────────────────
export const studio = {
  name:    'SHOU Edition',
  service: 'Marque A.M / Sur-mesure',
  tagline: 'Nous architecturons le sens pour en faire une présence lisible, durable et exploitable.',
  contact: 'contact@shou-edition.com',
}

// ─── Client ───────────────────────────────────────────────
export const client = {
  name:   'TVIS Groupe',
  sector: 'Fixations professionnelles & services B2B',
  domain: 'Bâtiment · Maintenance · Industrie',
}

// ─── Navigation ───────────────────────────────────────────
export const navLinks = [
  { label: 'Lecture',     href: '#lecture'    },
  { label: 'Territoire',  href: '#territoire' },
  { label: 'Projection',  href: '#supports'   },
  { label: 'Proposition', href: '#offre'      },
]

// ─── Hero ─────────────────────────────────────────────────
export const heroData = {
  label:    `Proposition de marque — ${studio.name}`,
  title:    client.name,
  subtitle: "Une proposition d'identité visuelle, de système de marque et de présence digitale — conçue spécifiquement pour TVIS Groupe.",
  body:     "À partir de votre activité et de vos ambitions, nous avons imaginé une direction de marque, un système visuel et une projection digitale cohérents avec ce que vous construisez.",
  cta: {
    primary:   { label: 'Découvrir la proposition',   href: '#lecture'   },
    secondary: { label: 'Voir la projection digitale', href: '#evolution' },
  },
}

// ─── Lecture du projet ────────────────────────────────────
export const readingData = {
  sectionLabel: 'Notre lecture de votre projet',
  title:   'TVIS Groupe — notre analyse',
  columns: [
    {
      label: 'Ce que vous faites',
      text:  "TVIS Groupe opère sur le marché de la fixation professionnelle — visserie, quincaillerie et composants techniques pour le bâtiment, la maintenance et l'industrie.",
    },
    {
      label: 'Ce que vos clients recherchent',
      text:  "Vos clients ont avant tout besoin de fiabilité opérationnelle : zéro rupture, visibilité logistique, traçabilité claire, réactivité et continuité d'approvisionnement.",
    },
    {
      label: 'Ce que nous proposons de construire',
      text:  "Faire de TVIS Groupe une marque qui incarne pleinement cette fiabilité — visible, lisible et cohérente sur chaque point de contact avec vos clients et partenaires.",
    },
  ],
}

// ─── Hypothèse centrale ───────────────────────────────────
export const hypothesisData = {
  sectionLabel: 'Notre hypothèse de positionnement',
  thesis:   "Notre proposition : positionner TVIS Groupe comme un partenaire de continuité opérationnelle — une marque qui incarne la fiabilité terrain, pas seulement un fournisseur.",
  formula:  'Moins de ruptures.\nPlus de traçabilité.\nPlus de maîtrise.',
}

// ─── Territoire de marque ─────────────────────────────────
export const territoryData = {
  sectionLabel: 'Territoire de marque',
  title:  'Le territoire de marque que nous proposons',
  axis:    'Continuité opérationnelle & fiabilité terrain',
  tension: 'Expertise technique B2B & lisibilité client accessible',
  keywords: [
    'Précision', 'Fiabilité', 'Disponibilité', 'Traçabilité',
    'Maîtrise',  'Continuité', 'Proximité',    'Lisibilité',
    'Réactivité', 'Structuration',
  ],
}

// ─── Direction de marque ──────────────────────────────────
export const directionData = {
  sectionLabel: 'Direction de marque',
  title: 'Les axes de notre direction de marque',
  points: [
    {
      label: 'Un positionnement distinctif',
      text:  "Construire un positionnement clair qui distingue TVIS Groupe des fournisseurs classiques et renforce la valeur perçue auprès de vos interlocuteurs terrain et décideurs.",
    },
    {
      label: 'Un langage de marque cohérent',
      text:  "Des formulations, un ton et une structure éditoriale qui traduisent l'expertise sans l'obscurcir — et rendent votre proposition immédiatement lisible pour les bons interlocuteurs.",
    },
    {
      label: 'Une présence unifiée sur tous les supports',
      text:  "Chaque point de contact — devis, catalogue, web, terrain — raconte la même histoire, avec le même niveau d'exigence visuelle et éditoriale.",
    },
  ],
}

// ─── Direction visuelle ───────────────────────────────────
export const visualDirectionData = {
  sectionLabel: 'Direction visuelle',
  title:    'Notre direction visuelle pour TVIS Groupe',
  subtitle: "Une identité visuelle pensée pour refléter votre expertise — sobre, industrielle et premium. Chaque élément sera défini et documenté dans une phase dédiée.",
  placeholders: [
    {
      label:       'Palette de couleurs',
      description: 'Couleurs primaires, secondaires et neutres — une palette sobre et premium, adaptée aux environnements industriels et professionnels.',
      hint:        'Sobre, industrielle, premium',
    },
    {
      label:       'Logotype',
      description: 'Un logotype conçu pour être lisible dans tous les contextes — documents, signalétique, digital. Solide, professionnel, mémorable.',
      hint:        'Lisible, solide, professionnel',
    },
    {
      label:       'Système typographique',
      description: "Sélection et hiérarchisation des typographies — lisibilité maximale sur les supports terrain comme sur les supports digitaux.",
      hint:        'Clarté de lecture, lisibilité terrain',
    },
    {
      label:       "Système d'interface",
      description: 'UI System, pictogrammes, grille et composants — pour une cohérence visuelle parfaite sur tous vos supports numériques.',
      hint:        'Cohérence multi-supports',
    },
  ],
}

// ─── Projection multi-supports ────────────────────────────
export const supportsData = {
  sectionLabel: 'Projection multi-supports',
  title:   'Vos supports de communication, redessinés',
  items: [
    { label: 'LinkedIn',          description: 'Présence éditoriale et professionnelle — posts, bannière profil, page entreprise cohérente.',           imageKey: 'supportLinkedIn'  },
    { label: 'Bannières',         description: 'Communication terrain et digitale — formats print et display déclinés depuis votre identité.',           imageKey: 'supportBanners'   },
    { label: 'Brochures',         description: 'Documentation commerciale premium — présentation claire et argumentée de votre activité.',               imageKey: 'supportBrochures' },
    { label: 'Fiches produits',   description: 'Clarté technique et accessibilité — référencement propre et lisible pour chaque référence de votre catalogue.', imageKey: 'supportFiches' },
    { label: 'Devis & documents', description: 'Cohérence documentaire professionnelle — devis, bons de commande et factures à votre image.',            imageKey: 'supportDevis'     },
    { label: 'Catalogue',         description: 'Outil de vente structuré et navigable — mise en valeur complète de votre offre terrain.',                imageKey: 'supportCatalogue' },
    { label: 'Landing page',      description: 'Présence digitale claire et convertissante — votre vitrine web au niveau de votre expertise.',           imageKey: 'supportLanding'   },
    { label: 'Supports terrain',  description: 'Cartes, signalétique et supports logistiques — cohérence et professionnalisme sur le terrain.',          imageKey: 'supportTerrain'   },
  ],
}

// ─── Système durable ──────────────────────────────────────
export const systemData = {
  sectionLabel: 'Système durable',
  title:    'Un système complet, durable et autonome',
  subtitle: "Vous repartez avec une base complète et transmissible — déclinable sur tous vos supports, utilisable par votre équipe en toute autonomie, sans dépendance permanente.",
  pillars: [
    {
      label:       'Composants réutilisables',
      description: 'Blocs visuels cohérents et déclinables selon les supports et les besoins de votre équipe.',
    },
    {
      label:       'Templates opérationnels',
      description: "Modèles de documents et de pages adaptables sans tout refaire à chaque fois — prêts à l'emploi.",
    },
    {
      label:       'Cohérence documentaire',
      description: "Du devis à la landing page, le même niveau d'exigence visuelle et éditoriale sur chaque support.",
    },
    {
      label:       'Autonomie totale',
      description: 'Une base que vous pouvez faire évoluer librement — sans dépendance permanente à une agence extérieure.',
    },
  ],
}

// ─── Évolution digitale ───────────────────────────────────
export const evolutionData = {
  sectionLabel: 'Évolution digitale',
  title:    'Votre future présence digitale',
  subtitle: "Une landing page MVP pensée pour TVIS Groupe — claire, structurée, convertissante. Votre vitrine digitale au niveau de votre expertise terrain.",
  preview: { label: 'Landing page MVP' },
  slides: [
    {
      label:       'Vue Desktop',
      description: "Une page d'accueil qui raconte clairement ce que TVIS Groupe fait, pour qui, et pourquoi c'est différent — avec une hiérarchie visuelle premium et maîtrisée.",
      imageKey:    'landingPreview',
      features: [
        'Architecture éditoriale pensée pour convaincre',
        'Hiérarchie visuelle premium et maîtrisée',
        'Identité de marque pleinement intégrée',
      ],
    },
    {
      label:       'Vue Mobile',
      description: "Version mobile native — optimisée pour la lecture rapide et la prise de contact depuis le terrain. Chaque section parfaitement adaptée.",
      imageKey:    'landingMobile',
      features: [
        'Mobile-first, responsive parfait',
        'Navigation intuitive au pouce',
        'CTA accessible en un geste',
      ],
    },
    {
      label:       'Vue Tablette',
      description: "Adaptée aux usages terrain et présentations clients en déplacement — mise en page intermédiaire pensée pour les équipes commerciales.",
      imageKey:    'landingTablet',
      features: [
        'Mise en page intermédiaire optimisée',
        'Idéale pour les présentations terrain',
        'Prête à être connectée à un CRM',
      ],
    },
  ],
}

// ─── Bénéfices ────────────────────────────────────────────
export const valueData = {
  sectionLabel: 'Ce que cette approche vous apporte',
  items: [
    'Une lecture approfondie et structurée de votre activité',
    'Un positionnement de marque clair et différenciant',
    'Une direction de marque cohérente et documentée',
    'Un système visuel pensé pour durer et se décliner',
    'Une projection concrète sur vos supports prioritaires',
    'Des outils de communication plus crédibles et plus lisibles',
    'Une base transmissible, autonome et évolutive',
  ],
}

// ─── Ce que nous livrons ──────────────────────────────────
export const offerData = {
  sectionLabel: 'Ce que nous livrons',
  title:        'Votre base de marque complète',
  subtitle:     "Deux semaines de travail intensif pour vous donner une infrastructure de marque complète — que votre équipe peut faire vivre seule, sans faire appel à une agence à chaque modification.",
  items: [
    {
      number:      '01',
      label:       'Identité visuelle complète',
      description: "Logotype, palette de couleurs, système typographique, direction artistique et charte visuelle — documentés et transmissibles, prêts à être déclinés sur tous vos supports.",
      owned: ['Logo & variations', 'Palette & typographies', 'Charte de marque'],
    },
    {
      number:      '02',
      label:       'Système de templates opérationnels',
      description: "Tous vos supports prêts à l'emploi : devis, fiches produits, catalogue, bannières, supports terrain, documents LinkedIn — utilisables et adaptables sans designer à chaque fois.",
      owned: ['Templates documentaires', 'Supports terrain', 'Bannières & LinkedIn'],
    },
    {
      number:      '03',
      label:       'Présence digitale',
      description: "Landing page ou site MVP premium, responsive, conçu pour représenter ce que vous faites réellement et convertir les bons interlocuteurs.",
      owned: ['Maquette & design', 'Intégration web', 'Mise en ligne'],
    },
    {
      number:      '04',
      label:       'Outils éditoriaux & autonomie d\'équipe',
      description: "Des outils calibrés sur votre marque et votre secteur pour que vos équipes produisent contenus, posts LinkedIn et communications commerciales en toute cohérence — sans briefing à chaque fois. Tout est documenté et transmissible.",
      owned: ['Outils rédactionnels LinkedIn', 'Modèles fiches & devis', 'Documentation interne'],
    },
  ],
}
