import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import DonationCard from "@/components/DonationCard";
import CTASection from "@/components/CTASection";
import { BookOpen, Utensils, Shirt, Pill, Package, Gift, HandHeart } from "lucide-react";
import { siteData } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soutenir",
  description: "Soutenez ASSION par des dons financiers ou en nature. Votre aide permet de soutenir les orphelins, les veuves et les personnes vulnérables à Garoua, au Cameroun.",
  keywords: ["ASSION", "soutenir", "dons", "bénévolat", "orphelins", "veuves", "humanitaire", "Cameroun", "Garoua"],
  openGraph: {
    title: "Soutenir | ASSION",
    description: "Soutenez ASSION par des dons financiers ou en nature. Votre aide permet de soutenir les orphelins, les veuves et les personnes vulnérables à Garoua, au Cameroun.",
    type: "website",
  },
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero */}
      <Hero
        title="Soutenez Nos Actions"
        subtitle="Votre générosité peut changer des vies"
        description="Découvrez les différentes manières de soutenir ASSION et d'apporter votre aide aux orphelins, veuves et personnes vulnérables."
        backgroundImage="/images/projects/orphelinat-el-jireh-douala-2025/1.jpg"
        showSecondaryCTA={false}
      />

      {/* Donation Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Comment nous soutenir"
            title="Moyens de Contribution"
            description="Il existe de nombreuses façons de nous soutenir. Choisissez celle qui vous convient le mieux."
          />
          <DonationCard />
        </div>
      </section>

      {/* Financial Donation */}
      <section className="py-20 bg-linear-to-br from-assion-rose-light to-assion-indigo-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Don Financier</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Votre don financier nous permet d'acheter les ressources nécessaires pour nos actions 
                sur le terrain : nourriture, vêtements, fournitures scolaires, matériel médical, etc.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
                <h3 className="font-bold text-gray-900 mb-4">Moyens de paiement disponibles</h3>
                <div className="space-y-2 text-sm">
                  <div className="pt-4 border-t">
                    <div className="flex items-center space-x-3 mb-2">
                      <img 
                        src="/images/branding/orange-money.jpeg" 
                        alt="Orange Money" 
                        className="h-8 w-auto"
                      />
                      <h4 className="font-semibold text-gray-900">Orange Money</h4>
                    </div>
                    <p className="text-sm text-gray-600 ml-11">
                      <strong>Code de don direct (ASSOCIATION ASSION) :</strong> {siteData.donations.orangeMoneyCode}
                    </p>
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-gray-900 mb-2">Virement bancaire</h4>
                    <p className="text-sm text-gray-600">{siteData.donations.bankName}</p>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex items-center space-x-3 mb-2">
                      <img 
                        src="/images/branding/paypal.jpeg" 
                        alt="PayPal" 
                        className="h-8 w-auto"
                      />
                      <h4 className="font-semibold text-gray-900">PayPal</h4>
                    </div>
                    <p className="text-sm text-gray-600 ml-11">{siteData.donations.paypalEmail}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Impact de votre don</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-assion-rose-light rounded-lg">
                  <BookOpen className="w-8 h-8 text-assion-rose" />
                  <div>
                    <p className="font-bold text-gray-900">10 000 FCFA</p>
                    <p className="text-sm text-gray-600">Kit scolaire pour un enfant</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-assion-rose-light rounded-lg">
                  <Utensils className="w-8 h-8 text-assion-rose" />
                  <div>
                    <p className="font-bold text-gray-900">25 000 FCFA</p>
                    <p className="text-sm text-gray-600">Alimentation pour une famille (1 mois)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-assion-rose-light rounded-lg">
                  <Shirt className="w-8 h-8 text-assion-rose" />
                  <div>
                    <p className="font-bold text-gray-900">50 000 FCFA</p>
                    <p className="text-sm text-gray-600">Vêtements pour 5 enfants</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-assion-rose-light rounded-lg">
                  <Pill className="w-8 h-8 text-assion-rose" />
                  <div>
                    <p className="font-bold text-gray-900">100 000 FCFA</p>
                    <p className="text-sm text-gray-600">Soutien médical pour une famille</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Kind Donations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Dons en nature"
            title="Autres Types de Dons"
            description="Vous pouvez également nous soutenir par des dons en nature."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-assion-rose" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fournitures scolaires</h3>
              <p className="text-gray-600 text-sm">
                Cahiers, stylos, manuels, sacs, uniformes
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <Shirt className="w-12 h-12 mx-auto mb-4 text-assion-rose" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vêtements</h3>
              <p className="text-gray-600 text-sm">
                Vêtements pour enfants et adultes, en bon état
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <Package className="w-12 h-12 mx-auto mb-4 text-assion-rose" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chaussures</h3>
              <p className="text-gray-600 text-sm">
                Chaussures pour tous âges et tailles
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <Utensils className="w-12 h-12 mx-auto mb-4 text-assion-rose" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Denrées alimentaires</h3>
              <p className="text-gray-600 text-sm">
                Riz, huile, pâte, conserves non périssables
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <Gift className="w-12 h-12 mx-auto mb-4 text-assion-rose" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jouets</h3>
              <p className="text-gray-600 text-sm">
                Jouets pour apporter de la joie aux enfants
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <HandHeart className="w-12 h-12 mx-auto mb-4 text-assion-rose" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bénévolat</h3>
              <p className="text-gray-600 text-sm">
                Donnez de votre temps pour nos actions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Donations */}
      <section className="py-20 bg-linear-to-br from-assion-rose-light to-assion-indigo-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Vous avez des questions ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Notre équipe est à votre disposition pour vous informer sur les différentes possibilités de soutien.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-linear-to-r from-assion-rose to-assion-rose-dark text-white rounded-lg font-semibold hover:shadow-2xl transition-all hover:scale-105"
          >
            Nous contacter
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Chaque Contribution Compte"
        description="Que ce soit par un don financier, un don en nature ou du bénévolat, votre soutien fait une réelle différence dans la vie des personnes que nous accompagnons."
        primaryCTA={{ text: "Faire un don maintenant", href: "/contact" }}
        variant="inverse"
      />

      <Footer />
    </div>
  );
}
