// Projects/Achievements data - Réalisations réelles de l'association ASSION

export interface Project {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  beneficiaries: string;
  impact: string;
  image: string;
  gallery: string[];
  videos: string[];
  category: string;
}

export const projectsData: Project[] = [
  {
    id: "don-rentree-scolaire-2026",
    title: "Don pour la rentrée scolaire à l'orphelinat Monseigneur Jean-Claude Bouchard",
    date: "Septembre 2026",
    location: "Orphelinat Monseigneur Jean-Claude Bouchard, Garoua, Cameroun",
    description:
      "ASSION a effectué un don pour la rentrée scolaire à l'orphelinat Monseigneur Jean-Claude Bouchard à Garoua. Cette action vise à soutenir l'éducation des orphelins en leur fournissant le matériel scolaire nécessaire pour bien commencer leur année scolaire.",
    beneficiaries: "Enfants orphelins de l'orphelinat Monseigneur Jean-Claude Bouchard",
    impact: "Soutien à l'éducation et équipement scolaire pour les orphelins",
    image: "/images/projects/Don-rentree-scolaire-2026/1.jpg",
    gallery: [
      "/images/projects/Don-rentree-scolaire-2026/1.jpg",
      "/images/projects/Don-rentree-scolaire-2026/2.jpg",
      "/images/projects/Don-rentree-scolaire-2026/3.jpg",
      "/images/projects/Don-rentree-scolaire-2026/4.jpg",
      "/images/projects/Don-rentree-scolaire-2026/5.jpg",
      "/images/projects/Don-rentree-scolaire-2026/6.jpg",
      "/images/projects/Don-rentree-scolaire-2026/7.jpg",
    ],
    videos: [],
    category: "Orphelins",
  },
  {
    id: "prison-centrale-garoua-2025",
    title: "Aux côtés des détenus de la Prison Centrale de Garoua",
    date: "Décembre 2025",
    location: "Prison Centrale de Garoua, Cameroun",
    description:
      "ASSION s'est rendue à la Prison Centrale de Garoua pour offrir un moment de partage, d'écoute et d'espoir aux détenus. Cette action de solidarité vise à rappeler que la dignité humaine ne s'arrête pas aux portes d'une prison.",
    beneficiaries: "Détenus de la Prison Centrale de Garoua",
    impact: "Un moment de réconfort, d'écoute et d'espoir redonné aux détenus",
    image: "/images/projects/prison-centrale-garoua-2025/1.jpg",
    gallery: [
      "/images/projects/prison-centrale-garoua-2025/1.jpg",
      "/images/projects/prison-centrale-garoua-2025/2.jpg",
      "/images/projects/prison-centrale-garoua-2025/3.jpg",
      "/images/projects/prison-centrale-garoua-2025/4.jpg",
    ],
    videos: ["/images/projects/prison-centrale-garoua-2025/video-1.mp4"],
    category: "Solidarité",
  },
  {
    id: "journee-internationale-veuve-2025",
    title: "15e édition de la Journée Internationale de la Veuve",
    date: "Juin 2025",
    location: "Délégation de la Promotion de la Femme et de la Famille, Garoua",
    description:
      "À l'occasion de la 15e édition de la Journée Internationale de la Veuve, ASSION a organisé, en collaboration avec la délégation de la promotion de la femme et de la famille de la ville de Garoua, une causerie éducative au profit des veuves. Une enveloppe de 50 000 FCFA a été remise à cette occasion.",
    beneficiaries: "Veuves de la ville de Garoua",
    impact: "Sensibilisation, écoute educatives et soutien financier de 50 000 FCFA remis aux veuves pour leurs transport",
    image: "/images/projects/journee-internationale-veuve-2025/1.jpg",
    gallery: [
      "/images/projects/journee-internationale-veuve-2025/1.jpg",
      "/images/projects/journee-internationale-veuve-2025/2.jpg",
      "/images/projects/journee-internationale-veuve-2025/3.jpg",
      "/images/projects/journee-internationale-veuve-2025/4.jpg",
      "/images/projects/journee-internationale-veuve-2025/5.jpg",
      "/images/projects/journee-internationale-veuve-2025/6.jpg",
      "/images/projects/journee-internationale-veuve-2025/7.jpg",
    ],
    videos: [],
    category: "Veuves",
  },
  {
    id: "orphelinat-bidzard-2025",
    title: "Don à l'orphelinat Bidzard",
    date: "Mai 2025",
    location: "Orphelinat Bidzard, Nord Cameroun",
    description:
      "ASSION a effectué un don à l'orphelinat Bidzard, au nord Cameroun, qui accueille plus de 150 enfants orphelins. Cette action a permis d'apporter du réconfort et des ressources essentielles à ces enfants.",
    beneficiaries: "Plus de 150 enfants orphelins",
    impact: "Amélioration des conditions de vie de plus de 150 enfants orphelins",
    image: "/images/projects/orphelinat-bidzard-2025/1.jpg",
    gallery: [
      "/images/projects/orphelinat-bidzard-2025/1.jpg",
      "/images/projects/orphelinat-bidzard-2025/2.jpg",
      "/images/projects/orphelinat-bidzard-2025/3.jpg",
      "/images/projects/orphelinat-bidzard-2025/4.jpg",
      "/images/projects/orphelinat-bidzard-2025/5.jpg",
      "/images/projects/orphelinat-bidzard-2025/6.jpg",
      "/images/projects/orphelinat-bidzard-2025/7.jpeg",
      "/images/projects/orphelinat-bidzard-2025/8.jpeg",
    ],
    videos: [
      "/images/projects/orphelinat-bidzard-2025/video-1.mp4",
      "/images/projects/orphelinat-bidzard-2025/video-2.mp4",
    ],
    category: "Orphelins",
  },
  {
    id: "soutien-rahma-douala-2025",
    title: "Soutien financier au membre RAHIMA TAHDJO",
    date: "Février 2025",
    location: "Douala, Cameroun",
    description:
      "ASSION a apporté un soutien financier à RAHIMA TAHDJO, membre de l'association à Douala, victime d'un accident de circulation ayant entraîné l'amputation de son pied. Un geste de solidarité pour l'accompagner dans cette épreuve.",
    beneficiaries: "RAHIMA TAHDJO et sa famille",
    impact: "Soutien financier et moral apporté à une victime d'accident de la route",
    image: "/images/projects/soutien-rahma-douala-2025/1.jpg",
    gallery: [
      "/images/projects/soutien-rahma-douala-2025/1.jpg",
      "/images/projects/soutien-rahma-douala-2025/2.jpg",
    ],
    videos: [],
    category: "Solidarité",
  },
  {
    id: "don-veuves-4-villages-2024",
    title: "Don aux veuves réunies de 4 villages",
    date: "Décembre 2024",
    location: "Djalingo, Ngalbidjé, Naakon et environs",
    description:
      "ASSION a réuni les veuves de 4 villages (Djalingo, Ngalbidjé, Naakon et un autre village) pour un don en hommage à l'inspiratrice de la vision ASSION, la regrettée Madame Nankam Lorette épouse Dadjo, dont la mémoire continue de guider les actions de l'association.",
    beneficiaries: "Veuves de 4 villages de la région",
    impact: "Soutien matériel et hommage rendu à la mémoire de l'inspiratrice de l'association",
    image: "/images/projects/don-veuves-4-villages-2024/1.jpg",
    gallery: [
      "/images/projects/don-veuves-4-villages-2024/1.jpg",
      "/images/projects/don-veuves-4-villages-2024/2.jpg",
      "/images/projects/don-veuves-4-villages-2024/3.jpg",
      "/images/projects/don-veuves-4-villages-2024/4.jpg",
      "/images/projects/don-veuves-4-villages-2024/5.jpg",
      "/images/projects/don-veuves-4-villages-2024/6.jpg",
    ],
    videos: [],
    category: "Veuves",
  },
  {
    id: "centre-accueil-enfants-detresse-garoua-2024",
    title: "Don au centre d'accueil des enfants en détresse",
    date: "Juin 2024",
    location: "Garoua, Nord Cameroun",
    description:
      "ASSION a effectué un don au centre d'accueil des enfants en détresse de Garoua, qui prend en charge des enfants orphelins âgés de 0 à 3 mois. Une action essentielle pour soutenir les tout-petits les plus vulnérables.",
    beneficiaries: "Nourrissons de 0 à 3 mois pris en charge par le centre",
    impact: "Amélioration des conditions de prise en charge des nourrissons orphelins",
    image: "/images/projects/centre-accueil-enfants-detresse-garoua-2024/1.jpg",
    gallery: [
      "/images/projects/centre-accueil-enfants-detresse-garoua-2024/1.jpg",
      "/images/projects/centre-accueil-enfants-detresse-garoua-2024/2.jpg",
      "/images/projects/centre-accueil-enfants-detresse-garoua-2024/3.jpg",
      "/images/projects/centre-accueil-enfants-detresse-garoua-2024/4.jpg",
      "/images/projects/centre-accueil-enfants-detresse-garoua-2024/5.jpg",
      "/images/projects/centre-accueil-enfants-detresse-garoua-2024/6.jpg",
      "/images/projects/centre-accueil-enfants-detresse-garoua-2024/7.jpg",
      "/images/projects/centre-accueil-enfants-detresse-garoua-2024/8.jpg",
    ],
    videos: ["/images/projects/centre-accueil-enfants-detresse-garoua-2024/video-1.mp4"],
    category: "Orphelins",
  },
  {
    id: "maison-charite-djalingo-2024",
    title: "Don à la maison de charité de Djalingo",
    date: "Août 2024",
    location: "Djalingo, Nord Cameroun",
    description:
      "ASSION a fait un don à la maison de charité de Djalingo, au nord Cameroun, qui accueille une trentaine d'enfants orphelins. Ce don a permis d'apporter un soutien concret au quotidien des enfants.",
    beneficiaries: "Une trentaine d'enfants orphelins",
    impact: "Amélioration du quotidien d'une trentaine d'enfants orphelins",
    image: "/images/projects/maison-charite-djalingo-2024/1.jpg",
    gallery: [
      "/images/projects/maison-charite-djalingo-2024/1.jpg",
      "/images/projects/maison-charite-djalingo-2024/2.jpg",
      "/images/projects/maison-charite-djalingo-2024/3.jpg",
      "/images/projects/maison-charite-djalingo-2024/4.jpg",
      "/images/projects/maison-charite-djalingo-2024/5.jpg",
    ],
    videos: ["/images/projects/maison-charite-djalingo-2024/video-1.mp4"],
    category: "Orphelins",
  },
  {
    id: "orphelinat-el-jireh-douala-2025",
    title: "Don à l'orphelinat El Jireh",
    date: "Mars 2025",
    location: "Douala, Cameroun",
    description:
      "ASSION a effectué un don à l'orphelinat El Jireh à Douala, qui accueille une trentaine d'enfants. Cette visite a été l'occasion de partager un moment convivial avec les enfants et l'équipe encadrante.",
    beneficiaries: "Une trentaine d'enfants de l'orphelinat El Jireh",
    impact: "Soutien matériel et moral apporté à l'orphelinat El Jireh",
    image: "/images/projects/orphelinat-el-jireh-douala-2025/1.jpg",
    gallery: [
      "/images/projects/orphelinat-el-jireh-douala-2025/1.jpg",
      "/images/projects/orphelinat-el-jireh-douala-2025/2.jpg",
      "/images/projects/orphelinat-el-jireh-douala-2025/3.jpg",
      "/images/projects/orphelinat-el-jireh-douala-2025/4.jpg",
    ],
    videos: [
      "/images/projects/orphelinat-el-jireh-douala-2025/video-1.mp4",
      "/images/projects/orphelinat-el-jireh-douala-2025/video-2.mp4",
    ],
    category: "Orphelins",
  },
  {
    id: "noel-orphelinat-saare-jabbaama-2023",
    title: "Noël avec les orphelins de SAARE JABBAAMA",
    date: "Décembre 2023",
    location: "Orphelinat SAARE JABBAAMA, Garoua, Cameroun",
    description:
      "Pour les fêtes de fin d'année, ASSION a célébré Noël aux côtés des orphelins de SAARE JABBAAMA, un orphelinat qui accueille une dizaine d'enfants dans la ville de Garoua. Un moment de joie et de partage pour illuminer les fêtes de ces enfants.",
    beneficiaries: "Une dizaine d'enfants de l'orphelinat SAARE JABBAAMA",
    impact: "Un Noël de joie et de partage offert aux enfants orphelins",
    image: "/images/projects/noel-orphelinat-saare-jabbaama-2023/1.jpg",
    gallery: [
      "/images/projects/noel-orphelinat-saare-jabbaama-2023/1.jpg",
      "/images/projects/noel-orphelinat-saare-jabbaama-2023/2.jpg",
      "/images/projects/noel-orphelinat-saare-jabbaama-2023/3.jpg",
      "/images/projects/noel-orphelinat-saare-jabbaama-2023/4.jpg",
      "/images/projects/noel-orphelinat-saare-jabbaama-2023/5.jpg",
      "/images/projects/noel-orphelinat-saare-jabbaama-2023/6.jpg",
    ],
    videos: [],
    category: "Orphelins",
  },
  {
    id: "orphelinat-saare-jabbaama-2023",
    title: "Don à l'orphelinat de SAARE JABBAAMA",
    date: "Septembre 2023",
    location: "Orphelinat SAARE JABBAAMA, Garoua, Cameroun",
    description:
      "ASSION a effectué un don à l'orphelinat de SAARE JABBAAMA dans la ville de Garoua, qui accueille une dizaine d'enfants. Cette action a permis d'apporter un soutien matériel essentiel à l'établissement.",
    beneficiaries: "Une dizaine d'enfants de l'orphelinat SAARE JABBAAMA",
    impact: "Soutien matériel apporté à l'orphelinat et à ses enfants",
    image: "/images/projects/orphelinat-saare-jabbaama-2023/1.jpg",
    gallery: [
      "/images/projects/orphelinat-saare-jabbaama-2023/1.jpg",
      "/images/projects/orphelinat-saare-jabbaama-2023/2.jpg",
      "/images/projects/orphelinat-saare-jabbaama-2023/3.jpg",
      "/images/projects/orphelinat-saare-jabbaama-2023/4.jpg",
      "/images/projects/orphelinat-saare-jabbaama-2023/5.jpg",
    ],
    videos: [],
    category: "Orphelins",
  },
];
