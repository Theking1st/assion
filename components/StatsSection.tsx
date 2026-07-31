"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/site";

interface StatItem {
  value: number | string;
  label: string;
  suffix?: string;
}

export default function StatsSection() {
  // Filter out stats that are placeholders
  const isPlaceholder = (value: number | string) =>
    typeof value === 'string' && value.includes('[À RENSEIGNER]');

  const stats: StatItem[] = [
    {
      value: siteData.stats.years,
      label: "Années d'engagement",
      suffix: "+",
    },
    {
      value: siteData.stats.beneficiaries,
      label: "Bénéficiaires accompagnés",
      suffix: "+",
    },
    {
      value: siteData.stats.projects,
      label: "Projets réalisés",
      suffix: "+",
    },
    {
      value: siteData.stats.partners,
      label: "Partenaires",
      suffix: "+",
    },
  ].filter(stat => !isPlaceholder(stat.value));

  return (
    <section className="py-16 bg-linear-to-br from-assion-rose-light to-assion-indigo-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
              >
                {stat.value}
                {stat.suffix}
              </motion.div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
