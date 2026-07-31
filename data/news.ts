// News/Articles data - Généré automatiquement à partir des projets réels d'ASSION
// Chaque projet devient un article de news pour le blog

import { projectsData } from "./projects";

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  author: string;
  readTime: string;
}

// Transforme les projets en articles de news
export const newsData: NewsArticle[] = projectsData.map((project) => ({
  id: `news-${project.id}`,
  title: project.title,
  excerpt: project.description,
  content: `${project.description}\n\n${project.impact}\n\nLieu : ${project.location}\nBénéficiaires : ${project.beneficiaries}`,
  category: project.category,
  date: project.date,
  image: project.image,
  author: "Équipe ASSION",
  readTime: "3 min",
}));
