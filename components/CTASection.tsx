"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: "default" | "inverse";
}

export default function CTASection({
  title,
  description,
  primaryCTA = { text: "Soutenir nos actions", href: "/soutenir" },
  secondaryCTA,
  variant = "default",
}: CTASectionProps) {
  const isInverse = variant === "inverse";

  return (
    <section
      className={`py-20 ${
        isInverse
          ? "bg-linear-to-br from-assion-rose to-assion-rose-dark text-white"
          : "bg-linear-to-br from-assion-rose-light to-assion-indigo-light text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {title}
          </h2>

          <p className="max-w-2xl mx-auto text-lg opacity-90">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href={primaryCTA.href}
              className={`px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all hover:scale-105 flex items-center space-x-2 ${
                isInverse
                  ? "bg-white text-assion-rose"
                  : "bg-linear-to-r from-assion-rose to-assion-rose-dark text-white"
              }`}
            >
              <span>{primaryCTA.text}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className={`px-8 py-4 rounded-lg font-semibold transition-all flex items-center space-x-2 ${
                  isInverse
                    ? "bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20"
                    : "bg-white/10 backdrop-blur-sm border-2 border-assion-rose/30 text-assion-rose hover:bg-assion-rose-light"
                }`}
              >
                <span>{secondaryCTA.text}</span>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
