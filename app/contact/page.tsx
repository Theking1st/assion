"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import MapComponent from "@/components/MapComponent";
import { MapPin, Phone, Mail, Handshake, Clock } from "lucide-react";
import { siteData } from "@/data/site";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero */}
      <Hero
        title="Contactez-Nous"
        subtitle="Nous sommes à votre écoute"
        description="Une question, une suggestion ou envie de nous rejoindre ? N'hésitez pas à nous contacter."
        backgroundImage="/images/projects/don-veuves-4-villages-2024/2.jpg"
        showSecondaryCTA={false}
      />

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Contact"
            title="Envoyez-nous un Message"
            description="Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les plus brefs délais."
          />
          <ContactForm />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-linear-to-br from-assion-rose-light to-assion-indigo-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Localisation"
            title="Nous Trouver"
            description="ASSION est basée à Garoua, au Cameroun. Venez nous rendre visite !"
          />
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video">
              <MapComponent 
                latitude={9.302891079170761}
                longitude={13.386969923898535}
                title="ASSION - Camp SIC Bornouans"
              />
            </div>
          </div>
          <div className="mt-6 text-center space-y-4">
            <p className="text-gray-700 font-medium text-lg">
              <MapPin className="w-6 h-6 inline mr-2 text-assion-rose" />
              {siteData.contact.address}
            </p>
            <div className="bg-assion-rose-light/20 rounded-lg p-4 max-w-2xl mx-auto">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-assion-rose" />
                Comment nous trouver ?
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Le Camp SIC Bornouans se trouve dans le quartier de Bornouans à Garoua. 
                Depuis le centre-ville, prenez la direction vers l'hôpital régional de Garoua. 
                Le camp est situé à proximité de l'hôpital régional, à environ 15 minutes du centre-ville. 
                Demandez au chauffeur de taxi ou aux habitants du quartier pour "Camp SIC Bornouans".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Informations"
            title="Autres Moyens de Contact"
            description="Vous pouvez également nous joindre par téléphone ou email, ou suivre nos réseaux sociaux."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <Phone className="w-16 h-16 mx-auto mb-4 text-assion-rose" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Téléphone</h3>
              <p className="text-gray-600">{siteData.contact.phone}</p>
              {siteData.contact.secondaryPhone && (
                <p className="text-gray-600 mt-1">{siteData.contact.secondaryPhone}</p>
              )}
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <Mail className="w-16 h-16 mx-auto mb-4 text-assion-rose" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">{siteData.contact.email}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <Clock className="w-16 h-16 mx-auto mb-4 text-assion-rose" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Horaires</h3>
              <p className="text-gray-600">Lun - Ven: 8h - 17h</p>
              <p className="text-gray-600">Sam: 9h - 12h</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
