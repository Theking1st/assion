"use client";

import { motion } from "framer-motion";
import { Heart, GraduationCap, Shirt, Utensils, Gift, HandHeart } from "lucide-react";

interface DonationOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function DonationCard() {
  const donationOptions: DonationOption[] = [
    {
      id: "financial",
      title: "Don financier",
      description: "Soutenez nos actions par un don financier qui nous permet d'acheter les ressources nécessaires.",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      id: "school",
      title: "Fournitures scolaires",
      description: "Offrez des kits scolaires complets aux enfants orphelins et défavorisés.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      id: "clothing",
      title: "Vêtements et chaussures",
      description: "Donnez des vêtements et chaussures neufs ou en bon état pour tous les âges.",
      icon: <Shirt className="w-6 h-6" />,
    },
    {
      id: "food",
      title: "Denrées alimentaires",
      description: "Contribuez à l'alimentation des familles les plus vulnérables.",
      icon: <Utensils className="w-6 h-6" />,
    },
    {
      id: "toys",
      title: "Jouets",
      description: "Apportez de la joie aux enfants en leur offrant des jouets.",
      icon: <Gift className="w-6 h-6" />,
    },
    {
      id: "volunteer",
      title: "Bénévolat",
      description: "Donnez de votre temps pour accompagner nos actions sur le terrain.",
      icon: <HandHeart className="w-6 h-6" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {donationOptions.map((option, index) => (
        <motion.div
          key={option.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-assion-rose"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 bg-linear-to-br from-assion-rose to-assion-rose-dark rounded-xl mb-4 text-white group-hover:scale-110 transition-transform">
            {option.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-assion-rose transition-colors">
            {option.title}
          </h3>
          <p className="text-gray-600">{option.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
