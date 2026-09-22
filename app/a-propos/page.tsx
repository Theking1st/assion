"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import TeamCard from "@/components/TeamCard";
import ImageWithWatermark from "@/components/ImageWithWatermark";
import { aboutData } from "@/data/about";
import { teamData } from "@/data/team";
import { siteData } from "@/data/site";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <Hero
        title="À Propos d'ASSION"
        subtitle="Notre Mission"
        description="Découvrez l'histoire, la mission et les valeurs qui guident notre engagement pour les orphelins, les veuves et les personnes vulnérables."
        backgroundImage="/images/projects/orphelinat-saare-jabbaama-2023/1.jpg"
        showSecondaryCTA={false}
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                {aboutData.mission}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                {aboutData.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Nos Principes"
            title="Nos Valeurs"
            description="Les valeurs fondamentales qui guident chacune de nos actions et décisions."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historique */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Notre Parcours"
            title="Notre Histoire"
            description="L'évolution d'ASSION depuis sa création jusqu'à aujourd'hui."
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {aboutData.timeline.map((milestone: any, index: number) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="shrink-0 w-12 h-12 bg-assion-rose rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.year}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Nos Engagements"
            title="Nos Objectifs"
            description="Les objectifs que nous nous sommes fixés pour avoir un impact durable."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutData.objectives.slice(0, 3).map((objective: string, index: number) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-gray-700">{objective}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Et {aboutData.objectives.length - 3} autres objectifs...
            </p>
          </div>
        </div>
      </section>

      {/* Reconnaissance Officielle */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Légalité"
            title="Reconnaissance Officielle"
            description="ASSION est une association légalement reconnue au Cameroun."
          />
          <div className="max-w-3xl mx-auto bg-assion-rose-light/20 rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                <img 
                  src="/images/branding/logo-assion.jpg" 
                  alt="ASSION" 
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Statut Juridique</h3>
                <p className="text-gray-700 leading-relaxed">
                  {siteData.recognition.legalStatus}
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600">
                    <strong>Date de reconnaissance :</strong> {siteData.recognition.date}
                  </p>
                  <p className="text-gray-600">
                    <strong>Lieu :</strong> {siteData.recognition.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Notre Équipe"
            title="Les Membres Fondateurs"
            description="Les personnes qui ont fait d'ASSION ce qu'elle est aujourd'hui."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
