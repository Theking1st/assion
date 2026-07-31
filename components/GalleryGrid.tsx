"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Camera } from "lucide-react";
import { GalleryImage, galleryCategories } from "@/data/gallery";
import { cn } from "@/lib/utils";
import ImageWithWatermark from "@/components/ImageWithWatermark";

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {galleryCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              selectedCategory === category.id
                ? "bg-linear-to-r from-assion-rose to-assion-rose-dark text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            {image.src && !image.src.includes("placeholder") ? (
              <ImageWithWatermark
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-linear-to-br from-assion-rose-light to-assion-indigo-light flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-2 bg-linear-to-br from-assion-rose to-assion-rose-dark rounded-full flex items-center justify-center text-white">
                    <Camera className="w-6 h-6" />
                  </div>
                  <p className="text-xs text-gray-600">{image.title}</p>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <p className="text-white font-semibold text-sm">{image.title}</p>
                {image.date && <p className="text-gray-300 text-xs">{image.date}</p>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4 overflow-x-hidden overflow-y-auto"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-4xl max-h-screen overflow-hidden my-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-assion-rose-light transition-colors z-10"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-white rounded-2xl overflow-hidden flex flex-col max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-4rem)]">
              <div className="bg-black flex items-center justify-center shrink-0">
                <ImageWithWatermark
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[50vh] sm:max-h-[60vh] object-contain"
                  priority
                />
              </div>
              <div className="p-4 sm:p-6 overflow-y-auto shrink-0">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                {selectedImage.date && (
                  <p className="text-gray-600 mb-2 text-sm sm:text-base">{selectedImage.date}</p>
                )}
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{selectedImage.alt}</p>
                {selectedImage.projectId && (
                  <Link
                    href={`/nos-realisations/${selectedImage.projectId}`}
                    className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-linear-to-r from-assion-rose to-assion-rose-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
                  >
                    Voir le projet complet
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
