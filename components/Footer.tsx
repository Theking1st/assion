"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteData } from "@/data/site";
import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/a-propos", label: "À propos" },
    { href: "/nos-realisations", label: "Nos réalisations" },
    { href: "/actualites", label: "Actualités" },
    { href: "/galerie", label: "Galerie" },
    { href: "/soutenir", label: "Soutenir nos actions" },
    { href: "/partenariat", label: "Devenir partenaire" },
    { href: "/contact", label: "Contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* About */}
          <div className="space-y-3 sm:space-y-4">
            <Link href="/" className="inline-block">
              <Logo 
                variant="full" 
                className="h-10 sm:h-12 w-auto group-hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              {siteData.fullName}
            </p>
            <p className="text-xs sm:text-sm italic text-assion-rose">"{siteData.motto}"</p>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed hidden sm:block">
              {siteData.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Liens rapides</h3>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-assion-rose transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-assion-rose shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-400 wrap-break-word">{siteData.contact.address}</span>
              </li>
              {siteData.contact.phone && siteData.contact.phone !== "[À RENSEIGNER]" && (
                <li className="flex items-center space-x-2 sm:space-x-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-assion-rose shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-400 wrap-break-word">{siteData.contact.phone}</span>
                </li>
              )}
              {siteData.contact.secondaryPhone && (
                <li className="flex items-center space-x-2 sm:space-x-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-assion-rose shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-400 wrap-break-word">{siteData.contact.secondaryPhone}</span>
                </li>
              )}
              {siteData.contact.email && siteData.contact.email !== "[À RENSEIGNER]" && (
                <li className="flex items-center space-x-2 sm:space-x-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-assion-rose shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-400 wrap-break-word">{siteData.contact.email}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Suivez-nous</h3>
            <div className="flex space-x-2 sm:space-x-3">
              {siteData.contact.facebook && siteData.contact.facebook !== "[EN ATTENTE DU LIEN OFFICIEL]" && (
                <a
                  href={siteData.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 bg-gray-800 rounded-lg hover:bg-assion-rose transition-colors group"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              )}
              {siteData.contact.instagram && (
                <a
                  href={siteData.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 bg-gray-800 rounded-lg hover:bg-assion-rose transition-colors group"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              )}
              {siteData.contact.tiktok && (
                <a
                  href={siteData.contact.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 bg-gray-800 rounded-lg hover:bg-assion-rose transition-colors group"
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                  </svg>
                </a>
              )}
            </div>
            <div className="mt-4 sm:mt-6">
              <Link
                href="/soutenir"
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-linear-to-r from-assion-rose to-assion-rose-dark text-white rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105 text-xs sm:text-sm"
              >
                Soutenir nos actions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-xs sm:text-sm text-gray-500">
              © {currentYear} {siteData.fullName}. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Link
                href="/mentions-legales"
                className="text-xs sm:text-sm text-gray-500 hover:text-assion-rose transition-colors"
              >
                Mentions légales
              </Link>
              <button
                onClick={scrollToTop}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800 rounded-lg hover:bg-assion-rose transition-colors text-xs sm:text-sm"
                aria-label="Retour en haut"
              >
                Haut
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
