"use client";

import { motion } from "framer-motion";

interface SkeletonLoaderProps {
  className?: string;
  width?: string;
  height?: string;
}

export default function SkeletonLoader({ 
  className = "", 
  width = "100%", 
  height = "100%" 
}: SkeletonLoaderProps) {
  return (
    <motion.div
      className={`bg-gray-200 rounded-lg ${className}`}
      style={{ width, height }}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function ImageSkeleton({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <SkeletonLoader className="w-full h-full" />
      <div className="absolute inset-0 bg-linear-to-t from-gray-200/50 to-transparent" />
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative h-56">
        <ImageSkeleton className="w-full h-full" />
      </div>
      <div className="p-6 space-y-4">
        <SkeletonLoader className="h-4 w-1/3" />
        <SkeletonLoader className="h-6 w-3/4" />
        <SkeletonLoader className="h-4 w-full" />
        <SkeletonLoader className="h-4 w-2/3" />
      </div>
    </div>
  );
}
