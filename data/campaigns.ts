export interface Campaign {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  buttonText: string;
  link: string;
}

export const campaignsData: Campaign[] = [
  {
    id: "soutien-orphelins",
    title: "Soutien aux Orphelins",
    description: "Aidez-nous à soutenir les orphelins dans leurs besoins quotidiens : alimentation, vêtements, soins médicaux et accompagnement psychologique. Votre contribution fait une différence réelle dans leur vie.",
    category: "Enfance",
    image: "/images/projects/orphelinat-saare-jabbaama-2023/1.jpg",
    buttonText: "Soutenir cette campagne",
    link: "/soutenir",
  },
  {
    id: "autonomisation-veuves",
    title: "Autonomisation des Veuves",
    description: "Soutenez les veuves dans leur autonomisation économique par des formations professionnelles, le démarrage de petites activités et l'accès aux microcrédits. Ensemble, redonnons-leur espoir et dignité.",
    category: "Autonomisation",
    image: "/images/projects/journee-internationale-veuve-2025/1.jpg",
    buttonText: "Soutenir cette campagne",
    link: "/soutenir",
  },
  {
    id: "aide-necessiteux",
    title: "Aide aux Personnes Nécessiteuses",
    description: "Campagne générale pour venir en aide aux personnes les plus vulnérables : dons de vivres, soins médicaux, soutien scolaire et accompagnement social. Chaque don compte.",
    category: "Solidarité",
    image: "/images/projects/orphelinat-bidzard-2025/1.jpg",
    buttonText: "Soutenir cette campagne",
    link: "/soutenir",
  },
];
