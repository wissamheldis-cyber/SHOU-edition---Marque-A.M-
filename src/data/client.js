// ═══════════════════════════════════════════════════════════
// CLIENT DATA — Fichier central de contenu & d'images
// Remplacer ce fichier pour adapter la landing à un nouveau client
// ═══════════════════════════════════════════════════════════

// ─── Images ───────────────────────────────────────────────
// • null  → affiche un cadre placeholder élégant (mode démo)
// • '/images/fichier.ext' → affiche l'image réelle
//
// Comment ajouter une image :
//   1. Copier le fichier dans /public/images/
//   2. Remplacer null par '/images/nom-du-fichier.png'
// ──────────────────────────────────────────────────────────
export const images = {
  // Logo SHOU Edition — affiché dans la navigation
  // Format recommandé : SVG ou PNG transparent, hauteur 28-32px
  studioLogo: '/images/shou_logo.png',

  // Visuel principal du Hero — colonne droite
  // Screenshot du site actuel du client, ou mockup de concept
  // Format recommandé : 700×520px minimum, ratio 4:3
  heroVisual: null, // ex : '/images/tvis-site-actuel.png'

  // Direction visuelle — 4 captures depuis votre outil de design
  // Screenshots depuis Figma, Illustrator, etc.
  // Format recommandé : 600×400px minimum, ratio 3:2
  vdPalette:  null, // ex : '/images/direction-palette.png'
  vdLogo:     null, // ex : '/images/direction-logo.png'
  vdTypo:     null, // ex : '/images/direction-typo.png'
  vdUI:       null, // ex : '/images/direction-ui.png'

  // Projection digitale — screenshot de la maquette ou site de référence
  // Format recommandé : 1200×800px minimum, ratio 3:2
  landingPreview: null, // ex : '/images/landing-preview.png'
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
  subtitle: 'Une base de marque pensée pour rendre votre projet plus lisible, plus solide et plus durable.',
  body:     "À partir de votre présence actuelle et de ce que votre projet semble déjà porter, cette proposition imagine une première direction de marque, de système visuel et de projection digitale.",
  cta: {
    primary:   { label: 'Découvrir la proposition',  href: '#lecture'   },
    secondary: { label: 'Voir la projection digitale', href: '#evolution' },
  },
}

// ─── Lecture du projet ────────────────────────────────────
export const readingData = {
  sectionLabel: 'Lecture du projet',
  title:   'Ce que votre projet semble porter',
  columns: [
    {
      label: 'En surface',
      text:  "TVIS Groupe se présente comme un acteur de la fixation professionnelle — visserie, quincaillerie et composants techniques pour le bâtiment, la maintenance et l'industrie.",
    },
    {
      label: 'En profondeur',
      text:  "Le projet semble surtout chercher à réduire les frictions qui ralentissent le terrain : ruptures, retards, manque de visibilité logistique, difficultés de traçabilité, lourdeur administrative, instabilité dans l'approvisionnement.",
    },
    {
      label: "Ce qui mérite d'être davantage incarné",
      text:  "La vraie promesse perçue est celle d'une continuité opérationnelle plus fiable, plus lisible et plus fluide — une promesse que la marque ne semble pas encore totalement porter ni rendre visible.",
    },
  ],
}

// ─── Hypothèse centrale ───────────────────────────────────
export const hypothesisData = {
  sectionLabel: 'Hypothèse centrale',
  thesis:   "TVIS Groupe peut être perçu non comme un simple fournisseur, mais comme un partenaire de continuité opérationnelle.",
  formula:  'Moins de ruptures.\nPlus de traçabilité.\nPlus de maîtrise.',
}

// ─── Territoire de marque ─────────────────────────────────
export const territoryData = {
  sectionLabel: 'Territoire de marque',
  title:  "Où la marque peut s'installer",
  axis:    'Continuité opérationnelle & fiabilité terrain',
  tension: 'Expertise technique B2B vs. lisibilité et accessibilité client',
  keywords: [
    'Précision', 'Fiabilité', 'Disponibilité', 'Traçabilité',
    'Maîtrise',  'Continuité', 'Proximité',    'Lisibilité',
    'Réactivité', 'Structuration',
  ],
}

// ─── Direction de marque ──────────────────────────────────
export const directionData = {
  sectionLabel: 'Direction de marque',
  title: 'Ce que la marque pourrait mieux incarner',
  points: [
    {
      label: 'Un positionnement distinctif',
      text:  "Passer du registre du fournisseur technique à celui du partenaire de terrain — une nuance qui change tout dans la perception client et la valeur perçue.",
    },
    {
      label: 'Un langage de marque cohérent',
      text:  "Des formulations, un ton et une structure éditoriale qui traduisent l'expertise sans l'obscurcir — et rendent la proposition immédiatement lisible pour les bons interlocuteurs.",
    },
    {
      label: 'Une présence unifiée',
      text:  "Faire que chaque point de contact — devis, catalogue, web, terrain — raconte la même histoire, avec le même niveau d'exigence visuelle et éditoriale.",
    },
  ],
}

// ─── Direction visuelle ───────────────────────────────────
export const visualDirectionData = {
  sectionLabel: 'Direction visuelle',
  title:    "Une intention, pas encore une décision",
  subtitle: "Les éléments visuels seront définis dans une phase dédiée. Ce que l'on peut déjà poser, c'est une intention forte et cohérente.",
  placeholders: [
    {
      label:       'Palette de couleurs',
      description: 'Couleurs primaires, secondaires & neutres à définir',
      hint:        'Sobre, industrielle, premium',
    },
    {
      label:       'Logotype',
      description: 'À concevoir ou à revisiter en profondeur',
      hint:        'Lisible, solide, professionnel',
    },
    {
      label:       'Système typographique',
      description: 'Typographies à sélectionner & à hiérarchiser',
      hint:        'Clarté de lecture, lisibilité terrain',
    },
    {
      label:       "Système d'interface",
      description: 'UI System, pictogrammes, grille & composants',
      hint:        'Cohérence multi-supports',
    },
  ],
}

// ─── Projection multi-supports ────────────────────────────
export const supportsData = {
  sectionLabel: 'Projection multi-supports',
  title:   'Partout où la marque doit exister',
  items: [
    { label: 'LinkedIn',           description: 'Présence éditoriale et professionnelle' },
    { label: 'Bannières',          description: 'Communication terrain et digitale'       },
    { label: 'Brochures',          description: 'Documentation commerciale premium'       },
    { label: 'Fiches produits',    description: 'Clarté technique et accessibilité'       },
    { label: 'Devis & documents',  description: 'Cohérence documentaire professionnelle'  },
    { label: 'Catalogue',          description: 'Outil de vente structuré et navigable'   },
    { label: 'Landing page',       description: 'Présence digitale claire et convertissante' },
    { label: 'Supports terrain',   description: 'Cartes, signalétique, supports logistiques' },
  ],
}

// ─── Système durable ──────────────────────────────────────
export const systemData = {
  sectionLabel: 'Système durable',
  title:    'Un système, pas une prestation isolée',
  subtitle: "L'objectif n'est pas de livrer une page ou un logo. C'est de construire une base réutilisable, autonome et évolutive.",
  pillars: [
    {
      label:       'Composants réutilisables',
      description: 'Blocs visuels cohérents et déclinables selon les supports et les besoins.',
    },
    {
      label:       'Templates',
      description: 'Modèles de documents et de pages adaptables sans tout refaire à chaque fois.',
    },
    {
      label:       'Cohérence documentaire',
      description: "Du devis à la landing page, le même niveau d'exigence visuelle et éditoriale.",
    },
    {
      label:       'Autonomie future',
      description: 'Une base que vous pouvez faire évoluer sans dépendance permanente à une agence.',
    },
  ],
}

// ─── Évolution digitale ───────────────────────────────────
export const evolutionData = {
  sectionLabel: 'Évolution digitale',
  title:    'Une projection vers votre présence web',
  subtitle: "Ce n'est pas encore un site. C'est une projection — une façon de voir ce que pourrait devenir votre présence digitale si on lui donnait la même exigence que cette proposition.",
  preview: {
    label:       'Landing page MVP',
    description: "Une page claire, structurée, convertissante — qui raconte ce que TVIS Groupe fait réellement, pour qui, et pourquoi c'est différent.",
    features: [
      'Architecture éditoriale pensée pour convaincre',
      'Hiérarchie visuelle premium et maîtrisée',
      'Identité de marque pleinement intégrée',
      'Mobile-first, responsive parfait',
      'Prête à être connectée à un formulaire ou CRM',
    ],
  },
}

// ─── Bénéfices ────────────────────────────────────────────
export const valueData = {
  sectionLabel: 'Ce que cette approche cherche à apporter',
  items: [
    'Une lecture stratégique honnête et structurée de votre projet',
    'Une hypothèse de positionnement claire et différenciante',
    'Une direction de marque cohérente et documentée',
    'Un système visuel pensé pour durer et se décliner',
    'Une projection concrète sur vos supports prioritaires',
    'Un outil de communication plus crédible et plus lisible',
    'Une base réutilisable, autonome et évolutive',
  ],
}

// ─── La base que vous possédez ────────────────────────────
// IMPORTANT : ne pas parler d'"offre" ni de "prestation".
// Le message central est : vous en sortez propriétaire d'une base
// opérationnelle que votre équipe peut faire vivre seule.
export const offerData = {
  sectionLabel: 'La base que vous construisons',
  title:        'Ce que vous possédez à la fin',
  subtitle:     "Pas un prestataire. Une infrastructure de marque que vous possédez, que votre équipe maîtrise, et qui grandit avec vous — sans dépendance permanente.",
  items: [
    {
      number:      '01',
      label:       'Identité de marque complète',
      description: "Logotype, palette de couleurs, système typographique, direction artistique et charte visuelle. La signature de votre marque — documentée, transmissible, prête à être déclinée partout.",
      owned: ['Logo & variations', 'Palette & typographies', 'Charte de marque'],
    },
    {
      number:      '02',
      label:       'Système de templates opérationnels',
      description: "Tous vos supports prêts à l'emploi : devis, fiches produits, catalogue, bannières, supports terrain, documents LinkedIn. Votre équipe les utilise et les adapte sans faire appel à un designer à chaque fois.",
      owned: ['Templates documentaires', 'Supports terrain', 'Bannières & LinkedIn'],
    },
    {
      number:      '03',
      label:       'Présence digitale',
      description: "Landing page ou site MVP premium, responsive, conçu pour représenter ce que vous faites réellement et convertir les bons interlocuteurs. Votre vitrine en ligne à votre niveau d'exigence.",
      owned: ['Maquette & design', 'Intégration web', 'Mise en ligne'],
    },
    {
      number:      '04',
      label:       'Bibliothèque de prompts IA + Autonomie',
      description: "Des prompts calibrés sur votre marque, votre secteur et votre ton. Vos équipes génèrent textes, posts LinkedIn et contenus cohérents en autonomie — sans rédacteur, sans briefing à chaque fois. Tout est documenté et transmissible.",
      owned: ['Prompts LinkedIn & rédaction', 'Prompts fiches & devis', 'Documentation interne'],
    },
  ],
}
