// src/data/pastJams.ts

import { Jam } from "../types/jam";

export const pastJams: Jam[] = [
  {
    id: "jam-2025-09",
    readingTime: 4,
    keyQuestion: {
      en: "What does the future of work look like when context matters more than location?",
      fr: "À quoi ressemble l’avenir du travail quand le contexte compte plus que le lieu ?",
    },
    context: {
      en: "As remote work settles into routine, Fahad’s journey building Hivo revealed that the real challenge isn’t logistics—it’s designing spaces where people choose to show up fully.",
      fr: "Alors que le télétravail devient routinier, le parcours de Fahad à la tête de Hivo a révélé que le vrai défi n’est pas logistique — c’est concevoir des espaces où les gens choisissent de se présenter pleinement.",
    },
    theme: {
      en: "Future of Work & Entrepreneurial Journeys",
      fr: "Avenir du travail et parcours entrepreneurial",
    },
    displayDate: {
      en: "September 2025",
      fr: "septembre 2025",
    },
    location: {
      en: "Montreal",
      fr: "Montréal",
    },
    speaker: {
      name: "Fahad A.",
      title: {
        en: "CEO, Hivo — Future of Work Platform",
        fr: "PDG, Hivo — Plateforme sur l’avenir du travail",
      },
      image: "/images/speakers/fahad.jpg",
    },
    description: {
      en: "On building a platform that rethinks how remote professionals find meaningful workspaces.",
      fr: "Sur la création d’une plateforme qui repense l’accès aux espaces de travail pour les professionnels à distance.",
    },
    descriptionLong: {
      en: "Fahad shared his journey building Hivo, a platform connecting freelancers and remote professionals with ideal workspaces. Beyond product and traction, the discussion explored leadership, timing, and the realities of building in an uncertain labor market.\n\nThe session closed with a group reflection on key themes for the rest of 2025—emphasizing that the future of work isn’t about where you sit, but the quality of attention you bring.",
      fr: "Fahad a partagé son parcours à la tête de Hivo, une plateforme qui connecte freelances et professionnels nomades avec des espaces de travail adaptés. La soirée s’est conclue par une réflexion collective sur les thèmes clés à explorer d’ici la fin de 2025 — soulignant que l’avenir du travail ne dépend pas de l’endroit où vous êtes assis, mais de la qualité d’attention que vous apportez.",
    },
    quote: {
      en: "The future of work isn’t remote or in-office—it’s about finding the right context for deep collaboration.",
      fr: "L’avenir du travail, ce n’est ni le télétravail ni le bureau — c’est trouver le bon contexte pour collaborer en profondeur.",
    },
    takeaways: {
      en: [
        "Meaningful collaboration requires intentional design—not just flexibility.",
        "Startups must adapt faster than labor norms evolve.",
        "Leadership clarity matters more than workplace perks.",
      ],
      fr: [
        "La collaboration significative exige une conception intentionnelle — pas seulement de la flexibilité.",
        "Les startups doivent évoluer plus vite que les normes du travail.",
        "La clarté du leadership compte plus que les avantages liés au lieu de travail.",
      ],
    },
    resources: [
      {
        type: "book",
        label: "Remote: Office Not Required",
        link: "https://basecamp.com/books/remote",
      },
      { type: "talk", label: "The Future of Work – MIT Talk" },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2025-09-1.jpg",
        alt: "Group discussion during September 2025 Montreal Idea Jam",
      },
    ],
  },
  {
    id: "jam-2025-08",
    readingTime: 5,
    keyQuestion: {
      en: "Where are the billion-dollar opportunities hiding in overlooked spaces?",
      fr: "Où se cachent les opportunités à un milliard dans les espaces négligés ?",
    },
    context: {
      en: "While AI dominates headlines, this session spotlighted two quiet frontiers: the explosive growth of pickleball as a community-driven business, and risk intelligence for emerging markets—where human insight beats data alone.",
      fr: "Alors que l’IA domine les manchettes, cette session a mis en lumière deux frontières discrètes : la croissance fulgurante du pickleball comme entreprise communautaire, et l’intelligence du risque pour les marchés émergents — où l’insight humain l’emporte sur les données seules.",
    },
    theme: {
      en: "Emerging Industries & Founder Stories",
      fr: "Industries émergentes et récits de fondatrices",
    },
    displayDate: {
      en: "August 2025",
      fr: "août 2025",
    },
    location: {
      en: "Montreal",
      fr: "Montréal",
    },
    speaker: {
      name: "Kareem Rahaman & Rim",
      title: {
        en: "Growth Lead at Club PKL & Founder of SoraRisk",
        fr: "Responsable croissance chez Club PKL & Fondatrice de SoraRisk",
      },
      image: "/images/speakers/kareem-rim.jpg",
    },
    description: {
      en: "On pickleball’s rise and building risk assessment tools for volatile markets.",
      fr: "Sur la montée du pickleball et la création d’outils d’évaluation du risque pour les marchés instables.",
    },
    descriptionLong: {
      en: "Kareem took us inside the explosive growth of pickleball as a sport and business. Rim then presented SoraRisk, her startup building risk assessment tools for dynamic environments.\n\nThe conversation revealed a shared truth: the next big opportunities aren’t in crowded spaces—they’re in overlooked ones where community, trust, and local knowledge create defensible moats.",
      fr: "Kareem nous a plongés dans la croissance fulgurante du pickleball, à la fois comme sport et comme opportunité commerciale. Rim a ensuite présenté SoraRisk, sa startup qui développe des outils d’évaluation du risque pour des environnements dynamiques.\n\nLa discussion a révélé une vérité commune : les prochaines grandes opportunités ne se trouvent pas dans les espaces saturés — elles sont dans les domaines négligés où la communauté, la confiance et la connaissance locale créent des avantages durables.",
    },
    quote: {
      en: "The next billion-dollar business might be in pickleball—or in risk intelligence for emerging markets.",
      fr: "La prochaine entreprise à un milliard pourrait être dans le pickleball… ou dans l’intelligence du risque pour les marchés émergents.",
    },
    takeaways: {
      en: [
        "Niche sports can become scalable businesses with community at the core.",
        "Risk intelligence is the next frontier for emerging market startups.",
        "Founder alignment on values outperforms misaligned scaling.",
      ],
      fr: [
        "Les sports de niche peuvent devenir des entreprises à grande échelle avec la communauté au cœur.",
        "L’intelligence du risque est la prochaine frontière pour les startups des marchés émergents.",
        "L’alignement des fondateurs sur les valeurs surpasse la croissance désalignée.",
      ],
    },
    resources: [
      {
        type: "article",
        label: "The Sports Playbook – How to Build Community-Driven Brands",
      },
      { type: "book", label: "Risk, Uncertainty, and Profit – Frank Knight" },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2025-08-1.jpg",
        alt: "Group discussion during August 2025 Montreal Idea Jam",
      },
    ],
  },
  {
    id: "jam-2025-07",
    readingTime: 3,
    keyQuestion: {
      en: "What happens when we stop performing and just think together?",
      fr: "Que se passe-t-il quand on arrête de performer et qu’on pense simplement ensemble ?",
    },
    context: {
      en: "Before diving into technical topics, we paused to reconnect—because trust is the foundation of all serious collaboration. In a world of curated profiles, showing up unfinished is its own kind of courage.",
      fr: "Avant de plonger dans les sujets techniques, nous avons fait une pause pour nous reconnecter — car la confiance est le fondement de toute collaboration sérieuse. Dans un monde de profils soignés, se présenter à l’état brut est une forme de courage.",
    },
    theme: {
      en: "Community Connection",
      fr: "Connexion communautaire",
    },
    displayDate: {
      en: "July 2025",
      fr: "juillet 2025",
    },
    location: {
      en: "Terrasse St-Ambroise, Montreal",
      fr: "Terrasse St-Ambroise, Montréal",
    },
    speaker: {
      name: "Montreal Idea Jams Community",
      title: {
        en: "Summer Terrace Hangout",
        fr: "Apéro-terrasse estival",
      },
      image: "/images/speakers/community.jpg",
    },
    description: {
      en: "An informal summer gathering to reconnect and reflect.",
      fr: "Un rassemblement estival informel pour se retrouver et réfléchir.",
    },
    descriptionLong: {
      en: "A relaxed gathering at a local terrace to reconnect, share informal updates, and enjoy Montreal summer nights. No slides, no pressure—just good company and open conversation.\n\nThe group discussed AI, business acquisition, agritech, and real estate—all over drinks and casual conversation. No one pitched. No one sold. We just remembered why we’re here.",
      fr: "Un rassemblement détendu en terrasse pour se retrouver, échanger des nouvelles informelles et profiter des soirées montréalaises. Pas de diapos, pas de pression — juste de la belle compagnie et des conversations libres.\n\nLe groupe a discuté d’IA, d’acquisition d’entreprise, d’agritech et d’immobilier — le tout autour d’un verre et de conversations détendues. Personne n’a pitché. Personne n’a vendu. Nous nous sommes simplement rappelé pourquoi nous sommes ici.",
    },
    quote: {
      en: "Some of the best ideas start with a drink and no agenda.",
      fr: "Les meilleures idées naissent parfois avec un verre… et sans ordre du jour.",
    },
    takeaways: {
      en: [
        "Connection precedes collaboration.",
        "The best conversations happen when there’s nothing to sell.",
        "Summer nights in Montreal are the perfect incubator for slow thinking.",
      ],
      fr: [
        "La connexion précède la collaboration.",
        "Les meilleures conversations ont lieu quand il n’y a rien à vendre.",
        "Les soirées d’été à Montréal sont l’incubateur idéal pour la pensée lente.",
      ],
    },
    resources: [
      { type: "book", label: "The Art of Gathering – Priya Parker" },
      { type: "article", label: "How to Host a Meaningful Conversation" },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2025-07-1.jpg",
        alt: "Summer terrace hangout – July 2025",
      },
    ],
  },
  {
    id: "jam-2025-04",
    readingTime: 5,
    keyQuestion: {
      en: "What if enterprise sales is less about your product and more about navigating someone else’s reality?",
      fr: "Et si la vente en entreprise dépendait moins de votre produit et davantage de votre capacité à naviguer dans la réalité de l’autre ?",
    },
    context: {
      en: "Jeffrey’s session cut through the noise of feature-led selling to reveal the human puzzle beneath: enterprise deals succeed when you align with your client’s internal politics, timelines, and hidden constraints.",
      fr: "La session de Jeffrey a percé le bruit de la vente centrée sur les fonctionnalités pour révéler le casse-tête humain sous-jacent : les contrats en entreprise réussissent quand vous vous alignez sur la politique interne, les calendriers et les contraintes cachées de votre client.",
    },
    theme: {
      en: "B2B Sales & International Entrepreneurship",
      fr: "Ventes B2B & entrepreneuriat international",
    },
    displayDate: {
      en: "April 2025",
      fr: "avril 2025",
    },
    location: {
      en: "Montreal",
      fr: "Montréal",
    },
    speaker: {
      name: "Jeffrey",
      title: {
        en: "B2B SaaS sales & UAE entrepreneur",
        fr: "Ventes SaaS B2B & entrepreneur aux Émirats",
      },
      image: "/images/speakers/jeffrey.jpg",
    },
    description: {
      en: "On enterprise sales as political navigation and building businesses in the UAE.",
      fr: "Sur la vente en entreprise comme navigation politique et la création d’entreprises aux Émirats.",
    },
    descriptionLong: {
      en: "Jeffrey shared hard-won insights on selling B2B software to enterprise clients, followed by a conversation on building and operating a business in the UAE’s unique ecosystem.\n\nHe emphasized that in complex sales, the product is just the entry point—the real work is mapping the human terrain: who has influence, what their real deadlines are, and which compromises they’re willing to make.",
      fr: "Jeffrey a partagé des leçons durement acquises sur la vente de logiciels B2B à de grands comptes, suivi d’une discussion sur la création et l’exploitation d’une entreprise dans l’écosystème unique des Émirats.\n\nIl a souligné que dans les ventes complexes, le produit n’est qu’un point d’entrée — le vrai travail consiste à cartographier le terrain humain : qui a de l’influence, quels sont leurs vrais délais, et quels compromis ils sont prêts à faire.",
    },
    quote: {
      en: "Enterprise sales isn’t about features—it’s about aligning with your client’s internal politics and timelines.",
      fr: "La vente en entreprise, ce n’est pas les fonctionnalités — c’est s’aligner sur la politique interne et les calendriers de votre client.",
    },
    takeaways: {
      en: [
        "Enterprise sales is political navigation, not product demo.",
        "International expansion starts with humility, not assumptions.",
        "Local partners are force multipliers — not cost centers.",
      ],
      fr: [
        "La vente en entreprise est une navigation politique, pas une démo produit.",
        "L’expansion internationale commence par l’humilité, pas par des hypothèses.",
        "Les partenaires locaux sont des multiplicateurs de force — pas des coûts.",
      ],
    },
    resources: [
      { type: "book", label: "The Challenger Sale" },
      {
        type: "article",
        label: "Doing Business in the Middle East – Harvard Guide",
      },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2025-04-1.jpg",
        alt: "Group discussion during April 2025 Montreal Idea Jam",
      },
    ],
  },
  {
    id: "jam-2024-11",
    readingTime: 6,
    keyQuestion: {
      en: "What if the best path to entrepreneurship isn’t starting from zero—but buying something that already works?",
      fr: "Et si la meilleure voie vers l’entrepreneuriat n’était pas de repartir de zéro — mais d’acheter quelque chose qui fonctionne déjà ?",
    },
    context: {
      en: "Hasan’s masterclass cut through the founder myth to show that repreneuriat—buying and running existing businesses—is a quieter, more sustainable path for builders who care about impact over optics.",
      fr: "La masterclass d’Hasan a percé le mythe du fondateur pour montrer que le repreneuriat — acheter et gérer des entreprises existantes — est une voie plus discrète et durable pour les bâtisseurs qui privilégient l’impact aux apparences.",
    },
    theme: {
      en: "Small Business Acquisition (Repreneuriat)",
      fr: "Acquisition d’entreprise (Repreneuriat)",
    },
    displayDate: {
      en: "November 2024",
      fr: "novembre 2024",
    },
    location: {
      en: "Montreal",
      fr: "Montréal",
    },
    speaker: {
      name: "Hasan Uzun",
      title: {
        en: "Expert in small business acquisition",
        fr: "Expert en acquisition de petites entreprises",
      },
      image: "/images/speakers/hasan.jpg",
    },
    description: {
      en: "A practical walkthrough of the small company acquisition process.",
      fr: "Une séance pratique sur le processus d’acquisition de petites entreprises.",
    },
    descriptionLong: {
      en: "Hasan led a practical walkthrough of the small company acquisition process, covering stakeholders, timing, due diligence, and financing structures. A must for anyone exploring 'buying to build.'\n\nHe warned against romanticizing the process: most deals fail not because of bad numbers, but because buyers underestimate the emotional labor of inheriting someone else’s legacy—and reshaping it without breaking its spirit.",
      fr: "Hasan a guidé une séance pratique sur l’acquisition de petites entreprises, couvrant les parties prenantes, le calendrier, la diligence raisonnable et les structures de financement. Essentiel pour qui envisage d’« acheter pour construire ».\n\nIl a mis en garde contre la romantisation du processus : la plupart des transactions échouent non pas à cause de mauvais chiffres, mais parce que les acheteurs sous-estiment le travail émotionnel d’hériter du legs de quelqu’un d’autre — et de le façonner sans en briser l’esprit.",
    },
    quote: {
      en: "Repreneuriat isn’t just buying a business—it’s inheriting a legacy and reshaping it with intention.",
      fr: "Le repreneuriat, ce n’est pas juste acheter une entreprise — c’est hériter d’un legs et le façonner avec intention.",
    },
    takeaways: {
      en: [
        "The best acquisition targets are boring but cash-flow positive.",
        "Seller financing unlocks deals that banks won’t touch.",
        "Your first 90 days post-acquisition set the tone for years.",
      ],
      fr: [
        "Les meilleures cibles d’acquisition sont ennuyeuses mais génératrices de liquidités.",
        "Le financement vendeur débloque des transactions que les banques n’osent pas.",
        "Vos 90 premiers jours post-acquisition fixent le ton pour des années.",
      ],
    },
    resources: [
      { type: "book", label: "Buy Then Build – Walker Deibel" },
      {
        type: "course",
        label: "Acquizition.biz – Business Search Platform",
        link: "https://acquizition.biz/",
      },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2024-11-1.jpg",
        alt: "Group discussion during November 2024 Montreal Idea Jam",
      },
    ],
  },
  {
    id: "jam-2024-11-08",
    readingTime: 5,
    keyQuestion: {
      en: "How do you learn to see value where others see only risk?",
      fr: "Comment apprend-on à voir de la valeur là où d’autres ne voient que du risque ?",
    },
    context: {
      en: "Instead of theory, attendees analyzed real listings from MonEntrepriseAVendre.com and Acquizition.biz—because learning to spot value is a muscle, not a mindset.",
      fr: "Au lieu de théorie, les participants ont analysé de vraies annonces de MonEntrepriseAVendre.com et Acquizition.biz — car apprendre à repérer la valeur est un muscle, pas un état d’esprit.",
    },
    theme: {
      en: "Business Buying Workshop",
      fr: "Atelier d’achat d’entreprise",
    },
    displayDate: {
      en: "November 2024",
      fr: "novembre 2024",
    },
    location: {
      en: "Montreal",
      fr: "Montréal",
    },
    speaker: {
      name: "Community Workshop",
      title: {
        en: "Hands-on Business Acquisition Lab",
        fr: "Atelier pratique d’acquisition d’entreprise",
      },
      image: "/images/speakers/community.jpg",
    },
    description: {
      en: "A hands-on workshop to evaluate real business listings like an operator.",
      fr: "Un atelier pratique pour évaluer de vraies annonces comme un opérateur.",
    },
    descriptionLong: {
      en: "Attendees explored real listings on platforms like MonEntrepriseAVendre.com and Acquizition.biz, then worked in small groups to assess market size, risks, and key questions for initial buyer-seller meetings.\n\nThe exercise revealed a truth: most businesses aren’t broken—they’re just waiting for someone who sees their potential. The best acquisitions aren’t found in pitch decks—they’re hidden in plain sight.",
      fr: "Les participants ont exploré de vraies annonces sur des plateformes comme MonEntrepriseAVendre.com et Acquizition.biz, puis ont travaillé en petits groupes pour évaluer la taille du marché, les risques et les questions clés à poser lors d’une première rencontre acheteur-vendeur.\n\nCet exercice a révélé une vérité : la plupart des entreprises ne sont pas brisées — elles attendent simplement quelqu’un qui voit leur potentiel. Les meilleures acquisitions ne se trouvent pas dans des pitch decks — elles sont cachées au grand jour.",
    },
    quote: {
      en: "Don’t just browse businesses—learn how to evaluate them like an operator.",
      fr: "Ne vous contentez pas de parcourir les entreprises — apprenez à les évaluer comme un opérateur.",
    },
    takeaways: {
      en: [
        "Revenue ≠ value — cash flow and owner dependence are key.",
        "Always assume the seller’s number is optimistic.",
        "Your first question should be: ‘Why are you selling?’",
      ],
      fr: [
        "Chiffre d’affaires ≠ valeur — la trésorerie et la dépendance au propriétaire sont clés.",
        "Supposez toujours que le chiffre du vendeur est optimiste.",
        "Votre première question devrait être : « Pourquoi vendez-vous ? »",
      ],
    },
    resources: [
      { type: "book", label: "The Little Book of Valuation" },
      {
        type: "course",
        label: "Mon Entreprise à Vendre – Marketplace",
        link: "https://monentrepriseavendre.com/",
      },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2024-11-08-1.jpg",
        alt: "Workshop on business acquisition – November 2024",
      },
    ],
  },
  {
    id: "jam-2024-09",
    readingTime: 5,
    keyQuestion: {
      en: "What kind of life do you actually want to build?",
      fr: "Quel genre de vie voulez-vous vraiment construire ?",
    },
    context: {
      en: "This panel cut through the noise around 'scaling' to ask: what kind of life do you actually want to build? Growth isn’t the only measure of success—sometimes the bravest move is to choose sustainability over speed.",
      fr: "Ce panel a percé le brouhaha autour de la « croissance » pour poser la vraie question : quel genre de vie voulez-vous vraiment construire ? La croissance n’est pas la seule mesure du succès — parfois, le geste le plus courageux est de choisir la durabilité plutôt que la vitesse.",
    },
    theme: {
      en: "Small Business Acquisition",
      fr: "Acquisition de PME",
    },
    displayDate: {
      en: "September 2024",
      fr: "septembre 2024",
    },
    location: {
      en: "Montreal",
      fr: "Montréal",
    },
    speaker: {
      name: "Guest Panel",
      title: {
        en: "Two founders who acquired and run small businesses",
        fr: "Deux fondateurs ayant acquis et gérant des PME",
      },
      image: "/images/speakers/panel.jpg",
    },
    description: {
      en: "Two founders on choosing between lifestyle and growth after acquisition.",
      fr: "Deux fondateurs sur le choix entre style de vie et croissance après acquisition.",
    },
    descriptionLong: {
      en: "A panel discussion moderated by Alexandra explored the realities of acquiring small companies—from philosophy and process to pitfalls and practical tools. Attendees left with a clearer roadmap for their own acquisition journey.\n\nOne founder bought a cleaning business to fund a slower life; the other acquired a SaaS to scale aggressively. Both were right—for themselves.",
      fr: "Une discussion en panel animée par Alexandra a exploré les réalités de l’acquisition de PME — de la philosophie au processus, en passant par les pièges et outils pratiques. Les participants sont repartis avec une feuille de route plus claire.\n\nL’un a acheté une entreprise de nettoyage pour financer une vie plus calme ; l’autre a acquis une SaaS pour croître de façon agressive. Les deux avaient raison — pour eux-mêmes.",
    },
    quote: {
      en: "Lifestyle business or growth engine? Your acquisition strategy starts with that choice.",
      fr: "Entreprise de style de vie ou moteur de croissance ? Votre stratégie d’acquisition commence par ce choix.",
    },
    takeaways: {
      en: [
        "Your ‘why’ determines your acquisition criteria.",
        "Lifestyle businesses value stability; growth businesses value optionality.",
        "Both paths are valid — but mixing them leads to pain.",
      ],
      fr: [
        "Votre « pourquoi » détermine vos critères d’acquisition.",
        "Les entreprises de style de vie valorisent la stabilité ; celles de croissance valorisent les options.",
        "Les deux voies sont valables — mais les mélanger mène à la douleur.",
      ],
    },
    resources: [
      { type: "book", label: "The E-Myth Revisited" },
      { type: "talk", label: "Repreneuriat Stories – Canadian Podcast" },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2024-09-1.jpg",
        alt: "Panel discussion on business acquisition – September 2024",
      },
    ],
  },
  {
    id: "jam-2024-08",
    readingTime: 5,
    keyQuestion: {
      en: "Where is innovation actually happening outside the tech bubble?",
      fr: "Où l’innovation se produit-elle vraiment, en dehors de la bulle technologique ?",
    },
    context: {
      en: "Pranav’s deep dive revealed how Canadian agritech is solving real problems in food, water, and supply chains—not with flashy tech, but with patient, place-based innovation.",
      fr: "La plongée de Pranav a révélé comment l’agritech canadienne résout des problèmes concrets liés à l’alimentation, à l’eau et aux chaînes d’approvisionnement — non pas avec une tech tape-à-l’œil, mais avec une innovation patiente et ancrée dans le territoire.",
    },
    theme: {
      en: "Agritech Deep Dive",
      fr: "Plongée en agritech",
    },
    displayDate: {
      en: "August 2024",
      fr: "août 2024",
    },
    location: {
      en: "Montreal",
      fr: "Montréal",
    },
    speaker: {
      name: "Pranav",
      title: {
        en: "Agritech investor and operator",
        fr: "Investisseur et opérateur en agritech",
      },
      image: "/images/speakers/pranav.jpg",
    },
    description: {
      en: "How Canadian agritech is solving real problems in food and water.",
      fr: "Comment l’agritech canadienne résout des problèmes concrets liés à l’alimentation et à l’eau.",
    },
    descriptionLong: {
      en: "Pranav shared two real Canadian agritech deal case studies, highlighting market opportunities, investor considerations, and the unique challenges of scaling in agriculture.\n\nHe stressed that agritech isn’t about replacing farmers—it’s about giving them better tools to make decisions in an increasingly volatile climate. The most promising startups aren’t chasing disruption—they’re enabling stewardship.",
      fr: "Pranav a présenté deux cas concrets d’investissements en agritech au Canada, mettant en lumière les opportunités de marché, les critères d’investissement et les défis uniques du secteur agricole.\n\nIl a insisté sur le fait que l’agritech ne vise pas à remplacer les agriculteurs — elle leur donne de meilleurs outils pour prendre des décisions dans un climat de plus en plus volatile. Les startups les plus prometteuses ne cherchent pas la disruption — elles favorisent la gestion responsable.",
    },
    quote: {
      en: "Canadian agritech isn’t just about farms—it’s about data, sustainability, and global food systems.",
      fr: "L’agritech canadienne, ce n’est pas seulement des fermes — c’est données, durabilité et systèmes alimentaires mondiaux.",
    },
    takeaways: {
      en: [
        "Agri data is the new oil — if you can collect it at scale.",
        "Sustainability isn’t a cost—it’s a competitive moat.",
        "Canadian agritech thrives on harsh climate innovation.",
      ],
      fr: [
        "Les données agricoles sont le nouveau pétrole — si vous pouvez les collecter à grande échelle.",
        "La durabilité n’est pas un coût — c’est un avantage concurrentiel.",
        "L’agritech canadienne prospère grâce à l’innovation dans les climats difficiles.",
      ],
    },
    resources: [
      { type: "book", label: "The Third Plate – Dan Barber" },
      { type: "article", label: "Agri-Food Innovation in Canada – Report" },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2024-08-1.jpg",
        alt: "Discussion on agritech – August 2024",
      },
    ],
  },
  {
    id: "jam-2024-07",
    readingTime: 4,
    keyQuestion: {
      en: "How is AI reshaping entire industries—and where should builders actually pay attention?",
      fr: "Comment l’IA transforme-t-elle les industries — et où les bâtisseurs devraient-ils vraiment porter attention ?",
    },
    context: {
      en: "This Jam offered a high-level introduction to AI and machine learning, from foundational models and LLMs to generative AI. Rather than focusing on tools or demos, the session explored how AI is transforming entire industries—and what that means for builders and operators.",
      fr: "Ce Jam proposait une introduction globale à l’IA et au machine learning, des modèles fondamentaux et LLM à l’IA générative. Plutôt que de se concentrer sur des outils ou des démos, la discussion portait sur la transformation des industries et ce que cela implique pour les bâtisseurs et opérateurs.",
    },
    theme: {
      en: "A Bird’s-Eye View of AI",
      fr: "Une vue d’ensemble de l’IA",
    },
    displayDate: {
      en: "July 2024",
      fr: "juillet 2024",
    },
    location: {
      en: "Montreal",
      fr: "Montréal",
    },
    speaker: {
      name: "Jean Hounkpe & Roy Eyono",
      title: {
        en: "AI practitioners and builders",
        fr: "Praticiens et bâtisseurs en IA",
      },
      image: "/images/speakers/jeanandoy.jpg",
    },
    description: {
      en: "Understanding AI’s transformative power across industries.",
      fr: "Comprendre le pouvoir transformateur de l’IA à travers les industries.",
    },
    descriptionLong: {
      en: "This jam session introduced core AI concepts—from machine learning fundamentals to foundation models, LLMs, and generative AI.\n\nUsing concrete examples across business acquisitions, agriculture/agritech, and real estate, Jean and Roy illustrated how AI is already reshaping decision-making, operations, and competitive advantage. The focus was not on replacing humans, but on how AI augments judgment, scales insight, and changes what small teams can realistically build.",
      fr: "Cette session introduisait les concepts clés de l’IA : des bases de l'apprentissage machine aux modèles fondamentaux, LLM et à l’IA générative.\n\nÀ travers des exemples concrets en reprise d’entreprise, agriculture/agritech et immobilier, Jean et Roy ont montré comment l’IA transforme déjà la prise de décision, les opérations et les avantages concurrentiels. L’accent n’était pas mis sur le remplacement des humains, mais sur l’amplification du jugement, la mise à l’échelle de l’intuition et l’élargissement de ce que de petites équipes peuvent réellement construire.",
    },
    quote: {
      en: "AI changes the scale of what small teams can do—but only if they understand the system they’re building with.",
      fr: "L’IA change l’échelle de ce que les petites équipes peuvent accomplir — à condition de comprendre le système avec lequel elles construisent.",
    },
    takeaways: {
      en: [
        "AI is a systems shift, not just a tooling upgrade.",
        "Foundation models change who can build—and how fast.",
        "The real advantage comes from combining domain knowledge with AI, not from models alone.",
      ],
      fr: [
        "L’IA est un changement de système, pas simplement un nouvel outil.",
        "Les modèles fondamentaux redéfinissent qui peut construire — et à quelle vitesse.",
        "Le véritable avantage vient de la combinaison entre expertise métier et IA, pas des modèles seuls.",
      ],
    },
    resources: [
      { type: "book", label: "Hands-On Machine Learning – Aurélien Géron" },
      {
        type: "article",
        label: "A Survey of Large Language Models – Stanford / arXiv",
      },
      {
        type: "article",
        label: "How Companies Are Actually Using Generative AI – McKinsey",
      },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2024-07-1.jpg",
        alt: "Bird’s-eye view of AI discussion – July 2024",
      },
    ],
  },
  {
    id: "jam-2024-07-terrace",
    readingTime: 3,
    keyQuestion: {
      en: "What happens when we stop performing and just think together?",
      fr: "Que se passe-t-il quand on arrête de performer et qu’on pense simplement ensemble ?",
    },
    context: {
      en: "We paused before the summer’s technical sessions to remember: great ventures start with great conversations. In a world of curated profiles, showing up unfinished is its own kind of courage.",
      fr: "Nous avons fait une pause avant les sessions techniques de l’été pour nous rappeler : les grandes aventures commencent par de grandes conversations. Dans un monde de profils soignés, se présenter à l’état brut est une forme de courage.",
    },
    theme: {
      en: "Community Connection",
      fr: "Connexion communautaire",
    },
    displayDate: {
      en: "July 2024",
      fr: "juillet 2024",
    },
    location: {
      en: "Terrasse St-Ambroise, Montreal",
      fr: "Terrasse St-Ambroise, Montréal",
    },
    speaker: {
      name: "Montreal Idea Jams Community",
      title: {
        en: "Summer Kickoff Hangout",
        fr: "Apéro de lancement estival",
      },
      image: "/images/speakers/community.jpg",
    },
    description: {
      en: "A casual kickoff to summer—thinking together, no slides needed.",
      fr: "Un lancement estival décontracté — penser ensemble, pas besoin de diapos.",
    },
    descriptionLong: {
      en: "An informal start to the summer season at Terrasse St-Ambroise, discussing key interests like AI, business acquisition, agritech, and real estate—all over drinks and casual conversation.\n\nNo one had slides. No one had answers. We just asked better questions—and left with more curiosity than certainty. Sometimes, that’s enough.",
      fr: "Un lancement informel de la saison estivale à la Terrasse St-Ambroise, autour de discussions sur les sujets clés : IA, acquisition d’entreprise, agritech et immobilier — le tout autour d’un verre et de conversations détendues.\n\nPersonne n’avait de diapos. Personne n’avait de réponses. Nous avons simplement posé de meilleures questions — et sommes repartis avec plus de curiosité que de certitude. Parfois, c’est suffisant.",
    },
    quote: {
      en: "Before the deep dives, we reconnect.",
      fr: "Avant les plongées profondes, on se reconnecte.",
    },
    takeaways: {
      en: [
        "Informal settings spark the best ideas.",
        "Summer is for reflection, not just execution.",
        "Community is the foundation of all great ventures.",
      ],
      fr: [
        "Les cadres informels suscitent les meilleures idées.",
        "L’été, c’est pour la réflexion, pas seulement l’exécution.",
        "La communauté est le fondement de toutes les grandes aventures.",
      ],
    },
    resources: [
      { type: "book", label: "The Art of Gathering – Priya Parker" },
      { type: "article", label: "How to Build Community as an Entrepreneur" },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2024-07-terrace-1.jpg",
        alt: "Summer kickoff hangout – July 2024",
      },
    ],
  },
  {
    id: "jam-2024-06-recap",
    readingTime: 6,
    keyQuestion: {
      en: "How do you find the right business to buy—without getting lost in the noise?",
      fr: "Comment trouver la bonne entreprise à acheter — sans se perdre dans le bruit ?",
    },
    context: {
      en: "Francisco and Hasan showed that disciplined outreach beats luck: Francisco sent 200 personalized emails to find his business; Hasan structured the deal with seller financing. Process > hope.",
      fr: "Francisco et Hasan ont montré que la prospection disciplinée l’emporte sur la chance : Francisco a envoyé 200 courriels personnalisés pour trouver son entreprise ; Hasan a structuré l’affaire avec un financement vendeur. Le processus > l’espoir.",
    },
    theme: {
      en: "Small Company Acquisition Pipeline",
      fr: "Pipeline d’acquisition de PME",
    },
    displayDate: {
      en: "June 2024",
      fr: "juin 2024",
    },
    location: {
      en: "Montreal",
      fr: "Montréal",
    },
    speaker: {
      name: "Francisco & Hasan",
      title: {
        en: "Repreneuriat practitioners",
        fr: "Praticiens du repreneuriat",
      },
      image: "/images/speakers/francisco-hasan.jpg",
    },
    description: {
      en: "The disciplined search process behind finding the right business to buy.",
      fr: "Le processus discipliné derrière la recherche de la bonne entreprise à acheter.",
    },
    descriptionLong: {
      en: "In a special combined session, Francisco walked through the discovery and purchase pipeline for small deals, while Hasan covered financing and due diligence. A masterclass in hands-on repreneuriat.\n\nFrancisco kept a simple spreadsheet: industry, location, cash flow, owner motivation. He sent 200 personalized emails. Got 12 replies. Met 5 owners. Bought one. The secret wasn’t cleverness—it was consistency.",
      fr: "Dans une séance spéciale combinée, Francisco a décrit le pipeline de découverte et d’achat de petites entreprises, tandis qu’Hasan a couvert le financement et la diligence raisonnable. Une masterclass en repreneuriat pratique.\n\nFrancisco tenait un simple tableau : secteur, lieu, trésorerie, motivation du propriétaire. Il a envoyé 200 courriels personnalisés. Reçu 12 réponses. Rencontré 5 propriétaires. En a acheté une. Le secret n’était pas l’ingéniosité — c’était la constance.",
    },
    quote: {
      en: "The best acquisition target isn’t the shiniest—it’s the one that fits your life and skills.",
      fr: "La meilleure cible d’acquisition n’est pas la plus brillante — c’est celle qui correspond à votre vie et vos compétences.",
    },
    takeaways: {
      en: [
        "Search is a full-time job — treat it like one.",
        "Earnouts align incentives but add complexity.",
        "Your deal lawyer should understand small business, not just M&A.",
      ],
      fr: [
        "La recherche est un travail à temps plein — traitez-la comme tel.",
        "Les earnouts alignent les intérêts mais ajoutent de la complexité.",
        "Votre avocat doit comprendre les PME, pas seulement les fusions-acquisitions.",
      ],
    },
    resources: [
      { type: "book", label: "The Acquirer’s Multiple" },
      {
        type: "article",
        label: "How to Search for a Business – Search Fund Guide",
      },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2024-06-1.jpg",
        alt: "Discussion on acquisition pipeline – June 2024",
      },
    ],
  },
  {
    id: "jam-2024-05-vc",
    readingTime: 5,
    keyQuestion: {
      en: "What separates real traction from vanity metrics?",
      fr: "Qu’est-ce qui distingue une traction réelle des indicateurs trompeurs ?",
    },
    context: {
      en: "Pranav and Michael showed how top founders anchor their narratives in observable behavior—not market size fantasies. Certainty beats possibility every time.",
      fr: "Pranav et Michael ont montré comment les meilleurs fondateurs ancrent leurs récits dans des comportements observables — pas dans des fantasmes de taille de marché. La certitude l’emporte toujours sur la possibilité.",
    },
    theme: {
      en: "Evaluating Early-Stage Investments",
      fr: "Évaluer les investissements en phase amorce",
    },
    displayDate: {
      en: "May 2024",
      fr: "mai 2024",
    },
    location: {
      en: "Montreal",
      fr: "Montréal",
    },
    speaker: {
      name: "Pranav & Michael Pflug",
      title: {
        en: "Early-stage investors",
        fr: "Investisseurs en phase amorce",
      },
      image: "/images/speakers/pranav-michael.jpg",
    },
    description: {
      en: "Separating real traction from vanity metrics in early-stage startups.",
      fr: "Distinguer la traction réelle des indicateurs trompeurs en phase amorce.",
    },
    descriptionLong: {
      en: "Pranav led a workshop on evaluating VC/angel opportunities using real case studies. Michael Pflug joined to co-develop TAM sizing and key metrics for his startup NovusTX Devices.\n\nThey showed how top founders anchor their narratives in observable behavior: not ‘we could capture 1% of a $10B market,’ but ‘we’ve already converted 30% of our pilot customers into paying users.’ Certainty beats possibility every time.",
      fr: "Pranav a animé un atelier sur l’évaluation d’opportunités d’investissement en phase amorce. Michael Pflug a participé pour co-développer l’estimation de son marché adressable et autres métriques clés pour sa startup NovusTX Devices.\n\nIls ont montré comment les meilleurs fondateurs ancrent leurs récits dans des comportements observables : non pas « nous pourrions capter 1 % d’un marché de 10 G$ », mais « nous avons déjà converti 30 % de nos clients pilotes en utilisateurs payants ». La certitude l’emporte toujours sur la possibilité.",
    },
    quote: {
      en: "Great founders don’t just sell vision—they prove traction with ruthless clarity.",
      fr: "Les grands fondateurs ne vendent pas seulement une vision — ils prouvent leur traction avec une clarté implacable.",
    },
    takeaways: {
      en: [
        "TAM is a story — validate it with bottom-up data.",
        "Unit economics reveal truth faster than growth.",
        "Great founders ask for advice, not just money.",
      ],
      fr: [
        "Le TAM est une histoire — validez-la avec des données du bas.",
        "Les économies unitaires révèlent la vérité plus vite que la croissance.",
        "Les grands fondateurs demandent des conseils, pas seulement de l’argent.",
      ],
    },
    resources: [
      { type: "book", label: "Venture Deals – Brad Feld" },
      { type: "article", label: "How to Size Your Market – YC Guide" },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2024-05-vc-1.jpg",
        alt: "Investment workshop – May 2024",
      },
    ],
  },
  {
    id: "jam-2024-05-scaleup",
    readingTime: 6,
    keyQuestion: {
      en: "What actually breaks when a mission-driven company starts to scale?",
      fr: "Qu’est-ce qui casse réellement quand une entreprise à mission commence à croître ?",
    },
    context: {
      en: "Patrick’s raw account cut through the myth of the heroic founder to show the daily compromises required to grow a purpose-driven company in the real world—where regulation, finance, and human tradeoffs collide.",
      fr: "Le témoignage brut de Patrick a percé le mythe du fondateur héroïque pour montrer les compromis quotidiens nécessaires pour faire croître une entreprise à mission dans le monde réel — où réglementation, finance et compromis humains entrent en collision.",
    },
    theme: {
      en: "Managing a Scale-Up",
      fr: "Gérer une scale-up",
    },
    displayDate: {
      en: "May 2024",
      fr: "mai 2024",
    },
    location: {
      en: "Montreal",
      fr: "Montréal",
    },
    speaker: {
      name: "Patrick Gagné",
      title: {
        en: "Former COO, Teo Taxi",
        fr: "Ancien COO, Teo Taxi",
      },
      image: "/images/speakers/patrick.jpg",
    },
    description: {
      en: "The daily compromises of scaling a mission-driven company in regulated spaces.",
      fr: "Les compromis quotidiens pour faire croître une entreprise à mission dans un environnement réglementé.",
    },
    descriptionLong: {
      en: "Patrick shared unfiltered lessons from the rise and challenges of Teo Taxi, offering rare insights into managing a mission-driven scale-up in a regulated industry.\n\nHe described the tension between public mission and private reality: how every decision carried regulatory, financial, and human tradeoffs. The message: scale with soul, or don’t scale at all.",
      fr: "Patrick a partagé des leçons sans filtre sur la montée en puissance et les défis de Teo Taxi, offrant un regard rare sur la gestion d’une scale-up à mission dans un secteur réglementé.\n\nIl a décrit la tension entre mission publique et réalité privée : comment chaque décision impliquait des compromis réglementaires, financiers et humains. Le message : croître avec âme, ou ne pas croître du tout.",
    },
    quote: {
      en: "Scaling a mission-driven company means choosing between purity and pragmatism—every single day.",
      fr: "Faire croître une entreprise à mission, c’est choisir chaque jour entre pureté et pragmatisme.",
    },
    takeaways: {
      en: [
        "Mission drift is the silent killer of purpose-driven companies.",
        "Regulatory risk must be baked into your model from day one.",
        "Your team’s belief in the mission is your only moat.",
      ],
      fr: [
        "La dérive de mission est le tueur silencieux des entreprises à but social.",
        "Le risque réglementaire doit être intégré à votre modèle dès le départ.",
        "La croyance de votre équipe dans la mission est votre seul avantage.",
      ],
    },
    resources: [
      {
        type: "book",
        label: "The Hard Thing About Hard Things – Ben Horowitz",
      },
      {
        type: "talk",
        label: "How to Manage Through Hypergrowth – Reid Hoffman",
      },
      { type: "book", label: "Teal Organizations – Frederic Laloux" },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2024-05-group.jpg",
        alt: "Group discussion during the May 2024 Montreal Idea Jam",
      },
    ],
  },
];
