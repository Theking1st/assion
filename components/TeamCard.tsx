"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
  index?: number;
}

const ROLE_COLORS: Record<string, string> = {
  "Présidente Fondatrice": "bg-assion-rose text-white",
  "Vice-Présidente":       "bg-assion-indigo text-white",
  "Secrétaire Général":   "bg-assion-indigo-dark text-white",
  "Trésorière":           "bg-assion-gold text-gray-900",
  "Commissaire aux Comptes": "bg-gray-700 text-white",
  "Chargé de Projet":     "bg-emerald-600 text-white",
};

function getBadgeClass(role: string) {
  return ROLE_COLORS[role] ?? "bg-gray-500 text-white";
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(w => w.length > 2)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join("");
}

export default function TeamCard({ member, index = 0 }: TeamCardProps) {
  const [imgError, setImgError] = useState(false);
  const [showBio, setShowBio]   = useState(false);
  const isPlaceholder = member.name === "Membre de l'équipe";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-400 flex flex-col ${
        member.featured ? "ring-2 ring-assion-rose ring-offset-2" : ""
      }`}
    >
      {/* ── Badge featured ── */}
      {member.featured && (
        <div className="absolute top-3 left-3 z-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-assion-rose px-2.5 py-1 text-[10px] font-bold text-white shadow-md">
            ⭐ Fondatrice
          </span>
        </div>
      )}

      {/* ── Photo ── */}
      <div className="relative h-80 sm:h-96 overflow-hidden bg-linear-to-br from-assion-rose-light to-assion-indigo-light shrink-0">
        {!imgError ? (
          <Image
            src={member.image}
            alt={`Photo de ${member.name}`}
            fill
            sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: "center", objectFit: "cover" }}
            onError={() => setImgError(true)}
            priority={member.featured}
          />
        ) : (
          /* Fallback si l'image ne charge pas */
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <div className="h-20 w-20 rounded-full bg-assion-rose/20 flex items-center justify-center">
              <span className="text-3xl font-bold text-assion-rose">
                {getInitials(member.name)}
              </span>
            </div>
            <p className="text-sm text-gray-500 px-4 text-center">{member.name}</p>
          </div>
        )}

        {/* Gradient overlay bas */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        {/* Nom sur la photo */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-base font-bold text-white leading-tight drop-shadow-sm">
            {isPlaceholder ? "—" : member.name}
          </h3>
          <span className={`mt-1.5 inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold shadow-sm ${getBadgeClass(member.role)}`}>
            {member.role}
          </span>
        </div>
      </div>

      {/* ── Corps ── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Bio */}
        <div className="flex-1">
          <AnimatePresence initial={false}>
            {showBio ? (
              <motion.p
                key="full"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-gray-600 leading-relaxed"
              >
                {member.bio}
              </motion.p>
            ) : (
              <motion.p
                key="clamp"
                initial={{ opacity: 1 }}
                className="text-sm text-gray-600 leading-relaxed line-clamp-2"
              >
                {member.bio}
              </motion.p>
            )}
          </AnimatePresence>

          {member.bio.length > 100 && (
            <button
              onClick={() => setShowBio(v => !v)}
              className="mt-1.5 text-xs font-semibold text-assion-rose hover:text-assion-rose-dark transition-colors"
            >
              {showBio ? "Voir moins ↑" : "Lire plus ↓"}
            </button>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span>{member.since}</span>
          </div>

          {/* Indicateur engagement */}
          <div className="flex items-center gap-1 text-xs text-assion-rose font-semibold">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            Bénévole
          </div>
        </div>
      </div>
    </motion.div>
  );
}
