import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import PartnershipForm from "@/components/PartnershipForm";
import { Building2, Globe, Heart, HandHeart, Handshake, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partenariat",
  description:
    "Entreprises, ONG, fondations, institutions : devenez partenaire d'ASSION et amplifiez notre impact auprès des orphelins, des veuves et des personnes vulnérables à Garoua, au Cameroun.",
  keywords: ["ASSION", "partenariat", "entreprises", "ONG", "RSE", "orphelins", "veuves", "Cameroun", "Garoua"],
  openGraph: {
    title: "Devenez Partenaire | ASSION",
    description:
      "Entreprises, ONG, fondations, institutions : devenez partenaire d'ASSION et amplifiez notre impact auprès des orphelins, des veuves et des personnes vulnérables à Garoua, au Cameroun.",
    type: "website",
  },
};

const partnershipTypes = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Entreprises",
    description: "Partenariats RSE, sponsoring d'événements, dons en nature ou financiers.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "ONG et Fondations",
    description: "Collaborations sur des projets communs, partage d'expertise.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Institutions",
    description: "Partenariats avec les institutions publiques et parapubliques.",
  },
  {
    icon: <HandHeart className="w-8 h-8" />,
    title: "Particuliers",
    description: "Parrainage de projets, bénévolat régulier, dons récurrents.",
  },
];

export default function PartnershipPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <Hero
        title="Devenez Partenaire"
        subtitle="Ensemble pour un impact plus grand"
        description="Entreprises, ONG, fondations, institutions : rejoignez-nous pour amplifier notre impact sur les populations vulnérables."
        backgroundImage="/images/projects/journee-internationale-veuve-2025/5.jpg"
        showSecondaryCTA={false}
      />

      {/* Why Partner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Pourquoi devenir partenaire ?"
            title="Les Avantages du Partenariat"
            description="Découvrez les bénéfices d'un partenariat avec ASSION."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 text-assion-rose" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Impact Social Mesurable</h3>
              <p className="text-gray-600">
                Des rapports d'impact réguliers pour mesurer concrètement votre contribution.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <Globe className="w-16 h-16 mx-auto mb-4 text-assion-rose" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visibilité Locale</h3>
              <p className="text-gray-600">
                Une visibilité accrue dans la région et auprès de nos communautés.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <Handshake className="w-16 h-16 mx-auto mb-4 text-assion-rose" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Réseau Solidaire</h3>
              <p className="text-gray-600">
                Intégration à un réseau d'acteurs engagés pour le développement social.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-linear-to-br from-assion-rose-light to-assion-indigo-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Types de partenariat"
            title="Qui Peut Nous Soutenir ?"
            description="Différents types d'organisations peuvent devenir partenaires d'ASSION."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-14 h-14 bg-linear-to-br from-assion-rose to-assion-rose-dark rounded-xl flex items-center justify-center text-white">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Contact partenariat"
            title="Demande de Partenariat"
            description="Remplissez ce formulaire pour nous contacter concernant un partenariat potentiel."
          />

          <div className="max-w-3xl mx-auto">
            <PartnershipForm />
          </div>
        </div>
      </section>

      <CTASection
        title="Prêt à Faire la Différence ?"
        description="Contactez-nous dès aujourd'hui pour discuter des opportunités de partenariat."
        primaryCTA={{ text: "Nous contacter", href: "/contact" }}
        variant="inverse"
      />

      <Footer />
    </div>
  );
}
