"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteData } from "@/data/site";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/nos-realisations", label: "Nos réalisations" },
  { href: "/campagnes", label: "Campagnes" },
  { href: "/actualites", label: "Actualités" },
  { href: "/galerie", label: "Galerie" },
];

const moreLinks = [
  { href: "/soutenir", label: "Soutenir" },
  { href: "/partenariat", label: "Partenariat" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Logo 
              variant="full" 
              className="h-10 sm:h-12 w-auto group-hover:scale-105 transition-transform"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-assion-rose focus:ring-offset-2",
                  pathname === link.href
                    ? "text-assion-rose bg-assion-rose-light"
                    : "text-gray-700 hover:text-assion-rose hover:bg-assion-rose-light"
                )}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors text-gray-700 hover:text-assion-rose hover:bg-assion-rose-light flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-assion-rose focus:ring-offset-2"
                aria-label="Menu en savoir plus"
                aria-expanded={isDropdownOpen}
              >
                <span>En savoir plus</span>
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.div>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 sm:w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 hover:text-assion-rose hover:bg-assion-rose-light transition-colors focus:outline-none focus:ring-2 focus:ring-assion-rose focus:ring-offset-2"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              href="/soutenir"
              className="ml-2 sm:ml-4 px-4 sm:px-6 py-2 bg-linear-to-r from-assion-rose to-assion-rose-dark text-white rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-assion-rose focus:ring-offset-2 text-xs sm:text-sm"
            >
              Faire un don
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-assion-rose focus:ring-offset-2"
            aria-label="Menu"
            aria-expanded={isOpen}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t shadow-lg overflow-hidden overflow-x-hidden w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="px-3 sm:px-4 py-4 space-y-2 w-full"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.15 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-assion-rose focus:ring-offset-2",
                      pathname === link.href
                        ? "text-assion-rose bg-assion-rose-light"
                        : "text-gray-700 hover:text-assion-rose hover:bg-assion-rose-light"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.5 }}
                className="pt-3 sm:pt-4 border-t"
              >
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 px-3 sm:px-4">En savoir plus</p>
                {moreLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.55 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-assion-rose focus:ring-offset-2",
                        pathname === link.href
                          ? "text-assion-rose bg-assion-rose-light"
                          : "text-gray-700 hover:text-assion-rose hover:bg-assion-rose-light"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.7 }}
              >
                <Link
                  href="/soutenir"
                  className="block px-3 sm:px-4 py-2 sm:py-3 bg-linear-to-r from-assion-rose to-assion-rose-dark text-white rounded-lg font-medium text-center mt-3 sm:mt-4 focus:outline-none focus:ring-2 focus:ring-assion-rose focus:ring-offset-2 text-sm"
                >
                  Faire un don
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
