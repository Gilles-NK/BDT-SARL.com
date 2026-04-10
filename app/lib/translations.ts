// ═══════════════════════════════════════════════════════════
//  TRADUCTIONS BDT — FR / EN
// ═══════════════════════════════════════════════════════════

const translations = {
  fr: {
    nav: {
      accueil: "Accueil",
      apropos: "À propos",
      services: "Nos Services",
      contact: "Contact",
      faq: "FAQ",
      devis: "Devis gratuit",
      recherche: "Recherche",
      placeholder: "Rechercher dans le site...",
      fermer: "Fermer",
    },
    hero: {
      badge: "Sécurité & Informatique · Douala, Cameroun",
      titre: "La technologie au service de votre sécurité",
      sousTitre: "Nous protégeons vos biens et vos données grâce à des solutions innovantes de sécurité et d'informatique sur mesure.",
      btnDevis: "Lancer mon projet",
      btnApropos: "Découvrir BDT",
    },
    presentation: [
      "BDT, spécialiste en sécurité et informatique.",
      "Vidéosurveillance, cybersécurité et maintenance.",
      "Des solutions complètes, adaptées à vos besoins.",
      "Une équipe rigoureuse, réactive et innovante.",
    ],
    presentation2: {
      titre: "La technologie au service de votre sécurité et de votre confiance.",
      paragraphes: [
        "Chez BDT, nous ne nous contentons pas d'installer des équipements. Nous concevons des écosystèmes résilients, pensés pour protéger durablement vos biens, vos données et votre activité.",
        "Spécialistes de la sécurité électronique et de l'informatique au Cameroun, nous accompagnons entreprises, institutions et particuliers avec des solutions sur mesure, rigoureusement déployées et maintenues dans le temps.",
        "Notre réussite se mesure à celle de clients. C'est pourquoi chaque projet est traité avec la même exigence, qu'il s'agisse d'une installation de caméras pour un commerce ou d'un réseau sécurisé pour un grand groupe.",
      ],
      conclusion: {
        avant: "Avec une équipe d'experts passionnés et des interventions sur",
        lien: "plus de 10 sites stratégiques",
        apres: "au Cameroun, BDT s'impose comme un partenaire de confiance en sécurité électronique et informatique. Nous œuvrons chaque jour à la réussite des projets de nos clients.",
      },
      chiffres: [
        { surtitre: "Plus de", valeur: 150, suffix: "+", desc: "installations réalisées en vidéosurveillance et réseaux" },
        { surtitre: "", valeur: 24, suffix: "/7", desc: "support technique et monitoring, sans interruption" },
        { surtitre: "", valeur: 100, suffix: "%", desc: "des solutions conçues sur mesure pour chaque client" },
        { surtitre: "Plus de", valeur: 3, suffix: " ans", desc: "d'expertise en sécurité et informatique au Cameroun" },
      ],
      cta: {
        titre: "Prêt à sécuriser votre infrastructure ?",
        desc: "Découvrez nos solutions ou demandez un devis gratuit et sans engagement.",
        btnServices: "Voir nos services",
        btnDevis: "Devis gratuit",
      },
    },
    services: {
      tag: "Ce que nous faisons",
      titre: "Nos services principaux",
      sousTitre: "Découvrez nos solutions complètes pour protéger votre entreprise et optimiser vos systèmes",
      enSavoir: "Voir le détail",
      btnServices: "Nos Services",
      btnClients: "Nos Clients",
      items: [
        { id: "videosurveillance", titre: "Vidéosurveillance & Sécurité Électronique", sousTitre: "Installation et maintenance de caméras. Surveillance à distance et en temps réel." },
        { id: "informatique", titre: "Infrastructures & Réseaux Informatiques", sousTitre: "Installation réseau, serveurs, maintenance. Dépannage et assistance technique." },
        { id: "acces", titre: "Contrôle d'accès & Gestion des présences", sousTitre: "Systèmes biométriques, badges, reconnaissance faciale." },
        { id: "cybersecurite", titre: "Cybersécurité", sousTitre: "Sécurisation des données et systèmes. Audit et protection contre les cyberattaques." },
        { id: "cloud", titre: "Cloud & Solutions Digitales", sousTitre: "Hébergement sécurisé, sauvegarde, messagerie pro." },
        { id: "audit", titre: "Conseil, Audit & Formation", sousTitre: "Formations sur mesure, support technique et conseils. Accompagnement à la transformation digitale." },
      ],
    },
    servicesPage: {
      titre: "Nos Services",
      sousTitreHero: "Des solutions de pointe pour votre sécurité et vos infrastructures numériques.",
      expertiseTitre: "Expertise IT",
      expertiseSousTitre: "De l'idée à la mise en œuvre",
      expertiseDesc: "Chez BDT, nous transformons vos défis technologiques en opportunités de croissance. Nos infrastructures de pointe et notre expertise locale permettent aux entreprises de toutes tailles de sécuriser leurs actifs et d'optimiser leurs performances numériques.",
      btnDevis: "Demander un devis",
      tagSurMesure: "Solution sur mesure",
      ctaTitre: "Prêt à sécuriser votre avenir ?",
      ctaDesc: "Nos experts sont à votre disposition pour une étude gratuite de vos besoins.",
      ctaBtn: "Obtenir mon devis gratuit",
      items: [
        {
          id: "videosurveillance",
          titre: "SÉCURITÉ ÉLECTRONIQUE & VIDÉOSURVEILLANCE",
          accroche: "Protection des actifs",
          desc: "Protégez vos actifs avec des systèmes de surveillance en temps réel et des alertes intelligentes. Installation et maintenance de caméras haute définition.",
          points: [],
          details: {
            mainImage: "/images/service_video.png",
            avantages: ["Protection 24/7", "Enregistrement HD", "Alertes Mobiles"],
            tabs: [
              {
                id: "etude", label: "Étude & Ingénierie",
                content: "Notre capacité d'écoute et d'analyse nous oblige à tendre une oreille attentive pour bien comprendre vos besoins spécifiques et les réalités de votre site. Nous effectuons une visite technique exhaustive pour identifier les contraintes physiques (obstacles, points aveugles) et dimensionner précisément le dispositif nécessaire avant de débuter tout projet. Cette phase cruciale inclut également une analyse fine des conditions d'éclairage et des angles de vue stratégiques pour garantir une couverture totale sans compromis. Nous vous remettons un plan d'implantation détaillé qui optimise chaque caméra pour un retour sur investissement maximal. Notre objectif est de transformer votre sécurité en un atout de gestion fluide et efficace."
              },
              {
                id: "deploiement", label: "Déploiement",
                content: "Nos techniciens experts déploient des caméras dômes, tubes et PTZ de dernière génération (4K, vision nocturne avancée) avec une intégration discrète et esthétique respectant vos infrastructures. La configuration de systèmes intelligents, incluant la reconnaissance faciale, la détection thermique et le franchissement de ligne, s'accompagne d'une pose d'infrastructure réseau robuste et sécurisée. Nous veillons scrupuleusement à ce que chaque installation s'effectue en minimisant les perturbations sur votre site tout en assurant une résilience maximale du câblage contre le sabotage. Chaque dispositif est testé individuellement pour garantir une fluidité d'image parfaite et une réactivité instantanée des capteurs sur vos écrans de contrôle ou terminaux mobiles."
              },
              {
                id: "maintenance", label: "Maintenance",
                content: "La sécurité ne tolère aucune interruption technique ni aucune faille logicielle. BDT assure une maintenance préventive rigoureuse et curative de l'ensemble de votre parc de vidéosurveillance grâce à une équipe dédiée disponible en permanence. Des audits réguliers, le nettoyage des optiques, le recalibrage des capteurs et des mises à jour constantes des environnements logiciels assurent la fiabilité absolue des enregistrements sur le long terme. Notre service support garantit une réactivité optimale sous 24h pour isoler et corriger toute anomalie système, maintenant ainsi l'intégrité de votre protection. Nous vous remettons un rapport de maintenance périodique pour vous assurer que votre investissement reste performant."
              }
            ]
          }
        },
        {
          id: "informatique",
          titre: "INFRASTRUCTURES & RÉSEAUX INFORMATIQUES",
          accroche: "Connectivité optimale",
          desc: "Optimisez votre connectivité avec des architectures réseaux robustes, évolutives et haute performance. Déploiement de serveurs et assistance technique.",
          points: [],
          details: {
            mainImage: "/images/service_infra.png",
            avantages: ["Haute Disponibilité", "Débit Optimal", "Sécurité Réseau"],
            tabs: [
              {
                id: "architecture", label: "Architecture Réseau",
                content: "La base d'une entreprise performante réside dans la fluidité et la sécurité de ses communications internes. Nous concevons des schémas d'adressage complexes et un dimensionnement LAN/WAN sur mesure pour assurer des performances constantes. Nos experts anticipent l'agrandissement futur de vos infrastructures en intégrant des technologies de routage avancées et une redondance critique dès la phase de conception."
              },
              {
                id: "deploiement", label: "Déploiement / Câblage",
                content: "Nous réalisons un travail de fond avec une exécution minutieuse dans le tirage des câbles certifiés et l'épissurage de la fibre optique de haute précision. Le brassage des baies serveurs répond aux normes internationales strictes pour permettre une dissipation thermique idéale et une administration aisée. Chaque point réseau est rigoureusement testé et labellisé pour faciliter toute intervention ultérieure et garantir un débit sans perte."
              },
              {
                id: "support", label: "Maintenance & Support",
                content: "Nous proposons une assistance proactive et réactive face aux baisses de performance réseau ou aux pannes d'équipements. Notre monitoring à distance 24/7 nous permet d'isoler rapidement les goulets d'étranglement, que ce soit sur des serveurs On-Premise ou lors d'opérations sur les équipements critiques tels que les switches managés et les routeurs coeurs de réseau. BDT s'engage sur des temps de rétablissement minimaux pour votre activité."
              }
            ]
          }
        },
        {
          id: "acces",
          titre: "CONTRÔLE D’ACCÈS & GESTION DES PRÉSENCES",
          accroche: "Sécurité & Suivi",
          desc: "Sécurisez vos locaux et simplifiez le suivi de vos équipes grâce à des solutions biométriques et à badges de pointe.",
          points: [],
          details: {
            mainImage: "/images/service_acces.png",
            avantages: ["Biométrie de Pointe", "Gestion centralisée", "Suivi en Temps Réel"],
            tabs: [
              {
                id: "biometrie", label: "Lecteurs Biométriques",
                content: "Garantissez une sécurité sans compromis grâce à l'identification unique de vos collaborateurs. Nous installons des terminaux biométriques de haute précision (empreintes digitales, reconnaissance faciale ou palmaire) qui éliminent tout risque d'usurpation d'identité ou d'échange de badges entre collègues. Nos solutions sont optimisées pour une vitesse de reconnaissance ultra-rapide, évitant ainsi les files d'attente aux points d'entrée tout en maintenant un niveau de filtrage extrêmement rigoureux. Ce système permet également d'automatiser le suivi des horaires avec une précision chirurgicale, renforçant la discipline et la transparence au sein de votre organisation."
              },
              {
                id: "badges", label: "Gestion par Badges",
                content: "Pour une flexibilité totale, nous déployons des solutions de badges RFID, MIFARE et iClass hautement sécurisés. Nos contrôleurs de portes permettent de définir des droits d'accès granulaires : chaque collaborateur n'accède qu'aux zones qui lui sont autorisées et uniquement sur des plages horaires définies. En cas de perte d'un badge, notre système permet une révocation instantanée à distance, garantissant qu'aucune personne non autorisée ne puisse pénétrer dans vos locaux. C'est la solution idéale pour les entreprises et administrations ayant une forte rotation de personnel ou accueillant régulièrement des visiteurs externes."
              },
              {
                id: "logiciel", label: "Interface Logicielle",
                content: "Gérez l'ensemble de vos accès depuis une plateforme centralisée et intuitive. Le logiciel de contrôle d'accès BDT offre une visibilité en temps réel sur tous les mouvements au sein de vos bâtiments et génère des rapports d'activité automatiques exploitables par vos services RH ou de sécurité. L'intégration intelligente avec d'autres systèmes (alarmes, portiques de sécurité, barrières levantes) permet un management global et transparent de votre site. Vous recevez des alertes instantanées en cas de tentative d'accès forcé ou de porte laissée ouverte, vous permettant d'intervenir immédiatement avant que la situation ne devienne critique."
              }
            ]
          }
        },
        {
          id: "cybersecurite",
          titre: "CYBERSÉCURITÉ & PROTECTION DES DONNÉES",
          accroche: "Défense numérique",
          desc: "Défendez vos systèmes contre les menaces numériques grâce à nos audits approfondis et nos stratégies de défense multicouches.",
          points: [],
          details: {
            mainImage: "/images/service_cyber.png",
            avantages: ["Audit de Risques", "Pare-feu Next-Gen", "Zéro-Trust Security"],
            tabs: [
              {
                id: "audit", label: "Audit & Vulnérabilité",
                content: "Comprenez l'état réel de votre exposition numérique avant qu'un incident critique n'impacte sévèrement votre productivité. Notre équipe d'ingénierie mène des tests d'intrusion (pentesting) rigoureux pour mettre à l'épreuve vos défenses périmétriques, évaluer la résilience de vos accès privilégiés et identifier les failles logicielles cachées. À l'issue de cet audit, nous vous remettons un rapport détaillé incluant des recommandations concrètes et hiérarchisées par niveau de risque. Cette approche vous permet d'investir de manière ciblée sur les points de vulnérabilité les plus critiques, renforçant ainsi durablement la posture de sécurité de votre entreprise."
              },
              {
                id: "parefeu", label: "Déploiement Pare-feu",
                content: "BDT installe et configure les systèmes de sécurité les plus avancés du marché pour créer un périmètre de défense infranchissable autour de vos actifs. Nous déployons des pare-feux de nouvelle génération (NGFW) capables d'effectuer un filtrage applicatif profond et une prévention d'intrusion (IPS) en temps réel. Cette protection inclut également la sécurisation stricte des accès distants via des VPN chiffrés, garantissant ainsi l'intégrité de vos flux de données même pour vos collaborateurs en télétravail. Nous configurons des règles de sécurité sur mesure, alignées sur votre politique interne, pour bloquer les contenus malveillants."
              },
              {
                id: "veille", label: "Surveillance Active",
                content: "À l'image d'un SOC moderne, nous mettons en place des outils de surveillance continue qui analysent la télémétrie de vos postes de travail et de vos serveurs en temps réel. Cette approche proactive permet de détecter et de neutraliser les comportements suspects, tels que les tentatives de mouvements latéraux ou de chiffrement par Ransomware, avant que l'attaque ne puisse aboutir. Nos experts assurent une veille technologique constante pour adapter vos défenses aux nouvelles menaces émergentes. En choisissant la surveillance active de BDT, vous bénéficiez d'une protection dynamique qui évolue avec le paysage des cybermenaces."
              }
            ]
          }
        },
        {
          id: "cloud",
          titre: "CLOUD & SOLUTIONS DIGITALES",
          accroche: "Agilité et hébergement",
          desc: "Gagnez en agilité avec un hébergement sécurisé, des sauvegardes externalisées et des outils collaboratifs professionnels.",
          points: [],
          details: {
            mainImage: "/images/service_cloud.png",
            avantages: ["Scalabilité Totale", "Backup Hors-site", "Outils Collaboratifs"],
            tabs: [
              {
                id: "architecture", label: "Architecture Cloud",
                content: "Libérez votre entreprise des contraintes matérielles lourdes avec des architectures Cloud hybrides, publiques ou privées conçues sur mesure. Nos solutions d'hébergement procurent une scalabilité immédiate, permettant à vos ressources de croître au rythme de votre activité sans investissement matériel massif. Nous veillons particulièrement à la conformité locale et à la souveraineté de vos données : vos informations restent accessibles, sécurisées et conformes aux réglementations. Nous optimisons vos infrastructures pour réduire les temps de latence et maximiser la disponibilité de vos applications métier critiques, 24 heures sur 24 et 7 jours sur 7."
              },
              {
                id: "sauvegardes", label: "Sauvegardes Externalisées",
                content: "La résilience de vos données est notre priorité absolue face aux risques de sinistre, de vol ou de cyberattaque. Nous mettons en œuvre des stratégies de réplication automatique vers des datacenters distants hautement sécurisés et isolés. En cas de panne majeure ou de perte de données locales, notre Plan de Reprise d'Activité (PRA) vous permet de restaurer vos environnements critiques en un temps record, minimisant ainsi l'impact financier d'une interruption de service. Nous testons régulièrement l'intégrité de vos sauvegardes pour vous garantir qu'au moment opportun, la récupération sera totale."
              },
              {
                id: "outils", label: "Outils Collaboratifs",
                content: "Moderne et dynamique, l'espace de travail BDT intègre les meilleures suites collaboratives du marché (Microsoft 365, Google Workspace) de manière totalement sécurisée. De la messagerie d'entreprise protégée au partage de documents en temps réel, nous déployons des outils qui brisent les silos et accélèrent la prise de décision. Ces solutions sont optimisées pour le travail hybride, garantissant une productivité maximale pour vos collaborateurs, qu'ils soient au bureau ou en déplacement. Nous assurons également la migration de vos données historiques vers ces nouveaux outils sans aucune perte d'information."
              }
            ]
          }
        },
        {
          id: "audit",
          titre: "CONSEIL, AUDIT & FORMATION",
          accroche: "Accompagnement stratégique",
          desc: "Transformez votre outil informatique par un accompagnement stratégique et la montée en compétences de vos équipes.",
          points: ["Marketing Digital", "Design Graphique", "Secrétariat Bureautique", "Réseaux Informatiques", "Vidéosurveillance", "Développement Web"],
          details: {
            mainImage: "/images/service_audit.png",
            avantages: ["Conseil Expert", "Optimisation Coûts", "Transfert de Savoir"],
            tabs: [
              {
                id: "strategique", label: "Conseil Stratégique",
                content: "Prendre les bonnes décisions technologiques dans un paysage numérique complexe est un défi majeur pour toute direction. BDT vous accompagne dans l'élaboration de feuilles de route stratégiques sur le long terme, alignées précisément sur vos objectifs business et votre budget. Nous définissons ensemble des trajectoires de transformation numérique qui maximisent votre retour sur investissement tout en assurant une conformité rigoureuse aux normes internationales. Nos consultants experts agissent comme de véritables partenaires de votre croissance, vous évitant les investissements obsolètes et vous guidant vers les technologies qui feront réellement la différence pour votre compétitivité."
              },
              {
                id: "technique", label: "Audit Technologique",
                content: "Nous réalisons un examen en profondeur de vos infrastructures existantes, de vos applications et de vos processus IT pour identifier les leviers d'optimisation cachés. Nos diagnostics techniques ne sont pas de simples rapports ; ils s'appuient sur des métriques concrètes pour évaluer la performance réelle et la sécurité de votre système d'information. À l'issue de cet audit, nous vous remettons un plan d'action détaillé pour transformer vos faiblesses techniques en forces opérationnelles. Que ce soit pour préparer une migration Cloud ou pour résoudre des pannes récurrentes, notre audit technologique est le point de départ indispensable."
              },
              {
                id: "formation", label: "Montée en Compétences",
                content: "La technologie n'est efficace que si elle est maîtrisée par les hommes qui l'utilisent. BDT propose des programmes de formation sur mesure, alliant théorie rigoureuse et mise en pratique sur des environnements de test réalistes. Nous couvrons des domaines clés comme le Marketing Digital, le Design Graphique, le Développement Web, ou encore la Cybersécurité et la Vidéosurveillance. Notre objectif est de garantir un transfert de compétences effectif vers vos équipes internes, développant leur autonomie et leur capacité de diagnostic. En investissant dans la formation avec BDT, vous valorisez votre capital humain."
              }
            ],
            formationsData: [
              { name: "Marketing Digital", price: "120 000F", reg: "10 000F", duration: "03 Mois" },
              { name: "Design Graphique", price: "120 000F", reg: "10 000F", duration: "03 Mois" },
              { name: "Secrétariat Bureautique", price: "70 000F", reg: "10 000F", duration: "02 Mois" },
              { name: "Réseaux Informatique", price: "150 000F", reg: "10 000F", duration: "03 Mois" },
              { name: "Vidéosurveillance", price: "50 000F", reg: "10 000F", duration: "01 Mois" },
              { name: "Développement Web", price: "150 000F", reg: "10 000F", duration: "03 Mois" },
            ],
            trainingMeta: {
              priceLabel: "Formation",
              regLabel: "Inscription",
              modalitiesTitle: "Modalités d'apprentissage",
              modalities: ["Cours de jour", "Cours de soir", "Cours en ligne", "Planning flexible selon votre disponibilité"],
              engagementTitle: "Engagement BDT",
              engagement: ["100% pratique", "Stage offert", "Certificat BDT SARL", "Formateurs experts", "Suivi personnalisé"]
            }
          }
        },
      ]
    },
    processus: {
      tag: "Pourquoi choisir BDT ?",
      titre: "Une installation unique et clé en main pour une sécurité maximum",
      sousTitre: "Faites le choix d'un accompagnement global pour un service sur mesure et parfaitement calibré",
      btnAction: "Lancer mon étude technique",
      etapes: [
        { titre: "Étude technique", desc: "Notre équipe analyse le site et étudie les zones sensibles et contraintes techniques." },
        { titre: "Installation", desc: "L'installation s'effectue de façon efficace et sans travaux pour ne pas impacter votre activité." },
        { titre: "Mise en service", desc: "La mise en fonctionnement s'effectue sous contrôle rigoureux de nos techniciens." },
        { titre: "Suivi et accompagnement", desc: "Nous vous accompagnons pour contrôler et assurer votre sécurité dans le temps." },
      ],
    },
    formulaire: {
      titre: "Avez-vous des questions ?",
      sousTitre: "Aucun site web ni brochure ne saurait remplacer une rencontre en personne pour discuter de vos objectifs et des sujets qui vous intéressent. Nous nous réjouissons de vous rencontrer sur place.",
      typeProfil: { industrie: "Entreprise", client: "Client" },
      champs: {
        message: "Votre message *",
        prenom: "Prénom *",
        nom: "Nom *",
        entreprise: "Entreprise *",
        quartier: "Ville / Quartier",
        email: "E-mail *",
        tel: "Téléphone (mobile) *",
      },
      rappel: "Veuillez me rappeler",
      envoyer: "Envoyer",
    },
    temoignages: {
      tag: "Avis clients",
      titre: "Ils nous font confiance",
      sousTitre: "Ce que disent nos clients sur notre travail",
      items: [
        { texte: "Franchement, on s'attendait pas à ce niveau de sérieux. Ils sont venus, ont tout installé rapidement et proprement. Depuis, aucun problème.", nom: "Serena Gardens", role: "Events Place, Douala" },
        { texte: "On gère plusieurs hôtels et on avait besoin de quelqu'un de fiable. BDT a tout pris en charge et revient régulièrement vérifier que tout tourne bien.", nom: "Faya Hotel Douala", role: "Groupe Hôtelier" },
        { texte: "Ce qui m'a plu c'est qu'ils ont d'abord écouté avant de proposer. Pas de solution générique. Résultat là, impeccable.", nom: "Aston Canal+", role: "Médias & Télécoms" },
        { texte: "Ça fait plus de deux ans. Les prix sont corrects, le travail est propre et quand on les appelle ils répondent.", nom: "Les Hôtels Serena", role: "Chaîne Hôtelière" },
        { texte: "Caméras et réseau installés, travail soigné, équipe ponctuelle. On continue de travailler ensemble.", nom: "Global Bush", role: "Co-Working Space" },
        { texte: "Ont su exactement quoi faire pour sécuriser nos salles et ont formé notre équipe.", nom: "Soft Education", role: "Établissement Éducatif" },
      ],
    },
    cta: {
      titre: "Un besoin spécifique en sécurité ?",
      sousTitre: "Nos experts vous répondent sous 24h pour une étude personnalisée.",
      btnDevis: "Discuter de mon projet",
      btnContact: "Parler à un expert",
    },
    footer: {
      description: "Spécialiste en sécurité et solutions informatiques à Douala. On protège vos biens et vos données.",
      navigation: "Navigation",
      services: "Services",
      contact: "Contact",
      horaires: ["Lun – Ven : 08h00 – 18h00", "Samedi : 09h00 – 16h00", "Dimanche : Fermé"],
      droits: "© 2025 BDT – Bron Digital Technology SARL. Tous droits réservés.",
      confidentialite: "Confidentialité",
      mentions: "Mentions légales",
      servicesItems: ["Vidéosurveillance", "Maintenance IT", "Cybersécurité", "Audit & Formation"],
    },
    apropos: {
      titre: "Qui sommes-nous ?",
      sousTitre: "BDT, une équipe basée à Douala spécialisée en sécurité et informatique.",
      tagHistoire: "Notre histoire",
      titreHistoire: "BDT est né d'un constat simple",
      texte1: "Beaucoup d'entreprises à Douala avaient des problèmes de sécurité sans prestataire fiable sur qui compter durablement. Bron Digital Technology SARL a été créé pour changer ça.",
      texte2: "Aujourd'hui on accompagne des hôtels, entreprises, écoles et particuliers à Douala et dans plusieurs villes du Cameroun.",
      tagComp: "Compétences",
      titreComp: "Nos domaines d'intervention",
      tagValeurs: "Ce en quoi on croit",
      titreValeurs: "Nos valeurs",
      cta: "Vous voulez travailler avec nous ?",
      ctaSub: "Dites-nous ce que vous avez en tête.",
      btnDevis: "Demander un devis",
      btnContact: "Nous contacter",
      expertises: [
        "Vidéosurveillance",
        "Maintenance IT",
        "Cybersécurité",
        "Contrôle d'accès",
        "Cloud & Solutions digitales",
        "Formation & Audit"
      ],
      valeurs: [
        { titre: "Honnêteté", desc: "On vous dit ce dont vous avez besoin, pas ce qui nous rapporte le plus." },
        { titre: "Réactivité", desc: "Une panne ne prévient pas. Quand vous nous appelez, on répond." },
        { titre: "Qualité", desc: "On préfère refuser un chantier plutôt que de le bâcler." },
        { titre: "Discrétion", desc: "On travaille dans des espaces sensibles. Les informations restent là où elles doivent." },
      ],
    },
    faqPage: {
      titreHero: "Foire Aux Questions",
      sousTitreHero: "Trouvez rapidement des réponses à vos interrogations sur nos services, tarifs et procédures d'installation.",
      placeholderHero: "Rechercher une question ou mot-clé...",
      resultatsTrouves: "résultat(s) trouvé(s)",
      aucunResultatTitre: "Aucun résultat trouvé",
      aucunResultatDesc: "Nous n'avons pas trouvé de réponse à",
      poserQuestionBtn: "Poser la question à un expert",
      banniereTitre: "Toujours des questions ?",
      banniereDesc: "Nos conseillers techniques sont disponibles pour discuter de votre projet et vous apporter des réponses personnalisées.",
      btnContact: "Nous contacter",
      btnDevis: "Demander un devis",
      cats: [
        {
          id: "services", title: "NOS SERVICES", items: [
            { q: "Vous faites quoi exactement ?", a: "Vidéosurveillance, maintenance informatique, cybersécurité et contrôle d'accès. On peut tout gérer ou juste une partie selon vos besoins." },
            { q: "Vous intervenez seulement à Douala ?", a: "Basés à Douala, on intervient aussi dans d'autres villes du Cameroun. Partagez-nous votre localisation et on vous dit ce qu'on peut faire." },
            { q: "Vous travaillez avec des particuliers ?", a: "Oui, hôtels, entreprises, écoles et particuliers. Chaque demande est prise au sérieux quelle que soit sa taille." },
          ]
        },
        {
          id: "installation", title: "INSTALLATION", items: [
            { q: "Est-ce que vous cassez des murs ?", a: "Non. Câbles encastrés ou goulottés proprement, sans démolition ni perturbation de votre activité." },
            { q: "Combien de temps dure une installation ?", a: "Une journée pour un domicile ou petit commerce. Quelques jours pour un grand bâtiment. Délai précis donné dans le devis." },
            { q: "Je peux voir mes caméras depuis mon téléphone ?", a: "Oui, inclus par défaut. On configure l'accès à distance sur votre téléphone avant de partir." },
          ]
        },
        {
          id: "tarifs", title: "TARIFS", items: [
            { q: "Combien coûte une installation de caméras ?", a: "À partir de 200 000 FCFA pour un domicile simple. Plus élevé selon la taille du site. Devis gratuit et sans engagement sur demande." },
            { q: "Peut-on payer en plusieurs fois ?", a: "Oui, on peut discuter un échelonnement selon la situation. Parlez-nous de votre budget au moment du devis." },
          ]
        },
        {
          id: "maintenance", title: "MAINTENANCE", items: [
            { q: "Que se passe-t-il si une caméra tombe en panne ?", a: "On a des contrats maintenance avec intervention en 4h ou 24h selon le niveau. On conseille vivement de prendre un contrat pour les installations professionnelles." },
            { q: "Vous formez nos équipes ?", a: "Toujours. Avant de partir, on explique comment utiliser les équipements. Et si besoin après, on répond au téléphone." },
          ]
        },
        {
          id: "securite", title: "SÉCURITÉ & CONFIDENTIALITÉ", items: [
            { q: "Qui a accès à nos enregistrements ?", a: "Seulement vous et les personnes que vous autorisez. On ne conserve aucune copie de vos enregistrements." },
            { q: "Combien de temps les enregistrements sont conservés ?", a: "Vous choisissez — généralement 7 à 30 jours. Jusqu'à 90 jours avec un disque dur plus grand." },
            { q: "En cas de coupure de courant, les caméras continuent ?", a: "Oui avec un onduleur (2 à 8h d'autonomie). Option solaire disponible pour les sites sensibles." },
          ]
        },
      ]
    },
    devisPage: {
      titre: "Devis Gratuit",
      sousTitre: "Obtenez une estimation détaillée sous 48h",
      succesTitre: "Demande transmise avec succès",
      succesDesc: "Nos experts traiteront votre dossier avec la plus grande attention et vous recontacteront dans les plus brefs délais.",
      retourPortail: "Retour au portail",
      sec1Titre: "Identification",
      nomLabel: "Nom complet *",
      nomPlaceholder: "Alex Chiedjo",
      entrepriseLabel: "Entreprise",
      entreprisePlaceholder: "Société SARL",
      emailLabel: "E-mail *",
      emailPlaceholder: "contact@domaine.com",
      telLabel: "Téléphone *",
      telPlaceholder: "+237 ...",
      villeLabel: "Localisation *",
      villePlaceholder: "Douala, Cameroun",
      sec2Titre: "Services BDT Souhaités",
      services: [
        { value: "videosurveillance", label: "Vidéosurveillance" },
        { value: "maintenance-surveillance", label: "Maintenance Surveillance" },
        { value: "installation-informatique", label: "Installation Informatique" },
        { value: "maintenance-informatique", label: "Maintenance Informatique" },
        { value: "cybersecurite", label: "Cybersécurité" },
        { value: "audit-formation", label: "Audit & Formation" },
      ],
      sec3Titre: "Spécifications techniques",
      structureLabel: "Type de structure",
      structureOptions: [
        { val: "", label: "Sélectionnez..." },
        { val: "bureau", label: "Bureaux / Siège social" },
        { val: "entrepot", label: "Site industriel / Entrepôt" },
        { val: "residence", label: "Résidence privée" },
        { val: "ecole", label: "Établissement public" }
      ],
      surfaceLabel: "Surface (m²)",
      surfacePlaceholder: "Ex: 500",
      detailsLabel: "Détails de la mission *",
      detailsPlaceholder: "Précisez vos besoins : nombre de points d'accès, caméras, type de maintenance, budget estimé...",
      sec4Titre: "Canal de réponse préféré",
      contactOptions: [
        { val: "email", label: "E-MAIL", sub: "Dossier complet et devis PDF" },
        { val: "whatsapp", label: "WHATSAPP", sub: "Échange rapide et direct" }
      ],
      btnSubmit: "TRANSMETTRE LA DEMANDE",
    },
    contactPage: {
      titre: "Contact",
      accroche: "Contactez-nous !",
      description: "Vous avez des questions sur nos solutions techniques ou nos services de maintenance ? Vous souhaitez des conseils personnalisés pour votre installation de vidéosurveillance ou votre cybersécurité ? Écrivez-nous et profitez de notre service de rappel gratuit. Nous vous rappellerons immédiatement.",
      messagePlaceholder: "Votre message *",
      prenomPlaceholder: "Prénom",
      nomPlaceholder: "Nom *",
      entreprisePlaceholder: "Entreprise",
      emailPlaceholder: "E-mail *",
      telPlaceholder: "Téléphone (mobile)",
      rappelerLabel: "Veuillez me rappeler",
      envoyer: "Envoyer",
      envoye: "Message envoyé !",
      reponse: "On vous répond dans les meilleurs délais.",
      nouveau: "Nouveau message",
      coordonneesTitre: "Nos coordonnées",
      appeler: "Appelez-nous",
      ecrire: "Écrivez-nous",
      visiter: "Visitez-nous",
      horairesLabel: "Horaires",
      choixTitre: "Comment nous contacter ?",
      choixSub: "Deux moyens directs pour une réponse rapide",
      parEmail: "Par e-mail",
      parEmailSub: "Votre client mail s'ouvre avec le message prêt",
      parWA: "Par WhatsApp",
      parWASub: "Plus rapide — réponse souvent en moins d'une minute",
      errRequis: "Requis",
      errEmail: "Email invalide",
    },
    mentionsLegales: {
      titre: "Mentions légales",
      maj: "Dernière mise à jour : Janvier 2025",
      editeurTitre: "1. Éditeur du site",
      editeurDesc: "BDT – Bron Digital Technology SARL\nSociété à Responsabilité Limitée\nSiège social : Akwa, Rue Pau, Douala, Cameroun\nEmail : gillesngomkap@gmail.com",
      directeurTitre: "2. Directeur de la publication",
      directeurDesc: "Le directeur de la publication est le gérant de BDT – Bron Digital Technology SARL.",
      hebergementTitre: "3. Hébergement",
      hebergementDesc: "Ce site est hébergé par Vercel Inc., San Francisco, États-Unis.",
      proprieteTitre: "4. Propriété intellectuelle",
      proprieteDesc: "L'ensemble du contenu de ce site est la propriété exclusive de BDT. Toute reproduction est interdite sans autorisation.",
    },
    confidentialite: {
      titre: "Politique de confidentialité",
      maj: "Dernière mise à jour : Janvier 2025",
      intro: "Chez BDT, nous accordons une grande importance à la protection de vos données personnelles.",
      collecteTitre: "1. Collecte des données",
      collecteDesc: "Nous collectons les informations que vous nous transmettez via nos formulaires (Devis, Contact).",
      usageTitre: "2. Utilisation des données",
      usageDesc: "Vos données sont utilisées uniquement pour répondre à vos demandes et assurer le suivi de nos prestations.",
      partageTitre: "3. Partage des données",
      partageDesc: "Nous ne vendons ni ne partageons vos données avec des tiers à des fins commerciales.",
    },
  },

  // ════════════════════════════════════════════════════════════
  //  ENGLISH
  // ════════════════════════════════════════════════════════════
  en: {
    nav: {
      accueil: "Home",
      apropos: "About",
      services: "Our Services",
      contact: "Contact",
      faq: "FAQ",
      devis: "Free quote",
      recherche: "Search",
      placeholder: "Search the site...",
      fermer: "Close",
    },
    hero: {
      badge: "Security & IT · Douala, Cameroon",
      titre: "Technology at the service of your security",
      sousTitre: "We protect your assets and data through innovative, tailor-made security and IT solutions.",
      btnDevis: "Start my project",
      btnApropos: "Discover BDT",
    },
    presentation: [
      "BDT, specialist in security and IT.",
      "Video surveillance, cybersecurity and maintenance.",
      "Complete solutions, tailored to your needs.",
      "A rigorous, responsive and innovative team.",
    ],
    presentation2: {
      titre: "Technology at the service of your security and trust.",
      paragraphes: [
        "At BDT, we do more than install equipment. We engineer resilient ecosystems, built to durably protect your assets, your data and your operations.",
        "As specialists in electronic security and IT in Cameroon, we support businesses, institutions and individuals with tailored solutions, rigorously deployed and maintained over time.",
        "Our success is measured by that of our clients. That is why every project is handled with the same level of demand, whether it's a camera setup for a shop or a secured network for a large organisation.",
      ],
      conclusion: {
        avant: "With a team of passionate experts and operations across",
        lien: "more than 10 strategic sites",
        apres: "in Cameroon, BDT has established itself as a trusted partner in electronic security and IT. We work every day towards the success of our clients' projects.",
      },
      chiffres: [
        { surtitre: "More than", valeur: 150, suffix: "+", desc: "installations completed in video surveillance and networks" },
        { surtitre: "", valeur: 24, suffix: "/7", desc: "technical support and monitoring, without interruption" },
        { surtitre: "", valeur: 100, suffix: "%", desc: "of our solutions are tailored to each client's needs" },
        { surtitre: "More than", valeur: 3, suffix: " years", desc: "of expertise in security and IT in Cameroon" },
      ],
      cta: {
        titre: "Ready to secure your infrastructure?",
        desc: "Browse our solutions or request a free, no-obligation quote.",
        btnServices: "View our services",
        btnDevis: "Free quote",
      },
    },
    services: {
      tag: "What we do",
      titre: "Our main services",
      sousTitre: "Discover our complete solutions to protect your business and optimize your systems",
      enSavoir: "Learn more",
      btnServices: "Our Services",
      btnClients: "Our Clients",
      items: [
        { id: "videosurveillance", titre: "Video Surveillance & Electronic Security", sousTitre: "Camera installation and maintenance. Remote and real-time monitoring." },
        { id: "informatique", titre: "IT Infrastructures & Networks", sousTitre: "Network installation, servers, maintenance. Troubleshooting and technical assistance." },
        { id: "acces", titre: "Access Control & Attendance Management", sousTitre: "Biometric systems, badges, facial recognition." },
        { id: "cybersecurite", titre: "Cybersecurity", sousTitre: "Securing data and systems. Audit and protection against cyberattacks." },
        { id: "cloud", titre: "Cloud & Digital Solutions", sousTitre: "Secure hosting, backup, professional messaging." },
        { id: "audit", titre: "Consulting, Audit & Training", sousTitre: "Tailor-made training, technical support and advice. Support for digital transformation." },
      ],
    },
    servicesPage: {
      titre: "Our Services",
      sousTitreHero: "Cutting-edge solutions for your security and digital infrastructures.",
      expertiseTitre: "IT Expertise",
      expertiseSousTitre: "From Idea to Implementation",
      expertiseDesc: "At BDT, we turn your technological challenges into growth opportunities. Our state-of-the-art infrastructure and local expertise empower businesses of all sizes to secure their assets and optimize digital performance.",
      btnDevis: "Request a quote",
      tagSurMesure: "Custom solution",
      ctaTitre: "Ready to secure your future?",
      ctaDesc: "Our experts are available for a free assessment of your needs.",
      ctaBtn: "Get my free quote",
      items: [
        {
          id: "videosurveillance",
          titre: "ELECTRONIC SECURITY & VIDEO SURVEILLANCE",
          accroche: "Asset Protection",
          desc: "Protect your assets with real-time surveillance systems and smart alerts. High-definition camera installation and maintenance.",
          points: [],
          details: {
            mainImage: "/images/service_video.png",
            avantages: ["24/7 Protection", "HD Recording", "Mobile Alerts"],
            tabs: [
              {
                id: "etude", label: "Study & Engineering",
                content: "Our ability to listen and analyze requires us to pay close attention to understanding your specific needs and the realities of your site. We conduct an exhaustive technical visit to identify physical constraints (obstacles, blind spots) and precisely size the necessary device before starting any project. This crucial phase also includes a detailed analysis of lighting conditions and strategic viewing angles to ensure total coverage without compromise. We provide you with a detailed layout plan that optimizes each camera for maximum return on investment. Our goal is to transform your security into a fluid and efficient management asset."
              },
              {
                id: "deploiement", label: "Deployment",
                content: "Our expert technicians deploy the latest generation of dome, bullet, and PTZ cameras (4K, advanced night vision) with discreet and aesthetic integration that respects your infrastructure. The configuration of intelligent systems, including facial recognition, thermal detection, and line crossing, is accompanied by the installation of a robust and secure network infrastructure. We scrupulously ensure that every installation is carried out with minimal disruption to your site while ensuring maximum cabling resilience against sabotage. Each device is tested individually to guarantee perfect image fluidity and instant sensor reactivity on your control screens or mobile terminals."
              },
              {
                id: "maintenance", label: "Maintenance",
                content: "Security tolerates no technical interruption or software flaw. BDT provides rigorous preventive and corrective maintenance for your entire video surveillance network thanks to a dedicated, permanently available team. Regular audits, lens cleaning, sensor recalibration, and constant software environment updates ensure the absolute reliability of recordings over the long term. Our support service guarantees optimal reactivity within 24 hours to isolate and correct any system anomaly, thus maintaining the integrity of your protection. We provide you with a periodic maintenance report to ensure that your investment remains efficient."
              }
            ]
          }
        },
        {
          id: "informatique",
          titre: "IT INFRASTRUCTURES & NETWORKS",
          accroche: "Optimal Connectivity",
          desc: "Optimize your connectivity with robust, scalable, and high-performance network architectures. Server deployment and technical support.",
          points: [],
          details: {
            mainImage: "/images/service_infra.png",
            avantages: ["High Availability", "Optimal Bandwidth", "Network Security"],
            tabs: [
              {
                id: "architecture", label: "Network Architecture",
                content: "The foundation of a high-performing company lies in the fluidity and security of its internal communications. We design complex addressing schemes and custom LAN/WAN sizing to guarantee constant performance. Our experts anticipate future expansion of your infrastructure by integrating advanced routing technologies and critical redundancy from the design phase."
              },
              {
                id: "deploiement", label: "Deployment / Cabling",
                content: "We perform in-depth work with meticulous execution during certified cable pulling and high-precision fiber optic splicing. Server rack patching meets strict international standards to allow ideal heat dissipation and easy administration. Each network point is rigorously tested and labeled to facilitate future intervention and guarantee lossless throughput."
              },
              {
                id: "support", label: "Maintenance & Support",
                content: "We offer proactive and reactive support for network performance drops or equipment failures. Our 24/7 remote monitoring allows us to quickly isolate bottlenecks, whether on-site servers or operations on critical network equipment such as managed switches and core routers. BDT commits to minimal restoration times for your business."
              }
            ]
          }
        },
        {
          id: "acces",
          titre: "ACCESS CONTROL & ATTENDANCE MANAGEMENT",
          accroche: "Security & Tracking",
          desc: "Secure your premises and simplify team tracking with cutting-edge biometric and badge solutions.",
          points: [],
          details: {
            mainImage: "/images/service_acces.png",
            avantages: ["Advanced Biometrics", "Centralized Management", "Real-time Tracking"],
            tabs: [
              {
                id: "biometrie", label: "Biometric Readers",
                content: "Guarantee uncompromising security through the unique identification of your employees. We install high-precision biometric terminals (fingerprint, facial, or palm recognition) that eliminate any risk of identity theft or badge exchange between colleagues. Our solutions are optimized for ultra-fast recognition speed, thereby avoiding queues at entry points while maintaining an extremely rigorous level of filtering. This system also allows for automating attendance tracking with surgical precision, reinforcing discipline and transparency within your organization."
              },
              {
                id: "badges", label: "Badge Management",
                content: "For total flexibility, we deploy highly secure RFID, MIFARE, and iClass badge solutions. Our door controllers allow for defining granular access rights: each employee can only access the zones authorized for them and only within defined time slots. In the event of a lost badge, our system allows for instant remote revocation, ensuring that no unauthorized person can enter your premises. This is the ideal solution for companies and administrations with high staff turnover or those regularly welcoming external visitors."
              },
              {
                id: "logiciel", label: "Software Interface",
                content: "Our centralized platform offers complete visibility over access and attendance, generating actionable automated reports for HR. Intelligent integration with third-party systems, such as automated turnstiles or boom barriers, allows for complete and transparent management of your staff. The software also provides real-time dashboards for dynamic site management."
              }
            ]
          }
        },
        {
          id: "cybersecurite",
          titre: "CYBERSECURITY & DATA PROTECTION",
          accroche: "Digital Defense",
          desc: "Defend your systems against digital threats with our in-depth audits and multi-layered defense strategies.",
          points: [],
          details: {
            mainImage: "/images/service_cyber.png",
            avantages: ["Risk Audit", "Next-Gen Firewall", "Zero-Trust Security"],
            tabs: [
              {
                id: "audit", label: "Audit & Vulnerability",
                content: "Understand the real state of your digital exposure before a critical incident severely impacts your productivity. Our engineering team conducts rigorous penetration testing (pentesting) to test your perimeter defenses, evaluate the resilience of your privileged access, and identify hidden software flaws. At the end of this audit, we provide you with a detailed report including concrete recommendations prioritized by risk level. This approach allows you to invest in a targeted manner in the most critical vulnerability points, thus durably strengthening your company's security posture against modern threats."
              },
              {
                id: "parefeu", label: "Firewall Deployment",
                content: "BDT installs and configures the most advanced security systems on the market to create an impenetrable defense perimeter around your assets. We deploy next-generation firewalls (NGFW) capable of performing deep application filtering and real-time intrusion prevention (IPS). This protection also includes strict securing of remote access via encrypted VPNs, thus guaranteeing the integrity of your data flows even for your remote collaborators. We configure custom security rules, aligned with your internal policy, to block malicious content while guaranteeing mapping fluidity."
              },
              {
                id: "veille", label: "Active Monitoring",
                content: "Like a modern SOC, we implement continuous monitoring tools that analyze the telemetry of your workstations and servers in real time. This proactive approach allows for detecting and neutralizing suspicious behavior, such as lateral movement attempts or Ransomware encryption, before the attack can succeed. Our experts provide a constant technological watch to adapt your defenses to new emerging threats. By choosing BDT's active monitoring, you benefit from dynamic protection that evolves with the cyber-threat landscape, guaranteeing the sustainability of your digital operations."
              }
            ]
          }
        },
        {
          id: "cloud",
          titre: "CLOUD & DIGITAL SOLUTIONS",
          accroche: "Agility and Hosting",
          desc: "Gain agility with secure hosting, offsite backups, and professional collaboration tools.",
          points: [],
          details: {
            mainImage: "/images/service_cloud.png",
            avantages: ["Total Scalability", "Offsite Backup", "Collaborative Tools"],
            tabs: [
              {
                id: "architecture", label: "Cloud Architecture",
                content: "Free your company from heavy hardware constraints with custom hybrid, public, or private Cloud architectures. Our hosting solutions provide immediate scalability, allowing your resources to grow at the rate of your business without massive and sudden hardware investment. We pay particular attention to local compliance and data sovereignty: your information remains accessible, secure, and compliant with current regulations. We optimize your infrastructure to reduce latency and maximize the availability of your critical business applications, 24/7."
              },
              {
                id: "sauvegardes", label: "Offsite Backups",
                content: "The resilience of your data is our absolute priority in the face of risks of disaster, theft, or cyberattack. We implement automatic replication strategies to highly secure and isolated remote datacenters. In the event of a major failure or local data loss, our Business Continuity Plan (BCP) allows you to restore your critical environments in record time, minimizing the financial impact of a service interruption. We regularly test the integrity of your backups to guarantee that at the right time, recovery will be total and immediate."
              },
              {
                id: "outils", label: "Collaboration Tools",
                content: "Modern and dynamic, the BDT workspace integrates the best collaboration suites on the market (Microsoft 365, Google Workspace) in a completely secure manner. From protected enterprise messaging to real-time document sharing, we deploy tools that break down silos and accelerate decision-making within your teams. These solutions are optimized for hybrid work, guaranteeing maximum productivity for your employees, whether they are in the office or traveling. We also handle the migration of your historical data to these new tools without any information loss."
              }
            ]
          }
        },
        {
          id: "audit",
          titre: "CONSULTING, AUDIT & TRAINING",
          accroche: "Strategic Support",
          desc: "Transform your IT systems with strategic support and continuous skill development for your teams.",
          points: ["Digital Marketing", "Graphic Design", "Office Secretariat", "Computer Networking", "Video Surveillance", "Web Development"],
          details: {
            mainImage: "/images/service_audit.png",
            avantages: ["Expert Advice", "Cost Optimization", "Knowledge Transfer"],
            tabs: [
              {
                id: "strategique", label: "Strategic Consulting",
                content: "Making informed technological decisions in a complex digital landscape is a major challenge for any management. BDT supports you in developing long-term strategic roadmaps, precisely aligned with your business objectives and budget. Together, we define digital transformation trajectories that maximize your return on investment while ensuring rigorous compliance with international standards (ISO 27001, etc.). Our expert consultants act as true partners in your growth, preventing you from making obsolete investments and guiding you toward technologies that will truly differentiate your competitiveness."
              },
              {
                id: "technique", label: "Tech Audit",
                content: "We conduct an in-depth examination of your existing infrastructure, applications, and IT processes to identify hidden optimization levers. Our technical diagnostics are not simple reports; they rely on concrete metrics to evaluate the actual performance and security of your information system. At the end of this audit, we provide you with a detailed action plan to transform your technical weaknesses into operational strengths. Whether preparing for a Cloud migration or resolving recurring failures, our technological audit is the indispensable starting point for an agile and high-performing infrastructure."
              },
              {
                id: "formation", label: "Upskilling",
                content: "Technology is only effective if mastered by those who use it. BDT offers tailored training programs, combining rigorous theory with practical application on realistic test environments. We cover key areas such as Digital Marketing, Graphic Design, Web Development, as well as Cybersecurity and Video Surveillance. Our goal is to guarantee an effective transfer of skills to your internal teams, developing their autonomy and diagnostic capacity. By investing in training with BDT, you value your human capital while ensuring better adoption of technological tools by your employees."
              }
            ],
            formationsData: [
              { name: "Digital Marketing", price: "120,000F", reg: "10,000F", duration: "03 Months" },
              { name: "Graphic Design", price: "120,000F", reg: "10,000F", duration: "03 Months" },
              { name: "Office Automation", price: "70,000F", reg: "10,000F", duration: "02 Months" },
              { name: "IT Networking", price: "150,000F", reg: "10,000F", duration: "03 Months" },
              { name: "Video Surveillance", price: "50,000F", reg: "10,000F", duration: "01 Month" },
              { name: "Web Development", price: "150,000F", reg: "10,000F", duration: "03 Months" },
            ],
            trainingMeta: {
              priceLabel: "Training",
              regLabel: "Registration",
              modalitiesTitle: "Learning Methods",
              modalities: ["Day classes", "Evening classes", "Online classes", "Flexible schedule based on availability"],
              engagementTitle: "BDT Commitment",
              engagement: ["100% hands-on", "Internship offered", "BDT SARL Certificate", "Expert trainers", "Personalized tracking"]
            }
          }
        },
      ]
    },
    processus: {
      tag: "Why choose BDT?",
      titre: "A unique, turnkey installation for maximum security",
      sousTitre: "Choose a comprehensive support service, tailored and perfectly calibrated",
      btnAction: "Start my technical study",
      etapes: [
        { titre: "Technical study", desc: "Our team analyzes the site, sensitive areas and technical constraints." },
        { titre: "Installation", desc: "Efficient installation, without construction work, without disrupting your activity." },
        { titre: "Commissioning", desc: "System startup under the strict supervision of our technicians." },
        { titre: "Follow-up & support", desc: "We stay available to monitor and maintain your security over time." },
      ],
    },
    formulaire: {
      titre: "Do you have any questions?",
      sousTitre: "No website or brochure can replace a face-to-face meeting to discuss your goals and the topics that interest you. We look forward to meeting you on site.",
      typeProfil: { industrie: "Company", client: "Client" },
      champs: {
        message: "Your message *",
        prenom: "First name *",
        nom: "Last name *",
        entreprise: "Company *",
        quartier: "City / Neighborhood",
        email: "E-mail *",
        tel: "Phone (mobile) *",
      },
      rappel: "Please call me back",
      envoyer: "Send",
    },
    temoignages: {
      tag: "Client reviews",
      titre: "They trust us",
      sousTitre: "What our clients say about our work",
      items: [
        { texte: "We didn't expect this level of professionalism. They came, installed everything quickly and cleanly. No issues since.", nom: "Serena Gardens", role: "Events Place, Douala" },
        { texte: "We manage several hotels and needed someone reliable. BDT handled everything and comes back regularly to check everything runs smoothly.", nom: "Faya Hotel Douala", role: "Hotel Group" },
        { texte: "What I liked is that they listened before proposing anything. No generic solution. The result speaks for itself.", nom: "Aston Canal+", role: "Media & Telecom" },
        { texte: "Over two years now. Fair prices, clean work, and they pick up when you call. That's all we ask.", nom: "Les Hôtels Serena", role: "Hotel Chain" },
        { texte: "Cameras and network installed, neat work, punctual team. We continue working together.", nom: "Global Bush", role: "Co-Working Space" },
        { texte: "They knew exactly what to do to secure our rooms and trained our team as well.", nom: "Soft Education", role: "Educational Institution" },
      ],
    },
    cta: {
      titre: "Specific security needs?",
      sousTitre: "Our experts will get back to you within 24h for a personalized study.",
      btnDevis: "Discuss my project",
      btnContact: "Talk to an expert",
    },
    footer: {
      description: "Security and IT solutions specialist in Douala. We protect your assets and data.",
      navigation: "Navigation",
      services: "Services",
      contact: "Contact",
      horaires: ["Mon – Fri: 08:00 AM – 06:00 PM", "Saturday: 09:00 AM – 04:00 PM", "Sunday: Closed"],
      droits: "© 2025 BDT – Bron Digital Technology SARL. All rights reserved.",
      confidentialite: "Privacy Policy",
      mentions: "Legal Notice",
      servicesItems: ["Video Surveillance", "IT Maintenance", "Cybersecurity", "Audit & Training"],
    },
    apropos: {
      titre: "Who are we?",
      sousTitre: "BDT, a team based in Douala specialized in security and IT.",
      tagHistoire: "Our story",
      titreHistoire: "BDT was born from a simple observation",
      texte1: "Many businesses in Douala had security issues without a reliable long-term service provider. Bron Digital Technology SARL was created to change that.",
      texte2: "Today we support hotels, companies, schools and individuals in Douala and several cities across Cameroon.",
      tagComp: "Skills",
      titreComp: "Our areas of expertise",
      tagValeurs: "What we believe in",
      titreValeurs: "Our values",
      cta: "Want to work with us?",
      ctaSub: "Tell us what you have in mind.",
      btnDevis: "Request a quote",
      btnContact: "Contact us",
      expertises: [
        "Video Surveillance",
        "IT Maintenance",
        "Cybersecurity",
        "Access Control",
        "Cloud & Digital Solutions",
        "Training & Audit"
      ],
      valeurs: [
        { titre: "Honesty", desc: "We tell you what you need, not what benefits us most." },
        { titre: "Responsiveness", desc: "Breakdowns don't wait. When you call, we answer." },
        { titre: "Quality", desc: "We'd rather turn down a job than do it poorly." },
        { titre: "Discretion", desc: "We work in sensitive spaces. Information stays where it belongs." },
      ],
    },
    faqPage: {
      titreHero: "Frequently Asked Questions",
      sousTitreHero: "Quickly find answers to your questions about our services, pricing, and installation procedures.",
      placeholderHero: "Search a question or keyword...",
      resultatsTrouves: "result(s) found",
      aucunResultatTitre: "No result found",
      aucunResultatDesc: "We couldn't find an answer for",
      poserQuestionBtn: "Ask an expert",
      banniereTitre: "Still have questions?",
      banniereDesc: "Our technical advisors are available to discuss your project and provide personalized answers.",
      btnContact: "Contact us",
      btnDevis: "Request a quote",
      cats: [
        {
          id: "services", title: "OUR SERVICES", items: [
            { q: "What exactly do you do?", a: "Video surveillance, IT maintenance, cybersecurity, and access control. We can manage everything or just a part depending on your needs." },
            { q: "Do you only operate in Douala?", a: "Based in Douala, we also operate in other cities in Cameroon. Share your location with us and we'll tell you what we can do." },
            { q: "Do you work with individuals?", a: "Yes, hotels, businesses, schools, and individuals. Every request is taken seriously regardless of its size." },
          ]
        },
        {
          id: "installation", title: "INSTALLATION", items: [
            { q: "Do you break walls?", a: "No. Cables are cleanly built-in or trunked, without demolition or disruption to your activity." },
            { q: "How long does an installation take?", a: "One day for a home or small business. A few days for a large building. Exact timeframe provided in the quote." },
            { q: "Can I view my cameras on my phone?", a: "Yes, included by default. We configure remote access on your phone before leaving." },
          ]
        },
        {
          id: "tarifs", title: "PRICING", items: [
            { q: "How much does a camera installation cost?", a: "Starting at 200,000 FCFA for a simple home. Higher depending on the site size. Free, no-obligation quote upon request." },
            { q: "Can we pay in installments?", a: "Yes, we can discuss staging payments depending on the situation. Tell us about your budget during the quote phase." },
          ]
        },
        {
          id: "maintenance", title: "MAINTENANCE", items: [
            { q: "What happens if a camera breaks down?", a: "We have maintenance contracts with 4h or 24h response times depending on the level. We highly recommend taking a contract for professional installations." },
            { q: "Do you train our teams?", a: "Always. Before leaving, we explain how to use the equipment. And if needed afterwards, we answer the phone." },
          ]
        },
        {
          id: "securite", title: "SECURITY & PRIVACY", items: [
            { q: "Who has access to our recordings?", a: "Only you and the people you authorize. We do not keep any copies of your recordings." },
            { q: "How long are recordings kept?", a: "You choose — typically 7 to 30 days. Up to 90 days with a larger hard drive." },
            { q: "In case of a power cut, do the cameras continue working?", a: "Yes with an inverter (2 to 8h of autonomy). Solar options are available for sensitive sites." },
          ]
        },
      ]
    },
    devisPage: {
      titre: "Free Quote",
      sousTitre: "Get a detailed estimate within 48 hours",
      succesTitre: "Request submitted successfully",
      succesDesc: "Our experts will process your file with the utmost care and get back to you as soon as possible.",
      retourPortail: "Return to portal",
      sec1Titre: "Identification",
      nomLabel: "Full name *",
      nomPlaceholder: "Alex Chiedjo",
      entrepriseLabel: "Company",
      entreprisePlaceholder: "ABC Corp",
      emailLabel: "Email *",
      emailPlaceholder: "contact@domain.com",
      telLabel: "Phone *",
      telPlaceholder: "+237 ...",
      villeLabel: "Location *",
      villePlaceholder: "Douala, Cameroon",
      sec2Titre: "Desired BDT Services",
      services: [
        { value: "videosurveillance", label: "Video Surveillance" },
        { value: "maintenance-surveillance", label: "Surveillance Maintenance" },
        { value: "installation-informatique", label: "IT Installation" },
        { value: "maintenance-informatique", label: "IT Maintenance" },
        { value: "cybersecurite", label: "Cybersecurity" },
        { value: "audit-formation", label: "Audit & Training" },
      ],
      sec3Titre: "Technical Specifications",
      structureLabel: "Facility Type",
      structureOptions: [
        { val: "", label: "Select..." },
        { val: "bureau", label: "Offices / Headquarters" },
        { val: "entrepot", label: "Industrial Site / Warehouse" },
        { val: "residence", label: "Private Residence" },
        { val: "ecole", label: "Educational Institution" }
      ],
      surfaceLabel: "Surface Area (sqm/m²)",
      surfacePlaceholder: "Ex: 500",
      detailsLabel: "Mission Details *",
      detailsPlaceholder: "Specify your needs: number of access points, cameras, maintenance type, estimated budget...",
      sec4Titre: "Preferred Contact Channel",
      contactOptions: [
        { val: "email", label: "EMAIL", sub: "Complete file and PDF quote" },
        { val: "whatsapp", label: "WHATSAPP", sub: "Fast and direct exchange" }
      ],
      btnSubmit: "SUBMIT REQUEST",
    },
    contactPage: {
      titre: "Contact",
      accroche: "Get in touch!",
      description: "Do you have questions about our technical solutions or maintenance services? Looking for personalized advice on your video surveillance or cybersecurity setup? Write to us and take advantage of our free callback service. We will call you back immediately.",
      messagePlaceholder: "Your message *",
      prenomPlaceholder: "First name",
      nomPlaceholder: "Last name *",
      entreprisePlaceholder: "Company",
      emailPlaceholder: "E-mail *",
      telPlaceholder: "Phone (mobile)",
      rappelerLabel: "Please call me back",
      envoyer: "Send",
      envoye: "Message sent!",
      reponse: "We will get back to you as soon as possible.",
      nouveau: "New message",
      coordonneesTitre: "Our contact details",
      appeler: "Call us",
      ecrire: "Write to us",
      visiter: "Visit us",
      horairesLabel: "Opening hours",
      choixTitre: "How to send?",
      choixSub: "Both reach us directly",
      parEmail: "By email",
      parEmailSub: "Your mail client opens with the message ready",
      parWA: "By WhatsApp",
      parWASub: "Faster — often replied within a minute",
      errRequis: "Required",
      errEmail: "Invalid email",
    },
    mentionsLegales: {
      titre: "Legal Notice",
      maj: "Last updated: January 2025",
      editeurTitre: "1. Site Editor",
      editeurDesc: "BDT – Bron Digital Technology SARL\nLimited Liability Company\nHeadquarters: Akwa, Rue Pau, Douala, Cameroon\nEmail: gillesngomkap@gmail.com",
      directeurTitre: "2. Publication Director",
      directeurDesc: "The publication director is the manager of BDT – Bron Digital Technology SARL.",
      hebergementTitre: "3. Hosting",
      hebergementDesc: "This site is hosted by Vercel Inc., San Francisco, USA.",
      proprieteTitre: "4. Intellectual Property",
      proprieteDesc: "All content on this site is the exclusive property of BDT. Any reproduction is prohibited without authorization.",
    },
    confidentialite: {
      titre: "Privacy Policy",
      maj: "Last updated: January 2025",
      intro: "At BDT, we attach great importance to the protection of your personal data.",
      collecteTitre: "1. Data Collection",
      collecteDesc: "We collect information that you transmit to us via our forms (Quote, Contact).",
      usageTitre: "2. Data Usage",
      usageDesc: "Your data is used solely to respond to your requests and ensure the follow-up of our services.",
      partageTitre: "3. Data Sharing",
      partageDesc: "We do not sell or share your data with third parties for commercial purposes.",
    },
  },
};

export type Langue = keyof typeof translations;
export type Traductions = typeof translations["fr"];
export default translations;
