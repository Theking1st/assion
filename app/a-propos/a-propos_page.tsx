import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import TeamCard from "@/components/TeamCard";
import Logo from "@/components/Logo";
import { Heart, Shield, Award, ScrollText } from "lucide-react";
import { teamData } from "@/data/team";
import { aboutData } from "@/data/about";
import { siteData } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description: "Découvrez ASSION, notre mission, notre histoire et notre équipe. Une association engagée pour soutenir les orphelins, les veuves et les personnes vulnérables à Garoua, au Cameroun.",
  keywords: ["ASSION", "à propos", "mission", "histoire", "équipe", "orphelins", "veuves", "humanitaire", "Cameroun", "Garoua"],
  openGraph: {
    title: "À propos | ASSION",
    description: "Découvrez ASSION, notre mission, notre histoire et notre équipe. Une association engagée pour soutenir les orphelins, les veuves et les personnes vulnérables à Garoua, au Cameroun.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero */}
      <Hero
        title="Qui Sommes-Nous ?"
        subtitle="Découvrez l'histoire et la mission d'ASSION"
        description={siteData.description}
        backgroundImage="/images/projects/orphelinat-saare-jabbaama-2023/1.jpg"
        showSecondaryCTA={false}
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                {aboutData.mission}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                {aboutData.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Nos valeurs"
            title="Ce Qui Nous Anime"
            description="Les valeurs fondamentales qui guident chacune de nos actions."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {aboutData.values.map((value, index) => {
              const icons = [Heart, Shield, Award, ScrollText, Heart];
              const Icon = icons[index % icons.length];
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-linear-to-br from-assion-rose to-assion-rose-dark rounded-xl flex items-center justify-center text-white">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Notre histoire"
            title="Notre Parcours"
            description="Découvrez les étapes clés de l'évolution d'ASSION depuis sa création."
          />
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-assion-rose to-assion-rose-dark hidden md:block" />
            <div className="space-y-12">
              {aboutData.timeline.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 md:px-8">
                    <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
                      <span className="inline-block px-4 py-1 bg-assion-rose-light text-assion-rose rounded-full text-sm font-semibold mb-3">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-linear-to-br from-assion-rose to-assion-rose-dark rounded-full items-center justify-center text-white font-bold z-10">
                    {index + 1}
                  </div>
                  <div className="flex-1 md:px-8" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full History */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Notre histoire"
            title="L'Histoire d'ASSION"
            description="Découvrez l'histoire de notre association et son engagement pour la solidarité."
          />
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
              {aboutData.history}
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Nos objectifs"
            title="Ce Que Nous Visons"
            description="Les objectifs qui guident nos actions et nos engagements."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutData.objectives.map((objective, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 flex items-start space-x-4">
                <div className="shrink-0 w-8 h-8 bg-linear-to-br from-assion-rose to-assion-rose-dark rounded-lg flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-linear-to-br from-assion-rose-light to-assion-indigo-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            subtitle="Reconnaissance officielle"
            title="Statut Juridique"
            description="ASSION est une association légalement reconnue au Cameroun."
          />
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <Logo variant="full" className="h-24 w-auto mx-auto" />
            </div>
            <div className="w-20 h-20 mx-auto mb-4 bg-linear-to-br from-assion-rose to-assion-rose-dark rounded-full flex items-center justify-center">
              <ScrollText className="w-10 h-10 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-4">
              {siteData.recognition.date}
            </p>
            <p className="text-lg text-gray-600 mb-4">
              {siteData.recognition.location}
            </p>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {siteData.recognition.legalStatus}
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Notre équipe"
            title="L'Équipe Dirigeante"
            description="Rencontrez les femmes et les hommes qui font avancer la mission d'ASSION chaque jour."
          />

          {/* Présidente fondatrice — carte mise en avant */}
          {teamData.filter(m => m.featured).map((member, index) => (
            <div key={member.id} className="mb-10 max-w-sm mx-auto lg:max-w-md">
              <TeamCard member={member} index={index} />
            </div>
          ))}

          {/* Reste de l'équipe */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData
              .filter(m => !m.featured)
              .map((member, index) => (
                <TeamCard key={member.id} member={member} index={index + 1} />
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
