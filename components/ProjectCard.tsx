"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import ImageWithWatermark from "@/components/ImageWithWatermark";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer w-full"
    >
      <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-assion-rose/30 to-assion-rose-dark/30 z-10 transition-opacity duration-300 group-hover:opacity-40" />
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
          <motion.span 
            className="px-2 py-1 sm:px-3 sm:py-1 bg-white/90 backdrop-blur-sm text-assion-rose rounded-full text-xs sm:text-sm font-semibold"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {project.category}
          </motion.span>
        </div>
        {project.videos && project.videos.length > 0 && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
            <motion.span
              className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1 bg-white/90 backdrop-blur-sm text-assion-rose rounded-full text-xs sm:text-sm font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="hidden sm:inline">Vidéo</span>
            </motion.span>
          </div>
        )}
        {project.image && !project.image.includes("placeholder") ? (
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <ImageWithWatermark
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ) : (
          <div className="w-full h-full bg-linear-to-br from-assion-rose-light to-assion-indigo-light flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 bg-linear-to-br from-assion-rose to-assion-rose-dark rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">ASSION</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">{project.title}</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-assion-rose">Date :</span>
            <span>{project.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-assion-rose">Lieu :</span>
            <span className="wrap-break-word">{project.location}</span>
          </div>
        </div>

        <motion.h3
          className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-assion-rose transition-colors wrap-break-word"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          {project.title}
        </motion.h3>

        <p className="text-sm sm:text-base text-gray-600 line-clamp-2">{project.description}</p>

        <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 pt-2 border-t">
          <span className="font-semibold text-assion-rose">Bénéficiaires :</span>
          <span className="wrap-break-word">{project.beneficiaries}</span>
        </div>

        <Link
          href={`/nos-realisations/${project.id}`}
          className="inline-flex items-center text-assion-rose font-semibold hover:text-assion-rose-dark transition-colors group/link text-sm sm:text-base"
        >
          <span>Voir le projet</span>
          <motion.div
            className="ml-2"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}
