"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import ParallaxWrapper from "@/components/ParallaxWrapper";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  showPrimaryCTA?: boolean;
  showSecondaryCTA?: boolean;
}

export default function Hero({
  title = "Ensemble, construisons un avenir meilleur",
  subtitle = "ASSION œuvre pour soutenir les orphelins, accompagner les veuves et venir en aide aux personnes les plus vulnérables.",
  description = siteData.description,
  backgroundImage = "/images/projects/orphelinat-bidzard-2025/2.jpg",
  showPrimaryCTA = true,
  showSecondaryCTA = true,
}: HeroProps) {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden overflow-x-hidden w-full">
      {/* Background Image with Parallax */}
      <ParallaxWrapper speed={0.3}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
          }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/60 to-assion-rose/40" />
        </div>
      </ParallaxWrapper>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-2"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-assion-rose-light font-medium px-2"
          >
            {subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-2xl sm:max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed px-2"
          >
            {description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 px-4 w-full"
          >
            {showPrimaryCTA && (
              <Link
                href="/nos-realisations"
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-assion-rose to-assion-rose-dark text-white rounded-lg font-semibold hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <span>Découvrir nos réalisations</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
            {showSecondaryCTA && (
              <Link
                href="/soutenir"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center text-sm sm:text-base"
              >
                <span>Soutenir nos actions</span>
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
