"use client";

import { useState } from "react";
import { Smartphone, Building2, X, HandHeart } from "lucide-react";
import { siteData } from "@/data/site";

export default function DonationButtons() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOrangeMoney = () => {
    window.open(`https://wa.me/${siteData.donations.mobileMoney.replace(/\+/g, "")}?text=${encodeURIComponent("Bonjour, je souhaite faire un don par Orange Money.")}`, "_blank");
  };

  return (
    <div className="fixed bottom-16 left-3 sm:bottom-6 sm:left-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-linear-to-r from-assion-rose to-assion-rose-dark text-white rounded-full p-2.5 sm:p-4 shadow-2xl transition-all hover:scale-110"
          aria-label="Faire un don"
        >
          <HandHeart className="w-5 h-5 sm:w-8 sm:h-8" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 space-y-2 sm:space-y-3 w-64 max-w-[calc(100vw-1.5rem)]">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-gray-900 text-sm sm:text-base">Faire un don</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <button onClick={handleOrangeMoney} className="w-full flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-orange-100 hover:bg-orange-200 rounded-lg transition-colors">
            <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
            <div className="text-left">
              <p className="font-semibold text-gray-900 text-xs sm:text-sm"> Orange Money</p>
              <p className="text-xs text-gray-600">{siteData.donations.mobileMoney}</p>
            </div>
          </button>

          <button className="w-full flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-green-100 hover:bg-green-200 rounded-lg transition-colors opacity-50 cursor-not-allowed">
            <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            <div className="text-left">
              <p className="font-semibold text-gray-900 text-xs sm:text-sm">Virement bancaire</p>
              <p className="text-xs text-gray-600">{siteData.donations.bankName} (En cours)</p>
            </div>
          </button>

          <button
            onClick={() => window.location.href = "/soutenir"}
            className="w-full mt-2 sm:mt-4 px-3 sm:px-4 py-2 sm:py-3 bg-linear-to-r from-assion-rose to-assion-rose-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all text-xs sm:text-sm"
          >
            En savoir plus
          </button>
        </div>
      )}
    </div>
  );
}
