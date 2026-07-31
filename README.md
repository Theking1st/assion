# ASSION - Association de Soutien aux Orphelins, Veuves et Nécessiteux

Site web institutionnel moderne pour l'association humanitaire ASSION, basée à Garoua, au Cameroun.

## 📋 Description

Site web officiel d'ASSION avec les données officielles de l'association. Certaines informations sont encore en attente et marquées comme `[À RENSEIGNER]`.

### Stack Technique

- **Next.js 16** avec App Router
- **TypeScript** pour la typage
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes
- **Responsive design** mobile-first

## 🎨 Identité Visuelle

Palette de couleurs officielle d'ASSION :
- **Rose** (#e91e63) : Amour, solidarité, bienveillance (couleur dominante)
- **Blanc** (#ffffff) : Paix, intégrité, transparence (couleur dominante)
- **Bleu indigo** (#3f51b5) : Confiance, engagement, professionnalisme (couleur secondaire)
- **Jaune doré** (#ffc107) : Espoir, générosité, avenir (couleur d'accent)

## 🚀 Démarrage

### Installation des dépendances

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build pour la production

```bash
npm run build
npm start
```

## 📁 Structure du Projet

```
assion/
├── app/                    # Pages Next.js avec App Router
│   ├── a-propos/          # Page À propos
│   ├── nos-actions/       # Page Nos actions
│   ├── nos-realisations/  # Page Nos réalisations
│   ├── actualites/        # Page Actualités
│   ├── galerie/           # Page Galerie
│   ├── soutenir/          # Page Soutenir
│   ├── partenariat/       # Page Partenariat
│   ├── contact/           # Page Contact
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux
├── components/            # Composants réutilisables
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── SectionTitle.tsx
│   ├── ActionCard.tsx
│   ├── ProjectCard.tsx
│   ├── NewsCard.tsx
│   ├── GalleryGrid.tsx
│   ├── TeamCard.tsx
│   ├── DonationCard.tsx
│   ├── ContactForm.tsx
│   ├── StatsSection.tsx
│   └── CTASection.tsx
├── data/                  # Données de l'association
│   ├── site.ts           # Données du site (OFFICIEL)
│   ├── about.ts          # Mission, vision, valeurs (OFFICIEL)
│   ├── actions.ts         # Domaines d'intervention (DÉMO)
│   ├── projects.ts        # Projets réalisés (DÉMO)
│   ├── news.ts            # Actualités (DÉMO)
│   ├── gallery.ts         # Galerie photos (DÉMO)
│   └── team.ts           # Équipe dirigeante (PARTIELLEMENT OFFICIEL)
├── lib/                   # Utilitaires
│   └── utils.ts
└── public/               # Assets statiques
    ├── robots.txt
    └── sitemap.xml
```

## 🔄 Données à Renseigner

Les informations suivantes sont marquées comme `[À RENSEIGNER]` dans les fichiers de données et doivent être fournies par l'association :

### Dans `data/site.ts` :
- Numéro de téléphone
- Adresse email
- Numéro WhatsApp
- Lien Facebook officiel
- Coordonnées bancaires
- Numéros Mobile Money
- Chiffres clés (bénéficiaires, projets, partenaires, bénévoles)

### Dans `data/team.ts` :
- Noms et fonctions des autres responsables
- Photos officielles des membres

### Dans `data/actions.ts`, `data/projects.ts`, `data/news.ts`, `data/gallery.ts` :
- Contenu réel des actions, projets, actualités et galerie

## 📄 Pages du Site

- **Accueil** : Présentation complète avec sections Hero, Stats, Actions, Réalisations, Galerie, Actualités
- **À propos** : Histoire officielle, mission, vision, valeurs, objectifs, reconnaissance légale, équipe
- **Nos actions** : Domaines d'intervention de l'association
- **Nos réalisations** : Projets réalisés avec détails
- **Actualités** : Articles et nouvelles de l'association
- **Galerie** : Photos avec filtrage et lightbox
- **Soutenir** : Options de dons et contributions
- **Partenariat** : Formulaire de demande de partenariat
- **Contact** : Formulaire de contact et informations

## 📝 Informations Officiles Intégrées

- ✅ Nom officiel : Association de Soutien aux Orphelins, Veuves et Nécessiteux
- ✅ Devise : "Ensemble, semons l'espoir, bâtissons l'avenir."
- ✅ Présentation officielle
- ✅ Mission officielle
- ✅ Vision officielle
- ✅ Objectifs officiels
- ✅ Valeurs officielles
- ✅ Historique officiel
- ✅ Date de reconnaissance : 05 septembre 2023
- ✅ Lieu de reconnaissance : Garoua, Région du Nord, Cameroun
- ✅ Statut juridique : Texte officiel
- ✅ Siège social : Camp SIC Bornouans, Garoua, Région du Nord, Cameroun
- ✅ Présidente : Virginie Massoh Dadjo
- ✅ Réseaux sociaux : Instagram et TikTok (liens officiels)
- ✅ Identité visuelle : Palette de couleurs officielle

## 🚢 Déploiement

Le projet est prêt pour le déploiement sur Vercel :

```bash
vercel deploy
```

Ou configurez le déploiement automatique depuis GitHub.

## 📝 Notes Importantes

- Les coordonnées de contact (téléphone, email) sont en attente des informations officielles
- Les images sont des placeholders à remplacer par les vraies photos d'ASSION
- Les données statistiques sont en attente des chiffres réels
- Le lien Facebook est en attente du lien officiel
- Les données d'actions, projets, actualités et galerie sont encore des données de démonstration

## 🤝 Contribution

Ce projet est la propriété d'ASSION - Association de Soutien aux Orphelins, Veuves et Nécessiteux.

## 📄 Licence

Ce projet est la propriété d'ASSION - Association de Soutien aux Orphelins, Veuves et Nécessiteux.
