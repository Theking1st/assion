"use client";

import { MessageCircle, Phone } from "lucide-react";
import { siteData } from "@/data/site";

export default function PartnershipForm() {
  const whatsappNumber = siteData.contact.whatsapp?.replace(/\s/g, "").replace("+", "");
  const whatsappMessage = encodeURIComponent(
    "Bonjour ASSION, je souhaite discuter d'un partenariat avec votre association."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">Contactez-nous pour un partenariat</h3>
        <p className="text-gray-600">
          Nous sommes ouverts aux partenariats avec les entreprises, ONG, institutions et particuliers.
          Contactez-nous directement via WhatsApp pour discuter des opportunités de collaboration.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center space-y-6">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-md px-8 py-6 bg-linear-to-r from-green-500 to-green-600 text-white rounded-2xl font-semibold hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center space-x-3 text-lg"
        >
          <MessageCircle className="w-8 h-8" />
          <span>Discuter sur WhatsApp</span>
        </a>

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">
            Ou appelez-nous directement au :
          </p>
          <a
            href={`tel:${siteData.contact.phone}`}
            className="text-lg font-semibold text-assion-rose hover:text-assion-rose-dark transition-colors wrap-break-word"
          >
            {siteData.contact.phone}
          </a>
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
        <h4 className="font-semibold text-gray-900">Types de partenariats possibles :</h4>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start space-x-2">
            <span className="text-assion-rose mt-1">•</span>
            <span>Soutien financier pour nos projets</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-assion-rose mt-1">•</span>
            <span>Dons en nature (fournitures, équipements)</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-assion-rose mt-1">•</span>
            <span>Mise à disposition de compétences (bénévolat)</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-assion-rose mt-1">•</span>
            <span>Partenariat communication et visibilité</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
