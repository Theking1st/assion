import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import ProjectsList from "@/components/ProjectsList";
import { projectsData } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Réalisations",
  description: "Découvrez les projets que ASSION a menés à bien pour soutenir les orphelins, les veuves et les personnes vulnérables à Garoua, au Cameroun.",
  keywords: ["ASSION", "réalisations", "projets", "orphelins", "veuves", "humanitaire", "Cameroun", "Garoua"],
  openGraph: {
    title: "Nos Réalisations | ASSION",
    description: "Découvrez les projets que ASSION a menés à bien pour soutenir les orphelins, les veuves et les personnes vulnérables à Garoua, au Cameroun.",
    type: "website",
  },
};

export default function RealisationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/projects/orphelinat-bidzard-2025/4.jpg')" }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/60 to-assion-rose/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12 text-center">
            <span className="inline-block px-4 py-1 bg-white/10 text-assion-rose-light rounded-full text-sm font-semibold">
              Nos réalisations
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Nos Projets Réalisés
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed">
              Découvrez les projets que nous avons menés à bien et l'impact concret de nos actions sur le terrain.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsList />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Soutenez Nos Projets"
        description="Votre soutien nous permet de continuer à mener des projets concrets pour les populations vulnérables."
        primaryCTA={{ text: "Faire un don", href: "/soutenir" }}
        secondaryCTA={{ text: "Devenir bénévole", href: "/contact" }}
      />

      <Footer />
    </div>
  );
}
