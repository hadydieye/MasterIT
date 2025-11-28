module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/data/trainings.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trainingPrograms",
    ()=>trainingPrograms
]);
const focusLabel = (seed)=>seed.focus ?? seed.title;
const makeTestimonials = (seed, presets)=>presets.map((preset)=>({
            name: preset.name,
            role: preset.role,
            location: preset.location,
            rating: preset.rating,
            quote: preset.quote.replaceAll("{title}", seed.title).replaceAll("{focus}", focusLabel(seed))
        }));
const slugify = (value)=>value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
const testimonialPresets = {
    programming: [
        {
            name: "Souleymane Bah",
            role: "Développeur front",
            location: "Dakar",
            rating: 5,
            quote: "{title} m'a aidé à structurer mon offre autour de {focus} et à facturer mon premier client."
        },
        {
            name: "Mariam Koné",
            role: "Product builder",
            location: "Abidjan",
            rating: 4.8,
            quote: "Les revues de code et la checklist qualité {focus} m'ont permis de livrer sans stress."
        },
        {
            name: "Alpha Barry",
            role: "Freelance fullstack",
            location: "Conakry",
            rating: 4.9,
            quote: "Je présente désormais {focus} avec un portfolio clair grâce au plan proposé dans {title}."
        }
    ],
    data: [
        {
            name: "Fatima Camara",
            role: "Data analyst",
            location: "Conakry",
            rating: 4.9,
            quote: "{focus} n'était pas clair pour moi avant cette formation. Les labs et dashboards sont concrets."
        },
        {
            name: "Ismael Sy",
            role: "Backend engineer",
            location: "Dakar",
            rating: 4.8,
            quote: "J'ai optimisé nos requêtes en suivant les scripts fournis dans {title}."
        },
        {
            name: "Aïssata Diallo",
            role: "BI lead",
            location: "Bamako",
            rating: 4.7,
            quote: "Le projet final {focus} m'a donné un livrable prêt à montrer au COMEX."
        }
    ],
    ai: [
        {
            name: "Boubacar Keita",
            role: "Consultant IA",
            location: "Bamako",
            rating: 5,
            quote: "J'ai vendu un POC autour de {focus} en réutilisant les prompts et scripts du module 2."
        },
        {
            name: "Kadidiatou Diarra",
            role: "Content strategist",
            location: "Abidjan",
            rating: 4.9,
            quote: "Le framework ROI IA présenté dans {title} m'aide à convaincre mes clients."
        },
        {
            name: "Mory Camara",
            role: "Data analyst",
            location: "Conakry",
            rating: 4.8,
            quote: "Les agents {focus} tournent maintenant sur mes datasets internes grâce au support de Hady."
        }
    ],
    network: [
        {
            name: "Youssoufa Camara",
            role: "Admin réseau",
            location: "Conakry",
            rating: 5,
            quote: "Les labs {focus} sont exactement ce qu'il me fallait pour réussir mes audits."
        },
        {
            name: "Oumou Kaba",
            role: "Technicienne réseau",
            location: "Bamako",
            rating: 4.9,
            quote: "J'automatise désormais mes configs grâce aux playbooks fournis dans {title}."
        },
        {
            name: "Paul Kanga",
            role: "Ingénieur infra",
            location: "Abidjan",
            rating: 4.8,
            quote: "J'ai gagné en assurance pour documenter {focus} auprès de mon équipe."
        }
    ],
    linux: [
        {
            name: "Fatoumata Sow",
            role: "Admin système",
            location: "Dakar",
            rating: 4.9,
            quote: "Les scripts {focus} couvrent 80% de mes tâches quotidiennes."
        },
        {
            name: "Alexandre Tano",
            role: "DevOps junior",
            location: "Abidjan",
            rating: 4.8,
            quote: "Je peux enfin sécuriser mes serveurs grâce au plan pas à pas de {title}."
        },
        {
            name: "Binta Diallo",
            role: "Étudiante",
            location: "Conakry",
            rating: 4.7,
            quote: "Le module pratique {focus} m'a préparée pour mes entretiens."
        }
    ],
    devops: [
        {
            name: "Ismaël Koita",
            role: "DevOps freelance",
            location: "Nouakchott",
            rating: 5,
            quote: "{title} m'a donné un runbook clair pour industrialiser {focus}."
        },
        {
            name: "Fatoumata Diallo",
            role: "Ingénieure cloud",
            location: "Dakar",
            rating: 4.9,
            quote: "Les pipelines {focus} sont prêts à l'emploi, j'ai juste adapté mes variables."
        },
        {
            name: "Samba Barry",
            role: "Admin système",
            location: "Conakry",
            rating: 4.8,
            quote: "J'ai pu déployer une infra cliente complète en suivant {title}."
        }
    ],
    security: [
        {
            name: "Néné Bah",
            role: "Analyste cyber",
            location: "Conakry",
            rating: 5,
            quote: "Les labs {focus} sont directement connectés aux attentes CEH/pentest."
        },
        {
            name: "Abdoulaye Camara",
            role: "Consultant sécurité",
            location: "Bamako",
            rating: 4.9,
            quote: "J'ai ajouté une offre récurrente grâce au module reporting de {title}."
        },
        {
            name: "Mariam Barry",
            role: "Pentesteuse junior",
            location: "Dakar",
            rating: 4.9,
            quote: "En suivant {focus}, j'ai décroché mon premier contrat freelance."
        }
    ],
    business: [
        {
            name: "Hawa Traoré",
            role: "Coach mindset",
            location: "Abidjan",
            rating: 4.8,
            quote: "{title} m'a donné un plan éditorial précis pour vendre mon offre."
        },
        {
            name: "Alpha Sow",
            role: "Créateur YouTube",
            location: "Conakry",
            rating: 4.7,
            quote: "J'ai doublé mon CA après avoir appliqué la stratégie {focus} partagée."
        },
        {
            name: "Olivia Bamba",
            role: "Social media manager",
            location: "Bamako",
            rating: 4.8,
            quote: "Les scripts et tableaux de bord fournis rendent {focus} mesurable."
        }
    ],
    skills: [
        {
            name: "Mory Barry",
            role: "Assistant comptable",
            location: "Dakar",
            rating: 4.7,
            quote: "Je maîtrise maintenant {focus} au quotidien grâce aux ressources prêtes à l'emploi."
        },
        {
            name: "Oulimata Keita",
            role: "Assistante de direction",
            location: "Conakry",
            rating: 4.8,
            quote: "Le module pratique sur {title} a boosté ma productivité."
        },
        {
            name: "Adama Sène",
            role: "Étudiant",
            location: "Dakar",
            rating: 4.6,
            quote: "Je me sens légitime pour présenter {focus} dans mon CV."
        }
    ],
    trading: [
        {
            name: "Abdou Aziz Sow",
            role: "Trader Forex",
            location: "Dakar",
            rating: 4.8,
            quote: "Le journal fourni dans {title} m'aide à exécuter {focus} avec discipline."
        },
        {
            name: "Maimouna Cissé",
            role: "Crypto trader",
            location: "Abidjan",
            rating: 4.7,
            quote: "Les stratégies partagées pour {focus} sont actionnables dès la semaine 2."
        },
        {
            name: "Yaya Diallo",
            role: "Investisseur",
            location: "Conakry",
            rating: 4.7,
            quote: "Je combine désormais {focus} avec une gestion du risque rigoureuse."
        }
    ]
};
const programTemplates = {
    programming: {
        level: "Intermédiaire",
        duration: "6 semaines • projets guidés",
        price: 380000,
        rating: 4.85,
        students: 220,
        reviews: 64,
        image: "/react-nextjs-coding.jpg",
        instructor: "Hady Dieye",
        instructorBio: "Lead fullstack & mentor MasterIT",
        description: (seed)=>{
            const focus = focusLabel(seed);
            return `Maîtrise ${focus} en construisant une application complète, du design system au déploiement.`;
        },
        whatYouLearn: (seed)=>{
            const focus = focusLabel(seed);
            return [
                `Installer une stack ${focus} prête pour la production`,
                "Structurer ton code avec des patterns et tests modernes",
                `Connecter ${focus} à des APIs, bases de données ou services temps réel`,
                "Optimiser performances, accessibilité et DX",
                `Documenter ${focus} pour convaincre clients ou recruteurs`,
                `Packager une offre autour de ${focus}`
            ];
        },
        requirements: ()=>[
                "Bases en algorithmique ou logique",
                "VS Code + Git installés",
                "8h de pratique par semaine"
            ],
        curriculum: (seed)=>{
            const focus = focusLabel(seed);
            return [
                {
                    title: `Fondamentaux ${focus}`,
                    lessons: [
                        "Environnement VS Code & Git",
                        `${focus} patterns essentiels`,
                        "Qualité & tests rapides",
                        "Mini-projet guidé"
                    ]
                },
                {
                    title: "Projet encadré",
                    lessons: [
                        "Cadrage client",
                        "Sprints & revues",
                        "Tests end-to-end & monitoring",
                        "Déploiement & support"
                    ]
                },
                {
                    title: "Portfolio & offre",
                    lessons: [
                        "Documentation livrable",
                        "Pitch & storytelling",
                        "Tarification",
                        "Plan d'amélioration"
                    ]
                }
            ];
        },
        testimonials: (seed)=>makeTestimonials(seed, testimonialPresets.programming)
    },
    data: {
        level: "Intermédiaire",
        duration: "4 semaines • labs data",
        price: 360000,
        rating: 4.83,
        students: 170,
        reviews: 48,
        image: "/data-science-machine-learning.jpg",
        instructor: "Hady Dieye",
        instructorBio: "Consultant data & DBA freelance",
        description: (seed)=>{
            const focus = focusLabel(seed);
            return `Passe de requêtes basiques à des livrables ${focus} optimisés et documentés.`;
        },
        whatYouLearn: (seed)=>{
            const focus = focusLabel(seed);
            return [
                `Modéliser correctement tes schémas ${focus}`,
                "Écrire des requêtes avancées (CTE, fenêtres, agrégations)",
                "Automatiser migrations, backup et monitoring",
                "Construire des dashboards actionnables",
                "Mettre en place des contrôles de qualité data",
                `Présenter un plan de gouvernance autour de ${focus}`
            ];
        },
        requirements: ()=>[
                "Notions de SQL ou tableur",
                "Machine avec Docker/PostgreSQL ou Power BI",
                "Esprit analytique et rigueur"
            ],
        curriculum: (seed)=>{
            const focus = focusLabel(seed);
            return [
                {
                    title: "Modélisation avancée",
                    lessons: [
                        "Diagrammes & normalisation",
                        `${focus} optimisation d'index`,
                        "Requêtes analytiques",
                        "Data quality checks"
                    ]
                },
                {
                    title: "Ops & automatisation",
                    lessons: [
                        "Migrations versionnées",
                        "Backups & réplication",
                        "Monitoring & alerting",
                        "Security & gouvernance"
                    ]
                },
                {
                    title: "Projet data",
                    lessons: [
                        "Collecte & nettoyage",
                        "Dashboard ou API",
                        "Storytelling",
                        "Plan d'amélioration"
                    ]
                }
            ];
        },
        testimonials: (seed)=>makeTestimonials(seed, testimonialPresets.data)
    },
    ai: {
        level: "Débutant à Intermédiaire",
        duration: "5 semaines • ateliers live",
        price: 420000,
        rating: 4.9,
        students: 240,
        reviews: 72,
        image: "/artificial-intelligence-neural-network.jpg",
        instructor: "Hady Dieye",
        instructorBio: "Consultant IA & créateur d'agents",
        description: (seed)=>{
            const focus = focusLabel(seed);
            return `Active des assistants et automatisations ${focus} prêts à être vendus à des PME africaines.`;
        },
        whatYouLearn: (seed)=>{
            const focus = focusLabel(seed);
            return [
                `Cartographier les cas d'usage ${focus}`,
                "Construire des prompts et évaluations reproductibles",
                "Connecter APIs, Make et WhatsApp à tes agents",
                "Créer un prototype visuel convaincant",
                "Définir un plan de gouvernance et sécurité IA",
                `Packager ton offre ${focus} avec un ROI clair`
            ];
        },
        requirements: ()=>[
                "Compte OpenAI/DeepSeek/Ollama",
                "Aisance avec Notion ou scripts légers",
                "Volonté de tester rapidement"
            ],
        curriculum: (seed)=>{
            const focus = focusLabel(seed);
            return [
                {
                    title: "Fondamentaux LLM",
                    lessons: [
                        "Panorama modèles",
                        "Prompt factories",
                        "Évaluation & guardrails",
                        `${focus} stack overview`
                    ]
                },
                {
                    title: "Automatisation & agents",
                    lessons: [
                        "Make/Zapier + webhooks",
                        "Connecteurs WhatsApp",
                        "LangChain/Ollama",
                        "Prototype livrable"
                    ]
                },
                {
                    title: "Business & livraison",
                    lessons: [
                        "Diagnostic process",
                        "Offre & pricing",
                        "Contrats + SLA",
                        "Onboarding clients"
                    ]
                }
            ];
        },
        testimonials: (seed)=>makeTestimonials(seed, testimonialPresets.ai)
    },
    network: {
        level: "Intermédiaire",
        duration: "7 semaines • labs Packet Tracer",
        price: 400000,
        rating: 4.88,
        students: 190,
        reviews: 55,
        image: "/cisco-networking-ccna.jpg",
        instructor: "Hady Dieye",
        instructorBio: "Architecte réseau & formateur Cisco",
        description: (seed)=>{
            const focus = focusLabel(seed);
            return `Monte des labs ${focus} complets et prépare des certifications avec un suivi serré.`;
        },
        whatYouLearn: (seed)=>{
            const focus = focusLabel(seed);
            return [
                `Comprendre le modèle OSI/TCP-IP appliqué à ${focus}`,
                "Configurer switching/routing Cisco avec rigueur",
                "Automatiser sauvegardes & templates",
                "Sécuriser VLAN, ACL, VPN",
                "Documenter des topologies prêtes pour la prod",
                `Planifier ton passage de certification ${focus}`
            ];
        },
        requirements: ()=>[
                "Laptop pour Packet Tracer ou GNS3",
                "Notions IP de base",
                "Volonté de pratiquer"
            ],
        curriculum: (seed)=>{
            const focus = focusLabel(seed);
            return [
                {
                    title: "Fondamentaux réseau",
                    lessons: [
                        "Adressage IPv4/v6",
                        "Subnetting express",
                        "Switching & VLAN",
                        "Sécurité physique & câblage"
                    ]
                },
                {
                    title: "Labs avancés",
                    lessons: [
                        "OSPF/EIGRP",
                        "Services DHCP/DNS",
                        `${focus} troubleshooting`,
                        "WAN & VPN"
                    ]
                },
                {
                    title: "Certification & automation",
                    lessons: [
                        "Simulations d'examen",
                        "Ansible & sauvegardes",
                        "Monitoring NetFlow",
                        "Plan d'étude"
                    ]
                }
            ];
        },
        testimonials: (seed)=>makeTestimonials(seed, testimonialPresets.network)
    },
    linux: {
        level: "Intermédiaire",
        duration: "5 semaines • ateliers shell",
        price: 320000,
        rating: 4.86,
        students: 210,
        reviews: 61,
        image: "/linux-server-administration.jpg",
        instructor: "Hady Dieye",
        instructorBio: "Admin système & DevSecOps",
        description: (seed)=>{
            const focus = focusLabel(seed);
            return `Industrialise ${focus} avec des checklists, scripts et bonnes pratiques prêtes à l'emploi.`;
        },
        whatYouLearn: (seed)=>{
            const focus = focusLabel(seed);
            return [
                `Maîtriser les commandes essentielles pour ${focus}`,
                "Automatiser tâches et audits via scripts",
                "Sécuriser services critiques (SSH, firewall)",
                "Superviser journaux & performances",
                "Créer une documentation d'exploitation",
                `Préparer des entretiens ops autour de ${focus}`
            ];
        },
        requirements: ()=>[
                "Machine Linux/WSL",
                "Notions de réseau",
                "Curiosité pour la ligne de commande"
            ],
        curriculum: (seed)=>{
            const focus = focusLabel(seed);
            return [
                {
                    title: "Shell & productivité",
                    lessons: [
                        "Pipelines & regex",
                        "Scripts d'inventaire",
                        "Gestion de logs",
                        `${focus} exercices guidés`
                    ]
                },
                {
                    title: "Administration système",
                    lessons: [
                        "Systemd & services",
                        "Gestion utilisateurs & ACL",
                        "Stockage & backup",
                        "Automatisation Ansible"
                    ]
                },
                {
                    title: "Sécurité & monitoring",
                    lessons: [
                        "Hardening SSH",
                        "Firewall & fail2ban",
                        "Audit Lynis",
                        "Stack observabilité"
                    ]
                }
            ];
        },
        testimonials: (seed)=>makeTestimonials(seed, testimonialPresets.linux)
    },
    devops: {
        level: "Intermédiaire",
        duration: "6 semaines • sprints infra",
        price: 520000,
        rating: 4.9,
        students: 140,
        reviews: 42,
        image: "/docker-kubernetes-devops.jpg",
        instructor: "Hady Dieye",
        instructorBio: "DevOps/Cloud pour startups africaines",
        description: (seed)=>{
            const focus = focusLabel(seed);
            return `Déploie ${focus} avec une approche infra-as-code, monitoring et runbook complet.`;
        },
        whatYouLearn: (seed)=>{
            const focus = focusLabel(seed);
            return [
                `Containeriser et sécuriser ${focus}`,
                "Automatiser CI/CD avec GitHub Actions",
                "Gérer secrets, observabilité et alerting",
                "Documenter un runbook client",
                "Optimiser coûts cloud",
                `Préparer une offre managed ${focus}`
            ];
        },
        requirements: ()=>[
                "Bases Linux",
                "Expérience dev ou infra",
                "Accès à une VM ou cloud"
            ],
        curriculum: ()=>[
                {
                    title: "Containerisation",
                    lessons: [
                        "Docker multi-stage",
                        "Registries & scan",
                        "Compose prod",
                        "Policies de sécurité"
                    ]
                },
                {
                    title: "Orchestration & cloud",
                    lessons: [
                        "Kubernetes k3s",
                        "Ingress & TLS",
                        "Terraform/IaC",
                        "Secrets & vault"
                    ]
                },
                {
                    title: "Ops & livraison",
                    lessons: [
                        "CI/CD GitHub Actions",
                        "Grafana/Loki",
                        "Runbook client",
                        "Handover + support"
                    ]
                }
            ],
        testimonials: (seed)=>makeTestimonials(seed, testimonialPresets.devops)
    },
    security: {
        level: "Intermédiaire à Avancé",
        duration: "8 semaines • labs offensifs",
        price: 550000,
        rating: 4.94,
        students: 160,
        reviews: 60,
        image: "/ethical-hacking-cybersecurity.jpg",
        instructor: "Hady Dieye",
        instructorBio: "Pentester & consultant sécurité",
        description: (seed)=>{
            const focus = focusLabel(seed);
            return `Monte un lab ${focus}, applique méthodo PTES/RedTeam et livre des rapports actionnables.`;
        },
        whatYouLearn: (seed)=>{
            const focus = focusLabel(seed);
            return [
                `Préparer un environnement offensif ${focus}`,
                "Automatiser reconnaissance & exploitation",
                "Documenter preuves & plans d'action",
                "Pitcher une offre sécurité récurrente",
                "Industrialiser ton reporting",
                `Réutiliser des playbooks ${focus} sur tes missions`
            ];
        },
        requirements: ()=>[
                "Bases Linux & réseaux",
                "Machine dédiée ou lab virtuel",
                "Éthique irréprochable"
            ],
        curriculum: ()=>[
                {
                    title: "Recon & exploitation",
                    lessons: [
                        "OSINT & mapping",
                        "Scan/Rustscan",
                        "Exploits & privesc",
                        "Automation scripts"
                    ]
                },
                {
                    title: "Ciblage spécifique",
                    lessons: [
                        "Web/API pentest",
                        "AD & Red Team",
                        "Crypto & protocoles",
                        "Reporting structuré"
                    ]
                },
                {
                    title: "Offre & conformité",
                    lessons: [
                        "Modèles de rapport",
                        "Roadmap corrective",
                        "Pitch offre récurrente",
                        "Gestion client"
                    ]
                }
            ],
        testimonials: (seed)=>makeTestimonials(seed, testimonialPresets.security)
    },
    business: {
        level: "Débutant",
        duration: "4 semaines • coaching de groupe",
        price: 260000,
        rating: 4.8,
        students: 180,
        reviews: 58,
        image: "/digital-business-entrepreneur.jpg",
        instructor: "Hady Dieye",
        instructorBio: "Créateur de contenus & formateur business",
        description: (seed)=>{
            const focus = focusLabel(seed);
            return `Structure ton offre ${focus}, publie chaque semaine et monétise avec un plan simple.`;
        },
        whatYouLearn: (seed)=>{
            const focus = focusLabel(seed);
            return [
                `Trouver un positionnement clair pour ${focus}`,
                "Construire un calendrier éditorial actionnable",
                "Automatiser acquisition via WhatsApp/mail",
                "Créer une offre irrésistible",
                "Suivre KPI (CA, conversion, audience)",
                `Pitcher ton offre ${focus} en live`
            ];
        },
        requirements: ()=>[
                "Être prêt à publier",
                "1h par jour pour exécuter",
                "Volonté de vendre"
            ],
        curriculum: ()=>[
                {
                    title: "Audience & contenu",
                    lessons: [
                        "Avatar client",
                        "Storytelling",
                        "Short-form & lives",
                        "CTA & automatisation"
                    ]
                },
                {
                    title: "Monétisation",
                    lessons: [
                        "Offre & pricing",
                        "Funnels simples",
                        "Automations WhatsApp",
                        "Email minimaliste"
                    ]
                },
                {
                    title: "Vente & suivi",
                    lessons: [
                        "Scripts DM",
                        "Onboarding clients",
                        "Tableau de bord KPI",
                        "Optimisation hebdo"
                    ]
                }
            ],
        testimonials: (seed)=>makeTestimonials(seed, testimonialPresets.business)
    },
    skills: {
        level: "Tous niveaux",
        duration: "3 semaines • ateliers pratiques",
        price: 200000,
        rating: 4.7,
        students: 210,
        reviews: 52,
        image: "/placeholder.jpg",
        instructor: "Hady Dieye",
        instructorBio: "Formateur pluridisciplinaire",
        description: (seed)=>{
            const focus = focusLabel(seed);
            return `Domine ${focus} avec des modèles prêts à l'emploi et un suivi WhatsApp.`;
        },
        whatYouLearn: (seed)=>{
            const focus = focusLabel(seed);
            return [
                `Installer un workflow efficace autour de ${focus}`,
                "Pratiquer via des mini-projets hebdo",
                "Présenter ton travail dans un portfolio",
                "Gagner du temps grâce aux templates fournis",
                "Obtenir un feedback sur ton exécution",
                "Planifier ta progression après la formation"
            ];
        },
        requirements: ()=>[
                "Laptop opérationnel",
                "Motivation à pratiquer",
                "Connexion stable"
            ],
        curriculum: (seed)=>{
            const focus = focusLabel(seed);
            return [
                {
                    title: "Fondations",
                    lessons: [
                        "Outils & raccourcis",
                        `${focus} bonnes pratiques`,
                        "Livrables attendus",
                        "Checklist qualité"
                    ]
                },
                {
                    title: "Projets",
                    lessons: [
                        "Mini-projet hebdo",
                        "Feedback pair",
                        "Amélioration continue",
                        "Documentation simple"
                    ]
                },
                {
                    title: "Portfolio",
                    lessons: [
                        "Template Notion/Behance",
                        "Pitch oral",
                        "Plan 30 jours",
                        "Suivi personnalisé"
                    ]
                }
            ];
        },
        testimonials: (seed)=>makeTestimonials(seed, testimonialPresets.skills)
    },
    trading: {
        level: "Intermédiaire",
        duration: "6 semaines • live trading",
        price: 450000,
        rating: 4.78,
        students: 150,
        reviews: 46,
        image: "/professional-trading-charts.jpg",
        instructor: "Hady Dieye",
        instructorBio: "Trader swing & coach financier",
        description: (seed)=>{
            const focus = focusLabel(seed);
            return `Structure ta stratégie ${focus} avec un journal, un plan de risque et des sessions live.`;
        },
        whatYouLearn: (seed)=>{
            const focus = focusLabel(seed);
            return [
                `Lire le marché et identifier les setups ${focus}`,
                "Construire un plan de gestion du risque",
                "Automatiser une partie des entrées via scripts/indicateurs",
                "Tenir un journal Notion détaillé",
                "Analyser tes KPI (winrate, RRR, drawdown)",
                "Préparer une stratégie d'augmentation de capital"
            ];
        },
        requirements: ()=>[
                "Compte démo ou réel régulé",
                "Discipline quotidienne",
                "Connexion fiable"
            ],
        curriculum: ()=>[
                {
                    title: "Fondamentaux marché",
                    lessons: [
                        "Structure & liquidité",
                        "Macro & news",
                        "Journalisation",
                        "Psychologie trader"
                    ]
                },
                {
                    title: "Stratégies",
                    lessons: [
                        "Setups intraday",
                        "Swing & position",
                        "Crypto/forex actions",
                        "Automatisation légère"
                    ]
                },
                {
                    title: "Discipline & scaling",
                    lessons: [
                        "Gestion du risque",
                        "Revues hebdo",
                        "Plan de montée en capital",
                        "Fiscalité & conformité"
                    ]
                }
            ],
        testimonials: (seed)=>makeTestimonials(seed, testimonialPresets.trading)
    }
};
const programSeeds = [
    // Programmation
    {
        title: "Programmation Python",
        category: "Programmation",
        template: "programming",
        focus: "Python moderne"
    },
    {
        title: "React.js Frontend Pro",
        category: "Programmation",
        template: "programming",
        focus: "React.js"
    },
    {
        title: "PHP & SQL Fullstack",
        category: "Programmation",
        template: "programming",
        focus: "stack PHP + SQL"
    },
    {
        title: "React Native Mobile Apps",
        category: "Programmation",
        template: "programming",
        focus: "React Native"
    },
    {
        title: "Formation Complète Développement Web",
        category: "Programmation",
        template: "programming",
        focus: "développement web full-stack"
    },
    {
        title: "TypeScript Mastery",
        category: "Programmation",
        template: "programming",
        focus: "TypeScript"
    },
    {
        title: "JavaScript, Node.js & Algorithmique",
        category: "Programmation",
        template: "programming",
        focus: "JavaScript & algorithmique"
    },
    {
        title: "Node.js Express JWT & Mongoose",
        category: "Programmation",
        template: "programming",
        focus: "API Node.js sécurisée"
    },
    {
        title: "Unity 3D Game Builder",
        category: "Programmation",
        template: "programming",
        focus: "Unity 3D"
    },
    {
        title: "Java Applications",
        category: "Programmation",
        template: "programming",
        focus: "Java moderne"
    },
    {
        title: "Langage C Systèmes",
        category: "Programmation",
        template: "programming",
        focus: "langage C bas niveau"
    },
    {
        title: "Django REST & Admin",
        category: "Programmation",
        template: "programming",
        focus: "Django"
    },
    {
        title: "C++ Haute Performance",
        category: "Programmation",
        template: "programming",
        focus: "C++"
    },
    {
        title: "Essentiels de VS Code",
        category: "Programmation",
        template: "programming",
        focus: "workflow VS Code"
    },
    {
        title: "PowerShell Automation",
        category: "Programmation",
        template: "programming",
        focus: "scripts PowerShell"
    },
    // Data & BI
    {
        title: "PostgreSQL Architecture",
        category: "Data & BI",
        template: "data",
        focus: "PostgreSQL"
    },
    {
        title: "Power BI Dashboards",
        category: "Data & BI",
        template: "data",
        focus: "Power BI"
    },
    {
        title: "Data Science & Machine Learning",
        category: "Data & BI",
        template: "data",
        focus: "data science & ML"
    },
    {
        title: "Bases de Données Modernes",
        category: "Data & BI",
        template: "data",
        focus: "bases SQL & NoSQL"
    },
    // DevOps & Cloud
    {
        title: "Amazon Web Services (AWS)",
        category: "DevOps & Cloud",
        template: "devops",
        focus: "AWS cloud"
    },
    {
        title: "Docker & Kubernetes",
        category: "DevOps & Cloud",
        template: "devops",
        focus: "Docker & Kubernetes"
    },
    // Intelligence Artificielle
    {
        title: "IA Fullstack avec Ollama",
        category: "Intelligence Artificielle",
        template: "ai",
        focus: "stack Ollama + LangChain"
    },
    {
        title: "ChatGPT & Midjourney Studio",
        category: "Intelligence Artificielle",
        template: "ai",
        focus: "ChatGPT & Midjourney"
    },
    {
        title: "Formation DeepSeek",
        category: "Intelligence Artificielle",
        template: "ai",
        focus: "DeepSeek"
    },
    {
        title: "Intégrer l'IA dans votre Business",
        category: "Intelligence Artificielle",
        template: "ai",
        focus: "transformation IA business"
    },
    {
        title: "NoCode & Perplexity Automations",
        category: "Intelligence Artificielle",
        template: "ai",
        focus: "NoCode & Perplexity"
    },
    {
        title: "Créer du Contenu à Succès avec l'IA",
        category: "Intelligence Artificielle",
        template: "ai",
        focus: "contenu IA"
    },
    {
        title: "Qualité Logicielle & IA avec ChatGPT",
        category: "Intelligence Artificielle",
        template: "ai",
        focus: "qualité logicielle assistée par IA"
    },
    {
        title: "LLMs & Agents Experts",
        category: "Intelligence Artificielle",
        template: "ai",
        focus: "LLMs avancés"
    },
    // Réseaux & Infrastructure
    {
        title: "CCNA Booster",
        category: "Réseaux & Infrastructure",
        template: "network",
        focus: "CCNA"
    },
    {
        title: "Cisco Specialist",
        category: "Réseaux & Infrastructure",
        template: "network",
        focus: "Cisco avancé"
    },
    {
        title: "Fondements des Réseaux",
        category: "Réseaux & Infrastructure",
        template: "network",
        focus: "fondamentaux réseaux"
    },
    {
        title: "Protocoles OSI & TCP/IP",
        category: "Réseaux & Infrastructure",
        template: "network",
        focus: "protocoles OSI & TCP/IP"
    },
    {
        title: "Administrateur Réseaux",
        category: "Réseaux & Infrastructure",
        template: "network",
        focus: "administration réseau"
    },
    // Linux & Systèmes
    {
        title: "Linux Shell Bash",
        category: "Linux & Systèmes",
        template: "linux",
        focus: "Bash & scripting"
    },
    {
        title: "Linux Sécurité",
        category: "Linux & Systèmes",
        template: "linux",
        focus: "sécurité Linux"
    },
    {
        title: "Commandes du Terminal",
        category: "Linux & Systèmes",
        template: "linux",
        focus: "commandes terminal"
    },
    {
        title: "Linux de A à Z par la Pratique",
        category: "Linux & Systèmes",
        template: "linux",
        focus: "opérations Linux"
    },
    // Cybersécurité & Hacking
    {
        title: "Sécurité Réseaux",
        category: "Cybersécurité & Hacking",
        template: "security",
        focus: "sécurité réseaux"
    },
    {
        title: "CEH v13",
        category: "Cybersécurité & Hacking",
        template: "security",
        focus: "CEH v13"
    },
    {
        title: "Active Directory Red Team Lab",
        category: "Cybersécurité & Hacking",
        template: "security",
        focus: "Active Directory Red Team"
    },
    {
        title: "Cybersécurité avec l'IA",
        category: "Cybersécurité & Hacking",
        template: "security",
        focus: "cybersécurité + IA"
    },
    {
        title: "Ethical Hacking from Scratch",
        category: "Cybersécurité & Hacking",
        template: "security",
        focus: "ethical hacking"
    },
    {
        title: "OpenSSL Cryptage des Données",
        category: "Cybersécurité & Hacking",
        template: "security",
        focus: "OpenSSL & chiffrement"
    },
    {
        title: "Essentiel de Kali Linux",
        category: "Cybersécurité & Hacking",
        template: "security",
        focus: "Kali Linux"
    },
    {
        title: "Hacking WordPress",
        category: "Cybersécurité & Hacking",
        template: "security",
        focus: "WordPress pentest"
    },
    {
        title: "Wireshark Expert",
        category: "Cybersécurité & Hacking",
        template: "security",
        focus: "Wireshark"
    },
    // Business & Marketing
    {
        title: "Community Management Pro",
        category: "Business & Marketing",
        template: "business",
        focus: "community management"
    },
    {
        title: "Digital Marketing 360",
        category: "Business & Marketing",
        template: "business",
        focus: "marketing digital"
    },
    {
        title: "Dropshipping Accéléré",
        category: "Business & Marketing",
        template: "business",
        focus: "dropshipping"
    },
    {
        title: "E-commerce Rentable",
        category: "Business & Marketing",
        template: "business",
        focus: "e-commerce"
    },
    {
        title: "Créer & Administrer une Chaîne YouTube",
        category: "Business & Marketing",
        template: "business",
        focus: "gestion chaîne YouTube"
    },
    {
        title: "Shorts YouTube Rentables",
        category: "Business & Marketing",
        template: "business",
        focus: "shorts YouTube"
    },
    {
        title: "The Business Legion",
        category: "Business & Marketing",
        template: "business",
        focus: "The Business Legion"
    },
    // Compétences Complémentaires
    {
        title: "Comptabilité Générale",
        category: "Compétences Complémentaires",
        template: "skills",
        focus: "comptabilité"
    },
    {
        title: "Sage 100 Immobilisations",
        category: "Compétences Complémentaires",
        template: "skills",
        focus: "Sage 100"
    },
    {
        title: "Anglais Professionnel",
        category: "Compétences Complémentaires",
        template: "skills",
        focus: "anglais business"
    },
    {
        title: "Figma Design Systems",
        category: "Compétences Complémentaires",
        template: "skills",
        focus: "design Figma"
    },
    {
        title: "Canva Créatif",
        category: "Compétences Complémentaires",
        template: "skills",
        focus: "Canva"
    },
    {
        title: "Windows 11 Pro",
        category: "Compétences Complémentaires",
        template: "skills",
        focus: "Windows 11"
    },
    {
        title: "Windows Server Administration",
        category: "Compétences Complémentaires",
        template: "skills",
        focus: "Windows Server"
    },
    {
        title: "Suite Office Productivité",
        category: "Compétences Complémentaires",
        template: "skills",
        focus: "Microsoft Office"
    },
    {
        title: "Design UX/UI",
        category: "Compétences Complémentaires",
        template: "skills",
        focus: "UX/UI design"
    },
    // Trading & Finance
    {
        title: "Trading Crypto",
        category: "Trading & Finance",
        template: "trading",
        focus: "trading crypto"
    },
    {
        title: "Forex Pro",
        category: "Trading & Finance",
        template: "trading",
        focus: "trading Forex"
    },
    {
        title: "Smart Money Concepts (SMC)",
        category: "Trading & Finance",
        template: "trading",
        focus: "SMC"
    },
    {
        title: "Alti Trading",
        category: "Trading & Finance",
        template: "trading",
        focus: "Alti trading"
    },
    {
        title: "Investisseur Boursier",
        category: "Trading & Finance",
        template: "trading",
        focus: "investissement boursier"
    },
    {
        title: "Scalper Pro",
        category: "Trading & Finance",
        template: "trading",
        focus: "scalping pro"
    },
    {
        title: "Crypto Futures Mastery",
        category: "Trading & Finance",
        template: "trading",
        focus: "crypto futures"
    },
    {
        title: "Young Trader Forex Program",
        category: "Trading & Finance",
        template: "trading",
        focus: "Young Trader Forex"
    }
];
const imageMap = {
    "Programmation Python": "/images/Programmation Python.jpg",
    "React.js Frontend Pro": "/images/React.js Frontend Pro.jpg",
    "PHP & SQL Fullstack": "/images/PHP & SQL Fullstack.jpg",
    "React Native Mobile Apps": "/images/React Native Mobile Apps.jpg",
    "Formation Complète Développement Web": "/images/Formation Complète Développement Web.jpg",
    "TypeScript Mastery": "/images/TypeScript Mastery.jpg",
    "JavaScript, Node.js & Algorithmique": "/images/JavaScript, Node.js & Algorithmique.jpg",
    "Node.js Express JWT & Mongoose": "/images/Node.js Express JWT & Mongoose.jpg",
    "Unity 3D Game Builder": "/images/Unity 3D Game Builder.jpg",
    "Java Applications": "/images/Java Applications.jpg",
    "Langage C Systèmes": "/images/Langage C Systèmes.jpg",
    "Django REST & Admin": "/images/Django REST & Admin.jpg",
    "C++ Haute Performance": "/images/C++ Haute Performance.jpg",
    "Essentiels de VS Code": "/images/Essentiels de VS Code.jpg",
    "PowerShell Automation": "/images/PowerShell Automation.jpg",
    "PostgreSQL Architecture": "/images/PostgreSQL Architecture.jpg",
    "Power BI Dashboards": "/images/Power BI Dashboards.jpg",
    "Data Science & Machine Learning": "/images/Data Science & Machine Learning.jpg",
    "Bases de Données Modernes": "/images/Bases de Données Modernes.jpg",
    "Amazon Web Services (AWS)": "/images/Amazon Web Services (AWS).jpg",
    "Docker & Kubernetes": "/images/Docker & Kubernetes.jpg",
    "IA Fullstack avec Ollama": "/images/IA Fullstack avec Ollama.png",
    "ChatGPT & Midjourney Studio": "/images/ChatGPT & Midjourney Studio.jpg",
    "Formation DeepSeek": "/images/Formation DeepSeek.jpg",
    "Intégrer l'IA dans votre Business": "/images/Intégrer l'IA dans votre Business.jpg",
    "NoCode & Perplexity Automations": "/images/NoCode & Perplexity Automations.webp",
    "Créer du Contenu à Succès avec l'IA": "/images/Créer du Contenu à Succès avec l'IA.jpg",
    "Qualité Logicielle & IA avec ChatGPT": "/images/Qualité Logicielle & IA avec ChatGPT.jpg",
    "LLMs & Agents Experts": "/images/LLMs & Agents Experts.jpg",
    "CCNA Booster": "/images/CCNA Booster.jpg",
    "Cisco Specialist": "/images/Cisco Specialist.jpg",
    "Fondements des Réseaux": "/images/Fondements des Réseaux.jpg",
    "Protocoles OSI & TCP/IP": "/images/Protocoles OSI & TCP.jpg",
    "Administrateur Réseaux": "/images/Administrateur Réseaux.jpg",
    "Linux Shell Bash": "/images/Linux Shell Bash.jpg",
    "Linux Sécurité": "/images/Linux Sécurité.jpg",
    "Commandes du Terminal": "/images/Commandes du Terminal.jpg",
    "Linux de A à Z par la Pratique": "/images/Linux de A à Z par la Pratique.jpg",
    "Sécurité Réseaux": "/images/Sécurité Réseaux.jpg",
    "CEH v13": "/images/CEH v13.jpg",
    "Active Directory Red Team Lab": "/images/Active Directory Red Team Lab.jpg",
    "Cybersécurité avec l'IA": "/images/Cybersécurité avec l'IA.jpg",
    "Ethical Hacking from Scratch": "/images/Ethical Hacking from Scratch.jpg",
    "OpenSSL Cryptage des Données": "/images/OpenSSL Cryptage des Données.jpg",
    "Essentiel de Kali Linux": "/images/Essentiel de Kali Linux.jpg",
    "Hacking WordPress": "/images/Hacking WordPress.jpg",
    "Wireshark Expert": "/images/Wireshark Expert.jpg",
    "Community Management Pro": "/images/Community Management Pro.jpg",
    "Digital Marketing 360": "/images/Digital Marketing 360.jpg",
    "Dropshipping Accéléré": "/images/Dropshipping Accéléré.jpg",
    "E-commerce Rentable": "/images/E-commerce Rentable.jpg",
    "Créer & Administrer une Chaîne YouTube": "/images/Créer & Administrer une Chaîne YouTube.jpg",
    "Shorts YouTube Rentables": "/images/Shorts YouTube Rentables.jpg",
    "The Business Legion": "/images/The Business Legion.jpg",
    "Comptabilité Générale": "/images/Comptabilité Générale.jpg",
    "Sage 100 Immobilisations": "/images/Sage 100 Immobilisations.jpg",
    "Anglais Professionnel": "/images/Anglais Professionnel.jpg",
    "Figma Design Systems": "/images/Figma Design Systems.jpg",
    "Canva Créatif": "/images/Canva Créatif.jpg",
    "Windows 11 Pro": "/images/Windows 11 Pro.jpg",
    "Windows Server Administration": "/images/Windows Server Administration.jpg",
    "Suite Office Productivité": "/images/Suite Office Productivité.jpg",
    "Design UX/UI": "/images/Design UX.jpg",
    "Trading Crypto": "/images/Trading Crypto.jpg",
    "Forex Pro": "/images/Forex Pro.jpg",
    "Smart Money Concepts (SMC)": "/images/Smart Money Concepts (SMC).jpg",
    "Alti Trading": "/images/Alti Trading.jpg",
    "Investisseur Boursier": "/images/Investisseur Boursier.jpg",
    "Scalper Pro": "/images/Scalper Pro.jpg",
    "Crypto Futures Mastery": "/images/Crypto Futures Mastery.jpg",
    "Young Trader Forex Program": "/images/Young Trader Forex Program.jpg"
};
const metadataOverrides = {
    "Programmation Python": {
        level: "Débutant à Intermédiaire",
        duration: "5 semaines • ateliers pratiques",
        price: 300000,
        rating: 4.86,
        students: 320,
        reviews: 95
    },
    "React.js Frontend Pro": {
        level: "Intermédiaire",
        duration: "6 semaines • projets web",
        price: 360000,
        rating: 4.9,
        students: 280,
        reviews: 98
    },
    "PHP & SQL Fullstack": {
        level: "Intermédiaire",
        duration: "6 semaines • coaching hybride",
        price: 340000,
        rating: 4.82,
        students: 210,
        reviews: 72
    },
    "React Native Mobile Apps": {
        level: "Intermédiaire",
        duration: "6 semaines • web + mobile",
        price: 370000,
        rating: 4.88,
        students: 190,
        reviews: 68
    },
    "Formation Complète Développement Web": {
        level: "Débutant à Intermédiaire",
        duration: "7 semaines • bootcamp mixte",
        price: 360000,
        rating: 4.84,
        students: 260,
        reviews: 85
    },
    "TypeScript Mastery": {
        level: "Intermédiaire",
        duration: "5 semaines • focus typage",
        price: 320000,
        rating: 4.83,
        students: 170,
        reviews: 58
    },
    "JavaScript, Node.js & Algorithmique": {
        level: "Débutant à Intermédiaire",
        duration: "5 semaines • sprints intensifs",
        price: 310000,
        rating: 4.78,
        students: 240,
        reviews: 77
    },
    "Node.js Express JWT & Mongoose": {
        level: "Intermédiaire",
        duration: "5 semaines • API sécurisées",
        price: 330000,
        rating: 4.85,
        students: 200,
        reviews: 66
    },
    "Unity 3D Game Builder": {
        level: "Intermédiaire",
        duration: "6 semaines • studio guidé",
        price: 340000,
        rating: 4.8,
        students: 150,
        reviews: 52
    },
    "Java Applications": {
        level: "Intermédiaire",
        duration: "6 semaines • services Java",
        price: 330000,
        rating: 4.79,
        students: 180,
        reviews: 60
    },
    "Langage C Systèmes": {
        level: "Avancé",
        duration: "6 semaines • bas niveau",
        price: 320000,
        rating: 4.76,
        students: 140,
        reviews: 49
    },
    "Django REST & Admin": {
        level: "Intermédiaire",
        duration: "5 semaines • projets clients",
        price: 330000,
        rating: 4.87,
        students: 205,
        reviews: 71
    },
    "C++ Haute Performance": {
        level: "Avancé",
        duration: "6 semaines • optimisation",
        price: 340000,
        rating: 4.75,
        students: 130,
        reviews: 45
    },
    "Essentiels de VS Code": {
        level: "Tous niveaux",
        duration: "3 semaines • workflows",
        price: 200000,
        rating: 4.74,
        students: 360,
        reviews: 80
    },
    "PowerShell Automation": {
        level: "Intermédiaire",
        duration: "4 semaines • scripts IT",
        price: 260000,
        rating: 4.77,
        students: 150,
        reviews: 48
    },
    "PostgreSQL Architecture": {
        level: "Intermédiaire",
        duration: "5 semaines • labs data",
        price: 340000,
        rating: 4.85,
        students: 180,
        reviews: 62
    },
    "Power BI Dashboards": {
        level: "Débutant à Intermédiaire",
        duration: "4 semaines • ateliers BI",
        price: 300000,
        rating: 4.82,
        students: 210,
        reviews: 70
    },
    "Data Science & Machine Learning": {
        level: "Intermédiaire à Avancé",
        duration: "6 semaines • projets ML",
        price: 380000,
        rating: 4.88,
        students: 190,
        reviews: 73
    },
    "Bases de Données Modernes": {
        level: "Intermédiaire",
        duration: "4 semaines • SQL + NoSQL",
        price: 320000,
        rating: 4.79,
        students: 175,
        reviews: 58
    },
    "Amazon Web Services (AWS)": {
        level: "Intermédiaire",
        duration: "6 semaines • labs cloud",
        price: 380000,
        rating: 4.87,
        students: 165,
        reviews: 57
    },
    "Docker & Kubernetes": {
        level: "Intermédiaire",
        duration: "6 semaines • sprints infra",
        price: 370000,
        rating: 4.9,
        students: 180,
        reviews: 64
    },
    "IA Fullstack avec Ollama": {
        level: "Intermédiaire",
        duration: "5 semaines • agents locaux",
        price: 380000,
        rating: 4.92,
        students: 210,
        reviews: 78
    },
    "ChatGPT & Midjourney Studio": {
        level: "Débutant à Intermédiaire",
        duration: "4 semaines • ateliers créa",
        price: 320000,
        rating: 4.85,
        students: 260,
        reviews: 90
    },
    "Formation DeepSeek": {
        level: "Intermédiaire",
        duration: "4 semaines • modèles open",
        price: 320000,
        rating: 4.8,
        students: 150,
        reviews: 50
    },
    "Intégrer l'IA dans votre Business": {
        level: "Managers & dirigeants",
        duration: "4 semaines • coaching exec",
        price: 400000,
        rating: 4.88,
        students: 120,
        reviews: 42
    },
    "NoCode & Perplexity Automations": {
        level: "Débutant",
        duration: "4 semaines • ateliers nocode",
        price: 300000,
        rating: 4.81,
        students: 230,
        reviews: 69
    },
    "Créer du Contenu à Succès avec l'IA": {
        level: "Débutant",
        duration: "3 semaines • studio contenu",
        price: 260000,
        rating: 4.76,
        students: 280,
        reviews: 75
    },
    "Qualité Logicielle & IA avec ChatGPT": {
        level: "Intermédiaire",
        duration: "5 semaines • QA assistée",
        price: 340000,
        rating: 4.84,
        students: 160,
        reviews: 55
    },
    "LLMs & Agents Experts": {
        level: "Avancé",
        duration: "5 semaines • RAG & agents",
        price: 380000,
        rating: 4.9,
        students: 140,
        reviews: 52
    },
    "CCNA Booster": {
        level: "Intermédiaire",
        duration: "7 semaines • labs Packet Tracer",
        price: 360000,
        rating: 4.9,
        students: 200,
        reviews: 70
    },
    "Cisco Specialist": {
        level: "Avancé",
        duration: "6 semaines • configs avancées",
        price: 370000,
        rating: 4.85,
        students: 150,
        reviews: 53
    },
    "Fondements des Réseaux": {
        level: "Débutant",
        duration: "4 semaines • bases solides",
        price: 280000,
        rating: 4.8,
        students: 260,
        reviews: 88
    },
    "Protocoles OSI & TCP/IP": {
        level: "Intermédiaire",
        duration: "4 semaines • focus protocoles",
        price: 300000,
        rating: 4.78,
        students: 190,
        reviews: 60
    },
    "Administrateur Réseaux": {
        level: "Intermédiaire",
        duration: "6 semaines • projets terrains",
        price: 360000,
        rating: 4.84,
        students: 170,
        reviews: 58
    },
    "Linux Shell Bash": {
        level: "Débutant",
        duration: "4 semaines • scripts quotidiens",
        price: 260000,
        rating: 4.82,
        students: 220,
        reviews: 67
    },
    "Linux Sécurité": {
        level: "Intermédiaire",
        duration: "5 semaines • hardening",
        price: 320000,
        rating: 4.85,
        students: 180,
        reviews: 63
    },
    "Commandes du Terminal": {
        level: "Débutant",
        duration: "3 semaines • immersion CLI",
        price: 220000,
        rating: 4.74,
        students: 300,
        reviews: 70
    },
    "Linux de A à Z par la Pratique": {
        level: "Débutant à Intermédiaire",
        duration: "6 semaines • parcours complet",
        price: 330000,
        rating: 4.83,
        students: 210,
        reviews: 66
    },
    "Sécurité Réseaux": {
        level: "Intermédiaire",
        duration: "5 semaines • ateliers sécurité",
        price: 340000,
        rating: 4.86,
        students: 190,
        reviews: 64
    },
    "CEH v13": {
        level: "Avancé",
        duration: "6 semaines • préparation certif",
        price: 380000,
        rating: 4.88,
        students: 150,
        reviews: 55
    },
    "Active Directory Red Team Lab": {
        level: "Avancé",
        duration: "6 semaines • lab AD",
        price: 380000,
        rating: 4.9,
        students: 130,
        reviews: 48
    },
    "Cybersécurité avec l'IA": {
        level: "Intermédiaire",
        duration: "5 semaines • IA + défense",
        price: 340000,
        rating: 4.82,
        students: 160,
        reviews: 54
    },
    "Ethical Hacking from Scratch": {
        level: "Débutant à Intermédiaire",
        duration: "5 semaines • labs guidés",
        price: 320000,
        rating: 4.8,
        students: 210,
        reviews: 69
    },
    "OpenSSL Cryptage des Données": {
        level: "Intermédiaire",
        duration: "4 semaines • crypto appliquée",
        price: 300000,
        rating: 4.76,
        students: 140,
        reviews: 47
    },
    "Essentiel de Kali Linux": {
        level: "Débutant",
        duration: "4 semaines • outils offensifs",
        price: 280000,
        rating: 4.78,
        students: 220,
        reviews: 71
    },
    "Hacking WordPress": {
        level: "Intermédiaire",
        duration: "4 semaines • pentest web",
        price: 300000,
        rating: 4.75,
        students: 160,
        reviews: 52
    },
    "Wireshark Expert": {
        level: "Intermédiaire",
        duration: "4 semaines • analyse réseau",
        price: 300000,
        rating: 4.77,
        students: 150,
        reviews: 49
    },
    "Community Management Pro": {
        level: "Débutant",
        duration: "4 semaines • accompagnement",
        price: 260000,
        rating: 4.8,
        students: 300,
        reviews: 88
    },
    "Digital Marketing 360": {
        level: "Débutant à Intermédiaire",
        duration: "5 semaines • plan 360°",
        price: 300000,
        rating: 4.82,
        students: 260,
        reviews: 80
    },
    "Dropshipping Accéléré": {
        level: "Débutant",
        duration: "4 semaines • lancement",
        price: 280000,
        rating: 4.76,
        students: 230,
        reviews: 69
    },
    "E-commerce Rentable": {
        level: "Intermédiaire",
        duration: "5 semaines • coaching boutique",
        price: 320000,
        rating: 4.8,
        students: 210,
        reviews: 66
    },
    "Créer & Administrer une Chaîne YouTube": {
        level: "Débutant",
        duration: "4 semaines • studio vidéo",
        price: 280000,
        rating: 4.79,
        students: 240,
        reviews: 72
    },
    "Shorts YouTube Rentables": {
        level: "Débutant",
        duration: "3 semaines • contenu court",
        price: 240000,
        rating: 4.77,
        students: 260,
        reviews: 75
    },
    "The Business Legion": {
        level: "Intermédiaire",
        duration: "5 semaines • offre premium",
        price: 320000,
        rating: 4.84,
        students: 180,
        reviews: 60
    },
    "Comptabilité Générale": {
        level: "Débutant",
        duration: "4 semaines • exercices réels",
        price: 260000,
        rating: 4.78,
        students: 220,
        reviews: 68
    },
    "Sage 100 Immobilisations": {
        level: "Intermédiaire",
        duration: "4 semaines • cas pratiques",
        price: 300000,
        rating: 4.8,
        students: 160,
        reviews: 55
    },
    "Anglais Professionnel": {
        level: "Tous niveaux",
        duration: "4 semaines • coaching live",
        price: 240000,
        rating: 4.76,
        students: 280,
        reviews: 73
    },
    "Figma Design Systems": {
        level: "Débutant à Intermédiaire",
        duration: "4 semaines • studio UI",
        price: 280000,
        rating: 4.81,
        students: 210,
        reviews: 67
    },
    "Canva Créatif": {
        level: "Débutant",
        duration: "3 semaines • packs social media",
        price: 220000,
        rating: 4.75,
        students: 310,
        reviews: 76
    },
    "Windows 11 Pro": {
        level: "Débutant",
        duration: "3 semaines • productivité",
        price: 220000,
        rating: 4.73,
        students: 260,
        reviews: 62
    },
    "Windows Server Administration": {
        level: "Intermédiaire",
        duration: "5 semaines • labs AD",
        price: 320000,
        rating: 4.79,
        students: 170,
        reviews: 58
    },
    "Suite Office Productivité": {
        level: "Débutant",
        duration: "4 semaines • cas business",
        price: 240000,
        rating: 4.74,
        students: 300,
        reviews: 70
    },
    "Design UX/UI": {
        level: "Débutant à Intermédiaire",
        duration: "4 semaines • ateliers design",
        price: 300000,
        rating: 4.8,
        students: 200,
        reviews: 65
    },
    "Trading Crypto": {
        level: "Intermédiaire",
        duration: "6 semaines • live trading",
        price: 360000,
        rating: 4.78,
        students: 160,
        reviews: 56
    },
    "Forex Pro": {
        level: "Intermédiaire",
        duration: "6 semaines • sessions quotidiennes",
        price: 360000,
        rating: 4.82,
        students: 170,
        reviews: 58
    },
    "Smart Money Concepts (SMC)": {
        level: "Avancé",
        duration: "6 semaines • SMC & orderflow",
        price: 380000,
        rating: 4.85,
        students: 150,
        reviews: 52
    },
    "Alti Trading": {
        level: "Intermédiaire",
        duration: "5 semaines • stratégies swing",
        price: 340000,
        rating: 4.76,
        students: 140,
        reviews: 47
    },
    "Investisseur Boursier": {
        level: "Débutant à Intermédiaire",
        duration: "5 semaines • portefeuille",
        price: 320000,
        rating: 4.74,
        students: 180,
        reviews: 55
    },
    "Scalper Pro": {
        level: "Avancé",
        duration: "5 semaines • exécution rapide",
        price: 360000,
        rating: 4.79,
        students: 130,
        reviews: 44
    },
    "Crypto Futures Mastery": {
        level: "Intermédiaire",
        duration: "5 semaines • derivatives",
        price: 350000,
        rating: 4.77,
        students: 150,
        reviews: 48
    },
    "Young Trader Forex Program": {
        level: "Débutant",
        duration: "5 semaines • coaching jeunes",
        price: 300000,
        rating: 4.73,
        students: 190,
        reviews: 60
    }
};
const trainingPrograms = programSeeds.reduce((acc, seed)=>{
    const template = programTemplates[seed.template];
    const id = seed.id ?? slugify(seed.title);
    const overrides = metadataOverrides[seed.title] ?? {};
    acc[id] = {
        id,
        title: seed.title,
        category: seed.category,
        level: overrides.level ?? seed.level ?? template.level,
        duration: overrides.duration ?? seed.duration ?? template.duration,
        price: overrides.price ?? seed.price ?? template.price,
        rating: overrides.rating ?? seed.rating ?? template.rating,
        students: overrides.students ?? seed.students ?? template.students,
        reviews: overrides.reviews ?? seed.reviews ?? template.reviews,
        image: seed.image ?? imageMap[seed.title] ?? template.image,
        description: template.description(seed),
        instructor: template.instructor,
        instructorBio: template.instructorBio,
        whatYouLearn: template.whatYouLearn(seed),
        requirements: template.requirements(seed),
        curriculum: template.curriculum(seed),
        testimonials: template.testimonials(seed)
    };
    return acc;
}, {});
}),
"[project]/components/training-catalog.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "TrainingCatalog",
    ()=>TrainingCatalog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TrainingCatalog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TrainingCatalog() from the server but TrainingCatalog is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/training-catalog.tsx <module evaluation>", "TrainingCatalog");
}),
"[project]/components/training-catalog.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "TrainingCatalog",
    ()=>TrainingCatalog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TrainingCatalog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TrainingCatalog() from the server but TrainingCatalog is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/training-catalog.tsx", "TrainingCatalog");
}),
"[project]/components/training-catalog.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$training$2d$catalog$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/training-catalog.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$training$2d$catalog$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/training-catalog.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$training$2d$catalog$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/formations/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormationsPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$trainings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/trainings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$training$2d$catalog$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/training-catalog.tsx [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: "Programmes & Formations - MasterIT",
    description: "Les bootcamps et coachings animés par Hady Dieye pour créer un vrai revenu tech"
};
const totalPrograms = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$trainings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trainingPrograms"]).length;
function FormationsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen pt-24 pb-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-6xl font-bold text-balance",
                            children: [
                                "Mes",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent",
                                    children: "programmes accompagnés"
                                }, void 0, false, {
                                    fileName: "[project]/app/formations/page.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/formations/page.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-muted-foreground max-w-3xl mx-auto text-pretty",
                            children: [
                                totalPrograms,
                                " formations couvrent désormais chaque stack : langages, IA, réseaux, Linux, DevOps, cyber, business, trading et compétences transverses. Tout est découpé par technologie, prêt à être choisi."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/formations/page.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/formations/page.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: "Chargement..."
                    }, void 0, false, {
                        fileName: "[project]/app/formations/page.tsx",
                        lineNumber: 29,
                        columnNumber: 29
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$training$2d$catalog$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TrainingCatalog"], {}, void 0, false, {
                        fileName: "[project]/app/formations/page.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/formations/page.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/formations/page.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/formations/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/formations/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/formations/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f2002445._.js.map