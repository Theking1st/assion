"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NewsArticle } from "@/data/news";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  article: NewsArticle;
  index?: number;
}

export default function NewsCard({ article, index = 0 }: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 w-full"
    >
      <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
          <span className="px-2 py-1 sm:px-3 sm:py-1 bg-assion-rose text-white rounded-full text-xs sm:text-sm font-semibold">
            {article.category}
          </span>
        </div>
        {article.image && !article.image.includes("placeholder") ? (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-assion-rose-light to-assion-indigo-light flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 bg-linear-to-br from-assion-rose to-assion-rose-dark rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">ASSION</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">{article.title}</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-500 mb-3">
          <div>
            <span className="font-semibold text-assion-rose">Publié le </span>
            <span>{article.date}</span>
          </div>
          {article.readTime && (
            <>
              <span className="text-gray-300">•</span>
              <div>
                <span className="font-semibold text-assion-rose">Temps de lecture : </span>
                <span>{article.readTime}</span>
              </div>
            </>
          )}
        </div>

        <motion.h3
          className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-assion-rose transition-colors wrap-break-word"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          {article.title}
        </motion.h3>

        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between pt-2 border-t">
          <span className="text-xs sm:text-sm text-gray-500">Par {article.author}</span>
          <Link
            href={`/actualites/${article.id.replace('news-', '')}`}
            className="inline-flex items-center text-assion-rose font-semibold hover:text-assion-rose-dark transition-colors group/link text-sm sm:text-base"
          >
            <span className="hidden sm:inline">Lire la suite</span>
            <span className="sm:hidden">Lire</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
