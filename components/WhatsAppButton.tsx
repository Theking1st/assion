"use client";

import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
}

export default function WhatsAppButton({ phoneNumber = "+237695557179" }: WhatsAppButtonProps) {
  const handleClick = () => {
    const message = encodeURIComponent("Bonjour, je souhaite contacter ASSION pour en savoir plus sur vos activités.");
    window.open(`https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-16 right-3 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-2.5 sm:p-4 shadow-2xl transition-all hover:scale-110 animate-bounce"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-8 sm:h-8" />
    </button>
  );
}
