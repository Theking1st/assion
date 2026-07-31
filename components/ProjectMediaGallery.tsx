"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ImageWithWatermark from "@/components/ImageWithWatermark";

interface ProjectMediaGalleryProps {
  images: string[];
  videos: string[];
  title: string;
}

export default function ProjectMediaGallery({
  images,
  videos,
  title,
}: ProjectMediaGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const showPrev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const showNext = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <div className="space-y-10">
      {/* Photo gallery */}
      {images.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Photos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <motion.button
                key={src}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setLightboxIndex(index)}
                className="relative aspect-square overflow-hidden rounded-xl group"
              >
                <ImageWithWatermark
                  src={src}
                  alt={`${title} - photo ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Video gallery */}
      {videos.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vidéos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videos.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl overflow-hidden shadow-lg bg-black"
              >
                <video
                  src={src}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full aspect-video bg-black"
                >
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-assion-rose-light transition-colors z-10"
              aria-label="Fermer"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 md:left-8 text-white hover:text-assion-rose-light transition-colors z-10"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithWatermark
                src={images[lightboxIndex]}
                alt={`${title} - photo ${lightboxIndex + 1}`}
                width={1200}
                height={800}
                className="w-full h-full max-h-[85vh] object-contain rounded-lg"
              />
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 md:right-8 text-white hover:text-assion-rose-light transition-colors z-10"
              aria-label="Photo suivante"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
