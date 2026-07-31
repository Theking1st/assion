// Gallery data - Généré automatiquement à partir des projets réels d'ASSION
// Fusionne toutes les galeries de projets pour une vue d'ensemble visuelle

import { projectsData } from "./projects";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  date?: string;
  projectId?: string; // Permet de rediriger vers le projet correspondant
}

// Catégories basées sur les catégories de projets réels
export const galleryCategories = [
  { id: "all", label: "Toutes" },
  { id: "Orphelins", label: "Orphelins" },
  { id: "Veuves", label: "Veuves" },
  { id: "Solidarité", label: "Solidarité" },
];

// Fusionne automatiquement toutes les images des galeries de projets
export const galleryData: GalleryImage[] = projectsData.flatMap((project) => {
  return project.gallery.map((imageSrc, index) => ({
    id: `${project.id}-${index}`,
    src: imageSrc,
    alt: `${project.title} - Photo ${index + 1}`,
    category: project.category,
    title: `${project.title} - ${index + 1}/${project.gallery.length}`,
    date: project.date,
    projectId: project.id, // Lien vers le projet
  }));
});
