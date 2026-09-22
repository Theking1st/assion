"use client";

import { motion } from "framer-motion";
import { Campaign } from "@/data/campaigns";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImageWithWatermark from "@/components/ImageWithWatermark";

interface CampaignCardProps {
  campaign: Campaign;
}

export default function CampaignCard({ campaign }: CampaignCardProps) {
  return (
    <motion.div
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer w-full"
    >
      <div className="relative aspect-video">
        <ImageWithWatermark
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 sm:p-6">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 bg-assion-rose/10 text-assion-rose rounded-full text-xs font-semibold">
            {campaign.category}
          </span>
        </div>
        <motion.h3 
          className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 wrap-break-word"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          {campaign.title}
        </motion.h3>

        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
          {campaign.description}
        </p>

        <Link
          href={campaign.link}
          className="inline-flex items-center text-assion-rose font-semibold hover:text-assion-rose-dark transition-colors group text-sm sm:text-base"
        >
          <span>{campaign.buttonText}</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
