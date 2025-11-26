# MasterIT - Plateforme de Formations Tech

Site vitrine moderne pour MasterIT, proposant des formations en développement web, IA, cybersécurité, trading et plus encore pour la Guinée et l'Afrique francophone.

## 🚀 Fonctionnalités

- **Design futuriste** avec effets 3D et particules animées
- **9 catégories de formations** couvrant tous les domaines tech
- **Packs et bundles** avec tarification en FCFA/FG/USD
- **Contact direct** via WhatsApp, Telegram et téléphone
- **100% responsive** et optimisé mobile-first
- **SEO optimisé** pour un meilleur référencement

## 🛠️ Technologies

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- shadcn/ui

## 📦 Installation

1. Cloner le projet
2. Installer les dépendances : `npm install`
3. Copier `.env.example` vers `.env.local` et configurer vos numéros
4. Lancer le serveur de développement : `npm run dev`
5. Ouvrir [http://localhost:3000](http://localhost:3000)

## 🌐 Déploiement

Le site est prêt pour un déploiement sur Vercel :

\`\`\`bash
vercel deploy
\`\`\`

## 📱 Configuration des contacts

Modifiez les fichiers suivants pour ajouter vos coordonnées :
- `.env.local` : numéros WhatsApp, Telegram, téléphone
- `components/floating-contact.tsx` : boutons flottants
- `components/cta-section.tsx` : section d'appel à l'action

## 📄 Structure du projet

\`\`\`
├── app/
│   ├── page.tsx              # Page d'accueil
│   ├── formations/           # Catalogue des formations
│   ├── packs/                # Packs et bundles
│   ├── a-propos/             # Page à propos
│   └── contact/              # Page de contact
├── components/
│   ├── hero-3d.tsx           # Hero avec animation 3D
│   ├── navigation.tsx        # Menu de navigation
│   ├── floating-contact.tsx  # Boutons de contact flottants
│   └── ...                   # Autres composants
└── lib/
    └── formations-data.ts    # Données des formations
\`\`\`

## 🎨 Personnalisation

Les couleurs du thème sont définies dans `app/globals.css` :
- Bleu primaire : #3B82F6
- Violet secondaire : #8B5CF6
- Vert accent : #10B981

## 📞 Support

Pour toute question, contactez-nous via :
- WhatsApp : +224XXXXXXXXX
- Telegram : @masterit_gn
- Email : contact@masterit.gn

---

Développé avec ❤️ pour l'Afrique francophone
