export type TrainingTestimonial = {
  name: string
  role: string
  location: string
  rating: number
  quote: string
}

export type TrainingProgram = {
  id: string
  title: string
  category: string
  level: string
  duration: string
  price: number
  rating: number
  students: number
  reviews: number
  image: string
  description: string
  instructor: string
  instructorBio: string
  whatYouLearn: string[]
  requirements: string[]
  curriculum: Array<{
    title: string
    lessons: string[]
  }>
  testimonials: TrainingTestimonial[]
}

export const trainingPrograms: Record<string, TrainingProgram> = {
  "fullstack-freelance": {
    id: "fullstack-freelance",
    title: "Bootcamp Full-Stack & Freelance",
    category: "Développement & Freelance",
    level: "Intermédiaire",
    duration: "8 semaines • live + asynchrone",
    price: 550000,
    rating: 4.9,
    students: 185,
    reviews: 62,
    image: "/react-nextjs-modern-web-development.jpg",
    description:
      "Tu construis une stack React/Next.js + Node.js prête à être vendue à des clients. On travaille sur un portfolio pro, des offres freelance et un projet client guidé.",
    instructor: "Hady Dieye",
    instructorBio: "Formateur indépendant, full-stack & DevOps",
    whatYouLearn: [
      "Architecture Next.js 14, App Router et API Routes",
      "Design systems réutilisables et Tailwind avancé",
      "APIs Node, Prisma et PostgreSQL",
      "CI/CD GitHub Actions + déploiement Vercel",
      "Méthode scriptsensei pour packager une offre freelance",
      "Clôturer un client avec devis + contrat validé",
    ],
    requirements: ["Bases solides en JavaScript", "2 soirs par semaine + 1 bloc week-end"],
    curriculum: [
      {
        title: "Stack technique moderne",
        lessons: ["React 18 + hooks avancés", "Next.js 14", "Gestion d'état avec Zustand", "API Node/Express"],
      },
      {
        title: "Ops & qualité",
        lessons: ["Tests vitest/playwright", "CI/CD GitHub Actions", "Monitoring simple", "Checklists livraison"],
      },
      {
        title: "Parcours freelance",
        lessons: ["Offre irrésistible", "Process discovery call", "Devis & contrat", "Livraison + rétention"],
      },
    ],
    testimonials: [
      {
        name: "Mouctar Diallo",
        role: "Freelance React",
        location: "Conakry",
        rating: 5,
        quote:
          "J'ai signé mon premier client à 900 € après que Hady ait relu mon devis et mon plan de sprint. Les revues de code hebdo sont précieuses.",
      },
      {
        name: "Khadija Sow",
        role: "Product builder",
        location: "Dakar",
        rating: 5,
        quote:
          "Le projet final (dashboard analytics) reprend exactement un besoin client que j'ai livré ensuite. Process clair, ressources actionnables.",
      },
      {
        name: "Jean-Marc Koulibaly",
        role: "Dev full-stack remote",
        location: "Abidjan",
        rating: 4.8,
        quote:
          "Avant j'étais bloqué sur l'organisation. Les templates Notion + pipeline CI/CD fournis m'ont permis de gagner du temps et de facturer plus vite.",
      },
    ],
  },
  "cyber-pentest": {
    id: "cyber-pentest",
    title: "Pentest & Sécurité Offensive",
    category: "Cybersécurité Offensive",
    level: "Intermédiaire",
    duration: "10 semaines • labs guidés",
    price: 600000,
    rating: 4.95,
    students: 120,
    reviews: 48,
    image: "/ethical-hacking-cybersecurity.jpg",
    description:
      "Programme axé sur Kali Linux, méthodologie PTES et rédaction de rapports pour PME africaines. On simule 3 audits complets (réseau, web, WiFi).",
    instructor: "Hady Dieye",
    instructorBio: "Pentester et consultant sécurité",
    whatYouLearn: [
      "Mettre en place un lab Kali + Active Directory",
      "Méthodologie PTES adaptée aux PME",
      "Exploitation OWASP Top 10 et rapports actionnables",
      "Audits WiFi & ingénierie sociale contrôlée",
      "Scripts d'automatisation (Python/Bash)",
      "Préparer dossier de consulting / offre annuelle",
    ],
    requirements: ["Bases Linux + réseaux", "Machine dédiée ou lab virtuel"],
    curriculum: [
      {
        title: "Recon & exploitation",
        lessons: ["OSINT ciblé", "Nmap + Rustscan", "Exploits Metasploit/Ghidra", "Privilege escalation"],
      },
      {
        title: "Pentest Web & API",
        lessons: ["Burp workflow", "Automatisation OWASP top 10", "Auth bypass", "API security checklists"],
      },
      {
        title: "Reporting & offre",
        lessons: ["Modèles scriptsensei", "Roadmap correctives", "Pitch offre récurrente", "Gestion client"],
      },
    ],
    testimonials: [
      {
        name: "Néné Bah",
        role: "Analyste cyber",
        location: "Conakry",
        rating: 5,
        quote:
          "Les modèles de rapports et le coaching WhatsApp m'ont permis de livrer mon premier audit payé 1,2 M GNF. Hady relit chaque livrable.",
      },
      {
        name: "Abdoulaye Camara",
        role: "Consultant sécurité",
        location: "Bamako",
        rating: 4.9,
        quote:
          "Les labs WiFi et la partie business sont ce qui manquait dans les autres formations. Je propose maintenant un abonnement pentest trimestriel.",
      },
      {
        name: "Mariam Barry",
        role: "Pentesteuse junior",
        location: "Dakar",
        rating: 5,
        quote: "On pratique sur de vrais environnements. Je suis passée du statut d'étudiante à celle de freelance pentest.",
      },
    ],
  },
  "ia-automation": {
    id: "ia-automation",
    title: "IA Générative & Automatisation",
    category: "IA & No-Code",
    level: "Débutant à Intermédiaire",
    duration: "5 semaines • ateliers live",
    price: 320000,
    rating: 4.85,
    students: 210,
    reviews: 54,
    image: "/artificial-intelligence-chatgpt.jpg",
    description:
      "Tu apprends à utiliser ChatGPT, Make, OpenAI API et Power BI pour créer des assistants et dashboards vendus à des PME locales.",
    instructor: "Hady Dieye",
    instructorBio: "Consultant IA et automateur",
    whatYouLearn: [
      "Prompt engineering appliqué (marketing, support, docs)",
      "Automatisations Make + intégrations WhatsApp/Email",
      "Scripts Python simples pour nettoyer des données",
      "Dashboards Power BI connectés à l'IA",
      "Packaging d'une offre IA à 250€+",
      "Support et maintenance post livraison",
    ],
    requirements: ["Aucun prérequis technique, juste un laptop et une bonne connexion"],
    curriculum: [
      {
        title: "Fondamentaux IA",
        lessons: ["Comprendre GPT-4", "Prompts structurés", "Templates scriptsensei"],
      },
      {
        title: "Automatisations concrètes",
        lessons: ["Make scenarii", "Webhooks & API OpenAI", "Notifications WhatsApp", "Cas clients réels"],
      },
      {
        title: "Offre & vente",
        lessons: ["Identifier un use case rentable", "Présenter un prototype", "Facturer et maintenir"],
      },
    ],
    testimonials: [
      {
        name: "Boubacar Keita",
        role: "Consultant IA",
        location: "Bamako",
        rating: 4.9,
        quote:
          "J'ai automatisé un reporting Power BI pour un cabinet comptable en reprenant le playbook fourni. Projet facturé 400€. ",
      },
      {
        name: "Aïssata Traoré",
        role: "Assistante marketing",
        location: "Abidjan",
        rating: 4.8,
        quote:
          "Les prompts prêts à l'emploi et la validation sur WhatsApp m'ont permis d'automatiser la création d'emails pour mon agence.",
      },
      {
        name: "Lamine Bah",
        role: "Entrepreneur",
        location: "Kindia",
        rating: 4.8,
        quote:
          "J'ai pu proposer un mini-assistant WhatsApp à un resto local. Hady m'a aidé à chiffrer et négocier l'offre.",
      },
    ],
  },
  "devops-cloud-lab": {
    id: "devops-cloud-lab",
    title: "DevOps & Cloud Lab",
    category: "DevOps & Cloud",
    level: "Intermédiaire",
    duration: "7 semaines • projets guidés",
    price: 580000,
    rating: 4.88,
    students: 95,
    reviews: 31,
    image: "/devops-cloud-infrastructure.jpg",
    description:
      "On construit une infra containerisée avec Docker, Kubernetes, Terraform et GitHub Actions, exactement comme sur mes missions clients.",
    instructor: "Hady Dieye",
    instructorBio: "DevOps/Cloud pour startups africaines",
    whatYouLearn: [
      "Dockerisation d'app Next.js/Node",
      "Cluster Kubernetes (k3s) et Helm charts",
      "Pipelines CI/CD GitHub Actions",
      "Provisioning Terraform sur AWS ou Scaleway",
      "Observabilité (Grafana + Loki)",
      "Dossier d'exploitation pour client final",
    ],
    requirements: ["Expérience en dev ou admin système", "Accès à une VM cloud ou laptop récent"],
    curriculum: [
      {
        title: "Containerisation",
        lessons: ["Docker multi-stage", "Docker Compose prod", "Security scanning", "Registry privé"],
      },
      {
        title: "Kubernetes & Terraform",
        lessons: ["k3s + Helm", "Ingress/Cert-manager", "Terraform modules", "Secrets management"],
      },
      {
        title: "Ops & livraison",
        lessons: ["CI/CD avec GitHub Actions", "Grafana/Loki", "Runbook client", "Handover meeting"],
      },
    ],
    testimonials: [
      {
        name: "Ismaël Koita",
        role: "DevOps freelance",
        location: "Nouakchott",
        rating: 5,
        quote: "J'ai repris le modèle de runbook pour un client fintech. On a gagné 3 jours sur l'onboarding.",
      },
      {
        name: "Fatoumata Diallo",
        role: "Ingénieure cloud",
        location: "Dakar",
        rating: 4.9,
        quote: "Les labs Terraform + k3s reflètent les contraintes africaines (budget serré, latence). Très concret.",
      },
      {
        name: "Samba Barry",
        role: "Admin système",
        location: "Conakry",
        rating: 4.7,
        quote:
          "J'ai pu automatiser les déploiements d'une application interne dans mon entreprise en réutilisant les pipelines fournis.",
      },
    ],
  },
  "business-creator": {
    id: "business-creator",
    title: "Business & Monétisation Digitale",
    category: "Business & Monétisation",
    level: "Débutant",
    duration: "4 semaines • coaching de groupe",
    price: 280000,
    rating: 4.7,
    students: 160,
    reviews: 44,
    image: "/digital-business-entrepreneur.jpg",
    description:
      "On conçoit une offre digitale rentable (YouTube, formations, templates) et on met en place un plan de vente organique sur 30 jours.",
    instructor: "Hady Dieye",
    instructorBio: "Créateur de contenus tech & formateur",
    whatYouLearn: [
      "Choisir un positionnement cohérent",
      "Créer une offre irrésistible (formation, service, template)",
      "Plan éditorial TikTok/YouTube adapté à l'Afrique",
      "Automatiser l'acquisition avec newsletters & WhatsApp",
      "Tunnel de vente simple sans outils coûteux",
      "Suivre ses métriques et optimiser chaque semaine",
    ],
    requirements: ["Être prêt à publier et vendre", "1h par jour pour créer du contenu"],
    curriculum: [
      {
        title: "Fondations business",
        lessons: ["Story personnelle", "Avatar client", "Offre scriptsensei", "Pricing réaliste"],
      },
      {
        title: "Stratégie de contenu",
        lessons: ["YouTube courte durée", "Lives pédagogiques", "Automations WhatsApp", "Email minimaliste"],
      },
      {
        title: "Vente & suivi",
        lessons: ["Scripts DM/WhatsApp", "Lancement express", "Onboarding clients", "Optimisation hebdo"],
      },
    ],
    testimonials: [
      {
        name: "Hawa Traoré",
        role: "Coach mindset",
        location: "Abidjan",
        rating: 4.8,
        quote: "J'ai vendu 12 accompagnements en 3 semaines grâce au script WhatsApp fourni dans le module 3.",
      },
      {
        name: "Alpha Sow",
        role: "Créateur YouTube",
        location: "Conakry",
        rating: 4.6,
        quote: "Le plan éditorial et la méthode d'appel à l'action sont ultra concrets. Mon CA a doublé.",
      },
      {
        name: "Mariam Koné",
        role: "Designer",
        location: "Dakar",
        rating: 4.7,
        quote: "Je vends maintenant des templates Figma après avoir suivi la partie offre + tunnel.",
      },
    ],
  },
}

