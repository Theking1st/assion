// Team data — DONNÉES OFFICIELLES D'ASSION
// Images : /public/images/teams/

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  since: string;
  featured?: boolean;
}

export const teamData: TeamMember[] = [
  {
    id: "team-1",
    name: "Virginie Massoh Dadjo",
    role: "Présidente Fondatrice",
    bio: "Présidente d'ASSION, Virginie poursuit la vision initiée avec sa mère, feue Madame Nankam Dadjo Lorette. Elle s'engage depuis ses années d'étudiante pour la cause des orphelins et des veuves.",
    image: "/images/teams/Presidente fondatrice, Massoh Dadjo Virginie.jpg",
    since: "Plus de 10 ans",
    featured: true,
  },
  {
    id: "team-2",
    name: "Nang Mireille",
    role: "Vice-Présidente",
    bio: "Vice-présidente d'ASSION, elle soutient la vision de l'association et assure la coordination des activités auprès de la présidente.",
    image: "/images/teams/Nang Mireille, Vice presidente.jpg",
    since: "Membre engagée",
  },
  {
    id: "team-3",
    name: "Antsele Konome Clebert",
    role: "Secrétaire Général",
    bio: "Secrétaire général, il assure la gestion administrative et la coordination des actions de l'association sur le terrain.",
    image: "/images/teams/Antsele-Konome-Clebert-Secretaire-General.jpg",
    since: "Membre engagé",
  },
  {
    id: "team-4",
    name: "Messah Ngueloh Armelle Sonia",
    role: "Trésorière",
    bio: "Trésorière d'ASSION, elle veille à la bonne gestion des ressources financières et à la transparence dans l'utilisation des fonds collectés.",
    image: "/images/teams/Messah-Ngueloh-Armelle-Sonia-Tresoriere.jpg",
    since: "Membre engagée",
  },
  {
    id: "team-5",
    name: "Adidja Baba",
    role: "Commissaire aux Comptes",
    bio: "Elle garantit la conformité et la rigueur financière de l'association auprès des donateurs et des partenaires institutionnels.",
    image: "/images/teams/Adidja Baba, Comissaire au compte.jpg",
    since: "Membre engagée",
  },
  {
    id: "team-6",
    name: "Pagouo Fadangka Edmond",
    role: "Chargé de Projet",
    bio: "Il planifie et supervise la mise en œuvre des actions humanitaires sur le terrain à Garoua et dans les villages environnants.",
    image: "/images/teams/PAGOUO FADANGKA EDMOND, Charge de Projet.jpg",
    since: "Membre engagé",
  },
  {
    id: "team-7",
    name: "Membre de l'équipe",
    role: "À préciser",
    bio: "Membre actif d'ASSION, engagé au quotidien pour la mission de l'association.",
    image: "/images/teams/team1.jpg",
    since: "Membre engagé",
  },
  {
    id: "team-8",
    name: "Membre de l'équipe",
    role: "À préciser",
    bio: "Membre actif d'ASSION, engagé au quotidien pour la mission de l'association.",
    image: "/images/teams/team2.jpg",
    since: "Membre engagé",
  },
];

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
export const timelineData: TimelineEvent[] = [];
