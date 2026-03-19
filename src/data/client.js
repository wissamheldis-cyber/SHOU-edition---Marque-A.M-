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
  clientLogo: '/images/4.png',

  // Visuel principal du Hero — screenshot du site actuel ou mockup
  heroVisual: '/images/7.png',

  // Direction visuelle — captures depuis votre outil de design
  vdPalette:  '/images/6.png',
  vdLogo:     '/images/1.png',
  vdTypo:     null, // ex : '/images/direction-typo.png'
  vdUI:       null, // ex : '/images/direction-ui.png'

  // Projection digitale — 3 vues du MVP
  landingPreview: null, // Desktop
  landingMobile:  null, // Mobile
  landingTablet:  null, // Tablette

  // Supports multi-canal
  supportLinkedIn:  null,
  supportBanners:   null,
  supportBrochures: '/images/5.png',
  supportFiches:    '/images/9.png',
  supportDevis:     '/images/8.png',
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
  { label: 'Besoins',  href: '#besoins'  },
  { label: 'Supports', href: '#supports' },
  { label: 'Base',     href: '#base'     },
  { label: 'Offre',    href: '#offre'    },
]

// ─── Hero ─────────────────────────────────────────────────
export const heroData = {
  label:    `Proposition de marque · ${studio.name}`,
  title:    client.name,
  subtitle: "Catalogue, supports commerciaux, identité visuelle. Tout structuré dans une base cohérente.",
  formula:  'Moins de ruptures.\nPlus de traçabilité.\nPlus de maîtrise.',
  body:     "Une proposition conçue pour répondre à vos besoins prioritaires et construire une base que votre équipe peut faire vivre seule.",
  pills:    ['Catalogue', 'Supports', 'Identité', 'Digital'],
  cta: {
    primary:   { label: 'Voir nos réponses',          href: '#besoins'   },
    secondary: { label: 'Voir la projection digitale', href: '#evolution' },
  },
}

// ─── Lecture du projet ────────────────────────────────────
export const readingData = {
  sectionLabel: 'Notre lecture de votre projet',
  title:   'TVIS Groupe, notre analyse',
  columns: [
    {
      label: 'Ce que vous faites',
      text:  "TVIS Groupe opère sur le marché de la fixation professionnelle : visserie, quincaillerie et composants techniques pour le bâtiment, la maintenance et l'industrie.",
    },
    {
      label: 'Ce que vos clients attendent réellement',
      text:  "Zéro rupture, traçabilité claire, réactivité terrain. Vos clients ne cherchent pas un fournisseur : ils cherchent un partenaire de continuité opérationnelle sur lequel compter.",
    },
    {
      label: 'Ce que la marque doit rendre visible',
      text:  "Cette fiabilité existe déjà dans votre activité. Le travail consiste à la rendre lisible, cohérente et reconnaissable, sur chaque support et à chaque point de contact.",
    },
  ],
}

// ─── Réponse aux besoins ──────────────────────────────────
export const needAnswerData = {
  sectionLabel: 'Réponse directe à votre besoin',
  title: 'Ce que vous attendez, ce que nous livrons',
  left: {
    heading: 'Ce que vous recherchez',
    items: [
      'Un catalogue structuré et exploitable',
      'Des fiches produits lisibles et professionnelles',
      'Des devis et documents à votre image',
      'Une identité visuelle claire et différenciante',
      'Des supports cohérents sur tous vos canaux',
      'Une présence digitale au niveau de votre expertise',
    ],
  },
  right: {
    heading: 'Ce que nous proposons',
    items: [
      'Un catalogue conçu pour la vente terrain, pas pour remplir un PDF',
      'Des fiches avec une hiérarchie visuelle claire par référence',
      'Un système documentaire déclinable à chaque besoin',
      'Une base de marque transmissible, pas juste un logo',
      'Des supports qui racontent la même histoire à chaque contact',
      'Une landing page construite sur votre marque, pas un template générique',
    ],
  },
}

// ─── Hypothèse centrale ───────────────────────────────────
export const hypothesisData = {
  sectionLabel: 'Notre hypothèse de positionnement',
  thesis:   "Notre proposition : positionner TVIS Groupe comme un partenaire de continuité opérationnelle, une marque qui incarne la fiabilité terrain, pas seulement un fournisseur.",
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
      text:  "Des formulations, un ton et une structure éditoriale qui traduisent l'expertise sans l'obscurcir et rendent votre proposition immédiatement lisible pour les bons interlocuteurs.",
    },
    {
      label: 'Une présence unifiée sur tous les supports',
      text:  "Chaque point de contact (devis, catalogue, web, terrain) raconte la même histoire, avec le même niveau d'exigence visuelle et éditoriale.",
    },
  ],
}

// ─── Direction visuelle ───────────────────────────────────
export const visualDirectionData = {
  sectionLabel: 'Direction visuelle',
  title:    'Notre direction visuelle pour TVIS Groupe',
  subtitle: "Une identité visuelle pensée pour refléter votre expertise : sobre, industrielle et premium. Chaque élément sera défini et documenté dans une phase dédiée.",
  placeholders: [
    {
      label:       'Palette de couleurs',
      description: 'Couleurs primaires, secondaires et neutres. Une palette sobre et premium, adaptée aux environnements industriels et professionnels.',
      hint:        'Sobre, industrielle, premium',
    },
    {
      label:       'Logotype',
      description: 'Un logotype conçu pour être lisible dans tous les contextes : documents, signalétique, digital. Solide, professionnel, mémorable.',
      hint:        'Lisible, solide, professionnel',
    },
    {
      label:       'Système typographique',
      description: "Sélection et hiérarchisation des typographies. Lisibilité maximale sur les supports terrain comme sur les supports digitaux.",
      hint:        'Clarté de lecture, lisibilité terrain',
    },
    {
      label:       "Système d'interface",
      description: 'UI System, pictogrammes, grille et composants. Cohérence visuelle parfaite sur tous vos supports numériques.',
      hint:        'Cohérence multi-supports',
    },
  ],
}

// ─── Projection multi-supports ────────────────────────────
export const supportsData = {
  sectionLabel: 'Supports prioritaires',
  title:   'Les supports que vous attendez, et plus',
  items: [
    { label: 'LinkedIn',          description: 'Présence éditoriale et professionnelle : posts, bannière profil, page entreprise cohérente.',           imageKey: 'supportLinkedIn'  },
    { label: 'Bannières',         description: 'Communication terrain et digitale. Formats print et display déclinés depuis votre identité.',            imageKey: 'supportBanners'   },
    { label: 'Brochures',         description: 'Documentation commerciale premium. Présentation claire et argumentée de votre activité.',                imageKey: 'supportBrochures' },
    { label: 'Fiches produits',   description: 'Clarté technique et accessibilité. Référencement propre et lisible pour chaque référence de votre catalogue.', imageKey: 'supportFiches' },
    { label: 'Devis & documents', description: 'Cohérence documentaire professionnelle : devis, bons de commande et factures à votre image.',            imageKey: 'supportDevis'     },
    { label: 'Catalogue',         description: 'Outil de vente structuré et navigable. Mise en valeur complète de votre offre terrain.',                 imageKey: 'supportCatalogue' },
    { label: 'Landing page',      description: 'Présence digitale claire et convertissante. Votre vitrine web au niveau de votre expertise.',            imageKey: 'supportLanding'   },
    { label: 'Supports terrain',  description: 'Cartes, signalétique et supports logistiques. Cohérence et professionnalisme sur le terrain.',           imageKey: 'supportTerrain'   },
  ],
}

// ─── Pourquoi une base ────────────────────────────────────
export const whyBaseData = {
  sectionLabel: 'Approche',
  title: 'Pourquoi une base plutôt que des supports isolés',
  contrasts: [
    {
      left:  { label: 'Production isolée',        text: "Chaque support est créé séparément, sans référence commune. Les visuels ne se reconnaissent pas entre eux, les coûts s'accumulent à chaque nouveau besoin." },
      right: { label: 'Base structurée',          text: "Un fondement visuel et éditorial partagé par tous vos supports, cohérent à chaque livraison et réutilisable sans recommencer de zéro." },
    },
    {
      left:  { label: 'Livrables dispersés',      text: "Chaque prestataire livre dans son coin. Résultat : des fichiers épars, aucune cohérence de marque, une dépendance permanente à des tiers." },
      right: { label: 'Système cohérent',         text: "Une base centralisée, documentée et transmissible. Votre équipe peut l'utiliser et la faire évoluer sans faire appel à une agence à chaque modification." },
    },
    {
      left:  { label: 'Support par support',      text: "On répond à un besoin à la fois : catalogue, puis devis, puis LinkedIn. Sans lien entre eux, chaque livrable repart de zéro." },
      right: { label: 'Construction durable',     text: "On construit une fois le socle commun. Chaque nouveau support en découle naturellement, plus vite, avec moins d'effort et en cohérence totale." },
    },
  ],
  pillars: [
    { label: 'Composants réutilisables',  description: 'Blocs visuels cohérents et déclinables selon les supports et les besoins de votre équipe.' },
    { label: 'Templates opérationnels',   description: "Modèles de documents adaptables sans tout refaire à chaque fois. Prêts à l'emploi." },
    { label: 'Cohérence documentaire',    description: "Du devis à la landing page, le même niveau d'exigence visuelle et éditoriale sur chaque support." },
    { label: 'Autonomie totale',          description: "Une base que vous pouvez faire évoluer librement, sans dépendance permanente à une agence extérieure." },
  ],
  quote: '"Un système de marque bien construit ne se refait pas à chaque nouveau support. Il se décline, il s\'adapte, il grandit, sans perdre sa cohérence ni sa force."',
}

// ─── Système durable ──────────────────────────────────────
export const systemData = {
  sectionLabel: 'Système durable',
  title:    'Un système complet, durable et autonome',
  subtitle: "Vous repartez avec une base complète et transmissible, déclinable sur tous vos supports, utilisable par votre équipe en toute autonomie, sans dépendance permanente.",
  pillars: [
    {
      label:       'Composants réutilisables',
      description: 'Blocs visuels cohérents et déclinables selon les supports et les besoins de votre équipe.',
    },
    {
      label:       'Templates opérationnels',
      description: "Modèles de documents et de pages adaptables sans tout refaire à chaque fois. Prêts à l'emploi.",
    },
    {
      label:       'Cohérence documentaire',
      description: "Du devis à la landing page, le même niveau d'exigence visuelle et éditoriale sur chaque support.",
    },
    {
      label:       'Autonomie totale',
      description: 'Une base que vous pouvez faire évoluer librement, sans dépendance permanente à une agence extérieure.',
    },
  ],
}

// ─── Évolution digitale ───────────────────────────────────
export const evolutionData = {
  sectionLabel: 'Évolution digitale',
  title:    'Votre future présence digitale',
  subtitle: "Une landing page MVP pensée pour TVIS Groupe : claire, structurée, convertissante. Votre vitrine digitale au niveau de votre expertise terrain.",
  preview: { label: 'Landing page MVP' },
  slides: [
    {
      label:       'Vue Desktop',
      description: "Une page d'accueil qui raconte clairement ce que TVIS Groupe fait, pour qui, et pourquoi c'est différent, avec une hiérarchie visuelle premium et maîtrisée.",
      imageKey:    'landingPreview',
      features: [
        'Architecture éditoriale pensée pour convaincre',
        'Hiérarchie visuelle premium et maîtrisée',
        'Identité de marque pleinement intégrée',
      ],
    },
    {
      label:       'Vue Mobile',
      description: "Version mobile native, optimisée pour la lecture rapide et la prise de contact depuis le terrain. Chaque section parfaitement adaptée.",
      imageKey:    'landingMobile',
      features: [
        'Mobile-first, responsive parfait',
        'Navigation intuitive au pouce',
        'CTA accessible en un geste',
      ],
    },
    {
      label:       'Vue Tablette',
      description: "Adaptée aux usages terrain et présentations clients en déplacement, avec une mise en page intermédiaire pensée pour les équipes commerciales.",
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
  sectionLabel: 'Le périmètre d\'accompagnement',
  title:        'Trois phases, une base cohérente',
  subtitle:     "Un périmètre clair, livré par étapes. Chaque phase apporte une valeur immédiate tout en posant les fondations de la suivante.",
  phases: [
    {
      number:      '01',
      tag:         'Phase 1',
      label:       'Supports immédiats',
      description: "Vos premiers outils prêts à déployer, conçus à partir de vos besoins prioritaires et cohérents entre eux dès la livraison.",
      deliverables: ['Catalogue structuré', 'Fiches produits', 'Devis & templates', 'Supports terrain'],
    },
    {
      number:      '02',
      tag:         'Phase 2',
      label:       'Base de marque',
      description: "Le fondement visuel et éditorial commun à tous vos supports : transmissible, documenté, utilisable par votre équipe en autonomie complète.",
      deliverables: ['Logotype & variations', 'Palette & typographies', 'Charte de marque', 'Système documentaire'],
    },
    {
      number:      '03',
      tag:         'Phase 3',
      label:       'Présence digitale',
      description: "Votre vitrine en ligne au niveau de votre expertise : claire, structurée, convertissante dès la mise en ligne.",
      deliverables: ['Landing page MVP', 'Bannières & LinkedIn', 'Mise en ligne & documentation'],
    },
  ],
}
