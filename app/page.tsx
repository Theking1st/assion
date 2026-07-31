import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import NewsCard from "@/components/NewsCard";
import CampaignCard from "@/components/CampaignCard";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import ImageWithWatermark from "@/components/ImageWithWatermark";
import ScrollReveal from "@/components/ScrollReveal";
import { Heart, BarChart3, Handshake } from "lucide-react";
import { projectsData } from "@/data/projects";
import { newsData } from "@/data/news";
import { galleryData } from "@/data/gallery";
import { campaignsData } from "@/data/campaigns";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <Hero backgroundImage="/images/projects/orphelinat-bidzard-2025/2.jpg" />

      {/* Quick Introduction */}
      <section className="py-12 sm:py-16 md:py-20 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Bienvenue chez ASSION
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Depuis plus de 10 ans, ASSION s'engage sans relâche pour soutenir les orphelins, 
                accompagner les veuves et venir en aide aux personnes les plus vulnérables de notre société. 
                Notre mission : construire un avenir meilleur pour tous.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Campaigns Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0.1}>
            <SectionTitle
              subtitle="Nos campagnes"
              title="Soutenez Nos Actions"
              description="Découvrez nos campagnes de solidarité et contribuez à nos actions humanitaires."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 overflow-hidden">
            {campaignsData.slice(0, 3).map((campaign, index) => (
              <ScrollReveal key={campaign.id} delay={0.2 + index * 0.1}>
                <CampaignCard campaign={campaign} />
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <ScrollReveal delay={0.5}>
              <Link
                href="/campagnes"
                className="inline-flex items-center px-8 py-3 bg-linear-to-r from-assion-rose to-assion-rose-dark text-white rounded-lg font-semibold hover:shadow-2xl transition-all hover:scale-105"
              >
                Découvrir toutes nos campagnes
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Latest Projects */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0.1}>
            <SectionTitle
              subtitle="Nos réalisations"
              title="Dernières Actions"
              description="Découvrez nos dernières réalisations et l'impact concret de nos actions sur le terrain."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projectsData.slice(0, 3).map((project, index) => (
              <ScrollReveal key={project.id} delay={0.2 + index * 0.1}>
                <ProjectCard project={project} index={index} />
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <ScrollReveal delay={0.5}>
              <Link
                href="/nos-realisations"
                className="inline-flex items-center px-8 py-3 bg-linear-to-r from-assion-rose to-assion-rose-dark text-white rounded-lg font-semibold hover:shadow-2xl transition-all hover:scale-105"
              >
                Voir toutes nos réalisations
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <span className="inline-block px-4 py-1 bg-white/10 text-assion-rose-light rounded-full text-sm font-semibold">
                Nos actions en vidéo
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Vivez Nos Interventions
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Quelques moments filmés sur le terrain, au plus près des personnes que nous accompagnons.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {projectsData
              .filter((project) => project.videos.length > 0)
              .slice(0, 3)
              .map((project, index) => (
                <ScrollReveal key={project.id} delay={0.1 + index * 0.1} direction="up">
                  <div className="rounded-2xl overflow-hidden shadow-2xl bg-black">
                    <video
                      src={project.videos[0]}
                      controls
                      playsInline
                      preload="metadata"
                      poster={project.image}
                      className="w-full aspect-video bg-black"
                    >
                      Votre navigateur ne supporte pas la lecture vidéo.
                    </video>
                    <div className="p-4 bg-gray-800">
                      <p className="text-white font-semibold text-sm">{project.title}</p>
                      <p className="text-gray-400 text-xs mt-1">{project.date}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
          </div>
          <div className="text-center mt-12">
            <ScrollReveal delay={0.5}>
              <Link
                href="/nos-realisations"
                className="inline-flex items-center px-8 py-3 bg-linear-to-r from-assion-rose to-assion-rose-dark text-white rounded-lg font-semibold hover:shadow-2xl transition-all hover:scale-105"
              >
                Voir toutes nos réalisations
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-12 sm:py-16 md:py-20 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Galerie photos"
            title="Nos Actions en Images"
            description="Découvrez nos actions à travers notre galerie photo."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
            {galleryData.slice(0, 8).map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              >
                <ImageWithWatermark
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-xs font-semibold">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/galerie"
              className="inline-flex items-center px-8 py-3 bg-linear-to-r from-assion-rose to-assion-rose-dark text-white rounded-lg font-semibold hover:shadow-2xl transition-all hover:scale-105"
            >
              Voir toute la galerie
            </Link>
          </div>
        </div>
      </section>

      {/* Why Support Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Pourquoi nous soutenir ?"
            title="Votre Soutien Compte"
            description="Chaque contribution, quelle qu'elle soit, a un impact réel sur la vie des personnes que nous accompagnons."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-assion-rose to-assion-rose-dark rounded-2xl flex items-center justify-center text-white">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Impact Direct</h3>
              <p className="text-gray-600">
                100% de votre don va directement aux bénéficiaires pour soutenir nos actions sur le terrain.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-assion-rose to-assion-rose-dark rounded-2xl flex items-center justify-center text-white">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparence</h3>
              <p className="text-gray-600">
                Nous rendons compte régulièrement de l'utilisation de nos ressources et de l'impact de nos actions.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-assion-rose to-assion-rose-dark rounded-2xl flex items-center justify-center text-white">
                <Handshake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Durable</h3>
              <p className="text-gray-600">
                Vos soutiens nous permettent de construire des solutions durables pour les populations vulnérables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-12 sm:py-16 md:py-20 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Restez informé"
            title="Dernières Actualités"
            description="Suivez nos dernières activités et actualités pour rester informé de nos actions."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {newsData.slice(0, 3).map((article, index) => (
              <NewsCard key={article.id} article={article} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/actualites"
              className="inline-flex items-center px-8 py-3 bg-linear-to-r from-assion-rose to-assion-rose-dark text-white rounded-lg font-semibold hover:shadow-2xl transition-all hover:scale-105"
            >
              Voir toutes les actualités
            </Link>
          </div>
        </div>
      </section>

      {/* CTA - Donation */}
      <CTASection
        title="Soutenez Nos Actions"
        description="Votre générosité peut changer des vies. Rejoignez-nous dans notre mission de solidarité et d'entraide."
        primaryCTA={{ text: "Faire un don", href: "/soutenir" }}
        secondaryCTA={{ text: "Devenir bénévole", href: "/soutenir" }}
      />

      {/* CTA - Partnership */}
      <CTASection
        title="Devenez Partenaire"
        description="Entreprises, ONG, fondations : ensemble, nous pouvons avoir un impact encore plus grand."
        primaryCTA={{ text: "Découvrir le partenariat", href: "/partenariat" }}
        variant="inverse"
      />

      <Footer />
    </div>
  );
}
