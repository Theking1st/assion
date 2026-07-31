"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import CampaignCard from "@/components/CampaignCard";
import { campaignsData } from "@/data/campaigns";

export default function CampaignsPage() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <Hero
        title="Campagnes de Solidarité"
        subtitle="Soutenez nos actions"
        description="Découvrez nos campagnes de solidarité et contribuez à nos actions pour les orphelins, les veuves et les personnes vulnérables."
        backgroundImage="/images/projects/orphelinat-saare-jabbaama-2023/1.jpg"
        showSecondaryCTA={false}
      />

      {/* Campaigns */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Nos campagnes"
            title="Actions en Cours"
            description="Soutenez nos campagnes et aidez-nous à poursuivre nos actions humanitaires."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {campaignsData.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-linear-to-br from-assion-rose-light to-assion-indigo-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Rejoignez Notre Action
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            Vous souhaitez nous soutenir ou proposer une nouvelle campagne ? Contactez-nous pour discuter de partenariats.
          </p>
          <button
            onClick={() => window.location.href = "/contact"}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-assion-rose to-assion-rose-dark text-white rounded-lg font-semibold hover:shadow-2xl transition-all hover:scale-105 text-sm sm:text-base"
          >
            Nous contacter
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
