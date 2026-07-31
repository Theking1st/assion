import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryData } from "@/data/gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Découvrez nos photos et vidéos de nos actions sur le terrain. La galerie ASSION témoigne de nos activités pour soutenir les orphelins et les veuves à Garoua, au Cameroun.",
  keywords: ["ASSION", "galerie", "photos", "vidéos", "orphelins", "veuves", "humanitaire", "Cameroun", "Garoua"],
  openGraph: {
    title: "Galerie | ASSION",
    description: "Découvrez nos photos et vidéos de nos actions sur le terrain. La galerie ASSION témoigne de nos activités pour soutenir les orphelins et les veuves à Garoua, au Cameroun.",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero */}
      <Hero
        title="Galerie"
        subtitle="Nos actions en images"
        description="Découvrez nos actions à travers notre galerie photo. Chaque image raconte une histoire de solidarité et d'espoir."
        backgroundImage="/images/projects/journee-internationale-veuve-2025/3.jpg"
        showSecondaryCTA={false}
      />

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Galerie photos"
            title="Nos Actions en Images"
            description="Parcourez notre galerie pour découvrir nos actions et les moments forts de nos interventions."
          />
          <GalleryGrid images={galleryData} />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-linear-to-br from-assion-rose-light to-assion-indigo-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Explorez nos actions</h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Cette galerie regroupe toutes les photos de nos projets. Cliquez sur une image pour voir les détails 
              et accéder au projet complet. Chaque photo raconte une histoire de solidarité et d'espoir.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
