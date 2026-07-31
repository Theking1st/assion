import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadataBase = new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000");

export const metadata: Metadata = {
  title: {
    default: "ASSION - Association de Soutien aux Orphelins, Veuves et Nécessiteux",
    template: "%s | ASSION"
  },
  description: "Ensemble, semons l'espoir, bâtissons l'avenir. ASSION œuvre pour soutenir les orphelins, accompagner les veuves et venir en aide aux personnes les plus vulnérables à Garoua, au Cameroun.",
  keywords: ["ASSION", "orphelins", "veuves", "humanitaire", "Cameroun", "Garoua", "association", "solidarité", "dons"],
  authors: [{ name: "ASSION" }],
  creator: "ASSION",
  publisher: "ASSION",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "ASSION - Association de Soutien aux Orphelins, Veuves et Nécessiteux",
    description: "Ensemble, semons l'espoir, bâtissons l'avenir. ASSION œuvre pour soutenir les orphelins, accompagner les veuves et venir en aide aux personnes les plus vulnérables à Garoua, au Cameroun.",
    type: "website",
    locale: "fr_FR",
    siteName: "ASSION",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ASSION - Association de Soutien aux Orphelins, Veuves et Nécessiteux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASSION - Association de Soutien aux Orphelins, Veuves et Nécessiteux",
    description: "Ensemble, semons l'espoir, bâtissons l'avenir. ASSION œuvre pour soutenir les orphelins, accompagner les veuves et venir en aide aux personnes les plus vulnérables à Garoua, au Cameroun.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className={inter.className}>
        <div className="overflow-x-hidden">
          {children}
        </div>
        <FloatingButtons />
      </body>
    </html>
  );
}
