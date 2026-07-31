"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { siteData } from "@/data/site";

export default function ContactForm() {
  const whatsappNumber = siteData.contact.whatsapp?.replace(/\s/g, "").replace("+", "");
  const whatsappMessage = encodeURIComponent(
    "Bonjour ASSION, je souhaite vous contacter pour :"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Contactez-nous</h3>
          <p className="text-gray-600">
            Nous sommes à votre disposition pour répondre à toutes vos questions.
            Contactez-nous directement via WhatsApp pour une réponse rapide.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="shrink-0 w-12 h-12 bg-linear-to-br from-assion-rose to-assion-rose-dark rounded-lg flex items-center justify-center text-white">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Adresse</h4>
              <p className="text-gray-600 wrap-break-word">{siteData.contact.address}</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="shrink-0 w-12 h-12 bg-linear-to-br from-assion-rose to-assion-rose-dark rounded-lg flex items-center justify-center text-white">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Téléphone</h4>
              <p className="text-gray-600 wrap-break-word">{siteData.contact.phone}</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="shrink-0 w-12 h-12 bg-linear-to-br from-assion-rose to-assion-rose-dark rounded-lg flex items-center justify-center text-white">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Email</h4>
              <p className="text-gray-600 wrap-break-word">{siteData.contact.email}</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="shrink-0 w-12 h-12 bg-linear-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">WhatsApp</h4>
              <p className="text-gray-600 wrap-break-word">{siteData.contact.whatsapp}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* WhatsApp Contact Button */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center space-y-6"
      >
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">Contactez-nous via WhatsApp</h3>
          <p className="text-gray-600">
            Cliquez sur le bouton ci-dessous pour nous envoyer un message directement sur WhatsApp.
            Nous répondrons dans les plus brefs délais.
          </p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-md px-8 py-6 bg-linear-to-r from-green-500 to-green-600 text-white rounded-2xl font-semibold hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center space-x-3 text-lg"
        >
          <MessageCircle className="w-8 h-8" />
          <span>Envoyer un message WhatsApp</span>
        </a>

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">
            Ou appelez-nous directement au :
          </p>
          <a
            href={`tel:${siteData.contact.phone}`}
            className="text-lg font-semibold text-assion-rose hover:text-assion-rose-dark transition-colors"
          >
            {siteData.contact.phone}
          </a>
        </div>
      </motion.div>
    </div>
  );
}
